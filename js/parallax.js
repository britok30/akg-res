let img = document.getElementsByClassName("losangeles");

new simpleParallax(img, {
    transition: "cubic-bezier(0,0,0,1)",
});

let img2 = document.getElementsByClassName("luxury-1");

new simpleParallax(img2, {
    orientation: "right",
    transition: "cubic-bezier(0,0,0,1)",
});
