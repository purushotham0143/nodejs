const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');

    let path = url.parse(req.url,true);

    if(path.pathname=='/product'){     
        
        res.statusCode=202;
        res.statusMessage = 'Ok';
        let data = fs.readFileSync('./products.json','utf-8'); 
        let products = JSON.parse(data);
        let result = products.filter(product=>{
            return product.name.toUpperCase() == path.query.name.toUpperCase()
        })            
        res.write(JSON.stringify(result));
        res.end();
    }
    else{
        res.setHeader('Content-Type','text/plain');
        res.statusCode=404;
        res.statusMessage = 'Not found';
        res.end();
    }
}).listen(3030)