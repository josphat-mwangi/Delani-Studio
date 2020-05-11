//what we do section
$(document).ready(function() {
$('.main').click(function() {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500)
});
// portfolio section
$('.card').hover(function () {
    $(this).children('.card-1').fadeToggle(1000, )

});
// reset button
$("button").on('click', function() {
    $('form').each(function () { 
        this.reset();
    });
});
// feed back to customer
$("button").click(function(event) {
    var client = document.getElementById('nameDetail').nodeValue;
    alert('Dear customer we have successfully received your message.Thank you.')
})


});