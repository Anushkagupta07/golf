const db = require("../config/db");

exports.selectCharity = async(req,res)=>{

const {user_id,charity_id} = req.body;

await db.query(

"update users set charity_id=$1 where id=$2",

[charity_id,user_id]

);

res.json({

msg:"charity selected"

});

};