/**
 * Created by Administrator on 2017/5/4.
 */

var bf = new Buffer('bianxiaokai');

//console.log(bf.toString());
//
//console.log(bf.toString('utf-8',1));

var str = 'bianxiaokai';

var bf2 = new Buffer('±ßÏþ¿­');

//console.log(bf2.toJSON());

var bf4 = new Buffer(11);

bf.copy(bf4,1,2,3);


console.log(Buffer.byteLength(str));
