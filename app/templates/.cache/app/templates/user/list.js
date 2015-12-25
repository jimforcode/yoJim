/*TMODJS:{"version":2,"md5":"f2b967c1be39695c56cb8b3d6a4f4166"}*/
template('app/templates/user/list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,username=$data.username,$out='';$out+='<ul> <li>';
$out+=$escape(username);
$out+='</li> </ul> ';
return new String($out);
});