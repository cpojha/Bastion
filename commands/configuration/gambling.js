const a18_0x5b42=['premiumGamblingMultiplier','gambling','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','language','getString','user','client','COLORS','fetchPremiumTier','BASTION_ERROR_TYPE','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/constants','document','multiplier','gambling\x20--multiplier\x201..13','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','@bastion/tesseract','MANAGE_GUILD','PREMIUM_MEMBERSHIP_REQUIRED','send','Command','author','exec','enabled','info','Constants','Gambling\x20Reward\x20Multiplier','GREEN','../../utils/omnic','number','constructor','apply','exports','catch','RED','isPublicBastion'];(function(_0x67c3e7,_0x5b42d5){const _0x3c1ac2=function(_0xc28f5f){while(--_0xc28f5f){_0x67c3e7['push'](_0x67c3e7['shift']());}},_0x1eb121=function(){const _0x2f8bf4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x518fec,_0x4eaaaf,_0x1b5c61,_0x33a58d){_0x33a58d=_0x33a58d||{};let _0x363054=_0x4eaaaf+'='+_0x1b5c61,_0x2c05d=0x0;for(let _0x3ff7ea=0x0,_0x312df6=_0x518fec['length'];_0x3ff7ea<_0x312df6;_0x3ff7ea++){const _0x1e2707=_0x518fec[_0x3ff7ea];_0x363054+=';\x20'+_0x1e2707;const _0x58599c=_0x518fec[_0x1e2707];_0x518fec['push'](_0x58599c),_0x312df6=_0x518fec['length'],_0x58599c!==!![]&&(_0x363054+='='+_0x58599c);}_0x33a58d['cookie']=_0x363054;},'removeCookie':function(){return'dev';},'getCookie':function(_0x421615,_0x362505){_0x421615=_0x421615||function(_0x2d46b7){return _0x2d46b7;};const _0x49eb2d=_0x421615(new RegExp('(?:^|;\x20)'+_0x362505['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x37cdba=function(_0x2bc490,_0x1976d6){_0x2bc490(++_0x1976d6);};return _0x37cdba(_0x3c1ac2,_0x5b42d5),_0x49eb2d?decodeURIComponent(_0x49eb2d[0x1]):undefined;}},_0xe01fc0=function(){const _0x3d20d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3d20d0['test'](_0x2f8bf4['removeCookie']['toString']());};_0x2f8bf4['updateCookie']=_0xe01fc0;let _0x38cca7='';const _0x3fcb8d=_0x2f8bf4['updateCookie']();if(!_0x3fcb8d)_0x2f8bf4['setCookie'](['*'],'counter',0x1);else _0x3fcb8d?_0x38cca7=_0x2f8bf4['getCookie'](null,'counter'):_0x2f8bf4['removeCookie']();};_0x1eb121();}(a18_0x5b42,0x7f));const a18_0x3c1a=function(_0x67c3e7,_0x5b42d5){_0x67c3e7=_0x67c3e7-0x0;let _0x3c1ac2=a18_0x5b42[_0x67c3e7];return _0x3c1ac2;};const a18_0x1b5c61=function(){let _0xa0ff57=!![];return function(_0x209f69,_0x2eb836){const _0x45852e=_0xa0ff57?function(){if(_0x2eb836){const _0x162014=_0x2eb836[a18_0x3c1a('0x10')](_0x209f69,arguments);return _0x2eb836=null,_0x162014;}}:function(){};return _0xa0ff57=![],_0x45852e;};}(),a18_0x4eaaaf=a18_0x1b5c61(this,function(){const _0x130144=function(){const _0x175b0b=_0x130144[a18_0x3c1a('0xf')](a18_0x3c1a('0x24'))()[a18_0x3c1a('0xf')](a18_0x3c1a('0x1f'));return!_0x175b0b['test'](a18_0x4eaaaf);};return _0x130144();});a18_0x4eaaaf();'use strict';const tesseract_1=require(a18_0x3c1a('0x1')),constants=require(a18_0x3c1a('0x20')),errors=require('../../utils/errors'),omnic=require(a18_0x3c1a('0xd'));module[a18_0x3c1a('0x11')]=class GamblingCommand extends tesseract_1[a18_0x3c1a('0x5')]{constructor(){super(a18_0x3c1a('0x16'),{'description':a18_0x3c1a('0x17'),'triggers':[],'arguments':{'number':[a18_0x3c1a('0x22')]},'scope':a18_0x3c1a('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a18_0x3c1a('0x2')],'syntax':['gambling',a18_0x3c1a('0x23')]}),this[a18_0x3c1a('0x7')]=async(_0x1c2358,_0x96bbe6)=>{if(_0x96bbe6['multiplier']&&constants[a18_0x3c1a('0x14')](this[a18_0x3c1a('0x1b')][a18_0x3c1a('0x1a')])){const _0x380e88=await omnic[a18_0x3c1a('0x1d')](_0x1c2358[a18_0x3c1a('0x0')])[a18_0x3c1a('0x12')](()=>{});if(!_0x380e88)throw new errors['DiscordError'](errors[a18_0x3c1a('0x1e')][a18_0x3c1a('0x3')],this[a18_0x3c1a('0x1b')]['locale'][a18_0x3c1a('0x19')](_0x1c2358['guild'][a18_0x3c1a('0x21')][a18_0x3c1a('0x18')],'errors',a18_0x3c1a('0x15')));}const _0x21d634=_0x1c2358[a18_0x3c1a('0x0')],_0x59f09e=_0x96bbe6[a18_0x3c1a('0x22')]?!![]:!(_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')]&&_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')][a18_0x3c1a('0x8')]);_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')]={'enabled':_0x59f09e,'multiplier':typeof _0x96bbe6['multiplier']===a18_0x3c1a('0xe')?_0x96bbe6[a18_0x3c1a('0x22')]:_0x59f09e?_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')]&&_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')][a18_0x3c1a('0x22')]:undefined},await _0x21d634['document']['save'](),await _0x1c2358['channel'][a18_0x3c1a('0x4')]({'embed':{'color':_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')][a18_0x3c1a('0x8')]?tesseract_1[a18_0x3c1a('0xa')][a18_0x3c1a('0x1c')][a18_0x3c1a('0xc')]:tesseract_1[a18_0x3c1a('0xa')][a18_0x3c1a('0x1c')][a18_0x3c1a('0x13')],'description':this[a18_0x3c1a('0x1b')]['locale'][a18_0x3c1a('0x19')](_0x1c2358['guild'][a18_0x3c1a('0x21')][a18_0x3c1a('0x18')],a18_0x3c1a('0x9'),_0x21d634['document'][a18_0x3c1a('0x16')][a18_0x3c1a('0x8')]?'gamblingEnable':'gamblingDisable',_0x1c2358[a18_0x3c1a('0x6')]['tag']),'fields':_0x21d634[a18_0x3c1a('0x21')][a18_0x3c1a('0x16')][a18_0x3c1a('0x8')]?[{'name':a18_0x3c1a('0xb'),'value':_0x21d634['document'][a18_0x3c1a('0x16')][a18_0x3c1a('0x22')]?_0x21d634[a18_0x3c1a('0x21')]['gambling'][a18_0x3c1a('0x22')]['toString']():0x1['toString'](),'inline':!![]}]:[]}})[a18_0x3c1a('0x12')](()=>{});};}};