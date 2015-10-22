var sLimitRef = 20;
var sMapLang = new Map();
var sObjects = null;
var sKeys = null;
var sData = null;
var sLastAlpha = true;
var sSub = null;
var sArrayAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sTokens = null;
var sFrqAlpha = true;
var sSubInput = true;
var sTextInput = "Hk dwhrsd oktrhdtqr ezlhkkdr c’zsszptdr bqxoszmzkxshptdr, kdr oktr bnmmtdr dszms k’zmzkxrd eqdptdmshdkkd, kz bqxoszmzkxrd cheedqdmshdkkd ds kz bqxoszmzkxrd khmdzhqd. K’zmzkxrd eqdptdmshdkkd, cdbntudqs zt hwd rhèbkd ozq Zk-Jhmch, dwzlhmd kdr qdodshshnmr cdr kdssqdr ct ldrrzfd bgheeqd zehm cd sqntudq kz bkd. Dkkd drs hmdeehbzbd bnmsqd kdr bgheeqdldmsr lncdqmdr sdkr ptd CDR, QRZ. Dkkd drs oqhmbhozkdldms tshkhrdd bnmsqd kdr bgheeqdldmsr lnmn-zkogzadshptdr pth rtarshstdms bgzptd kdssqd ozq tmd ztsqd ds pth oqdrdmsdms tm ahzhr rszshrshptd. K’hmchbd cd bnhmbhcdmbd, hmudmsd dm 1920 ozq Vhkkhzl E. Eqhdclzm, odqlds cd bzkbtkdq kz oqnazahkhsd cd qdodshshnmr cdr kdssqdr ct ldrrzfd bgheeqd. Hk drs rntudms bntokd zudb k’zmzkxrd eqdptdmshdkkd. Bdkz odqlds cd rzunhq kd sxod cd bgheeqdldms c’tm ldrrzfd (bgheeqdldms lnmn-zkogzadshptd nt onkx-zkogzadshptd) zhmrh ptd kz knmftdtq oqnazakd cd kz bkd. K’zsszptd ozq lns oqnazakd bnmrhrsd à rtoonrdq k’dwhrsdmbd c’tm lns oqnazakd czmr kd ldrrzfd bgheeqd. Hk drs cnmb onrrhakd c’dm cdcthqd kz bkd ct ldrrzfd rh kd lns bgnhrh drs bnqqdbs. Bd sxod c’zsszptd z dsd ldmd bnmsqd kz lzbghmd Dmhflz ctqzms kz Rdbnmcd Ftdqqd lnmchzkd.";

function generateChartsContent(iFont, iKeys, iData) {
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

function initRefLang() {
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

    sMapLang.set("fr", lFr);

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

    sMapLang.set("en", lEn);
}

function getMapId() {
    var lRes = new Array();
    for (var i = 0; i < sArrayAlpha.length; ++i) {
	var lValue = sArrayAlpha[i];
	lRes.push({key: lValue, value : lValue});
    }
    return lRes;
}

function accentReplace(str) {
    str = str.replace(/[ÂÃÄÀÁÅ]/gi, "A");
    str = str.replace(/[Ç]/gi,      "C");
    str = str.replace(/[ÈÉÊË]/gi,   "E");
    str = str.replace(/[ÌÍÎÏ]/gi,   "I");
    str = str.replace(/[Ð]/gi,      "D");
    str = str.replace(/[Ñ]/gi,      "N");
    str = str.replace(/[ÒÓÔÕÖØ]/gi, "O");
    str = str.replace(/[ÙÚÛÜ]/gi,   "U");
    str = str.replace(/[Ý]/gi,      "Y");
    str = str.replace(/[àáâãäå]/gi, "a");
    str = str.replace(/[ç]/gi,      "c");
    str = str.replace(/[èéêë]/gi,   "e");
    str = str.replace(/[ìíîï]/gi,   "i");
    str = str.replace(/[ñ]/gi,      "n");
    str = str.replace(/[òóôõöø]/gi, "o");
    str = str.replace(/[ùúûü]/gi,   "u");
    str = str.replace(/[ýÿ]/gi,     "y");
    return str;
}

function textToTokens(iText, iOptions) {
    var lWithSpace       = false;
    var lWithPunctuation = false;
    var lWithAccent      = false;
    var lWithDigit       = false;
    var lWithUpperCase   = false;

    if (iOptions !== undefined) {
	lWithSpace       = iOptions.withSpace;
	lWithPunctuation = iOptions.withPunctuation;
	lWithAccent      = iOptions.withAccent;
	lWithDigit       = iOptions.withDigit;
	lWithUpperCase   = iOptions.withUpperCase;
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
	    lValue = accentReplace(lValue);
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
    var lFont = getAlphaFont();
    return {font: lFont, tokens: lTokens};
}

function tokensToText(iTokens) {
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

function computeMapFrq(iTokens) {
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

function sortFrq(iObjects, iWithKey) {
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

function computeObjects(iMapFrq) {
    sKeys = new Array();
    sData = new Array();
    sObjects = new Array();
    var lSize = iMapFrq.size;

    sObjects = [];
    iMapFrq.map.forEach(function (value, key) {
	var lV = (value / lSize * 100);
	var lVal = lV.toFixed(2) / 1;
	sObjects.push({key: key, value: lVal});
    });
}

function clickApplyInput() {
    var lTextInput       = $('textarea#textarea-input').val();

    var lWithSpace       = document.getElementById('optionWithSpace').checked;
    var lWithPunctuation = document.getElementById('optionWithPunctuation').checked;
    var lWithAccent      = document.getElementById('optionWithAccent').checked;
    var lWithDigit       = document.getElementById('optionWithDigit').checked;
    var lWithUpperCase   = document.getElementById('optionWithUpperCase').checked;

    var lOptions = {
	withSpace: lWithSpace,
	withPunctuation: lWithPunctuation,
	withAccent: lWithAccent,
	withDigit: lWithDigit,
	withUpperCase: lWithUpperCase
    };

    $('#root').addClass('apply');

    sTokens = textToTokens(lTextInput, lOptions);
    var lMapFrq = computeMapFrq(sTokens);
    var lFont = sTokens.font;
    computeObjects(lMapFrq);
    sLastAlpha = $('input[name="frq"]:checked').val() === "alpha";
    updateChartText(lFont);
    var lMapId = getMapId();
    updateSub(lMapId, lFont);
    displayOutput(sTokens);
}

function updateChartText(iFont) {
    if (sObjects !== undefined &&
	sObjects != null) {
	sortFrq(sObjects, sLastAlpha);

	sKeys = [];
	sData = [];
	for (var i = 0, len = sObjects.length; i < len && i < sLimitRef; i++) {
	    var lItem = sObjects[i];
	    sKeys.push(lItem.key);
	    sData.push(lItem.value);
	}
	for (var i = sObjects.length; i < sLimitRef; ++i) {
	    sKeys.push("");
	    sData.push(0);
	}
    }
    var lContent = generateChartsContent(iFont, sKeys, sData);
    $('#chart-text').highcharts(lContent);
}

function changeFrq() {
    var lFrqAlpha = $('input[name="frq"]:checked').val() === "alpha";
    if (sLastAlpha != lFrqAlpha) {
	sLastAlpha = lFrqAlpha;
	updateChartText(sTokens.font);
    }
}

function changeFrqRefLanguage() {
    var lKeys = new Array();
    var lData = new Array();
    var lLang = $('#frq-ref-language').val();

    var lObjects = new Array();
    var lMap = sMapLang.get(lLang);
    lMap.forEach(function (value, key) {
	lObjects.push({key: key, value: value});
    });

    sortFrq(lObjects, false);


    for (var i = 0, len = lObjects.length; i < sLimitRef; i++) {
	var lItem = lObjects[i];

	lKeys.push(lItem.key);
	lData.push(lItem.value);
    }

    var lContent = generateChartsContent('Fréquence', lKeys, lData);
    $('#chart-ref').highcharts(lContent);
}

function updateSub(iMap, iFontKey) {
    $('#sub').empty();
    var lSubElement = document.getElementById('sub');
    var paper = Raphael(lSubElement, 680, 100);

    var dragAndDrop = DragAndDropSystem({
	paper : paper,
	actionIfDropped : function(srcCont, srcPos, dstCont, dstPos, type)
	{
	    if(dstCont == null)
		return false;
	    return true;
	},
	drop: function(srcCont, srcPos, dstCont, dstPos, type) {
	    generateNewSub(srcCont, srcPos, dstCont, dstPos, type);
	}
    });


    var size = iMap.length;
    var w = 25, h = 25;
    dragAndDropContainer = dragAndDrop.addContainer({
	ident : 'seq',
	cx : 330,
	cy : 80,
	widthPlace : 25,
	heightPlace : 25,
	nbPlaces : size,
	dropMode : 'insertBefore'
    });

    if (sObjects !== undefined &&
	sObjects != null) {

	sSub = new Array();
	for (var i = 0; i < size; i++) {
	    var lItem = iMap[i];
	    var lKey = lItem.key;
	    var lValue = lItem.value;

	    var u = paper.text(17 + i * 25, 40, lValue).attr({'font-family' : iFontKey, 'font-size': 18, 'font-weight': 'bold'});

	    var c = paper.rect(-w/2,-h/2,w,h).attr('fill', 'white');
	    var t = paper.text(0,0, lValue).attr({'font-size': 14, 'font-weight': 'bold'});
	    var draggable = dragAndDropContainer.createDraggable(i+1, i, [c,t]);
	    sSub.push(lValue);
	}
    }
}

function generateNewSub(srcCont, srcPos, dstCont, dstPos, type) {
    if (srcPos < dstPos) {
	var l = sSub[srcPos];
	for (var i = srcPos; i < dstPos; ++i) {
	    sSub[i] = sSub[i + 1];
	}
	sSub[dstPos] = l;
    } else if (srcPos > dstPos) {
	var l = sSub[srcPos];
	for (var i = srcPos; i > dstPos; --i) {
	    sSub[i] = sSub[i - 1];
	}
	sSub[dstPos] = l;
    }

    var lSub = sSub;
    var lMap = new Map();

    for (var i = 0; i < sSub.length; ++i) {
	var lKey = sArrayAlpha[i];
	var lValue = sSub[i];
	lMap.set(lKey, lValue);
    }

    updateTokensSub(sTokens, lMap);
    displayOutput(sTokens);
}

function updateTokensSub(iTokens, iMap) {
    if (iTokens != null) {
	var lTokens = iTokens.tokens;
	for (var i = 0, len = lTokens.length; i < len; i++) {
	    var lToken = lTokens[i];

	    var lValue = lToken.value;
	    var lSub = iMap.get(lValue);
	    if (lSub != null) {
		lToken.output = lSub;
	    }
	}
    }
}

function displayOutput(iTokens) {
    var lTextOutput = tokensToText(iTokens);
    $('textarea#textarea-output').val(lTextOutput);
}

function getAlphaFont() {
    var lFont = $('#alpha-font option:selected').val();
    return lFont;
}

function changeAlphaFont() {
    var lFont = getAlphaFont();

    if (lFont === 'alien') {
	$('textarea#textarea-input').css('font-family', "alien");
    } else {
	$('textarea#textarea-input').css('font-family', "inherit");
    }
}

function changeSubRadio() {
    var lVersion = $('input[name="sub-radio"]:checked').val();
    if (sSubInput && lVersion === 'generate') {
	sSubInput = false;
	updateSubFromRef();
    } else if (sSubInput && lVersion === 'input') {
	sSubInput = true;

    }
}

function updateSubFromRef() {
    var lFont = sTokens.font;

    var lLang = $('#frq-ref-language').val();

    var lMapRef = sMapLang.get(lLang);
    var lRef = new Array();
    lMapRef.forEach(function (value, key) {
	lRef.push({key: key, value: value});
    });
    sortFrq(lRef, false);

    var lMapFrq = computeMapFrq(sTokens);
    var lFrq = new Array();
    lMapFrq.map.forEach(function (value, key) {
	lFrq.push({key: key, value: value});
    });
    sortFrq(lFrq, false);

    var lMapA = new Array();
    var lMap = new Map();
    sSub = new Array();
    for (var i = 0; i < lRef.length; ++i) {
	var lKey = lRef[i].key;
	var lValue = lKey;
	if (i < lFrq.length) {
	    lValue = lFrq[i].key;
	}
	lMapA.push({key: lKey, value: lValue});
	lMap.set(lKey, lValue);
	sSub[i] = lValue;
    }
    updateSub(lMapA, lFont);
    updateTokensSub(sTokens, lMap);
    displayOutput(sTokens);
}


$(function () {
    initRefLang();
    changeFrqRefLanguage();
    changeAlphaFont();
    $('textarea#textarea-input').val(sTextInput);

    $('#apply-input').click(function() {
	clickApplyInput();
    });

    $('#frq-alpha').change(function() {
	changeFrq();
    });

    $('#frq-fqz').change(function() {
	changeFrq();
    });

    $('#sub-input').change(function() {
	changeSubRadio();
    });

    $('#sub-generate').change(function() {
	changeSubRadio();
    });

    $('#frq-ref-language').change(function() {
	changeFrqRefLanguage();
    });

    $('#alpha-font').change(function() {
	changeAlphaFont();
    });
});
