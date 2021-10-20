const config = {
  database: 'mongodb+srv://liubomyr_1337:1q2w3e4r@testcluster1.r5yb2.mongodb.net/accme?retryWrites=true&w=majority',
  secret: 'yoursecret',
};

if (process.env.NODE_ENV === 'dev') {
  config.database = 'mongodb://127.0.0.1:27017/meanauth';
}

module.exports = config;
