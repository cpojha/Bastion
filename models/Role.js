const a189_0x5909=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','default','constructor','mongoose','Role','apply','Guild','__esModule','model','test'];(function(_0x4f1d79,_0x590986){const _0x882947=function(_0x3124df){while(--_0x3124df){_0x4f1d79['push'](_0x4f1d79['shift']());}},_0x1fe2ff=function(){const _0x4bee59={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x29e5fb,_0x2893c5,_0x34e831,_0xf538ce){_0xf538ce=_0xf538ce||{};let _0x45b2e3=_0x2893c5+'='+_0x34e831,_0xa52f0a=0x0;for(let _0xd0f145=0x0,_0x3a7132=_0x29e5fb['length'];_0xd0f145<_0x3a7132;_0xd0f145++){const _0x3a7fa2=_0x29e5fb[_0xd0f145];_0x45b2e3+=';\x20'+_0x3a7fa2;const _0x2fbafa=_0x29e5fb[_0x3a7fa2];_0x29e5fb['push'](_0x2fbafa),_0x3a7132=_0x29e5fb['length'],_0x2fbafa!==!![]&&(_0x45b2e3+='='+_0x2fbafa);}_0xf538ce['cookie']=_0x45b2e3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x51c7df,_0x961d99){_0x51c7df=_0x51c7df||function(_0x325776){return _0x325776;};const _0xc8bd1a=_0x51c7df(new RegExp('(?:^|;\x20)'+_0x961d99['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x45f12b=function(_0x19ae80,_0x4a3ca6){_0x19ae80(++_0x4a3ca6);};return _0x45f12b(_0x882947,_0x590986),_0xc8bd1a?decodeURIComponent(_0xc8bd1a[0x1]):undefined;}},_0xf1aa65=function(){const _0x260b22=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x260b22['test'](_0x4bee59['removeCookie']['toString']());};_0x4bee59['updateCookie']=_0xf1aa65;let _0x2e8342='';const _0x5ef5b1=_0x4bee59['updateCookie']();if(!_0x5ef5b1)_0x4bee59['setCookie'](['*'],'counter',0x1);else _0x5ef5b1?_0x2e8342=_0x4bee59['getCookie'](null,'counter'):_0x4bee59['removeCookie']();};_0x1fe2ff();}(a189_0x5909,0x1b0));const a189_0x8829=function(_0x4f1d79,_0x590986){_0x4f1d79=_0x4f1d79-0x0;let _0x882947=a189_0x5909[_0x4f1d79];return _0x882947;};const a189_0x34e831=function(){let _0x598300=!![];return function(_0x1dd718,_0x13af73){const _0x1e3bf8=_0x598300?function(){if(_0x13af73){const _0x5a2c2c=_0x13af73[a189_0x8829('0x3')](_0x1dd718,arguments);return _0x13af73=null,_0x5a2c2c;}}:function(){};return _0x598300=![],_0x1e3bf8;};}(),a189_0x2893c5=a189_0x34e831(this,function(){const _0x57483e=function(){const _0x4e363f=_0x57483e[a189_0x8829('0x0')](a189_0x8829('0x9'))()[a189_0x8829('0x0')](a189_0x8829('0x8'));return!_0x4e363f[a189_0x8829('0x7')](a189_0x2893c5);};return _0x57483e();});a189_0x2893c5();'use strict';Object['defineProperty'](exports,a189_0x8829('0x5'),{'value':!![]});const mongoose=require(a189_0x8829('0x1'));exports[a189_0x8829('0xa')]=mongoose[a189_0x8829('0x6')](a189_0x8829('0x2'),new mongoose['Schema']({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':a189_0x8829('0x4')},'emoji':{'type':String},'selfAssignable':{'type':Boolean},'autoAssignable':{'type':{'forBots':{'type':Boolean},'forUsers':{'type':Boolean}}},'level':{'type':Number},'price':{'type':Number},'blacklisted':{'type':Boolean},'disabledCommands':{'type':[String]}}));