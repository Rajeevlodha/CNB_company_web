// const container = document.getElementById("productContainer");

// // MANUAL SCROLL
// function scrollProductsLeft() {
//     container.scrollBy({
//         left: -300,
//         behavior: "smooth"
//     });
// }

// function scrollProductsRight() {
//     container.scrollBy({
//         left: 300,
//         behavior: "smooth"
//     });
// }

// // AUTO SLIDER
// let auto = setInterval(autoSlide, 3000);

// function autoSlide() {
//     container.scrollBy({
//         left: 300,
//         behavior: "smooth"
//     });

//     // reset to start
//     if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
//         container.scrollTo({
//             left: 0,
//             behavior: "smooth"
//         });
//     }
// }

// // pause on hover
// container.addEventListener("mouseenter", () => clearInterval(auto));
// container.addEventListener("mouseleave", () => {
//     auto = setInterval(autoSlide, 3000);
// });