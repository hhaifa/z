const mongoose = require('mongoose');

exports.check = () => {
  mongoose.Promise =global.Promise;
  if(process.env.ENVIRONEMENT === 'dev'){
    mongoose.set('debug',true);
  }
mongoose.connect('mongodb://'+process.env.MONGO_DB_HOST + ':' +process.env.MONGO_DB_PORT +'/'+
process.env.MONGO_DB_DATABASE,{
   user: process.env.MONGO_DB_USERNAME,
   pass:process.env.MONGO_DB_PASSWORD
},(err) => {
  if(err) {
    console.error(err);

  }else{
  console.log("*****MONGO IS UP*****" );
  }
});
};
