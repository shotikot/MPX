const http = require('http');
const app = require('./app');
const server = http.Server(app);
const PORT = process.env.PORT || '4000';

server.listen(PORT, ()=>{
    console.log('server listening on port ' + PORT)
})