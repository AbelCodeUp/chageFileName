/**
 * Created by Administrator on 2017/5/11.
 */

//called for each file walked in the directory
var fs = require('fs')
    ,stdin = process.stdin
    ,stdout = process.stdout;
var stats = [];
fs.readdir(process.cwd(), function(err, files) {
    console.log('');
    if(!files.length){
        return console.log('  \033[31m No files to show!\033[39m\n]');
    }
    console.log('  Select which file or directory you want to see\n');


    function file(i){
        var filename = files[i];


        fs.stat(__dirname + '/' + filename, function (err, stat){
            stats[i] = stat;
            if(stat.isDirectory()){
                console.log('    '+i+'    \033[36m' + filename + '/\033[39m');
            }else{
                console.log('    '+i+'    \033[90m' + filename + '/\033[39m');
            }

            if(++i == files.length) {
                read();
            }else{
                file(i);
            }
        })
    }

// read user input when files are shown
    function read(){
        console.log('');
        stdout.write('    \033[36mEnter your choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf-8');
        stdin.on('data',option);
    }

    function option(data){
        var filename = files[Number(data)];
        if(!filename){
            stdout.write('    \033[31mEnter your choice: \033[39m')
        }else{
            stdin.pause();
            if(stats[Number(data)].isDirectory()){
                fs.readdir(__dirname + '/' + filename, function(err, files){
                    console.log('');
                    console.log('   ('+ files.length  +' files) ');

                    files.forEach(function(file){
                        console.log('      - ' + file);
                    });
                    console.log('');
                    process.exit(1);

                })
            }else{
                fs.readFile(__dirname + '/' + filename,'utf-8',function(err,data){
                    console.log('');
                    console.log('    \033[90m' + data.replace(/(.*)/g,'     $1') + '/\033[39m');
                    process.exit(1);
                })
            }

        }
    }

    file(0);

});
