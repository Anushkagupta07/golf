const db = require("../config/db");

exports.getCharities = async(req,res)=>{

const charities = await db.query(

"select * from charities"

);

res.json(charities.rows);

};

exports.addCharity = async(req,res)=>{

const {name,description,image} = req.body;

await db.query(

"insert into charities(name,description,image) values($1,$2,$3)",

[name,description,image]

);

res.json({

msg:"charity added"

});

};