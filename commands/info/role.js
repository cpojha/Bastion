const a56_0x2453=['page','Created','color','channel','exec','bitfield','constructor','\x20Role','../../utils/pagination','Managed','client','locale','test','createdAt','displayName','members','join','../../utils/strings','Members','role\x20ROLE\x20--members\x20PAGE','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20members\x20in\x20a\x20role.','\x20/\x20','role\x20ROLE','role','guild','send','rawPosition','toArray','cache','DiscordError','resolveRole','user','Permissions','exports','apply','values','permissions','roles','Hoisted\x20•\x20','size','roleNotFound','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/errors','resolver','tag','pages','toUTCString','\x20Members','errors','managed','map','Role\x20Members','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','paginate','snakeToTitleCase','name'];(function(_0x4ad1a1,_0x2453d7){const _0x27e922=function(_0x5499d9){while(--_0x5499d9){_0x4ad1a1['push'](_0x4ad1a1['shift']());}},_0x53538a=function(){const _0x86a1a0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1dda35,_0x587120,_0x256297,_0x589e5c){_0x589e5c=_0x589e5c||{};let _0x3864c4=_0x587120+'='+_0x256297,_0x4754d4=0x0;for(let _0x380172=0x0,_0x44b893=_0x1dda35['length'];_0x380172<_0x44b893;_0x380172++){const _0x435366=_0x1dda35[_0x380172];_0x3864c4+=';\x20'+_0x435366;const _0x218002=_0x1dda35[_0x435366];_0x1dda35['push'](_0x218002),_0x44b893=_0x1dda35['length'],_0x218002!==!![]&&(_0x3864c4+='='+_0x218002);}_0x589e5c['cookie']=_0x3864c4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4a807f,_0x116a81){_0x4a807f=_0x4a807f||function(_0x3d9c5a){return _0x3d9c5a;};const _0x352fa1=_0x4a807f(new RegExp('(?:^|;\x20)'+_0x116a81['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x44064a=function(_0x564838,_0x67868c){_0x564838(++_0x67868c);};return _0x44064a(_0x27e922,_0x2453d7),_0x352fa1?decodeURIComponent(_0x352fa1[0x1]):undefined;}},_0x2e3c48=function(){const _0xcecdf0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xcecdf0['test'](_0x86a1a0['removeCookie']['toString']());};_0x86a1a0['updateCookie']=_0x2e3c48;let _0x3e3bb3='';const _0x24b15f=_0x86a1a0['updateCookie']();if(!_0x24b15f)_0x86a1a0['setCookie'](['*'],'counter',0x1);else _0x24b15f?_0x3e3bb3=_0x86a1a0['getCookie'](null,'counter'):_0x86a1a0['removeCookie']();};_0x53538a();}(a56_0x2453,0x19e));const a56_0x27e9=function(_0x4ad1a1,_0x2453d7){_0x4ad1a1=_0x4ad1a1-0x0;let _0x27e922=a56_0x2453[_0x4ad1a1];return _0x27e922;};const a56_0x256297=function(){let _0x3fea3e=!![];return function(_0x1dbc92,_0x407e8a){const _0x91b1d3=_0x3fea3e?function(){if(_0x407e8a){const _0x4428f8=_0x407e8a[a56_0x27e9('0xc')](_0x1dbc92,arguments);return _0x407e8a=null,_0x4428f8;}}:function(){};return _0x3fea3e=![],_0x91b1d3;};}(),a56_0x587120=a56_0x256297(this,function(){const _0xdaa56e=function(){const _0x9986be=_0xdaa56e[a56_0x27e9('0x28')](a56_0x27e9('0x13'))()[a56_0x27e9('0x28')](a56_0x27e9('0x1e'));return!_0x9986be[a56_0x27e9('0x2e')](a56_0x587120);};return _0xdaa56e();});a56_0x587120();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a56_0x27e9('0x14')),pagination=require(a56_0x27e9('0x2a')),strings=require(a56_0x27e9('0x33'));module[a56_0x27e9('0xb')]=class RoleCommand extends tesseract_1['Command']{constructor(){super(a56_0x27e9('0x1'),{'description':a56_0x27e9('0x36'),'triggers':['roleInfo'],'arguments':{'alias':{'members':['m']},'number':['members']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a56_0x27e9('0x0'),a56_0x27e9('0x35')]}),this[a56_0x27e9('0x26')]=async(_0x447e5a,_0x515e7e)=>{const _0x1572d2=_0x515e7e['_'][a56_0x27e9('0x32')]('\x20'),_0x41d810=this[a56_0x27e9('0x2c')][a56_0x27e9('0x15')][a56_0x27e9('0x8')](_0x447e5a[a56_0x27e9('0x2')],_0x1572d2);if(!_0x41d810)throw new errors[(a56_0x27e9('0x7'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[a56_0x27e9('0x2c')][a56_0x27e9('0x2d')]['getString'](_0x447e5a[a56_0x27e9('0x2')]['document']['language'],a56_0x27e9('0x1a'),a56_0x27e9('0x12')));if(_0x515e7e[a56_0x27e9('0x31')]){const _0xceda4b=pagination[a56_0x27e9('0x1f')]([..._0x41d810[a56_0x27e9('0x31')][a56_0x27e9('0xd')]()],_0x515e7e[a56_0x27e9('0x31')]);return await _0x447e5a['channel'][a56_0x27e9('0x3')]({'embed':{'color':_0x41d810[a56_0x27e9('0x24')],'author':{'name':_0x41d810[a56_0x27e9('0x21')]},'title':a56_0x27e9('0x1d'),'fields':_0xceda4b['items'][a56_0x27e9('0x1c')](_0x175e3a=>({'name':_0x175e3a[a56_0x27e9('0x30')],'value':_0x175e3a[a56_0x27e9('0x9')][a56_0x27e9('0x16')]+a56_0x27e9('0x37')+_0x175e3a['id']})),'footer':{'text':'Page\x20'+_0xceda4b[a56_0x27e9('0x22')]+'\x20of\x20'+_0xceda4b[a56_0x27e9('0x17')]}}});}return await _0x447e5a[a56_0x27e9('0x25')]['send']({'embed':{'color':_0x41d810[a56_0x27e9('0x24')],'author':{'name':_0x41d810[a56_0x27e9('0x21')]},'title':(_0x41d810[a56_0x27e9('0x1b')]?a56_0x27e9('0x2b'):'')+a56_0x27e9('0x29'),'fields':[{'name':'Position','value':(_0x447e5a[a56_0x27e9('0x2')][a56_0x27e9('0xf')][a56_0x27e9('0x6')][a56_0x27e9('0x11')]-_0x41d810[a56_0x27e9('0x4')])['toString'](),'inline':!![]},{'name':a56_0x27e9('0x34'),'value':_0x41d810['members'][a56_0x27e9('0x11')]+a56_0x27e9('0x19'),'inline':!![]},{'name':a56_0x27e9('0x23'),'value':_0x41d810[a56_0x27e9('0x2f')][a56_0x27e9('0x18')](),'inline':!![]},{'name':a56_0x27e9('0xa'),'value':_0x41d810[a56_0x27e9('0xe')][a56_0x27e9('0x27')]?_0x41d810[a56_0x27e9('0xe')][a56_0x27e9('0x5')]()[a56_0x27e9('0x1c')](_0x3b75f9=>strings[a56_0x27e9('0x20')](_0x3b75f9))[a56_0x27e9('0x32')](',\x20'):'-'}],'footer':{'text':(_0x41d810['hoist']?a56_0x27e9('0x10'):'')+_0x41d810['id']}}});};}};