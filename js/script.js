let burgerClass = document.querySelector('.burger_menu');
let burger = document.querySelector('.burger');

function t1() {
    burgerClass.classList.toggle("hidden");
}
burger.onclick = t1;

// let div;
// let divParent = document.querySelector('.choice');
// let slide = document.querySelectorAll(".slide");
// let inner = document.querySelector(".inner");
// inner.style.width = `${slide.length * 300 + 100}px`;
// let count = 0;
// for (i = 1; i <= slide.length; i++) {
//     div = document.createElement('div');
//     div.className = "choice-item";
//     divParent.append(div);
// }
// let choice = document.querySelectorAll(".choice-item");
// // function t2() {
// //     choice[count].classList.add("choice_active");
// // }
// // choice[count].onclick = t2;
// // function f3() {
// //     for (j = 1; j <= choice.length; j++) {
// //         if (choice[j].classList.contains('choice_active') == true) {
// //             this.onclick = this.classList.add("choice_active");
// //             inner.style.transform = `translateY(-${slide[count].style.width}px)`;
// //         }
// //     }
// // }
// function f1() {
//     //for (j = 0; j <= choice.length - 1; j++) {
//     //if (choice[count].onclick) { choice[count].classList.add("choice_active") };
//     choice[2].onclick = choice[2].classList.add("choice_active");
//     //}
// }
// f1();


$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    //slidesToScroll: 3
});





// $(document).ready(function () {

//     $('.slider').slick({
//         arrows: true,
//         dots: true,
//         slidesToShow: 2,
//         //appendDots: $('.choice')
//     });
// });

