const a130_0x5091=['name','constructor','It\x20allows\x20you\x20to\x20echo\x20a\x20message\x20through\x20Bastion.\x20It\x20also\x20supports\x20Bastion\x20embed\x20objects.','parse','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','length','channel','BASTION_ERROR_TYPE','guild','../../utils/errors','@bastion/tesseract','INVALID_BASTION_EMBED','INVALID_COMMAND_SYNTAX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','exec','apply','send','echo'];(function(_0x4c2563,_0x509176){const _0x52b868=function(_0x30e79d){while(--_0x30e79d){_0x4c2563['push'](_0x4c2563['shift']());}},_0x43ba85=function(){const _0x398f69={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4a1c30,_0x8d6dee,_0x55121e,_0xeb1b0c){_0xeb1b0c=_0xeb1b0c||{};let _0x376364=_0x8d6dee+'='+_0x55121e,_0x25ecfb=0x0;for(let _0x1d4cd9=0x0,_0x5090db=_0x4a1c30['length'];_0x1d4cd9<_0x5090db;_0x1d4cd9++){const _0x3304b6=_0x4a1c30[_0x1d4cd9];_0x376364+=';\x20'+_0x3304b6;const _0x2c48b2=_0x4a1c30[_0x3304b6];_0x4a1c30['push'](_0x2c48b2),_0x5090db=_0x4a1c30['length'],_0x2c48b2!==!![]&&(_0x376364+='='+_0x2c48b2);}_0xeb1b0c['cookie']=_0x376364;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43df76,_0x1568fa){_0x43df76=_0x43df76||function(_0x5636b0){return _0x5636b0;};const _0x571513=_0x43df76(new RegExp('(?:^|;\x20)'+_0x1568fa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x109bc7=function(_0x120731,_0x36eb7b){_0x120731(++_0x36eb7b);};return _0x109bc7(_0x52b868,_0x509176),_0x571513?decodeURIComponent(_0x571513[0x1]):undefined;}},_0x2e62e4=function(){const _0x4245b0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4245b0['test'](_0x398f69['removeCookie']['toString']());};_0x398f69['updateCookie']=_0x2e62e4;let _0x361d40='';const _0x5af1a9=_0x398f69['updateCookie']();if(!_0x5af1a9)_0x398f69['setCookie'](['*'],'counter',0x1);else _0x5af1a9?_0x361d40=_0x398f69['getCookie'](null,'counter'):_0x398f69['removeCookie']();};_0x43ba85();}(a130_0x5091,0x1a4));const a130_0x52b8=function(_0x4c2563,_0x509176){_0x4c2563=_0x4c2563-0x0;let _0x52b868=a130_0x5091[_0x4c2563];return _0x52b868;};const a130_0x55121e=function(){let _0x305a67=!![];return function(_0x567d03,_0x3954e2){const _0x32e21e=_0x305a67?function(){if(_0x3954e2){const _0x139b1b=_0x3954e2[a130_0x52b8('0x11')](_0x567d03,arguments);return _0x3954e2=null,_0x139b1b;}}:function(){};return _0x305a67=![],_0x32e21e;};}(),a130_0x8d6dee=a130_0x55121e(this,function(){const _0xe8a9e2=function(){const _0x97f44=_0xe8a9e2[a130_0x52b8('0x1')](a130_0x52b8('0x4'))()['constructor'](a130_0x52b8('0xe'));return!_0x97f44[a130_0x52b8('0xf')](a130_0x8d6dee);};return _0xe8a9e2();});a130_0x8d6dee();'use strict';const tesseract_1=require(a130_0x52b8('0xb')),errors=require(a130_0x52b8('0xa')),embeds=require('../../utils/embeds');module[a130_0x52b8('0x5')]=class EchoCommand extends tesseract_1['Command']{constructor(){super(a130_0x52b8('0x13'),{'description':a130_0x52b8('0x2'),'triggers':[],'arguments':{},'scope':a130_0x52b8('0x9'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_MESSAGES'],'syntax':['echo\x20--\x20MESSAGE']}),this[a130_0x52b8('0x10')]=async(_0x58baee,_0x26c94d)=>{if(!_0x26c94d['_'][a130_0x52b8('0x6')])throw new errors['DiscordError'](errors[a130_0x52b8('0x8')][a130_0x52b8('0xd')],this[a130_0x52b8('0x0')]);const _0x585559=_0x26c94d['_']['join']('\x20');let _0x111ec4;try{_0x111ec4=JSON[a130_0x52b8('0x3')](_0x585559);if(!embeds['isValidBastionEmbed'](_0x111ec4))throw new Error(a130_0x52b8('0xc'));}catch{_0x111ec4=_0x585559;}await _0x58baee[a130_0x52b8('0x7')][a130_0x52b8('0x12')]({'embed':embeds['generateEmbed'](_0x111ec4)});};}};