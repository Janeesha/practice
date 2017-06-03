var fs=require("fs");
var filepath='./simple.txt';

//fs.writeFileSync(filepath,"hi janeesha");
// var data=fs.readFileSync(filepath);
// fs.writeFileSync('./output.txt',"hi janeesha");
// console.log(data.toString());

  var data=fs.readFile(filepath,function(err,data){ 	if(err)
  	{
 		throw err;
 		console.log(err);
 	}
 	


  fs.writeFile('./write1.txt',data,function(err,data){
  	if(err)
 	{
 		throw err;
 		console.log(err)
 	}
	console.log(data)
 })
 })

fs.unlink('./write1.txt',function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
   });  