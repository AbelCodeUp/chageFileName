/**
 * Created by Administrator on 2017/5/8.
 */

var http = require('http');
var fs = require('fs');

var documentRoot = 'E:/myWork/nodejs/fileSystem/www';
http.createServer(function(req, res){

    var url = req.url;

    var file = documentRoot + url;
    console.log(file);
    //console.log(fs.readFileSync(file));
    fs.readFile(file, function(err, data){
        if(err){
            res.writeHeader(404,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write('<h1>您的访问的页面迷路了</h1>');
            res.end();

        }else{

            res.writeHeader(200,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(8888);

console.log('服务器启动成功');