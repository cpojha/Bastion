const a158_0x3894=['bot','catch','forBots','createdAt','LISTENER_MODE','roles','length','channels','Bot','constructor','../utils/variables','exports','add','Member','test','guildMemberAdd','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../models/Role','get','forUsers','Constants','concat','apply','Member\x20Type','tag','user','handleAutoRoles','greeting','timeout','Auto\x20added\x20via\x20Auto\x20Roles','Member\x20ID','fetch','then','replaceMemberVariables','Listener','floor','guild','cache','autoAssignable','filter','message','Greetings!','send','createLog','parse','default','../assets/greetings.json','map','channelId','Human','partial','toUTCString','stringify','_id'];(function(_0x221b80,_0x38943e){const _0x5f3afd=function(_0x3dc208){while(--_0x3dc208){_0x221b80['push'](_0x221b80['shift']());}},_0x24e9c3=function(){const _0x248de0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x525bca,_0x682818,_0x57cc0a,_0x54eea5){_0x54eea5=_0x54eea5||{};let _0x42df96=_0x682818+'='+_0x57cc0a,_0x1ea0d0=0x0;for(let _0x1ff755=0x0,_0x409c99=_0x525bca['length'];_0x1ff755<_0x409c99;_0x1ff755++){const _0x49b763=_0x525bca[_0x1ff755];_0x42df96+=';\x20'+_0x49b763;const _0x1ee579=_0x525bca[_0x49b763];_0x525bca['push'](_0x1ee579),_0x409c99=_0x525bca['length'],_0x1ee579!==!![]&&(_0x42df96+='='+_0x1ee579);}_0x54eea5['cookie']=_0x42df96;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a7ecd,_0xa57b6f){_0x5a7ecd=_0x5a7ecd||function(_0x667d){return _0x667d;};const _0x5c40bb=_0x5a7ecd(new RegExp('(?:^|;\x20)'+_0xa57b6f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1dc2b1=function(_0x40027a,_0x34d10d){_0x40027a(++_0x34d10d);};return _0x1dc2b1(_0x5f3afd,_0x38943e),_0x5c40bb?decodeURIComponent(_0x5c40bb[0x1]):undefined;}},_0x377c48=function(){const _0x9de661=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9de661['test'](_0x248de0['removeCookie']['toString']());};_0x248de0['updateCookie']=_0x377c48;let _0x248200='';const _0x55f4c0=_0x248de0['updateCookie']();if(!_0x55f4c0)_0x248de0['setCookie'](['*'],'counter',0x1);else _0x55f4c0?_0x248200=_0x248de0['getCookie'](null,'counter'):_0x248de0['removeCookie']();};_0x24e9c3();}(a158_0x3894,0xf3));const a158_0x5f3a=function(_0x221b80,_0x38943e){_0x221b80=_0x221b80-0x0;let _0x5f3afd=a158_0x3894[_0x221b80];return _0x5f3afd;};const a158_0x57cc0a=function(){let _0x4402ba=!![];return function(_0x405800,_0x49b0f8){const _0x3bd524=_0x4402ba?function(){if(_0x49b0f8){const _0x495c41=_0x49b0f8[a158_0x5f3a('0x31')](_0x405800,arguments);return _0x49b0f8=null,_0x495c41;}}:function(){};return _0x4402ba=![],_0x3bd524;};}(),a158_0x682818=a158_0x57cc0a(this,function(){const _0x5a4967=function(){const _0x213d93=_0x5a4967[a158_0x5f3a('0x24')](a158_0x5f3a('0x2b'))()[a158_0x5f3a('0x24')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x213d93[a158_0x5f3a('0x29')](a158_0x682818);};return _0x5a4967();});a158_0x682818();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require(a158_0x5f3a('0x2c')),embeds=require('../utils/embeds'),variables=require(a158_0x5f3a('0x25')),greetings=require(a158_0x5f3a('0x13'));module[a158_0x5f3a('0x26')]=class GuildMemberAddListener extends tesseract_1[a158_0x5f3a('0x7')]{constructor(){super(a158_0x5f3a('0x2a'),{'mode':tesseract_1[a158_0x5f3a('0x2f')][a158_0x5f3a('0x1f')]['ON']}),this['handleAutoRoles']=async(_0x15fa79,_0x3088ed)=>{const _0x4040d6=await Role_1[a158_0x5f3a('0x12')]['find']({'guild':_0x3088ed['id'],'autoAssignable':{'$exists':!![]}}),_0x35dc2c=_0x4040d6[a158_0x5f3a('0xc')](_0x476393=>_0x476393['autoAssignable']&&_0x476393['autoAssignable'][a158_0x5f3a('0x1d')])[a158_0x5f3a('0x14')](_0xfc9063=>_0xfc9063[a158_0x5f3a('0x1a')]),_0x5b1898=_0x4040d6[a158_0x5f3a('0xc')](_0x4fcbfc=>_0x4fcbfc[a158_0x5f3a('0xb')]&&_0x4fcbfc['autoAssignable'][a158_0x5f3a('0x2e')])[a158_0x5f3a('0x14')](_0xc14a70=>_0xc14a70[a158_0x5f3a('0x1a')]),_0x584ad7=_0x4040d6['filter'](_0x160ad9=>_0x160ad9[a158_0x5f3a('0xb')]&&(Number(_0x160ad9['autoAssignable']['forBots'])^Number(_0x160ad9[a158_0x5f3a('0xb')][a158_0x5f3a('0x2e')]))===0x0)[a158_0x5f3a('0x14')](_0x544e84=>_0x544e84['_id']);(_0x35dc2c[a158_0x5f3a('0x21')]||_0x5b1898[a158_0x5f3a('0x21')]||_0x584ad7[a158_0x5f3a('0x21')])&&_0x15fa79[a158_0x5f3a('0x20')][a158_0x5f3a('0x27')](_0x584ad7[a158_0x5f3a('0x30')](_0x15fa79[a158_0x5f3a('0x34')][a158_0x5f3a('0x1b')]?_0x35dc2c:_0x5b1898),a158_0x5f3a('0x2'));},this['handleGreetings']=(_0x4487af,_0x518826)=>{if(!_0x518826[a158_0x5f3a('0x0')]||!_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0x15')])return;if(!_0x4487af[a158_0x5f3a('0x9')][a158_0x5f3a('0x22')]['cache']['has'](_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0x15')]))return;const _0x120ce2=_0x4487af[a158_0x5f3a('0x9')][a158_0x5f3a('0x22')][a158_0x5f3a('0xa')][a158_0x5f3a('0x2d')](_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0x15')]),_0x45c397=embeds['generateEmbed'](_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0xd')]?_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0xd')]:greetings[Math[a158_0x5f3a('0x8')](Math['random']()*greetings[a158_0x5f3a('0x21')])]);_0x120ce2[a158_0x5f3a('0xf')]({'embed':{...JSON[a158_0x5f3a('0x11')](variables[a158_0x5f3a('0x6')](JSON[a158_0x5f3a('0x19')](_0x45c397),_0x4487af)),'footer':{'text':a158_0x5f3a('0xe')}}})[a158_0x5f3a('0x5')](_0x32a71a=>{_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0x1')]&&_0x32a71a['deletable']&&_0x32a71a['delete']({'timeout':_0x518826[a158_0x5f3a('0x0')][a158_0x5f3a('0x1')]*0xea60})['catch'](()=>{});})[a158_0x5f3a('0x1c')](()=>{});},this['exec']=async _0x34b3a6=>{_0x34b3a6[a158_0x5f3a('0x17')]&&await _0x34b3a6[a158_0x5f3a('0x4')]();const _0x53c0dd=_0x34b3a6[a158_0x5f3a('0x9')],_0x42e817=await _0x53c0dd['getDocument']();this['handleGreetings'](_0x34b3a6,_0x42e817),this[a158_0x5f3a('0x35')](_0x34b3a6,_0x53c0dd),_0x53c0dd[a158_0x5f3a('0x10')]({'event':'guildMemberAdd','fields':[{'name':a158_0x5f3a('0x28'),'value':_0x34b3a6[a158_0x5f3a('0x34')][a158_0x5f3a('0x33')],'inline':!![]},{'name':a158_0x5f3a('0x3'),'value':_0x34b3a6['id'],'inline':!![]},{'name':a158_0x5f3a('0x32'),'value':_0x34b3a6['user']['bot']?a158_0x5f3a('0x23'):a158_0x5f3a('0x16'),'inline':!![]},{'name':'Joined\x20Discord','value':_0x34b3a6['user'][a158_0x5f3a('0x1e')][a158_0x5f3a('0x18')](),'inline':!![]}],'timestamp':_0x34b3a6['joinedTimestamp']});};}};