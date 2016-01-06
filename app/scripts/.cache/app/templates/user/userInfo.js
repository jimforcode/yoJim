/*TMODJS:{"version":1,"md5":"5e61f34a5efa697e5734d4eab9be2721"}*/
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