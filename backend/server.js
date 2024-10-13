const express = require('express'); 

const mongoose = require('mongoose'); 

const cors = require('cors'); 

const bodyParser = require('body-parser'); 

const authRoutes = require('./routes/auth'); 

const app = express(); 

app.use(cors()); 

app.use(bodyParser.json()); 

mongoose.connect('mongodb://host.docker.internal:27017/mern_login', { 

    useNewUrlParser: true, 

    useUnifiedTopology: true, 

}); 

app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => { 

    console.log(`Server is running on port ${PORT}`); 

});