const a36_0x2ff4=['fetchPremiumTier','\x20--help`\x20for\x20more\x20information.','Constants','@bastion/tesseract','streamers','GOLD','streamers\x20--twitch\x20USERNAME','join','remove','includes','name','../../utils/errors','../../utils/constants','DiscordError','channelId','You\x20aren\x27t\x20following\x20any\x20streamers.','IRIS','filter','PLATINUM','See\x20`','STREAMERS_PER_SERVICE','COLORS','PremiumTier','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/omnic','PREMIUM_MEMBERSHIP_REQUIRED','length','catch','LIMITED_PREMIUM_MEMBERSHIP','TWITCH','BASTION_ERROR_TYPE','twitch','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','errors','membershipLimitStreamers','test','MANAGE_GUILD','language','client','concat','guild','document','Twitch','apply','user','exec','save','constructor','users','It\x20allows\x20you\x20to\x20follow\x20streamers,\x20from\x20various\x20platforms,\x20in\x20the\x20server.\x20When\x20the\x20streamers\x20go\x20live,\x20or\x20post\x20a\x20video,\x20Bastion\x20will\x20notify\x20about\x20it\x20in\x20the\x20server.','LIMITS','streamers\x20--twitch\x20USERNAME\x20--remove','getString'];(function(_0x5dd089,_0x2ff42c){const _0x22b28b=function(_0x15ca69){while(--_0x15ca69){_0x5dd089['push'](_0x5dd089['shift']());}},_0x33c7d4=function(){const _0x4b0cd0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20452a,_0x145c66,_0x4feef1,_0x39260a){_0x39260a=_0x39260a||{};let _0x42b8fe=_0x145c66+'='+_0x4feef1,_0x17b533=0x0;for(let _0x1404fd=0x0,_0x18d7f0=_0x20452a['length'];_0x1404fd<_0x18d7f0;_0x1404fd++){const _0x10e575=_0x20452a[_0x1404fd];_0x42b8fe+=';\x20'+_0x10e575;const _0xebcdd3=_0x20452a[_0x10e575];_0x20452a['push'](_0xebcdd3),_0x18d7f0=_0x20452a['length'],_0xebcdd3!==!![]&&(_0x42b8fe+='='+_0xebcdd3);}_0x39260a['cookie']=_0x42b8fe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11930f,_0x142031){_0x11930f=_0x11930f||function(_0x5c4b34){return _0x5c4b34;};const _0x2de092=_0x11930f(new RegExp('(?:^|;\x20)'+_0x142031['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1bcb4a=function(_0x5ccf7c,_0x27b248){_0x5ccf7c(++_0x27b248);};return _0x1bcb4a(_0x22b28b,_0x2ff42c),_0x2de092?decodeURIComponent(_0x2de092[0x1]):undefined;}},_0x221897=function(){const _0x41fde0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x41fde0['test'](_0x4b0cd0['removeCookie']['toString']());};_0x4b0cd0['updateCookie']=_0x221897;let _0xa88258='';const _0x37aa6e=_0x4b0cd0['updateCookie']();if(!_0x37aa6e)_0x4b0cd0['setCookie'](['*'],'counter',0x1);else _0x37aa6e?_0xa88258=_0x4b0cd0['getCookie'](null,'counter'):_0x4b0cd0['removeCookie']();};_0x33c7d4();}(a36_0x2ff4,0x1ee));const a36_0x22b2=function(_0x5dd089,_0x2ff42c){_0x5dd089=_0x5dd089-0x0;let _0x22b28b=a36_0x2ff4[_0x5dd089];return _0x22b28b;};const a36_0x4feef1=function(){let _0x162053=!![];return function(_0x51e8d9,_0x28bf5f){const _0x18ac19=_0x162053?function(){if(_0x28bf5f){const _0x2ccf08=_0x28bf5f[a36_0x22b2('0x24')](_0x51e8d9,arguments);return _0x28bf5f=null,_0x2ccf08;}}:function(){};return _0x162053=![],_0x18ac19;};}(),a36_0x145c66=a36_0x4feef1(this,function(){const _0x49758e=function(){const _0x27aaf2=_0x49758e[a36_0x22b2('0x28')](a36_0x22b2('0xf'))()[a36_0x22b2('0x28')](a36_0x22b2('0x19'));return!_0x27aaf2[a36_0x22b2('0x1c')](a36_0x145c66);};return _0x49758e();});a36_0x145c66();'use strict';const tesseract_1=require(a36_0x22b2('0x31')),constants=require(a36_0x22b2('0x4')),errors=require(a36_0x22b2('0x3')),omnic=require(a36_0x22b2('0x10'));module['exports']=class InviteFilterCommand extends tesseract_1['Command']{constructor(){super(a36_0x22b2('0x32'),{'description':a36_0x22b2('0x2a'),'triggers':[],'arguments':{'alias':{'remove':['r'],'twitch':['t']},'boolean':['remove'],'string':['twitch']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a36_0x22b2('0x1d')],'syntax':[a36_0x22b2('0x32'),a36_0x22b2('0x34'),a36_0x22b2('0x2c')]}),this[a36_0x22b2('0x26')]=async(_0x2b4966,_0x1f9e7f)=>{const _0x3b7cc7=_0x2b4966[a36_0x22b2('0x21')];if(_0x1f9e7f[a36_0x22b2('0x17')]){_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')]={..._0x3b7cc7['document'][a36_0x22b2('0x32')],'twitch':{'channelId':_0x2b4966['channel']['id'],'users':_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')]&&_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')]&&_0x3b7cc7['document'][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')]&&_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')]['users'][a36_0x22b2('0x12')]&&!_0x3b7cc7[a36_0x22b2('0x22')]['streamers'][a36_0x22b2('0x17')][a36_0x22b2('0x29')][a36_0x22b2('0x1')](_0x1f9e7f[a36_0x22b2('0x17')])?_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')][a36_0x22b2('0x20')](_0x1f9e7f['twitch']):[_0x1f9e7f[a36_0x22b2('0x17')]]}};_0x1f9e7f[a36_0x22b2('0x0')]&&(_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')]=_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')][a36_0x22b2('0x9')](_0x41df75=>_0x41df75!==_0x1f9e7f[a36_0x22b2('0x17')]),_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')]['length']===0x0&&(_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')]['twitch']=undefined,delete _0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')]));if(_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')]['length']>constants[a36_0x22b2('0x2b')]['STREAMERS_PER_SERVICE']&&constants['isPublicBastion'](this[a36_0x22b2('0x1f')][a36_0x22b2('0x25')])){const _0x5230e3=await omnic[a36_0x22b2('0x2e')](_0x2b4966[a36_0x22b2('0x21')])[a36_0x22b2('0x13')](()=>{});if(_0x5230e3){if(_0x5230e3===omnic[a36_0x22b2('0xe')][a36_0x22b2('0x33')]&&_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')]['length']>constants[a36_0x22b2('0x2b')][a36_0x22b2('0x33')][a36_0x22b2('0xc')])throw new errors[(a36_0x22b2('0x5'))](errors[a36_0x22b2('0x16')][a36_0x22b2('0x14')],this['client'][a36_0x22b2('0x18')][a36_0x22b2('0x2d')](_0x2b4966[a36_0x22b2('0x21')][a36_0x22b2('0x22')][a36_0x22b2('0x1e')],a36_0x22b2('0x1a'),a36_0x22b2('0x1b'),constants[a36_0x22b2('0x2b')][a36_0x22b2('0x33')]['STREAMERS_PER_SERVICE']));else{if(_0x5230e3===omnic[a36_0x22b2('0xe')][a36_0x22b2('0xa')]&&_0x3b7cc7['document'][a36_0x22b2('0x32')][a36_0x22b2('0x17')]['users'][a36_0x22b2('0x12')]>constants['LIMITS'][a36_0x22b2('0xa')]['STREAMERS_PER_SERVICE'])throw new errors[(a36_0x22b2('0x5'))](errors['BASTION_ERROR_TYPE'][a36_0x22b2('0x14')],this[a36_0x22b2('0x1f')][a36_0x22b2('0x18')][a36_0x22b2('0x2d')](_0x2b4966[a36_0x22b2('0x21')][a36_0x22b2('0x22')][a36_0x22b2('0x1e')],a36_0x22b2('0x1a'),a36_0x22b2('0x1b'),constants[a36_0x22b2('0x2b')][a36_0x22b2('0xa')][a36_0x22b2('0xc')]));}}else throw new errors[(a36_0x22b2('0x5'))](errors[a36_0x22b2('0x16')][a36_0x22b2('0x11')],this['client'][a36_0x22b2('0x18')][a36_0x22b2('0x2d')](_0x2b4966[a36_0x22b2('0x21')][a36_0x22b2('0x22')][a36_0x22b2('0x1e')],a36_0x22b2('0x1a'),'premiumStreamers',constants['LIMITS']['STREAMERS_PER_SERVICE']));}await _0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x27')]();}const _0x5b0ad7=[];_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')]&&_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')]&&_0x5b0ad7['push']({'name':a36_0x22b2('0x23'),'value':'<#'+_0x3b7cc7['document'][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x6')]+'>\x0a'+(_0x3b7cc7['document'][a36_0x22b2('0x32')]['twitch'][a36_0x22b2('0x29')]&&_0x3b7cc7[a36_0x22b2('0x22')][a36_0x22b2('0x32')][a36_0x22b2('0x17')][a36_0x22b2('0x29')][a36_0x22b2('0x12')]?_0x3b7cc7[a36_0x22b2('0x22')]['streamers'][a36_0x22b2('0x17')][a36_0x22b2('0x29')][a36_0x22b2('0x35')]('\x0a'):'-')}),await _0x2b4966['channel']['send']({'embed':{'color':_0x1f9e7f['twitch']&&_0x1f9e7f[a36_0x22b2('0x17')][a36_0x22b2('0x12')]?constants[a36_0x22b2('0xd')][a36_0x22b2('0x15')]:tesseract_1[a36_0x22b2('0x30')][a36_0x22b2('0xd')][a36_0x22b2('0x8')],'title':'Followed\x20Streamers','fields':_0x5b0ad7[a36_0x22b2('0x12')]?_0x5b0ad7:[{'name':a36_0x22b2('0x7'),'value':a36_0x22b2('0xb')+this[a36_0x22b2('0x2')]+a36_0x22b2('0x2f')}]}})[a36_0x22b2('0x13')](()=>{});};}};