/*
HTTP Host: static.ak.fbcdn.net
Generated: September 30th 2010 3:18:53 PM PDT
Machine: 10.30.148.190
*/

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"js\\\/ecw5gb3xcw84owks.pkg.js\"]); }\n\nvar DOMScroll={getScrollState:function(){var d=Vector2.getViewportDimensions();var a=Vector2.getDocumentDimensions();var b=(a.x>d.x);var c=(a.y>d.y);b+=0;c+=0;return new Vector2(b,c);},_scrollbarSize:null,_initScrollbarSize:function(){var a=$N('p');a.style.width='100%';a.style.height='200px';var b=$N('div');b.style.position='absolute';b.style.top='0px';b.style.left='0px';b.style.visibility='hidden';b.style.width='200px';b.style.height='150px';b.style.overflow='hidden';b.appendChild(a);document.body.appendChild(b);var c=a.offsetWidth;b.style.overflow='scroll';var d=a.offsetWidth;if(c==d)d=b.clientWidth;document.body.removeChild(b);DOMScroll._scrollbarSize=c-d;if(DOMScroll._scrollbarSize<5)DOMScroll._scrollbarSize=15;},getScrollbarSize:function(){if(DOMScroll._scrollbarSize===null)DOMScroll._initScrollbarSize();return DOMScroll._scrollbarSize;},scrollTo:function(e,d,b,a){d=d||d===undefined;if(!(e instanceof Vector2)){var f=Vector2.getScrollPosition().x;var g=Vector2.getElementPosition($(e)).y;g=g-Math.min(0,Math.max(Vector2.getViewportDimensions().y\/3,100));e=new Vector2(f,g,'document');}if(b){e.y-=Vector2.getViewportDimensions().y\/2;}else if(a){e.y-=Vector2.getViewportDimensions().y;e.y+=a;}e=e.convertTo('document');if(d&&window.animation){var c=document.body;animation(c).to('scrollTop',e.y).to('scrollLeft',e.x).ease(animation.ease.end).duration(750).go();}else if(window.scrollTo)window.scrollTo(e.x,e.y);}};\nfunction ElementController(){this.handlers=[[],[]];}copy_properties(ElementController,{ALL:1,TARGETS:2,MODIFIERS:4,BUTTONS:8});ElementController.prototype={initialize:function(){this.initialize=bagofholding;onloadRegister(this.register.bind(this));},handle:function(e,event,a){a=a||bagof(true);var b=this.handlers[0].concat(this.handlers[1]);for(var c=0,d=b.length;c<d;c++)if(a(b[c].filters,e,event)&&b[c].callback(e,event)===false)return event.kill();},_registerHandler:function(b,a,c,d){this.initialize();b[d?'unshift':'push']({callback:a,filters:c||0});},registerHandler:function(a,b,c){this._registerHandler(this.handlers[0],a,b,c);},registerFallbackHandler:function(a,b,c){this._registerHandler(this.handlers[1],a,b,c);}};var LinkController=new ElementController();copy_properties(LinkController,{key:'LinkControllerHandler',register:function(){Event.listen(document.documentElement,'mousedown',this.handler.bind(this));Event.listen(document.documentElement,'keydown',this.handler.bind(this));},handler:function(event){var b=Parent.byTag(event.getTarget(),'a');var a=b&&b.getAttribute('href',2);if(!a||b.rel||!this.usesWebProtocol(a)||DataStore.get(b,this.key))return;DataStore.set(b,this.key,Event.listen(b,'click',function(event){if(a.charAt(a.length-1)=='#'){event.prevent();return;}this.handle(b,event,this.filter);}.bind(this)));},filter:function(a,b,event){if(a&ElementController.ALL)return true;if((!(a&ElementController.TARGETS)&&b.target)||(!(a&ElementController.MODIFIERS)&&event.getModifiers().any)||(!(a&ElementController.BUTTONS)&&ua.safari()>=525&&event.which!=1))return false;return true;},usesWebProtocol:function(a){var b=a.match(\/^(\\w+):\/);return !b||b[1].match(\/^http\/i);}});var FormController=new ElementController();copy_properties(FormController,{register:function(){Event.listen(document.documentElement,'submit',this.handler.bind(this));},handler:function(event){user_action(event.getTarget(),'form',event);return this.handle(event.getTarget(),event);}});\nvar DocumentTitle=(function(a){return {get:function(){return a;},set:function(b,c){document.title=b;if(!c){a=b;Arbiter.inform('update_title',b);}}};})(document.title);\nfunction AjaxPipeRequest(b,a){this._uri=b;this._query_data=a;this._request=new AsyncRequest();this._canvas_id=null;this._allow_cross_page_transition=true;this._replayable=false;}copy_properties(AjaxPipeRequest.prototype,{setCanvasId:function(a){this._canvas_id=a;return this;},setURI:function(a){this._uri=a;return this;},setData:function(a){this._query_data=a;return this;},setAllowCrossPageTransition:function(a){this._allow_cross_page_transition=a;return this;},setAppend:function(a){this._append=a;return this;},send:function(){this._request.setURI(this._uri).setData(copy_properties({ajaxpipe:1},this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setReplayable(this._replayable).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setOption('useIframeTransport',true);AjaxPipeRequest._current_request=this._request;this._request.send();return this;},_preBootloadFirstResponse:function(a){return false;},_fireDomContentCallback:function(){this._arbiter.inform('ajaxpipe\/domcontent_callback',true,Arbiter.BEHAVIOR_STATE);},_fireOnloadCallback:function(){this._arbiter.inform('ajaxpipe\/onload_callback',true,Arbiter.BEHAVIOR_STATE);},_isRelevant:function(a){return this._request==AjaxPipeRequest._current_request||a.isReplay();},_preBootloadHandler:function(a){if(a.getPayload().redirect||!this._isRelevant(a))return false;var b=false;if(a.is_first){!this._append&&AjaxPipeRequest.clearCanvas(this._canvas_id);this._arbiter=new Arbiter();b=this._preBootloadFirstResponse(a);this.pipe=new BigPipe({arbiter:this._arbiter,rootNodeID:this._canvas_id,numPhases:a.payload.num_phases,lid:this._request.lid,ttiPhase:a.payload.tti_phase,rrEnabled:a.payload.roadrunner_enabled,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:'ajaxpipe\/domcontent_callback',onloadEvt:'ajaxpipe\/onload_callback',isReplay:a.isReplay()});}return b;},_redirect:function(a){return false;},_versionCheck:function(a){return true;},_onInitialResponse:function(b){var a=b.getPayload();if(!this._isRelevant(b))return false;if(!a)return true;if(this._redirect(a)||!this._versionCheck(a))return false;return true;},_processFirstPayload:function(a){if(a.canvas_class&&ge(this._canvas_id))CSS.setClass(this._canvas_id,a.canvas_class);},_onResponse:function(b){var a=b.payload;if(!this._isRelevant(b))return AsyncRequest.suppressOnloadToken;if(b.is_first){this._processFirstPayload(a);a.provides.push('uipage_onload');if(this._append)a.append=this._canvas_id;}if(!b.is_last||b.is_first){if('content' in a.content&&this._canvas_id!='content'){a.content[this._canvas_id]=a.content.content;delete a.content.content;}this.pipe.onPageletArrive(a);}if(b.is_last){AjaxPipeRequest.restoreCanvas(this._canvas_id);this._request.cavalry&&this._request.cavalry.setTimeStamp('t_html');}return AsyncRequest.suppressOnloadToken;},setFinallyHandler:function(a){this._request.setFinallyHandler(a);return this;},setErrorHandler:function(a){this._request.setErrorHandler(a);return this;},abort:function(){this._request.abort();if(AjaxPipeRequest._current_request==this._request)AjaxPipeRequest._current_request=null;this._request=null;return this;},setReplayable:function(a){this._replayable=a;return this;}});copy_properties(AjaxPipeRequest,{clearCanvas:function(a){var b=ge(a);if(b){b.style.minHeight='600px';DOM.empty(b);}},restoreCanvas:function(a){var b=ge(a);if(b)b.style.minHeight='100px';},getCurrentRequest:function(){return AjaxPipeRequest._current_request;},setCurrentRequest:function(a){AjaxPipeRequest._current_request=a;},isActiveOnPage:function(b){if(!env_get('ajaxpipe_enabled'))return false;var a=new RegExp(env_get('ajaxpipe_inactive_page_regex')||null);return !a.test(URI(b).getPath());}});\nif(!this.JSON)this.JSON=function(){function f(n){return n<10?'0'+n:n;}Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';};var m={'\\b':'\\\\b','\\t':'\\\\t','\\n':'\\\\n','\\f':'\\\\f','\\r':'\\\\r','\"':'\\\\\"','\\\\':'\\\\\\\\'};function stringify(value,whitelist){var a,i,k,l,v;switch(typeof value){case 'string':return (new RegExp('[\\x00-\\x1f\\\\\\\\\"]')).test(value)?'\"'+value.replace(\/[\\x00-\\x1f\\\\\"]\/g,function(a){var c=m[a];if(c)return c;c=a.charCodeAt();return '\\\\u00'+Math.floor(c\/16).toString(16)+(c%16).toString(16);})+'\"':'\"'+value+'\"';case 'number':return isFinite(value)?String(value):'null';case 'boolean':return String(value);case 'null':return 'null';case 'object':if(DOM.isNode(value))return null;if(!value)return 'null';if(typeof value.toJSON==='function')return stringify(value.toJSON());a=[];if(typeof value.length==='number'&&!(propertyIsEnumerable(value,'length'))){l=value.length;for(i=0;i<l;i+=1)a.push(stringify(value[i],whitelist)||'null');return '['+a.join(',')+']';}if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v)a.push(stringify(k)+':'+v);}}}else for(k in value)if(typeof k==='string'){v=stringify(value[k],whitelist);if(v)a.push(stringify(k)+':'+v);}return '{'+a.join(',')+'}';}}return {stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object')for(i in v)if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined)v[i]=n;}return filter(k,v);}if(text&&\/^[\\],:{}\\s]*$\/.test(text.replace(\/\\\\.\/g,'@').replace(\/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(:?[eE][+\\-]?\\d+)?\/g,']').replace(\/(?:^|:|,)(?:\\s*\\[)+\/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}throw new SyntaxError('decodeJSON');}};}();this.JSON.encode=this.JSON.stringify;this.JSON.decode=this.JSON.parse;function propertyIsEnumerable(a,b){if(a.propertyIsEnumerable)return a.propertyIsEnumerable(b);for(var c in a)if(c==b)return true;return false;}\n_PERSISTENT_BACKENDS={localstorage:LocalStorage};function LocalStorage(){this._store=window.localStorage;}LocalStorage.available=function(){return window.localStorage?true:false;};copy_properties(LocalStorage.prototype,{keys:function(){var b=[];for(var a=0;a<this._store.length;a++)b.push(this._store.key(a));return b;},get:function(a){return this._store.getItem(a);},set:function(a,b){this._store.setItem(a,b);},remove:function(a){this._store.removeItem(a);},clear:function(){this._store.clear();}});function CacheStorage(d,b){this._key_prefix=b||'_cs_';this._magic_prefix='_@_';if(d=='AUTO')for(var c in _PERSISTENT_BACKENDS){var a=_PERSISTENT_BACKENDS[c];if(a.available()){d=c;break;}}if(d)if(!_PERSISTENT_BACKENDS[d]){this._backend=null;}else this._backend=new _PERSISTENT_BACKENDS[d]();this._memcache={};}copy_properties(CacheStorage.prototype,{keys:function(){var d=[];if(this._backend){var a=this._backend.keys();for(var b=0;b<a.length;b++)if(a[b].substr(0,this._key_prefix.length)==this._key_prefix)d.push(a[b].substr(this._key_prefix.length));return d;}for(var c in this._memcache)d.push(c);return d;},set:function(b,a){this._memcache[b]=a;if(this._backend){if(typeof a=='string'){a=this._magic_prefix+a;}else a=JSON.encode(a);this._backend.set(this._key_prefix+b,a);}},get:function(b,c){if(this._memcache[b]!==undefined)return this._memcache[b];var d=undefined;if(this._backend){var d=this._backend.get(this._key_prefix+b);if(d!==null){if(d.substr(0,this._magic_prefix.length)==this._magic_prefix){d=d.substr(this._magic_prefix.length);}else d=JSON.decode(d);this._memcache[b]=d;}else d=undefined;}if(d===undefined&&c!==undefined){d=c;this._memcache[b]=d;if(this._backend){if(typeof d=='string'){var a=this._magic_prefix+d;}else var a=JSON.encode(d);this._backend.set(this._key_prefix+b,a);}}return d;},remove:function(a){delete this._memcache[a];if(this._backend)this._backend.remove(this._key_prefix+a);}});\nfunction PageCache(a,b){if(this===window)return new PageCache(a,b);this._MAX_PAGE_NUM=typeof a=='undefined'?5:a;this._MAX_TTL=typeof b=='undefined'?600000:b;this._storage=new CacheStorage();}copy_properties(PageCache.prototype,{_normalizeURI:function(a){a=new URI(a);if(a.getPath()=='\/')a.setPath('\/home.php');return a.getUnqualifiedURI().setFragment('').removeQueryData('ref').toString();},addPage:function(c,b){c=this._normalizeURI(c);var a=this._storage.get(c,{});a.normalized_uri=new URI(c);copy_properties(a,b);a.accessTime=a.genTime=(new Date()).getTime();this._clearCache();},updatePage:function(c,a){c=this._normalizeURI(c);var b=this._storage.get(c);if(typeof b==='undefined')return;copy_properties(b,a);this._storage.set(c,b);},isPageInCache:function(b){var a=this._storage.get(this._normalizeURI(b));return (typeof a!=='undefined');},invalidatePage:function(a){a=this._normalizeURI(a);this._storage.remove(a);},getPage:function(b){this._clearCache();b=this._normalizeURI(b);var a=this._storage.get(b);if(typeof a==='undefined')return null;a.accessTime=(new Date()).getTime();return a;},getPageUris:function(){return this._storage.keys();},_clearCache:function(){var b=(new Date()).getTime();var d=null;var f=0;var a=this._storage.keys();for(var c=0;c<a.length;c++){var h=a[c];var e=this._storage.get(h);var g=e.ttl||this._MAX_TTL;if(e.genTime<b-g){this._storage.remove(h);continue;}if(!d||this._storage.get(d).accessTime>e.accessTime)d=h;f++;}if(f>this._MAX_PAGE_NUM&&d)this._storage.remove(d);}});\nvar HistoryManager=window.HistoryManager||{_IFRAME_BASE_URI:'http:\/\/static.ak.facebook.com\/common\/history_manager.php',history:null,current:0,fragment:null,_setIframeSrcFragment:function(b){b=b.toString();var a=HistoryManager.history.length-1;HistoryManager.iframe.src=HistoryManager._IFRAME_BASE_URI+'?|index='+a+'#'+encodeURIComponent(b);return HistoryManager;},getIframeSrcFragment:function(){return decodeURIComponent(URI(HistoryManager.iframe.contentWindow.document.location.href).getFragment());},nextframe:function(a,b){if(b){HistoryManager._setIframeSrcFragment(a);return;}if(a!==undefined){HistoryManager.iframeQueue.push(a);}else{HistoryManager.iframeQueue.splice(0,1);HistoryManager.iframeTimeout=null;HistoryManager.checkURI();}if(HistoryManager.iframeQueue.length&&!HistoryManager.iframeTimeout){var c=HistoryManager.iframeQueue[0];HistoryManager.iframeTimeout=setTimeout(function(){HistoryManager._setIframeSrcFragment(c);},100,false);}},isInitialized:function(){return !!HistoryManager._initialized;},init:function(){if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top)return;if(HistoryManager._initialized)return HistoryManager;var b=URI();var a=b.getFragment()||'';if(URI.getRequestURI(false).getProtocol().toLowerCase()=='https')HistoryManager._IFRAME_BASE_URI='https:\/\/s-static.ak.facebook.com\/common\/history_manager.php';copy_properties(HistoryManager,{_initialized:true,fragment:a,orig_fragment:a,history:[b],callbacks:[],lastChanged:new Date().getTime(),canonical:URI('#'),fragmentTimeout:null,user:0,iframeTimeout:null,iframeQueue:[],enabled:true,debug:bagofholding});if(window.history&&history.pushState){this.lastURI=document.location.href;window.history.replaceState(this.lastURI,null);Event.listen(window,'popstate',function(c){if(c&&c.state&&HistoryManager.lastURI!=c.state){HistoryManager.lastURI=c.state;HistoryManager.lastChanged=new Date().getTime();HistoryManager.notify(URI(c.state).getUnqualifiedURI().toString());}}.bind(HistoryManager));if(ua.chrome()>5)setInterval(HistoryManager.checkURI,42,false);return HistoryManager;}HistoryManager._updateRefererURI(URI.getRequestURI(false));if(ua.safari()<500||ua.firefox()<2){HistoryManager.enabled=false;return HistoryManager;}if(ua.ie()<8){HistoryManager.iframe=document.createElement('iframe');copy_properties(HistoryManager.iframe.style,{width:'0',height:'0',frameborder:'0',left:'0',top:'0',position:'absolute'});onloadRegister(function(){HistoryManager._setIframeSrcFragment(a);document.body.insertBefore(HistoryManager.iframe,document.body.firstChild);});}else if('onhashchange' in window){Event.listen(window,'hashchange',function(){HistoryManager.checkURI.bind(HistoryManager).defer();});}else setInterval(HistoryManager.checkURI,42,false);return HistoryManager;},registerURIHandler:function(a){HistoryManager.callbacks.push(a);return HistoryManager;},setCanonicalLocation:function(a){HistoryManager.canonical=URI(a);return HistoryManager;},notify:function(c){if(c==HistoryManager.orig_fragment)c=HistoryManager.canonical.getFragment();for(var b=0;b<HistoryManager.callbacks.length;b++)try{if(HistoryManager.callbacks[b](c))return true;}catch(a){}return false;},checkURI:function(){if(new Date().getTime()-HistoryManager.lastChanged<400)return;if(window.history&&history.pushState){if(document.location.href!=HistoryManager.lastURI){HistoryManager.lastChanged=new Date().getTime();HistoryManager.lastURI=document.location.href;HistoryManager.notify(URI(document.location.href).getUnqualifiedURI().toString());}return;}if(ua.ie()<8&&HistoryManager.iframeQueue.length)return;if(ua.safari()&&window.history.length==200){if(!HistoryManager.warned)HistoryManager.warned=true;return;}var a=URI().getFragment();if(a.charAt(0)=='!')a=a.substr(1);if(ua.ie()<8)a=HistoryManager.getIframeSrcFragment();a=a.replace(\/%23\/g,'#');if(a!=HistoryManager.fragment.replace(\/%23\/g,'#')){HistoryManager.debug([a,' vs ',HistoryManager.fragment,'whl: ',window.history.length,'QHL: ',HistoryManager.history.length].join(' '));for(var b=HistoryManager.history.length-1;b>=0;--b)if(HistoryManager.history[b].getFragment().replace(\/%23\/g,'#')==a)break;++HistoryManager.user;if(b>=0){HistoryManager.go(b-HistoryManager.current);}else HistoryManager.go('#'+a);--HistoryManager.user;}delete a;},_updateRefererURI:function(c){c=c.toString();if(c.charAt(0)!='\/'&&c.indexOf('\/\/')==-1)return;var b=new URI(window.location);if(b.isFacebookURI()){var a=b.getPath()+window.location.search;}else var a='';setCookie('x-referer',URI(c).getQualifiedURI().setFragment(a).toString());},go:function(c,e,f){if(window.history&&history.pushState){e||typeof(c)=='number';this.lastURI=c;if(f){window.history.replaceState(c,null,c);}else window.history.pushState(c,null,c);HistoryManager.lastChanged=new Date().getTime();return false;}HistoryManager.debug('go: '+c);if(e===undefined)e=true;if(!HistoryManager.enabled)if(!e)return false;if(typeof(c)=='number'){if(!c)return false;var b=c+HistoryManager.current;var d=Math.max(0,Math.min(HistoryManager.history.length-1,b));HistoryManager.current=d;b=HistoryManager.history[d].getFragment()||HistoryManager.orig_fragment;HistoryManager.fragment=b;HistoryManager.lastChanged=new Date().getTime();if(ua.ie()<8){if(HistoryManager.fragmentTimeout)clearTimeout(HistoryManager.fragmentTimeout);HistoryManager._temporary_fragment=b;HistoryManager.fragmentTimeout=setTimeout(function(){window.location.hash='#!'+b;delete HistoryManager._temporary_fragment;},750,false);if(!HistoryManager.user)HistoryManager.nextframe(b,f);}else if(!HistoryManager.user)go_or_replace(window.location,window.location.href.split('#')[0]+'#!'+b,f);if(e)HistoryManager.notify(b);HistoryManager._updateRefererURI(b);return false;}c=URI(c);if(c.getDomain()==URI().getDomain())c=URI('#'+c.getUnqualifiedURI());var a=HistoryManager.history[HistoryManager.current].getFragment();var g=c.getFragment();if(g==a||(a==HistoryManager.orig_fragment&&g==HistoryManager.canonical.getFragment())){if(e)HistoryManager.notify(g);HistoryManager._updateRefererURI(g);return false;}if(f)HistoryManager.current--;var h=(HistoryManager.history.length-HistoryManager.current)-1;HistoryManager.history.splice(HistoryManager.current+1,h);HistoryManager.history.push(URI(c));return HistoryManager.go(1,e,f);},getCurrentFragment:function(){var a=HistoryManager._temporary_fragment!==undefined?HistoryManager._temporary_fragment:URI.getRequestURI(false).getFragment();return a==HistoryManager.orig_fragment?HistoryManager.canonical.getFragment():a;}};var PageTransitions=window.PageTransitions||{_transition_handlers:[],_scroll_positions:{},_scroll_locked:false,isInitialized:function(){return !!PageTransitions._initialized;},_init:function(){if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top)return;if(PageTransitions._initialized)return PageTransitions;PageTransitions._initialized=true;var c=URI.getRequestURI(false);var a=c.getUnqualifiedURI();var d=URI(a).setFragment(null);if(d.toString()===a.getFragment())a=d;copy_properties(PageTransitions,{_current_uri:a,_most_recent_uri:a,_next_uri:a});var b;if(c.getFragment().startsWith('\/')){b=c.getFragment();}else b=a;HistoryManager.init().setCanonicalLocation('#'+b).registerURIHandler(PageTransitions._historyManagerHandler);LinkController.registerFallbackHandler(PageTransitions._rewriteHref,LinkController.TARGETS|LinkController.MODIFIERS);LinkController.registerFallbackHandler(PageTransitions._onlinkclick);FormController.registerFallbackHandler(PageTransitions._onformsubmit);Event.listen(window,'scroll',function(){if(!PageTransitions._scroll_locked)PageTransitions._scroll_positions[PageTransitions._current_uri]=Vector2.getScrollPosition();});return PageTransitions;},registerHandler:function(b,a){PageTransitions._init();a=a||5;if(!PageTransitions._transition_handlers[a])PageTransitions._transition_handlers[a]=[];PageTransitions._transition_handlers[a].push(b);},getCurrentURI:function(a){if(!PageTransitions._current_uri&&!a)return new URI(PageTransitions._most_recent_uri);return new URI(PageTransitions._current_uri);},getMostRecentURI:function(){return new URI(PageTransitions._most_recent_uri);},getNextURI:function(){return new URI(PageTransitions._next_uri);},_rewriteHref:function(a){var c=a.getAttribute('href');var b=_computeRelativeURI(PageTransitions._most_recent_uri.getQualifiedURI(),c).toString();if(c!=b)a.setAttribute('href',b);},_onlinkclick:function(a){_BusyUIManager.lookBusy(a);PageTransitions.go(a.getAttribute('href'));return false;},_onformsubmit:function(a){var c=new URI(a.getAttribute('action')||''),b=_computeRelativeURI(PageTransitions._most_recent_uri,c);a.setAttribute('action',b.toString());if(!a.method||a.method.toUpperCase()=='GET'){PageTransitions.go(b.addQueryData(Form.serialize(a)));return false;}},go:function(d,b){var a=new URI(d).removeQueryData('quickling').getQualifiedURI();var c=a.getUnqualifiedURI();delete PageTransitions._scroll_positions[c];_BusyUIManager.lookBusy();PageTransitions._loadPage(a,function(e){if(e){HistoryManager.go(a.toString(),false,b);}else go_or_replace(window.location,a,b);});},_historyManagerHandler:function(a){if(a.charAt(0)!='\/')return false;user_action({href:a},'h',null);PageTransitions._loadPage(new URI(a),function(b){if(!b)go_or_replace(window.location,a,true);});return true;},_loadPage:function(e,c){if(e.getFragment()&&are_equal(URI(e).setFragment(null).getQualifiedURI(),URI(PageTransitions._current_uri).setFragment(null).getQualifiedURI())){PageTransitions._current_uri=PageTransitions._most_recent_uri=e;PageTransitions.restoreScrollPosition();_BusyUIManager.stopLookingBusy();return;}var d=PageTransitions._scroll_positions[PageTransitions._current_uri];PageTransitions._current_uri=null;PageTransitions._next_uri=e;if(d)DOMScroll.scrollTo(d,false);var b=function(){PageTransitions._scroll_locked=true;var f=PageTransitions._handleTransition(e);c&&c(f);};var a=_runHooks('onbeforeleavehooks');if(a){_BusyUIManager.stopLookingBusy();PageTransitions._warnBeforeLeaving(a,b);}else b();},_handleTransition:function(f){window.onbeforeleavehooks=undefined;_BusyUIManager.lookBusy();if(!f.isSameOrigin())return false;var e=window.AsyncRequest&&AsyncRequest.getLastId();Arbiter.inform(\"pre_page_transition\",{from:PageTransitions.getMostRecentURI(),to:f});for(var b=PageTransitions._transition_handlers.length-1;b>=0;--b){var a=PageTransitions._transition_handlers[b];if(!a)continue;for(var c=a.length-1;c>=0;--c)if(a[c](f)===true){var d={sender:this,uri:f,id:e};Arbiter.inform(\"page_transition\",d);return true;}else a.splice(c,1);}return false;},unifyURI:function(){PageTransitions._current_uri=PageTransitions._most_recent_uri=PageTransitions._next_uri;},transitionComplete:function(a){PageTransitions._executeCompletionCallback();_BusyUIManager.stopLookingBusy();PageTransitions.unifyURI();if(!a)PageTransitions.restoreScrollPosition();},_executeCompletionCallback:function(){if(PageTransitions._completionCallback)PageTransitions._completionCallback();PageTransitions._completionCallback=null;},setCompletionCallback:function(a){PageTransitions._completionCallback=a;},_warnBeforeLeaving:function(b,a){new Dialog().setTitle(_tx(\"Are you sure you want to leave this page?\")).setBody(htmlize(b)).setButtons([{name:'leave_page',label:_tx(\"Leave This Page\"),handler:a},{name:'continue_editing',label:_tx(\"Continue Editing\"),className:'inputaux'}]).setModal().show();},restoreScrollPosition:function(){PageTransitions._scroll_locked=false;var c=PageTransitions._current_uri;var e=PageTransitions._scroll_positions[c];if(e){DOMScroll.scrollTo(e,false);return;}function d(f){return (f||null)&&(DOM.find(document,\"a[name='\"+escape_js_quotes(f)+\"']\")||ge(f));}var a=d(c.getFragment());if(a){var b=Vector2.getElementPosition(a);b.x=0;DOMScroll.scrollTo(b);}}};function _computeRelativeURI(d,b){var e=new URI(),c=b;d=new URI(d);b=new URI(b);if(!b.isFacebookURI())return c;var f=d;var a=['Protocol','Domain','Port','Path','QueryData','Fragment'];a.forEach(function(h){var g=h=='Path'&&f===d;if(g)e.setPath(_computeRelativePath(d.getPath(),b.getPath()));if(!is_empty(b['get'+h]()))f=b;if(!g)e['set'+h](f['get'+h]());});return e;}function _computeRelativePath(b,a){if(!a)return b;if(a.charAt(0)=='\/')return a;var c=b.split('\/').slice(0,-1);c[0]!=='';a.split('\/').forEach(function(d){if(!(d=='.'))if(d=='..'){if(c.length>1)c=c.slice(0,-1);}else c.push(d);});return c.join('\/');}function go_or_replace(a,d,c){var e=new URI(d);if(a.pathname=='\/'&&e.getPath()!='\/'&&e.isQuicklingEnabled()){var b=a.search?{}:{q:''};e=new URI().setPath('\/').setQueryData(b).setFragment(e.getUnqualifiedURI()).toString();d=e.toString();}if(c&&!(ua.ie()<8)){a.replace(d);}else if(a.href==d){a.reload();}else a.href=d;}var _BusyUIManager=window._BusyUIManager||{_looking_busy:false,_original_cursors:[],lookBusy:function(a){if(a)_BusyUIManager._giveProgressCursor(a);if(_BusyUIManager._looking_busy)return;_BusyUIManager._looking_busy=true;_BusyUIManager._giveProgressCursor(document.body);},stopLookingBusy:function(){if(!_BusyUIManager._looking_busy)return;_BusyUIManager._looking_busy=false;while(_BusyUIManager._original_cursors.length){var c=_BusyUIManager._original_cursors.pop();var b=c[0];var a=c[1];if(b.style)b.style.cursor=a||'';}},_giveProgressCursor:function(a){if(!ua.safari()){_BusyUIManager._original_cursors.push([a,a.style.cursor]);a.style.cursor='progress';}}};\nvar Quickling=window.Quickling||{isActive:function(){return Quickling._is_active||false;},isFeatureEnabled:function(a){return Quickling._capabilities&&Quickling._capabilities[a];},init:function(c,b,a){if(Quickling._is_initialized)return;copy_properties(Quickling,{_is_initialized:true,_is_active:true,_session_length:b,_capabilities:a,_is_in_transition:false,_title_interval:false,_ie_cache_title:'',_cache_hit:false,_version:c});Quickling._instrumentTimeoutFunc('setInterval');Quickling._instrumentTimeoutFunc('setTimeout');PageTransitions.registerHandler(Quickling._transitionHandler,1);if(Quickling.isFeatureEnabled('page_cache')){Quickling._cache=new PageCache();Quickling._invalidate_msgs=[];Arbiter.subscribe(\"pre_page_transition\",Quickling._onPrePageTransition);Arbiter.subscribe(Arbiter.NEW_NOTIFICATIONS,Quickling._onNotifications);Arbiter.subscribe(AsyncRequest.REPLAYABLE_AJAX,Quickling._onReplayableAjax);Arbiter.subscribe(Arbiter.PAGECACHE_INVALIDATE,Quickling._onCacheInvalidates);}},_onPrePageTransition:function(b,a){if(Quickling.isFeatureEnabled('page_cache')&&(page=Quickling._cache.getPage(a.from))&&!page.incremental_updates){invoke_callbacks(page.onpagecache);page.refresh_pagelets.forEach(function(c){var d=Quickling._getPageletById(c);d&&d.refresh(true);});page.incremental_updates=AsyncRequest.stashBundledRequest();}},_onNotifications:function(b,a){Quickling._cache=new PageCache();Quickling._invalidate_msgs=[];},_onCacheInvalidates:function(c,b){if(Quickling.isFeatureEnabled('page_cache')&&b&&b.length){for(var a=0;a<b.length;a++)if(parseInt(b[a])===0){if(Quickling._is_in_transition&&!Quickling.isFeatureEnabled('flush_cache_in_transition'))break;if(Quickling._cache.isPageInCache(PageTransitions.getMostRecentURI())&&!Quickling.isFeatureEnabled('flush_cache_in_page_write'))break;Quickling._cache=new PageCache();Quickling._invalidate_msgs=[];return;}Quickling._invalidate_msgs=Quickling._invalidate_msgs.concat(b);}},_refresh_pagelets:function(){if(is_empty(window.__listeners))return;for(var a=0;a<Quickling._invalidate_msgs.length;a++){var b=Quickling._invalidate_msgs[a];if(b in window.__listeners)window.__listeners[b].forEach(function(c){c.refresh();});}},registerPageCacheHook:function(a,c){if(!Quickling._is_initialized||!Quickling._is_active||Quickling._is_in_transition||!Quickling.isFeatureEnabled('page_cache'))return;var b=PageTransitions.getMostRecentURI();var e=Quickling._cache.getPage(b);if(e){if(c)for(var d=0;d<e.replays.length;d++)if(e.replays[d][0]==c){e.replays.splice(d,1);d--;}e.replays.push([c,a]);}},_onReplayableAjax:function(c,b){if((PageTransitions.getNextURI().toString()!=PageTransitions.getMostRecentURI().toString()))return;if(Quickling._is_in_transition)return;var a=Quickling._whitelist_regex;if(!a)a=Quickling._whitelist_regex=new RegExp(env_get('pagecache_whitelist_regex'));if(a.test(URI(b.getURI()).getPath()))return;Quickling.registerPageCacheHook(bind(b,b.replayResponses),b._replayKey);},_startQuicklingTransition:function(){Quickling._is_in_transition=true;window.channelManager&&window.channelManager.setActionRequest(true);},_stopQuicklingTransition:function(){(function(){Quickling._is_in_transition=false;}).defer();},isCacheHit:function(){return Quickling._cache_hit;},goHashOrGoHere:function(d){var c=URI.getRequestURI();var b=c.getFragment();if(b.startsWith('\/')){var a=b;}else var a=d;setTimeout(function(){PageTransitions.go(a,true);},0);},isPageActive:function(e){if(e=='#')return false;e=new URI(e);if(e.getDomain()&&e.getDomain()!=URI().getDomain())return false;var b=Quickling.isPageActive.regex;if(!b)b=Quickling.isPageActive.regex=new RegExp(env_get('quickling_inactive_page_regex'));if(e.getPath()=='\/l.php'){var c=e.getQueryData().u;if(c){c=URI(unescape(c)).getDomain();if(c&&c!=URI().getDomain())return false;}}var d=e.getPath();var a=e.getQueryData();if(a)d+='?'+URI.implodeQuery(a);if(b.test(d))return false;return true;},_getPageletById:function(a){return window.__UIControllerRegistry&&window.__UIControllerRegistry[a];},_setHTML:function(a,b){if(ua.ie()<=6){a.innerHTML=b;}else DOM.setContent(a,HTML(b).setDeferred(true));},_transitionHandler:function(h){AjaxPipeRequest.setCurrentRequest(null);if(Quickling._isTimeToRefresh())return false;if(!Quickling.isPageActive(h))return false;window.ExitTime=(new Date()).getTime();removeHook('onafterloadhooks');removeHook('onloadhooks');_runHooks('onleavehooks');Arbiter.inform('onload\/exit',true);Quickling._startQuicklingTransition();$('content').style.visibility=\"visible\";var e;if(Quickling.isFeatureEnabled('page_cache')&&(e=Quickling._cache.getPage(h))){var d=null;var f=window.ExitTime;var g=null;var a=new Arbiter();a.registerCallback(function(){if(AjaxPipeRequest.getCurrentRequest()!==d)return;if(d)if(d.cavalry){var i=null;if(g)i=g-f;d.cavalry.setTimeStamp('t_domcontent',null,null,i);d.cavalry.setTimeStamp('t_hooks',null,null,i);d.cavalry.setTimeStamp('t_layout',null,null,i);d.cavalry.setTimeStamp('t_onload',null,null,i);}Quickling._cache_hit=true;invoke_callbacks(e.onafterload);invoke_callbacks(e.onafterpagecache);Quickling._cache_hit=false;Quickling._stopQuicklingTransition();},['pagecache_update','tti_pagecache']);d=AsyncRequest.setBundledRequestProperties({stashedRequests:e.incremental_updates,callback:function(){if(d&&d.cavalry)d.cavalry&&d.cavalry.setTimeStamp('t_html');a.inform('pagecache_update',true,Arbiter.BEHAVIOR_EVENT);},onInitialResponse:function(j){var i=j.getPayload();if(i.redirect&&i.force){return false;}else return true;},extra_data:{uri:e.normalized_uri.getQualifiedURI().toString(),version:Quickling._version},start_immediately:true});var c=$('content');c.style.visibility=\"hidden\";AjaxPipeRequest.setCurrentRequest(d);AjaxPipeRequest.clearCanvas('content');Bootloader.loadResources(e.css.concat(e.js),null,true);Quickling._changePageTitle(e.title);Quickling._replaceSyndicationLinks(e.syndication_links||[]);var b=e.body_class||'';CSS.setClass(document.body,b);e.html=e.html.replace(\/<span class=[\"']?muffin_tracking_pixel_start['\"]?><\\\/span>.*?<span class=[\"']?muffin_tracking_pixel_end['\"]?><\\\/span>\/ig,'');Quickling._setHTML(c,e.html);if(c&&c.style.height=='1234px')c.style.height='';PageTransitions.transitionComplete(true);Quickling._cache_hit=true;invoke_callbacks(e.onload);Quickling._cache_hit=false;Quickling._refresh_pagelets();e.replays.forEach(function(i){i[1]();});e.refresh_pagelets.forEach(function(i){var j=document.getElementById(i);if(j)j.innerHTML='';});setTimeout(function(){PageTransitions.restoreScrollPosition();$('content').style.visibility=\"visible\";g=(+new Date());a.inform('tti_pagecache',true,Arbiter.BEHAVIOR_EVENT);},20);}else new QuickPipeRequest(h).setCanvasId('content').send();return true;},_changePageTitle:function(a){a=a||'Facebook';DocumentTitle.set(a);if(ua.ie()){Quickling._ie_cache_title=a;if(!Quickling._title_interval)Quickling._title_interval=window.setInterval(function(){var b=Quickling._ie_cache_title;var c=DocumentTitle.get();if(b!=c)DocumentTitle.set(b);},5000,false);}},_replaceSyndicationLinks:function(d){var c=document.getElementsByTagName('link');for(var b=0;b<c.length;++b){if(c[b].rel!='alternate')continue;DOM.remove(c[b]);}if(d.length){var a=DOM.find(document,'head');a&&DOM.appendContent(a,HTML(d[0]));}},cacheResponse:function(c,a){var b=c.payload;Quickling._cache.addPage(PageTransitions.getNextURI(),{title:b.title,syndication:b.syndication||[],body_class:b.body_class,html:b.content.content,js:b.js||[],css:b.css||[],onload:b.onload||[],onafterload:b.onafterload||[],refresh_pagelets:b.refresh_pagelets||[],onpagecache:b.onpagecache||[],onafterpagecache:b.onafterpagecache||[],ttl:b.page_cache_ttl,replays:[]});if(a){invoke_callbacks(b.onload);onafterloadRegister(function(){invoke_callbacks(b.onafterload);});}},cacheAndExecResponse:function(c,d){var a=PageTransitions.getNextURI();var b=Quickling._cache.getPage(a);if(b){if(c.html)b.html=c.html;b.js=b.js.concat(c.js||[]);b.css=b.css.concat(c.css||[]);b.onload=b.onload.concat(c.onload||[]);b.onafterload=b.onafterload.concat(c.onafterload||[]);b.onpagecache=b.onpagecache.concat(c.onpagecache||[]);b.onafterpagecache=b.onafterpagecache.concat(c.onafterpagecache||[]);b.refresh_pagelets=b.refresh_pagelets.concat(c.refresh_pagelets||[]);}if(!d){invoke_callbacks(c.onload);onafterloadRegister(function(){invoke_callbacks(c.onafterload);});}},_isTimeToRefresh:function(){Quickling._load_count=(Quickling._load_count||0)+1;return Quickling._load_count>=Quickling._session_length;},_instrumentTimeoutFunc:function(a){window[a+'_native']=(function(c){var b=function b(e,d){return c(e,d);};return b;})(window[a]);window[a]=function _setTimeout(d,c,b){var e=window[a+'_native'](d,c);if(c>0)if(b!==false)onleaveRegister(function(){clearInterval(e);});return e;};}};function QuickPipeRequest(b){var a={version:Quickling._version};this.parent.construct(this,b,{quickling:a});}QuickPipeRequest.extend('AjaxPipeRequest');copy_properties(QuickPipeRequest.prototype,{_preBootloadFirstResponse:function(b){var a=b.getPayload();if(Quickling.isFeatureEnabled('page_cache')&&a.page_cache_ttl)Quickling.cacheResponse(b);DOMScroll.scrollTo(new Vector2(0,0,'document'),false);return true;},_fireDomContentCallback:function(){this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');Quickling._stopQuicklingTransition();PageTransitions.transitionComplete();this.parent._fireDomContentCallback();},_fireOnloadCallback:function(){if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}this.parent._fireOnloadCallback();},_redirect:function(a){if(a.redirect){if(a.force||!Quickling.isPageActive(a.redirect)){go_or_replace(window.location,URI(a.redirect).removeQueryData(['quickling','ajaxpipe']),true);}else PageTransitions.go(a.redirect,true);return true;}else return false;},_versionCheck:function(a){if(a.version!=Quickling._version){go_or_replace(window.location,URI(a.uri).removeQueryData(['quickling','ajaxpipe']),true);return false;}else return true;},_processFirstPayload:function(b){Quickling._changePageTitle(b.title);Quickling._replaceSyndicationLinks(b.syndication||[]);var a=b.body_class||'';CSS.setClass(document.body,a);if(b.hasOnbeforeshow)$('content').style.visibility='hidden';}});function onpagecacheRegister(a,b){b=(b===undefined?'':String(b));Quickling.registerPageCacheHook(a,b);}\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/ecw5gb3xcw84owks.pkg.js\"]); }")