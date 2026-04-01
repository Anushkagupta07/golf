const db = require("../config/db");

exports.getWinners = async(req,res)=>{

const user_id = req.params.user_id;

const winners = await db.query(

"select * from winners where user_id=$1",

[user_id]

);

res.json(winners.rows);

};