const a110_0x3da9=['Constants','Level','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name','send','apply','constructor','https://i.imgur.com/Kzt8Ldk.png','test','level','exec','find','Karma','channel','guild','It\x20allows\x20you\x20to\x20see\x20the\x20leaderboard\x20of\x20your\x20server.\x20You\x27re\x20ranked\x20based\x20on\x20your\x20level,\x20experience,\x20karma,\x20and\x20Bastion\x20Coins;\x20in\x20that\x20exact\x20order.','leaderboard','experience','COLORS','Command','\x20-\x20','cache','exports','users','@bastion/tesseract','tag','user','get','karma','client','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Leaderboard','has'];(function(_0x1d301f,_0x3da939){const _0x914cda=function(_0x462b6b){while(--_0x462b6b){_0x1d301f['push'](_0x1d301f['shift']());}},_0x2c00a7=function(){const _0x143c1d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5a1049,_0x48d012,_0x251069,_0x1b4236){_0x1b4236=_0x1b4236||{};let _0x3ab09f=_0x48d012+'='+_0x251069,_0x3f69e0=0x0;for(let _0x651a05=0x0,_0x37e6cd=_0x5a1049['length'];_0x651a05<_0x37e6cd;_0x651a05++){const _0x38039b=_0x5a1049[_0x651a05];_0x3ab09f+=';\x20'+_0x38039b;const _0x3e6578=_0x5a1049[_0x38039b];_0x5a1049['push'](_0x3e6578),_0x37e6cd=_0x5a1049['length'],_0x3e6578!==!![]&&(_0x3ab09f+='='+_0x3e6578);}_0x1b4236['cookie']=_0x3ab09f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x118d72,_0x5e7e92){_0x118d72=_0x118d72||function(_0x2cca84){return _0x2cca84;};const _0xf36886=_0x118d72(new RegExp('(?:^|;\x20)'+_0x5e7e92['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2cdce2=function(_0x323af1,_0x30ee35){_0x323af1(++_0x30ee35);};return _0x2cdce2(_0x914cda,_0x3da939),_0xf36886?decodeURIComponent(_0xf36886[0x1]):undefined;}},_0x19bd27=function(){const _0x2d40e5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d40e5['test'](_0x143c1d['removeCookie']['toString']());};_0x143c1d['updateCookie']=_0x19bd27;let _0xa0e86f='';const _0x3443c8=_0x143c1d['updateCookie']();if(!_0x3443c8)_0x143c1d['setCookie'](['*'],'counter',0x1);else _0x3443c8?_0xa0e86f=_0x143c1d['getCookie'](null,'counter'):_0x143c1d['removeCookie']();};_0x2c00a7();}(a110_0x3da9,0xde));const a110_0x914c=function(_0x1d301f,_0x3da939){_0x1d301f=_0x1d301f-0x0;let _0x914cda=a110_0x3da9[_0x1d301f];return _0x914cda;};const a110_0x251069=function(){let _0x23d4d3=!![];return function(_0x581178,_0x4ef5d9){const _0x422066=_0x23d4d3?function(){if(_0x4ef5d9){const _0xbe4494=_0x4ef5d9[a110_0x914c('0xe')](_0x581178,arguments);return _0x4ef5d9=null,_0xbe4494;}}:function(){};return _0x23d4d3=![],_0x422066;};}(),a110_0x48d012=a110_0x251069(this,function(){const _0x1f723d=function(){const _0x104bf7=_0x1f723d[a110_0x914c('0xf')](a110_0x914c('0xb'))()[a110_0x914c('0xf')](a110_0x914c('0x6'));return!_0x104bf7[a110_0x914c('0x11')](a110_0x48d012);};return _0x1f723d();});a110_0x48d012();'use strict';const tesseract_1=require(a110_0x914c('0x0')),Member_1=require('../../models/Member');module[a110_0x914c('0x1f')]=class LeaderboardCommand extends tesseract_1[a110_0x914c('0x1c')]{constructor(){super(a110_0x914c('0x19'),{'description':a110_0x914c('0x18'),'triggers':['lb'],'arguments':{},'scope':a110_0x914c('0x17'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a110_0x914c('0x13')]=async _0x53b1bf=>{const _0x207aad=await Member_1['default'][a110_0x914c('0x14')]({'guild':_0x53b1bf['guild']['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1},'limit':0x5});_0x53b1bf[a110_0x914c('0x16')][a110_0x914c('0xd')]({'embed':{'color':tesseract_1[a110_0x914c('0x9')][a110_0x914c('0x1b')]['IRIS'],'author':{'name':_0x53b1bf['guild'][a110_0x914c('0xc')]},'title':a110_0x914c('0x7'),'fields':_0x207aad['map']((_0x492fca,_0x1d2ff8)=>[{'name':'#'+(_0x1d2ff8+0x1)+a110_0x914c('0x1d')+(this[a110_0x914c('0x5')][a110_0x914c('0x20')][a110_0x914c('0x1e')][a110_0x914c('0x8')](_0x492fca[a110_0x914c('0x2')])?this['client'][a110_0x914c('0x20')]['cache'][a110_0x914c('0x3')](_0x492fca[a110_0x914c('0x2')])[a110_0x914c('0x1')]+'\x20/\x20':'')+_0x492fca[a110_0x914c('0x2')],'value':_0x492fca['balance']+'\x20Bastion\x20Coins'},{'name':a110_0x914c('0xa'),'value':_0x492fca[a110_0x914c('0x12')],'inline':!![]},{'name':'XP','value':_0x492fca[a110_0x914c('0x1a')],'inline':!![]},{'name':a110_0x914c('0x15'),'value':_0x492fca[a110_0x914c('0x4')],'inline':!![]}]),'thumbnail':{'url':a110_0x914c('0x10')},'footer':{'text':'Bastion\x20Profiles\x20-\x20Leaderboard'}}});};}};