const express = require('express')
const app = express()
const cors = require('cors');
const { Console } = require('console');
const sqlite3 = require('sqlite3').verbose();

app.use(cors())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});
app.use(express.json({limit:'10mb'}))

let db = new sqlite3.Database('credentials.db',(err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("Connected to database");
})

app.post('/login',(req,res)=>{
    const {name,email} = req.body

    db.all(`select * from credentials where name = '${name}' and email = '${email}'`,(err,rows)=>{
        if(err){
            throw err
        }
        if(rows.length>0){
            res.send({validation:true})
            
        }else{
            res.send({validation:false})
        }

    })
})

// Register endpoint
app.post('/register', (req, res) => {
    const { name, email} = req.body;

    db.all(`SELECT * FROM credentials WHERE email = ?`, [email], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (rows.length > 0) {
            // User already exists
            return res.status(400).json({ error: 'User already exists' })
        }

        // User does not exist, insert into database
        db.run(`INSERT INTO credentials (name, email) VALUES (?, ?)`, [name, email], (err) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json({ success: true, message: 'User registered successfully' });
        });
    });
});


app.listen(3001,()=>console.log('Listening at port 3001'))