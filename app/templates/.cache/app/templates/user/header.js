/*TMODJS:{"version":7,"md5":"7826c6f51e4ee0d9bf731bdbfbc03b98"}*/
template('app/templates/user/header',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,sayhi=$data.sayhi,$out='';$out+=' <div class="jim-header"> <span class="header-text">';
$out+=$escape(sayhi);
$out+='</span> </div> ';
return new String($out);
});