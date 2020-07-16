let img = document.getElementsByClassName("losangeles");

new simpleParallax(img);

let img2 = document.getElementsByClassName("luxury-1");

new simpleParallax(img2, {
    orientation: "right",
});

let img3 = document.getElementsByClassName("luxury-2");

new simpleParallax(img3, {
    orientation: "up",
});

let img4 = document.getElementsByClassName("luxury-3");

new simpleParallax(img4, {
    orientation: "down",
});

let img5 = document.getElementsByClassName("showcase");

new simpleParallax(img5, {
    orientation: "up",
});
