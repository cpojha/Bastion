const a100_0x179f=['INVALID_COMMAND_SYNTAX','data','metadata','/playerstats/csgo/','../../utils/omnic','exec','counterStrikeGlobalOffensive\x20USERNAME','name','toLowerCase','apply','rankScore','Command','platformInfo','@bastion/tesseract','overview','counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM','length','constructor','makeRequest','map','\x20has\x20played\x20for\x20','errors','iconUrl','platforms','test','type','toFixed','\x20•\x20Powered\x20by\x20Tracker\x20Network','keys','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','CSGO','send','avatarUrl','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','COLORS','join','segments','toUpperCase','channel','stats','DiscordError','json','timePlayed','../../utils/errors','message','exports','find','platform','https://steamcommunity.com/id/','csgo','platformUserHandle','../../utils/constants','displayName','filter','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x236b6d,_0x179fc0){const _0x3d30af=function(_0x1df8cd){while(--_0x1df8cd){_0x236b6d['push'](_0x236b6d['shift']());}},_0x67c67f=function(){const _0x5bd429={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x30e338,_0x758ec,_0x39d325,_0x16ffdc){_0x16ffdc=_0x16ffdc||{};let _0x29e6a6=_0x758ec+'='+_0x39d325,_0x291b91=0x0;for(let _0xbd46ed=0x0,_0x1bb862=_0x30e338['length'];_0xbd46ed<_0x1bb862;_0xbd46ed++){const _0x3e59fa=_0x30e338[_0xbd46ed];_0x29e6a6+=';\x20'+_0x3e59fa;const _0x160936=_0x30e338[_0x3e59fa];_0x30e338['push'](_0x160936),_0x1bb862=_0x30e338['length'],_0x160936!==!![]&&(_0x29e6a6+='='+_0x160936);}_0x16ffdc['cookie']=_0x29e6a6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3aa346,_0x16fd5d){_0x3aa346=_0x3aa346||function(_0x31b050){return _0x31b050;};const _0x39e081=_0x3aa346(new RegExp('(?:^|;\x20)'+_0x16fd5d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2652a0=function(_0x2aaa07,_0x4cfb64){_0x2aaa07(++_0x4cfb64);};return _0x2652a0(_0x3d30af,_0x179fc0),_0x39e081?decodeURIComponent(_0x39e081[0x1]):undefined;}},_0x36e02e=function(){const _0x130970=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x130970['test'](_0x5bd429['removeCookie']['toString']());};_0x5bd429['updateCookie']=_0x36e02e;let _0x189e97='';const _0x26ec6a=_0x5bd429['updateCookie']();if(!_0x26ec6a)_0x5bd429['setCookie'](['*'],'counter',0x1);else _0x26ec6a?_0x189e97=_0x5bd429['getCookie'](null,'counter'):_0x5bd429['removeCookie']();};_0x67c67f();}(a100_0x179f,0xf8));const a100_0x3d30=function(_0x236b6d,_0x179fc0){_0x236b6d=_0x236b6d-0x0;let _0x3d30af=a100_0x179f[_0x236b6d];return _0x3d30af;};const a100_0x39d325=function(){let _0x11d814=!![];return function(_0x250412,_0x3dc328){const _0x4fded=_0x11d814?function(){if(_0x3dc328){const _0x5c42bf=_0x3dc328[a100_0x3d30('0x24')](_0x250412,arguments);return _0x3dc328=null,_0x5c42bf;}}:function(){};return _0x11d814=![],_0x4fded;};}(),a100_0x758ec=a100_0x39d325(this,function(){const _0x4a9f85=function(){const _0x5715f7=_0x4a9f85[a100_0x3d30('0x2c')](a100_0x3d30('0x1a'))()[a100_0x3d30('0x2c')](a100_0x3d30('0x1'));return!_0x5715f7[a100_0x3d30('0x33')](a100_0x758ec);};return _0x4a9f85();});a100_0x758ec();'use strict';const tesseract_1=require(a100_0x3d30('0x28')),constants=require(a100_0x3d30('0x17')),errors=require(a100_0x3d30('0xf')),omnic=require(a100_0x3d30('0x1f'));module[a100_0x3d30('0x11')]=class CounterStrikeGlobalOffensiveCommand extends tesseract_1[a100_0x3d30('0x26')]{constructor(){super('counterStrikeGlobalOffensive',{'description':a100_0x3d30('0x5'),'triggers':[a100_0x3d30('0x15')],'arguments':{'alias':{'platform':['p']},'string':[a100_0x3d30('0x13')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a100_0x3d30('0x21'),a100_0x3d30('0x2a')]}),this[a100_0x3d30('0x20')]=async(_0x4f1fd0,_0xf60e20)=>{if(!_0xf60e20['_'][a100_0x3d30('0x2b')])throw new errors[(a100_0x3d30('0xc'))](errors['BASTION_ERROR_TYPE'][a100_0x3d30('0x1b')],this[a100_0x3d30('0x22')]);const _0x4bcfa8=_0xf60e20['_'][a100_0x3d30('0x7')]('\x20'),_0x4474eb=_0xf60e20[a100_0x3d30('0x13')]&&this['platforms']['includes'](_0xf60e20[a100_0x3d30('0x13')]['toLowerCase']())?_0xf60e20[a100_0x3d30('0x13')][a100_0x3d30('0x23')]():this[a100_0x3d30('0x32')][0x0],_0x22604d=await omnic[a100_0x3d30('0x2d')](a100_0x3d30('0x1e')+_0x4474eb+'/'+encodeURIComponent(_0x4bcfa8)),_0x349da9=await _0x22604d[a100_0x3d30('0xd')]();if(_0x349da9[a100_0x3d30('0x30')])throw new Error(_0x349da9[a100_0x3d30('0x30')][0x0][a100_0x3d30('0x10')]);const _0x1e24f1=_0x349da9['data'][a100_0x3d30('0x8')][a100_0x3d30('0x12')](_0x43b5a7=>_0x43b5a7[a100_0x3d30('0x34')]===a100_0x3d30('0x29'));await _0x4f1fd0[a100_0x3d30('0xa')][a100_0x3d30('0x3')]({'embed':{'color':constants[a100_0x3d30('0x6')][a100_0x3d30('0x2')],'author':{'name':_0x349da9['data'][a100_0x3d30('0x27')][a100_0x3d30('0x16')],'url':a100_0x3d30('0x14')+_0x349da9[a100_0x3d30('0x1c')]['platformInfo'][a100_0x3d30('0x16')]},'title':'Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','description':_0x1e24f1['stats'][a100_0x3d30('0xe')]?_0x349da9[a100_0x3d30('0x1c')][a100_0x3d30('0x27')][a100_0x3d30('0x16')]+a100_0x3d30('0x2f')+(_0x1e24f1['stats'][a100_0x3d30('0xe')]['value']/0x3c/0x3c)[a100_0x3d30('0x35')](0x2)+'\x20hours.':'','fields':Object[a100_0x3d30('0x0')](_0x1e24f1['stats'])[a100_0x3d30('0x19')](_0x19fce5=>_0x19fce5!=='timePlayed')[a100_0x3d30('0x2e')](_0x316661=>({'name':_0x1e24f1[a100_0x3d30('0xb')][_0x316661][a100_0x3d30('0x18')],'value':_0x1e24f1[a100_0x3d30('0xb')][_0x316661]['displayValue'],'inline':!![]})),'thumbnail':{'url':_0x1e24f1['stats'][a100_0x3d30('0x25')]?_0x1e24f1[a100_0x3d30('0xb')][a100_0x3d30('0x25')][a100_0x3d30('0x1d')][a100_0x3d30('0x31')]:_0x349da9[a100_0x3d30('0x1c')][a100_0x3d30('0x27')][a100_0x3d30('0x4')]},'footer':{'text':_0x4474eb[a100_0x3d30('0x9')]()+a100_0x3d30('0x36')}}});},this[a100_0x3d30('0x32')]=['steam'];}};