function FlashDetectBase(options){
	var self = this;
	var _release = "1.0";
	var options = options || {};
	self.installed = false;
	self.major = -1;
	self.minor = -1;
	self.revision = -1;
	self.revisionStr = "";
	self.activeXVersion = "";
	var activeXDetectRules = options.activeXDetectRules || [
		{
			"name":"ShockwaveFlash.ShockwaveFlash.7",
			"version":function(obj){return getActiveXVersion(obj);}
		},
		{
			"name":"ShockwaveFlash.ShockwaveFlash.6",
			"version":function(obj){
				var version = "6,0,21";
				try{
					obj.AllowScriptAccess = "always";
					version = getActiveXVersion(obj);
				}catch(err){}
				return version;
			}
		},
		{
			"name":"ShockwaveFlash.ShockwaveFlash",
			"version":function(obj){return getActiveXVersion(obj);}
		}
	];
	var getActiveXVersion = function(activeXObj){
		var version = -1;
		try{
			version = activeXObj.GetVariable("$version");
		}catch(err){}
		return version;
	}
	var getActiveXObject = function(name){
		var obj = -1;
		try{
			obj = new ActiveXObject(name);
		}catch(err){}
		return obj;
	}
	var parseActiveXVersion = function(str){
		var versionArray = str.split(",");
		return {
			"major":parseInt(versionArray[0].split(" ")[1]),
			"minor":parseInt(versionArray[1]),
			"revision":parseInt(versionArray[2]),
			"revisionStr":versionArray[2]
		};
	}
	var parseRevisionStrToInt = function(str){
		return parseInt(str.replace(/[a-zA-Z]/g,"")) || self.revision;
	}
	self.majorAtLeast = function(version){
		return self.major >= version;
	}
	self.DetectBase = function(){
		if(navigator.plugins && navigator.plugins.length>0){
			var type = 'application/x-shockwave-flash';
			var mimeTypes = navigator.mimeTypes;
			if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description){
				var desc = mimeTypes[type].enabledPlugin.description;
				var descParts = desc.split(' ');
				var majorMinor = descParts[2].split('.');
				self.major = parseInt(majorMinor[0]);
				self.minor = parseInt(majorMinor[1]); 
				self.revisionStr = descParts[3];
				self.revision = parseRevisionStrToInt(self.revisionStr);
				self.installed = true;
			}
		}else if(navigator.appVersion.indexOf("Mac")==-1 && window.execScript){
			var version = -1;
			for(var i=0; i<activeXDetectRules.length && version==-1; i++){
				var obj = getActiveXObject(activeXDetectRules[i].name);
				if(typeof obj == "object"){
					self.installed = true;
					version = activeXDetectRules[i].version(obj);
					if(version!=-1){
						var obj = parseActiveXVersion(version);
						self.major = obj.major;
						self.minor = obj.minor; 
						self.revision = obj.revision;
						self.revisionStr = obj.revisionStr;
						self.activeXVersion = version;
					}
				}
			}
		}
	}();
}
var FlashDetect = new FlashDetectBase();