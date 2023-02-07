const express = require('express');
const { PORT, CLIENT_URL } = require('./constants');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');

//import passport middleware
require('./middlewares/passport-middleware')

// Initiallize middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: CLIENT_URL, credentials: true}))
app.use(passport.initialize());

// Import Router
const authRouter = require('../src/routes/auth');

// Initiallize Route
app.use('/api', authRouter);

// App start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

appStart();