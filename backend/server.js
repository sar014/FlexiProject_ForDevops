const express = require('express'); 

const mongoose = require('mongoose'); 

const cors = require('cors'); 

const bodyParser = require('body-parser'); 

const authRoutes = require('./routes/auth'); 

const app = express(); 

app.use(cors()); 

app.use(bodyParser.json()); 

const mongoURI = process.env.MONGO_URI || 'mongodb://host.docker.internal:27017/mern_login';

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}); 


app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 

    console.log(`Server is running on port ${PORT}`); 

});