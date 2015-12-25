/*TMODJS:{"version":3,"md5":"696ebe94f8208e669328f9fcfca64bb9"}*/
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