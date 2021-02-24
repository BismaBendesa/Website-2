// var animate = document.getElementById('typed')
// console.log(animate);
// var typed = new Typed(animate, {
//     strings: [
//         "Dimanapun",
//         "Kapanpun"
//     ],
//     typeSpeed : 100,
//     backSpeed : 100,
//     loop : true
// });

$(document).ready(function(){
    $('.nav').animate({opacity : '1', padding : '30px 0px'}, 500);
});

// const images = document.querySelectorAll('.motion');

// observer = new IntersectionObserver((entries) => {
    
// //     console.log(entries);
// //     //  FOR 1 ELEMENT
// //     // if (entries[0].intersectionRatio > 0){
// //     //     entries[0].target.style.animation = `anim1 2s forwards ease-out`;
// //     // } else {
// //     //     entries[0].target.style.animation = `none`;
// //     // }

// //     // FOR MULTIPLE ELEMENTS
//     entries.forEach(entry => {
//         if(entry.intersectionRatio > 0 ){
//             entry.target.style.animation = `anim1 1.5s forwards ease-out`;
//         } else{
//             entry.target.style.animation = 'none';
//         }
//     })
// });

// images.forEach(image =>{
//     observer.observe(image);
// });

const images = document.querySelectorAll('.motion');

observer = new IntersectionObserver((entries) => {

    entries.forEach( entry => {
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = `anim1 1.5s forwards ease-out`;
        } else{
            entry.target.style.animation = 'none';
        };
    });
});
images.forEach(image => {
    observer.observe(image);
});

$('h1.free' ).click(function (){
    $('.free').slideDown();
});
$('h1.standard' ).click(function (){
    $('.standard').slideDown();
});
$('h1.premium' ).click(function (){
    $('.premium').slideDown();
});

$('#satu').mouseover(function(){
    $('.img1').css('transition', 'all .2s ease-out').css('transform', 'scale(1.1)',)
});
$('#satu').mouseout(function(){
    $('.img1').css('transform', 'scale(1)',)
});

$('#dua').mouseover(function(){
    $('.img2').css('transition', 'all .2s ease-out').css('transform', 'scale(1.1)',)
});

$('#dua').mouseout(function(){
    $('.img2').css('transform', 'scale(1)',)
});

$('#tiga').mouseover(function(){
    $('.img3').css('transition', 'all .2s ease-out').css('transform', 'scale(1.1)',)
});

$('#tiga').mouseout(function(){
    $('.img3').css('transform', 'scale(1)',)
});

