$(document).ready(function() {

    var $clickMe = $('.click-icon'),
        $card = $('.card');

    $card.on('click', function() {

        $(this).toggleClass('is-opened');
        $clickMe.toggleClass('is-hidden');

    });

    calcDays();

});

function addDays(date, days) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return formatDate(copy);
}

function formatDate(date) {
    return date.toLocaleDateString('de-DE');
}

function calcDays() {
    const year = new Date().getFullYear() - 1;
    const date = new Date(year, 11, 24);

    for (var i = 100; i <= 300; i += 100) {
        document.getElementById('W' + i).innerHTML = addDays(date, i);
    }
}

