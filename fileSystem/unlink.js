/**
 * Created by Administrator on 2017/5/5.
 */
var fs = require('fs');
var filepath = '126.txt';
/*
* unlink : 删除文件操作。������
* path           文件路径
* callback     回调，传递一个异常参数err。
* */
fs.unlink(filepath, function(err){
    if(err){
        throw err;
    }
    console.log('�ļ�:'+filepath+'ɾ���ɹ���');
});