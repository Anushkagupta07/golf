const db = require("../config/db");

function generateNumbers(){

let nums = [];

while(nums.length<5){

let n = Math.floor(Math.random()*45)+1;

if(!nums.includes(n)){

nums.push(n);

}

}

return nums;

}

exports.runDraw = async(req,res)=>{

const numbers = generateNumbers();

const draw = await db.query(

"insert into draws(numbers) values($1) returning id",

[numbers]

);

const users = await db.query(

"select * from users"

);

for(let user of users.rows){

const scores = await db.query(

"select score from scores where user_id=$1",

[user.id]

);

const userScores = scores.rows.map(s=>s.score);

let matches = userScores.filter(

s=>numbers.includes(s)

).length;

if(matches>=3){

await db.query(

"insert into winners(user_id,draw_id,match_count) values($1,$2,$3)",

[user.id,draw.rows[0].id,matches]

);

}

}

res.json(numbers);

};
