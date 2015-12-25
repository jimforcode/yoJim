/*TMODJS:{"version":2,"md5":"026234728b0a26615a5c439750a56074"}*/
template('app/templates/user/heaader',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,sayhi=$data.sayhi,$out='';$out+='<div class="header">';
$out+=$escape(sayhi);
$out+='</div> ';
return new String($out);
});