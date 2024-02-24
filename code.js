gsap.registerPlugin(TextPlugin);

const linesOfText = [
    "It was a dark and stormy night...",
    "...the rain fell in torrents - ",
    "- except at occasional intervals...",
    "...when it was checked by a violent gust of wind...",
    "...which swept up the streets...",
    "(for it was London that our scene lies)",
    "...rattling along the housetops...",
    "...and fiercely agitating the scanty flame...",
    "...that struggled against the darkness."
];

const textElement = document.querySelector('.txt-animate');
let tl = gsap.timeline({repeat: -1});
let currentIndex = 0;

linesOfText.forEach((text, index) => {
    tl.to(textElement, {
        duration: 5,
        text: text,
        ease: 'none'
    });
    tl.to(textElement, {
        duration: 3,
        ease: 'none'
    });
    for (let i = text.length; i >= 0; i--) {
        tl.to(textElement, {
            duration: 0.1,
            text: text.substring(0, i),
            ease: 'none'
        });
    }
    tl.to({}, { duration: 1 });
});

gsap.registerPlugin(EaselPlugin);

const canvas = document.getElementById('myCanvas'),
    stage = new createjs.Stage(canvas),
    circle = new createjs.Shape(),
    g = circle.graphics;

g.beginFill(createjs.Graphics.getRGB(255, 0, 0));
g.drawCircle(0, 0, 100);
g.endFill();

circle.cache(-100, -100, 200, 200);

circle.x = 200;
circle.y = 200;

stage.addChild(circle);

gsap.ticker.add(() => stage.update());
stage.update();

gsap.to(circle, {
    duration: 2,
    scaleX: 0.5,
    scaleY: 0.5,
    easel: { tint: 0x00ff00 },
});
gsap.to(circle, {
    duration: 3,
    scaleX: 1.5,
    scaleY: 0.8,
    x: 250,
    y: 300,
    rotation: 180,
    easel: { tint: '#0000FF', tintAmount: 0.5 },
    delay: 3,
    ease: 'elastic',
});

gsap.to(circle, { duration: 2, easel: { saturation: 0 }, delay: 6 });
