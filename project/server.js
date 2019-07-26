var http = require('http'), express = require('express'), bodyparser = require('body-parser'), fs = require('fs'), mysql = require('mysql'), url = require('url');
var app = express();

//pc
app.use(express.static(__dirname+'/'));

//mc
//app.use(express.static(__dirname+'/Front_MC/codingFiles'));

app.use(bodyparser.json());

//pc
app.get('/',function(request, response){
  try{
		fs.readFile('/index.html','utf-8',function(error, data){
			response.writeHead(200,{'Content-Type':'text-html'});
			response.end(data);
		})
	}catch(e){
		console.log(e);
	}
});

app.get("*",function(request, response){
	var fileName = '' + url.parse(request.url).pathname;
	fs.readFile(fileName,'utf-8',function(error, data){
		response.writeHead(200,{'Content-Type':'text-html'});
		response.end(data);
	})
});

//mc
// app.get('/',function(request, response){
//   try{
// 		fs.readFile('Front_MC/codingFiles/index.html','utf-8',function(error, data){
// 			response.writeHead(200,{'Content-Type':'text-html'});
// 			response.end(data);
// 		})
// 	}catch(e){
// 		console.log(e);
// 	}
// });
//
// app.get("*",function(request, response){
// 	var fileName = 'Front_MC/codingFiles' + url.parse(request.url).pathname;
// 	fs.readFile(fileName,'utf-8',function(error, data){
// 		response.writeHead(200,{'Content-Type':'text-html'});
// 		response.end(data);
// 	})
// });

http.createServer(app).listen(8080, function(){
	console.log("Server is running...");
});
