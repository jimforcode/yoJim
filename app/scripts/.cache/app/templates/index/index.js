/*TMODJS:{"version":1,"md5":"9ef8c10e67f1964855ba464bffeef6ff"}*/
template('app/templates/index/index',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,iii=$data.iii,hello=$data.hello,$out='';$out+='<section>';
$out+=$escape(iii);
$out+='</section> <div>';
$out+=$escape(hello);
$out+='</div> ';
return new String($out);
});