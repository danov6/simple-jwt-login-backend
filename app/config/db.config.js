module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5, //max # of connection in pool
      min: 0, //min # of connection in pool
      acquire: 30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000 //maximum time, in milliseconds, that a connection can be idle before being released
    }
};