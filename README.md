
# Time Series Metric API

A Backend application that allows you to post and visualise metrics. Each metric will have a Timestamp(handle by InfluxDB), name, and value.
The metrics will be shown in a timeline and must show averages per minute/hour/day. The metrics will be persisted in the database.

## Tech Stack

**Client:** React, Redux, SASS, D3.js

**Server:** Node, Express, InfluxDB 2.X(https://www.influxdata.com/)

Please visit InfluxDB Cloud to register, this will allow you to have access to the environment variables.

You can easily test the API, see the request and response specs below.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Anuoluwa/Metrics-API
```

Go to the project directory

```bash
  cd Metrics-API
```

```bash
  Add Environmental variables

  INFLUX_URL=<INFLUX_URL>
  INFLUX_TOKEN=<YOUR TOKEN>
  INFLUX_ORG=<YOUR ORG>
  INFLUX_BUCKET=<YOUR BUCKET>
  


```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage/Examples

```POSTMAN
Heroku BASE_URL : https://metrics-fact.herokuapp.com

POST(ADD Metrics)

BASE_URL/api/v1/metrics/

Request spec:

{
    "name":"sample",
    "value":"201"
}

Response spec:

{
    "success": true,
    "statusCode": 201,
    "message": "Metric Created Successfully",
    "body": {
        "tags": {
            "name": "sample"
        },
        "fields": {
            "value": "407"
        },
        "name": "metrics",
        "time": 1650851175995
    }
}

GET ALL METRICS 

GET BASE_URL/api/v1/metrics/all

Response spec:

{
    "success": true,
    "statusCode": 200,
    "message": "All Metric Retrieved Successfully",
    "body": [
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:50:40.473Z",
            "_value": 23,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:44.314Z",
            "_value": 23,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:53:34.868Z",
            "_value": 33,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:06.22Z",
            "_value": 43,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:35.732Z",
            "_value": 43,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:50:49.396Z",
            "_value": 45,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:52:04.044Z",
            "_value": 58,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:52:13.371Z",
            "_value": 63,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:55.228Z",
            "_value": 65,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:28.288Z",
            "_value": 87,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:51:17.247Z",
            "_value": 98,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 0,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:53:19.215Z",
            "_value": 345,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "Ss"
        },
        {
            "result": "_result",
            "table": 1,
            "_start": "1970-01-01T00:00:00Z",
            "_stop": "2022-04-25T01:22:22.99111806Z",
            "_time": "2022-04-25T00:50:18.258Z",
            "_value": 123,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "ss"
        }
    ]
}


GET Average per minute/hour/day

GET BASE_URL/api/v1/metrics/?http://localhost:4000/api/v1/metrics/?windowPeriod={interval}

Response Spec:

{
    "success": true,
    "statusCode": 200,
    "message": "Metric Retrieved Successfully",
    "body": [
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:48:45Z",
            "_value": 44,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:48:49Z",
            "_value": 41,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:48:52Z",
            "_value": 43,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:48:56Z",
            "_value": 44,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:49:03Z",
            "_value": 46,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:49:08Z",
            "_value": 41,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        },
        {
            "result": "mean",
            "table": 0,
            "_start": "2022-04-23T22:49:13Z",
            "_stop": "2022-04-24T22:49:15.222703928Z",
            "_time": "2022-04-24T22:49:11Z",
            "_value": 49,
            "_field": "value",
            "_measurement": "metrics",
            "dataSet": "metric-app",
            "name": "sample"
        }
    ]
}

```


## License

[MIT](https://choosealicense.com/licenses/mit/)

