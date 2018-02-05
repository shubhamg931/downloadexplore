const functions = require('firebase-functions');
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
override = require("method-override"),
http = require('http'),
where = require("node-where"),
passport = require("passport"),
localStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose"),
session = require("express-session"),
MongoStore  = require('connect-mongo')(session),
Users = require("./models/users"),
nodemailer = require("nodemailer"),
xoauth2 = require("xoauth2");


//Connecting mongoose==================================================================

mongoose.connect("mongodb://shubhamg931:Gotech123@ds229435.mlab.com:29435/downloadexplore");
// mongoose.connect("mongodb://beerus:Gotech123@ds243345.mlab.com:43345/testing");
// mongoose.connect("mongodb://localhost/demo");


passport.use(new localStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.use(session({
    secret: "Gotech123",
    saveUninitialized: false,
    resave: true,
    store: new MongoStore({ url: 'mongodb://shubhamg931:Gotech123@ds229435.mlab.com:29435/downloadexplore'})
}));
app.use(override("_method"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true,}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());



// Schemas=============================================================================

var pageschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var acschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var scschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var cpschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var netflixschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var movieschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});

var gameschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});

var bookschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var softwareschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var antiviruschema = mongoose.Schema({
  name : { type: String, default: "Page name" },
  url: String,
  description: String,
  lid : { type : String, default: "lid" },
  logo: { type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png" },
  clicks: { type:Number, default:0 },
  date: { type: Date, default: Date.now },
});
var downloadschema = mongoose.Schema({
  name: {type: String, default:"Download Page"},
  description: String,
  icon: String,
  logo: {type: String, default:"https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/128/download.png"},
  date: { type: Date, default: Date.now },
  redirect: { type: String, default: "soon" },
});
var subscriberschema = mongoose.Schema({
  name: String,
  email: String,
  category: String,
});

//=====================================================================================

// Collections=========================================================================
var Pages = mongoose.model("page",pageschema);
var Acs   = mongoose.model("ac",acschema);
var Scs   = mongoose.model("sc",acschema);
var Cps   = mongoose.model("cp",acschema);
var Netflixs = mongoose.model("netflix", netflixschema);
var Movies = mongoose.model("movie", movieschema);
var Games = mongoose.model("game", gameschema);
var Books = mongoose.model("book", gameschema);
var Softwares = mongoose.model("software", softwareschema);
var Antiviruses = mongoose.model("antivirus", antiviruschema);
var Downloads = mongoose.model("download", downloadschema);
var Subscribers = mongoose.model("subscriber", subscriberschema);


// Global variables====================================================================

var password = "Gotech123",poutputs, subscribed = 0;

//=====================================================================================

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      type: 'OAuth2',
      user: 'munafabbasi1963@gmail.com',
      clientId: "772250856093-jci286mmjc2hcpdbciai9ufret00369i.apps.googleusercontent.com",
      clientSecret: "M-07OkIGcR3imQRMkp6ztPHC",
      refreshToken: "1/5fYr8-BgGQbltmBgZAgKFQYIN6Vh4jqsPdSnb8ajQud8pOdr_iQELZb4BLu5QEIn",
      accessToken: "ya29.GlsPBYRI74Ee3MS8P7FBvrnRMK92uqxIH7SXMaoS3QsHMUmcyb2ZasH3lgHpspXRXDiJFRGpdfrsGryGCr8hN8WWU202OEQTYSCb9BynSTN74Y9zXEtY_BFJjIsm"
  }
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect("/activate");
  }
}

function isAdmin(req,res,next){
  if(req.isAuthenticated()){
    req.loggedIn = 1;
  }else{
    req.loggedIn = 0;
  }
  next();
}

function returnDate(req,res,next){
  entry = new Date();
  entry.setMinutes(entry.getMinutes() + 330);
  var sec = entry.getSeconds(),
  min = entry.getMinutes(),
  hours = entry.getHours(),
  date = entry.getDate(),
  month = entry.getMonth() + 1,
  year = entry.getFullYear();
  req.day = date + "/" + month + "/"  + year;
  req.entime = hours + ":" + min + ":" + sec;
  next();
}

function createUser(req,res,next){
  var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  req.ipaddress = ip;
  where.is(ip, function(err, result) {
    req.geoip = result;
    entry = new Date();
    entry.setMinutes(entry.getMinutes() + 330);
    var sec = entry.getSeconds(),
    min = entry.getMinutes(),
    hours = entry.getHours(),
    date = entry.getDate(),
    month = entry.getMonth() + 1,
    year = entry.getFullYear();

    day = date + "/" + month + "/"  + year;
    entime = hours + ":" + min + ":" + sec;
    var details = req.geoip.attributes;
    var ipaddress = req.headers['x-forwarded-for'];

    Users.create({
        ip : ipaddress,
        day : day,
        entime : entime,
        country: details.country,
        state: details.region,
        zip : details.postalCode,
    },
    function(err, output){
      if(err){
        console.log(err);
        next();
      }
      else {
        console.log("A USER VISITED THE SITE!");
        console.log(output);
        next();
      }
    });
  });
}

app.use(function(req,res,next){
  Pages.find({}, function(err, outputs){
    if(err){
      console.log(err);
      next();
    }
    else {
        poutputs = outputs;
        next();
    }
  });
});


// Routes==============================================================================

// Login/register

app.get("/register", function(req,res){
  console.log("REGISTER GET\n");
    Pages.find({},function(err,outputs){
      if(err)
        console.log("error: " + err);
      else {
        res.render("register",{outputs:outputs});
      }
    });
});

app.post("/register", function(req,res){
  console.log("REGISTER\n");
  var details = req.geoip.attributes;
  var entry = req.entry;
  var ipaddress = req.headers['x-forwarded-for'];
    Pages.find({},function(err,outputs){
      if(err)
        console.log("error: " + err);
      else {
        Users.register(new Users({username: req.body.username,
          ip : ipaddress,
          day : req.day,
          entime : req.entime,
          country: details.country,
          state: details.region,
          zip : details.postalCode,}), req.body.password, function(err, user){
          if(err){
            console.log(err);
            return res.render("register",{outputs: outputs});
          }
          else {
            console.log("registered another person!");
              res.redirect("activate");
          }
        });
      }
    });
});

app.get("/activate", function(req,res){
  Pages.find({}, function(err, outputs){
    if(err)
      console.log(err);
    else {
      res.render("activate",{outputs: outputs});
    }
  });
});

app.get("/login", function(req,res){
  Pages.find({}, function(err, outputs){
    if(err)
      console.log(err);
    else {
      res.render("login", {outputs: outputs});
    }
  });
});

app.post("/login", passport.authenticate("local",{
  successRedirect: "/admin",
  failureRedirect: "/activate"
}), function(req,res){

});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
  console.log("Logged Out");
})

app.get("/", createUser, function(req,res){
  console.log("INDEX\n");
  console.log("subcribed: " + subscribed);
  res.render("index",{outputs:poutputs, subscribed:subscribed});
});

app.get("/about", createUser, function(req,res){
  console.log("ABOUT\n");
  res.render("about",{outputs:poutputs});
});

app.get("/contact", createUser, function(req,res){
  console.log("PAGES\n");
  res.render("contact",{outputs:poutputs});
});

app.post("/email/:category", function(req,res){
  console.log("Email ADDED!");
  subscribed = 1;
  Subscribers.create({
    name: req.body.name,
    email: req.body.email,
    category: req.params.category,
  }, function(err, output){
    if(err)
      console.log(err);
    else {
      msg = {
        from: "Downloadexplore <munafabbasi1963@gmail.com>",
        to: req.body.email,
        subject: "Download file",
        html: "<h1>Hey " + req.body.name + ",</h1><br> <h3>Thanks for your interest in DownloadExplore. Here is the download file we promised related to " +  req.params.category + "</h3><h4>Happy Downloading! :)</h4><br><h4>Regards: DownloadExplore Team</h4>",
        attachments: [
          {
            filename: "link.txt",
            content: "Link inside!",
            contentType: "text/plain"
          }
        ]
      }
      transporter.sendMail(msg, function(err, sent){
        if(err)
          console.log("error:" + err);
        else {
          console.log("sent the mail!");
        }
      });
      console.log("New Subscriber added!");
      if(req.params.category === "general")
        res.redirect("/");
      else if(req.params.category === "downloads")
        res.redirect("/downloads");
      else if(req.params.category === "Movies")
        res.redirect("/downloads/movies");
      else if(req.params.category === "Netflixs")
        res.redirect("/downloads/netflixs");
      else if(req.params.category === "Games")
        res.redirect("/downloads/games");
      else if(req.params.category === "Acs")
        res.redirect("/downloads/acs");
      else if(req.params.category === "Scs")
        res.redirect("/downloads/scs");
      else if(req.params.category === "Cps")
        res.redirect("/downloads/cps");
      else if(req.params.category === "Books")
        res.redirect("/downloads/books");
      else if(req.params.category === "Softwares")
        res.redirect("/downloads/softwares");
      else if(req.params.category === "Antiviruses")
        res.redirect("/downloads/antiviruses");
    }
  });
});

app.get("/downloads", createUser, isAdmin, function(req,res){
  console.log("DOWNLOADS");
  Downloads.find({}, function(err, outputs){
    if(err)
      console.log(err);
    else {
      res.render("downloads", {outputs: poutputs, pages: outputs, rights: req.loggedIn, subscribed:subscribed});
    }
  });
});

app.get("/downloads/:category", createUser, isAdmin, function(req,res){
  console.log("DOWNLOADS : " + req.params.category);
  if(req.params.category === "movies"){
    Movies.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Movies", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "acs"){
    Acs.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Acs", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "antiviruses"){
    Antiviruses.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Antiviruses", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "books"){
    Books.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Books", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "cps"){
    Cps.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Cps", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "games"){
    Games.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Games", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "netflixs"){
    Netflixs.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Netflixs", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "scs"){
    Scs.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Scs", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else if(req.params.category === "softwares"){
    Softwares.find({}, function(err, output){
      if(err)
        console.log(err);
      else {
        res.render("page",{outputs: poutputs, page: output, pagename: "Softwares", rights: req.loggedIn, subscribed:subscribed});
      }
    });
  }else{
    res.render("soon",{outputs: poutputs});
  }
});

app.get("/newpage", isLoggedIn, function(req,res){
  console.log("ADD NEW PAGE!");
  res.render("newpage", {outputs: poutputs});
});

app.post("/newpage", isLoggedIn, function(req,res){
  Downloads.create({
    name: req.body.name,
    description: req.body.description,
    logo: req.body.url,
    redirect: req.body.redirect,
    icon: req.body.icon,
  }, function(err, output){
    if(err)
      console.log(err);
    else {
      console.log("Created a new page! :)");
      res.redirect("/downloads");
    }
  })
});

// This route is to update the clicks

app.get("/downloads/:id", function(req,res){
  console.log("PAGES ID\n");
  console.log("LID: " + req.params.id + ":ammmm");
  Pages.findOneAndUpdate({lid: req.params.id},
    {$inc:{clicks:1}},function(err,output){
      if(err)
        console.log("error:" + err);
      else {
        console.log("UPDATED" + output);
        res.redirect("/downloads");
      }
    });
});


app.get("/add/:category", isLoggedIn, function(req,res){
  res.render("addnew", {title: req.params.category, outputs: poutputs});
});

app.post("/add/:category", isLoggedIn, function(req,res){
  Pages.count({}, function(err, count){
    if(err)
      console.log(err);
    else {
      Pages.create({
          name : req.body.name,
          url : req.body.redirect,
          description : req.body.description,
          clicks : 0,
          lid : count,
          logo: req.body.url,
      }, function(err, output){
        if(err)
          console.log(err);
        else{
          console.log("Added New Record!"+ output);
        }
      });

      if(req.params.category === "Movies"){
        Movies.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
            console.log("Added New Record!"+ output);
          }
        });
      }else if(req.params.category === "Netflixs"){
        Netflixs.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Antiviruses"){
        Antiviruses.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Books"){
        Books.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Softwares"){
        Softwares.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Games"){
        Games.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Acs"){
        Acs.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Cps"){
        Cps.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }else if(req.params.category === "Scs"){
        Scs.create({
            name : req.body.name,
            url : req.body.redirect,
            description : req.body.description,
            clicks : 0,
            lid : count,
            logo: req.body.url,
        }, function(err, output){
          if(err)
            console.log(err);
          else{
            res.redirect("/downloads");
          }
        });
      }
    }
  });
});

app.delete("/delete/:category/:id", isLoggedIn, function(req,res){
  if(req.params.category === "Movies"){
    Movies.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/movies");
      }
    })
  }else if(req.params.category === "Netflixs"){
    Netflixs.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/netflixs");
      }
    })
  }else if(req.params.category === "Games"){
    Games.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/games");
      }
    })
  }else if(req.params.category === "Books"){
    Books.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/books");
      }
    })
  }else if(req.params.category === "Antiviruses"){
    Antiviruses.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/antiviruses");
      }
    })
  }else if(req.params.category === "Softwares"){
    Softwares.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/softwares");
      }
    })
  }else if(req.params.category === "Acs"){
    Acs.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/acs");
      }
    })
  }else if(req.params.category === "Cps"){
    Cps.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/cps");
      }
    })
  }else if(req.params.category === "Scs"){
    Scs.findByIdAndRemove(req.params.id, function(err){
      if(err)
        console.log(err);
      else {
        res.redirect("/downloads/scs");
      }
    })
  }
});

app.get("/edit/:category/:lid", isLoggedIn, function(req,res){
  Pages.find({lid: req.params.lid},function(err,output){
    if(err)
      console.log(err);
    else {
      res.render("edit",{values: output, title: req.params.category, lid: req.params.lid, outputs: poutputs});
    }
  })
});

app.put("/edit/:category/:lid", isLoggedIn, function(req,res){
  Pages.update({lid: req.params.lid}, {
    name: req.body.name,
    description: req.body.description,
    logo: req.body.url,
    url: req.body.redirect
  }, function(err, output){
    if(err)
      console.log(err);
    else {
      console.log("UPDATED!!!" + output);
    }
  });
  if(req.params.category === "Movies"){
    Movies.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/movies");
      }
    });
  }else if(req.params.category === "Acs"){
    Acs.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/acs");
      }
    });
  }else if(req.params.category === "Antiviruses"){
    Antiviruses.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/antiviruses");
      }
    });
  }else if(req.params.category === "Books"){
    Books.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/books");
      }
    });
  }else if(req.params.category === "Cps"){
    Cps.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/cps");
      }
    });
  }else if(req.params.category === "Games"){
    Games.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/games");
      }
    });
  }else if(req.params.category === "Netflixs"){
    Netflixs.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/netflixs");
      }
    });
  }else if(req.params.category === "Scs"){
    Scs.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/scs");
      }
    });
  }else if(req.params.category === "Softwares"){
    Softwares.update({lid: req.params.lid}, {
      name: req.body.name,
      description: req.body.description,
      logo: req.body.url,
      url: req.body.redirect
    }, function(err, output){
      if(err)
        console.log(err);
      else {
        console.log("UPDATED!!" + output);
        res.redirect("/downloads/softwares");
      }
    });
  }
});

app.get("/admin",isLoggedIn, returnDate, function(req,res){
var countrywise,statewise,datewise;
  Users.aggregate({
    $group : {
      _id : "$country",
      total : {$sum : 1},
    }
  }, function(err,output){
      if(err)
        console.log(err);
      else {
        countrywise = output;
        Users.aggregate({
          $group: {
            _id : "$state",
            total : {$sum : 1},
          }
        },function(err,output){
          if(err)
            console.log("ERR:" + err);
          else {
            statewise = output;
            Users.aggregate({
              $group: {
                _id : "$day",
                total: {$sum : 1},
              }
            },function(err,output){
              if(err)
                console.log(err);
              else {
                datewise= output;
                Users.find({day: req.day},function(err,outputs){
                  if(err)
                    console.log("ERROR: " + err);
                  else {
                    users = outputs;
                    Subscribers.find({}, function(err, outputs){
                      if(err)
                        console.log(err);
                      else {
                        res.render("admin",{users: users, subscriber:outputs, outputs:poutputs, countrywise: countrywise, statewise:statewise, datewise:datewise});
                      }
                    })
                  }
                }).sort({"date": -1});
              }
            });
          }
        });
      }
  });
});


app.delete("/admin/:id", function(req,res){
console.log("USER DELETED!");
  Users.findByIdAndRemove(req.params.id, function(err){
    if(err)
      console.log("error:" + err);
    else {
      res.redirect("/admin");
    }
  });
});

app.get("/admin/filter/:id", function(req,res){
console.log("Filter page");
var countrywise, statewise;
  Users.aggregate({
    $group : {
      _id : "$country",
      total : {$sum : 1},
    }
  }, function(err,output){
      if(err)
        console.log(err);
      else {
        countrywise = output;
        Users.aggregate({
          $group : {
            _id : "$state",
            total : {$sum : 1},
          }
        },function(err,output){
          if(err)
            console.log("err:" + err);
          else {
            statewise = output;
            Users.aggregate({
                $group: {
                  _id : "$day",
                  total: {$sum : 1},
                }
            }, function(err,output){
              if(err)
                console.log("err:" + err);
              else {
                datewise = output;
                Users.find({$or: [{country : decodeURIComponent(req.params.id)},{state: decodeURIComponent(req.params.id)},{day: decodeURIComponent(req.params.id)}]},function(err,outputs){
                  if(err)
                    console.log("err:" + err);
                  else {
                    users = outputs;
                    Subscribers.find({}, function(err, outputs){
                      if(err)
                        console.log(err);
                      else {
                        res.render("admin",{users : users, subscriber: outputs, outputs:poutputs, pass:password, countrywise: countrywise,statewise:statewise});
                      }
                    });
                  }
                }).sort({"date" : -1});
              }
            });
          }
        });
      }
  });
});

app.get("/soon",function(req,res){
  var main;
  res.render("soon",{outputs: poutputs});
});


//======================================================================================


exports.app = functions.https.onRequest(app);

