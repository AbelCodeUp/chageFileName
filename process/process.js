/**
 * Created by Administrator on 2017/5/4.
 */

var a;
var b;

process.stdout.write('a:');

process.stdin.on('data', function(chunk){
    if(!a){
        a = Number(chunk);
        process.stdout.write('b:');
    }else{
        b = Number(chunk);
        process.stdout.write('a+b='+ (a + b));
    }

})