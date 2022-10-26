$.get('https://fourtonfish.com/hellosalut/?lang=fr' + $('html').attr('lang'), (data) => {
    $('#hello').html(data.hello);
});