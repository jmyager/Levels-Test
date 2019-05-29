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
            if (update.checkForUpdate(currentLake.lastRefresh, currentLake.refreshInterval, currentLake.data.length)) {
              // update current lake
              // determine which data source and run function
              switch (currentLake.dataSource[0]) {

                case "ACE":
                  ace.getACEData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.normalPool, currentLake.elevDataInterval, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "ACEWilm":
                  acewilm.getACEWilmData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "APC":
                  apc.getAPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "CUBE":
                  cube.getCUBEData(currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      response.send(error);
                      return;
                    } else {
                      // if successful return the data
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  })
                  break;

                case "DE":
                  de.getDEData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "DUKE":
                  duke.getDUKEData(currentLake.bodyOfWater, currentLake.elevURL, currentLake.seaLevelDelta, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "GPC":
                  gpc.getGPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "SJRWMD":
                  sjrwmd.getSJRWMDData(currentLake.bodyOfWater, currentLake.elevURL, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "TVA":
                  tva.getTVAData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "TWDB":
                  twdb.getTWDBData(currentLake.bodyOfWater, currentLake.elevURL, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);

                        }
                      })
                    }
                  });
                  break;

                case "USLAKES":
                  uslakes.getUSLAKESData(currentLake.bodyOfWater, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
                        }
                      })
                    }
                  });
                  break;

                case "USGS":
                  usgs.getUSGSData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.seaLevelDelta, function (error, data) {
                    if (error) {
                      console.log(error);
                      return;
                      // if successful return the data
                    } else {
                      // update the current lake
                      update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                        if (error) {
                          console.log(error);
                          return;
                          // if successful return the data
                        } else {
                          // send updated lake to client
                          res.json(data);
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
let oldLastRefresh = 0;
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
                ace.getACEData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.normalPool, currentLake.elevDataInterval, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    oldLastRefresh = currentLake.lastRefresh;
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "ACEWilm":
                acewilm.getACEWilmData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "APC":
                apc.getAPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "CUBE":
                cube.getCUBEData(currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                  } else {
                    // if successful return the data
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                })
                break;

              case "DE":
                de.getDEData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "DUKE":
                duke.getDUKEData(currentLake.bodyOfWater, currentLake.elevURL, currentLake.seaLevelDelta, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "GPC":
                gpc.getGPCData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "SJRWMD":
                sjrwmd.getSJRWMDData(currentLake.bodyOfWater, currentLake.elevURL, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "TVA":
                tva.getTVAData(currentLake.elevURL, currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "TWDB":
                twdb.getTWDBData(currentLake.bodyOfWater, currentLake.elevURL, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "USLAKES":
                uslakes.getUSLAKESData(currentLake.bodyOfWater, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
                    })
                  }
                });
                break;

              case "USGS":
                usgs.getUSGSData(currentLake.elevURL, currentLake.bodyOfWater, currentLake.seaLevelDelta, function (error, data) {
                  if (error) {
                    console.log(error);
                    return;
                    // if successful return the data
                  } else {
                    // update the current lake
                    update.updateAndReturnOneLake(currentLake.bodyOfWater, currentLake.lastRefresh, data, function (error, data) {
                      if (error) {
                        console.log(error);
                        return;
                      }
                      if (oldLastRefresh !== currentLake.lastRefresh)
                        dataUpdated++;
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

          // increment counter
          i++;

          // if counter hits the end of data reset
          if (i > data.length - 1) {
            console.log(Date())
            console.log(`# of data updates is ${dataUpdated} of ${updateCounter} = ${((dataUpdated/updateCounter)*100).toFixed(2)}%`)
            //console.log (`# of updates is ${updateCounter} of ${i} = ${((updateCounter/i)*100).toFixed(2)}%`);
            console.log(`# of data updates is ${dataUpdated} of ${i} = ${((dataUpdated/i)*100).toFixed(2)}%`)
            totUpdateCounter = totUpdateCounter + updateCounter;
            totCounter = totCounter + i;
            totDataUpdate = totDataUpdate + dataUpdated;
            console.log(`# of total updates is ${totUpdateCounter} of ${totCounter} = ${((totUpdateCounter/totCounter)*100).toFixed(2)}%`);
            console.log(`# of total data updates is ${totDataUpdate} of ${totUpdateCounter} = ${((totDataUpdate/totUpdateCounter)*100).toFixed(2)}%`);
            //console.log (`# of total data updates is ${totDataUpdate} of ${totCounter} = ${((totDataUpdate/totCounter)*100).toFixed(2)}%`);
            // Clear counters now, this allows any late returns to get counted on the next iteration
            // SJWMD is usually slow to return data
            updateCounter = 0;
            oldLastRefresh = 0;
            dataUpdated = 0;
            clearInterval(timer);
            // wait for the final update to finish before resetting
            setTimeout(function () {
              updateAllLakes();
            }, 18 * 60000); // wait 15 minutes (plus 7.1 minutes@2secondinterval to cycle through 213 lakes)
          }

        }, 2 * 1000); // 2 second interval
      }
    })
}

// run update function when server starts
updateAllLakes();