

function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (let i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

}

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}

let check = []; 



check['fname'] = function(fname) {

    let name = document.getElementsByName(fname),
        tooltipStyle = getTooltip(fname).style;

    if (fname.value.length >= 8) {
        fname.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        fname.className = 'incorrect';
        tooltipStyle.display = 'inlineblock';
        return false;
    }

};





check['fphone'] = function() {

    let fphone = document.getElementsByName('fphone'),
        tooltipStyle = getTooltip(fphone).style;

    if (fphone.value.length >= 4) {
        fphone.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        fphone.className = 'incorrect';
        tooltipStyle.display = 'inlineblock';
        return false;
    }

};

check['fpwd'] = function() {

    var fpwd = document.getElementsByName('fpwd'),
        tooltipStyle = getTooltip(fpwd).style;

    if (fpwd.value.length >= 8) {
        fpwd.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        fpwd.className = 'incorrect';
        tooltipStyle.display = 'inlineblock';
        return false;
    }

};

check['fpwd2'] = function() {

    let fpwd = document.getElementsByName('fpwd2'),
        fpwd2 = document.getElementsByName('fpwd2'),
        tooltipStyle = getTooltip(fpwd2).style;

    if (fpwd.value == fpwd2.value && fpwd2.value != '') {
        fpwd2.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        fpwd2.className = 'incorrect';
        tooltipStyle.display = 'inlineblock';
        return false;
    }

};
/*
check['country'] = function() {

    var country = document.getElementsByName('country'),
        tooltipStyle = getTooltip(country).style;

    if (country.options[country.selectedIndex].value != 'none') {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inlineblock';
        return false;
    }

};*/



deactivateTooltips();
