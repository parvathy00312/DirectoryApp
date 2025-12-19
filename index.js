var express = require('express'); 
var port = 8081
var app = express();

app.use(express.json())

require("./db")

var userModel = require("./model/person");

app.post('/', (req,res)=>{
    userModel(req.body).save();
    res.send("user data is added")
})

app.get("/",async (req, res) => {
    var user = await userModel.find();
    res.send(user)
});

app.get('/:id',async (req, res) => {
    console.log(req.params.id)
    var oneUser = await userModel.findById(req.params.id);
    res.send(oneUser)
});

app.delete("/:id", async(req, res) => {
   await userModel.findByIdAndDelete(req.params.id);
   res.send("user data deleted")
});

// to update a doc//
app.put("/:id",async(req, res)=> {
   await userModel.findByIdAndUpdate(req.params.id,req.body);
   res.json({message:"Data Updated"})
});
app.listen(port, () => {
    console.log(`server is running in porting ${port}`) // back tick ~ is used when string interpolation 
});
