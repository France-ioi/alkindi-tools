var sLimitRef = 20;
var sMapLang = new Map();
var sObjects = null;
var sKeys = null;
var sData = null;
var sLastAlpha = true;

function generateChartsContent(iTitle, iKeys, iData) {
    var lContent = {
        chart: {
            type: 'column'
        },
        title: {
            text: iTitle
        },
        xAxis: {
            categories: iKeys,
            crosshair: true
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'fréquence',
            data: iData
        }]
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
    lFr.set('à', 0.486);
    lFr.set('ç', 0.085);
    lFr.set('è', 0.271);
    lFr.set('é', 1.904);
    lFr.set('ê', 0.225);
    lFr.set('ë', 0.000);
    lFr.set('î', 0.045);
    lFr.set('ï', 0.006);
    lFr.set('ù', 0.058);
    lFr.set('œ', 0.018);

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

var sFrqAlpha = true;

function displayText(iText) {
    console.log(iText);
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

	if (!lWithSpace && lRef == ' ') {
	    lMute = true;
	}

	if (!lWithPunctuation && lRef.match('[\u2000-\u206F\u2E00-\u2E7F\\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]')) {
	    lMute = true;
	}

	if (!lWithAccent) {

	}

	if (!lWithDigit && lRef.match('[0-9]')) {
	    lMute = true;
	}

	if (!lWithUpperCase) {
	    lValue = lValue.toLowerCase();
	}

	lTokens.push({ref: lRef, value: lValue, mute: lMute});
    }
    return lTokens;
}

function tokensToText(iTokens) {
    var lStr = "";
    for (var i = 0, len = iTokens.length; i < len; i++) {
	var lToken = iTokens[i];

	var lValue = lToken.value;
	if (!lToken.mute) {
	    lStr += lValue;
	}
    }
    return lStr;
}

function computeMapFrq(iTokens) {
    var lMap = new Map();
    var lSize = 0;

    for (var i = 0, len = iTokens.length; i < len; i++) {
	var lToken = iTokens[i];

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
	var lV = value / lSize * 100 ;
	sObjects.push({key: key, value: lV});
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

    var lTokens = textToTokens(lTextInput, lOptions);
    var lMapFrq = computeMapFrq(lTokens);

    computeObjects(lMapFrq);
    sLastAlpha = $('input[name="frq"]:checked').val() === "alpha";
    updateChartText();

    var lTextOutput = tokensToText(lTokens);
    $('textarea#textarea-output').val(lTextOutput);
}

function updateChartText() {
    if (sObjects !== undefined &&
	sObjects != null) {
	sortFrq(sObjects, sLastAlpha);

	sKeys = [];
	sData = [];
	for (var i = 0, len = sObjects.length; i < len; i++) {
	    var lItem = sObjects[i];
	    sKeys.push(lItem.key);
	    sData.push(lItem.value);
	}
    }
    var lContent = generateChartsContent('Analyse de fréquence du texte', sKeys, sData);
    $('#chart-text').highcharts(lContent);
}

function changeFrq() {
    var lFrqAlpha = $('input[name="frq"]:checked').val() === "alpha";
    if (sLastAlpha != lFrqAlpha) {
	sLastAlpha = lFrqAlpha;
	updateChartText();
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

$(function () {
    initRefLang();
    changeFrqRefLanguage();

    $('#apply-input').click(function() {
	clickApplyInput();
    });

    $('#frq-alpha').change(function() {
	changeFrq();
    });

    $('#frq-fqz').change(function() {
	changeFrq();
    });

    $('#frq-ref-language').change(function() {
	changeFrqRefLanguage();
    });

});
