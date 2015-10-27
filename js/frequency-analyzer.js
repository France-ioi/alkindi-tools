function frequency_analyzer(iTextInput) {
    this.mTextInput = iTextInput;
    this.mLimitRef = 20;
    this.mMapLang = new Map();
    this.mOptions = null;
    this.mObjects = null;
    this.mKeys = null;
    this.mData = null;
    this.mLastAlpha = true;
    this.mSub = null;
    this.mArrayAlphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.mArrayAlphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.mArrayDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.mArrayAccentLower = ['â', 'ã', 'ä', 'à', 'á', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý'];
    this.mArrayAccentUpper = ['Â', 'Ã', 'Ä', 'À', 'Á', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý'];
    this.mArrayPunct = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '\\', '-', '.', '/' , ':', ';' , '<',  '=', '>', '?' , '@' , '_', '`', '{', '|', '}', '~', '^' ,'[', ']'];
    this.mTokens = null;
    this.mFrqAlpha = true;
    this.mArrayRef = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.mMinifyInput = false;
    this.mMinifyFrq = false;
    this.mMinifyRef = false;
    this.mMinifySub = false;
    this.mMinifyOutput = false;


    this.init = function() {
	this.initRefLang();
	this.changeFrqRefLanguage();
	this.changeAlphaFont();
	this.applySectionButtonInput();
	this.applySectionButtonFrq();
	this.applySectionButtonRef();
	this.applySectionButtonSub();
	this.applySectionButtonOutput();
	$('textarea#textarea-input').val(this.mTextInput);

	var that = this;

	$('#apply-input').click(function() {
	    that.clickApplyInput();
	});

	$('#frq-alpha').change(function() {
	    that.changeFrq();
	});

	$('#frq-fqz').change(function() {
	    that.changeFrq();
	});

	$('#frq-ref-language').change(function() {
	    that.changeFrqRefLanguage();
	});

	$('#alpha-font').change(function() {
	    that.changeAlphaFont();
	});

	$('#sub-generate').click(function() {
	    that.clickSubGenerate();
	});

	$('#section-button-input').click(function() {
	    that.clickSectionButtonInput();
	});

	$('#section-button-frq').click(function() {
	    that.clickSectionButtonFrq();
	});

	$('#section-button-ref').click(function() {
	    that.clickSectionButtonRef();
	});

	$('#section-button-sub').click(function() {
	    that.clickSectionButtonSub();
	});

	$('#section-button-output').click(function() {
	    that.clickSectionButtonOutput();
	});

    }



    this.generateChartsContent = function(iFont, iKeys, iData) {
	var lContent = {
	    legend: {
		enabled: false
	    },
            chart: {
		type: 'column'
            },
            title: {
		text: ''
            },
            xAxis: {
		categories: iKeys,
		crosshair: true,
		labels: {
		    style: {
			fontFamily: iFont,
			fontSize: '16px'
		    }
		}
            },
	    yAxis: {
		title: {
		    text: ''
		}
	    },
            tooltip: {
		headerFormat: '<span><span style="font-weight: bold; font-family: ' + iFont+ '; font-size:16px;">{point.key}</span>:&nbsp;{point.y:1f}&nbsp;%</span><table>',
		pointFormat: '',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
            },
            series: [{
		name: 'fréquence',
		data: iData
            }],
	    exporting: {
		enabled: false
	    },
	    credits: {
		enabled: false
	    }
	};
	return lContent;
    }



    this.initRefLang = function() {
	// src https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais
	var lFr = new Map();
	lFr.set('a', 7.637);
	lFr.set('b', 0.901);
	lFr.set('c', 3.260);
	lFr.set('d', 3.669);
	lFr.set('e', 14.715);
	lFr.set('f', 1.066);
	lFr.set('g', 0.866);
	lFr.set('h', 0.737);
	lFr.set('i', 7.529);
	lFr.set('j', 0.545);
	lFr.set('k', 0.049);
	lFr.set('l', 5.456);
	lFr.set('m', 2.968);
	lFr.set('n', 7.095);
	lFr.set('o', 5.378);
	lFr.set('p', 3.021);
	lFr.set('q', 1.362);
	lFr.set('r', 6.553);
	lFr.set('s', 7.948);
	lFr.set('t', 7.244);
	lFr.set('u', 6.311);
	lFr.set('v', 1.628);
	lFr.set('w', 0.114);
	lFr.set('x', 0.387);
	lFr.set('y', 0.308);
	lFr.set('z', 0.136);

	this.mMapLang.set("fr", lFr);

	// src: https://en.wikipedia.org/wiki/Letter_frequency
	var lEn = new Map();
	lEn.set('a', 11.602);
	lEn.set('b', 4.702);
	lEn.set('c', 3.511);
	lEn.set('d', 2.670);
	lEn.set('e', 2.007);
	lEn.set('f', 3.779);
	lEn.set('g', 1.950);
	lEn.set('h', 7.232);
	lEn.set('i', 6.286);
	lEn.set('j', 0.597);
	lEn.set('k', 0.590);
	lEn.set('l', 2.705);
	lEn.set('m', 4.383);
	lEn.set('n', 2.365);
	lEn.set('o', 6.264);
	lEn.set('p', 2.545);
	lEn.set('q', 0.173);
	lEn.set('r', 1.653);
	lEn.set('s', 7.755);
	lEn.set('t', 16.671);
	lEn.set('u', 1.487);
	lEn.set('v', 0.649);
	lEn.set('w', 6.753);
	lEn.set('x', 0.017);
	lEn.set('y', 1.620);
	lEn.set('z', 0.034);

	this.mMapLang.set("en", lEn);
    }

    this.pushKeyValue = function(iRes, iArray) {
	for (var i = 0; i < iArray.length; ++i) {
	    var lValue = iArray[i];
	    iRes.push({key: lValue, value : lValue});
	}
    }

    this.getMapId = function() {
	var lRes = new Array();
	this.pushKeyValue(lRes, this.mArrayAlphaLower);
	if (this.mOptions.withUpperCase) {
	    this.pushKeyValue(lRes, this.mArrayAlphaUpper);
	}
	if (this.mOptions.withAccent) {
	    this.pushKeyValue(lRes, this.mArrayAccentLower);
	    if (this.mOptions.withUpperCase) {
		this.pushKeyValue(lRes, this.mArrayAccentUpper);
	    }
	}
	if (this.mOptions.withDigit) {
	    this.pushKeyValue(lRes, this.mArrayDigit);
	}

	if (this.mOptions.withPunctuation) {
	    this.pushKeyValue(lRes, this.mArrayPunct);
	}
	return lRes;
    }

    this.accentReplace = function(str) {
	str = str.replace(/[ÂÃÄÀÁÅ]/gi, "A");
	str = str.replace(/[Ç]/gi,      "C");
	str = str.replace(/[ÈÉÊË]/gi,   "E");
	str = str.replace(/[ÌÍÎÏ]/gi,   "I");
	str = str.replace(/[Ñ]/gi,      "N");
	str = str.replace(/[ÒÓÔÕÖØ]/gi, "O");
	str = str.replace(/[ÙÚÛÜ]/gi,   "U");
	str = str.replace(/[Ý]/gi,      "Y");
	str = str.replace(/[âãäàáå]/gi, "a");
	str = str.replace(/[ç]/gi,      "c");
	str = str.replace(/[èéêë]/gi,   "e");
	str = str.replace(/[ìíîï]/gi,   "i");
	str = str.replace(/[ñ]/gi,      "n");
	str = str.replace(/[òóôõöø]/gi, "o");
	str = str.replace(/[ùúûü]/gi,   "u");
	str = str.replace(/[ý]/gi,      "y");
	return str;
    }

    this.textToTokens = function(iText) {
	var lWithSpace       = false;
	var lWithPunctuation = false;
	var lWithAccent      = false;
	var lWithDigit       = false;
	var lWithUpperCase   = false;

	if (this.mOptions != null) {
	    lWithSpace       = this.mOptions.withSpace;
	    lWithPunctuation = this.mOptions.withPunctuation;
	    lWithAccent      = this.mOptions.withAccent;
	    lWithDigit       = this.mOptions.withDigit;
	    lWithUpperCase   = this.mOptions.withUpperCase;
	}

	var lTokens = new Array();
	for (var i = 0, len = iText.length; i < len; i++) {
	    var lRef = iText[i];
	    var lValue = lRef;
	    var lMute = false;
	    var lWithAccent = false;
	    var lFromUpperCase = false;

	    if (!lWithSpace && lRef.match('[ \t]')) {
		lMute = true;
	    }

	    if (!lWithPunctuation && lRef.match('[\u2000-\u206F\u2E00-\u2E7F\\\'!"#$%&()*+,\-.\/:;<=>?@_`{|}~^\\[\\]]')) {
		lMute = true;
	    }

	    if (!lWithAccent) {
		lValue = this.accentReplace(lValue);
		if (lValue !== lRef) {
		    lWithAccent = true;
		}
	    }

	    if (!lWithDigit && lRef.match('[0-9]')) {
		lMute = true;
	    }

	    if (!lWithUpperCase) {
		lValue = lValue.toLowerCase();
		if (lValue !== lRef) {
		    lFromUpperCase = true;
		}
	    }

	    lTokens.push({ref: lRef, value: lValue, output: lValue, mute: lMute, withAccent: lWithAccent, fromUpperCase: lFromUpperCase});
	}
	var lFont = this.getAlphaFont();
	return {font: lFont, tokens: lTokens};
    }



    this.tokensToText = function(iTokens) {
	var lStr = "";
	var lTokens = iTokens.tokens;

	for (var i = 0, len = lTokens.length; i < len; i++) {
	    var lToken = lTokens[i];

	    var lValue = lToken.output;
	    if (lToken.fromUpperCase) {
		lValue = lValue.toUpperCase();
	    }
	    lStr += lValue;

	}
	return lStr;
    }

    this.computeMapFrq = function(iTokens) {
	var lMap = new Map();
	var lSize = 0;
	var lTokens = iTokens.tokens;

	for (var i = 0, len = lTokens.length; i < len; i++) {
	    var lToken = lTokens[i];

	    var lValue = lToken.value;
	    var lMute = lToken.mute;

	    if (!lMute) {
		if (lMap.get(lValue) === undefined) {
		    lMap.set(lValue, 0);
		}
		lMap.set(lValue, lMap.get(lValue) + 1);
		++lSize;
	    }
	}
	return {size: lSize, map: lMap};
    }



    this.sortFrq = function(iObjects, iWithKey) {
	iObjects.sort(function (i1, i2) {
	    var lItem1 = iWithKey ? i1.key : i1.value;
	    var lItem2 = iWithKey ? i2.key : i2.value;
	    var lRes  = iWithKey ? 1 : -1;

	    if (lItem1 < lItem2) {
		return -lRes;
	    } else if (lItem1 > lItem2) {
		return lRes;
	    }
	    return 0;
	});
    }

    this.computeObjects = function(iMapFrq) {
	this.mKeys = new Array();
	this.mData = new Array();
	this.mObjects = new Array();
	var lSize = iMapFrq.size;

	this.mObjects = [];
	var that = this;
	iMapFrq.map.forEach(function(value, key) {
	    var lV = (value / lSize * 100);
	    var lVal = lV.toFixed(2) / 1;
	    that.mObjects.push({key: key, value: lVal});
	});
    }

    this.clickApplyInput = function() {
	var lTextInput       = $('textarea#textarea-input').val();

	var lWithSpace       = document.getElementById('optionWithSpace').checked;
	var lWithPunctuation = document.getElementById('optionWithPunctuation').checked;
	var lWithAccent      = document.getElementById('optionWithAccent').checked;
	var lWithDigit       = document.getElementById('optionWithDigit').checked;
	var lWithUpperCase   = document.getElementById('optionWithUpperCase').checked;

	this.mOptions = {
	    withSpace: lWithSpace,
	    withPunctuation: lWithPunctuation,
	    withAccent: lWithAccent,
	    withDigit: lWithDigit,
	    withUpperCase: lWithUpperCase
	};

	$('#root').addClass('apply');

	this.mTokens = this.textToTokens(lTextInput);
	var lMapFrq = this.computeMapFrq(this.mTokens);
	var lFont = this.mTokens.font;
	this.computeObjects(lMapFrq);
	this.mLastAlpha = $('input[name="frq"]:checked').val() === "alpha";
	this.updateChartText(lFont);
	var lMapId = this.getMapId();
	this.updateSub(lMapId, lFont);
	this.displayOutput(this.mTokens);
    }

    this.updateChartText = function(iFont) {
	if (this.mObjects !== undefined &&
	    this.mObjects != null) {
	    this.sortFrq(this.mObjects, this.mLastAlpha);

	    this.mKeys = [];
	    this.mData = [];
	    for (var i = 0, len = this.mObjects.length; i < len && i < this.mLimitRef; i++) {
		var lItem = this.mObjects[i];
		this.mKeys.push(lItem.key);
		this.mData.push(lItem.value);
	    }
	    for (var i = this.mObjects.length; i < this.mLimitRef; ++i) {
		this.mKeys.push("");
		this.mData.push(0);
	    }
	}
	var lContent = this.generateChartsContent(iFont, this.mKeys, this.mData);
	$('#chart-text').highcharts(lContent);
    }

    this.changeFrq = function() {
	var lFrqAlpha = $('input[name="frq"]:checked').val() === "alpha";
	if (this.mLastAlpha != lFrqAlpha) {
	    this.mLastAlpha = lFrqAlpha;
	    this.updateChartText(this.mTokens.font);
	}
    }

    this.changeFrqRefLanguage = function() {
	var lKeys = new Array();
	var lData = new Array();
	var lLang = $('#frq-ref-language').val();

	var lObjects = new Array();
	var lMap = this.mMapLang.get(lLang);
	lMap.forEach(function (value, key) {
	    lObjects.push({key: key, value: value});
	});

	this.sortFrq(lObjects, false);


	for (var i = 0, len = lObjects.length; i < this.mLimitRef; i++) {
	    var lItem = lObjects[i];

	    lKeys.push(lItem.key);
	    lData.push(lItem.value);
	}

	var lContent = this.generateChartsContent('Fréquence', lKeys, lData);
	$('#chart-ref').highcharts(lContent);
    }

    this.generateDragContainer = function(iMap, iFontKey, iPaper, iDragAndDrop, iCx, iCy, iSize, f) {
	dragAndDropContainer = iDragAndDrop.addContainer({
	    ident : 'seq',
	    cx : iCx,
	    cy : iCy,
	    widthPlace : 25,
	    heightPlace : 25,
	    nbPlaces : iSize,
	    dropMode : 'swap'
	});

	var iPos = 0;
	for (var i = 0; i < iMap.length; i++) {
	    var lItem = iMap[i];
	    var lKey = lItem.key;
	    if (f(lKey)) {
		var lValue = lItem.value;

		var u = iPaper.text(17 + iPos * 25, iCy - 25, lKey).attr({'font-family' : iFontKey, 'font-size': 18, 'font-weight': 'bold'});

		var c = iPaper.rect(-25/2,-25/2,25,25).attr('fill', 'white');
		var t = iPaper.text(0, 0, lValue).attr({'font-size': 14, 'font-weight': 'bold'});
		dragAndDropContainer.createDraggable(iPos + 1, iPos, [c,t]);
		this.mSub.push(lValue);
		++iPos;
	    }
	}
	return dragAndDropContainer;
    }

    this.computeHeight = function() {
	var lInc = 90;
	var lRes = 100;

	if (this.mOptions.withSpace) {
	}
	if (this.mOptions.withPunctuation) {
	    lRes += lInc;
	}
	if (this.mOptions.withAccent) {
	    lRes += lInc;
	}
	if (this.mOptions.withDigit) {
	    lRes += lInc;
	}
	if (this.mOptions.withUpperCase) {
	    lRes += lInc;
	    if (this.mOptions.withAccent) {
		lRes += lInc;
	    }
	}
	return lRes;
    }

    this.updateSub = function(iMap, iFontKey) {
	var that = this;
	$('#sub').empty();
	var lHeight = this.computeHeight();
	var lSubElement = document.getElementById('sub');
	var lPaper = Raphael(lSubElement, 800, lHeight);

	var lDragAndDrop = DragAndDropSystem({
	    paper : lPaper,
	    actionIfDropped : function(srcCont, srcPos, dstCont, dstPos, type) {
		if (dstCont == null) {
		    return false;
		}
		return true;
	    },
	    drop: function(srcCont, srcPos, dstCont, dstPos, type) {
		that.generateNewSub(srcCont, srcPos, dstCont, dstPos, type);
	    }
	});
	this.mSub = new Array();
	var lCy = 80;
	var lCxAlpha = 330;
	var lCxDigit = 130;
	var lCxAccent = 342;
	var lCxPunct = 392;
	var lCyInc = 80;
	this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
				 lCxAlpha, lCy, that.mArrayAlphaLower.length,
				 function(c) {
				     return that.mArrayAlphaLower.indexOf(c) >= 0;
				 });
	lCy += lCyInc;

	if (this.mOptions.withUpperCase) {
	    this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
				       lCxAlpha, lCy, that.mArrayAlphaUpper.length,
				       function(c) {
					   return that.mArrayAlphaUpper.indexOf(c) >= 0;
				       });
	    lCy += lCyInc;
	}

	if (this.mOptions.withAccent) {
	    this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
				       lCxAccent, lCy, that.mArrayAccentLower.length,
				       function(c) {
					   return that.mArrayAccentLower.indexOf(c) >= 0;
				       });
	    lCy += lCyInc;
	}

	if (this.mOptions.withUpperCase) {
	    if (this.mOptions.withAccent) {
		this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
					   lCxAccent, lCy, that.mArrayAccentUpper.length,
					   function(c) {
					       return that.mArrayAccentUpper.indexOf(c) >= 0;
					   });
		lCy += lCyInc;
	    }
	}

	if (this.mOptions.withDigit) {
	    this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
				       lCxDigit, lCy, that.mArrayDigit.length,
				       function(c) {
					   return that.mArrayDigit.indexOf(c) >= 0;
				       });
	    lCy += lCyInc;
	}

	if (this.mOptions.withPunctuation) {
	    this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
				       lCxPunct, lCy, that.mArrayPunct.length,
				       function(c) {
					   return that.mArrayPunct.indexOf(c) >= 0;
				       });
	    lCy += lCyInc;
	}

	if (this.mOptions.withSpace) {
	}

    }

    this.generateNewSub = function(srcCont, srcPos, dstCont, dstPos, type) {
	var l = this.mSub[srcPos];
	this.mSub[srcPos] = this.mSub[dstPos];
	this.mSub[dstPos] = l;

	var lSub = this.mSub;
	var lMap = new Array();

	for (var i = 0; i < this.mSub.length; ++i) {
	    var lKey = this.mArrayRef[i];
	    var lValue = this.mSub[i];
	    lMap.push({key: lKey, value: lValue});
	}

	this.updateTokensSub(this.mTokens, lMap);
	this.displayOutput(this.mTokens);
    }

    this.updateTokensSub = function(iTokens, iMap) {
	if (iTokens != null) {
	    var lTokens = iTokens.tokens;
	    var lMap = new Map();
	    for (var i = 0; i < iMap.length; ++i) {
		lMap.set(iMap[i].key, iMap[i].value);
	    }
	    for (var i = 0, len = lTokens.length; i < len; i++) {
		var lToken = lTokens[i];

		var lValue = lToken.value;
		var lSub = lMap.get(lValue);
		if (lSub !== undefined) {
		    lToken.output = lSub;
		}
	    }
	}
    }

    this.displayOutput = function(iTokens) {
	var lTextOutput = this.tokensToText(iTokens);
	$('textarea#textarea-output').val(lTextOutput);
    }

    this.getAlphaFont = function() {
	var lFont = $('#alpha-font option:selected').val();
	return lFont;
    }

    this.changeAlphaFont = function() {
	var lFont = this.getAlphaFont();

	if (lFont === 'alien') {
	    $('textarea#textarea-input').css('font-family', "alien");
	} else {
	    $('textarea#textarea-input').css('font-family', "inherit");
	}
    }

    this.clickSubGenerate = function() {
	this.updateSubFromRef();
    }

    this.updateSubFromRef = function() {
	var lFont = this.mTokens.font;

	var lLang = $('#frq-ref-language').val();

	var lMapRef = this.mMapLang.get(lLang);
	var lRef = new Array();
	lMapRef.forEach(function (value, key) {
	    lRef.push({key: key, value: value});
	});
	this.sortFrq(lRef, false);

	var lMapFrq = this.computeMapFrq(this.mTokens);
	var lFrq = new Array();
	lMapFrq.map.forEach(function (value, key) {
	    lFrq.push({key: key, value: value});
	});
	this.sortFrq(lFrq, false);

	var lMap = new Array();
	this.mSub = new Array();
	var lMarked = new Array();
	this.mArrayRef = new Array();
	for (var i = 0; i < lRef.length; ++i) {
	    var lKey = this.getNextAlphaFrom(this.mArrayRef);
	    var lValue = lRef[i].key;
	    if (i < lFrq.length) {
		lKey = lFrq[i].key;
	    }
	    lMap.push({key: lKey, value: lValue});
	    this.mArrayRef.push(lKey);
	    this.mSub[i] = lValue;
	}
	this.updateSub(lMap, lFont);
	this.updateTokensSub(this.mTokens, lMap);
	this.displayOutput(this.mTokens);
    }

    this.getNextAlphaFrom = function(array) {
	for (var i = 0; i < this.mArrayAlpha.length; ++i) {
	    var lCharacter = this.mArrayAlpha[i];
	    var lFound = false;

	    for (var j = 0; j < this.mArrayRef.length; ++j) {
		var lAlpha = this.mArrayRef[j];
		if (lCharacter === lAlpha) {
		    lFound = true;
		    break;
		}
	    }
	    if (!lFound) {
		return lCharacter;
	    }
	}
	return '_';
    }

    this.minifySection = function(iBoolean, iButtonId, iSectionId) {
	if (iBoolean) {
	    $(iSectionId).addClass('minify');
	    $(iButtonId).text('+');
	} else {
	    $(iSectionId).removeClass('minify');
	    $(iButtonId).text('-');
	}
    }

    this.applySectionButtonInput = function() {
	this.minifySection(this.mMinifyInput, '#section-button-input', '#section-input');
    }

    this.clickSectionButtonInput = function() {
	this.mMinifyInput = !this.mMinifyInput;
	this.applySectionButtonInput();
    }

    this.applySectionButtonFrq = function() {
	this.minifySection(this.mMinifyFrq, '#section-button-frq', '#section-frq');
    }

    this.clickSectionButtonFrq = function() {
	this.mMinifyFrq = !this.mMinifyFrq;
	this.applySectionButtonFrq();
	this.updateChartText(this.mTokens.font);
	if (this.mTokens != null) {
	    this.updateChartText(this.mTokens.font);
	}
    }

    this.applySectionButtonRef = function() {
	this.minifySection(this.mMinifyRef, '#section-button-ref', '#section-ref');
    }

    this.clickSectionButtonRef = function() {
	this.mMinifyRef = !this.mMinifyRef;
	this.applySectionButtonRef();
	this.changeFrqRefLanguage();
    }

    this.applySectionButtonSub = function() {
	this.minifySection(this.mMinifySub, '#section-button-sub', '#section-sub');
    }

    this.clickSectionButtonSub = function() {
	this.mMinifySub = !this.mMinifySub;
	this.applySectionButtonSub();
    }

    this.applySectionButtonOutput = function() {
	this.minifySection(this.mMinifyOutput, '#section-button-output', '#section-output');
    }

    this.clickSectionButtonOutput = function() {
	this.mMinifyOutput = !this.mMinifyOutput;
	this.applySectionButtonOutput();
    }
}
