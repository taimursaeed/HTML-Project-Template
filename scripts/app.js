// JS for a component that can be used multiple times
$('body').on('click', '.js-showValue', function () {
    alert($(this).closest('.form-group').find('input').val());
});

// JS for a component that is intended to be used once only
$('body').on('click', '#changeColor', function () {
    $(this).closest('div').find('span').css('background', getRandomColor())
});

// A Function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}