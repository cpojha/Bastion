const a79_0x12d1=['client','member','tag','join','canManage','COLORS','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','rolePosition','resolver','Constants','resolveGuildMember','Command','language','info','channel','document','exec','unauthorized','locale','constructor','ownerID','apply','KICK_MEMBERS','It\x20allows\x20you\x20to\x20kick\x20users\x20from\x20the\x20server.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','BASTION_ERROR_TYPE','errors','send','kick','exports','name','test','user','memberKick','catch','guild'];(function(_0x32ece6,_0x12d1b0){const _0x33f325=function(_0x27d6d5){while(--_0x27d6d5){_0x32ece6['push'](_0x32ece6['shift']());}},_0x31d21f=function(){const _0x10ed80={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x30b008,_0x1bc52b,_0x24064a,_0x529eea){_0x529eea=_0x529eea||{};let _0xe7f6d7=_0x1bc52b+'='+_0x24064a,_0xecfb10=0x0;for(let _0x42f7ce=0x0,_0x17c458=_0x30b008['length'];_0x42f7ce<_0x17c458;_0x42f7ce++){const _0x458acb=_0x30b008[_0x42f7ce];_0xe7f6d7+=';\x20'+_0x458acb;const _0x2c62eb=_0x30b008[_0x458acb];_0x30b008['push'](_0x2c62eb),_0x17c458=_0x30b008['length'],_0x2c62eb!==!![]&&(_0xe7f6d7+='='+_0x2c62eb);}_0x529eea['cookie']=_0xe7f6d7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48c885,_0x5ee19c){_0x48c885=_0x48c885||function(_0x16bb78){return _0x16bb78;};const _0xb0dc79=_0x48c885(new RegExp('(?:^|;\x20)'+_0x5ee19c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x217ccf=function(_0x2519d1,_0x281b24){_0x2519d1(++_0x281b24);};return _0x217ccf(_0x33f325,_0x12d1b0),_0xb0dc79?decodeURIComponent(_0xb0dc79[0x1]):undefined;}},_0x15b0b3=function(){const _0x33444c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x33444c['test'](_0x10ed80['removeCookie']['toString']());};_0x10ed80['updateCookie']=_0x15b0b3;let _0x346590='';const _0xc0fae6=_0x10ed80['updateCookie']();if(!_0xc0fae6)_0x10ed80['setCookie'](['*'],'counter',0x1);else _0xc0fae6?_0x346590=_0x10ed80['getCookie'](null,'counter'):_0x10ed80['removeCookie']();};_0x31d21f();}(a79_0x12d1,0x13a));const a79_0x33f3=function(_0x32ece6,_0x12d1b0){_0x32ece6=_0x32ece6-0x0;let _0x33f325=a79_0x12d1[_0x32ece6];return _0x33f325;};const a79_0x24064a=function(){let _0x482a89=!![];return function(_0x35b2f4,_0xc0159e){const _0x1e1d1b=_0x482a89?function(){if(_0xc0159e){const _0x28b13d=_0xc0159e[a79_0x33f3('0xc')](_0x35b2f4,arguments);return _0xc0159e=null,_0x28b13d;}}:function(){};return _0x482a89=![],_0x1e1d1b;};}(),a79_0x1bc52b=a79_0x24064a(this,function(){const _0x253cae=function(){const _0x10f281=_0x253cae[a79_0x33f3('0xa')](a79_0x33f3('0xf'))()[a79_0x33f3('0xa')](a79_0x33f3('0x23'));return!_0x10f281[a79_0x33f3('0x17')](a79_0x1bc52b);};return _0x253cae();});a79_0x1bc52b();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require('../../utils/errors');module[a79_0x33f3('0x15')]=class Kick extends tesseract_1[a79_0x33f3('0x2')]{constructor(){super(a79_0x33f3('0x14'),{'description':a79_0x33f3('0xe'),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[a79_0x33f3('0x18')]},'scope':a79_0x33f3('0x1b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a79_0x33f3('0xd')],'userPermissions':[a79_0x33f3('0xd')],'syntax':['kick\x20--user\x20USER_ID\x20--\x20REASON']}),this[a79_0x33f3('0x7')]=async(_0x1b0ee1,_0x55a2a5)=>{const _0x1c7d77=this[a79_0x33f3('0x1c')][a79_0x33f3('0x25')][a79_0x33f3('0x1')](_0x1b0ee1[a79_0x33f3('0x1b')],_0x55a2a5[a79_0x33f3('0x18')]);if(!_0x1c7d77)throw new errors['DiscordError'](errors[a79_0x33f3('0x11')]['INVALID_COMMAND_SYNTAX'],this[a79_0x33f3('0x16')]);if(_0x1b0ee1[a79_0x33f3('0x22')]['id']!==_0x1b0ee1['guild'][a79_0x33f3('0xb')]&&!_0x1b0ee1[a79_0x33f3('0x1d')][a79_0x33f3('0x20')](_0x1c7d77))return await _0x1b0ee1[a79_0x33f3('0x5')][a79_0x33f3('0x13')]({'embed':{'color':tesseract_1['Constants'][a79_0x33f3('0x21')]['RED'],'title':this[a79_0x33f3('0x1c')]['locale'][a79_0x33f3('0x10')](_0x1b0ee1[a79_0x33f3('0x1b')][a79_0x33f3('0x6')][a79_0x33f3('0x3')],a79_0x33f3('0x12'),a79_0x33f3('0x8')),'description':this['client'][a79_0x33f3('0x9')]['getString'](_0x1b0ee1['guild'][a79_0x33f3('0x6')][a79_0x33f3('0x3')],a79_0x33f3('0x12'),a79_0x33f3('0x24'),_0x1b0ee1[a79_0x33f3('0x22')][a79_0x33f3('0x1e')],_0x1c7d77[a79_0x33f3('0x18')][a79_0x33f3('0x1e')])}})[a79_0x33f3('0x1a')](()=>{});const _0x1eeb59=_0x55a2a5['_'][a79_0x33f3('0x1f')]('\x20')||'-';await _0x1c7d77[a79_0x33f3('0x14')](_0x1eeb59),await _0x1b0ee1[a79_0x33f3('0x5')][a79_0x33f3('0x13')]({'embed':{'color':tesseract_1[a79_0x33f3('0x0')]['COLORS']['ORANGE'],'description':this['client']['locale']['getString'](_0x1b0ee1[a79_0x33f3('0x1b')][a79_0x33f3('0x6')][a79_0x33f3('0x3')],a79_0x33f3('0x4'),a79_0x33f3('0x19'),_0x1b0ee1[a79_0x33f3('0x22')][a79_0x33f3('0x1e')],_0x1c7d77[a79_0x33f3('0x18')][a79_0x33f3('0x1e')]),'fields':[{'name':'Reason','value':_0x1eeb59}],'footer':{'text':_0x1c7d77['id']}}})[a79_0x33f3('0x1a')](()=>{});};}};