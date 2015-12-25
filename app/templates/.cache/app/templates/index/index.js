/*TMODJS:{"version":1,"md5":"bb7f8647752b804dee0cb520de14f2d6"}*/
template('app/templates/index/index',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,iii=$data.iii,hello=$data.hello,$out='';$out+='<section>';
$out+=$escape(iii);
$out+='</section> <div>';
$out+=$escape(hello);
$out+='</div> <div>';
$out+=$escape(hello);
$out+='</div> ';
return new String($out);
});