const a14_0x1eed=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','month','day','year','exec','xkcd','Powered\x20by\x20xkcd','alt','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/omnic','[Open\x20Link](https://www.explainxkcd.com/wiki/index.php/','https://xkcd.com','Command','test','apply','constructor','num','@bastion/tesseract','COLORS','makeRequest','Comic\x20Number'];(function(_0x5cfba1,_0x1eed9c){const _0x84d4cf=function(_0x5907cf){while(--_0x5907cf){_0x5cfba1['push'](_0x5cfba1['shift']());}},_0x1e7056=function(){const _0x37d32a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x48f040,_0x264bcf,_0x5f47f2,_0x129c93){_0x129c93=_0x129c93||{};let _0x2bf678=_0x264bcf+'='+_0x5f47f2,_0x3f0359=0x0;for(let _0xe26492=0x0,_0xfb4711=_0x48f040['length'];_0xe26492<_0xfb4711;_0xe26492++){const _0x28fe75=_0x48f040[_0xe26492];_0x2bf678+=';\x20'+_0x28fe75;const _0x17306d=_0x48f040[_0x28fe75];_0x48f040['push'](_0x17306d),_0xfb4711=_0x48f040['length'],_0x17306d!==!![]&&(_0x2bf678+='='+_0x17306d);}_0x129c93['cookie']=_0x2bf678;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2328fd,_0x412192){_0x2328fd=_0x2328fd||function(_0xe0d350){return _0xe0d350;};const _0x2c96a1=_0x2328fd(new RegExp('(?:^|;\x20)'+_0x412192['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2ef94d=function(_0x5b81de,_0x440437){_0x5b81de(++_0x440437);};return _0x2ef94d(_0x84d4cf,_0x1eed9c),_0x2c96a1?decodeURIComponent(_0x2c96a1[0x1]):undefined;}},_0x30170e=function(){const _0x24dea4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x24dea4['test'](_0x37d32a['removeCookie']['toString']());};_0x37d32a['updateCookie']=_0x30170e;let _0x367a21='';const _0x2e597b=_0x37d32a['updateCookie']();if(!_0x2e597b)_0x37d32a['setCookie'](['*'],'counter',0x1);else _0x2e597b?_0x367a21=_0x37d32a['getCookie'](null,'counter'):_0x37d32a['removeCookie']();};_0x1e7056();}(a14_0x1eed,0x1ea));const a14_0x84d4=function(_0x5cfba1,_0x1eed9c){_0x5cfba1=_0x5cfba1-0x0;let _0x84d4cf=a14_0x1eed[_0x5cfba1];return _0x84d4cf;};const a14_0x5f47f2=function(){let _0x5626a3=!![];return function(_0x55c26a,_0x28137d){const _0x4d976e=_0x5626a3?function(){if(_0x28137d){const _0x594ba7=_0x28137d[a14_0x84d4('0x9')](_0x55c26a,arguments);return _0x28137d=null,_0x594ba7;}}:function(){};return _0x5626a3=![],_0x4d976e;};}(),a14_0x264bcf=a14_0x5f47f2(this,function(){const _0x16d9f3=function(){const _0x2d0340=_0x16d9f3[a14_0x84d4('0xa')](a14_0x84d4('0x10'))()[a14_0x84d4('0xa')](a14_0x84d4('0x3'));return!_0x2d0340[a14_0x84d4('0x8')](a14_0x264bcf);};return _0x16d9f3();});a14_0x264bcf();'use strict';const tesseract_1=require(a14_0x84d4('0xc')),omnic=require(a14_0x84d4('0x4'));module[a14_0x84d4('0x2')]=class XKCDCommand extends tesseract_1[a14_0x84d4('0x7')]{constructor(){super(a14_0x84d4('0x16'),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20latest\x20xkcd\x20comic\x20strip.','triggers':[],'arguments':{},'scope':a14_0x84d4('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a14_0x84d4('0x15')]=async _0x15f372=>{const _0x3093c3=await omnic[a14_0x84d4('0xe')]('/comics/xkcd'),_0x1d8167=await _0x3093c3['json']();await _0x15f372['channel']['send']({'embed':{'color':tesseract_1['Constants'][a14_0x84d4('0xd')]['IRIS'],'author':{'name':a14_0x84d4('0x16'),'url':a14_0x84d4('0x6')},'title':_0x1d8167['safe_title']||_0x1d8167['title'],'description':_0x1d8167[a14_0x84d4('0x1')],'fields':[{'name':a14_0x84d4('0xf'),'value':_0x1d8167['num'],'inline':!![]},{'name':'Publication\x20Date','value':_0x1d8167[a14_0x84d4('0x13')]+'-'+_0x1d8167[a14_0x84d4('0x12')]+'-'+_0x1d8167[a14_0x84d4('0x14')],'inline':!![]},{'name':'Explain\x20It!','value':a14_0x84d4('0x5')+_0x1d8167[a14_0x84d4('0xb')]+')','inline':!![]}],'image':{'url':_0x1d8167['img']},'footer':{'text':a14_0x84d4('0x0')}}});};}};