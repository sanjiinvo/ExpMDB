const http = require('http');
const fs = require('fs');
const path = require('path');   

const server = http.createServer((req, res) => {
    // console.log(`server request`);
    // console.log(req.url, req.method);
    // res.write('hello world');
 res.setHeader('Content-Type', 'text/html');
    // const data =JSON.stringify([
    //     {name: 'Jane', age: 20},
    //     {name: 'Tom', age: 21},
    // ])
    // res.end(data);

    const createPath = (page) => path.resolve(__dirname,'views',`${page}.html`)

let basePath = ''

    switch (req.url){
        case '/':
            basePath = createPath('index')
            res.statusCode = 200
            break;
        case '/about':
            res.statusCode=301;
            res.setHeader('Location','/contacts')
            res.end();
            break;
        case '/contacts':
            basePath = createPath('contacts')
            break;
            default:
            basePath = createPath('error')
            break;
    }

        fs.readFile(basePath, (err,data)=>{
            if(err){
                console.log(err);
                res.end()
            } else{
                res.write(data);
                res.end();
            }
        })

})

const port = 3000

server.listen(port, 'localhost', (error)=>{
    error? console.log(error) : console.log(`server is running on ${port}`);
})