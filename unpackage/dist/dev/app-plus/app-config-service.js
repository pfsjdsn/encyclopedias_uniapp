
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/home/home","pages/news/news","pages/paper/paper","pages/search/search","pages/publish/publish","pages/topic_classification/topic_classification","pages/topic_detail/topic_detail","pages/user_list/user_list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"canoe_百科","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"tabBar":{"color":"#ADADAD","selectedColor":"#fee42a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"/static/tabbar/index.png","selectedIconPath":"/static/tabbar/index_o.png","text":"糗事"},{"pagePath":"pages/news/news","iconPath":"/static/tabbar/news.png","selectedIconPath":"/static/tabbar/news_o.png","text":"动态"},{"pagePath":"pages/paper/paper","iconPath":"/static/tabbar/paper.png","selectedIconPath":"/static/tabbar/paper_o.png","text":"小纸条"},{"pagePath":"pages/home/home","iconPath":"/static/tabbar/home.png","selectedIconPath":"/static/tabbar/home_o.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-百科","compilerVersion":"3.0.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":true},"buttons":[{"color":"#ff9619","colorPressed":"#bbb","float":"left","fontSize":"25px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小纸条","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#000","colorPressed":"#bbb","float":"left","fontSize":"25px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"25px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/search/search","meta":{},"window":{"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":false},"buttons":[{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/publish/publish","meta":{},"window":{"animationType":"slide-in-bottom","animationDuration":200,"titleNView":false}},{"path":"/pages/topic_classification/topic_classification","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"none"}},{"path":"/pages/topic_detail/topic_detail","meta":{},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user_list/user_list","meta":{},"window":{"animationType":"slide-in-left","titleNView":{"buttons":[{"color":"#000","colorPressed":"#bbb","float":"left","fontSize":"25px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"25px","fontSrc":"/static/font/icon.ttf","text":""}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
