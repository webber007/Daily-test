function myVue(options){
	this._init(options);
}

myVue.prototype._init  = function (options){
	this.$options = options;
	this.$el = document.querySelector(options.el);
	this.$data = options.data;
	this.methods = options.methods;
}

myVue.prototype._obverse = function (obj){
	var value;
	for(key in obj){
		if(!obj.hasOwnProperty(key)) continue;

		value = obj[key];
		if(typeOf  value === "object"){
			this._obverse(value);
		}

		// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty 待研究

		 
	}
}