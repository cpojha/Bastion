const a13_0x5f0d=['img','exec','return\x20/\x22\x20+\x20this\x20+\x20\x22/','json','makeRequest','Powered\x20by\x20Garfield','channel','Constants','COLORS','../../utils/omnic','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Publication\x20Date','@bastion/tesseract','toDateString','exports','test','garfield','IRIS','It\x20allows\x20you\x20to\x20see\x20the\x20latest\x20Garfield\x20comic\x20strip.','Garfield'];(function(_0x26f9b2,_0x5f0d67){const _0x1c2ebf=function(_0x2ae1e0){while(--_0x2ae1e0){_0x26f9b2['push'](_0x26f9b2['shift']());}},_0x11d196=function(){const _0x2d4bb4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19ef33,_0x3f4db2,_0x3d8448,_0x267ad1){_0x267ad1=_0x267ad1||{};let _0x5649bb=_0x3f4db2+'='+_0x3d8448,_0x271a63=0x0;for(let _0x3b965b=0x0,_0x32fa64=_0x19ef33['length'];_0x3b965b<_0x32fa64;_0x3b965b++){const _0x2c130a=_0x19ef33[_0x3b965b];_0x5649bb+=';\x20'+_0x2c130a;const _0x3524ff=_0x19ef33[_0x2c130a];_0x19ef33['push'](_0x3524ff),_0x32fa64=_0x19ef33['length'],_0x3524ff!==!![]&&(_0x5649bb+='='+_0x3524ff);}_0x267ad1['cookie']=_0x5649bb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x328492,_0xacd290){_0x328492=_0x328492||function(_0x3101eb){return _0x3101eb;};const _0x3d2825=_0x328492(new RegExp('(?:^|;\x20)'+_0xacd290['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x561ffa=function(_0x2c7547,_0x4987a5){_0x2c7547(++_0x4987a5);};return _0x561ffa(_0x1c2ebf,_0x5f0d67),_0x3d2825?decodeURIComponent(_0x3d2825[0x1]):undefined;}},_0xda13e7=function(){const _0x465116=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x465116['test'](_0x2d4bb4['removeCookie']['toString']());};_0x2d4bb4['updateCookie']=_0xda13e7;let _0x56aa81='';const _0x30ad19=_0x2d4bb4['updateCookie']();if(!_0x30ad19)_0x2d4bb4['setCookie'](['*'],'counter',0x1);else _0x30ad19?_0x56aa81=_0x2d4bb4['getCookie'](null,'counter'):_0x2d4bb4['removeCookie']();};_0x11d196();}(a13_0x5f0d,0x107));const a13_0x1c2e=function(_0x26f9b2,_0x5f0d67){_0x26f9b2=_0x26f9b2-0x0;let _0x1c2ebf=a13_0x5f0d[_0x26f9b2];return _0x1c2ebf;};const a13_0x3d8448=function(){let _0x18afb5=!![];return function(_0x17f53c,_0x47e435){const _0x17e41f=_0x18afb5?function(){if(_0x47e435){const _0x4ec0f2=_0x47e435['apply'](_0x17f53c,arguments);return _0x47e435=null,_0x4ec0f2;}}:function(){};return _0x18afb5=![],_0x17e41f;};}(),a13_0x3f4db2=a13_0x3d8448(this,function(){const _0x53898a=function(){const _0x2b9521=_0x53898a[a13_0x1c2e('0x14')](a13_0x1c2e('0xc'))()[a13_0x1c2e('0x14')](a13_0x1c2e('0x0'));return!_0x2b9521[a13_0x1c2e('0x5')](a13_0x3f4db2);};return _0x53898a();});a13_0x3f4db2();'use strict';const tesseract_1=require(a13_0x1c2e('0x2')),omnic=require(a13_0x1c2e('0x13'));module[a13_0x1c2e('0x4')]=class GarfieldCommand extends tesseract_1['Command']{constructor(){super(a13_0x1c2e('0x6'),{'description':a13_0x1c2e('0x8'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a13_0x1c2e('0xb')]=async _0x347681=>{const _0x3a5e8d=await omnic[a13_0x1c2e('0xe')]('/comics/garfield/latest'),_0xa9e2c8=await _0x3a5e8d[a13_0x1c2e('0xd')]();await _0x347681[a13_0x1c2e('0x10')]['send']({'embed':{'color':tesseract_1[a13_0x1c2e('0x11')][a13_0x1c2e('0x12')][a13_0x1c2e('0x7')],'author':{'name':a13_0x1c2e('0x9'),'url':_0xa9e2c8['url']},'fields':[{'name':a13_0x1c2e('0x1'),'value':new Date()[a13_0x1c2e('0x3')](),'inline':!![]}],'image':{'url':_0xa9e2c8[a13_0x1c2e('0xa')]},'footer':{'text':a13_0x1c2e('0xf')}}});};}};