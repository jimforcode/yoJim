/*TMODJS:{"version":10,"md5":"cd2ddc23eec2bc54665c84d1f6a23afe"}*/
template('app/templates/user/uerInfo',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,users=$data.users,use=$data.use,i=$data.i,$escape=$utils.$escape,user=$data.user,$out='';$out+='<div class="user-info content"> <ul> ';
$each(users,function(use,i){
$out+=' <li> ';
$out+=$escape(user.name);
$out+='</li> ';
});
$out+=' </ul> </div> ';
return new String($out);
});