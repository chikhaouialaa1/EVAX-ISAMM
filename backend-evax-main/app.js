const express= require("express") ;
app=express();

const cors = require('cors');
app.use(cors({ origin: true }));

const bodyParser = require("body-parser");

app.use(express.json())

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }))

var dbconnect=require("./config/database")


app.listen(process.env.PORT,()=>{
    console.log("this serveur is runing on port",process.env.PORT)
})


user_routes=require("./routes/user-routes")
app.use(user_routes)


admin_routes=require("./routes/admin-routers")
app.use(admin_routes)

