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
    $('.gini .indice .val').html(findIndexByCountry(giniIndex, countryName));
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
    var lifeExpectancyVal = '?';
    if (findIndexByCountry(lifeExpectancy, countryName) != '?')
    {
        lifeExpectancyVal = Math.round(findIndexByCountry(lifeExpectancy, countryName));
    }
    var lifeExpectancyRank = findRankByIndex(lifeExpectancy, countryName);
    $('.life-expectancy .indice .val').html(lifeExpectancyVal);
    $('.life-expectancy .rank .num').html(lifeExpectancyRank);
    $('.life-expectancy .rank .span-nd').html(nthOfIndex(lifeExpectancyRank));

    // Infant mortality
    $('.infant-mortality .indice').html(findIndexByCountry(infantMortality, countryName));
    $('.infant-mortality .num').html(findRankByIndex(infantMortality, countryName));
    $('.infant-mortality .rank .span-nd').html(nthOfIndex(findRankByIndex(infantMortality, countryName)));

    // Literacy Rate
    var literacyRateVal = findIndexByCountry(literacyRate, countryName);
    var literacyRateRank = findRankByIndex(literacyRate, countryName);
    $('.literacy-rate .indice .val').html(literacyRateVal);
    $('.literacy-rate .rank .num').html(literacyRateRank);
    $('.literacy-rate .rank .span-nd').html(nthOfIndex(literacyRateRank));

    // COP 21
    findCopState(stateCop21, countryName);

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
    showOnGoingClashes(countryClashes, countryName);

    //Erase when no-data in a row
    $('.indice').parent('tr').show();
    removeNoDataRow();

    // H1 : Name and capital
    $('#countryName').html(findTranslateNameCountry(translateCountryNameEnFr, abreviation));
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
    var indexName = $(this).parent().prevAll('.index-name').text();
    diplayIndexInformation(indexName, indexDescriptions);

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

function findCopState(object, countryName) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            if (!!object[i].state)
            {
                var state = object[i].state;
                $('.cop-signature .indice').html(state);

                if (state == 'Ratifié') 
                {

                    $('#checkCop21').removeClass();
                    $('#checkCop21').addClass('check-level-1');
                    $('#checkCop21').html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-all" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/></svg>');
                }
                else
                {
                    $('#checkCop21').removeClass();
                    $('#checkCop21').addClass('uncheck-level-1');
                    $('#checkCop21').html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>');
                }
            }
            else 
            {
                return '?';
            }
        }
    }

    return '?';

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

function findTranslateNameCountry(object, code) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].code == code) {

            if (!!object[i].frName)
            {
                return object[i].frName;
            }
        }
    }

    return 'Non diponible';
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
            $('#warTitleInfo .text').html('Ce pays est impliqué dans une guerre d\'importance depuis');

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
            $('#warTitleInfo .text').html('Ce pays est impliqué dans plusieurs guerres depuis ');
            $('.war-start').show();
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

// Should be call after showOnGoingWars function
function showOnGoingClashes (object, countryName) {

    var listOfClashes = [];
    $('#clashContainer').empty();

    // We loop in the object and look for the name of the country
    for (i = 0; i < object.length; i++)
    {
        if(object[i].country == countryName) {

            listOfClashes.push(object[i]);
        }
    }

    if (listOfClashes.length != 0) 
    {
        // Check if there also war important war in this country
        if ($('#warConflict').css('display') == 'flex')
        {
            $('#clashContainer').append('<hr class="separator-clash">');
            for (j = 0; j < listOfClashes.length; j++)
            {
                $('#clashContainer hr').after('<a target="_blank" class="multi-war" href="' + listOfClashes[j].link + '">' + listOfClashes[j].name + '<br></a>');
            }
        }
        // No massive war
        else
        {
            $('.war-info .text').html('Ce pays subit des heurts qui ont fait moins de 100 victimes directes en 2020');
            $('.war-start').hide();
            for (j = 0; j < listOfClashes.length; j++)
            {
                $('#clashContainer').append('<a target="_blank" class="multi-war" href="' + listOfClashes[j].link + '">' + listOfClashes[j].name + '<br></a>');
            }

            $('#firstWarName').hide();

            $('#warConflict img').attr('src', 'img/gun.svg');
            $('#warConflict').show();
        }
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
        else if ($(this).children('.val').html() == '?') {
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

function diplayIndexInformation(IndexName, object) {

    for (i = 0; i < object.length; i++)
    {
        if(object[i].name.toUpperCase() == IndexName.toUpperCase()) {

            $('#DialogBoxIndexName').html(object[i].name);
            $('.update-date-of-indice').html(object[i].date);
            $('#DialogBoxIndexOrganism').html(object[i].OrganismName);
            $('.source-link').attr('href', object[i].source);
            $('#containerDescriptionIndex .presentation').html(object[i].presentation);
            $('#containerDescriptionIndex .organism').html(object[i].organismDescription);
            $('#containerDescriptionIndex .other-index').html(object[i].other);
        }
    }

}