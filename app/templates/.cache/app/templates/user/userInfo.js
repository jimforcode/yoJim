/*TMODJS:{"version":12,"md5":"57f23e3bfe6c596d374155582ec32651"}*/
template('app/templates/user/userInfo',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,users=$data.users,user=$data.user,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="jim-content"> <ul> ';
$each(users,function(user,i){
$out+=' <li> ';
$out+=$escape(user.name);
$out+='</li> ';
});
$out+=' </ul> <div class="skip"><a href="index.html?skip=detail">>>>>----></a></div> </div> ';
return new String($out);
});