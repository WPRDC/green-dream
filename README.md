# Urban Greenprint
https://tools.wprdc.org/urban-greenprint  
A joint project between the [Western Pennsylvania Regional Data Center](https://www.wprdc.org) and [Allegheny Land Trust](https://www.alleghenylandtrust.org)

[![GitHub license](https://img.shields.io/github/license/WPRDC/green-dream.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/WPRDC/green-dream.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)


## Description
To better inform land use decisions and ownership considerations ALT is developing an intersectional analysis of parcel status of the Greater Pittsburgh Region, with a focus on key regional initiatives. Urban greening is a multi-benefit solution to many of the issues facing the region, such as landslides, water management and combined sewer overflows; which have arisen from inappropriate development and poor and aging infrastructure. This “Urban Greenprint” will emphasize greenspaces as solutions, recognizing that all forms of urban greening can positively contribute to the overall health and benefit of the area. The Greenprint will guide ALT, policy makers, and the community on the best uses of parcels to improve comprehensive regional planning and decision-making.

* The Urban Greenprint project is a full partnership between Allegheny Land Trust and the Western Pennsylvania Regional Data Center.
* We (ALT and WPRDC) have worked together to obtain the datasets for this project
* This is now a "living" project which will update and evolve over time. You can view the code and submit issues at the Github Repository.


## Installing
You can spin up your own copy of this tool if you'd like to develop your own version or work on some of our [issues](https://github.com/WPRDC/green-dream/issues/).

Follow these steps to install your own copy:  
Clone this repo to your computer.  
`git clone https://github.com/WPRDC/green-dream.git`  

Navigate to the project director  
`cd green-dream`  

Install the dependencies  
`npm install`

Run the development server.  This will allow you to preview the app at [http://localhost:3000](http://localhost:3000)   
`npm run start`  

To build a production copy  
`npm run build`  

After building, everything you'll need to deploy the app will be located at `.../green-dream/build/`


## Built With
* [React](https://github.com/facebook/react) - web framework used
* [Create React App](https://github.com/facebook/create-react-app) - used for building and development


## Backend Services
Backend data services are hosted on [https://tools.wprdc.org](https://tools.wprdc.org).
* [Geomancer](https://tools.wprdc.org/geo/) - for retrieving geographic information
* [Property API](https://tools.wprdc.org/property-api/) - for retrieving parcel and region data from WPRDC
* [Carto](https://carto.com) - serves map data


## Data
Urban Greenprint uses open data hosted on the [WPRDC](https://data.wprdc.org).
