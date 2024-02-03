const express =require('express')
const app = express()
const mongoDB=require("mongoose")
const mongoURI='mongodb+srv://jayesh:toconnect@userdetails.fdxtamm.mongodb.net/?retryWrites=true&w=majority'

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
  });
  

mongoDB.connect(mongoURI).then(function()
{
    app.get('/',(req,res)=>{
        res.send('API Works')
    })
    app.use(express.json())
    app.use('/api/',require("./Routes/register"))
    app.use('/api/project/',require("./Routes/addProject"))
    app.use('/api/collab_letter/',require("./Routes/collab_letter"))
})
const PORT = process.env.PORT||5000
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})
