$(document).ready(function() {
$('.main').click(function() {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500)
});
$('.card').hover(function () {
    $(this).children('.card-1').fadeToggle(1000, "linear")

});

});