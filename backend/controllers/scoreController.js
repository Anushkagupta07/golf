const db = require("../config/db");


// ADD SCORE
exports.addScore = async (req, res) => {

try {

const { user_id, score } = req.body;

await db.query(

"INSERT INTO scores (user_id, score) VALUES ($1, $2)",

[user_id, score]

);

res.json({

message: "Score saved successfully"

});

}

catch (error) {

console.log("ADD SCORE ERROR:", error);

res.status(500).json({

message: "Database error while adding score"

});

}

};




// GET LAST 5 SCORES
exports.getScores = async (req, res) => {

try {

const user_id = req.params.user_id;

const result = await db.query(

`SELECT id, score
 FROM scores
 WHERE user_id = $1
 ORDER BY ctid DESC
 LIMIT 5`,

[user_id]

);

res.json(result.rows);

}

catch (error) {

console.log("GET SCORE ERROR:", error);

res.status(500).json({

message: "Database error while fetching scores"

});

}

};