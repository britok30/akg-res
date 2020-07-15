let img = document.getElementsByClassName("losangeles");

new simpleParallax(img, {
    transition: "cubic-bezier(0,0,0,1)",
});

let img2 = document.getElementsByClassName("luxury-1");

new simpleParallax(img2, {
    orientation: "right",
    transition: "cubic-bezier(0,0,0,1)",
});

let img3 = document.getElementsByClassName("luxury-2");

new simpleParallax(img3, {
    orientation: "up",
    transition: "cubic-bezier(0,0,0,1)",
});

let img4 = document.getElementsByClassName("luxury-3");

new simpleParallax(img4, {
    orientation: "down",
    transition: "cubic-bezier(0,0,0,1)",
});

let img5 = document.getElementsByClassName("showcase");

new simpleParallax(img5, {
    orientation: "up",
    transition: "cubic-bezier(0,0,0,1)",
});
