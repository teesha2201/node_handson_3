const express = require("express")
const app = express();
const port= 4000;
const apiRouting = require("./routing/apiRouting")
const {authentication} = require("./middleware/authentication");
const cors = require('cors')

app.use(cors(
    {  
    origin:"*"
    }
))
app.use(authentication)
app.use("/api/main",apiRouting)

app.get("/",(req,res)=>{
    res.send("Server is Created")
})

app.listen(port,()=>{
    try{
        console.log(`server is live on port no. ${port}`)
    }
    catch(err){
        console.log(`server is fail due to some errror ${err}`);
    }
})

// Create two middlewares one should be applicable to all the routes present in backend application is containing and other should be applicable to any 2 specific routes 