function paramsMap(e,t={}){let n={};for(let o in e){n[t.hasOwnProperty(o)?t[o]:o]=e[o]}return n}function emptyFn(){}function getInstance(){const e=my;e.has_ali_hook_flag=!0;const t={};["getStorageSync","setStorageSync","removeStorageSync"].forEach(n=>{t[n]=e[n],e[n]=((e,o)=>{let a={};"string"==typeof e?(a.key=e,o&&(a.data=o)):a=e;let s=t[n](a).data;return"getStorageSync"===n&&(s=s||""),s})});const n=e.getSystemInfo;e.getSystemInfo=function(e){let t=e.success||emptyFn;return e.success=function(e){e.system=e.platform+" "+e.system,e.windowHeight||(e.windowHeight=parseInt(e.screenHeight*e.windowWidth/e.screenWidth,10)-40),t(e)},n.call(this,e)};const o=e.getUpdateManager;e.getUpdateManager=function(){const e=o();return e.applyUpdate=e.applyUpdate||emptyFn,e.onCheckForUpdate=e.onCheckForUpdate||emptyFn,e.onUpdateFailed=e.onUpdateFailed||emptyFn,e.onUpdateReady=e.onUpdateReady||emptyFn,e},e.setEnableDebug=e.setEnableDebug||emptyFn,e.getLogManager=e.getLogManager||emptyFn,e.getLaunchOptionsSync=e.getLaunchOptionsSync||emptyFn,e.onPageNotFound=e.onPageNotFound||emptyFn,e.onError=e.onError||emptyFn,e.onAudioInterruptionBegin=e.onAudioInterruptionBegin||emptyFn,e.onAppShow=e.onAppShow||emptyFn,e.onAppHide=e.onAppHide||emptyFn,e.offPageNotFound=e.offPageNotFound||emptyFn,e.offError=e.offError||emptyFn,e.offAudioInterruptionBegin=e.offAudioInterruptionBegin||emptyFn,e.offAppShow=e.offAppShow||emptyFn,e.offAppHide=e.offAppHide||emptyFn;const a=e.showToast;e.showToast=function(e){return void 0===e.icon&&(e.icon="success"),a.call(this,paramsMap(e,{title:"content",icon:"type"}))},e.showModal=e.showModal||function(t){let n=paramsMap(t),o=n.showCancel;void 0===o&&(o=!0),o?(n.confirmButtonText=n.confirmText,n.cancelButtonText=n.cancelText):n.buttonText=n.confirmText,e[o?"confirm":"alert"](n)};const s=e.showLoading;e.showLoading=function(e){return s.call(this,paramsMap(e,{title:"content"}))};const c=e.showActionSheet;e.showActionSheet=function(e){let t=paramsMap(e,{itemList:"items"}),n=t.success||emptyFn,o=t.fail||emptyFn;return t.success=function({index:e}){-1===e?o({errMsg:"showActionSheet:fail cancel"}):n({tapIndex:e})},c.call(this,t)},e.setNavigationBarTitle=e.setNavigationBar,e.setNavigationBarColor=e.setNavigationBar,e.showTabBarRedDot=e.showTabBarRedDot||emptyFn,e.setTabBarStyle=e.setTabBarStyle||emptyFn,e.setTabBarItem=e.setTabBarItem||emptyFn,e.setTabBarBadge=e.setTabBarBadge||emptyFn,e.removeTabBarBadge=e.removeTabBarBadge||emptyFn,e.hideTabBarRedDot=e.hideTabBarRedDot||emptyFn,e.loadFontFace=e.loadFontFace||emptyFn,e.startPullDownRefresh=e.startPullDownRefresh||emptyFn;const i=e.pageScrollTo;e.pageScrollTo=function(e){e.success=e.success||emptyFn,e.fail=e.fail||emptyFn;try{i(e),e.success({errMsg:"pageScrollTo:ok"})}catch(t){e.fail(t)}},e.setTopBarText=e.setTopBarText||emptyFn,e.nextTick=e.nextTick||emptyFn,e.getMenuButtonBoundingClientRect=e.getMenuButtonBoundingClientRect||emptyFn,e.onWindowResize=e.onWindowResize||emptyFn,e.offWindowResize=e.offWindowResize||emptyFn,e.request=function(t){t.headers=t.header||t.headers||{},t.headers.referer="",t.headers["content-type"]=t.headers["content-type"]||"application/json";let n=t.success||emptyFn;return t.success=function(e){n.call(this,paramsMap(e,{headers:"header",status:"statusCode"}))},e.canIUse("request")?e.request(t):e.httpRequest(t)};const r=e.downloadFile;e.downloadFile=function(e){let t=e.success||emptyFn,n=r(Object.assign({},e,{success(e){e.tempFilePath=e.apFilePath,e.statusCode=200,t(e)}}));return n.abort=n.abort||emptyFn,n.offHeadersReceived=n.offHeadersReceived||emptyFn,n.offProgressUpdate=n.offProgressUpdate||emptyFn,n.onHeadersReceived=n.onHeadersReceived||emptyFn,n.onProgressUpdate=n.onProgressUpdate||emptyFn,n};const p=e.uploadFile;e.uploadFile=function(e){const t=e.filePath.split(/\\|\//),n=t[t.length-1],o=/\.(png|jpg|jpeg|gif|webp)/i.test(n),a=/\.(mp4|mov|WMV|3GP|FLV|RMVB|WebM|AVI|ASF|MPEG|MPG|DAT|MKV)/i.test(n),s=o?"image":a?"video":"audio";e=Object.assign({},e,{fileName:n,fileType:s});let c=p(e);return c.abort=c.abort||emptyFn,c.offHeadersReceived=c.offHeadersReceived||emptyFn,c.offProgressUpdate=c.offProgressUpdate||emptyFn,c.onHeadersReceived=c.onHeadersReceived||emptyFn,c.onProgressUpdate=c.onProgressUpdate||emptyFn,c};const u=e.connectSocket;e.connectSocket=function(){return setTimeout(()=>{u.apply(this,arguments)},100),{send:function(){e.sendSocketMessage.apply(this,arguments)},close:function(){e.closeSocket.apply(this,arguments)},onOpen:function(t){e.onSocketOpen(t)},onClose:function(t){e.onSocketClose(t)},onError:function(t){e.onSocketError(t)},onMessage:function(t){e.onSocketMessage(t)}}},e.stopLocalServiceDiscovery=e.stopLocalServiceDiscovery||emptyFn,e.startLocalServiceDiscovery=e.startLocalServiceDiscovery||emptyFn,e.onLocalServiceResolveFail=e.onLocalServiceResolveFail||emptyFn,e.onLocalServiceLost=e.onLocalServiceLost||emptyFn,e.onLocalServiceFound=e.onLocalServiceFound||emptyFn,e.onLocalServiceDiscoveryStop=e.onLocalServiceDiscoveryStop||emptyFn,e.offLocalServiceResolveFail=e.offLocalServiceResolveFail||emptyFn,e.offLocalServiceLost=e.offLocalServiceLost||emptyFn,e.offLocalServiceFound=e.offLocalServiceFound||emptyFn,e.offLocalServiceDiscoveryStop=e.offLocalServiceDiscoveryStop||emptyFn;const l=e.getStorage;e.getStorage=function(e){let t=e.success;return e.success=function(n){n.data?t(n):e.fail({errMsg:"getStorage:fail data not found"})},l.call(this,e)};const d=e.createMapContext;e.createMapContext=function(e){let t=d(e);return t.getRegion=t.getRegion||emptyFn,t.getScale=t.getScale||emptyFn,t.includePoints=t.includePoints||emptyFn,t};const m=e.getImageInfo;e.getImageInfo=function(e){let t=e.success;return m.call(this,Object.assign({},e,{success(e){e.type=e.type.substring(0,e.type.indexOf("?")),t(e)}}))},e.saveImageToPhotosAlbum=function(t){return e.saveImage(Object.assign({},t,{url:t.filePath,success(e){e.errMsg="saveImageToPhotosAlbum:ok",t.success&&t.success(e)}}))};const g=e.previewImage;e.previewImage=function(e){let t=paramsMap(e),n=t.current;return n&&(n=e.urls.indexOf(n)),-1!==n&&n||(n=0),t.current=n,g.call(this,t)};const y=e.compressImage;e.compressImage=function(e){let t=e.src,n=e.success||emptyFn;return y.call(this,Object.assign({},e,{compressLevel:4,apFilePaths:[t],success(e){e.tempFilePath=e.apFilePaths[0]||"",n(e)}}))},e.chooseMessageFile=e.chooseMessageFile||emptyFn;const f=e.chooseImage;e.chooseImage=function(e){let t=e.success||emptyFn;return e.count=e.count||9,f.call(this,Object.assign({},e,{success(e){let n=[].concat(e.apFilePaths),o=[];e.apFilePaths.map(function(e){o.push({path:e,size:null})});let a=[].concat(o);t({tempFilePaths:n,tempFiles:a})}}))},e.saveVideoToPhotosAlbum=e.saveVideoToPhotosAlbum||emptyFn,e.createVideoContext=e.createVideoContext||fn(),e.chooseVideo=e.chooseVideo||emptyFn,e.stopVoice=e.stopVoice||emptyFn,e.setInnerAudioOption=e.setInnerAudioOption||emptyFn,e.playVoice=e.playVoice||emptyFn,e.pauseVoice=e.pauseVoice||emptyFn,e.getAvailableAudioSources=e.getAvailableAudioSources||emptyFn,e.createInnerAudioContext=e.createInnerAudioContext||emptyFn,e.createAudioContext=e.createAudioContext||fn(),e.stopBackgroundAudio=e.stopBackgroundAudio||emptyFn,e.seekBackgroundAudio=e.seekBackgroundAudio||emptyFn,e.playBackgroundAudio=e.playBackgroundAudio||emptyFn,e.pauseBackgroundAudio=e.pauseBackgroundAudio||emptyFn,e.onBackgroundAudioStop=e.onBackgroundAudioStop||emptyFn,e.onBackgroundAudioPlay=e.onBackgroundAudioPlay||emptyFn,e.onBackgroundAudioPause=e.onBackgroundAudioPause||emptyFn,e.getBackgroundAudioPlayerState=e.getBackgroundAudioPlayerState||emptyFn,e.getBackgroundAudioManager=e.getBackgroundAudioManager||fn(),e.createLivePusherContext=e.createLivePusherContext||emptyFn,e.createLivePlayerContext=e.createLivePlayerContext||fn(),e.stopRecord=e.stopRecord||emptyFn,e.startRecord=e.startRecord||emptyFn,e.getRecorderManager=e.getRecorderManager||emptyFn,e.createCameraContext=e.createCameraContext||fn();const F=e.openLocation;e.openLocation=function(e){return void 0===e.name&&(e.name="位置"),void 0===e.address&&(e.address="-"),F.call(this,e)};const h=e.getLocation;e.getLocation=function(e){e.success;return h(Object.assign({},e,{type:0}))},e.updateShareMenu=e.updateShareMenu||emptyFn,e.getShareInfo=e.getShareInfo||emptyFn,e.showShareMenu=e.showShareMenu||emptyFn;const S=e.createCanvasContext;e.createCanvasContext=function(e){let t=S.call(this,e);return t.arcTo=t.arcTo||(()=>t),t.createPattern=t.createPattern||(()=>t),t.strokeText=t.strokeText||(()=>t),t.miterLimit=t.setMiterLimit,t.lineCap=t.setLineCap,t.lineDashOffset=t.setLineDash,t.lineJoin=t.setLineJoin,t};e.canvasToTempFilePath;e.canvasToTempFilePath=function(t){let n=e.createCanvasContext(t.canvasId),o=t.success||emptyFn;n.toTempFilePath(Object.assign({},t,{success(e){e.tempFilePath=e.apFilePath,o(e)}}))};e.canvasPutImageData;e.canvasPutImageData=function(t){let n=e.createCanvasContext(t.canvasId);t.success;n.putImageData(t)};e.canvasGetImageData;e.canvasGetImageData=function(t){let n=e.createCanvasContext(t.canvasId);t.success;n.getImageData(t)};const v=e.saveFile;e.saveFile=function(e){let t=e.success||emptyFn,n=e.tempFilePath;return v.call(this,Object.assign({},e,{apFilePath:n,success(e){e.savedFilePath=e.apFilePath,t(e)}}))};const C=e.removeSavedFile;e.removeSavedFile=function(e){return C.call(this,paramsMap(e,{filePath:apFilePath}))};const L=e.getSavedFileList;e.getSavedFileList=function(e){let t=e.success||emptyFn;return L.call(this,Object.assign({},e,{success(e){e.fileList.map(e=>{e.filePath=e.apFilePath}),t(e)}}))};const P=e.getSavedFileInfo;e.getSavedFileInfo=function(e){return P.call(this,paramsMap(e,{filePath:"apFilePath"}))};const A=e.getFileInfo;e.getFileInfo=function(e){return A.call(this,paramsMap(e,{filePath:"apFilePath"}))},e.getFileSystemManager=e.getFileSystemManager||fn(),e.stopWifi=e.stopWifi||emptyFn,e.startWifi=e.startWifi||emptyFn,e.setWifiList=e.setWifiList||emptyFn,e.onWifiConnected=e.onWifiConnected||emptyFn,e.onGetWifiList=e.onGetWifiList||emptyFn,e.getWifiList=e.getWifiList||emptyFn,e.getConnectedWifi=e.getConnectedWifi||emptyFn,e.connectWifi=e.connectWifi||emptyFn,e.onBLEConnectionStateChange=e.onBLEConnectionStateChanged,e.createBLEConnection=e.connectBLEDevice,e.closeBLEConnection=e.disconnectBLEDevice,e.getBatteryInfoSync=e.getBatteryInfoSync||function(){return{}},e.getBatteryInfo=e.getBatteryInfo||function(){return{}},e.setClipboardData=function(t){return e.setClipboard(paramsMap(t,{data:"text"}))},e.getClipboardData=function(t){let n=t.success;return e.getClipboard(Object.assign({},t,{success(e){e.data=e.text,n(e)}}))},e.stopHCE=e.stopHCE||emptyFn,e.startHCE=e.startHCE||emptyFn,e.sendHCEMessage=e.sendHCEMessage||emptyFn,e.onHCEMessage=e.onHCEMessage||emptyFn,e.getHCEState=e.getHCEState||emptyFn;const I=e.getNetworkType;e.getNetworkType=function(e){let t=e.success||emptyFn;return I(Object.assign({},e,{success(e){e.networkType=e.networkType.toLocaleLowerCase(),t(e)}}))};let M=e.onNetworkStatusChange;e.onNetworkStatusChange=function(e){return M(function(t){t.networkType=t.networkType.toLocaleLowerCase(),e(t)})};const b=e.makePhoneCall;e.makePhoneCall=function(e){return b.call(this,paramsMap(e,{phoneNumber:"number"}))},e.startAccelerometer=e.startAccelerometer||emptyFn,e.stopAccelerometer=e.offAccelerometerChange,e.stopCompass=e.offCompassChange,e.startCompass=e.startCompass||emptyFn,e.stopDeviceMotionListening=e.stopDeviceMotionListening||emptyFn,e.startDeviceMotionListening=e.startDeviceMotionListening||emptyFn,e.onDeviceMotionChange=e.onDeviceMotionChange||emptyFn,e.stopGyroscope=e.offGyroscopeChange,e.startGyroscope=e.startGyroscope||emptyFn,e.onMemoryWarning=e.onMemoryWarning||emptyFn,e.scanCode=function(t){let n=t.success||emptyFn;return e.scan(Object.assign({},t,{hideAlbum:void 0===t.onlyFromCamera||t.onlyFromCamera,type:void 0===t.scanType?"qr":{qrCode:"qr",barCode:"bar"}[t.scanType[0]],success(e){let t="";e.qrCode?t="QR_CODE":e.barCode&&(t="BAR_CODE"),n({result:e.code,scanType:t,errMsg:"scanCode:ok"})}}))},e.createWorker=e.createWorker||emptyFn,e.getExtConfigSync=e.getExtConfigSync||emptyFn,e.getExtConfig=e.getExtConfig||emptyFn;const B=e.createSelectorQuery;e.createSelectorQuery=function(){let e=B.apply(this,arguments);return e.in=e.in||function(){return e},e},e.createIntersectionObserver=e.createIntersectionObserver||fn(),e.login=(t=>{let n={success:t.success,fail:t.fail,complete:t.complete};return t.success=function(e){e.code=e.authCode,delete e.authCode,n.success&&n.success(e)},e.getAuthCode(t)}),e.checkSession=e.checkSession||emptyFn;const k=e.getAuthUserInfo;e.getUserInfo=(e=>{let t={success:e.success,fail:e.fail,complete:e.complete};return e.success=function(e){let n={};for(let t in e)n["avatar"===t?"avatarUrl":t]=e[t];t.success&&t.success({userInfo:n})},k(e)});const T=e.tradePay;e.requestPayment=function(e){let t=paramsMap(e,{alipay_trade_body:"orderStr"}),n=t.success||emptyFn,o=t.fail||emptyFn;return t.success=function(e){9e3===e.resultCode?n():o()},T.call(this,t)},e.getAccountInfoSync=e.getAccountInfoSync||emptyFn,e.reportMonitor=e.reportMonitor||emptyFn,e.reportAnalytics=e.reportAnalytics||emptyFn,e.getWeRunData=e.getWeRunData||emptyFn,e.authorize=e.authorize||emptyFn,e.startSoterAuthentication=e.startSoterAuthentication||emptyFn,e.checkIsSupportSoterAuthentication=e.checkIsSupportSoterAuthentication||emptyFn,e.checkIsSoterEnrolledInDevice=e.checkIsSoterEnrolledInDevice||emptyFn,e.chooseInvoiceTitle=e.chooseInvoiceTitle||emptyFn,e.chooseInvoice=e.chooseInvoice||emptyFn,e.addCard=e.addCard||emptyFn,e.openCard=e.openCard||emptyFn,e.chooseAddress=e.chooseAddress||emptyFn;const w=e.getSetting;e.getSetting=function(e){let t=e.success||emptyFn;return w(Object.assign({},e,{success(e){e.authSetting["scope.userLocation"]=e.authSetting["scope.location"],e.authSetting["scope.writePhotosAlbum"]=e.authSetting["scope.album"],e.authSetting["scope.record"]=e.authSetting["scope.audioRecord"],t(e)}}))};const x=e.openSetting;return e.openSetting=function(e){let t=e.success||emptyFn;return x(Object.assign({},e,{success(e){e.authSetting["scope.userLocation"]=e.authSetting["scope.location"],e.authSetting["scope.writePhotosAlbum"]=e.authSetting["scope.album"],e.authSetting["scope.record"]=e.authSetting["scope.audioRecord"],t(e)}}))},e}export default getInstance();