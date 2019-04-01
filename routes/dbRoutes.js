
var express = require("express"),
  request = require("request"),
  db = require("../models")();
var cheerio = require("cheerio");
var _ = require("underscore");

// // Connect to the Mondo DB
var databaseUri = 'mongodb://localhost/BassSavvyTestDb';

if (process.env.MONGODB_URI) {
  db.connect(process.env.MONGODB_URI);
} else {
  db.connect(databaseUri);
}

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // require("./dbUpdateRoutes")(app);

  // ===============================================================================
  // GET ROUTES
  // ===============================================================================

  // Route to retrieve a single lake's data from db
  app.get("/api/find-one-lake", function (req, res) {
    let lakeName = req.query.lakeName;
    // match off of href because this value has no caps and no spaces
    // matching off lakename alone requires modifying our entire database
    let hrefMatch = "/lakes/" + lakeName;
    db.model("State").find({
      //   state : stateName 
      "lakes.href": hrefMatch
    })
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          // find the current lake
          let currentLake;
          data[0].lakes.forEach(function (e) {
            if (e.href === hrefMatch) {
              currentLake = e;
            }
          })
          //check to see if update is needed
          // set today's date for comparison and find minute difference
          let today = new Date();
          let diffMins = 2400; // default setting to force update
          // check to make sure previous data exists
          if (currentLake.data.length > 0) {
            let msMinute = 60*1000;
            let msDay = 60*60*24*1000;
            let lastUpdate = new Date(currentLake.data[0].date + " " + currentLake.data[0].time);
            let diffDays = Math.floor((today - lastUpdate) / msDay); // calculate diff in days
            diffMins = Math.floor(((today - lastUpdate) % msDay) / msMinute) //calculate diff in minutes
            // set last update based on last data entry
            // lastUpdate = new Date(currentLake.data[0].date + " " + currentLake.data[0].time);
            // let diffMs = (currentDateTime - lastUpdate); // milliseconds between now & last update
            // diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
          }

          // if difference in minutes is greater than lake's refresh interval
          if (diffMins > currentLake.refreshInterval) {
            // update current lake
            // determine which data source and run function
            switch (currentLake.dataSource[0]) {
              case "USGS":
                getUSGSData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.seaLevelDelta, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    updateCurrentLake(data);
                  }
                });
                break;
              case "CUBE":
                getCUBEData(function (error, data) {
                  if (error) {
                    response.send(error);
                    return;
                  } else {
                    // if successful return the data
                    data.forEach(function (lake) {
                      if (lake.lakeName === currentLake.bodyOfWater) {
                        data = lake.data;
                        updateCurrentLake(data);
                      }
                    })
                  }
                })
                break;
              case "TVA":
                getTVAData(currentLake.elevURL, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    updateCurrentLake(data);
                  }
                });
                break;
                case "ACE":
                getACEData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.normalPool, currentLake.elevDataInterval, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    updateCurrentLake(data);
                  }
                });
                break;
              default:
                console.log("Data source could not be found.");
                res.send("Data source could not be found.");
            }
          }
          // if no update is needed, send currentLake to client
          else {
            res.json(currentLake);
          }

          function updateCurrentLake(data) {
            // use the data returned to update the database for currentLake
            db.model("State").findOneAndUpdate(
              { "lakes.bodyOfWater": currentLake.bodyOfWater },
              {
                $addToSet: {
                  "lakes.$.data": { $each: data }
                }
              },
              {
                upsert: true,
                useFindAndModify: false,
                new: true
              }
            )
              .exec(function (err, data) {
                if (err) {
                  res.send("There was a problem querying the database");
                } else {
                  // find the current lake again
                  data.lakes.forEach(function (e) {
                    if (e.href === hrefMatch) {
                      currentLake = e;
                    }
                  })
                  console.log(currentLake.bodyOfWater + " updated (thisLake).");
                  // send current Lake to client
                  res.json(currentLake);
                }
              });
          }
        }
      })
  })

  // Route to retrieve a state's lakes data from db
  app.get("/api/find-one-state", function (req, res) {
    let stateName = req.query.stateName;
    // we can match off statename for this route because the client has done the conversion from id to full name
    db.model("State").find({
      state: stateName
    })
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          let stateLakes = data[0].lakes;
          res.json(stateLakes);
        }
      })
  })

  // route to retrieve all lake data from the database
  app.get("/api/find-all-lakes", function (req, res) {
    // we can match off statename for this route because the client has done the conversion from id to full name
    db.model("State").find({})
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          res.json(data);
        }
      })
  })
}; // End of module.exports







// ===============================================================================
// UPDATE FUNCTIONS
// ===============================================================================



// CUBE UPDATE FUNCTION
// ===============================================================================
// function to get Cube data
function getCUBEData(callback) {
  // Define our data template
  var data = [{
    lakeName: "High Rock",
    data: []
  }, {
    lakeName: "Badin",
    data: []
  }, {
    lakeName: "Tuckertown",
    data: []
  }];
  // Make request for cub carolinas site, returns html
  request("http://ww2.cubecarolinas.com/lake/tabs.php", function (error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // With cheerio, find each <td> on the page
    // (i: iterator. element: the current element)
    $('tr').each(function (i, element) {
      // var value = $(this).text();
      var value = $(element).children().text();

      // Skip over the first few sections of data to get to the stuff we need
      if (i > 7) {
        // If the current value is high rock
        if (value.substring(0, 1) === "H") {
          date = value.substring(9, 19);
          time = new Date(date + " 6:00");
          elev = value.substring(19, 25);
          flow = "N/A";
          data[0].data.push({
            elev: elev,
            time: time,
            flow: "N/A"
          });
        }
        // If the current value is Badin
        if (value.substring(0, 1) === "B") {
          date = value.substring(15, 25);
          time = new Date(date + " 6:00");
          elev = value.substring(25, 31);
          flow = "N/A"
          data[1].data.push({
            elev: elev,
            time: time,
            flow: "N/A"
          });
        }
        // If Tuckertown
        if (value.substring(0, 1) === "T") {
          date = value.substring(10, 20);
          time = new Date(date + " 6:00");
          elev = value.substring(20, 26);
          flow = "N/A"
          data[2].data.push({
            elev: elev,
            time: time,
            flow: "N/A"
          });
        }
      }
    });
    callback(null, data);
  });
};

// function to update the database with cube data
function updateCubeDB() {
  getCUBEData(function (error, data) {
    if (error) {
      response.send(error);
      return;
    } else {
      data.forEach(function (lake) {
        db.model("State").updateMany(
          { "lakes.bodyOfWater": lake.lakeName },
          {
            $addToSet: {
              "lakes.$.data": { $each: lake.data }
            }
          },
          { upsert: true }
        )
          .then(function () {
            console.log(lake.lakeName + " Update Complete (Cube)");
          })
          .catch(function (err) {
            console.log(err);
          });
      })
    }
  })
}

// run the function once and then again every 12 hours 
// updateCubeDB();
// setInterval(updateCubeDB, 43200000);



// USGS UPDATE FUNCTION
// ===============================================================================
// function to get USGS data
function getUSGSData(usgsURL, bodyOfWater, seaLevelDelta, callback) {
  let displayBatch = [];
  let lakePool = 0;
  let elevationAdjust = 0;
  var request = require("request");
  var data = [];

  request(usgsURL, function (error, response, body) {
    if (error) {
      callback(error);
    }

    // clear displayBatch
    displayBatch = [];

    data = JSON.parse(body);

    // Check to see if the sensor is returning data
    if (data.value.timeSeries.length > 0) {
      let valuesIndex = 0;
      // Parse the json data return to find the values we want
      let jIncrement = 1;
      if (bodyOfWater == "Mille Lacs")
        valuesIndex = 1 // For some reason Mille Lacs has changed from index 0 to index 1 02/10/19

      // To retrieve Flows from USGS, we get multiple .timevalues and the variable.variableDecription 
      // value will contain "Discharge" 'Gage' for Flow or Elev data. We must determine which timevalues
      let timeSeriesLength = data.value.timeSeries.length;
      let timeSeriesElevIndex = 0; // default value indicates no data
      let timeSeriesFlowIndex = -1;

      for (i = 0; i < timeSeriesLength; i++) {
        if (data.value.timeSeries[i].variable.variableDescription.includes("Discharge"))
          timeSeriesFlowIndex = i;
        else if (data.value.timeSeries[i].variable.variableDescription.includes("Gage height") ||
          data.value.timeSeries[i].variable.variableDescription.includes("water surface"))
          timeSeriesElevIndex = i;
      }
      // Set up elev and flow Values
      let elevValues = '';
      let flowValues = '';
      elevValues = data.value.timeSeries[timeSeriesElevIndex].values[valuesIndex].value;
      // Reverse the order of our data so most recent date is first
      elevValues.reverse();

      if (timeSeriesFlowIndex >= 0) { // if there is flow data, then set the flowValues
        flowValues = data.value.timeSeries[timeSeriesFlowIndex].values[valuesIndex].value;
        // Reverse the order of our data so most recent date is first
        flowValues.reverse();
      }

      // If reported level is not based on MSL, set the seaLevelDelta to add to the level
      // to convert to MSL based.
      if (seaLevelDelta !== 0)
        elevationAdjust = (parseFloat(elevValues[0].value) + Number(seaLevelDelta)).toFixed(2);
      else {
        if (lakePool !== 0)
          elevationAdjust = elevValues[0].value;
        else elevationAdjust = elevValues[0].value;
      }

      // Set current Date, Time and Elev
      currentElev = elevationAdjust;
      let splitTimeDate = elevValues[0].dateTime.split("T");
      currentDate = splitTimeDate[0];
      currentTime = splitTimeDate[1].substring(0, 5);
      currentDelta = (currentElev - lakePool).toFixed(2);

      // Create our increment and loop through each value
      // For each value push an object into displayBatch
      // Set our counter K variable before incrementing for flowUSGS to use
      // k = j;
      if (elevValues.length <= 100) // If we only get 93 data values when we requested 96 hours, then it's hourly
        jIncrement = 1;
      else if (['Hudson', 'Lawtonka'].includes(bodyOfWater)) jIncrement = 2;
      else jIncrement = 4;
      for (j = 0; j < elevValues.length; j += jIncrement) {
        let element = elevValues[j];
        let elev = element.value;
        // let splitTimeDate = element.dateTime.split("T");
        // let date = splitTimeDate[0].substring(2, 10).replace('-', ' ');
        // let time = splitTimeDate[1].substring(0, 5);
        let timestamp = element.dateTime;
        let flow = "N/A";
        if (timeSeriesFlowIndex >= 0)
          flow = flowValues[j].value;
        // adjust the elev for lakes with data relative to full pool (not from sealevel))
        if (seaLevelDelta !== 0) {
          elev = (parseFloat(elevValues[j].value) + Number(seaLevelDelta)).toFixed(2);
        }

        // format timestamp
        timestamp = new Date(timestamp);

        displayBatch.push({
          time: timestamp,
          elev: elev,
          flow: flow
        });
      }

    }
    callback(null, displayBatch);
  })
}

// function to update the db with usgs data
function updateUSGSDB() {
  // find documents with USGS in the dataSource
  db.model("State").find(
    { "lakes.dataSource": "USGS" }
  )
    .exec(function (err, data) {
      if (err) {
        console.log("There was a problem querying the database");
      } else {
        // loop through the documents
        data.forEach(function (state) {
          state.lakes.forEach(function (lake) {
            // filter each lake once more to see if dataSource array includes USGS
            if (lake.dataSource.includes("USGS")) {
              // run the getData function
              getUSGSData(lake.elevURL, lake.bodyOfWater, lake.seaLevelDelta, function (error, data) {
                if (error) {
                  console.log(error);
                  return;
                  // if successful update the database
                } else {
                  db.model("State").updateMany(
                    { "lakes.bodyOfWater": lake.bodyOfWater },
                    {
                      $addToSet: {
                        "lakes.$.data": { $each: data }
                      }
                    },
                    { upsert: true }
                  )
                    .then(function () {
                      console.log(lake.bodyOfWater + " Update Complete (USGS)");
                    })
                    .catch(function (err) {
                      console.log(err);
                    });
                }
              });
            }
          })
        })
      }
    });
}

// run the function once and then again every 20 minutes 
// updateUSGSDB();
// setInterval(updateUSGSDB, 1200000);



// TVA UPDATE FUNCTION
// ===============================================================================
// function to get TVA data
function getTVAData(newUrl, callback) {
  var request = require("request");
  var data = [];
  var options = {
    url: newUrl,
    type: "xml"
  }
  request(options, function (error, response, body) {
    if (error) {
      callback(error);
    }
    let tvaDate = "";
    let tvaTime = "";
    let tvaElev = "";
    let tvaOutFlow = "";
    let reformatDate = "";
    let tvaDateFormatted = "";

    _.each(body.split("\r\n"), function (line) {
      var splitLine;
      line = line.trim();

      // Check to see if this is a data line by checking for keywords
      if (line.substring(1, 6) == "LOCAL") {
        // It's a date time line, save the date and time
        // Formulate the date 
        // Split the text body into readable lines
        splitLine = line.split(/[ ]+/);
        splitLine = splitLine[0].split(/[>]+/);
        tvaDate = splitLine[1];
        // Formulate the time
        splitLine = line.split(/[ ]+/);
        tvaTime = splitLine[1] + " " + splitLine[2] + " " + splitLine[3].substr(0, 3);
      }

      if (line.substring(1, 8) == "OBS_DAY") {
        // It's a Fontana Date line, isolate and save the date
        splitLine = line.split(/[>]+/);
        splitLine = splitLine[1].split(/[<]+/);
        tvaDate = splitLine[0];
      }

      if (line.substring(1, 7) == "OBS_HR") {
        // It's a Fontana time line, isolate and save the elevation
        splitLine = line.split(/[>]+/);
        splitLine = splitLine[1].split(/[<]+/);
        tvaTime = splitLine[0];
      }

      if (line.substring(1, 6) == "UPSTR") {
        // It's an elevation level line, save the elevation
        splitLine = line.split(/[>]+/);
        splitLine = splitLine[1].split(/[<]+/);
        tvaElev = splitLine[0];
        tvaElev = Number(tvaElev.replace(',', ''));
      }

      if (line.substring(1, 4) == "AVG") {
        splitLine = line.split(/[>]+/);
        splitLine = splitLine[1].split(/[<]+/);

        tvaOutFlow = Number(splitLine[0].trim().replace(",", ""));
      }
      if (line.substring(1, 5) == "/ROW") {
        if (tvaTime == 'noon') tvaTime = '12 PM';

        // format timestamp for database
        let splitTime = tvaTime.split(" ");
        let splitDate = tvaDate.split("/");
        let year = splitDate[2];
        let month = parseInt(splitDate[0]) - 1; //JS counts numbers from 0-11 (ex. 0 = January)
        let day = splitDate[1];
        let hour = splitTime[0];
        if (splitTime[0] === "12" && splitTime[1] === "AM") {
          hour = 0;
        }
        else if (splitTime[0] !== "12" && splitTime[1] === "PM") {
          hour = parseInt(hour) + 12;
        }
        let timestamp = new Date(year, month, day, hour);
        // Push each line into data object
        data.push({
          time: timestamp,
          flow: tvaOutFlow,
          elev: tvaElev
        });
      }
    });
    callback(null, data.reverse());
  });
}

// function to update the db with tva data
function updateTVADB() {

  // find documents with USGS in the dataSource
  db.model("State").find(
    { "lakes.dataSource": "TVA" }
  )
    .exec(function (err, data) {
      if (err) {
        console.log("There was a problem querying the database");
      } else {
        // loop through the documents
        data.forEach(function (state) {
          state.lakes.forEach(function (lake) {
            // filter each lake once more to see if dataSource array includes USGS
            if (lake.dataSource.includes("TVA")) {
              // run the getData function
              getTVAData(lake.elevURL, function (error, data) {
                if (error) {
                  console.log(error);
                  return;
                  // if successful update the database
                } else {
                  db.model("State").updateMany(
                    { "lakes.bodyOfWater": lake.bodyOfWater },
                    {
                      $addToSet: {
                        "lakes.$.data": { $each: data }
                      }
                    },
                    { upsert: true }
                  )
                    .then(function () {
                      console.log(lake.bodyOfWater + " Update Complete (TVA)");
                    })
                    .catch(function (err) {
                      console.log(err);
                    });
                }
              });
            }
          })
        })
      }
    });
}

// run the function once
// updateTVADB();



// ACE (A2W) UPDATE FUNCTION
// ===============================================================================
  // function to get ACE data
    function getACEData(a2wURL, bodyOfWater, normalPool, elevDataInterval, callback) {
      var request = require("request");
      var data = [];
      request(a2wURL, function (error, response, body) {
        if (error) {
          callback(error);
        };

        // Check to see if data returned is undefined
        if (body == undefined) {
          data = "Data service temporarily unavailable. Please check back later (503)";
          callback(null, data);
          // if not undefined proceed with function
        } else {
          // if statement added for bug
          // add this in later: 
          // /<[a-z][\s\S]*>/i.test() 
          //This is Regex to check if a string contains html elements
          if (body.includes("503 Service Temporarily Unavailable")) {
            data = "Data service temporarily unavailable. Please check back later (503)";
            callback(null, data);
          } else {



            data = JSON.parse(body);

            // Insert data processing code from thisLake.js here

            let ACEFlow = false;
            let ACEFlowIndex = -1;
            let ACEElevIndex = 0;
            let ACEElevNum = 0;
            let ACEFlowNum = 0;
            let exceptionLake = false;
            let stageRiver = [];

            if (typeof data[0].Elev == 'undefined' &&
              typeof data[0].Stage !== 'undefined' && bodyOfWater.indexOf("River") >= 0) {

              stageRiver = data; //Copy the data
              data = []; //Clear the data objects
              data.push({
                Elev: stageRiver[0].Stage

              })
            }

            // clear displayBatch
            displayBatch = [];



            //see if A2W is returning Elev Data
            if (typeof data[0].Elev !== 'undefined') {

              // default value of ACEFlow is false, indicating ACE has no Flow Data included
              // default value of ACEFlowIndex is -1, indicating
              // Sometimes OutFlow is index 1, sometimes it's index 2, or 3
              // And then there is Ross Barnett, that doesn't have flow and only has 3 in the array!

              // Automating the AceFlowIndex value identification code to automatically determine based on data (Fix the Ace Outflow problem)
              let aa = 0
              while (aa < data.length && typeof data[aa].Outflow == 'undefined') {
                AceFlowIndex = aa;
                aa++;
              }
              if (aa < data.length && aa > 0) {
                ACEFlow = true;
                ACEFlowIndex = aa;
              } else exceptionLake = true;

              let firstDate = data[ACEElevIndex].Elev[0].time.split(" ");
              let secondDate = data[ACEElevIndex].Elev[1].time.split(" ");
              let dailyACEData = firstDate[1] === secondDate[1]; // default value, this is for when ACE only returns daily readings vs hourly
              let isLakeIstokpoga = bodyOfWater == 'Istokpoga'; // default value, this is when the ACE data is Fucked Up like Istokpoga in Florida, Damn...

              // These have 120 elev data and 5 Flow, ignore flow data
              if (['Truman', 'Pomme De Terre', "Stockton", "Rend",].includes(bodyOfWater))
                ACEFlow = false;

              // Get current Date, Time and Elev
              // Convert ACE date to javascript Date format "12/24/2016 02:00:00"

              // Indexes into data for the first entry

              if (ACEFlow) { // If there are flows, get the data indexes set up for the for loop below.
                if (Date.parse(data[ACEElevIndex].Elev[ACEElevNum].time) !== Date.parse(data[ACEFlowIndex].Outflow[ACEFlowNum].time)) {
                  // Now need to line up the dates

                  // The Flow data comes in on the hour, find the first elev data that is on the hour
                  let elevOnHour = false;

                  while (!elevOnHour) {
                    elevMinIndex = data[ACEElevIndex].Elev[ACEElevNum].time.indexOf(":") + 1;
                    elevMin = data[ACEElevIndex].Elev[ACEElevNum].time.substr(elevMinIndex, 2)
                    if (elevMin == "00")
                      elevOnHour = true;
                    else ACEElevNum++
                  }

                  // Determine if flow date is earlier or later than first elev date
                  // Use the later date as a base and loop thru the earlier date until they match
                  elevTime = Date.parse(data[ACEElevIndex].Elev[ACEElevNum].time);
                  flowTime = Date.parse(data[ACEFlowIndex].Outflow[ACEFlowNum].time);
                  if (elevTime > flowTime)
                    while (elevTime !== flowTime) {
                      ACEFlowNum++;
                      flowTime == Date.parse(data[ACEFlowIndex].Outflow[ACEFlowNum].time);
                    }
                  else
                    while (flowTime > elevTime) {
                      ACEElevNum++;
                      elevTime = Date.parse(data[ACEElevIndex].Elev[ACEElevNum].time);
                    }

                }
              }


              // Convert UTC date to local time
              // let localTime = convertStringToUTC(data[ACEElevIndex].Elev[ACEElevNum].time)

              // Create our increment and loop through each value
              // For each value create our associated table html
              let i = ACEFlowNum;
              let flow = 0;
              let lastHourDisplayed = -1; // for Istokpoga
              let displayFlowData = true; // This is for this loop, some lakes we have to sort through the times (Istokpoga, FL)
              let jIncrement = 1; // default to 1 hour between elevation data

              if (typeof elevDataInterval !== 'undefined') 
              // Currently only for Jordan, when Flow Data is missing. This uses data in lakeData.js (elevDataInterval)
              // to set the jIncrement to 4 when there is no Flow Data. This stops Jordan elev data from being displayed
              // every 15 minutes instead of on the hour. Others may require this in the future (ie Kerr).
                jIncrement = Number(elevDataInterval);

              // if the elev length is more than 3x the flow length, it's probably 
              // elevs every 15 minutes and flows on the hour 4:1 ratio
              if (ACEFlow && (data[ACEElevIndex].Elev.length / 3 > data[ACEFlowIndex].Outflow.length))
                jIncrement = 4; // Set to 15 minutes between elevation data

              // Lower the increment if the elev data is daily
              if (dailyACEData)
                jIncrement = 1;

              if (['Eufaula', 'Brantley', 'Columbus'].includes(bodyOfWater)) // Eufaula is every 15 minutes with no OutFlow
                if (normalPool < 189) { // This identfies Eufaula AL from Eufaula, OK
                  jIncrement = 4;
                  exceptionLake = true; // set the exceptionLake flag to bypass the flow check in the for loop below
                }
              if (['Brantley'].includes(bodyOfWater)) // Brantley is every 15 minutes with no OutFlow
                jIncrement = 4;

              if (['Red Rock'].includes(bodyOfWater)) // Red Rock is every 30 minutes
                jIncrement = 2;

              for (j = ACEElevNum; j < data[ACEElevIndex].Elev.length; j = j + jIncrement) {
                // make sure the times match for elev and flow
                if (!exceptionLake && i < data[ACEFlowIndex].Outflow.length - 1) {
                  if (Date.parse(data[ACEElevIndex].Elev[j].time) !== Date.parse(data[ACEFlowIndex].Outflow[i].time)) {
                    if (ACEFlow) {
                      // Do the elev and flow dates match
                      while (Date.parse(data[ACEElevIndex].Elev[j].time) !== Date.parse(data[ACEFlowIndex].Outflow[i].time)) {
                        // If not, need to line up the dates

                        //Which one is behind
                        if (Date.parse(data[ACEElevIndex].Elev[j].time) <= Date.parse(data[ACEFlowIndex].Outflow[i].time)) {
                          // The Flow data comes in on the hour, find the next elev data that is on the hour
                          let elevOnHour = false;

                          while (!elevOnHour) { // until we find an on the hour
                            // get the index at the 'minutes'
                            elevMinIndex = data[ACEElevIndex].Elev[j + 1].time.indexOf(":") + 1;
                            // retrieve the 'minutes'
                            elevMin = data[ACEElevIndex].Elev[j + 1].time.substr(elevMinIndex, 2)
                            if (elevMin == "00") { // is it on the hour
                              elevOnHour = true; // end while loop
                              j++
                            } else j++ // increment and loop
                          }
                        } else i++
                      }
                    }
                  }
                }

                let elev = data[ACEElevIndex].Elev[j].value.toFixed(2);
                let timestamp = convertStringToUTC(data[ACEElevIndex].Elev[j].time);
                flow = 'No data'; // default value, this differentiates no reported data from no data available (N/A)
                if (ACEFlow)
                  if (i < data[ACEFlowIndex].Outflow.length) {

                    if (data[ACEFlowIndex].Outflow[i].value !== -99)
                      flow = data[ACEFlowIndex].Outflow[i].value // commented out for production + " " + convertStringToUTC(data[ACEFlowIndex].Outflow[i].time);

                  } else flow = 'Missing'; // This differentiate this condition vs N/A or No data


                let splitLine = data[ACEElevIndex].Elev[j].time.split(/[ ]+/);
                splitLine = splitLine[1].split(/[:]+/);

                if (isLakeIstokpoga == true && splitLine[0] == lastHourDisplayed) {
                  displayFlowData = false;
                } else {
                  lastHourDisplayed = splitLine[0];
                  displayFlowData = true;
                }              

                if (displayFlowData) {
                  if (!ACEFlow) flow = "N/A" // no data available
                  displayBatch.push({
                    time: timestamp,
                    elev: elev,
                    flow: flow
                  });

                }

                i++;

              }

            }

            // End of data processing code from thisLake.js

            callback(null, displayBatch.reverse());
          }
        }
      })
    // Date Conversion functions from thisLake.js


    function getMonthNumberFromString(mon) {

      var d = Date.parse(mon + "1, 2012");
      if (!isNaN(d)) {
        return new Date(d).getMonth() + 1;
      }
      return -1;
    }

    function convertStringToUTC(convertedTime) {
      // Convert UTC date to local time
      // Convert to ISO format first. '2011-04-11T10:20:30Z'
      convertedTime = convertedTime.trim();
      let convertedMonth = convertedTime.substring(3, 6);
      convertedMonth = getMonthFromString(convertedMonth);
      convertedMonth = convertedMonth.toString();
      if (convertedMonth.length == 1) convertedMonth = "0" + convertedMonth;
      //Convert the string to UTC (GTM)
      convertedTime = convertedTime.substring(7, 11) + "-" + convertedMonth + "-" + convertedTime.substring(0, 2) + "T" + convertedTime.substring(12, 21) + "Z";
      //Convert the string to a Date
      //convertedTime = new Date(convertedTime);
      //Might need this call in ater
      convertedTime = new Date(convertedTime);
      //Convert the Date to local time (client)
      // convertedTime = convertedTime.toString(convertedTime);
      // Time now looks like "Thu Dec 27 2018 11:15:00 GMT-0500 (Eastern Standard Time)"
      // Substring the pieces we want to display
      return (convertedTime)
    }

    function getMonthFromString(mon) {
      return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1
    }

    function convertUTCDate(timestamp) {
      // Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
      var date = new Date(timestamp * 1000);

      var year = date.getUTCFullYear();
      var month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
      var day = date.getUTCDate();
      var hours = date.getUTCHours();
      var minutes = date.getUTCMinutes();
      var seconds = date.getUTCSeconds();

      month = (month < 10) ? '0' + month : month;
      day = (day < 10) ? '0' + day : day;
      hours = (hours < 10) ? '0' + hours : hours;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    }
  }; 

  function updateACEDB() {
    // update db
  }



