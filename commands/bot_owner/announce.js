const a1_0x4b85=['cache','\x20/\x20','announcementsChannelId','message','Announced','announce','INVALID_COMMAND_SYNTAX','apply','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channels','channel','📣\x20','../../utils/errors','send','announce\x20--title\x20TITLE\x20--message\x20MESSAGE','constructor','client','title','COLORS','Constants','get','exports','@bastion/tesseract','catch','has','IRIS','tag','name','guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../models/Guild','It\x20allows\x20you\x20to\x20send\x20announcements\x20to\x20the\x20announcement\x20channels\x20in\x20the\x20servers\x20where\x20it\x20has\x20been\x20set.','find','DiscordError','PUPIL'];(function(_0x339374,_0x4b8569){const _0x41bf14=function(_0x5dc12b){while(--_0x5dc12b){_0x339374['push'](_0x339374['shift']());}},_0x1f403a=function(){const _0x318168={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xbe25bd,_0x45bfab,_0xb325cd,_0x25f2ff){_0x25f2ff=_0x25f2ff||{};let _0x5ffb45=_0x45bfab+'='+_0xb325cd,_0x4897df=0x0;for(let _0x2c7791=0x0,_0x3d0c50=_0xbe25bd['length'];_0x2c7791<_0x3d0c50;_0x2c7791++){const _0x261129=_0xbe25bd[_0x2c7791];_0x5ffb45+=';\x20'+_0x261129;const _0x587501=_0xbe25bd[_0x261129];_0xbe25bd['push'](_0x587501),_0x3d0c50=_0xbe25bd['length'],_0x587501!==!![]&&(_0x5ffb45+='='+_0x587501);}_0x25f2ff['cookie']=_0x5ffb45;},'removeCookie':function(){return'dev';},'getCookie':function(_0x27b648,_0x43d90f){_0x27b648=_0x27b648||function(_0x5c91b5){return _0x5c91b5;};const _0x28917d=_0x27b648(new RegExp('(?:^|;\x20)'+_0x43d90f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x12d549=function(_0x377448,_0x2dc2df){_0x377448(++_0x2dc2df);};return _0x12d549(_0x41bf14,_0x4b8569),_0x28917d?decodeURIComponent(_0x28917d[0x1]):undefined;}},_0xdb302c=function(){const _0xfdd2c2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xfdd2c2['test'](_0x318168['removeCookie']['toString']());};_0x318168['updateCookie']=_0xdb302c;let _0x459459='';const _0x402b13=_0x318168['updateCookie']();if(!_0x402b13)_0x318168['setCookie'](['*'],'counter',0x1);else _0x402b13?_0x459459=_0x318168['getCookie'](null,'counter'):_0x318168['removeCookie']();};_0x1f403a();}(a1_0x4b85,0x13c));const a1_0x41bf=function(_0x339374,_0x4b8569){_0x339374=_0x339374-0x0;let _0x41bf14=a1_0x4b85[_0x339374];return _0x41bf14;};const a1_0xb325cd=function(){let _0xf0514c=!![];return function(_0x5909fd,_0x481e6c){const _0x166715=_0xf0514c?function(){if(_0x481e6c){const _0x121d4c=_0x481e6c[a1_0x41bf('0xf')](_0x5909fd,arguments);return _0x481e6c=null,_0x121d4c;}}:function(){};return _0xf0514c=![],_0x166715;};}(),a1_0x45bfab=a1_0xb325cd(this,function(){const _0x90a93b=function(){const _0x594a3b=_0x90a93b['constructor'](a1_0x41bf('0x2'))()[a1_0x41bf('0x18')](a1_0x41bf('0x11'));return!_0x594a3b['test'](a1_0x45bfab);};return _0x90a93b();});a1_0x45bfab();'use strict';const tesseract_1=require(a1_0x41bf('0x1f')),Guild_1=require(a1_0x41bf('0x3')),errors=require(a1_0x41bf('0x15'));module[a1_0x41bf('0x1e')]=class Announce extends tesseract_1['Command']{constructor(){super(a1_0x41bf('0xd'),{'description':a1_0x41bf('0x4'),'triggers':[],'arguments':{'array':[a1_0x41bf('0xb'),a1_0x41bf('0x1a')],'string':[a1_0x41bf('0xb'),a1_0x41bf('0x1a')]},'scope':a1_0x41bf('0x1'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['announce\x20--message\x20MESSAGE',a1_0x41bf('0x17')]}),this['exec']=async(_0x3978aa,_0x5d2ba0)=>{const _0x5cd697=_0x5d2ba0[a1_0x41bf('0x1a')]&&_0x5d2ba0[a1_0x41bf('0x1a')]['join']('\x20'),_0x532726=_0x5d2ba0[a1_0x41bf('0xb')]&&_0x5d2ba0[a1_0x41bf('0xb')]['join']('\x20');if(!_0x532726)throw new errors[(a1_0x41bf('0x6'))](errors['BASTION_ERROR_TYPE'][a1_0x41bf('0xe')],this[a1_0x41bf('0x0')]);const _0x2e187c=await Guild_1['default'][a1_0x41bf('0x5')]({'announcementsChannelId':{'$exists':!![]}});for(const _0x50af90 of _0x2e187c){if(this[a1_0x41bf('0x19')][a1_0x41bf('0x12')]['cache'][a1_0x41bf('0x21')](_0x50af90[a1_0x41bf('0xa')])){const _0x254a51=this['client'][a1_0x41bf('0x12')][a1_0x41bf('0x8')][a1_0x41bf('0x1d')](_0x50af90[a1_0x41bf('0xa')]);_0x254a51[a1_0x41bf('0x16')]({'embed':{'color':tesseract_1['Constants'][a1_0x41bf('0x1b')][a1_0x41bf('0x22')],'title':_0x5cd697,'description':_0x532726,'footer':{'text':'📣\x20'+_0x3978aa['author']['tag']+a1_0x41bf('0x9')+_0x3978aa[a1_0x41bf('0x10')]['id']}}})[a1_0x41bf('0x20')](()=>{});}}await _0x3978aa[a1_0x41bf('0x13')][a1_0x41bf('0x16')]({'embed':{'color':tesseract_1[a1_0x41bf('0x1c')]['COLORS'][a1_0x41bf('0x7')],'author':{'name':a1_0x41bf('0xc')},'title':_0x5cd697,'description':_0x532726,'footer':{'text':a1_0x41bf('0x14')+_0x3978aa[a1_0x41bf('0x10')][a1_0x41bf('0x23')]+a1_0x41bf('0x9')+_0x3978aa['author']['id']}}})[a1_0x41bf('0x20')](()=>{});};}};