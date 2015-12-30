/*TMODJS:{"version":15,"md5":"5b627219ccf9ff4c5436cd7b62f397e6"}*/
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