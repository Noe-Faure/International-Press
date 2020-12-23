// Global Variables
var menuRightOpen = false;
var mainDialogBoxOpen = false;
var informationSwitchOpen = true;
var menuSide = 'right';

function hoverCountry () {

    $('#currentCountryHover').empty();

    var country = $(this).clone();
    country.addClass('country-hover');

    $('#currentCountryHover').append(country);
}

function activeCountry (countryActive) {

    $('#currentCountryActive').empty();

    var country = countryActive.clone();
    country.addClass('country-selection');
    $('#currentCountryActive').append(country);
    animationPulse(country);
}

function eraseHoverCountry () {
    $(this).children('path').remove();
}

function flipMenu() {

    if (menuSide == 'right') 
    {
        $('#vertical-right-bar').css('transform', 'translateX(calc(-70vw + 100px))');
        $('#searchButton').css('left', 'calc(100vw - 11rem)');
        $('#back-button').css('left', 'calc(100vw - 9rem + 5px)');
        $('#flipFlopMenu').css('left', 'calc(100vw - 5rem - 4px)');

        menuSide = 'left';
        resizeSmartphone();
    }
    else if (menuSide == 'left')
    {
        $('#vertical-right-bar').css('transform', 'translateX(0px)');
        $('#searchButton').css('left', 'calc(100px + 20px)');
        $('#back-button').css('left', 'calc(100px + 20px)');
        $('#flipFlopMenu').css('left', 'calc(100px + 20px)');

        menuSide = 'right';
    }
}

function zoomOnCountry (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    mouseY = - mouseY;
    mouseX = - mouseX;

    //alert('x : ' + mouseX + ' | ' + 'y : ' + mouseY);

    /*
    $('.world-svg').css('width', '20vw');
    $('.world-svg').css('height', '20vw');
    $('.world-svg').css('left', mouseX);
    $('.world-svg').css('top', mouseY);*/
}

function selectionCountry () {
    menuRightOpen = true;

    var ghostCountry = $(this).children('.country');
    var ghostId = ghostCountry.attr('data-id');
    var selectedCountry = $('.country[data-id="' + ghostId + '"]');

    // Active display
    //$('.country').removeClass('country-selection');
    //selectedCountry.addClass('country-selection');
    activeCountry(ghostCountry);

    //animationPulse(ghostCountry);

    $('.alert-banner').hide()
    $('#flipFlopMenu').show();
;
    // ====== Display informations ======

    var countryName = selectedCountry.attr('data-name');
    var capitalName = findInformation(countryName, capitals);
    var abreviation = selectedCountry.attr('data-id');

    var pathFlag = 'url(svg-flags/' + abreviation.toLowerCase() + '.svg)';
    $('#currentFlag').css('background-image', pathFlag);

    // Press Index
    $('.freedom-of-press .indice').html(findIndexByCountry(pressIndex, countryName));
    $('.freedom-of-press .rank .num').html(findRankByCountry(pressIndex, countryName));
    $('.freedom-of-press .rank .span-nd').html(nthOfIndex(findRankByCountry(pressIndex, countryName)));

    // GDP
    $('.gross-domestic-product .indice').html(findGdpByCountry(gdp, countryName));
    $('.gross-domestic-product .rank .num').html(findRankByCountry(gdp, countryName));
    $('.gross-domestic-product .rank .span-nd').html(nthOfIndex(findRankByCountry(gdp, countryName)));

    // Currency
    var currencySymbol = findIndexByCountry(currency, countryName);
    $('.currency .indice').html(currencySymbol);
    $('.currency .rank .num').html(findSymbolByCurrencyCode(currencySymbolList, currencySymbol));

    // Gini
    $('.gini .indice').html(findIndexByCountry(giniIndex, countryName));
    $('.gini .rank .num').html(findRankByIndex(giniIndex, countryName));
    $('.gini .rank .span-nd').html(nthOfIndex(findRankByIndex(giniIndex, countryName)));

    // Median Income
    $('.medianIncome .indice').html(findMedianIncomeByCountry(medianIncome, countryName));
    $('.medianIncome .rank .num').html(findRankByIndex(medianIncome, countryName));
    $('.medianIncome .rank .span-nd').html(nthOfIndex(findRankByIndex(medianIncome, countryName)));

    // Democracy Index
    $('.political-regime .indice').html(findIndexByCountry(democracyIndex, countryName));
    $('.political-regime .rank .num').html(findRankByCountry(democracyIndex, countryName));
    $('.political-regime .rank .span-nd').html(nthOfIndex(findRankByCountry(democracyIndex, countryName)));

    // Corruption Index
    $('.corruption .indice').html(findIndexByCountry(corruptionIndex, countryName));
    $('.corruption .rank .num').html(findRankByCountry(corruptionIndex, countryName));
    $('.corruption .rank .span-nd').html(nthOfIndex(findRankByCountry(corruptionIndex, countryName)));

    // Language
    var listLanguage = findLanguageBySymbolCountry(languages, abrevLanguage, abreviation);
    $('.language .translate').html(listLanguage[0]);
    $('.language .indice .val').html(listLanguage[1]);

    // Life expectancy
    if (findIndexByCountry(lifeExpectancy, countryName) != '?')
    {
        var lifeExpectancyVal = Math.round(findIndexByCountry(lifeExpectancy, countryName));
    }
    else {
        var lifeExpectancyVal = '?';
    }
    var lifeExpectancyRank = findRankByIndex(lifeExpectancy, countryName);
    $('.life-expectancy .indice .val').html(lifeExpectancyVal);
    $('.life-expectancy .rank .num').html(lifeExpectancyRank);
    $('.life-expectancy .rank .span-nd').html(nthOfIndex(lifeExpectancyRank));

    // Literacy Rate
    var literacyRateVal = findIndexByCountry(literacyRate, countryName);
    var literacyRateRank = findRankByIndex(literacyRate, countryName);
    $('.literacy-rate .indice .val').html(literacyRateVal);
    $('.literacy-rate .rank .num').html(literacyRateRank);
    $('.literacy-rate .rank .span-nd').html(nthOfIndex(literacyRateRank));

    // Climate
    $('.global-emission .indice .val').html(findIndexByCountry(globalEmission, countryName));
    $('.global-emission .rank .num').html(findRankByIndex(globalEmission, countryName));
    $('.global-emission .rank .span-nd').html(nthOfIndex(findRankByIndex(globalEmission, countryName)));

    // Energy Mix
    changeBarEnergyMix('coal', coalMix, countryName);
    changeBarEnergyMix('oil', oilMix, countryName);
    changeBarEnergyMix('gas', gasMix, countryName);
    changeBarEnergyMix('nuclear', nuclearMix, countryName);
    changeBarEnergyMix('hydro', hydroMix, countryName);
    changeBarEnergyMix('solar', solarMix, countryName);
    changeBarEnergyMix('wind', windMix, countryName);

    // War(s)
    showOnGoingWars(onGoingWar, countryName);

    //Erase when no-data in a row
    $('.indice').parent('tr').show();
    removeNoDataRow();

    // H1 : Name and capital
    $('#countryName').html(countryName);
    $('#countryCapital').html(capitalName);

    $('#vertical-right-bar').css('display', 'block');
    backButtonAppartion();

    if (menuSide == 'right')
    {
        setTimeout(function(){ $('#vertical-right-bar').css('transform', 'translateX(0)')}, 50);
    }
    else if (menuSide == 'left')
    {
        setTimeout(function(){ $('#vertical-right-bar').css('transform', 'translateX(calc(-70vw + 100px))')}, 50);
        setTimeout(function(){ resizeSmartphone(); }, 55);
    }

}

function deselectCountry () {
    menuRightOpen = false;

    // Animation pulse
    removePulseAnimation();

    $('#back-button').css('display', 'none');
    $('#back-button').css('opacity', '1');
    $('#flipFlopMenu').hide();

    $('.country').removeClass('country-selection');

    $('#vertical-right-bar').css('transform', 'translateX(30vw)');
    setTimeout(function(){ $('#vertical-right-bar').css('display', 'none')}, 50);
    closeInformationIndex ();
    $('#currentCountryActive path').remove();
}

function backButtonAppartion () {
    $('#back-button').css('display', 'flex');
    $('#back-button').css('opacity', '1');
}

function findInformation(countryName, dataSet) {
	
	for (i = 0; i < dataSet.length; i++) {
  	if (dataSet[i].country == countryName) {
			return (dataSet[i].city);
		}
	}
	
	return ('Non disponible');
	
}

function changeSwitchMenuButton () {
    $('.choice-button').removeClass('active');
    $('.choice-button').addClass('not-active');
    $(this).removeClass('not-active');
    $(this).addClass('active');

    if (informationSwitchOpen == true) {
        $('#informationContainerScroll').css('display', 'none');
        $('#informationContainerScrollSecond').css('display', 'block');
        informationSwitchOpen = false;
    }
    else {
        $('#informationContainerScroll').css('display', 'block');
        $('#informationContainerScrollSecond').css('display', 'none');
        informationSwitchOpen = true;
    }
}

function openInformationIndex () {

    var open =  $('#mainDialogBox').css('opacity');

    // If Close
    if (open == 0)
    {
        mainDialogBoxOpen = true;
        $('#mainDialogBox').css('opacity', '1');
        $('#mainDialogBox').css('display', 'block');

        if (menuSide == 'right') {
            $('#mainDialogBox').css('padding', '1.5em calc(30vw + 2em - 10px) 1.5em 2em');
            setTimeout(function(){ $('#mainDialogBox').css('transform', 'translateX(0)')}, 50);
        }
        else if (menuSide == 'left') {
            $('#mainDialogBox').css('padding', '1.5em 2em 1.5em calc(30vw + 2em - 10px)');
            setTimeout(function(){ $('#mainDialogBox').css('transform', 'translateX(calc(-7vw - 100px))')}, 50);
        }

        // Bold selection
        $(this).closest('tr').addClass('selecting-information-index');
        $(this).closest('td').prev('td').addClass('selecting-information-index');
        $(this).html('<a href="#" class="informationDialogOpen"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>');
    }
    else {
         // Change index information while Open
        $('tr').removeClass('selecting-information-index');
        $('td').removeClass('selecting-information-index');

        // Animation flip flop
        $('#mainDialogBox').css('transform', 'translateX(calc(100vw - 40px - 100px - 5em - 40px))');
        if (menuSide == 'right') {
            $('#mainDialogBox').css('padding', '1.5em calc(30vw + 2em - 10px) 1.5em 2em');
            setTimeout(function(){ $('#mainDialogBox').css('transform', 'translateX(0)')}, 150);
        }
        else if (menuSide == 'left') {
            $('#mainDialogBox').css('padding', '1.5em 2em 1.5em calc(30vw + 2em - 10px)');
            setTimeout(function(){ $('#mainDialogBox').css('transform', 'translateX(calc(-7vw - 100px))')}, 150);
        }

        $(this).closest('tr').addClass('selecting-information-index');
        $(this).closest('td').prev('td').addClass('selecting-information-index');

        $('.informationDialogOpen').html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>');
        $(this).html('<a href="#" class="informationDialogOpen"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>');
    }
}

function closeInformationIndex () {

    var open =  $('#mainDialogBox').css('opacity');

    // If Open
    if (open == 1)
    {
        mainDialogBoxOpen = false;

        $('#mainDialogBox').css('transform', 'translateX(calc(100vw - 40px - 100px - 5em - 40px))');
        $('#mainDialogBox').css('opacity', '0');
        setTimeout(function(){ $('#mainDialogBox').delay( 250 ).css('display', 'none')}, 300);

        // Bold selection
        $('tr').removeClass('selecting-information-index');
        $('td').removeClass('selecting-information-index');

        $('.informationDialogOpen').html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>');
    }
}

function searchInMap () {

    // Get the enter
    var searchInput = $(this).val().toLowerCase();

    if (searchInput != '')
    {
        $("#allCountriesSvg path").each(function() {
            var pathCountry = $(this);
            var country = pathCountry.data('name').toLowerCase();
            var capitalName = findInformation(country, capitals).toLowerCase();

            if(country.indexOf(searchInput) > -1) 
            {
                pathCountry.addClass('country-hover');

            } 
            else {
                pathCountry.removeClass('country-hover');
            }
          });
    }
    else {
        $("#allCountriesSvg path").removeClass('country-hover');
        $("#allCountriesSvg path").removeClass('country-hover-2');
        $("#allCountriesSvg path").removeClass('country-hover-3');
    }
}

function deploySearchBar () {

    if ($('#searchBar').css('opacity') == 0)
    {

        $('#searchBar').focus();

        $('#searchBar').css({
            opacity: 1,
            marginLeft: '1.5rem',
            width: '20vw',
            padding: '0.2em',
            paddingLeft: '1em',
            border: '1px solid white'
        });
        $('#closeSearchBar').show();
    }
    else {

        $('#searchBar').css({
            opacity: 0,
            marginLeft: '0rem',
            width: '0vw',
            padding: '0',
            paddingLeft: '0',
            border: '0'
        });
        $('#closeSearchBar').hide();

    }
}

// ============ Extract Data ============

function findGdpByCountry(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].imfGDP)
            {
                // Treatment around
                var result = object[i].imfGDP;
                result = Math.floor(result / 1000000000);
                result = result.toLocaleString();
                result = result + ' Md$';

                return result;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function findMedianIncomeByCountry(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].index)
            {
                // Treatment around
                var result = object[i].index;
                result = result.toLocaleString();
                result = result + ' $';

                return result;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function findIndexByCountry(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].index)
            {
                return object[i].index;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function findRankByCountry(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].rank)
            {
                return object[i].rank;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function nthOfIndex(index) {
    if (index == 1){
        return 'er';
    }
    else
    {
        return 'ème';
    }
}

function findRankByCurrencySymblol(object, symbol) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].name == symbol) {

            if (!!object[i].rank)
            {
                return object[i].rank;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function findSymbolByCurrencyCode(object, code) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].code == code) {

            if (!!object[i].symbol)
            {
                return object[i].symbol;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function findLanguageBySymbolCountry(object, objectAbrev, abrev) {

    // We only keep first languages
    if (!!object[abrev].languages[0])
            {
                var abrevLanguage = object[abrev].languages[0];
                return [objectAbrev[abrevLanguage].name, objectAbrev[abrevLanguage].native];
            }
            else 
            {
                return '?';
            }


}

function findRankByIndex(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].index)
            {
                return i + 1;
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';
}

function changeBarEnergyMix(nameEnergy, data, countryName) {

    var val = findIndexByCountry(data, countryName);

    $('.' + nameEnergy + ' .energy-pourcentage .val').html(val);

    if (val == '?') {
        val = 0;
    }

    $('.' + nameEnergy + ' .load-container .load-bar').css('width', val + '%');

}

function showOnGoingWars (object, countryName) {

    var listOfConlicts = [];

    // Remove list of multi-conflicts
    $('.multi-war').remove();

    // We loop in the object and look for the name of the country
    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            listOfConlicts.push(object[i]);
        }
    }

    // Check if country involve in a war
    if (listOfConlicts.length != 0)
    {
        // Uni-War
        if (listOfConlicts.length == 1) 
        {
            $('#warConflict').show();
            $('#firstWarName').show();

            $('#warConflict img').attr('src', 'img/war.svg');
            $('#warTitleInfo').html('Ce pays est impliqué dans un conflit d\'importance depuis <span class="war-start"></span>');

            $('.war-start').html(listOfConlicts[0].start);
            $('#firstWarName').html(listOfConlicts[0].name);
            $('#firstWarName').attr('href', listOfConlicts[0].link);

            return 0;
        }
        // Multi-conflicts
        else 
        {
            $('#warConflict').show();
            $('#firstWarName').show();
            $('#warTitleInfo').html('Ce pays est impliqué dans plusieurs conflits depuis <span class="war-start"></span>');
            $('#warConflict img').attr('src', 'img/multi-wars.svg');
            $('#warTitleInfo').html();

            var olderWar = 9999;

            // Loop in conflicts
            for (j = 0; j < listOfConlicts.length; j++)
            {
                // Date : take the older one to show
                if (listOfConlicts[j].start < olderWar)
                {
                    olderWar = listOfConlicts[j].start;
                }

                // Append wars
                $('#firstWarName').hide();
                $('#firstWarName').after('<a target="_blank" class="multi-war" href="' + listOfConlicts[j].link + '">' + listOfConlicts[j].name + '<br></a>');
            }

            $('.war-start').html(olderWar);
            return 0;
        }
    }
    else {
        $('#warConflict').hide();
        return 0;
    }

}

function animationPulse (currentElement) {

    listOfBigcountries = ['US', 'BR', 'RU', 'CN', 'IN', 'AR', 'CL', 'AU', 'ID', 'CA'];

    // Animation
    removePulseAnimation();

    var pulse = currentElement.clone();

    if (listOfBigcountries.includes(currentElement.attr('data-id')))
    {
        $(pulse).addClass('country-back-animation-for-big-countries');
        $(pulse).insertBefore(currentElement);

    }
    else
    {
        $(pulse).addClass('country-back-animation');
        $(pulse).insertBefore(currentElement);
    }
    
}

function removePulseAnimation () {
    $('.country-back-animation').remove();
    $('.country-back-animation-for-big-countries').remove();
}

function resizeSmartphone () {
    // Smart Phone
    if ($(window).width() < 900 && menuSide == 'left')
    {
        $('#vertical-right-bar').css('transform', 'translateX(calc(-50vw + 100px))');
    }
}

function removeNoDataRow () {
    $('.indice').each(function() {
        if ($(this).html() == '?') {
            $(this).parent('tr').hide();
        }
    });

    if ($('.energy-pourcentage .val').first().html() == '?') {
        $('#energyMix').hide();
    }
    else
    {
        $('#energyMix').show();
    }
}