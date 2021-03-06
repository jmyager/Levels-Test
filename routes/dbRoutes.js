const express = require("express"),
  db = require("../models")();

// Import all data source update functions
const ace = require('./updateRoutes/getACEData');
const acewilm = require('./updateRoutes/getACEWilmData');
const apc = require('./updateRoutes/getAPCData');
const cube = require("./updateRoutes/getCUBEData");
const de = require('./updateRoutes/getDEData');
const duke = require("./updateRoutes/getDUKEData");
const gpc = require('./updateRoutes/getGPCData');
const sjrwmd = require("./updateRoutes/getSJRWMDData");
const tva = require("./updateRoutes/getTVAData");
const twdb = require("./updateRoutes/getTWDBData");
const usgs = require("./updateRoutes/getUSGSData");
const uslakes = require("./updateRoutes/getUSLAKESData");
const request = require("request"); // for weather data
// Import update functions
var update = require('./updateFunctions');



// // Connect to the Mondo DB
const databaseUri = 'mongodb://localhost/BassSavvyTestDb';

if (process.env.MONGODB_URI) {
  db.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  });
  console.log("MongoDB connection successful");
} else {
  db.connect(databaseUri, {
    useNewUrlParser: true
  });
  console.log("MongoDB connection successful");
}

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // ===============================================================================
  // GET ROUTES
  // ===============================================================================

  // Route to retrieve a single lake's data from db
  app.get("/api/find-one-lake", function (req, res) {
    let lakeName = req.query.lakeName;
    // match off of href because this value has no caps and no spaces
    // matching off lakename alone requires modifying our entire database
    let hrefMatch = "/lakes/" + lakeName;
    db.model("Lake").find({
        "href": hrefMatch
      })
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          if (data.length == 0) {
            // if no lake was found in the database, lake does not exist
            res.status(404).send("404: Page not Found");
          } else {
            // set currentLake equal to returned lake document
            let currentLake = data[0];

            //check to see if update is needed (function returns true if update is needed)
            if (update.checkForUpdate(currentLake.bodyOfWater, currentLake.lastRefresh, currentLake.refreshInterval, currentLake.data.length)) {
              // update current lake
              // determine which data source and run function
              switch (currentLake.dataSource[0]) {

                case "ACE":
                  ace.getACEData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.normalPool, currentLake.elevDataInterval, function (error, ACEdata) {
                    if (error) {
                      console.log(ACEdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, ACEdata, function (error, ACElakeDataFlag, ACEdata) {
                        if (error) {
                          console.log(ACEdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(ACEdata);
                        }
                      })
                    }
                  });
                  break;

                case "ACEWilm":
                  acewilm.getACEWilmData(currentLake.elevURL, currentLake.bodyOfWater, function (error, ACEWilmdata) {
                    if (error) {
                      console.log(ACEWilmdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, ACEWilmdata, function (error, ACEWilmlakeDataFlag, ACEWilmdata) {
                        if (error) {
                          console.log(ACEWilmdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(ACEWilmdata);
                        }
                      })
                    }
                  });
                  break;

                case "APC":
                  apc.getAPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, APCdata) {
                    if (error) {
                      console.log(APCdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, APCdata, function (error, APClakeDataFlag, APCdata) {
                        if (error) {
                          console.log(APCdata);
                        } else {
                          // send updated lake to client
                          res.json(APCdata);
                        }
                      })
                    }
                  });
                  break;

                case "CUBE":
                  cube.getCUBEData(currentLake.bodyOfWater, function (error, CUBEdata) {
                    if (error) {
                      response.send(CUBEdata);
                    } else {
                      // if successful return the data
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, CUBEdata, function (error, CUBElakeDataFlag, CUBEdata) {
                        if (error) {
                          console.log(CUBEdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(CUBEdata);
                        }
                      })
                    }
                  })
                  break;

                case "DE":
                  de.getDEData(currentLake.elevURL, currentLake.bodyOfWater, function (error, DEdata) {
                    if (error) {
                      console.log(DEdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, DEdata, function (error, DElakeDataFlag, DEdata) {
                        if (error) {
                          console.log(DEdata);
                        } else {
                          // send updated lake to client
                          res.json(DEdata);
                        }
                      })
                    }
                  });
                  break;

                case "DUKE":
                  duke.getDUKEData(currentLake.bodyOfWater, currentLake.elevURL, currentLake.seaLevelDelta, function (error, DUKEdata) {
                    if (error) {
                      console.log(DUKEdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, DUKEdata, function (error, DUKElakeDataFlag, DUKEdata) {
                        if (error) {
                          console.log(DUKEdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(DUKEdata);
                        }
                      })
                    }
                  });
                  break;

                case "GPC":
                  gpc.getGPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, GPCdata) {
                    if (error) {
                      console.log(GPCdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, GPCdata, function (error, GPClakeDataFlag, GPCdata) {
                        if (error) {
                          console.log(GPCdata);
                        } else {
                          // send updated lake to client
                          res.json(GPCdata);
                        }
                      })
                    }
                  });
                  break;

                case "SJRWMD":
                  sjrwmd.getSJRWMDData(currentLake.bodyOfWater, currentLake.elevURL, function (error, SJRWMDdata) {
                    if (error) {
                      console.log(SJRWMDdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, SJRWMDdata, function (error, SJRWMDlakeDataFlag, SJRWMDdata) {
                        if (error) {
                          console.log(SJRWMDdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(SJRWMDdata);
                        }
                      })
                    }
                  });
                  break;

                case "TVA":
                  tva.getTVAData(currentLake.elevURL, currentLake.bodyOfWater, function (error, TVAdata) {
                    if (error) {
                      console.log(TVAdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, TVAdata, function (error, TVAlakeDataFlag, TVAdata) {
                        if (error) {
                          console.log(TVAdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(TVAdata);
                        }
                      })
                    }
                  });
                  break;

                case "TWDB":
                  twdb.getTWDBData(currentLake.bodyOfWater, currentLake.elevURL, function (error, TWDBdata) {
                    if (error) {
                      console.log(TWDBdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, TWDBdata, function (error, TWDBlakeDataFlag, TWDBdata) {
                        if (error) {
                          console.log(TWDBdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(TWDBdata);

                        }
                      })
                    }
                  });
                  break;

                case "USLAKES":
                  uslakes.getUSLAKESData(currentLake.bodyOfWater, function (error, USLAKESdata) {
                    if (error) {
                      console.log(USLAKESdata);
                    } 
                    else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, USLAKESdata, function (error, USLAKESlakeDataFlag, data) {
                        if (error) {
                          console.log(USLAKESdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(USLAKESdata);
                        }
                      })
                    }
                  });
                  break;

                case "USGS":
                  usgs.getUSGSData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.seaLevelDelta, function (error, USGSdata) {
                    if (error) {
                      console.log(USGSdata);
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, USGSdata, function (error, USGSlakeDataFlag, USGSdata) {
                        if (error) {
                          console.log(USGSdata);
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(USGSdata);
                        }
                      })
                    }
                  });
                  break;

                default:
                  console.log(`No data source for ${currentLake.bodyOfWater}`);
                  res.json(currentLake);
                //console.log("Data source could not be found.");
                //res.send("Data source could not be found.");
              }
            }
            // if no update is needed, send currentLake to client
            else {
              currentLake.data.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.time) - new Date(a.time);
              });
              res.json(currentLake);
              //console.log(`No single lake update needed for ${currentLake.bodyOfWater}`);
            }
          }
        }
      })
  })

  // Route to retrieve a state's lakes data from db
  app.get("/api/find-one-state", function (req, res) {
    let stateName = req.query.stateName;
    // we can match off statename for this route because the client has done the conversion from id to full name
    db.model("Lake").find({
        "state": stateName
      })
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          let stateLakes = data;
          res.json(stateLakes);
        }
      })
  })

  // route to retrieve all lake data from the database
  app.get("/api/find-all-lakes", function (req, res) {
    // we can match off statename for this route because the client has done the conversion from id to full name
    db.model("Lake").find({})
      .exec(function (err, data) {
        if (err) {
          res.send("There was a problem querying the database");
        } else {
          res.json(data);
        }
      })
  })
}; // End of module.exports


let totDataUpdate = 0;
var totUpdateCounter = 0;
var totCounter = 0;
let updateCounter = 0;
let dataUpdated = 0;

// function to update all lakes in the database
function updateAllLakes() {
  db.model("Lake").find({})
    .exec(function (err, data) {
      if (err) {
        res.send("There was a problem querying the database");
      } else {
        // initiate counter
        let i = 0;
        // start timer
        var timer = setInterval(function () {
          // set currentLake equal to returned lake document
          let currentLake = data[i];

          //check to see if update is needed (function returns true if update is needed)
          if (update.checkForUpdate(currentLake.lastRefresh, currentLake.refreshInterval, currentLake.data.length)) {
            //console.log(`lastRefresh ${currentLake.lastRefresh} data.length ${currentLake.data.length} ${currentLake.bodyOfWater}`)
            // update current lake
            // determine which data source and run function
            //console.log(`${i+1}. Update needed for ${currentLake.bodyOfWater} (${currentLake.dataSource[0]})`);
            updateCounter++;
            switch (currentLake.dataSource[0]) {

              case "ACE":
                ace.getACEData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.normalPool, currentLake.elevDataInterval, function (error, ACEdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " ACE data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, ACEdata, function (error, ACElakeDataFlag, ACEdata) {
                      if (error) {
                        console.log(ACEdata);
                      }
                      if (ACElakeDataFlag) {
                        dataUpdated++;
                        getWeatherData = true;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "ACEWilm":
                acewilm.getACEWilmData(currentLake.elevURL, currentLake.bodyOfWater, function (error, ACEWilmdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " ACEWilm data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, ACEWilmdata, function (error, ACEWilmlakeDataFlag, ACEWilmdata) {
                      if (error) {
                        console.log(ACEWilmdata);
                      }
                      if (ACEWilmlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "APC":
                apc.getAPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, APCdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " APC data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, APCdata, function (error, APClakeDataFlag, APCdata) {
                      if (error) {
                        console.log(APCdata);
                      }
                      if (APClakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "CUBE":
                cube.getCUBEData(currentLake.bodyOfWater, function (error, CUBEdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " CUBE data error")
                  } else {
                    // if successful return the data
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, CUBEdata, function (error, CUBElakeDataFlag, CUBEdata) {
                      if (error) {
                        console.log(CUBEdata);
                      }
                      if (CUBElakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                })
                break;

              case "DE":
                de.getDEData(currentLake.elevURL, currentLake.bodyOfWater, function (error, DEdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " DE data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, DEdata, function (error, DElakeDataFlag, DEdata) {
                      if (error) {
                        console.log(DUKEdata);
                      }
                      if (DElakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "DUKE":
                duke.getDUKEData(currentLake.bodyOfWater, currentLake.elevURL, currentLake.seaLevelDelta, function (error, DUKEdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " DUKE data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, DUKEdata, function (error, DUKElakeDataFlag, DUKEdata) {
                      if (error) {
                        console.log(DUKEdata);
                      }
                      if (DUKElakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "GPC":
                gpc.getGPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, GPCdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " GPC data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, GPCdata, function (error, GPClakeDataFlag, GPCdata) {
                      if (error) {
                        console.log(GPCdata);
                      }
                      if (GPClakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "SJRWMD":
                sjrwmd.getSJRWMDData(currentLake.bodyOfWater, currentLake.elevURL, function (error, SJRWMDdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " SKRWMD data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, SJRWMDdata, function (error, SJRWMDlakeDataFlag, SJRWMDdata) {
                      if (error) {
                        console.log(SJRWMDdata);
                      }
                      if (SJRWMDlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "TVA":
                tva.getTVAData(currentLake.elevURL, currentLake.bodyOfWater, function (error, TVAdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " TVA data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, TVAdata, function (error, TVAlakeDataFlag, TVAdata) {
                      if (error) {
                        console.log(TVAdata);
                      }
                      if (TVAlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "TWDB":
                twdb.getTWDBData(currentLake.bodyOfWater, currentLake.elevURL, function (error, TWDBdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " TWDB data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, TWDBdata, function (error, TWDBlakeDataFlag, TWDBdata) {
                      if (error) {
                        console.log(TWDBdata);
                      }
                      if (TWDBlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "USLAKES":
                uslakes.getUSLAKESData(currentLake.bodyOfWater, function (error, USLAKESdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " USLAKES data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, USLAKESdata, function (error, USLAKESlakeDataFlag, USLAKESdata) {
                      if (error) {
                        console.log(USLAKESdata);
                      }
                      if (USLAKESlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              case "USGS":
                usgs.getUSGSData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.seaLevelDelta, function (error, USGSdata) {
                  if (error) {
                    console.log(currentLake.bodyOfWater + " USGS data error")
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, USGSdata, function (error, USGSlakeDataFlag, USGSdata) {
                      if (error) {
                        console.log(USGSdata);
                      }
                      if (USGSlakeDataFlag) {
                        dataUpdated++;
                        //console.log(`Updated ${currentLake.bodyOfWater}`)
                      } //else console.log(`No Update ${currentLake.bodyOfWater}`)
                    })
                  }
                });
                break;

              default:
                //console.log(`No data source for ${currentLake.bodyOfWater}`);
                //res.send("Data source could not be found.");
            }
          }
          // if no update is needed log to console
          else {

            //  console.log(`${i}. No update needed for ${currentLake.bodyOfWater} (${currentLake.dataSource[0]})`);
          }

          ///*
          //Retrieve Weather Data 
          //Weather data URLs
          let apiKey = "d620419cfbb975f425c6262fefeef8f3";
          let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentLake.lat + "&lon=" + currentLake.long + "&units=imperial&APPID=" + apiKey;
          let forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + currentLake.lat + "&lon=" + currentLake.long + "&units=imperial&APPID=" + apiKey;

          /*        //Fetch weather forecast data
          //Fetch current weather Data       
          request(forecastUrl, function (error, response, forecast) {
            if (error) {
              console.log(error);
            } else {
              //process forecast weather data
            console.log(forecast)
            }
          })
*/

          // increment counter
          i++;

          // if counter hits the end of data reset
          if (i > data.length - 1) {
            console.log(`Report for ${Date()}`)
            console.log(`# of data updates is ${dataUpdated} of ${updateCounter} = ${((dataUpdated/updateCounter)*100).toFixed(2)}%`)

            console.log(`# of data updates is ${dataUpdated} of ${i} = ${((dataUpdated/i)*100).toFixed(2)}%`)
            totUpdateCounter = totUpdateCounter + updateCounter;
            totCounter = totCounter + i;
            totDataUpdate = totDataUpdate + dataUpdated;
            console.log(`# of total updates is ${totUpdateCounter} of ${totCounter} = ${((totUpdateCounter/totCounter)*100).toFixed(2)}%`);
            console.log(`# of total data updates is ${totDataUpdate} of ${totUpdateCounter} = ${((totDataUpdate/totUpdateCounter)*100).toFixed(2)}%`);

            // Clear counters now, this allows any late returns to get counted on the next iteration
            // SJWMD is usually slow to return data

            updateCounter = 0;
            dataUpdated = 0;
            clearInterval(timer);
            // wait for the final update to finish before resetting
            setTimeout(function () {
              updateAllLakes();
            }, 14 * 60000); // wait 14 minutes (plus 27 minutes @ .5 second interval to cycle through 213 lakes)
          }

        }, .5 * 1000); // half second interval
      }
    })
}

// run update function when server starts
updateAllLakes();