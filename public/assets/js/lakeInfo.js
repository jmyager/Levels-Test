var lakeInfo = [

    {

        state: "Alabama",

        lakes: [

            {
                bodyOfWater: "Eufaula", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "585.0",
                elevURL:"http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1882051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/eufaula",
                dataSource: ["ACE", "placeLogoAd"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }, 
            {
                bodyOfWater: "Guntersville", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "594.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/GUH_O.xml?1545499372503",
                flowURL: "none",
                href: "/lakes/guntersville",
                dataSource: ["TCA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pickwick", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "414.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/PKH_O.xml?1545582182415",
                flowURL: "none",
                href: "/lakes/pickwick",
                dataSource: ["TVAWheelerr"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wheeler", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "552.28",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "509.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/WLH_O.xml?1545585733788",
                flowURL: "",
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

        state: "California",

        lakes: [

            {
                bodyOfWater: "Clear", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "1329.0",// 1329ft but data reported as a delta to full pool
                normalPool: "1329.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=11450000&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/clear",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Havasu", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "445.0", // 445ft but data reported as a delta to full pool.
                normalPool: "445.0",
                elevURL: "",
                flowURL: "",
                href: "/lakes/havasu",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }

        ]
    },
    {
        state: "Colorado",
        lakes: [

            {
                bodyOfWater: "Rifle Gap", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "6000.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09091900&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "6300.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07124400&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "",
                href: "/lakes/trinidad",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Florida",
        lakes: [

            {
                bodyOfWater: "Istokpoga", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "39.4",
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
                bodyOfWater: "Minnehaha", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "125.0",
                normalPool: "225.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02236840&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/minnehaha",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Seminole", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "78.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02357500&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/seminole",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Talquin", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "70.0",
                elevURL: "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=02329900&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "58.0",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1074038&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Georgia",
        lakes: [

            {
                bodyOfWater: "Lanier", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "1071.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02334400&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "",
                href: "/lakes/lanier",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "West Point", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "635.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02334400&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/westpoint",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Indiana",
        lakes: [

            {
                bodyOfWater: "Monroe", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03372400&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["18-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=03322000&period=PT96H&parameterCd=00065&siteType=ST&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["1-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03374498&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/patoka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Iowa",
        lakes: [

            {
                bodyOfWater: "West Okoboji", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "1398.0", // water level is reported as a delta to full pool
                normalPool: "1398.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06604200&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/westokoboji",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Kansas",
        lakes: [

            {
                bodyOfWater: "Clinton", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "875.50",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06891478&period=PT95H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "1039.67",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06910997&period=PT95H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/malvern",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Perry", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "891.50",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06890898&period=PT95H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/perry",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Pomona", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "974.0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06912490&period=PT95H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/pomona",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Kentucky",
        lakes: [

            {
                bodyOfWater: "Barkley", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "358.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/BAH_O.xml?1545583937120",
                flowURL: "none",
                href: "/lakes/barkley",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kentucky", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "359.0",
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
    },
    {
        state: "Louisiana",
        lakes: [

            {
                bodyOfWater: "Toledo Bend", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08025350&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/toledobend",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Minnesota",
        lakes: [

            {
                bodyOfWater: "Mille Lacs", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "1151.00", // water level reprted as a delta to Full Pool - 100
                normalPool: "1251.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=05284000&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "929.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=05289000&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/minnetonka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    },
    {
        state: "Missouri",
        lakes: [

            {
                bodyOfWater: "Lake of the Ozarks", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "659.0",
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
                bodyOfWater: "Table Rock", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "915.0",
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
    },
    {
        state: "Nevada",
        lakes: [

            {
                bodyOfWater: "Mojave", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "547.0", // data reported as a delta to Full Pool -100
                normalPool: "647.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09422500&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "6208.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=13174000&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
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
        state: "New York",
        lakes: [

            {
                bodyOfWater: "Champlain", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "95.50",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=04294413&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "541.1",
                cubeCheck: "badin",
                elevURL: "",
                flowURL: "",
                href: "/lakes/badin",
                dataSource: ["CUBE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hickory", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "835.0",
                normalPool: "935.0",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "655.2",
                elevURL: "",
                flowURL: "",
                href: "/lakes/highrock",
                dataSource: ["CUBE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hyco", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "1100.0",
                normalPool: "1200.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02168500&period=PT96H&parameterCd=00062&siteType=ST&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hyco",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Jordan", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "216.5",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1743041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/jordan",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Kerr", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "300.0",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1749041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kerr",
                dataSource: ["ACE", placeLogoAd()], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jse.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/"
            },
            {
                bodyOfWater: "Neuse River (Kinston)", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02089500&period=PT96H&parameterCd=00065&siteType=ST&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "1298.0", // data reported as a delta to full pool = 100
                normalPool: "1398,0",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "985.0",
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
                bodyOfWater: "Roanoke (Hwy 45)", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=0208114150&period=PT96H&parameterCd=00065&siteType=ST&siteStatus=all",
                flowURL: "",
                href: "/lakes/roanoke",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Tuckertown", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "596.0",
                elevURL: "",
                flowURL: "",
                href: "/lakes/tuckertown",
                dataSource: ["CUBE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Wylie", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flow
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "400.0",
                normalPool: "500.0",
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
        state: "Oklahoma",
        lakes: [

            {
                bodyOfWater: "Ellsworth", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "1232.50",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07308990&period=PT95H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/ellsworth",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Eucha", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "778.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07190000&period=PT95H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "",
                href: "/lakes/eucha",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hudson", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "619.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07191400&period=PT95H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hudson",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Lake O' the Cherokees", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "739.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07190000&period=PT95H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/cherokees",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Lawtonka", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "1343.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07309500&period=PT95H&parameterCd=00065&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/lawtonka",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "McGhee Creek", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "577.0",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1550051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/mcghee",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Texoma", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "619.410",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1550051&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
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
        state: "Pennsylvania",
        lakes: [

            {
                bodyOfWater: "Curwensville", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "1162.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01541180&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/curwensville",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }, 
            {
                bodyOfWater: "Shenango", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "894.670",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03103400&period=PT96H&parameterCd=62615&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/shenango",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Raystown", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "786.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=01563100&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/raystown",
                dataSource: ["ACE"], // array of calls to make to retrieve data
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "330.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02193900&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/clarkshill",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Hartwell", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "660.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02187010&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/hartwell",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Murray", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "360.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02168500&period=PT96H&parameterCd=00062&siteType=ST&siteStatus=all",
                flowURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02168504&period=PT96H&parameterCd=00060&siteType=ST&siteStatus=all",
                href: "/lakes/murray",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Santee (Marion)", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "79.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02171000&period=PT96H&parameterCd=00062&siteType=ST&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "79.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02172000&period=PT96H&parameterCd=00062&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "225.0",
                elevURL: "https://lakes.duke-energy.com/Data/Detail/3_Month/17.txt",
                flowURL: "none",
                href: "/lakes/wateree",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "682.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/GUH_O.xml?1545499372503",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "990.0",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "651.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/DGH_O.xml?1545588002667",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "692.0",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "489.0",
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
                bodyOfWater: "Watts Bar", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "741.0",
                elevURL: "http://r7j8v4x4.map2.ssl.hwcdn.net/WBH_O.xml?1545586001367",
                flowURL: "",
                href: "/lakes/wattsbar",
                dataSource: ["TVA"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            }
        ]
    }, {
        state: "Texas",
        lakes: [

            {
                bodyOfWater: "Fork", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "403.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08018800&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/fork",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Conroe", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "201.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08067600&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
                flowURL: "none",
                href: "/lakes/conroe",
                dataSource: ["USGS"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "",
                adLogoUrl: ""
            },
            {
                bodyOfWater: "Rayburn", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "164.40",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08039300&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "172.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08025350&period=PT96H&parameterCd=62614&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "619.410",
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
        state: "Virginia",
        lakes: [

            {
                bodyOfWater: "James", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02042770&period=PT96H&parameterCd=62620&siteType=ST&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "300.0",
                elevURL: "http://water.usace.army.mil/a2w/CWMS_CRREL.cwms_data_api.get_report_json?p_location_id=1749041&p_parameter_type=Flow%3AStor%3APrecip%3AStage%3AElev&p_last=5&p_last_unit=days&p_unit_system=EN&p_format=JSON",
                flowURL: "none",
                href: "/lakes/kerr",
                dataSource: ["ACE"], // array of calls to make to retrieve data
                resultsLink: "undefined",
                entryLink: "",
                adLogoSrc: "/static/assets/img/jse.png",
                adLogoUrl: "http://jacksonsuperiorelectric.com/"
            },
            {
                bodyOfWater: "Potomac", // lake name
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "0",
                elevURL: "",
                flowURL: "",
                href: "/lakes/potomac",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "879.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=423525088260400&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
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
                elev: ["N/A"], //array of elevations
                flow: ["Lots"], //array of flows
                date: ["19-03/02"], //array of elevation dates
                time: ["time"], //arrat if elevation times
                refreshInterval: 30, //minutes
                lastRefresh: "12/31/18", // a Date 
                seaLevelDelta: "0",
                normalPool: "746.0",
                elevURL: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=04082500&period=PT96H&parameterCd=00065&siteType=LK&siteStatus=all",
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