const express = require('express');
const path = require('path'); //this is a package to handle file paths

//app is used to create routes, add middleware, configure pipelines, etc
const app = express();

//this will serve static files from the public folder, this way we don't need to specify the full path to the files (with this we don't need to use res.sendFile) 😎
app.use(express.static(path.join(__dirname, 'public'))); 

//this is a simple GET request handler
// app.get('/', (req, res) => {
//     res.send(`<h1 style="color: red;">Hello World!</h1>`);
// });

//this is a simple GET request handler that serves an HTML file
// app.get('/', (req, res) => {
//     // __dirname is a global variable that contains the path to the current directory
//     // path.join is used to create a path that works on all operating systems
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

//here we put the app to listen to the port 8000
app.listen(8000, () => console.log('Express server is running on port 8000'));