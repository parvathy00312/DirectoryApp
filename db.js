var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parvathy05ps_db_user:test@cluster0.rmwgurq.mongodb.net/test?appName=Cluster0"
).then(()=>{
    console.log("connected to db")
}).catch((err)=> {
    console.log(err);
});