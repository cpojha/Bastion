const a129_0xd811=['COLORS','DiscordError','define','channel','map','constructor','json','join','It\x20allows\x20you\x20to\x20look\x20up\x20definitions\x20for\x20the\x20specified\x20word.','test','Command','makeRequest','Constants','slice','guild','../../utils/omnic','send','../../utils/errors','length','/words/definitions/','INVALID_COMMAND_SYNTAX','filter','IRIS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','toLowerCase','exec','exports','@bastion/tesseract','text','Powered\x20by\x20Century\x20Dictionary,\x20the\x20American\x20Heritage\x20Dictionary,\x20and\x20Wiktionary.'];(function(_0x330d15,_0xd81105){const _0xa1795b=function(_0x2e9524){while(--_0x2e9524){_0x330d15['push'](_0x330d15['shift']());}},_0x184513=function(){const _0x3606e7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f1994,_0x29e15c,_0xa47245,_0x46cfb6){_0x46cfb6=_0x46cfb6||{};let _0x43ffb3=_0x29e15c+'='+_0xa47245,_0x16e8fe=0x0;for(let _0x175308=0x0,_0x3a63b7=_0x3f1994['length'];_0x175308<_0x3a63b7;_0x175308++){const _0x5198d8=_0x3f1994[_0x175308];_0x43ffb3+=';\x20'+_0x5198d8;const _0x2c66a6=_0x3f1994[_0x5198d8];_0x3f1994['push'](_0x2c66a6),_0x3a63b7=_0x3f1994['length'],_0x2c66a6!==!![]&&(_0x43ffb3+='='+_0x2c66a6);}_0x46cfb6['cookie']=_0x43ffb3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43ec8f,_0x383c38){_0x43ec8f=_0x43ec8f||function(_0x1981e8){return _0x1981e8;};const _0x9ba0f0=_0x43ec8f(new RegExp('(?:^|;\x20)'+_0x383c38['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x9b8b6a=function(_0x52a848,_0x38d55a){_0x52a848(++_0x38d55a);};return _0x9b8b6a(_0xa1795b,_0xd81105),_0x9ba0f0?decodeURIComponent(_0x9ba0f0[0x1]):undefined;}},_0xad3375=function(){const _0x136eb3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x136eb3['test'](_0x3606e7['removeCookie']['toString']());};_0x3606e7['updateCookie']=_0xad3375;let _0x5d1db1='';const _0xdb6358=_0x3606e7['updateCookie']();if(!_0xdb6358)_0x3606e7['setCookie'](['*'],'counter',0x1);else _0xdb6358?_0x5d1db1=_0x3606e7['getCookie'](null,'counter'):_0x3606e7['removeCookie']();};_0x184513();}(a129_0xd811,0x13a));const a129_0xa179=function(_0x330d15,_0xd81105){_0x330d15=_0x330d15-0x0;let _0xa1795b=a129_0xd811[_0x330d15];return _0xa1795b;};const a129_0xa47245=function(){let _0x2cd714=!![];return function(_0x2f217d,_0x4f49bc){const _0xf8ac59=_0x2cd714?function(){if(_0x4f49bc){const _0x4646e3=_0x4f49bc[a129_0xa179('0x14')](_0x2f217d,arguments);return _0x4f49bc=null,_0x4646e3;}}:function(){};return _0x2cd714=![],_0xf8ac59;};}(),a129_0x29e15c=a129_0xa47245(this,function(){const _0x40b862=function(){const _0xf40d86=_0x40b862[a129_0xa179('0x1')](a129_0xa179('0x13'))()[a129_0xa179('0x1')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xf40d86[a129_0xa179('0x5')](a129_0x29e15c);};return _0x40b862();});a129_0x29e15c();'use strict';const tesseract_1=require(a129_0xa179('0x18')),errors=require(a129_0xa179('0xd')),omnic=require(a129_0xa179('0xb'));module[a129_0xa179('0x17')]=class DefinitionsCommand extends tesseract_1[a129_0xa179('0x6')]{constructor(){super('definitions',{'description':a129_0xa179('0x4'),'triggers':[a129_0xa179('0x1d')],'arguments':{},'scope':a129_0xa179('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['definitions\x20WORD']}),this[a129_0xa179('0x16')]=async(_0x278125,_0x4ed322)=>{if(!_0x4ed322['_'][a129_0xa179('0xe')])throw new errors[(a129_0xa179('0x1c'))](errors['BASTION_ERROR_TYPE'][a129_0xa179('0x10')],this['name']);const _0x5108c2=_0x4ed322['_'][a129_0xa179('0x3')]('\x20'),_0x2a9b30=await omnic[a129_0xa179('0x7')](a129_0xa179('0xf')+_0x5108c2),_0x59b4da=await _0x2a9b30[a129_0xa179('0x2')]();await _0x278125[a129_0xa179('0x1e')][a129_0xa179('0xc')]({'embed':{'color':tesseract_1[a129_0xa179('0x8')][a129_0xa179('0x1b')][a129_0xa179('0x12')],'author':{'name':_0x5108c2[a129_0xa179('0x15')]()},'title':'Definitions','fields':_0x59b4da[a129_0xa179('0x11')](_0x2bee07=>_0x2bee07[a129_0xa179('0x19')])[a129_0xa179('0x9')](0x0,0x5)[a129_0xa179('0x0')]((_0x567b5b,_0x1f2c5b)=>({'name':_0x1f2c5b+0x1+'.\x20'+(_0x567b5b['partOfSpeech']||''),'value':_0x567b5b[a129_0xa179('0x19')][a129_0xa179('0x9')](0x0,0x400)})),'footer':{'text':a129_0xa179('0x1a')}}});};}};