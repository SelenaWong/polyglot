var set_locale_to = function(locale){
    if(locale){
        $.i18n().locale = locale;
    }
    $('body').i18n();
    $('#welcome').text($.i18n('welcome','John'));
}

jQuery(function ($) {
    $.i18n().load({
        'en': 'js/i18n/en.json',
        'zh': 'js/i18n/zh.json',
        'ru': 'js/i18n/ru.json'
    }).done(function () {
        console.log('done!');
        set_locale_to(url('?locale'));
        History.Adapter.bind(window, 'statechange', function(){
            set_locale_to(url('?locale'));
        });

        $('.switch-locale').on('click', 'a', function (e) {
            e.preventDefault();
            History.pushState(null,null,"?locale=" +$(this).data('locale'));
            // $.i18n().locale = $(this).data('locale');
        })
    })
})


