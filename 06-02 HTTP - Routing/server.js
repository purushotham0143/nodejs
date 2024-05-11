const http = require('http');
const fs = require('fs')
const path = require('path');

http.createServer((req,res)=>{       
   sendResponse(req.url,res);
}).listen(3030,()=>{
    console.log('server started')
})

function sendResponse(url,response){
    try{
    const extName = path.extname(url);
    let header = 'text/html'
    let filePath =''
    if(extName == '.css'){
        header = 'text/css' 
        filePath = path.join(__dirname,'styles',url) //./styles/style.css      
    } 
    else if(extName == '.jpg'){
        header = 'image/jpg' 
        filePath = path.join(__dirname,'images',url) //   
    }   
    else{
        filePath = path.join(__dirname,'view',url);
    }       
    response.setHeader('Content-Type',header);
    let data = fs.readFileSync(filePath,'utf-8')
    response.write(data);
    response.end();
    }
    catch{
        response.end();
        return '';
        
    }
}