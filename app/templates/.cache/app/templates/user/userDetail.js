/*TMODJS:{"version":3,"md5":"4b41e85c55d66d8b1f1a81f4f3af6d18"}*/
template('app/templates/user/userDetail',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,say=$data.say,$out='';$out+='<div class="detail-container"> <ul> <li>';
$out+=$escape(name);
$out+='</li> <li>';
$out+=$escape(say);
$out+='</li> </ul> </div> ';
return new String($out);
});