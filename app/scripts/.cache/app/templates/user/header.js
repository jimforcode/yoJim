/*TMODJS:{"version":1,"md5":"660d431ed3f50a921558fa58e2724a12"}*/
template('app/templates/user/header',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,sayhi=$data.sayhi,$out='';$out+=' <div class="jim-header"> <span class="header-text">';
$out+=$escape(sayhi);
$out+='</span> </div> ';
return new String($out);
});