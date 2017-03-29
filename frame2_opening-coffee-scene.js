(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.NewPatternSwatch1 = function() {
	this.initialize(img.NewPatternSwatch1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,53);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7C7C").s().p("AxwXQQgKgLALgJIKHoLQFskmCBheQEgjQD9hvQEBhxE6gfQBrgLA1gMQBZgUA7gpQBHgvAghJQAhhJgWhDQhmBDh3AhQh/AjiEgJQgLgBgEgKQhmkqB4k2QB0ktEGiXQhGg4hrAVQhcAShjBDQiYBpgNAHQhiA5hZAFQgJABgEgLQgFgKAIgGIHAlpQimAbiQBhQilBvhcCtQgFAKgMgDQgLgEAAgKQgBhfAkhWQAlhYBFg/QAOgNAagSIAogeQAggaAMgVQAPgcgWgSQgSgQgfgBQhbgFhlAnQklBzjCG3QgzB1hgDwQhcDNhoB+QhrCCjBCDQhuBMjhCPQlmD1kzE+QgKAKgLgLQgKgKAKgLQFelqG1kaIC6h4QBphGBKg9QCoiNBpjFQAvhXB5kpQBijyBdiDQBviaCIhbQCmhvCjAUQAhAEAWARQAYAUgDAgQgCAdgbAeQgRATghAYQinB7gXCsQBbiQCShhQCshzDLgTQAKgBAEAKQAEALgHAFIm/FoQBPgTBbg+IBjhGQA7gpAtgVQBagqBRAAQBhAAA/A+QAFAFgBAHQgBAIgGADQkMCTh0EsQhyEnBfEbQB7AHB1ggQB7giBqhJQAEgEAHACQAHACACAFQAaA9gMBCQgMA+grA4QhTBrizAiQg2ALhuALQhuALg2ALQiYAdieA+QkIBqk6DgQh6BYidB9QhcBJi2CUIpZHlQgFAEgFAAQgGAAgGgFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4aNPQFMlYGMkFQDNiBBjhGQCqh3Bih3QBviHBnjwQBqkQBAiCQBrjaCdiGQC3idDKAFQAxABASAWQAaAfgfAqQgYAggwAgQhYA6gyBhQgyBiAEBpQBbiwCrhzQCrhyDFgRInoGJQBYgDBng/QB0hRA6gmQBihBBkgLQB0gOBCBFQiFBIhmB4QhjB0g4CSQg4CSgGCZQgFCeAzCOQCAAKB/gjQB/gjBphKQAoBUgyBiQgvBbhdAtQhJAkhxARIjDAWQlhAtl/DlQjxCRmYFKIrzJig");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-149.3,315.4,298.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7C7C").s().p("AxwXQQgKgLALgJIKHoLQFskmCBheQEgjQD9hvQEBhxE6gfQBrgLA1gMQBZgUA7gpQBHgvAghJQAhhJgWhDQhmBDh3AhQh/AjiEgJQgLgBgEgKQhmkqB4k2QB0ktEGiXQhGg4hrAVQhcAShjBDQiYBpgNAHQhiA5hZAFQgJABgEgLQgFgKAIgGIHAlpQimAbiQBhQilBvhcCtQgFAKgMgDQgLgEAAgKQgBhfAkhWQAlhYBFg/QAOgNAagSIAogeQAggaAMgVQAPgcgWgSQgSgQgfgBQhbgFhlAnQklBzjCG3QgzB1hgDwQhcDNhoB+QhrCCjBCDQhuBMjhCPQlmD1kzE+QgKAKgLgLQgKgKAKgLQFelqG1kaIC6h4QBphGBKg9QCoiNBpjFQAvhXB5kpQBijyBdiDQBviaCIhbQCmhvCjAUQAhAEAWARQAYAUgDAgQgCAdgbAeQgRATghAYQinB7gXCsQBbiQCShhQCshzDLgTQAKgBAEAKQAEALgHAFIm/FoQBPgTBbg+IBjhGQA7gpAtgVQBagqBRAAQBhAAA/A+QAFAFgBAHQgBAIgGADQkMCTh0EsQhyEnBfEbQB7AHB1ggQB7giBqhJQAEgEAHACQAHACACAFQAaA9gMBCQgMA+grA4QhTBrizAiQg2ALhuALQhuALg2ALQiYAdieA+QkIBqk6DgQh6BYidB9QhcBJi2CUIpZHlQgFAEgFAAQgGAAgGgFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4aNPQFMlYGMkFQDNiBBjhGQCqh3Bih3QBviHBnjwQBqkQBAiCQBrjaCdiGQC3idDKAFQAxABASAWQAaAfgfAqQgYAggwAgQhYA6gyBhQgyBiAEBpQBbiwCrhzQCrhyDFgRInoGJQBYgDBng/QB0hRA6gmQBihBBkgLQB0gOBCBFQiFBIhmB4QhjB0g4CSQg4CSgGCZQgFCeAzCOQCAAKB/gjQB/gjBphKQAoBUgyBiQgvBbhdAtQhJAkhxARIjDAWQlhAtl/DlQjxCRmYFKIrzJig");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-149.3,315.4,298.7);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7C7C").s().p("AANDRQhQgeg5hDQg5hDgQhUQgRhbAihYQAFgOAPAEQAOAEgFAOQgfBQAPBSQAOBNAyA+QAzA+BJAcQBOAdBVgQQAPgDAEAOQAEAPgPADQghAGggAAQg6AAg4gUg");
	this.shape.setTransform(16.8,-65.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C7C7C").s().p("ABTEHQiJhHgniiQgoihBah+QAJgLANAHQANAIgJALQhTB1AkCUQAkCUB+BCQANAHgIAMQgFAJgHAAQgEAAgEgCg");
	this.shape_1.setTransform(-18.2,-67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C7C7C").s().p("AiCCOQhIgPghg8QgcgyANgzQAOg3A2gVQAmgPBoAIQBbAIAsgiQALgJAIANQAIAOgMAIQghAagyAEQgaAChAgFQhKgFgrAUQg7AbASBFQASBJBMASQBAAPBIgbQBCgZA5gxQA2gtAog/QAIgNANAIQANAHgIANQgtBGg/A0QhCA3hMAYQgqAOgpAAQgZAAgYgGg");
	this.shape_2.setTransform(52.6,-66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C7C7C").s().p("AhkHZQj1gtkDh3QiGg+huhCQg1gfgfgcQgrglgTgrQgrhgBEhpQA1hSBmhAQDbiIEOgqQEHgpEBA4QAKADABAIQBDgGBEABQCjADCVAuQB6AlBWBBQBmBOAhBqQAiBogmByQgjBrhUBQQicCXkjA0QhzAUh5AAQiNAAiVgcgAlhm/QiIAZh1AtQiFA0hiBIQh1BWgWBhQgPA+AkA5QAdAuA9AoQCtByD9BgQDtBbDfAZQD7AdDdg2QEKhCB+iUQBOhcAPhzQAPh5hDhgQhmiSkBg5QkGg6kOBBQgOAEgEgPQgEgOAOgEQA4gNA3gIQh6gXh5AAQh8AAh8AYg");
	this.shape_3.setTransform(2.2,-70.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiPHBQlOhHlfjKQg9gjgggdQgvgpgRgvQgghYBChgQA4hQBmg8QDciBECgoQECgoD4A4IiMAkQCEgfCIABQCUAACNAlQCFAiBfBCQBvBOAjBtQAcBYgZBiQgZBehABMQhvCCjVBDQi1A5jHAAQiiAAitgmg");
	this.shape_4.setTransform(2.2,-70.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C7C7C").s().p("Ai/HOQk9gokSiSQhDgkhCgsIgXgOQgPgJgGgJQgHgMgEgbIgFgqIhQmSQgDgOAOgEQAPgEADAOIBQGSQAIAuACAFQAIAZAWAPQAmAaAiAUQBCAoBHAhQEOCAEwAaQEvAZEghRQCogvBwg6QCYhPBLhtQBWh9g+ifQgmhWgQgrQgdhMAAg8QgBgPAPAAQAPAAABAPQAABFAwBtQA1B4AHA2QAKBHgaBFQgYA/g0A5QhbBliaBIQh5A5ilApQiYAmieAKQgyADgzAAQhpAAhqgNg");
	this.shape_5.setTransform(0,-36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ah5HGQnQgmlpkEIhfnfIeziIQgCBFA2B4QA5B/ADA/QAGB0hhBqQhOBXiFBCQlOCll8AAQhIAAhLgGg");
	this.shape_6.setTransform(0.1,-36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C7C7C").s().p("AiqJ2QhFgig7gxIgcgcQgRgSgLgIIgFgFIgHgEIgHgBIgGgBQgLgFgHgOIgKgZInGvoQgGgNANgIQANgHAGANIGlOfQAGAOAMAhQAMAeALAOQAEAGgDABQgCABAIAFQADACAJgBQASAGAaAcQAiAlAGAEQA8AxBFAfQCNBBCbgNQCagOCBhYQCAhXBIiZQA6h5Afi3QAZiMAfjQIA0leQACgOAPAEQAOAEgCAOIhEG9IgdDCQgSBvgUBRQgnCfhTB1QhaB/iIBFQiCBBiSAAIgCAAQiPAAiChAg");
	this.shape_7.setTransform(5.3,51.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.NewPatternSwatch1, null, new cjs.Matrix2D(1.971,0,0,1.971,42.4,2360.6)).s().p("Ah/J5QiHg4hchrIgYgDInWwNIahhtIhcJYQgZClgVBTQgkCIg9BeQhLB3h9BLQh+BLiNAKQgVACgVAAQh2AAhygvg");
	this.shape_8.setTransform(5.3,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-120.9,211.4,241.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AIiGoQiugKiVhQIiahfQhcg5hFgTQhsgeiYAaQiwAphXAQQkTA1kQg9QgsgKgcgMQgngPgZgXQgdgbgJgmQgKgoASgfQALgSAYgQQAPgKAdgOQCLg+CXgoQAjgIAKARIABACIgWAHQgEAMAQgFQANgGgDgIQA7gOA/AHQBKAKA+AmIhLAIIAnADQBLAIAigNQAUgIAWgRIAmgiQCpidDjhGQDjhHDkAhQA7AJAWAZQAPASgDAZQgDAZgUAHQC1g8C/gJQDBgJC5AqQBKARAwAmQA6AugKA6QgHAsg6AxQiKBvivAeQA4AFAbA7QAbA5gWA4QgjBZiIA2QiHA2iVAAIgwgCgAsghRIBGgHIgOAAQgjAAgVAHg");
	this.shape.setTransform(593.9,-64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("A4rJvQhMgcgugiQg9grgTg7QgLggAIgfQiTBLisAXQkHAkjrhfQCHinDEhkQDEhlDVgMIgBhuQDOAhDLguQBIgQAjgcQAXgTAUgjIAhg+QBMiRCQhtQCEhlCqg3QCWgwC3gQQCTgMDBAIQBSADA9AkQBIAqgPA/QF4iEGTgYQGSgYGGBVQBMARAyAoQA8AxgSA6QgGAVgTAUQgOAOgYARQh0BTiNAlQDRgTDSAfQDRAgDDBPQBSAhAzAlQBCAxAXA/QAcBKggBUQgfBPhEA2Qg6AuhWAeQg9AVhkAUQn0Bkp+ACQmEABr3gxQlEDPmLAqQhfAKhcAAQknAAkShmg");
	this.shape_1.setTransform(-29,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AVRNYQkXgBlmhvIkzhiQi3g6h+geQljhVkNAyQhJAOiVArQiQArhNANQh8AVhqgTQh7gWhPhIIiRAGQjLg6ixhvQg3gjgeggQgqgsgHgwQgOhhB4hqQCUiEC9hMQC8hLDHgGQBokLGgicQFyiLGLgVQBFgEArAJQA9ALAjAjQAoApgPA/QgJAngYAPQFFhUFTgLQFlgMFcBGQCHAbBYBCQBsBQgRBpQgNBMhQA4Qg4AnhnAkIv7FgQFwAEC5AOQEyAYDsBEQCBAlBSBRQBgBegmBkQgVA1hHA0QjoCtlgAAIgEAAg");
	this.shape_2.setTransform(-522.8,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728,-140.3,1456,280.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AhvDGQgJgCgCgIQgXh0gyhLQg+hghhgaQg4gOgyALQgPAEgWAMQgaAOgKADQgWAIgPgLQgQgMAGgXQAEgOAPAEQAOAEgEAOIAwgUQAOgGAVgGQAigHAiACQBNAEBCAuQByBPAsC6QCBiDCjhXQCwhgDDgkQAOgDAEAOQAEAPgOADQjBAkirBdQirBciGCNQgEAFgGAAIgEgBg");
	this.shape.setTransform(172.2,73.3,0.388,0.388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AiNCRQgIgCgDgIQgxiMhcg4Qg4gjhBADQhDADgvArQgLAKgKgLQgLgKALgKQAxgtBEgJQBCgHA/AdQBwA0A8CaQCoiHDJhCQB5goBkgIQBQgGAQA0QAEAOgPAEQgOAEgEgOQgKgihMAJQgNAChWATQhPAThPAeQioBCiOB3QgFAEgFAAIgEAAg");
	this.shape_1.setTransform(22.4,7.1,0.388,0.388);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0.8,1.5,194,79.5), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-14.3,281.4);

	this.instance_1 = new lib.Tween5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.7,149.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:157.7,y:149.3,loop:false},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,132.1,315.4,298.7);


(lib.coffeecup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer 1
	this.instance = new lib.Tween2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(373.7,-212.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:105.7,y:-68.1},16,cjs.Ease.get(0.79)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268,-333,211.4,241.9);


(lib.cloud_symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-954.9,140.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).to({x:1192.1,y:120.9},291).wait(1));

	// Layer 1 copy
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-954.9,140.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({x:1192.1,y:120.9},251).to({_off:true},1).wait(78));

	// Layer 1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1579.1,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1192.1,y:8.9},255).to({_off:true},1).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2307.1,-167.5,1455.9,280.6);


(lib.birds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-106.3,187.4,1,1,0,0,0,250,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:97.8,regY:41.2,scaleX:1,scaleY:0.99,x:-247.7,y:95.7,alpha:0.988},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-234.6,y:66,alpha:0.976},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-219.8,y:37.2,alpha:0.964},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-202.8,y:9.5,alpha:0.952},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-183.1,y:-16.4,alpha:0.941},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-160.3,y:-38.6,alpha:0.929},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-135.9,y:-61.3,alpha:0.917},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-111.5,y:-83.2,alpha:0.905},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-86.7,y:-104.8,alpha:0.893},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-61.5,y:-125.9,alpha:0.881},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-35.8,y:-146.3,alpha:0.869},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:-9.4,y:-166.1,alpha:0.857},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:13.6,y:-180.7,alpha:0.845},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:45.8,y:-199.3,alpha:0.833},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:75.4,y:-215.4,alpha:0.822},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:104.8,y:-230.7,alpha:0.81},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:134.6,y:-245,alpha:0.798},0).wait(1).to({scaleX:0.91,scaleY:0.9,x:164.9,y:-258.2,alpha:0.786},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:196.8,y:-269.3,alpha:0.774},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:224.1,y:-276.5,alpha:0.762},0).wait(1).to({scaleX:0.89,scaleY:0.88,x:258.8,y:-286.5,alpha:0.75},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:290.8,y:-296,alpha:0.738},0).wait(1).to({scaleX:0.88,scaleY:0.87,x:322.6,y:-305.7,alpha:0.726},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:354.3,y:-315.6,alpha:0.714},0).wait(1).to({scaleX:0.87,scaleY:0.86,x:385.7,y:-325.7,alpha:0.703},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:417.2,y:-336.1,alpha:0.691},0).wait(1).to({scaleX:0.86,scaleY:0.85,x:448.5,y:-346.9,alpha:0.679},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:476,y:-356.2,alpha:0.667},0).wait(1).to({scaleX:0.85,scaleY:0.84,x:510,y:-367.3,alpha:0.655},0).wait(1).to({scaleX:0.84,scaleY:0.83,x:541.8,y:-378,alpha:0.643},0).wait(1).to({scaleX:0.84,scaleY:0.83,x:573.1,y:-389,alpha:0.631},0).wait(1).to({scaleX:0.83,scaleY:0.82,x:604.3,y:-400.3,alpha:0.619},0).wait(1).to({scaleX:0.83,scaleY:0.82,x:635.3,y:-412,alpha:0.607},0).wait(1).to({scaleX:0.82,scaleY:0.81,x:666,y:-424.1,alpha:0.595},0).wait(1).to({scaleX:0.82,scaleY:0.81,x:696.6,y:-436.6,alpha:0.584},0).wait(1).to({scaleX:0.81,scaleY:0.8,x:727,y:-449.5,alpha:0.572},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:757.2,y:-462.8,alpha:0.56},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:787.2,y:-476.6,alpha:0.548},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:816.9,y:-490.7,alpha:0.536},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:846.1,y:-504.3,alpha:0.524},0).wait(1).to({scaleX:0.78,scaleY:0.77,x:876.7,y:-517.5,alpha:0.512},0).wait(1).to({scaleX:0.78,scaleY:0.77,x:907.2,y:-530.2,alpha:0.5},0).wait(1).to({scaleX:0.77,scaleY:0.76,x:937.9,y:-542.5,alpha:0.488},0).wait(1).to({scaleX:0.77,scaleY:0.76,x:968.8,y:-554.5,alpha:0.476},0).wait(1).to({scaleX:0.76,scaleY:0.75,x:999.7,y:-566.2,alpha:0.465},0).wait(1).to({scaleX:0.76,scaleY:0.75,x:1030.8,y:-577.4,alpha:0.453},0).wait(1).to({scaleX:0.75,scaleY:0.74,x:1062,y:-588.4,alpha:0.441},0).wait(1).to({scaleX:0.75,scaleY:0.73,x:1093.4,y:-598.8,alpha:0.429},0).wait(1).to({scaleX:0.74,scaleY:0.73,x:1125,y:-608.8,alpha:0.417},0).wait(1).to({scaleX:0.74,scaleY:0.72,x:1156.7,y:-618.2,alpha:0.405},0).wait(1).to({scaleX:0.73,scaleY:0.72,x:1188.7,y:-626.8,alpha:0.393},0).wait(1).to({scaleX:0.73,scaleY:0.71,x:1219.5,y:-633.7,alpha:0.381},0).wait(1).to({scaleX:0.72,scaleY:0.71,x:1252.9,y:-639.1,alpha:0.369},0).wait(1).to({scaleX:0.71,scaleY:0.7,x:1286.1,y:-643.3,alpha:0.357},0).wait(1).to({scaleX:0.71,scaleY:0.7,x:1319.1,y:-646.9,alpha:0.346},0).wait(1).to({scaleX:0.7,scaleY:0.69,x:1352.1,y:-650.3,alpha:0.334},0).wait(1).to({scaleX:0.7,scaleY:0.68,x:1385.1,y:-653.4,alpha:0.322},0).wait(1).to({scaleX:0.69,scaleY:0.68,x:1418.1,y:-656.5,alpha:0.31},0).wait(1).to({scaleX:0.69,scaleY:0.67,x:1451.1,y:-659.6,alpha:0.298},0).wait(1).to({scaleX:0.68,scaleY:0.67,x:1484.2,y:-662.7,alpha:0.286},0).wait(1).to({scaleX:0.68,scaleY:0.66,x:1517.3,y:-666.1,alpha:0.274},0).wait(1).to({scaleX:0.67,scaleY:0.66,x:1550.3,y:-669.6,alpha:0.262},0).wait(1).to({scaleX:0.67,scaleY:0.65,x:1578.4,y:-672.7,alpha:0.25},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:1615.3,y:-675.8,alpha:0.238},0).wait(1).to({scaleX:0.66,scaleY:0.64,x:1648.9,y:-678.3,alpha:0.227},0).wait(1).to({scaleX:0.65,scaleY:0.63,x:1682.1,y:-680.7,alpha:0.215},0).wait(1).to({scaleX:0.65,scaleY:0.63,x:1715.2,y:-682.9,alpha:0.203},0).wait(1).to({scaleX:0.64,scaleY:0.62,x:1748.3,y:-685,alpha:0.191},0).wait(1).to({scaleX:0.64,scaleY:0.62,x:1781.6,y:-686.9,alpha:0.179},0).wait(1).to({scaleX:0.63,scaleY:0.61,x:1815,y:-688.7,alpha:0.167},0).wait(1).to({scaleX:0.62,scaleY:0.61,x:1842.9,y:-689.3,alpha:0.155},0).wait(1).to({scaleX:0.62,scaleY:0.6,x:1880,y:-688,alpha:0.143},0).wait(1).to({scaleX:0.61,scaleY:0.6,x:1913.8,y:-686.8,alpha:0.131},0).wait(1).to({scaleX:0.61,scaleY:0.59,x:1947.4,y:-685.5,alpha:0.119},0).wait(1).to({scaleX:0.6,scaleY:0.58,x:1981.1,y:-684.3,alpha:0.108},0).wait(1).to({scaleX:0.6,scaleY:0.58,x:2016.6,y:-683.3,alpha:0.096},0).wait(1).to({scaleX:0.59,scaleY:0.57,x:2045.2,y:-682.9,alpha:0.084},0).wait(1).to({scaleX:0.59,scaleY:0.57,x:2082.5,y:-677.1,alpha:0.072},0).wait(1).to({scaleX:0.58,scaleY:0.56,x:2112,y:-670.4,alpha:0.06},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.5,86.4,194,79.5);


// stage content:
(lib._20170321_flash_003 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener("click", change_frame.bind(this))
		
		function change_frame(){
			if(this.currentFrame < this.totalFrames - 1){
				this.gotoAndStop(this.currentFrame + 1);	
			} else{
				document.location.href = "frame3.html";
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// coins
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBlQgCgBAAgEQAAgDACgDQADgCACAAQADAAADACQACADAAADQAAAEgCABQgDADgDAAQgCAAgDgDgAgEAuIAAiVIAHAAIAACVg");
	this.shape.setTransform(1589.7,962.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BqIAAgHIAKABQAMAAAIgHQAIgHAGgQIAKgZIg+iYIAJAAIA3CNIABgDIA1iKIAJAAIhDCzIgEAJQgLAbgaAAQgIAAgDgCg");
	this.shape_1.setTransform(1580,968.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBEQgNgMAAgSQAAgVAUgNQATgMAeAAIAmAAIAAgXQAAgTgMgLQgMgKgXAAQgUAAgOALQgOAKAAAQIgIAAQAAgTARgNQAQgNAXAAQAZAAAPANQAOAMABAXIAABIQAAAZAEAJIAAACIgJAAQgDgKAAgSQgJAOgQAIQgPAJgTAAQgWAAgNgMgAglAMQgOAKAAAQQAAAOALAKQALAKASAAQAUAAAQgKQAPgJAIgSIAAgjIgjAAQggAAgSAMg");
	this.shape_2.setTransform(1564.9,965.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBZQgQgVAAglIAAgCQAAgjAQgWQAPgUAbAAQAQAAAOAIQANAIAIAPIAAhcIAIAAIAADYIgIAAIAAgYQgIANgNAHQgOAIgQgBQgbAAgPgVgAglgWQgNATAAAjQAAAhANATQANASAYABQASgBANgHQAOgJAGgQIAAhHQgNgngmAAQgYAAgNASg");
	this.shape_3.setTransform(1549.4,962.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBGQgPgKgJgSQgJgRAAgWIAAgFQAAgVAJgSQAIgSAPgKQAQgKAQAAQAaAAAQASQAQATAAAeIAAAIIhyAAIAAAHQAAATAIAQQAIAQANAJQAPAJAPAAQAPAAALgFQALgFAIgLIAFAEQgRAZghAAQgSAAgQgKgAgig2QgQAQgDAaIBqAAIAAgCQAAgPgGgOQgHgNgLgIQgMgHgOAAQgWAAgPARg");
	this.shape_4.setTransform(1527.6,965.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqA7QgRgVAAgkIAAgEQAAgjARgVQARgVAcAAQAYAAAQAPQAQAOABAZIgIAAQgBgVgNgNQgOgMgVAAQgZAAgPASQgOATAAAhIAAAEQAAAgAOATQAPASAZAAQAVAAANgLQAOgLABgUIAIAAQgBAWgQAOQgQAOgYAAQgcAAgRgVg");
	this.shape_5.setTransform(1512.8,965.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDBpIAAiZIAHAAIAACZgAgFhaQgCgDAAgDQAAgDACgDQADgCACAAQADAAADACQACADAAADQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_6.setTransform(1502.5,962.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAwBOIAAhjQAAgZgKgMQgKgMgWAAQgSAAgPAOQgPAPgFAWIAABhIgIAAIAAiYIAIAAIAAAjQAHgSAPgKQAPgKAQAAQAZAAAMAOQAMAOAAAcIAABjg");
	this.shape_7.setTransform(1491.6,965.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguBEQgNgMAAgSQAAgVAUgNQATgMAeAAIAmAAIAAgXQAAgTgMgLQgMgKgXAAQgUAAgOALQgOAKAAAQIgIAAQAAgTARgNQAQgNAXAAQAZAAAPANQAOAMABAXIAABIQAAAZAEAJIAAACIgJAAQgDgKAAgSQgJAOgQAIQgPAJgTAAQgWAAgNgMgAglAMQgOAKAAAQQAAAOALAKQALAKASAAQAUAAAQgKQAPgJAIgSIAAgjIgjAAQggAAgSAMg");
	this.shape_8.setTransform(1468.5,965.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBGQgQgKgJgSQgIgRAAgWIAAgFQAAgVAIgSQAIgSAPgKQAPgKARAAQAaAAAQASQARATAAAeIAAAIIhzAAIAAAHQAAATAIAQQAIAQANAJQAOAJAPAAQAQAAALgFQALgFAIgLIAFAEQgQAZgjAAQgRAAgPgKgAgig2QgQAQgCAaIBqAAIAAgCQgBgPgGgOQgHgNgLgIQgMgHgOAAQgVAAgQARg");
	this.shape_9.setTransform(1447.1,965.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCBNIg8iZIAIAAIA2CNIA3iNIAIAAIg7CZg");
	this.shape_10.setTransform(1432.8,965.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguBEQgNgMAAgSQAAgVAUgNQATgMAeAAIAmAAIAAgXQAAgTgMgLQgMgKgXAAQgUAAgOALQgOAKAAAQIgIAAQAAgTARgNQAQgNAXAAQAZAAAPANQAOAMABAXIAABIQAAAZAEAJIAAACIgJAAQgDgKAAgSQgJAOgQAIQgPAJgTAAQgWAAgNgMgAglAMQgOAKAAAQQAAAOALAKQALAKASAAQAUAAAQgKQAPgJAIgSIAAgjIgjAAQggAAgSAMg");
	this.shape_11.setTransform(1417.7,965.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABCBnIAAhmIiDAAIAABmIgIAAIAAjOIAIAAIAABhICDAAIAAhhIAIAAIAADOg");
	this.shape_12.setTransform(1400.3,962.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ArnFgQjogXhbgQQi3gfiAg8QgsgUg2gpQg/gwgpgxQhuiFBphPQAZgTAngOQAQgGA1gPQBZgaBbgWQDCgwDHgeQGBg7GIAFQGGAGGBBFQADABgBAEQgBAEgDgBQmQhJmVgDQmYgDmPBEQixAdiqArQhgAYhUAYQgzAPgTAJQgoAQgVAYQg5A/BABiQAwBKBRA4QBhBDCfAqQCTAmC8AVQB+APDXANQFXAXGKgNQFPgLGKgnQC7gSC1gXQB6gOA+gYQBkgoAdhWQAchRg+hHQgug1hZgrQiUhHi7g3QlRhilqAGQgDAAAAgEQAAgDADgBQG1gHGSCRQDFBGBXBBQCiB2hmCIQgpA4hPAdQg0ATheAMQitAWjxAXQnEAsl3AHQhWAChUAAQlbAAk8gfg");
	this.shape_13.setTransform(1510,959);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AwJE4QjKgeh/g5QishMhHiGQgfg6ALgqQAKgnArgcQAfgTA2gQQILibImgeQIVgcIJBcIjigtQEHgGEEA2QEEA2DwBuQC7BXAFB1QACAzghAvQgeAsgyAbQgpAXg6AMQglAIhFAJQqfBQn4ANQhrAChoAAQoDAAm9hDg");
	this.shape_14.setTransform(1510.1,958.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#57B6EC").s().p("AAAALIAAADQAAABAAAAQAAAAAAgBQAAAAAAgBQAAgCAAgBIgBACIAAgDIAAACQAAABAAABQAAAAAAAAQgBAAAAgCQAAgBAAgBIgBACIgBgDIAAAEIAAACQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAgBIgBABIABgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAACQAAADAAgDIgBgDIAAACIAAABIgBgFIAAAEIgBgDIAAgBIAAADIAAgCIgBACIAAACQAAgBAAgBQAAAAgBAAQAAgBAAABQAAAAAAABIAAgDIgBADIAAgBIAAABIAAAAQgBADAAgCIAAABIAAgFIgBADIAAgBIAAABIgBgCIAAAFIAAgFIgBAFIAAgGIAAADIgBgCIAAADIAAgEIAAgMIAAgGIAAAGIAAgCIAAAAQAAABABABQAAABAAAAQAAAAAAAAQAAAAAAgBIAAgDQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAgBIABAAQAAADABgEQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAABAAABIAAABIAAABQAAABABAAIAAgHIAAgBIABABIAAACIAAgDIAAAGQAAADABgDIAAABIAAgCIAAABIABgFIAAgCIAAADIABgCIAAACIAAgCQABgBAAABIAAADIAAgDQAAACAAABQAAABABABQAAABAAgBQAAAAAAAAIAAgBIABgBIAAgDIABAEIAAgFIABAHIAAgGIAAADIABgDIAAADQAAAAAAAAQAAABAAgBQAAAAAAgBQABgBAAgBIAAADIAAgEIAAABQAAABAAABQAAABAAAAQAAAAABAAQAAAAAAgBIAAAFIAAAAIAAgGQAAABAAABQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAIIAAgEIAAABIABgBIAAAFIAAgBIABgFIAAABIAAgCIAAAGQAAAAAAAAQABABAAgBQAAAAAAgBQAAgBAAgBIAAgBIABAEIAAgCIAAgCIAAACIABgEIAAACIAAgEIAAACQAAAAAAAAQABABAAgBQAAAAAAAAQAAgBAAAAIAAACIAAgCIAAACIABABIAAgCIAAgEIAAAEQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAAgFQAAACAAgCIAAACIABACIAAgEIAAAEIAAABIABgEIAAADQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAgBIAAADIABAAIAAABQAAACAAgBIAAACIABgDIAAABQAAAEAAgDIABgDIAAgBIAAADIAAgBIABgCIAAAEIAAgDIABAEIAAgDIAAACIAAACIABACIAAgFIAAAGIAAgEQAAAAAAAAQAAABAAgBQAAAAABAAQAAAAAAgBIgBAJQAAACAAAAQAAABAAAAQAAAAAAAAQAAgBAAAAIAAACIgBgDIAAgGIAAAFIgBgCQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAADQAAABgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgCIAAgBIAAADIAAgCQgBABAAgBIAAAEIAAgFQgBACAAgBIAAACIAAgEIgBAFIAAgBIAAABIAAADIgBgGIAAAEIAAgBIgBACIAAgIIAAAIIAAAAIgBACIAAgDIAAADIAAgDIgBAEQAAABAAAAQgBABAAAAQAAgBAAAAQAAgBAAgBIAAgBIAAABIAAgBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAgBIAAACIgBgDQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIAAACQgBgBAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAgAgMgIIAAAFIABgEIAAgBgAASACIAAAAIAAgBIAAABIAAABIAAAEgAABgHIAAgCIAAAGgAgOgGIAAgBIAAABg");
	this.shape_15.setTransform(1127.2,971.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AncNQQgkgPgUgoQgQgggEguQgEg4AGhIQAEgtAMhTQATiKAjiDQA8jZBfi7QBpjMCNiXQCSieCshNQBhgsA/gGQBkgKAmBLQAhBCgcBqQgNAvgzB3QgsBnhABxQg1BbhLByQkKGWlQG7QgEAEgDACQgSAWgcAHQgLACgKAAQgVAAgVgIgAGFs3QhEAKhlAzQiSBKh/CGQjsD6iDGOQhADFgZDOQgJBJgCAgQgFA7ADAuQAEBGAfAcQAVAVAeABQAgAAAQgYQADgGAFgBQEnmGEFmIQCGjGBJiJQA6hvAlhhQAUg2AIgbQAOgvACgmQAEhCgjgjQgdgdguAAQgNAAgOACg");
	this.shape_16.setTransform(1155.5,968.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("Am1NJQgrgCgZgfQgWgbgHgrQgFgfADgvQAIjjA6jdQA6jdBojJQByjfCZiZQCtiwDPhAQBjgfAzAjQAsAdAFBCQAEA0gVBBQgwCehiCxQhEB7h/C9QkMGPkdF3IgCgBQgQAfgpAAIgFAAg");
	this.shape_17.setTransform(1155.5,968.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AlhN5IiRhbQgNgIAIgNQAHgNANAIIA7AoQAkAZAaALQAWAJAegXQASgMAdgdQBQhEBLhVQB+iSBqjBQBZiiBSjTQBSjPA8jNQAZhXAHggQANhGgJg1QgKg/gugoQgxgsg9ARQgOAEgEgPQgEgOAOgEQAsgMAqAPQApAOAfAjQA+BHgPB8QgHA2gTBFIglB4QgiBtguB9QhSDghZCvQjWGrk6DgQgEADgDAAQgEAAgEgDg");
	this.shape_18.setTransform(1163.4,975.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AnrMSIMa54QA1gSA2AjQA0AiATA6QAQAxgHBAQgFAtgTBGQgiB+g4ChQiDF4iUD3Qi9FBj+Czg");
	this.shape_19.setTransform(1163.4,975.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("ABQQXQg9gqgvhqQgwhpgpiEQglh1geiOQgXhsgbibQhcohg/o3QgBgGACgDQgCgfARgXQAUgeAngFQAtgHAuAiQAfAXAlAvQChDPCHEcQDvH1AKG0QAGD+hQDAQgpBfgwAsQglAggnAAQgjAAgkgZgAlHwLQgmAOAHAtQABAGgBAEQA7IXBYIOQAsEJAsCpQAjCJAaBMQAoB2AxBSQAlA+AtAZQA6AgAxgwQAcgcAYgwQAQgfAUg4QA+itgGjeQgJmFjHnEQhWjEhwi0QhFhug3hIQgZgggOgPQgXgZgYgMQgVgMgVAAQgPAAgOAFg");
	this.shape_20.setTransform(1462.3,750);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AA1PrQgngtgghIQhNivg2jeQgmidgpj6QhYoYg6oGIACAAQgLgpAigaQAhgaApAMQAjALAjAjQAZAYAhAtQCZDTBzDtQByDuBED5QBLERgCDsQgDEOhpC+QgyBbg+ABIgCAAQg0AAgxg3g");
	this.shape_21.setTransform(1462.3,750);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AD/QNQhWgbg7hMQgggqgfg9QgQgegjhPQg0h0g0h/QhzkchDjiQhPkJgajjQgfkLAojqQABgFAFgDQAEgDAFAAICqgKQAPAAAAAPQAAAPgPAAIieAJQgrEHAwE0QAnD8BsE4QBfEaCBEfQAtBkAOAaQAlBHAoAsQAxA2BBASQBOAVAkg/QAIgMANAHQAMAIgHAMQgkA+hAAAQgYAAgcgJg");
	this.shape_22.setTransform(1444.8,749.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AC8PgQgvgjgog+QgdgsgjhLQg/iHhKi3QirmphFk9QhZmcA6lDICrgKIJTfWQgaAzhBACIgHAAQg5AAg0gmg");
	this.shape_23.setTransform(1444.7,749.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AlfFfQhtgDhYgTQhXgThCglQhcg0gEhEQgEg6BKg6QAzgoBog8QClhgC7g8QDAg+DHgTQDJgSDHAZQAOACAAAPQAAAPgOgCQl/gxlwBwQiiAxiVBOQhUArhDAsQg+ApgKAHQgqAigJAiQgMAuA3AsQAlAeA7AYQBFAcBbAKQCYASDFgQQGhgiETiPQC5hgAIiCQAGhShAhDQg5g7hVgYQgOgEAEgOQAEgPAOAEQBXAZA9A7QBEBCAGBUQAGBQg1BHQgtA8hOAvQhKAthmAkQhJAahyAeQjNA2jVANQhWAGhFAAIgrgBg");
	this.shape_24.setTransform(1297,809.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("Al1FPQh3gFhSgWQhrgdhChAQgbgZgGgXQgRg+BdhCQESjCFOhTQFNhUFOAsIABg5QBWAWA9A/QBABDABBRQAABihZBPQhIBAh2AvQjRBSjfAlQi1Afi3AAQgpAAgpgBg");
	this.shape_25.setTransform(1297,809.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AqPDcQgygPgagPQgogXgPgjQgFgNgEhKQgDg4gcgPQgMgHAHgNQAIgNAMAHQAfARAIAlIAFBHQAEBCBCAiQAeAQBhAXQD9A8EugsQD2glEbhqQBrgnASgJQBHgfApgnQAvgtAGg/QAHhGg3gjQgMgIAHgNQAIgNAMAIQBNAxgQBeQgPBVhHA1QgkAcg4AZQgVAKhNAdQiAAyh4AjQj+BLjhANQgvACgtAAQjRAAi3g4g");
	this.shape_26.setTransform(1295.3,828.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AqdDIQgngNgXgPQgfgUgLgcQgHgPgEhPQgDg4gggOIYujcQAxAbAGBBQAHA9giAyQgeAqg2AgQgmAXhEAbQlXCJkfAoQh5ARhxAAQjZAAi9g9g");
	this.shape_27.setTransform(1295.3,828.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AqsKwQhygdAGhjQADgqAWgyQAJgWAig/QA0hiBDhiQB8i2CeiaQCgibC6h5QC7h4DPhRQAOgFAEAPQAEAOgOAFQjMBQi6B4Qi4B4ieCbQiPCMhwCfQg4BQgzBYIgvBTQgZAxgMAmQgqCJCkAOQB5AKCDgtQBgghBsg5QBVguBqhEQDAh7CbiKQCvibB1ijQBJhnAYhaQAgh3g4hXQgxhOhkgbQhZgYhhAWQgOADgEgOQgEgPAOgDQBlgXBfAYQBpAaA5BOQBFBcgaCAQgUBmhMBuQg+BahaBeQhJBNhlBZQi5CljMB7QiGBShbAqQiCA9hxATQgxAIgtAAQg0AAgtgMg");
	this.shape_28.setTransform(1475.1,530.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AqxKfQgsgMgTgUQg2g4A8h8QCylsEykYQExkYF7iSIggg9QBogaBkAgQBrAhAvBWQA5BngwCJQgnBthiB1QivDOjWCoQjWCojxB5QiBA/hkAYQhCAQg9AAQg5AAg0gOg");
	this.shape_29.setTransform(1475,530.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("ArIKGQgNgLgvhNQgkg8gnABQgOABAAgPQAAgPAOgBQAnAAAdAgQAMANAfA0QAWAlAXASQAcAWAnACQAhABAqgIQAWgEAzgNQGuhpGemAQCniaCojJQA5hFAZgpQAohCAHg+QAGhBgjg3Qgmg7hAgEQgOgBAAgPQAAgPAOABQA1ADAoAjQAlAgATA0QAoBvhZCKQhCBmhpByQhHBPh7B1QjXDQjbCGQj0CUj5A5QhPARgiACIgMAAQg7AAglgdg");
	this.shape_30.setTransform(1477.5,547.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("Ap3KTQgtgDgcgXQgSgPgSgdIgdgyQgkg7gqAEIYMx3QBDABAsBAQArA+gIBIQgHA+gnBCQgaAug5BDQkcFXkaDQQlYD+lmBDQgmAHgcAAIgPgBg");
	this.shape_31.setTransform(1477.5,547.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AgOAAQAAgOAOAAQAOAAABAOQgBAPgOAAQgOAAAAgPg");
	this.shape_32.setTransform(1218.1,866.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

	// here's your change
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbBGQgQgKgJgSQgJgRAAgWIAAgFQAAgVAJgSQAIgSAQgKQAPgKAQAAQAZAAARASQARATAAAeIAAAIIhzAAIAAAHQAAATAIAQQAIAQANAJQAOAJAQAAQAPAAALgFQALgFAJgLIAEAEQgRAZghAAQgSAAgPgKgAgig2QgQAQgDAaIBqAAIAAgCQAAgPgGgOQgHgNgLgIQgMgHgOAAQgWAAgPARg");
	this.shape_33.setTransform(1197.6,698.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbBnQgNgHgIgNIAFgFQAJALAKAHQALAGANAAQAYAAANgPQANgOABgaIAAgYQgIANgOAHQgNAHgQAAQgbAAgQgVQgPgVAAgkIAAgCQAAglAPgVQAQgUAbAAQAQAAANAIQAOAHAIAQIAAgcIAIAAIAACWQAAAegQARQgPARgbAAQgOAAgOgGgAglhSQgNATAAAkQAAAgANATQANASAXAAQATAAAOgJQANgJAGgQIAAhFQgNgogmAAQgYAAgNATg");
	this.shape_34.setTransform(1181.9,701.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAwBOIAAhjQgBgZgJgMQgKgMgWAAQgSAAgPAOQgPAPgFAWIAABhIgHAAIAAiYIAHAAIAAAjQAIgSAOgKQAPgKARAAQAYAAANAOQAMAOgBAcIAABjg");
	this.shape_35.setTransform(1166.4,698.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AguBEQgNgMAAgSQAAgVAUgNQATgMAeAAIAmAAIAAgXQAAgTgMgLQgMgKgXAAQgUAAgOALQgOAKAAAQIgIAAQAAgTARgNQAQgNAXAAQAZAAAPANQAOAMABAXIAABIQAAAZAEAJIAAACIgJAAQgDgKAAgSQgJAOgQAIQgPAJgTAAQgWAAgNgMgAglAMQgOAKAAAQQAAAOALAKQALAKASAAQAUAAAQgKQAPgJAIgSIAAgjIgjAAQggAAgSAMg");
	this.shape_36.setTransform(1150.3,698.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAwBtIAAhlQAAgXgKgMQgKgMgWAAQgTAAgOAOQgPAOgFAWIAABiIgHAAIAAjZIAHAAIAABkQAHgSAQgKQAOgLAQAAQAaAAALAPQAMANABAbIAABlg");
	this.shape_37.setTransform(1135.1,695.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgqA7QgRgVAAgkIAAgEQAAgjARgVQARgVAcAAQAYAAAQAPQAQAOABAZIgIAAQgBgVgNgNQgOgMgVAAQgZAAgPASQgOATAAAhIAAAEQAAAgAOATQAPASAZAAQAVAAANgLQAOgLABgUIAIAAQgBAWgQAOQgQAOgYAAQgcAAgRgVg");
	this.shape_38.setTransform(1119.7,698.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghBOIAAiYIAHAAIAAAfQAHgQAMgJQAMgJATAAQAGAAAEABIgBAHIgJgBQgUAAgMANQgOANgEAXIAABjg");
	this.shape_39.setTransform(1101.6,698.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgqA/QgNgOAAgcIAAhiIAIAAIAABiQAAAYALANQALAMAUAAQAVAAAOgKQAOgKAEgUIAAhrIAIAAIAACYIgIAAIAAgZQgHANgNAIQgNAHgTAAQgZAAgNgPg");
	this.shape_40.setTransform(1087.8,698.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBGQgPgKgJgRQgIgSAAgVIAAgGQAAgWAIgSQAIgRAQgKQAPgKATAAQATAAAPAKQAQAJAIASQAJARAAAWIAAAGQAAAWgIASQgJARgPAKQgQAKgTAAQgSAAgQgKgAgqgzQgRAUAAAeIAAAEQAAATAIAQQAHAQAOAJQAOAJAQAAQAaAAARgUQAQgUAAgfIAAgDQAAgTgHgQQgIgQgNgJQgOgJgRAAQgaAAgQAUg");
	this.shape_41.setTransform(1071.8,698.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag3BqIAAgHIAKABQAMAAAIgHQAIgHAGgQIAJgZIg9iYIAIAAIA4CNIACgDIA1iKIAIAAIhDCzIgEAJQgLAbgaAAQgIAAgDgCg");
	this.shape_42.setTransform(1057,701.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnBEQgQgMAAgSIAIAAQABAQANAJQANAJAWAAQAUAAANgKQANgJAAgOQAAgcgwgKQgbgFgMgKQgLgJAAgRQAAgRAOgLQAPgLAWAAQAYAAAPAMQAPAMAAAUIgHAAQAAgPgNgLQgNgKgVAAQgUAAgLAJQgMAIAAAOQAAAKAEAGQAFAGAJAFQAKAEASAFQAUAEALAFQALAGAFAIQAFAIAAAMQAAASgPAMQgPALgYAAQgZAAgQgMg");
	this.shape_43.setTransform(1035.7,698.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJAXQAKgPABgPIAAgTIAIAAIAAAQQgBAWgNAPg");
	this.shape_44.setTransform(1026.2,687.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcBGQgPgKgJgSQgJgRAAgWIAAgFQAAgVAJgSQAIgSAPgKQAQgKAQAAQAaAAAQASQAQATAAAeIAAAIIhyAAIAAAHQAAATAIAQQAIAQAOAJQAOAJAPAAQAPAAALgFQALgFAJgLIAFAEQgSAZghAAQgSAAgQgKgAgig2QgQAQgDAaIBqAAIAAgCQAAgPgGgOQgHgNgLgIQgMgHgOAAQgWAAgPARg");
	this.shape_45.setTransform(1016.8,698.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghBOIAAiYIAHAAIAAAfQAHgQAMgJQAMgJATAAQAGAAAEABIgBAHIgJgBQgUAAgMANQgOANgEAXIAABjg");
	this.shape_46.setTransform(1005.6,698.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbBGQgQgKgJgSQgIgRAAgWIAAgFQAAgVAIgSQAIgSAPgKQAQgKAQAAQAZAAARASQAQATABAeIAAAIIhzAAIAAAHQAAATAIAQQAIAQANAJQAOAJAPAAQAQAAALgFQALgFAIgLIAFAEQgQAZgjAAQgRAAgPgKgAgig2QgQAQgCAaIBqAAIAAgCQAAgPgHgOQgHgNgLgIQgMgHgOAAQgWAAgPARg");
	this.shape_47.setTransform(992.5,698.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABCBnIAAhmIiDAAIAABmIgIAAIAAjOIAIAAIAABhICDAAIAAhhIAIAAIAADOg");
	this.shape_48.setTransform(974.9,695.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AroFgQjngXhbgQQi3gfiAg8QgsgVg2goQg/gwgpgxQhuiFBphPQAZgTAmgOQAPgGA2gPQBcgaBZgWQDDgvDGgfQGBg7GIAFQGGAFGABGQAEABgBAEQgBADgEAAQmPhJmWgDQmXgDmQBEQiuAdisArQhfAXhWAZQgyAPgUAJQgnAQgWAYQg4A/BABiQAwBKBQA4QBkBECcAoQCTAmC9AWQB7AODZAOQFYAXGKgNQFNgMGMgmQCTgPDdgaQB6gPA+gYQBkgoAdhVQAchRg+hHQgug1hZgrQiUhIi7g2QlUhjlnAHQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBQAAgEAEAAQG0gHGTCQQDEBHBYBAQCiB2hmCJQgqA4hOAcQg1AUhdAMQi3AXjoAWQm/Asl7AHQhRAChOAAQlhAAlCgfg");
	this.shape_49.setTransform(1084.7,692.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AwJE4QjKgeiAg5QirhMhHiGQgfg6ALgqQAKgnArgcQAfgTA2gRQILibImgdQIEgbH5BUIjCgmQEIgGEEA2QEEA2DvBuQC7BXAGB1QACAyghAwQgeAsgyAbQgpAWg6ANQgkAIhGAIQqeBRn5ANQhrADhoAAQoDAAm9hEg");
	this.shape_50.setTransform(1084.7,692.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},5).wait(2));

	// get coffee
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(353.3,891.6,1,1,0,0,0,157.7,149.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvBTQgUgOAAgXIAJAAQACAUAQALQAQALAaAAQAZAAAQgMQAPgMAAgQQAAgig5gNQgjgGgNgMQgOgLAAgVQABgUARgOQARgNAbAAQAeAAASAPQATAOAAAYIgKAAQAAgSgPgNQgRgNgZAAQgYAAgOALQgPALAAAQQABANAFAHQAGAHAMAGQALAGAXAFQAXAFAOAHQANAHAGAKQAGAKAAAOQAAAWgSAOQgSANgeAAQgeAAgTgOg");
	this.shape_51.setTransform(839.7,922.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AA3CFIhVhmIAAABIgbAYIAABNIgJAAIAAkJIAJAAIAACxIAVgVIBVhOIANAAIhVBPIBbBsg");
	this.shape_52.setTransform(824,918.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AA7BgIAAh6QgBgegMgPQgMgOgbAAQgWAAgSARQgSARgHAbIAAB4IgJAAIAAi7IAJAAIAAAsQAKgWASgNQARgMAVAAQAeAAAPARQAOARAAAiIAAB6g");
	this.shape_53.setTransform(804.6,922.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag4BTQgQgOAAgXQAAgZAYgQQAXgOAlgBIAvAAIAAgbQAAgYgPgNQgPgNgcAAQgYAAgRAOQgRANAAATIgKAAQAAgXAUgQQAUgQAcAAQAfAAASAPQARAPABAcIAABYQAAAfAFALIAAACIgLAAQgDgMAAgXQgMASgTAKQgTAKgXAAQgaAAgQgOgAgtAOQgRANAAAUQAAARANAMQAOAMAVAAQAZAAATgMQATgMAKgVIAAgrIgsAAQgnAAgVAOg");
	this.shape_54.setTransform(785,922.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA7CFIAAh6QgBgegMgOQgMgPgaAAQgXABgTAQQgRASgGAaIAAB4IgJAAIAAkJIAJAAIAAB6QAJgVASgNQARgNAVAAQAeAAAPARQAPASAAAhIAAB6g");
	this.shape_55.setTransform(766.5,918.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEB+IAAjyIhbAAIAAgJIC/AAIAAAJIhcAAIAADyg");
	this.shape_56.setTransform(746.2,919.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AobGmQiHgZhLgZQhzgmhMg+QhThEgwhoQhBiLAZhaQANgvAqghQAZgUA+geQCDhBCMgvQEbhdEpAAQEngBEcBbQAEABgBAEQgBAEgEgBQkihdksACQkvADkfBjQiKAwiEBDQgjASgQALQgbATgPAWQgnA6ATBfQAYBuBCBZQBDBaBjAzQBeAwCDAdQBYATCUATQEJAhEugWQEFgSE8g9QAogIBbgPQBPgRAsgeQA8gpAahRQAYhLgOhMQgVhshshfQhKhBiHhHQjrh8j7AIQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAgEADAAQCWgFCUAsQCOArCEBTQCHBWA9BQQBVBugWCCQgJA5gbAuQgeAygvAbQgxAchTAQQhfAPgsAIQlfBDkcANQhLADhJAAQkAAAjmgrg");
	this.shape_57.setTransform(794.9,915.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ArDF9QiLgmhXhFQh1hdgxijQgVhHAIgzQAGgwAeghQAVgYAlgUQFmi9F5gjQF4gkFvB4Iixg+QC1gHCyBCQCyBCCjCGQCBBqADCOQACA+gXA6QgVA2ghAgQgdAcgoAQQgZAKgvAJQnLBilZAQQhLAEhIAAQlfAAkwhSg");
	this.shape_58.setTransform(794.9,915.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance}]},4).wait(3));

	// coffee
	this.instance_1 = new lib.coffeecup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(527.2,875.5,1,1,0,0,0,105.7,120.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(4));

	// coffee counter
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgiBVQgTgMgKgVQgLgWAAgaIAAgHQAAgZAKgWQALgWASgMQASgMAVAAQAfAAAUAWQAUAXAAAkIAAAKIiLAAIAAAJQAAAXAJATQAKAUARALQAQALATAAQATAAAOgGQAMgHAKgNIAHAFQgVAegpAAQgVAAgUgMgAgqhCQgTAUgDAgICBAAIAAgDQAAgTgHgQQgJgQgOgJQgOgKgRAAQgaAAgUAVg");
	this.shape_59.setTransform(577.1,510.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgwBTQgTgOAAgXIAJAAQACAUAQALQAQALAaAAQAaAAAPgMQAPgMAAgQQAAgig5gNQgjgGgNgMQgNgLAAgVQgBgUASgOQARgNAbAAQAeAAASAPQATAOAAAYIgKAAQABgSgRgNQgQgNgZAAQgYAAgOALQgOALAAAQQAAANAFAHQAGAHALAGQAMAGAXAFQAXAFANAHQAOAHAGAKQAGAKAAAOQAAAWgSAOQgTANgdAAQgeAAgUgOg");
	this.shape_60.setTransform(559.1,510.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag4BTQgQgOAAgXQAAgZAYgQQAXgOAlgBIAvAAIAAgbQAAgYgPgNQgPgNgcAAQgYAAgRAOQgRANAAATIgKAAQAAgXAUgQQAUgQAcAAQAfAAASAPQARAPABAcIAABYQAAAfAFALIAAACIgLAAQgDgMAAgXQgMASgTAKQgTAKgXAAQgaAAgQgOgAgtAOQgRANAAAUQAAARANAMQAOAMAVAAQAZAAATgMQATgMAKgVIAAgrIgsAAQgnAAgVAOg");
	this.shape_61.setTransform(540.6,510.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghBVQgUgMgKgVQgLgWAAgaIAAgHQAAgZAKgWQALgWASgMQASgMAVAAQAfAAAUAWQAUAXAAAkIAAAKIiMAAIAAAJQAAAXAKATQAJAUARALQARALATAAQATAAAOgGQANgHAJgNIAHAFQgVAegpAAQgWAAgSgMgAgphCQgUAUgDAgICCAAIAAgDQgBgTgHgQQgJgQgOgJQgOgKgRAAQgbAAgSAVg");
	this.shape_62.setTransform(522.9,510.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgECFIAAkJIAJAAIAAEJg");
	this.shape_63.setTransform(510.3,507);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhHCEIAAkDIAKAAIAAAhQAJgRARgKQAQgJAUgBQAhAAATAaQATAZAAAuIAAACQAAAsgTAZQgTAaghAAQgUAAgRgIQgQgKgJgPIAABmgAgmhsQgQAMgHAXIAABWQAHATAQALQARALAXAAQAcAAAQgXQAQgXAAgrQAAgpgQgWQgQgXgdAAQgWAAgRANg");
	this.shape_64.setTransform(497.3,514.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLAeQANgSABgSIAAgdIAJAAIAAAZQAAAbgRATg");
	this.shape_65.setTransform(475,521.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgiBVQgTgMgKgVQgLgWAAgaIAAgHQAAgZAKgWQALgWASgMQASgMAVAAQAfAAAUAWQAUAXAAAkIAAAKIiMAAIAAAJQAAAXAKATQAJAUASALQAQALATAAQATAAAOgGQAMgHAKgNIAHAFQgUAegqAAQgVAAgUgMgAgphCQgUAUgDAgICCAAIAAgDQgBgTgHgQQgJgQgOgJQgOgKgRAAQgaAAgTAVg");
	this.shape_66.setTransform(463.3,510.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgiBVQgSgMgLgVQgLgWAAgaIAAgHQAAgZALgWQAKgWASgMQASgMAUAAQAgAAAUAWQAUAXAAAkIAAAKIiLAAIAAAJQAAAXAJATQAJAUASALQARALASAAQATAAANgGQANgHALgNIAGAFQgUAegqAAQgVAAgUgMgAgqhCQgTAUgDAgICBAAIAAgDQABgTgJgQQgHgQgOgJQgPgKgSAAQgZAAgUAVg");
	this.shape_67.setTransform(445.5,510.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSCHIAAixIghAAIAAgKIAhAAIAAgbQAAgaANgOQAMgPAXAAQANAAAJADIgCAJQgJgCgLAAQgTAAgKAMQgKAMAAAWIAAAaIAxAAIAAAKIgxAAIAACxg");
	this.shape_68.setTransform(431.6,506.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSCHIAAixIghAAIAAgKIAhAAIAAgbQAAgaANgOQAMgPAXAAQANAAAJADIgCAJQgJgCgLAAQgTAAgKAMQgKAMAAAWIAAAaIAxAAIAAAKIgxAAIAACxg");
	this.shape_69.setTransform(420.5,506.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpBVQgTgLgKgVQgLgWAAgaIAAgIQAAgaALgWQAKgVASgMQATgMAXAAQAYAAASAMQATALALAVQAKAWAAAaIAAAIQAAAbgKAVQgKAVgTAMQgTAMgXAAQgYAAgSgMgAg0g+QgTAYAAAlIAAAFQAAAXAJAUQAJATARALQAQALAVAAQAfAAAVgYQATgYABgmIAAgFQAAgXgJgTQgKgUgRgLQgQgLgVAAQgfAAgVAZg");
	this.shape_70.setTransform(404.4,510.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgzBIQgVgaAAgrIAAgGQAAgqAVgaQAUgZAiAAQAeAAATASQAUASABAdIgJAAQgCgZgQgPQgRgQgaAAQgeAAgSAXQgSAXAAAoIAAAFQAAAnASAXQASAWAfAAQAZAAARgOQAQgNACgYIAJAAQgBAbgUARQgUAQgcAAQgjAAgUgZg");
	this.shape_71.setTransform(385.7,510.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgECFIAAkJIAJAAIAAEJg");
	this.shape_72.setTransform(364.6,507);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgECFIAAkJIAJAAIAAEJg");
	this.shape_73.setTransform(357.3,507);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ag4BTQgQgOAAgXQAAgZAYgQQAXgOAlgBIAvAAIAAgbQAAgYgPgNQgPgNgcAAQgYAAgRAOQgRANAAATIgKAAQAAgXAUgQQAUgQAcAAQAfAAASAPQARAPABAcIAABYQAAAfAFALIAAACIgLAAQgDgMAAgXQgMASgTAKQgTAKgXAAQgaAAgQgOgAgtAOQgRANAAAUQAAARANAMQAOAMAVAAQAZAAATgMQATgMAKgVIAAgrIgsAAQgnAAgVAOg");
	this.shape_74.setTransform(343.8,510.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AB6BgIAAh5QAAgfgMgPQgNgOgbAAQghAAgVAbQgKAQgCAOIAAB8IgIAAIAAh9QAAgdgMgNQgNgOgbAAQgeAAgTAbQgMARgEATIAAB2IgJAAIAAi7IAJAAIAAAtQAJgYASgMQARgNAWAAQAYAAAPALQAOALAFAXQAHgUAUgMQASgNAXAAQAeAAAQASQAOARAAAiIAAB6g");
	this.shape_75.setTransform(319.2,510.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgsB4QgWgIgLgRQgLgSAAgWIAJAAQAAAfAXARQAYARAkAAQAhAAAVgPQAWgPAAgZQAAgQgIgLQgHgLgQgJQgRgIgggJQgggIgQgJQgRgJgHgMQgIgNAAgRQAAgbAXgRQAXgSAlABQAYAAATAJQATAJALASQALARAAAVIgKAAQAAgdgVgRQgUgTghAAQghAAgUAOQgVAPAAAXQAAAXASAOQASANAoALQApAKATANQAYASAAAeQAAATgKAPQgLAPgUAIQgUAHgYAAQgbAAgVgJg");
	this.shape_76.setTransform(292.8,507.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AuGGtQkfgchvgTQjignidhLQiohPhUiAQgvhFgDg8QgEhJBBgsQAfgWAwgQIBVgZQB2giBtgaQDog4D1glQHShHHaAIQHXAHHQBUQAEABgBAEQgBADgEAAQnohZnxgDQnygEnpBTQjeAmjaA3QiIAjhRAZQg3AQgdAPQguAYgWAiQgwBNBKBtQA3BRBaBBQB3BVC9AyQC2AxDuAbQCUAREVASQGhAbHfgQQGjgPHegvQEQgbDAgZQCIgRBOgjQBzg1AchnQAahdhHhSQg2g+hmgzQishVjlhFQmlh9nAAJQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgEADAAQCBgCBuAHQHRAdGqCuQB8AzAuAZQBfAzAwBAQArA6gDBFQgCBEgvA5Qg3BDhjAfQg+AUh5APQkRAhjpAWQoTAznQAJQhjAChgAAQmoAAl+glg");
	this.shape_77.setTransform(428.6,503.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AzsF8Qj2glibhFQjRhdhWijQgmhGANg0QAMgwA1ghQAmgZBCgTQJ9i9KfgjQKJgjJ6BvIkTg2QFBgHE9BCQE9BCEjCGQDlBpAGCPQADA+goA6QglA2g9AgQgyAchHAPQgrAKhWAKQsyBipmAQQiEADiBAAQpxAAoehSg");
	this.shape_78.setTransform(428.6,503.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7C7C7C").s().p("AKtHMI1ot9QgMgHAHgOQAIgNAMAJIVoN8QANAHgIANQgFAJgGAAQgEAAgFgDg");
	this.shape_79.setTransform(284.3,735.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7C7C7C").s().p("AO3I9Qvan9uipiQgMgIAHgNQAIgNAMAIQOiJiPaH9QANAHgIANQgFAJgHAAQgEAAgEgDg");
	this.shape_80.setTransform(619.7,963.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B3B3B3").s().p("EgpnAbMMAATg3cMBQEA3cIC4BFg");
	this.shape_81.setTransform(469.2,864.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C7C7C").s().p("AADAYIgagaQgKgKAKgLQALgKAKAKIAaAaQALAKgLALQgFAFgGAAQgFAAgFgFg");
	this.shape_82.setTransform(708.4,1016.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").p("EAuqAyUMhdTAAAMAAAhknMBdTAAAg");
	this.shape_83.setTransform(496.5,723);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E6E6").s().p("EgupAyUMAAAhknMBdTAAAMAAABkng");
	this.shape_84.setTransform(496.5,723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},2).wait(5));

	// cashier
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgIBmQgCgCABgDQgBgDACgDQADgCADAAQACAAADACQACADAAADQAAADgCACQgDADgCAAQgDAAgDgDgAgGAvQAAgQAFgKQAEgKAMgLQANgMAFgHQAFgHADgIQACgIAAgKQgBgVgKgMQgLgLgUAAQgSAAgMAMQgMAMAAATIgIAAQABgXAOgOQAPgOAUAAQAXAAANAOQANAOAAAYQAAAQgGANQgHAMgSAQQgTAPAAAbg");
	this.shape_85.setTransform(1328.6,245.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ag3BqIAAgHIAKAAQAMABAIgIQAIgHAGgPIAJgZIg9iYIAJAAIA3CNIABgDIA1iKIAJAAIhECzIgDAIQgLAcgagBQgIABgDgCg");
	this.shape_86.setTransform(1315.4,251.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgtBEQgOgLAAgTQAAgWATgMQAUgLAegBIAmAAIAAgWQAAgUgMgKQgNgKgWAAQgUAAgOAKQgOALAAAQIgHAAQAAgUAQgNQAQgNAXABQAZAAAOAMQAPANAAAWIAABIQAAAZAFAJIAAABIgJAAQgDgKAAgSQgKAPgPAJQgPAHgUAAQgUABgNgMgAgkAMQgPAKAAAQQAAAOALAKQALAKARAAQAVAAAQgKQAPgKAIgRIAAgjIgkAAQgfAAgRAMg");
	this.shape_87.setTransform(1300.5,248.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgqBZQgQgVAAglIAAgCQAAgjAQgVQAPgVAbAAQAQAAAOAIQANAIAIAPIAAhcIAIAAIAADYIgIAAIAAgYQgIAMgNAIQgOAHgQAAQgbAAgPgVgAgkgWQgOATAAAjQAAAhANATQANASAYAAQASAAANgIQAOgJAGgQIAAhHQgNgmgmAAQgXAAgNASg");
	this.shape_88.setTransform(1285,245);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AghBFQgQgJgIgRQgIgRgBgWIAAgGQAAgWAIgRQAJgSAQgJQAPgLASABQATAAAPAJQAQAKAIARQAJASAAAVIAAAGQAAAWgJARQgIASgPAJQgPAKgTAAQgTAAgPgKgAgpgyQgRATAAAeIAAAEQAAATAIAQQAHAQANAJQAOAJARAAQAZgBARgTQAQgUAAgeIAAgEQAAgSgHgRQgIgQgNgIQgOgJgRAAQgZgBgQAVg");
	this.shape_89.setTransform(1269.5,248.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgBBZQgHgJgBgUIAAhtIgcAAIAAgIIAcAAIAAgoIAIAAIAAAoIAiAAIAAAIIgiAAIAABsQAAAQAFAIQAFAIAMAAIAPgCIACAHQgFACgLAAQgRABgGgKg");
	this.shape_90.setTransform(1256.7,246.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgbBFQgPgJgKgSQgIgSAAgVIAAgFQAAgVAIgSQAJgRAPgKQAOgLARABQAaAAAQASQAQASAAAeIAAAIIhxAAIAAAHQgBATAJAQQAHAPAOAKQAOAIAPABQAPgBALgFQALgEAIgLIAFAEQgRAZghgBQgSAAgPgKgAgig2QgPAQgDAaIBqAAIAAgCQAAgPgHgNQgHgOgLgHQgLgIgPABQgVAAgQAQg");
	this.shape_91.setTransform(1238.3,248.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgcBnQgOgIgIgMIAAAYIgHAAIAAjYIAHAAIAABcQAIgPAOgIQANgIAQAAQAbAAAPAVQAQAVAAAjIAAADQAAAkgQAVQgPAVgbAAQgQAAgNgHgAgegeQgOAJgGAUIAABFQAGARAOAIQANAJASAAQAYAAANgSQANgTAAgkQAAgggNgTQgNgSgYAAQgSAAgNAKg");
	this.shape_92.setTransform(1223.4,245);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgBBZQgHgJgBgUIAAhtIgcAAIAAgIIAcAAIAAgoIAIAAIAAAoIAiAAIAAAIIgiAAIAABsQAAAQAFAIQAFAIAMAAIAPgCIACAHQgFACgLAAQgRABgGgKg");
	this.shape_93.setTransform(1203.4,246.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgDBoIAAiYIAHAAIAACYgAgEhaQgDgCAAgDQAAgEADgCQACgCACAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_94.setTransform(1196.1,245.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDBsIAAjXIAHAAIAADXg");
	this.shape_95.setTransform(1183.3,244.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDBsIAAjXIAHAAIAADXg");
	this.shape_96.setTransform(1177.3,244.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgJAXQALgPABgPIAAgTIAHAAIAAAQQAAAWgOAPg");
	this.shape_97.setTransform(1171.9,236.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgBBZQgHgJgBgUIAAhtIgcAAIAAgIIAcAAIAAgoIAIAAIAAAoIAiAAIAAAIIgiAAIAABsQAAAQAFAIQAFAIAMAAIAPgCIACAHQgFACgLAAQgRABgGgKg");
	this.shape_98.setTransform(1165,246.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgtBEQgNgLgBgTQABgWASgMQAUgLAegBIAmAAIAAgWQAAgUgMgKQgNgKgWAAQgUAAgOAKQgOALAAAQIgIAAQAAgUARgNQARgNAWABQAZAAAOAMQAPANABAWIAABIQAAAZADAJIAAABIgJAAQgCgKAAgSQgJAPgQAJQgPAHgUAAQgUABgNgMgAgkAMQgPAKAAAQQAAAOALAKQAMAKAQAAQAVAAAPgKQAQgKAIgRIAAgjIgkAAQgfAAgRAMg");
	this.shape_99.setTransform(1152.7,248.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAvBsIAAhkQAAgXgKgMQgJgLgWAAQgTAAgOANQgPAPgFAUIAABiIgHAAIAAjXIAHAAIAABjQAIgSAOgKQAPgKAQAAQAZgBAMAOQAMAOAAAbIAABkg");
	this.shape_100.setTransform(1137.6,244.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AA6BnIgyiqIgIgXIgGAXIgzCqIgJAAIg4jNIAJAAIArCeIAJAiIAJgiIAxieIAHAAIAxCeIAJAiIAKgiIAqieIAJAAIg4DNg");
	this.shape_101.setTransform(1116.5,245.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgCQADgDACAAQADAAACADQADACAAACQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_102.setTransform(1296.6,215.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("ABkBOIAAhiQAAgZgKgMQgLgNgVABQgcAAgQAWQgKAMgBANIAABkIgGAAIAAhlQAAgYgKgLQgKgLgWAAQgZAAgQAWQgKAOgDAPIAABgIgHAAIAAiYIAHAAIAAAkQAIgTAOgJQAPgLARAAQAUAAAMAJQAMAIADAUQAHgRAPgKQAPgKATAAQAZAAAMAOQAMAOAAAcIAABjg");
	this.shape_103.setTransform(1280.8,208.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AguBEQgNgMAAgSQABgWASgMQAUgLAegBIAmAAIAAgWQAAgTgMgLQgNgLgWAAQgUAAgOALQgOALAAAPIgIAAQAAgSARgNQARgNAWgBQAZAAAOANQAPAMABAXIAABIQAAAZADAJIAAACIgJAAQgCgKAAgTQgKAPgPAJQgPAIgUAAQgUAAgOgMgAgkAMQgPALAAAPQAAAOALAKQALAKARAAQAVAAAPgKQAQgJAIgSIAAgjIgkAAQgfAAgRAMg");
	this.shape_104.setTransform(1259.8,208.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgqBZQgQgVAAglIAAgCQAAgkAQgUQAPgVAbAAQAQAAAOAIQANAIAIAPIAAhcIAIAAIAADYIgIAAIAAgZQgIAOgNAHQgOAHgQAAQgbAAgPgVgAgkgVQgOASAAAjQAAAhANASQANATAYAAQASAAANgIQAOgIAGgRIAAhGQgNgngmAAQgXAAgNATg");
	this.shape_105.setTransform(1244.3,205.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ABJBnIgXg+IhjAAIgXA+IgJAAIBNjNIAJAAIBNDNgAAwAiIgwh/IgvB/IBfAAg");
	this.shape_106.setTransform(1228.1,205.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgJAZQAKgPABgPIAAgXIAIAAIAAAUQgBAWgNAPg");
	this.shape_107.setTransform(1209.5,216.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgaBmQgNgGgJgNIAFgFQAJALALAGQAKAGANAAQAYAAANgOQANgOABgaIAAgYQgIANgOAHQgNAHgQAAQgbAAgPgVQgQgVAAgkIAAgCQAAgkAQgVQAPgVAbAAQAQAAANAIQAOAIAIAPIAAgcIAIAAIAACWQAAAegQARQgQARgaAAQgPAAgMgHgAglhRQgNASAAAkQAAAgANATQANASAYAAQASAAAOgIQANgKAGgQIAAhEQgNgogmAAQgYAAgNATg");
	this.shape_108.setTransform(1198.9,211.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAvBOIAAhjQAAgYgKgMQgJgMgWAAQgTAAgOAOQgPAOgFAWIAABhIgHAAIAAiYIAHAAIAAAkQAIgSAOgKQAPgLAQAAQAZAAAMAOQAMAOAAAcIAABjg");
	this.shape_109.setTransform(1183.5,208.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDBoIAAiYIAHAAIAACYgAgFhaQgCgCAAgDQAAgEACgCQACgCADAAQADAAACACQADACAAAEQAAADgDACQgCACgDAAQgDAAgCgCg");
	this.shape_110.setTransform(1172.6,205.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAvBOIAAhjQAAgYgKgMQgJgMgWAAQgTAAgOAOQgPAOgFAWIAABhIgHAAIAAiYIAHAAIAAAkQAIgSAOgKQAPgLAQAAQAZAAAMAOQAMAOAAAcIAABjg");
	this.shape_111.setTransform(1161.7,208.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AghBOIAAiYIAIAAIAAAgQAFgQANgJQALgKATAAQAHAAAEACIgBAHIgKgBQgTAAgMAMQgOANgDAXIAABjg");
	this.shape_112.setTransform(1150,208.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgiBGQgPgKgIgRQgJgRAAgWIAAgGQAAgWAJgRQAIgSAPgKQAQgJASgBQATAAAPAKQAQAJAJASQAIASAAAVIAAAGQAAAWgIASQgJARgPAKQgPAKgUAAQgSAAgQgKgAgpgzQgRAUAAAfIAAADQAAATAIAQQAHAQANAJQAOAIAQABQAaAAARgUQAQgTAAggIAAgDQAAgSgHgQQgIgQgNgKQgOgJgRAAQgZABgQATg");
	this.shape_113.setTransform(1136.2,208.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("ABYBnIAAjCIhVDCIgFAAIhVjAIAADAIgIAAIAAjNIALAAIBUDCIBVjCIALAAIAADNg");
	this.shape_114.setTransform(1115.8,205.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("Aq2MFQm4g7kVjNQiQhshNiJQhXicAXihQAWifBxiKQBmh+CZhSQCjhWDogzQCDgcEagmQHDg9FXAuQGvA5EtDiQCYByBfCEQB3CjACCcQABAogOBDQgQBOgCAdQgIBjA4BWQAtBGBTA8QA+AtBhAwQABAAAAAAQABABAAABQAAAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQjlgrjYhXQgEgBABgEQAAgBABgBQAAAAABgBQAAAAABAAQABAAABABQB5AxB9AjQA9ARAvAKIAkALQAVAGAKAAQANAIgIgJIgFABIgFgEIgMgGQhXgug6gtQhLg7gohDQgphEgChKQgBgqAQhLQARhRABgjQAFjIjPjjQkEkfmuhpQlkhXm+ApQjPATkHAvQjvAqiUA3QjIBKiICEQicCWghC/QggC8B1CyQBlCYC2BtQE+C+HgAfQGoAbHMhCQGpg9G3iJQAEAAABADQABAEgEABQnnCYn2A5QkBAdjRAFIhLABQjRAAi4gYg");
	this.shape_115.setTransform(1220.8,219.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("Ar4L5QlCg1juiOQiYhahgh5QhuiJgRiYQgRikBeiiQBXiWCZhjQCDhVC3g2QCCgmDRgjQE9g2DjgNQEogRD3AqQEbAwDpCDQD+COCVDYQB7CzgNCaQgCAdgQBPQgOBEABAoQAGDWFNChQjngrjWhXIgagRQqkDUrHAbQhRAEhNAAQj1AAjGghg");
	this.shape_116.setTransform(1220.8,219.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7C7C7C").s().p("ACzAhQixgii5gCQgOAAAAgPQAAgPAOAAQC8ACC2AjQAOADgEAOQgDANgLAAIgEgBg");
	this.shape_117.setTransform(1137.9,514.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7C7C7C").s().p("AgKARQgEgFAAgGIAAgLQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAGIAAALQAAAGgFAFQgEAEgGAAIAAAAQgFAAgFgEg");
	this.shape_118.setTransform(1163.5,520.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7C7C7C").s().p("ARLBBQxHiKxOA2QgPABAAgPQAAgPAPgBQROg2RHCKQAPACAAAPQAAANgMAAIgDAAg");
	this.shape_119.setTransform(1656,581.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7C7C7C").s().p("APRClQACgggygPIhLgOIuYiyIjlgsQiHgYhmgFQkPgOi1BuQgMAHgIgNQgHgNAMgHQDBh2EiASQBrAHCSAaQBTAQChAhIOFCuQA8AMAWAKQAuAWgDAqQAAAPgPAAQgPAAAAgPg");
	this.shape_120.setTransform(1279,403.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CCCCCC").s().p("AvghBQCehjDqAAQCaABEKAzIRJDUQAgAHAWAPQAaASgFAZg");
	this.shape_121.setTransform(1279.1,403.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7C7C7C").s().p("AMxPiQsTlbtXhZQgHgBgEgFQgEgGABgHQB6rtBBsBQABgIAFgEQAGgFAHACQKZDfK7BdQAOACAAAPQAAAPgOgCQq1hcqWjbQhALwh4LgQGkAtGYBtQGhBvGLCuQANAGgHANQgGAJgIAAIgHgCg");
	this.shape_122.setTransform(1253,493.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CCCCCC").s().p("AARK5QmfhvmqgsQB7rzBAr/QKcDgK8BcIBeZtQmIiumghug");
	this.shape_123.setTransform(1253,493.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7C7C7C").s().p("AvTOXQgOAAAAgPQAAgPAOAAQJgAHJKhLQEQgiEQg1QB6gXCHgeQAYgGAJgJQAJgLgEgYQgFgcgOgZQgdgyg3gaQg0gZhGADQhTAIgrABQgsACgigXQgbgSgfgpQiWjIitiNQhShDhvhDQhEgqiIhKQhzhAhHgzQhghHg9hQQg+hTgXhXQgJghgEg6QgEhEgEgYQgHglgOgVQgSgbghgDQgZgDgpAKQgsALgUAEIj4AzICfUrIAMBFQAIAwACAgQAEBgg2AhQgNAIgHgNQgIgNANgHQAigVAAg8IgLhdIir2GQAAgFAEgEQADgFAEgBIDUgrQAdgFA8gQQA2gMAkAAQBggBAQCGQACAPADA6QADAtAGAbQAPBGArBEQBOB7CiBmQAWAOD1CNQChBcBgBOQB8BmBnB2QAxA5ApA5IAdAlQASAWARAJQAWAMAegBQASgBAjgGQCjgVBZBDQAtAjAVAxQAWAzgKA2QgBAJgJACQvDDdvaAAIhmgBg");
	this.shape_124.setTransform(1438.4,505.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AvUOIIAyiDQAzgZgNhnIiy3BIFbhHQAsgIAUAFQAyALAQBEQAHAcAGBhQAGBrBDBmQA6BaBhBLQBIA3B3BBIDFBuQCdBdCJB8QCIB8BsCUQAWAeANANQAVAWAXAJQAVAHAcgCQALAAAogGQCFgUBWAxQAzAdAbAzQAdA2gMA1Qu7DdvTAAIhxgBg");
	this.shape_125.setTransform(1438.5,505.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7C7C7C").s().p("AgNAAQAAgOANAAQAOAAAAAOQAAAPgOAAQgNAAAAgPg");
	this.shape_126.setTransform(1641.7,395);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7C7C7C").s().p("AJwMjQgOgBAAgPQAAgQAOACQAfAEgPg+IgZhJIg1iNQg1iJg9iKQg+iMgzhiQhCiAhDhlQiejvjOiLQjuifkCAGQgOAAAAgPQAAgPAOAAQB7gDB7AjQB1AiBtBCQC6BvCZDHQB8CgBzDqQBnDSBkECIAaA/QAZA9ANAtQAmCFhAAAIgJgBg");
	this.shape_127.setTransform(1685.1,460.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7C7C7C").s().p("AhrA2QgDgrAagjQAbgkArgGQAogGAkAaQAjAZALAoQAEAOgPAEQgOAEgEgOQgIgcgXgSQgYgUgcACQgiACgVAdQgVAaADAiQABAOgPAAQgPAAgBgOg");
	this.shape_128.setTransform(1564.7,309.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7C7C7C").s().p("AhiBBQgLgoARglQASgnAmgQQAlgPAoAPQAnAPAVAjQAGANgMAHQgNAHgHgMQgRgdgdgIQgbgIgZALQgbALgNAYQgPAZAJAhQAEAOgPAEIgFABQgKAAgDgLg");
	this.shape_129.setTransform(1493.5,321.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7C7C7C").s().p("AgNAAQAAgOANAAQAOAAAAAOQAAAPgOAAQgNAAAAgPg");
	this.shape_130.setTransform(1487.6,322.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7C7C7C").s().p("AgFCoQhYhxh+g7QgJABgEgIIgZgKQgOgFAEgPQAEgOAOAFIAgAOIHSiHQAKgDAGAIQAGAIgFAJQhmCviUCOQgFAEgGABQgGAAgEgFgAixgQQBrA5BMBfQB8h6BbiSg");
	this.shape_131.setTransform(1540,369);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7C7C7C").s().p("AhxQYQiGgPh9hEQh2hAhihnQjSjeg7k9Qg7k2BqkjQBsknECizQEKi4EzAXQAOABAAAPQAAAPgOgBQimgNiiA2QigA0iEBsQiBBqhWCUQhUCQgiCpQg7EhBbEaQBeElDiCzQByBbCHAoQCMApCMgVQCVgVCNhRQCEhNBph3QC/jZA3klQA3knhnkLQhjkDjgi2Qjfi0kSguQgOgCAEgOQAEgPAOACQFFA3D5DsQD7DuA/FCQA6EnhpEkQhrEpjsC2QiABkiSAwQh2AmhyAAQgmAAglgEg");
	this.shape_132.setTransform(1538,312.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7C7C7C").s().p("AQ+PWQgIgNAMgJQAFgDgCgZIgDgeQgEgmgLg5QgThjgQg2QgMgmgZhAIgmhlQgtiHgiiNQhCkRgTkWQgJiXADiIIAGgxQADgkgEgKQgDgGgJgKIgPgPIiDiaQheEYgXEZQgLCKAFCKIAGBHQAEAtAAAaQAAAXgDANQgFATgNAMQgRAPgcADQgJABgngCIifgEQiFgDilABQkxAAlMATQgFABgEgEQgFgDgBgFQhcmaAdmhIirgqQgPBagWDAQgpFigpHLIgcE4QgOCzgDCGQAAAPgPAAQgPAAAAgPQABhAAGhVIALiVQAalaAwnYQAVjSAMhoQATi0AXiFQABgFAGgEQAGgCAGABIDGAxQAFABADAFQAEAEgBAFQgeGdBaGVQEugQERgCQCogBB4ACIDbAFIAoABQASgDANgSQAQgXgDgtQgGgygCgWQgDg7AAhFQAAiKAQiJQAgkCBWj2QADgIAIgCQAJgDAFAGIBMBaQAQASAjAlQAgAiAOAZQAHALABAIQABAFgBATQgEBGAABOQAACXAPCaQAeE4BZEsQAOAwA5CeQAuB+ARBRQAWBmAGA7QADAhgBAMQgCAcgPALQgFADgEAAQgGAAgEgHg");
	this.shape_133.setTransform(1558.9,479.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CCCCCC").s().p("AxSPOQACjHBBqhQBAqaAjjJIDHAxQghGlBfGeQItghItAVQAWABANgDQAUgDAKgLQAMgMACgUQACgNgCgYQgYj7Afj9QAgj9BUjuICyDRQgUFkA7FiQA8FiCGFKQASArAZCIQAdCZgWAMg");
	this.shape_134.setTransform(1558.8,479.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").p("EA0cAnVMho3AAAMAAAhOpMBo3AAAg");
	this.shape_135.setTransform(1448.9,365.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("Eg0bAnVMAAAhOpMBo3AAAMAAABOpg");
	this.shape_136.setTransform(1448.9,365.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CCCCCC").s().p("AhWANQgEgOAOgCICRgVQAOgCAEAPQAEANgOACIiRAVIgEAAQgLAAgDgMg");
	this.shape_137.setTransform(1459.5,299.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).wait(6));

	// birds
	this.instance_2 = new lib.birds();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-311,809.7,1,1,0,0,0,250,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7));

	// Layer 12
	this.instance_3 = new lib.cloud_symbol();
	this.instance_3.parent = this;
	this.instance_3.setTransform(532.9,239.4,1,1,0,0,0,-955,-27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

	// city bg
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CCCCCC").p("AE8VgIp3AQMADYgrLIErOUg");
	this.shape_138.setTransform(605.1,940.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CCCCCC").s().p("Ahj1lIErOUIB0cnIp3AQg");
	this.shape_139.setTransform(605.1,941.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#CCCCCC").p("AINWIIzxgRMAF/gr9IRKBCg");
	this.shape_140.setTransform(521,938.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7C7C7C").s().p("ArkV3MAF/gr9IRKBCMgDYArLg");
	this.shape_141.setTransform(521,938.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#CCCCCC").p("ARyJnIgRUDMgjHg7UIMwIlg");
	this.shape_142.setTransform(1806,617.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCCCCC").s().p("Axr9qIMwImIWoesIgRUCg");
	this.shape_143.setTransform(1806.5,617);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#CCCCCC").p("EAnsAIVMAARAqsMg7lAAAMgUThUkMAsfgRcg");
	this.shape_144.setTransform(1664.1,753.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7C7C7C").s().p("EgToAzAMgUThUjMAsegRcMAjJA7UMAAQAqrg");
	this.shape_145.setTransform(1664.1,753.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CCCCCC").p("EAKbgxvIJoc5MgJoBGxI+cAAg");
	this.shape_146.setTransform(383.2,758.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCCCCC").s().p("EgUCAx1MAechjpIJoc4MgJoBGxg");
	this.shape_147.setTransform(383.3,759.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CCCCCC").p("EgjDAynMgAGgqpMAezg6sMAneABgMgefBj+g");
	this.shape_148.setTransform(224.6,754.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7C7C7C").s().p("EgjCAynMgAGgqpMAezg6tMAneABgMgefBj+g");
	this.shape_149.setTransform(224.5,754.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#FFFFFF","#000000"],[0,1],-41.7,167.8,334.9,-1344.7).s().p("EiV/BUUMAAAionMEr/AAAMAAACong");
	this.shape_150.setTransform(960,539.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,540,2837.3,1081);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/NewPatternSwatch1.png", id:"NewPatternSwatch1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;