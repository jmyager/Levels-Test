module.exports = [

    {

        state: "Alabama",

        lakes: [

            {
                bodyOfWater: "Aliceville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 137.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=25512039&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/aliceville",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Eufaula", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 188.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=25898039&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/eufaulaal",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Neely Henry", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 508.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/neelyhenry",
                dataSource: ["ALAB"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Lay", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 396.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/lay",
                dataSource: ["ALAB"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Logan Martin", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 465.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/loganmartin",
                dataSource: ["ALAB"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Guntersville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 594.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/GUH_O.xml?1545499372503",
                flowURL: "none",
                href: "/lakes/guntersville",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pickwick", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 414.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/PKH_O.xml?1545582182415",
                flowURL: "none",
                href: "/lakes/pickwick",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Smith", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 510.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/smith",
                dataSource: ["ALAB"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Weiss", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 564.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/weiss",
                dataSource: ["ALAB"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wheeler", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 552.28,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/WEH_O.xml?1545585488936",
                flowURL: "none",
                href: "/lakes/wheeler",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wilson", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 509.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/WLH_O.xml?1545585733788",
                flowURL: "none",
                href: "/lakes/wilson",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {

        state: "Arizona",

        lakes: [

            {
                bodyOfWater: "Alamo", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1160.4,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=157145&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/alamo",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Havasu", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 400.54, // 1329ft but data reported as a delta to full pool
                normalPool: 450.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09427500&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/havasu",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            /*
                        {
                            bodyOfWater: "Roosevelt", // lake name
                            data: [

                                {
                                    elev: ["N/A"], //array of elevations
                                    flow: ["Lots"], //array of flows
                                    date: ["18-03/02"], //array of elevation dates
                                    time: ["time"], //arrat if elevation times
                                }
                            ],
                            refreshInterval: 30, //minutes
                            lastRefresh: "12/31/18", // a Date 
                            seaLevelDelta: 0.0, // ft but data reported as a delta gage height
                            normalPool: 2094.0,
                            elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=52327029&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                            flowURL: "none",
                            href: "/lakes/rooseveltaz",
                            dataSource: ["USGS"], // array of calls to make to retrieve data
                            resultsLink: "undefined",
                            entryLink: "",
                            adLogoSrc: "",
                            adLogoUrl: ""
                        }*/

        ]
    },
    {

        state: "Arkansas",

        lakes: [

            {
                bodyOfWater: "Beaver", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 1120.43,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1615150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/beaver",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Bull Shoals", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 659.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1609150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/bullshoals",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Dardanelle", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 338.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1776150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/dardenelle",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Greers Ferry", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 462.04,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1946150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/greersferry",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ouachita", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 578.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=11092013&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/ouachita",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Table Rock", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 915.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1884150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/tablerock",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {

        state: "California",

        lakes: [
            // Everything I can find on Camanche lake says water elevation is 135'
            // ACE is reporting a elevation of 220' Guessing 258'
            {
                bodyOfWater: "Camanche", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 258.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=7438044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/camanche",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Canyon", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 909.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=219048&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/canyon",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Clear", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1318.26, // 1329ft but data reported as a delta to full pool
                normalPool: 1329.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=11450000&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/clear",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Don Pedro", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 804.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=7285044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/donpedro",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Folsom", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 466.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=9813044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/folsom",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Havasu", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 400.54, // but data reported as a delta to full pool.
                normalPool: 450.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09427500&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/havasu",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },

            {
                bodyOfWater: "Iron Gate", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 2162.44, //but data reported as a delta to full pool
                normalPool: 2164.43,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=11516530&period=PT168H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=11516530&period=PT168H&parameterCd=00060&siteType=ST&siteStatus=all",
                href: "/lakes/irongate",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Mendocino", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 737.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=739044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/mendocino",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "New Hogan", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 666.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=502044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/newhogan",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pine Flat", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 903.9,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=314044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/pineflat",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            // Everything I can find on Sonoma lake says water elevation is 358'
            // ACE is reporting a elevation of 446' Guessing the pool should be about 458
            {
                bodyOfWater: "Sonoma", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 458.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=507044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",

                href: "/lakes/sonoma",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Success", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 656.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=379044&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",

                href: "/lakes/success",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }

        ]
    }, {
        state: "Colorado",
        lakes: [

            {
                bodyOfWater: "Rifle Gap", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 11.0,
                normalPool: 6000.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09091900&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/riflegap",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Trinidad", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 11.36,
                normalPool: 6230.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07124400&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/trinidad",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Florida",
        lakes: [{
                bodyOfWater: "Big Harris (HC)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 62.0,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=30053040_NAVD1988_POR&des=Lake%20Harris%20at%20Leesburg%20(WL)$284837.19$814855.96$Lake%20Harris%20Unit$Lake$Lake$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/bigharris",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Dora (HC)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 62.0,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=30013010_NAVD1988_POR&des=Lake%20Dora%20at%20Mount%20Dora%20(WL)$284746.67$813838.67$Lake%20Harris%20Unit$Lake$Lake$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/dora",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Eustis (HC)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 62.0,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=30083018_NAVD1988_POR&des=Lake%20Eustis%20at%20Eustis%20(WL)$285105.3$814126.02$Lake%20Harris%20Unit$Lake$Lake$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/eustis",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Griffin (HC)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 62.0,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=30013010_NAVD1988_POR&des=Lake%20Dora%20at%20Mount%20Dora%20(WL)$284746.67$813838.67$Lake%20Harris%20Unit$Lake$Lake$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/griffin",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hatchineha", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 50.65,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=165038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/hatchineha",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Istokpoga", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 39.4,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=4069038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/istokpoga",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kenansville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 20.0,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=01310555_NAVD1988_POR&des=S-250D%20South%20at%20Fellsmere%20(WL)$274921.142$804749.182$St.%20Johns%20Marsh%20Unit$Indian%20River$Surface%20Water$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/kenansville",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kissimmee", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 57.65,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=165038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kissimmee",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Minnehaha", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 125.0,
                normalPool: 225.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02236840&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/minnehaha",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Okeechobee", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 12.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1839038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/okeechobee",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Seminole", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 78.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02357500&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/seminole",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Stick Marsh (Farm 13)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 17.5,
                elevURL: "http://webapub.sjrwmd.com/agws10/hdsnew/data.aspx?tp=3&stn=00960391_NAVD1988_POR&des=S-96B%20West%20at%20Fellsmere%20(WL)$274931.099$804428.589$Fellsmere$Brevard$Surface%20Water$Water%20Level%20(WL)",
                flowURL: "none",
                href: "/lakes/stickmarsh",
                dataSource: ["SJRWMD"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Talquin", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 70.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02329900&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/talquin",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tohopekaliga", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 58.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1074038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/tohopekaliga",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Georgia",
        lakes: [

            {
                bodyOfWater: "Lanier", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1071.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02334400&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/lanier",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Seminole", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 78.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02357500&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/seminole",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Thurmond", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 326.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02193900&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/thurmond",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "West Point", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 635.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02339400&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/westpoint",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Illinois",
        lakes: [

            {
                bodyOfWater: "Rend", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 405.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=773018&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/rend",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
        ]
    }, {
        state: "Indiana",
        lakes: [

            {
                bodyOfWater: "Monroe", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 538.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03372400&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/monroe",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ohio River (Evansville)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 328.64,
                normalPool: 328.64,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03322000&period=PT168H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/ohioriverin",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Patoka", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["1-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 536.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03374498&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/patoka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Iowa",
        lakes: [

            {
                bodyOfWater: "Red Rock", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1398.0, // water level is reported as a delta to full pool
                normalPool: 742.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=50017&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/redrock",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "West Okoboji", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1398.0, // water level is reported as a delta to full pool
                normalPool: 1398.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06604200&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/westokoboji",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Kansas",
        lakes: [

            {
                bodyOfWater: "Clinton", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 875.50,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06891478&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/clinton",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Malvern", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1039.67,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06910997&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/malvern",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Perry", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 891.50,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06890898&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/perry",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pomona", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 974.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06912490&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/pomona",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Kentucky",
        lakes: [

            {
                bodyOfWater: "Barkley", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 358.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/BAH_O.xml?1545583937120",
                flowURL: "none",
                href: "/lakes/barkley",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kentucky", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 359.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/KYH_O.xml?1545580918909",
                flowURL: "none",
                href: "/lakes/kentucky",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Louisiana",
        lakes: [

            {
                bodyOfWater: "Toledo Bend", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 172.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08025350&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/toledobend",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Minnesota",
        lakes: [

            {
                bodyOfWater: "Mille Lacs", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1240.40, // water level reprted as a delta to Full Pool - 100
                normalPool: 1251.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=05284000&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/millelacs",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Minnetonka", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 929.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=05289000&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/minnetonka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Missouri",
        lakes: [

            {
                bodyOfWater: "Bull Shoals", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 659.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1609150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/bullshoals",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Lake of the Ozarks", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 660.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5043030&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/lakeoftheozarks",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Norfork", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 553.75,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=2211150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/norfork",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pomme De Terre", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 839.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=15222030&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/pommedeterre",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Table Rock", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 915.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1884150&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/tablerock",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Truman", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 706.02,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=15347030&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/truman",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Stockton", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 867.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5706030&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/stockton",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Mississippi",
        lakes: [{
            bodyOfWater: "Columbus", // lake name
            data: [

                {
                    elev: ["N/A"], //array of elevations
                    flow: ["Lots"], //array of flows
                    date: ["18-03/02"], //array of elevation dates
                    time: ["time"], //arrat if elevation times
                }
            ],
            refreshInterval: 1440, //minutes
            lastRefresh: "12/31/18", // a Date 
            seaLevelDelta: 0,
            normalPool: 164.0,
            elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=25832039&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
            flowURL: "none",
            href: "/lakes/Columbus",
            dataSource: ["ACE"], // array of calls to make to retrieve data
            resultsLink: "undefined",
            entryLink: "",
            adLogoSrc: "",
            adLogoUrl: ""
        }, {
            bodyOfWater: "Ross Barnett", // lake name
            data: [{
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
            }],
            refreshInterval: 1440, //minutes
            lastRefresh: "12/31/18", // a Date 
            seaLevelDelta: 0,
            normalPool: 297.50,
            elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=14013&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
            flowURL: "none",
            href: "/lakes/rossbarnett",
            dataSource: ["ACE"], // array of calls to make to retrieve data
            resultsLink: "undefined",
            entryLink: "",
            adLogoSrc: "",
            adLogoUrl: ""
        }]
    }, {
        state: "Nevada",
        lakes: [

            {
                bodyOfWater: "Mojave", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 547.0, // data reported as a delta to Full Pool -100
                normalPool: 647.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09422500&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/mojave",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wild Horse", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 6208.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=13174000&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/wildhorse",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "New Mexico",
        lakes: [

            {
                bodyOfWater: "Brantley", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 3271.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=17043&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/brantley",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Conchas", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 4201.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=33043&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/conchas",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },

            {
                bodyOfWater: "Elephant Butte", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 4301.0,
                elevURL: "https://waterdatafortexas.org/reservoirs/individual/elephant-butte-30day.csv",
                flowURL: "none",
                href: "/lakes/elephantbutte",
                dataSource: ["TWDB"], // array of calls to make to retrieve data Texas Water Development District
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ft Sumner", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 4154.0,
                normalPool: 4201.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08384000&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/ftsumner",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Santa Rosa", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 4749.35,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=261043&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/santarosa",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ute", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 3784.91,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07226800&period=PT168H&parameterCd=62615&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/ute",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "New York",
        lakes: [

            {
                bodyOfWater: "Champlain", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 95.50,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=04294413&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/champlain",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "North Carolina",
        lakes: [

            {
                bodyOfWater: "Badin", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 541.1,
                cubeCheck: "badin",
                elevURL: "",
                flowURL: "none",
                href: "/lakes/badin",
                dataSource: ["CUBE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Blewitt Falls", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 78.0,
                normalPool: 178.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/30.txt",
                flowURL: "none",
                href: "/lakes/BlewittFalls",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            //Found this on ACE. Format is different for streams (smh), there is no .elev, it is .stage will add later 
            /*{
                bodyOfWater: "Cape Fear River (Fayett)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0,
                normalPool: 0.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=29041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/capefearfayett",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },*/
            // Fontana Data is not correct for TVA. It says Fontana will be 'sluicing' util further notice. Not sure what that means.
            //need to skip text until reaching the dat of the first level.
            /*{
                bodyOfWater: "Fontana", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 60, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1703.0,
                normalPool: 1703.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/FNH_R.xml?1547937374477",
                flowURL: "none",
                href: "/lakes/fontana",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: "",
                adTxSrc: "",
                adTxUrl: ""
            },*/
            {
                bodyOfWater: "Falls", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 60, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 251.5,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1745041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/falls",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jsegenerac.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "/static/assets/img/catt-oldnorth-falls-032319.png",
                adTxUrl: "https://www.cattteamtrail.com/divisions/catt-old-north/"
            },
            {
                bodyOfWater: "Gaston", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 200.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/gaston",
                dataSource: ["ALAB", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jsegenerac.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "",
                adTxUrl: ""
            },
            {
                bodyOfWater: "Hickory", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 835.0,
                normalPool: 935.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/13.txt",
                flowURL: "none",
                href: "/lakes/hickory",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },

            {
                bodyOfWater: "High Rock", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 655.2,
                elevURL: "",
                flowURL: "none",
                href: "/lakes/highrock",
                dataSource: ["CUBE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hyco", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 10.21,
                normalPool: 410.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02077280&period=PT168H&parameterCd=00062&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hyco",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Jocasee", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1000.0,
                normalPool: 1100.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/9.txt",
                flowURL: "none",
                href: "/lakes/jocasse",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Jordan", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 216.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1743041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/jordan",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/brucatobanner.png",
                adLogoUrl: "www.brucatoFIS.com",
                adCharitySrc: "/static/assets/img/warriors-on-the-water.png",
                adCharityUrl: "https://www.warriorsonthewater.com/"
            },
            {
                bodyOfWater: "Kerr", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 300.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1749041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kerr",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jsegenerac.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "/static/assets/img/cbc-kerr-tx.png",
                adTxUrl: "http://carolinasbasschallenge.com/tournament/72"
            },
            {
                bodyOfWater: "Neuse River (Kinston)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 10.90,
                normalPool: 10.90,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02089500&period=PT168H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/neuse",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Norman", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 1298.0, // data reported as a delta to full pool = 100
                normalPool: 1398.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/4.txt",
                flowURL: "none",
                href: "/lakes/norman",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Rhodhiss", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 885.0,
                normalPool: 985.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/14.txt",
                flowURL: "none",
                href: "/lakes/rhodhiss",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Roanoke River (Hwy 45)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=0208114150&period=PT168H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/roanoke",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tillery", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 178.0,
                normalPool: 278.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/31.txt",
                flowURL: "none",
                href: "/lakes/Tillery",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },

            {
                bodyOfWater: "Tuckertown", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 596.0,
                elevURL: "",
                flowURL: "none",
                href: "/lakes/tuckertown",
                dataSource: ["CUBE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wylie", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 400.0,
                normalPool: 500.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/18.txt",
                flowURL: "none",
                href: "/lakes/wylie",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Oklahoma",
        lakes: [


            {
                bodyOfWater: "Copan", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 710.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5338051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/copan",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ellsworth", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1232.50,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07308990&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/ellsworth",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Eufaula", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 585.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1882051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/eufaulaok",
                dataSource: ["ACE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Eucha", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 778.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07191285&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/eucha",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hudson", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 619.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07191400&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hudson",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hulah", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 733.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5316051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/hulah",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kaw", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1010.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5294051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kaw",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Grand", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 742.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=3770051&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/grand",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Lawtonka", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1343.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07309500&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/lawtonka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "McGee Creek", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 577.1,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1550051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/mcgee",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Oologah", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 638.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5368051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/oologah",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Skiatook", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 714.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=5117051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/skiatook",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tenkiller", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 632.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=3660051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/tenkiller",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Texoma", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 617.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=2063051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/texoma",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },

    {
        state: "Oregon",
        lakes: [

            {
                bodyOfWater: "Lost Creek", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0, // 1329ft but data reported as a delta to full pool
                normalPool: 1812.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=48202029&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN",
                flowURL: "none",
                href: "/lakes/lostcreek",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
        ]
    },

    {
        state: "Pennsylvania",
        lakes: [

            {
                bodyOfWater: "Curwensville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1162.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01541180&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/curwensville",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Raystown", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 786.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01563100&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/raystown",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Shenango", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 894.67,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03103400&period=PT168H&parameterCd=62615&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/shenango",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "South Carolina",
        lakes: [

            {
                bodyOfWater: "Clarks Hill", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 330.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02193900&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/clarkshill",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }, {
                bodyOfWater: "Cooper River", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: -6.38, // Cooper River gage height is -6.38, it's a strange USGS site
                normalPool: 0.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02172053&period=PT168H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/cooperriver",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hartwell", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 660.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02187010&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hartwell",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Keowee", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 700.0,
                normalPool: 800.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/10.txt",
                flowURL: "none",
                href: "/lakes/Keowee",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Murray", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 360.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02168500&period=PT168H&parameterCd=00062&siteType=ST&siteStatus=all",
                flowURL: "none", // Until I can fix it "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02168504&period=PT168H&parameterCd=00060&siteType=ST&siteStatus=all",
                href: "/lakes/murray",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Santee (Marion)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 79.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02171000&period=PT168H&parameterCd=00062&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/santee1",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Santee (Moultrie)", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 79.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02172000&period=PT168H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/santee2",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wateree", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 125,
                normalPool: 225.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/17.txt",
                flowURL: "none",
                href: "/lakes/wateree",
                dataSource: ["DUKE", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/catt.png",
                adLogoUrl: "https://www.cattteamtrail.com/"
            },
            {
                bodyOfWater: "Wylie", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 400.0,
                normalPool: 500.0,
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/18.txt",
                flowURL: "none",
                href: "/lakes/wylie",
                dataSource: ["DUKE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Tennessee",
        lakes: [

            {
                bodyOfWater: "Chickamauga", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 682.0,
                elevURL: " http://r7j8v4x4.map2.ssl.hwcdn.net/CHH_O.xml?1548263632238",
                flowURL: "none",
                href: "/lakes/chickamauga",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Douglas", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 990.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/DGH_O.xml?1545588002667",
                flowURL: "none",
                href: "/lakes/Douglas",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Dale Hollow", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 651.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/DHH_O.xml?1545582944732",
                flowURL: "none",
                href: "/lakes/dalehollow",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Nickajack", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 692.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/NJH_O.xml?1545584741938",
                flowURL: "none",
                href: "/lakes/nicakjack",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Percy Priest", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 489.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/JPH_O.xml?1545583512033",
                flowURL: "none",
                href: "/lakes/percypriest",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tellico", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 814.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/TEH_O.xml?1548483187456",
                flowURL: "none",
                href: "/lakes/tellico",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tims Ford", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 889.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/TFH_O.xml?1548482740011",
                flowURL: "none",
                href: "/lakes/timsford",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Watts Bar", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 741.0,
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/WBH_O.xml?1545586001367",
                flowURL: "none",
                href: "/lakes/wattsbar",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Texas",
        lakes: [

            {
                bodyOfWater: "Amistad", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1117.0,
                elevURL: "https://waterdatafortexas.org/reservoirs/individual/amistad-30day.csv",
                flowURL: "none",
                href: "/lakes/amistad",
                dataSource: ["TWDB"], // array of calls to make to retrieve data Texas Water Development District
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Conroe", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 201.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08067600&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/conroe",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Falcon", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 301.10,
                elevURL: "https://waterdatafortexas.org/reservoirs/individual/falcon-30day.csv",
                flowURL: "none",
                href: "/lakes/falcon",
                dataSource: ["TWDB"], // array of calls to make to retrieve data Texas Water Development District
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Fork", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 403.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08018800&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/fork",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "LBJ", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 825.40,
                elevURL: "https://waterdatafortexas.org/reservoirs/individual/lyndon-b-johnson-30day.csv",
                flowURL: "none",
                href: "/lakes/LBJ",
                dataSource: ["TWDB"], // array of calls to make to retrieve data Texas Water Development District
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Ray Roberts", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 632.5,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=432048&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/rayroberts",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Rayburn", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 164.40,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08039300&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/rayburn",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Toledo Bend", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 172.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08025350&period=PT168H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/toledobend",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Texoma", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 617.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=2063051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/texoma",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Travis", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["18-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 681.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=203048&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/travis",
                dataSource: ["ACE"], // array of calls to make to retrieve data Texas Water Development District
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }

        ]
    },
    {
        state: "Virginia",
        lakes: [


            {
                bodyOfWater: "Gaston", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 200.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/gaston",
                dataSource: ["ALAB", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jsegenerac.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "",
                adTxUrl: ""
            },
            {
                bodyOfWater: "James River", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02042770&period=PT168H&parameterCd=62620&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/james",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kerr", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 300.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1749041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kerr",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jse.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "/static/assets/img/cbc-kerr-tx.png",
                adTxUrl: "http://carolinasbasschallenge.com/tournament/72"
            },
            {
                bodyOfWater: "Potomac River", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=0165258890&period=PT168H&parameterCd=62620&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/potomac",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },

            {
                bodyOfWater: "Smith Mountain", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flow
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 1440, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 795.0,
                elevURL: "/api/alabama",
                flowURL: "none",
                href: "/lakes/smithmountain",
                dataSource: ["ALAB", "loadAds"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jsegenerac.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/",
                adTxSrc: "",
                adTxUrl: ""
            },
        ]
    },
    {
        state: "West Virginia",
        lakes: [

            {
                bodyOfWater: "Bluestone", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0,
                normalPool: 1406.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=253108&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/bluestone",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Burnsville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0,
                normalPool: 776.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=459108&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/burnsville",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Stonewall Jackson", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0,
                normalPool: 1067.53,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=17130111&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/stonewalljackson",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Sutton", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0.0,
                normalPool: 895.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=259108&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/sutton",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Summersville", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 0,
                normalPool: 1575.0,
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=264108&p_parameter_type=Flow:Stor:Precip:Stage:Elev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/summersville",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Wisconsin",
        lakes: [

            {
                bodyOfWater: "Geneva", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 861.86,
                normalPool: 879.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=423525088260400&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/geneva",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Winnebago", // lake name
                data: [

                    {
                        elev: ["N/A"], //array of elevations
                        flow: ["Lots"], //array of flows
                        date: ["19-03/02"], //array of elevation dates
                        time: ["time"], //arrat if elevation times
                    }
                ],
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: 746.0,
                normalPool: 746.0,
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=04082500&period=PT168H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/winnebago",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }
]