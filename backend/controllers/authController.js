const db = require("../config/db");

exports.registerUser = async(req,res)=>{

const {name,email,password,subscription} = req.body;

await db.query(

"insert into users(name,email,password,subscription) values($1,$2,$3,$4)",

[name,email,password,subscription]

);

res.json({

msg:"registered"

});

};

exports.loginUser = async(req,res)=>{

const {email,password} = req.body;

const user = await db.query(

"select * from users where email=$1 and password=$2",

[email,password]

);

if(user.rows.length===0){

return res.status(400).json({

msg:"invalid credentials"

});

}

res.json({

msg:"login success",

user:user.rows[0]

});

};