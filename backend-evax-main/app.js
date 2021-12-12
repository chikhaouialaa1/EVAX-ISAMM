const express= require("express") ;
app=express();

const bodyParser = require("body-parser");

app.use(express.json())
require('dotenv').config()


var dbconnect=require("./config/database")


app.listen(process.env.PORT,()=>{
    console.log("this serveur is runing on port",process.env.PORT)
})


user_routes=require("./routes/user-routes")
app.use(user_routes)

