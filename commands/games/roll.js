const a45_0x4705=['debit','gambling','@bastion/tesseract','pattern','Result','member','../../utils/numbers','match','It\x20allows\x20you\x20to\x20roll\x20dice\x20and\x20see\x20the\x20result.\x20It\x20supports\x20dice\x20notation.\x20It\x20also\x20supports\x20gambling.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','toLowerCase','reduce','guild','filter','modifierPattern','exports','test','roll','multiplier','Command','exec','push','bet','Constants','\x20/\x20','IRIS','constructor','roll\x20--bet\x20RESULT','document','Modifiers','parseInt','applyModifiers','applyModifier','join','length','COLORS','Won\x20the\x20bet\x20in\x20Roll.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','GAMBLING_DISABLED'];(function(_0x196a9b,_0x470505){const _0x544ce3=function(_0x45599c){while(--_0x45599c){_0x196a9b['push'](_0x196a9b['shift']());}},_0x3395e7=function(){const _0x3e6f0c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3a8268,_0x571cd9,_0x17ac3a,_0x45a77c){_0x45a77c=_0x45a77c||{};let _0x51ccb5=_0x571cd9+'='+_0x17ac3a,_0x2f76c3=0x0;for(let _0x35601a=0x0,_0x93d7fe=_0x3a8268['length'];_0x35601a<_0x93d7fe;_0x35601a++){const _0x26f414=_0x3a8268[_0x35601a];_0x51ccb5+=';\x20'+_0x26f414;const _0x9ce744=_0x3a8268[_0x26f414];_0x3a8268['push'](_0x9ce744),_0x93d7fe=_0x3a8268['length'],_0x9ce744!==!![]&&(_0x51ccb5+='='+_0x9ce744);}_0x45a77c['cookie']=_0x51ccb5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4c5ae9,_0x1ee7db){_0x4c5ae9=_0x4c5ae9||function(_0x59ce99){return _0x59ce99;};const _0x1323dc=_0x4c5ae9(new RegExp('(?:^|;\x20)'+_0x1ee7db['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d8e42=function(_0x2e729a,_0x55677f){_0x2e729a(++_0x55677f);};return _0x2d8e42(_0x544ce3,_0x470505),_0x1323dc?decodeURIComponent(_0x1323dc[0x1]):undefined;}},_0x5b703c=function(){const _0x48d169=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x48d169['test'](_0x3e6f0c['removeCookie']['toString']());};_0x3e6f0c['updateCookie']=_0x5b703c;let _0x5affcc='';const _0xc867eb=_0x3e6f0c['updateCookie']();if(!_0xc867eb)_0x3e6f0c['setCookie'](['*'],'counter',0x1);else _0xc867eb?_0x5affcc=_0x3e6f0c['getCookie'](null,'counter'):_0x3e6f0c['removeCookie']();};_0x3395e7();}(a45_0x4705,0xce));const a45_0x544c=function(_0x196a9b,_0x470505){_0x196a9b=_0x196a9b-0x0;let _0x544ce3=a45_0x4705[_0x196a9b];return _0x544ce3;};const a45_0x17ac3a=function(){let _0xfbaf49=!![];return function(_0x40135a,_0x3786ca){const _0x2cf2ea=_0xfbaf49?function(){if(_0x3786ca){const _0x36edfd=_0x3786ca['apply'](_0x40135a,arguments);return _0x3786ca=null,_0x36edfd;}}:function(){};return _0xfbaf49=![],_0x2cf2ea;};}(),a45_0x571cd9=a45_0x17ac3a(this,function(){const _0x285ff5=function(){const _0x31ccf6=_0x285ff5[a45_0x544c('0xf')](a45_0x544c('0x1a'))()[a45_0x544c('0xf')](a45_0x544c('0x25'));return!_0x31ccf6[a45_0x544c('0x5')](a45_0x571cd9);};return _0x285ff5();});a45_0x571cd9();'use strict';const tesseract_1=require(a45_0x544c('0x1e')),numbers=require(a45_0x544c('0x22'));module[a45_0x544c('0x4')]=class RollCommand extends tesseract_1[a45_0x544c('0x8')]{constructor(){super('roll',{'description':a45_0x544c('0x24'),'triggers':[],'arguments':{'number':['bet']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a45_0x544c('0x6'),'roll\x20NOTATION',a45_0x544c('0x10')]}),this[a45_0x544c('0x15')]=(_0x864c6c,_0x89ec42)=>{const [,_0x4944a6,_0x373c77]=_0x89ec42['match'](this[a45_0x544c('0x3')]);switch(_0x4944a6[a45_0x544c('0x26')]()){case'+':return _0x864c6c+Number[a45_0x544c('0x13')](_0x373c77);case'-':return _0x864c6c-Number[a45_0x544c('0x13')](_0x373c77);case'/':return _0x864c6c/Number['parseInt'](_0x373c77);case'*':case'x':return _0x864c6c*Number[a45_0x544c('0x13')](_0x373c77);default:return _0x864c6c;}},this[a45_0x544c('0x14')]=(_0x315c6e,_0x384991)=>{for(const _0x50fcce of _0x384991){_0x315c6e=this[a45_0x544c('0x15')](_0x315c6e,_0x50fcce);}return _0x315c6e;},this[a45_0x544c('0x9')]=async(_0x1e7c9a,_0x5f14b6)=>{const [,_0x2e5a09,_0x305dc6,..._0x4ed244]=_0x5f14b6['_']['join']('')[a45_0x544c('0x23')](this[a45_0x544c('0x1f')]),_0x30b722=_0x2e5a09?Number[a45_0x544c('0x13')](_0x2e5a09):0x1,_0x3d8f89=_0x305dc6?Number[a45_0x544c('0x13')](_0x305dc6):0x6,_0x330f35=[];for(let _0x40ca16=0x0;_0x40ca16<_0x30b722;_0x40ca16++){_0x330f35[a45_0x544c('0xa')](numbers['getRandomInt'](0x1,_0x3d8f89));}let _0x137153=_0x330f35[a45_0x544c('0x0')]((_0x1e5741,_0x3ba48a)=>_0x1e5741+_0x3ba48a,0x0);const _0x44318f=[];_0x4ed244[a45_0x544c('0x2')](_0x4c3256=>_0x4c3256)[a45_0x544c('0x17')]&&(_0x44318f[a45_0x544c('0xa')]({'name':a45_0x544c('0x12'),'value':_0x4ed244[a45_0x544c('0x16')]('\x20'),'inline':!![]}),_0x137153=this[a45_0x544c('0x14')](_0x137153,_0x4ed244[a45_0x544c('0x2')](_0x42c42a=>_0x42c42a)));if(_0x5f14b6[a45_0x544c('0xb')]){if(_0x1e7c9a[a45_0x544c('0x1')][a45_0x544c('0x11')]['gambling']&&_0x1e7c9a[a45_0x544c('0x1')][a45_0x544c('0x11')][a45_0x544c('0x1d')]['enabled'])_0x137153===_0x5f14b6[a45_0x544c('0xb')]?_0x1e7c9a[a45_0x544c('0x21')]['credit'](0x64*(_0x1e7c9a[a45_0x544c('0x1')][a45_0x544c('0x11')][a45_0x544c('0x1d')][a45_0x544c('0x7')]||0x1),a45_0x544c('0x19')):_0x1e7c9a[a45_0x544c('0x21')][a45_0x544c('0x1c')](0x64*(_0x1e7c9a[a45_0x544c('0x1')][a45_0x544c('0x11')][a45_0x544c('0x1d')][a45_0x544c('0x7')]||0x1),'Lost\x20the\x20bet\x20in\x20Roll.');else throw new Error(a45_0x544c('0x1b'));}_0x44318f['push']({'name':a45_0x544c('0x20'),'value':_0x137153,'inline':!![]}),await _0x1e7c9a['channel']['send']({'embed':{'color':tesseract_1[a45_0x544c('0xc')][a45_0x544c('0x18')][a45_0x544c('0xe')],'title':'Dice\x20Roll','description':_0x330f35['join'](a45_0x544c('0xd')),'fields':_0x44318f}});},this['pattern']=/^(\d+)?(?:d(\d*))?([-+x*/]\d+)?([-+x*/]\d+)?$/i,this[a45_0x544c('0x3')]=/^([-+x*/])(\d+)$/i;}};