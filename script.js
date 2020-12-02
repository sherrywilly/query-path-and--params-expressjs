const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const DataSet = [
    {id:1,name:"sherry", place:"adoor"},
    {id:2,name:"anoop", place:"kollam"},
    {id:3,name:"ajesh", place:"konni"}
]



app.post('/user/:id',(req, res)=>{
    const sid = parseInt(req.params.id)
    const filterItem = DataSet.find((data)=>data.id ===sid)
    res.json(filterItem)
})

app.post('/user',(req, res)=>{
    const sid = parseInt(req.query.id)
    const filterItem = DataSet.filter((data)=>sid?data.id ===sid:data)
    res.json(filterItem)
})

const PORT = process.env.PORT||3002;

app.listen(PORT,()=>{
    console.log(`this server is running at ${PORT}`)
})