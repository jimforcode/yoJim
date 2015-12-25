/*TMODJS:{"version":1,"md5":"862aca02f90ecb11613fb36f7a111427"}*/
template('app/templates/user/uerInfo',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,$out='';$out+='<div> ';
$out+=$escape(name);
$out+=' </div> ';
return new String($out);
});