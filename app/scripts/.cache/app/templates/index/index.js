/*TMODJS:{"version":2,"md5":"a40f3452fbb4581f90c39f84b31bcff4"}*/
template('app/templates/index/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,iii=$data.iii,hello=$data.hello,$out='';$out+='<section>';
$out+=$escape(iii);
$out+='</section> <div>';
$out+=$escape(hello);
$out+='</div> <div>';
$out+=$escape(hello);
$out+='</div> ';
return new String($out);
});