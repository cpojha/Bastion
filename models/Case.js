const a181_0xc2f4=['model','Case','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','constructor','default','Schema','__esModule','defineProperty','apply'];(function(_0x41f7d3,_0xc2f40c){const _0x22bc5d=function(_0x6615a3){while(--_0x6615a3){_0x41f7d3['push'](_0x41f7d3['shift']());}},_0x5ed265=function(){const _0x4db2cd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1bef84,_0x4ec440,_0x449bb1,_0x5816f7){_0x5816f7=_0x5816f7||{};let _0x443c6c=_0x4ec440+'='+_0x449bb1,_0x427d07=0x0;for(let _0x245e7b=0x0,_0xfbfc57=_0x1bef84['length'];_0x245e7b<_0xfbfc57;_0x245e7b++){const _0x5a07ff=_0x1bef84[_0x245e7b];_0x443c6c+=';\x20'+_0x5a07ff;const _0x40c937=_0x1bef84[_0x5a07ff];_0x1bef84['push'](_0x40c937),_0xfbfc57=_0x1bef84['length'],_0x40c937!==!![]&&(_0x443c6c+='='+_0x40c937);}_0x5816f7['cookie']=_0x443c6c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x154d84,_0x38f503){_0x154d84=_0x154d84||function(_0x4bc8ff){return _0x4bc8ff;};const _0x53a9f7=_0x154d84(new RegExp('(?:^|;\x20)'+_0x38f503['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x119456=function(_0x4e2607,_0xebdb2c){_0x4e2607(++_0xebdb2c);};return _0x119456(_0x22bc5d,_0xc2f40c),_0x53a9f7?decodeURIComponent(_0x53a9f7[0x1]):undefined;}},_0x1fdd58=function(){const _0x2da288=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2da288['test'](_0x4db2cd['removeCookie']['toString']());};_0x4db2cd['updateCookie']=_0x1fdd58;let _0x5bc558='';const _0x3c1eaf=_0x4db2cd['updateCookie']();if(!_0x3c1eaf)_0x4db2cd['setCookie'](['*'],'counter',0x1);else _0x3c1eaf?_0x5bc558=_0x4db2cd['getCookie'](null,'counter'):_0x4db2cd['removeCookie']();};_0x5ed265();}(a181_0xc2f4,0x179));const a181_0x22bc=function(_0x41f7d3,_0xc2f40c){_0x41f7d3=_0x41f7d3-0x0;let _0x22bc5d=a181_0xc2f4[_0x41f7d3];return _0x22bc5d;};const a181_0x449bb1=function(){let _0xb853c0=!![];return function(_0x4d5b2e,_0xe54f2f){const _0x249eeb=_0xb853c0?function(){if(_0xe54f2f){const _0x144927=_0xe54f2f[a181_0x22bc('0x2')](_0x4d5b2e,arguments);return _0xe54f2f=null,_0x144927;}}:function(){};return _0xb853c0=![],_0x249eeb;};}(),a181_0x4ec440=a181_0x449bb1(this,function(){const _0x5d5162=function(){const _0x19dabe=_0x5d5162[a181_0x22bc('0x7')](a181_0x22bc('0x5'))()[a181_0x22bc('0x7')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x19dabe[a181_0x22bc('0x6')](a181_0x4ec440);};return _0x5d5162();});a181_0x4ec440();'use strict';Object[a181_0x22bc('0x1')](exports,a181_0x22bc('0x0'),{'value':!![]});const mongoose=require('mongoose'),caseSchema=new mongoose[(a181_0x22bc('0x9'))]({'guild':{'type':String,'required':!![],'ref':'Guild'},'number':{'type':Number,'required':!![],'default':0x1},'messageId':{'type':String,'required':!![]}});caseSchema['index']({'guild':0x1,'number':0x1},{'unique':!![]}),exports[a181_0x22bc('0x8')]=mongoose[a181_0x22bc('0x3')](a181_0x22bc('0x4'),caseSchema);