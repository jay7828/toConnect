const express =require('express')
const app = express()
const mongoDB=require("mongoose")
const mongoURI='mongodb+srv://jayesh:jayeshsharma@cluster0.8bukqbm.mongodb.net/notedb'

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin"),
//     res.header(
//         "Allow-Control-Allow-Header",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     )
//     next();
// })

mongoDB.connect(mongoURI).then(function()
{
    app.get('/',(req,res)=>{
        res.send('API Works')
    })
    app.use(express.json())
    app.use('/api/',require("./Routes/register"))
})
const PORT = process.env.PORT||5000
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})
