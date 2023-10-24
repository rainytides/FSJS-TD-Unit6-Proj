// Tells the app to use the routes in the routes folder
const express = require('express');
const opn = require('opn');
const app = express();
const port = 3000;  

// Serve static files from the "public" directory
app.use('/static', express.static('public'));

// Set the view engine to "pug"
app.set('view engine', 'pug');

// Import route modules
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

// Use route modules
app.use(mainRoutes);
app.use('/project', projectRoutes);

// Handle 404 error for unknown routes
app.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});

// Handle all other errors
app.use((error, req, res, next) => {
    res.locals.error = error;
    res.status(error.status || 500);
    res.render('error');
});

// Start the server and automatically open the browser window
app.listen(port, () => {
    console.log(`The application is running on localhost:${port}`);
    opn(`http://localhost:${port}`); 
});
