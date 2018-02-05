var mongoose = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");


var userschema = mongoose.Schema({
  name : String,
  contact : String,
  username: String,
  password: String,
  type: {type:Number, default: 0},
  email : String,
  ip : String,
  date: { type: Date, default: Date.now },
  day : { type : String, default : "Day" },
  entime: { type : String, default : "Entry time" },
  extime : {type : String, default : "Exit time" },
  country : { type : String, default : "Country" },
  state : { type : String, default : "Country" },
  zip : { type : String, default : "zip" },
  category: { type: String, default: "General"}
});


userschema.plugin(passportLocalMongoose,{
  userNameUnique: false,

  findByUsername: function(model, queryParameters){
    queryParameters.type= 1;
    return model.findOne(queryParameters);
  }
});

module.exports = mongoose.model("user", userschema);
