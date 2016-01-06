/*TMODJS:{"version":4,"md5":"ac01814aa277e4489a0da004f3485b4d"}*/
template('app/templates/index/index',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,menu=$data.menu,item=$data.item,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul class="jim-menu-container"> ';
$each(menu,function(item,$index){
$out+=' ';
if(item.title=='index'){
$out+=' <li><a href="#/';
$out+=$escape(item.dist);
$out+='"><i class=\'fa fa-graduation-cap\'></i></a> </li> ';
}
$out+=' ';
if(item.title!='index'){
$out+=' <li><a href="#/';
$out+=$escape(item.dist);
$out+='">';
$out+=$escape(item.title);
$out+='</i></a> </li> ';
}
$out+=' ';
});
$out+=' </ul> ';
return new String($out);
});