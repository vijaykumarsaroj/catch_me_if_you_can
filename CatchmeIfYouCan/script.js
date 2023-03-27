const box = document.getElementById('box');
var h = window.innerHeight;
var w = window.innerWidth;
var bh = box.getBoundingClientRect().height;
var bw = box.getBoundingClientRect().width;

box.addEventListener('mouseover', () => {
    let randx = Math.floor(Math.random() * ((w-bw) + 1));
    let randy = Math.floor(Math.random() * ((h-bh) + 1));
    // console.log('hi');
    box.style.transform = "translate(" + randx + "px," + randy + "px)";
})