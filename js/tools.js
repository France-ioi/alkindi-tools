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

function computeContentChartFrq(iMapFrq) {
    var lKeys = new Array();
    var lData = new Array();
    var lSize = iMapFrq.size;

    var lObjects = new Array();
    iMapFrq.map.forEach(function (value, key) {
	var lV = value / lSize;
	lObjects.push({key: key, value: value});
    });

    sortFrq(lObjects, true);

    for (var i = 0, len = lObjects.length; i < len; i++) {
	var lItem = lObjects[i];

	lKeys.push(lItem.key);
	lData.push(lItem.value);
    }

    iMapFrq.map.forEach(function (value, key) {
    });

    var lContent = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Analyse de fréquence du texte'
        },
        xAxis: {
            categories: lKeys,
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
            data: lData
        }]
    };
    return lContent;
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

    var lContentChartFrq = computeContentChartFrq(lMapFrq);
    $('#chart-text').highcharts(lContentChartFrq);

    var lTextOutput = tokensToText(lTokens);
    $('textarea#textarea-output').val(lTextOutput);
}

$(function () {
    $('#apply-input').click(function() {
	clickApplyInput();
    });
});
