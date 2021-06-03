// sliderData
// normally you would get this kind of data via an AJAX request and perform an HTTP request
// this simple example is to show how the carousel works locally
const sliderData = [
    {
        name_data: "Kater Karlo",
        job_title_data: "web developer",
        img_data: "./img/kitten01.jpg",
        text_data:
            "Playing with balls of wool i show my fluffy belly but it's a trap! if you pet it i will tear up your hand jump up to edge of bath, fall in then scramble in a mad panic to get out making sure that fluff gets into the owner's eyes.",
    },
    {
        name_data: "Choupette Lagerfeld",
        job_title_data: "web designer",
        img_data: "./img/kitten02.jpg",
        text_data:
            "Dismember a mouse and then regurgitate parts of it on the family room floor plop down in the middle where everybody walks kitten is playing with dead mouse, give me some of your food give me some of your food give me some of your food meh, i don't want it or flop over spread kitty litter all over house waffles.",
    },
    {
        name_data: "Garfield",
        job_title_data: "intern",
        img_data: "./img/kitten03.jpg",
        text_data:
            "Push your water glass on the floor. Scream for no reason at 4 am bird bird bird bird bird bird human why take bird out i could have eaten that. Bring your owner a dead bird going to catch the red dot today going to catch the red dot today sit as close as possible to warm fire without sitting on cold floor.",
    },
    {
        name_data: "Puss in Boots",
        job_title_data: "the boss",
        img_data: "./img/kitten04.jpg",
        text_data:
            "Drink from the toilet find something else more interesting check cat door for ambush 10 times before coming in for warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats.",
    },
];

// elements
const sliderImg = document.querySelector('[data-img="slider-img"]');
const sliderName = document.querySelector('[data-name="full-name"]');
const sliderJobTitle = document.querySelector('[data-job="job-title"]');
const sliderDescription = document.querySelector('[data-description="description"]');
// buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set initial slide
let currentSlide = 0;

// load DOM, show initial slide
window.addEventListener('DOMContentLoaded', function () {
    showCat();
});

// show cat based on currentSlide
function showCat() {
    const kittycat = sliderData[currentSlide];
    sliderImg.src = kittycat.img_data;
    sliderName.textContent = kittycat.name_data;
    sliderJobTitle.textContent = kittycat.job_title_data;
    sliderDescription.textContent = kittycat.text_data;
}

// show next slide
nextBtn.addEventListener('click', function () {
    currentSlide++;
    if (currentSlide > sliderData.length - 1) {
        currentSlide = 0;
    }
    showCat();
});

// show previous slide
prevBtn.addEventListener('click', function () {
    currentSlide--;
    if (currentSlide <= 0) {
        currentSlide = sliderData.length - 1;
    }
    showCat();
});

// show random slide
randomBtn.addEventListener('click', function () {
    currentSlide = Math.floor(Math.random() * sliderData.length);
    showCat();
});
