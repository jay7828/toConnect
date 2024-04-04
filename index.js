const express =require('express')
const app = express()
const cors = require('cors');
const mongoDB=require("mongoose")
require("dotenv").config();
const mongoURI = process.env.MONGODB_URL;

app.use(cors({
  // origin: 'http://localhost:3000',
  origin: 'https://to-connect-two.vercel.app',
  methods: ['GET', 'POST', 'PATCH', 'DELETE','PUT'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE,PUT");
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
    app.use('/api/users', require("./Routes/userRoutes"));
    app.use('/api/collab_letter/',require("./Routes/collab_letter"))
    app.use('/api/',require("./Routes/googlelogin"))
})
const PORT = process.env.PORT||5000
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})
