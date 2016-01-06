/*TMODJS:{"version":1,"md5":"78b123a2fcdcb85e1f9774060a52112f"}*/
template('app/templates/user/userDetail',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,say=$data.say,$out='';$out+='<div class="detail-container"> <ul> <li>';
$out+=$escape(name);
$out+='</li> <li>';
$out+=$escape(say);
$out+='</li> </ul> </div> ';
return new String($out);
});