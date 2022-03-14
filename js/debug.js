let tamgotchi = document.getElementById('SVGObject').contentDocument;

let cat = tamgotchi.getElementById('characterGroup');
    gsap.from(cat, {
    duration: 5,
    autoAlpha: 0
    });