const a167_0x33f1=['remove','get','name','exec','permissions','color','guild','MANAGE_MESSAGES','includes','default','starboardChannelId','test','text','reactions','bot','tag','Suggestion','handleStarboard','channel','url','MANAGE_CHANNELS','YELLOW','exports','LISTENER_MODE','handleReactionAnnouncement','Accepted','handleSuggestions','channels','height','exclusive','../models/Role','findOne','first','emoji','Starboard','cache','send','COLORS','\x20announced\x20via\x20Announcement\x20Pinnning.','length','Constants','filter','Source','\x20•\x20','suggestionsChannelId','_id','footer','INDIGO','fetch','attachments','animated','roles','user','Added\x20via\x20Reaction\x20Roles','constructor','handleReactionPinning','handleReactionRoles','starboard','parseEmoji','reactionPinning','embeds','push','Listener','@bastion/tesseract','catch','has','add','permissionsFor','value','author','pin','message','startsWith','title','getDocument','member','content','announcementsChannelId','set','partial','map','messageReactionAdd','size','reactionAnnouncements','Auto\x20Removed\x20via\x20Reaction\x20Roles','values','GREEN','findById','[Click\x20here\x20to\x20Jump\x20to\x20the\x20Message.]('];(function(_0x58d472,_0x33f18b){const _0x86467a=function(_0x427b0a){while(--_0x427b0a){_0x58d472['push'](_0x58d472['shift']());}},_0x466fbd=function(){const _0x4c55e2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x58cb23,_0x4aa3f7,_0x48b98b,_0x1aec98){_0x1aec98=_0x1aec98||{};let _0x5a05af=_0x4aa3f7+'='+_0x48b98b,_0x44799c=0x0;for(let _0x488158=0x0,_0x58a404=_0x58cb23['length'];_0x488158<_0x58a404;_0x488158++){const _0x52e83f=_0x58cb23[_0x488158];_0x5a05af+=';\x20'+_0x52e83f;const _0x3eded8=_0x58cb23[_0x52e83f];_0x58cb23['push'](_0x3eded8),_0x58a404=_0x58cb23['length'],_0x3eded8!==!![]&&(_0x5a05af+='='+_0x3eded8);}_0x1aec98['cookie']=_0x5a05af;},'removeCookie':function(){return'dev';},'getCookie':function(_0x105836,_0x4b44f2){_0x105836=_0x105836||function(_0x5aadc1){return _0x5aadc1;};const _0x2a67aa=_0x105836(new RegExp('(?:^|;\x20)'+_0x4b44f2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4df10a=function(_0x3fd375,_0x3be023){_0x3fd375(++_0x3be023);};return _0x4df10a(_0x86467a,_0x33f18b),_0x2a67aa?decodeURIComponent(_0x2a67aa[0x1]):undefined;}},_0x4d01b9=function(){const _0x3f1d59=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f1d59['test'](_0x4c55e2['removeCookie']['toString']());};_0x4c55e2['updateCookie']=_0x4d01b9;let _0x1d47cb='';const _0x3e90ad=_0x4c55e2['updateCookie']();if(!_0x3e90ad)_0x4c55e2['setCookie'](['*'],'counter',0x1);else _0x3e90ad?_0x1d47cb=_0x4c55e2['getCookie'](null,'counter'):_0x4c55e2['removeCookie']();};_0x466fbd();}(a167_0x33f1,0x1d9));const a167_0x8646=function(_0x58d472,_0x33f18b){_0x58d472=_0x58d472-0x0;let _0x86467a=a167_0x33f1[_0x58d472];return _0x86467a;};const a167_0x48b98b=function(){let _0x2efe8d=!![];return function(_0x1bcce7,_0xd308ce){const _0x1c8db1=_0x2efe8d?function(){if(_0xd308ce){const _0x5715be=_0xd308ce['apply'](_0x1bcce7,arguments);return _0xd308ce=null,_0x5715be;}}:function(){};return _0x2efe8d=![],_0x1c8db1;};}(),a167_0x4aa3f7=a167_0x48b98b(this,function(){const _0x25a6ce=function(){const _0x4e2dae=_0x25a6ce[a167_0x8646('0x1a')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4e2dae[a167_0x8646('0x48')](a167_0x4aa3f7);};return _0x25a6ce();});a167_0x4aa3f7();'use strict';const tesseract_1=require(a167_0x8646('0x23')),ReactionRoleGroup_1=require('../models/ReactionRoleGroup'),Role_1=require(a167_0x8646('0x2')),emojis=require('../utils/emojis'),memcache_1=require('../utils/memcache');module[a167_0x8646('0x53')]=class MessageReactionAddListener extends tesseract_1[a167_0x8646('0x22')]{constructor(){super(a167_0x8646('0x35'),{'mode':tesseract_1[a167_0x8646('0xc')][a167_0x8646('0x54')]['ON']}),this[a167_0x8646('0x57')]=async(_0x38ea8b,_0x3eac23)=>{if(_0x3eac23[a167_0x8646('0x18')][a167_0x8646('0x4b')])return;if(!['✅','❎'][a167_0x8646('0x45')](_0x38ea8b[a167_0x8646('0x5')][a167_0x8646('0x3f')]))return;if(!_0x38ea8b[a167_0x8646('0x2b')][a167_0x8646('0x4f')][a167_0x8646('0x27')](_0x3eac23)[a167_0x8646('0x25')](a167_0x8646('0x51')))return;const _0x32e766=_0x38ea8b[a167_0x8646('0x2b')],_0x1df8c5=_0x32e766[a167_0x8646('0x20')][0x0];if(!_0x1df8c5)return;if(!_0x1df8c5[a167_0x8646('0x2d')][a167_0x8646('0x2c')](a167_0x8646('0x4d')))return;_0x1df8c5[a167_0x8646('0x42')]=_0x38ea8b[a167_0x8646('0x5')]['name']==='✅'?tesseract_1[a167_0x8646('0xc')][a167_0x8646('0x9')][a167_0x8646('0x3a')]:_0x38ea8b[a167_0x8646('0x5')][a167_0x8646('0x3f')]==='❎'?tesseract_1[a167_0x8646('0xc')]['COLORS']['RED']:tesseract_1['Constants'][a167_0x8646('0x9')][a167_0x8646('0x13')],_0x1df8c5['title']='Suggestion\x20'+(_0x38ea8b[a167_0x8646('0x5')]['name']==='✅'?a167_0x8646('0x56'):_0x38ea8b['emoji']['name']==='❎'?'Rejected':''),await _0x32e766['edit']({'embed':_0x1df8c5});},this[a167_0x8646('0x4e')]=async(_0x177a1e,_0x44d36f,_0x510ddb)=>{if(!['🌠','🌟','⭐'][a167_0x8646('0x45')](_0x177a1e[a167_0x8646('0x5')][a167_0x8646('0x3f')]))return;if(_0x44d36f[a167_0x8646('0x17')]['cache'][a167_0x8646('0x36')]<=0x1)return;if(_0x177a1e[a167_0x8646('0x2b')][a167_0x8646('0x29')]['id']===_0x44d36f['user']['id'])return;const _0x160a94=_0x177a1e[a167_0x8646('0x2b')][a167_0x8646('0x15')][a167_0x8646('0xd')](_0x5e30d5=>Boolean(_0x5e30d5[a167_0x8646('0x0')]&&_0x5e30d5['width'])),_0x2c2685=_0x160a94[a167_0x8646('0x4')]();if(!_0x177a1e['message'][a167_0x8646('0x30')]&&!_0x2c2685)return;const _0x2d177a=memcache_1[a167_0x8646('0x46')]['get'](a167_0x8646('0x1d'));if(_0x2d177a&&_0x2d177a instanceof Array&&_0x2d177a[a167_0x8646('0x45')](_0x177a1e[a167_0x8646('0x2b')]['id']))return;await _0x510ddb[a167_0x8646('0x8')]({'embed':{'color':tesseract_1[a167_0x8646('0xc')]['COLORS'][a167_0x8646('0x52')],'author':{'name':_0x177a1e[a167_0x8646('0x2b')][a167_0x8646('0x29')][a167_0x8646('0x4c')],'iconURL':_0x177a1e[a167_0x8646('0x2b')]['author']['displayAvatarURL']({'dynamic':!![],'size':0x40})},'description':_0x177a1e['message'][a167_0x8646('0x30')],'fields':[{'name':a167_0x8646('0xe'),'value':a167_0x8646('0x3c')+_0x177a1e[a167_0x8646('0x2b')]['url']+')','inline':!![]}],'image':{'url':_0x2c2685?_0x2c2685[a167_0x8646('0x50')]:null},'footer':{'text':a167_0x8646('0x6')}}}),_0x2d177a&&_0x2d177a instanceof Array&&_0x2d177a[a167_0x8646('0x21')](_0x177a1e['message']['id']),memcache_1[a167_0x8646('0x46')][a167_0x8646('0x32')](a167_0x8646('0x1d'),_0x2d177a?_0x2d177a:[_0x177a1e[a167_0x8646('0x2b')]['id']]);},this[a167_0x8646('0x55')]=async(_0x20aa43,_0x36aa8f,_0x34f92f)=>{if(!['📣','📢'][a167_0x8646('0x45')](_0x20aa43[a167_0x8646('0x5')][a167_0x8646('0x3f')]))return;if(!_0x36aa8f[a167_0x8646('0x41')][a167_0x8646('0x25')]('MANAGE_GUILD'))return;const _0xf36012=_0x36aa8f['user'][a167_0x8646('0x4c')]+a167_0x8646('0xa'),_0x587b57=_0x20aa43[a167_0x8646('0x2b')][a167_0x8646('0x20')]&&_0x20aa43['message'][a167_0x8646('0x20')][a167_0x8646('0xb')]?_0x20aa43[a167_0x8646('0x2b')][a167_0x8646('0x20')][0x0]:{};_0x587b57['footer']={..._0x587b57[a167_0x8646('0x12')],'text':_0x587b57['footer']&&_0x587b57['footer'][a167_0x8646('0x49')]?_0xf36012+a167_0x8646('0xf')+_0x587b57[a167_0x8646('0x12')]['text']:_0xf36012},await _0x34f92f[a167_0x8646('0x8')](_0x20aa43['message']['content'],{'embed':_0x587b57,'files':[..._0x20aa43[a167_0x8646('0x2b')][a167_0x8646('0x15')][a167_0x8646('0x39')]()]});},this[a167_0x8646('0x1b')]=async(_0x48c2ce,_0xba6595)=>{if(!['📌','📍'][a167_0x8646('0x45')](_0x48c2ce[a167_0x8646('0x5')][a167_0x8646('0x3f')]))return;if(!_0x48c2ce[a167_0x8646('0x2b')]['channel'][a167_0x8646('0x27')](_0xba6595)[a167_0x8646('0x25')](a167_0x8646('0x44')))return;await _0x48c2ce[a167_0x8646('0x2b')][a167_0x8646('0x2a')]();},this[a167_0x8646('0x1c')]=async(_0x5d16e3,_0x317660)=>{if(_0x317660[a167_0x8646('0x18')][a167_0x8646('0x4b')])return;const _0x45dab6=await ReactionRoleGroup_1[a167_0x8646('0x46')][a167_0x8646('0x3b')](_0x5d16e3[a167_0x8646('0x2b')]['id']);if(!_0x45dab6)return;const _0x42b5e8=_0x5d16e3[a167_0x8646('0x5')]['id']?'<'+(_0x5d16e3[a167_0x8646('0x5')][a167_0x8646('0x16')]?'a':'')+':'+_0x5d16e3[a167_0x8646('0x5')][a167_0x8646('0x3f')]+':'+_0x5d16e3[a167_0x8646('0x5')]['id']+'>':_0x5d16e3[a167_0x8646('0x5')][a167_0x8646('0x3f')],_0x576b1f=emojis[a167_0x8646('0x1e')](_0x42b5e8);if(_0x576b1f){const _0x46702d=await Role_1[a167_0x8646('0x46')][a167_0x8646('0x3')]({'$or':_0x45dab6[a167_0x8646('0x17')][a167_0x8646('0x34')](_0x9e3e1=>({'_id':_0x9e3e1})),'guild':_0x5d16e3[a167_0x8646('0x2b')][a167_0x8646('0x43')]['id'],'emoji':_0x576b1f[a167_0x8646('0x28')]});if(!_0x46702d)return;if(_0x45dab6[a167_0x8646('0x1')]){for(const _0x23faa6 of _0x5d16e3[a167_0x8646('0x2b')][a167_0x8646('0x4a')][a167_0x8646('0x7')][a167_0x8646('0xd')](_0x478f75=>_0x478f75['users'][a167_0x8646('0x7')][a167_0x8646('0x25')](_0x317660[a167_0x8646('0x18')]['id'])&&_0x478f75[a167_0x8646('0x5')]['name']!==_0x5d16e3['emoji']['name'])[a167_0x8646('0x39')]()){await _0x23faa6['users'][a167_0x8646('0x3d')](_0x317660)[a167_0x8646('0x24')](()=>{});}await _0x317660[a167_0x8646('0x17')]['remove'](_0x45dab6['roles'],a167_0x8646('0x38'));}await _0x317660[a167_0x8646('0x17')][a167_0x8646('0x26')](_0x46702d[a167_0x8646('0x11')],a167_0x8646('0x19'));}},this[a167_0x8646('0x40')]=async(_0x2fca27,_0x185a0d)=>{_0x2fca27[a167_0x8646('0x33')]&&(_0x2fca27=await _0x2fca27['fetch']());_0x2fca27['message'][a167_0x8646('0x33')]&&(_0x2fca27[a167_0x8646('0x2b')]=await _0x2fca27[a167_0x8646('0x2b')][a167_0x8646('0x14')]());if(!_0x2fca27[a167_0x8646('0x2b')][a167_0x8646('0x43')])return;const _0x22aff5=_0x2fca27[a167_0x8646('0x2b')][a167_0x8646('0x43')][a167_0x8646('0x2f')](_0x185a0d);this[a167_0x8646('0x1c')](_0x2fca27,_0x22aff5)[a167_0x8646('0x24')](()=>{});const _0x5dee6c=await _0x2fca27[a167_0x8646('0x2b')][a167_0x8646('0x43')][a167_0x8646('0x2e')]();_0x5dee6c[a167_0x8646('0x10')]&&_0x2fca27['message']['channel']['id']===_0x5dee6c['suggestionsChannelId']&&this[a167_0x8646('0x57')](_0x2fca27,_0x22aff5)[a167_0x8646('0x24')](()=>{}),_0x5dee6c[a167_0x8646('0x47')]&&_0x2fca27[a167_0x8646('0x2b')]['guild'][a167_0x8646('0x58')][a167_0x8646('0x7')]['has'](_0x5dee6c[a167_0x8646('0x47')])&&this[a167_0x8646('0x4e')](_0x2fca27,_0x22aff5,_0x2fca27['message']['guild'][a167_0x8646('0x58')]['cache'][a167_0x8646('0x3e')](_0x5dee6c[a167_0x8646('0x47')]))[a167_0x8646('0x24')](()=>{}),_0x5dee6c[a167_0x8646('0x37')]&&_0x2fca27[a167_0x8646('0x2b')][a167_0x8646('0x43')][a167_0x8646('0x58')][a167_0x8646('0x7')][a167_0x8646('0x25')](_0x5dee6c['announcementsChannelId'])&&this[a167_0x8646('0x55')](_0x2fca27,_0x22aff5,_0x2fca27['message'][a167_0x8646('0x43')][a167_0x8646('0x58')][a167_0x8646('0x7')]['get'](_0x5dee6c[a167_0x8646('0x31')]))[a167_0x8646('0x24')](()=>{}),_0x5dee6c[a167_0x8646('0x1f')]&&this[a167_0x8646('0x1b')](_0x2fca27,_0x22aff5)[a167_0x8646('0x24')](()=>{});};}};