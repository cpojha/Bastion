const a183_0x2409=['Schema','TextChannel','default','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','model','test','__esModule','Giveaway'];(function(_0x1ad20f,_0x240998){const _0xfd2ce=function(_0x313757){while(--_0x313757){_0x1ad20f['push'](_0x1ad20f['shift']());}},_0x1589f0=function(){const _0x3719e8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x39e0da,_0x2c6f83,_0x3f5004,_0x2f36e0){_0x2f36e0=_0x2f36e0||{};let _0x8bbbbb=_0x2c6f83+'='+_0x3f5004,_0x4bf019=0x0;for(let _0x1e524a=0x0,_0x54a12c=_0x39e0da['length'];_0x1e524a<_0x54a12c;_0x1e524a++){const _0x406951=_0x39e0da[_0x1e524a];_0x8bbbbb+=';\x20'+_0x406951;const _0x1dd054=_0x39e0da[_0x406951];_0x39e0da['push'](_0x1dd054),_0x54a12c=_0x39e0da['length'],_0x1dd054!==!![]&&(_0x8bbbbb+='='+_0x1dd054);}_0x2f36e0['cookie']=_0x8bbbbb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a9158,_0x27e7dd){_0x5a9158=_0x5a9158||function(_0x331ac7){return _0x331ac7;};const _0x4f2cdf=_0x5a9158(new RegExp('(?:^|;\x20)'+_0x27e7dd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x347c4c=function(_0x581a04,_0x31a796){_0x581a04(++_0x31a796);};return _0x347c4c(_0xfd2ce,_0x240998),_0x4f2cdf?decodeURIComponent(_0x4f2cdf[0x1]):undefined;}},_0x59f6fe=function(){const _0x37175d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x37175d['test'](_0x3719e8['removeCookie']['toString']());};_0x3719e8['updateCookie']=_0x59f6fe;let _0x419685='';const _0x4bd964=_0x3719e8['updateCookie']();if(!_0x4bd964)_0x3719e8['setCookie'](['*'],'counter',0x1);else _0x4bd964?_0x419685=_0x3719e8['getCookie'](null,'counter'):_0x3719e8['removeCookie']();};_0x1589f0();}(a183_0x2409,0xd4));const a183_0xfd2c=function(_0x1ad20f,_0x240998){_0x1ad20f=_0x1ad20f-0x0;let _0xfd2ce=a183_0x2409[_0x1ad20f];return _0xfd2ce;};const a183_0x3f5004=function(){let _0x3c5209=!![];return function(_0x58aa3f,_0x3973ee){const _0x1e02ea=_0x3c5209?function(){if(_0x3973ee){const _0x5049f3=_0x3973ee[a183_0xfd2c('0x1')](_0x58aa3f,arguments);return _0x3973ee=null,_0x5049f3;}}:function(){};return _0x3c5209=![],_0x1e02ea;};}(),a183_0x2c6f83=a183_0x3f5004(this,function(){const _0x4ac08f=function(){const _0x170b61=_0x4ac08f['constructor'](a183_0xfd2c('0x2'))()['constructor'](a183_0xfd2c('0x3'));return!_0x170b61[a183_0xfd2c('0x5')](a183_0x2c6f83);};return _0x4ac08f();});a183_0x2c6f83();'use strict';Object['defineProperty'](exports,a183_0xfd2c('0x6'),{'value':!![]});const mongoose=require('mongoose'),giveawaySchema=new mongoose[(a183_0xfd2c('0x8'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a183_0xfd2c('0x9')},'guild':{'type':String,'required':!![],'ref':'Guild'},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports[a183_0xfd2c('0x0')]=mongoose[a183_0xfd2c('0x4')](a183_0xfd2c('0x7'),giveawaySchema);