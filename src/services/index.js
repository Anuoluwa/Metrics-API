require('dotenv').config()
const { InfluxDB, Point, HttpError } = require('@influxdata/influxdb-client');
const envConfigs = require('../database/config/config');
const winston = require('../config/winston');
const {
    handleResponse,
    CREATED,
    OK,
  } = require('../utils/success');
  const {
    createError,
    BAD_REQUEST,
    CONFLICT,
    NOT_FOUND,
    SERVER_ERROR,
    UNAUTHORIZED,
    FORBIDDEN,
  } = require('../utils/error');

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

class InfluxModel {
    url = config.url;
    token = config.token;
    org = config.org;
    bucket = config.bucket;
    influxDB = new InfluxDB({ url: this.url, token: this.token });
    defaultTag = { dataSet: 'metric-app' }

    static async Insert (params){
        const db = new InfluxModel();

        /**
         * Insert with WriteAPI method.
         **/
        const writeApi = db.influxDB.getWriteApi(db.org, db.bucket, 'ms');

        /**
         * Apply default tags to all points.
         **/
        writeApi.useDefaultTags(db.defaultTag);

        /**
         * Create a point and write it to the buffer.
         **/
        const name = params.name;
        const value = (params.value * 1).toFixed(2);
        const timeStamp = params.timeStamp
        console.log(typeof timeStamp)
        const record = new Point('metrics')
        .tag('name', name)
        .floatField('value', value)
        .timestamp(timeStamp)
        winston.info(`${record}`)

        writeApi.writePoint(record);
        /**
         * Flush pending writes and close writeApi.
         **/
        writeApi.close().then(() => {
            winston.info('WRITE FINISHED')
        }).catch(error => {
            console.log(error)
            winston.error(`Something went wrong during write ${error}`)
        });
        return record;
    }

    static async SelectAllMetrics(req, res, next) {

        const db = new InfluxModel();
     
        const queryApi = db.influxDB.getQueryApi(db.org);

        const query = `from(bucket: "mercies101's Bucket") 
                        |> range(start: 0) |> filter(fn: (r) => r._measurement == "metrics" )`;
        const tableRecords = [];
        const queryObserver = {
            next(row, tableMeta) {
                const record = tableMeta.toObject(row);
                tableRecords.push(record);
            },
            error(error) {
                winston.info(error)
                winston.info('Finished ERROR')
                return next(
                    createError({
                      status: NOT_FOUND,
                      message: `Metrics not found ${error}`,
                    }),
                  );
            },
            complete() {
                winston.info('Finished SUCCESS');
                // console.log(tableRecords.length)
                return handleResponse(res, OK, 'All Metric Retrieved Successfully', tableRecords);
            },
            }
         queryApi.queryRows(query, queryObserver);
        
    }

    static async SelectMovingAverages (req, res, next) {
        const timeObj = {
            min: 'm',
            hour: 'h',
            day: 'd'
        }
        const start = req.query.start || '12'
        const interval = req.query.interval && timeObj[req.query.interval] || "";

        const avg = req.query.avg ? req.query.avg : 3;

        const db = new InfluxModel();
     
        const queryApi = db.influxDB.getQueryApi(db.org);

        const query = req.query.avg ? `from(bucket: "mercies101's Bucket") 
                        |> range(start: -${start}${interval})
                        |> movingAverage(n: ${avg})
                        ` :
                        `from(bucket: "mercies101's Bucket") 
                        |> range(start: -${start}${interval})
                        `;
        const tableRecords = [];
        const queryObserver = {
            next(row, tableMeta) {
                const record = tableMeta.toObject(row);
                tableRecords.push(record);
            },
            error(error) {
                winston.info(error)
                winston.info('Finished ERROR')
                return next(
                    createError({
                      status: NOT_FOUND,
                      message: `Metrics not found ${error}`,
                    }),
                  );
            },
            complete() {
                winston.info('Finished SUCCESS');
                // console.log(tableRecords.length)
                return handleResponse(res, OK, 'Metric Retrieved Successfully', tableRecords);
            },
            }
         queryApi.queryRows(query, queryObserver);
        
    }
}

module.exports = InfluxModel;
