const express = require('express');
const app=express();
const port = 4000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//================ Static Files ==================
app.use(express.static('./assets'));

//======== use express router ===============
app.use('/',require('./routes'));

//======== View Engine ======================
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(process.env.PORT || port,function(err){
    if(err){
        console.log(`Error encountered in running the server: ${err}`);     //interpolation string
        return;
    }
    console.log(`Server is running on port: ${port}`);
});