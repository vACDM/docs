---
sidebar_position: 1
---

# Installation

## Structure of vACDM

vACDM is designed, that every vACC is able to run their own instance simply in a docker container, in order to have fully control over the system.

The vACDM Core System consists of two sub systems:

- vACDM-API: for communication between ES-Plugin and the backend
- vACDM-worker: for contant time calculations and optimizations

Here you can see an example docker-compose:

```yaml
version: '3.7'

services:
  api:
    image: ghcr.io/vacdm/vacdm:latest
    container_name: vacdm_api
    environment:
      - SERVER_NAME
      - PORT
      - ALLOW_OBS_MASTER
      - ALLOW_SIM
      - MONGO_URI
      - ROLE=API
      - CLIENT_ID
      - CLIENT_SECRET
      - PUBLIC_URL
      - VATSIM_AUTH_URL
      - JWT_SECRET
      - EVENT_URL
      - EVENT_PRIO
    restart: unless-stopped
    ports:
      - 3000:3000
  worker:
    image: ghcr.io/vacdm/vacdm:latest
    container_name: vacdm_worker
    environment:
      - MONGO_URI
      - ROLE
      - TIME_LAST_SEEN
      - TIME_INACTIVE
      - EVENT_URL
      - EVENT_PRIO

    restart: unless-stopped
```

## Environment Variables

| Variable                                            | Description                                                                                                                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SERVER_NAME                                         | The name of the vACDM instance                                                                                                                      |
| PORT                                                | Port of the API. Default Port is 3000                                                                                                               |
| ALLOW_OBS_MASTER <br />(true/false. Default: false) | Define if the backend allows Observers are able to set `.vacdm master`.<br /> Not recommended for productive use                                    |
| ALLOW_SIM <br />(true/false. Default: false)        | Define if the backend allows Controllers are able to set `.vacdm master` in sim sessions (i.e. sweatbox). <br /> Not recommended for productive use |
| MONGO_URI                                           | URI of the Database                                                                                                                                 |
| ROLE (API/WORKER)                                   | Both roles need to be defined. Each for every sub system                                                                                            |
| CLIENT_ID                                           | VATSIM AUTH Client ID                                                                                                                               |
| CLIENT_SECRET                                       | VATSIM AUTH Client Secret                                                                                                                           |
| PUBLIC_URL                                          | Base URL of the vACDM Frontend (i.e.: https://vacdm.vatsim-germany.org)                                                                             |
| VATSIM_AUTH_URL                                     | VATSIM AUTH URL. Either auth.vatsim.net or auth-dev.vatsim.net                                                                                      |
| JWT_SECRET                                          | Any JWT token sectret of your choice                                                                                                                |
| EVENT_URL                                           | API URL of the booking system (i.e.: http://slots.vatsim-germany.org/api/events/)                                                                   |
| EVENT_PRIO                                          | Initial priority of event flights. The higher priority, the less delay of flights                                                                   |
| TIME_LAST_SEEN (default 5)                          | Time in minutes until the flight gets marked as inactive in the database when no further update of the flight is received                           |
| TIME_INACTIVE (default 5)                           | Time in minutes until inactive flights get deleted from the database                                                                                |

## Sample ENV

With the following env you will be able to start the vACDM instance:

```js
MONGO_URI=mongodb+srv://<user>:<password>@<url>/vacdm-dev?retryWrites=true&w=majority

ALLOW_SIM=true
ALLOW_OBS_MASTER=true
SERVER_NAME=vACDM Dev Server

CLIENT_ID=
CLIENT_SECRET=secret
PUBLIC_URL=
VATSIM_AUTH_URL=https://auth-dev.vatsim.net
JWT_SECRET=secret

BOOKING_URL=http://slots.vatsim-germany.org/api/events/
BOOKING_PRIO=5
```

## Prerequisites

vACDM needs a configuration for every airport where it's used.

Until we developed a proper administration UI, you have to send the configuration as the body via a PATCH/POST request to the API (/api/v1/airports)

A configuration looks like this:

```json
{
    "icao": "XXXX",
    "standard_taxitime": 15,
    "taxizones": [
        {
            "polygon": [
                "N047.27.17.801:E008.33.17.541",
                "N047.27.14.826:E008.33.20.075",
                "N047.27.13.203:E008.33.41.744",
                "N047.27.16.494:E008.33.42.145"
                //...

            ],
            "taxitimes": [
                {
                    "rwy_designator": "28",
                    "minutes": 10
                },
                //...
                //Every polygon needs taxitimes to every possible departure runway

            ],
            "label": "A Gates",
            "taxiout": false //Is this polygon a taxi out position or not
        },
       //...

    ],
    "capacities": [
        {
            "rwy_designator": "28",
            "capacity": 8,              //number of departures every 10 minutes

            "alias": ""
            //if you have dependend departure runways, you can add an alias for them that vACDM counts both runways as one

        },
        //...

    ]
}
```

## Use vACDM Frontend

After the creation of the docker instance and mongo database, you should be able to access the frontend via the PUBLIC_URL

You should see the login page

![login](/img/login.png)

After successful login via VATSIM auth or auth-dev the user is updated in the users collection of the database.

Until we developed a proper administration UI, you have to set users as "atc" or "admin" manually. This ensures you to get full access on the fontend.

![userscollection](/img/users_collection.png)
