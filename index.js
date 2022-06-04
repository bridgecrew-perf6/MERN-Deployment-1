const express = require("express")
const res = require("express/lib/response")
const app = express()


// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("server running....")
})

app.get("/api", (req, res) => {
    // res.send("server running correctly")
    res.json({ "message": "Server running correctly" })
})
