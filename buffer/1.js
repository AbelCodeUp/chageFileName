/**
 * Created by Administrator on 2017/5/4.
 */

var str = 'bianxiaokai';

console.log( new Buffer( str ) );
var bf = new Buffer(5);

bf.write( str,1,2 );

console.log( bf );