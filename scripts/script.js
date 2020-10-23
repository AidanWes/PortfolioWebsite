const type = document.getElementById('intro');
const msg = "Hello, my name is Aidan. I'm an aspiring Web Developer";
let idx = 0;
let typing = setInterval(typeText, 100);

//On refresh puts the user back at the top of the chain
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.bind("orientationchange", function(){
    let orientation = window.orientation;
    let new_orientation = (orientation) ? 180 + orientation : 0;
    document.body.style.webkitTransform = "rotate(" + new_orientation + "deg)";
});

function typeText() {
    //Auto types the text in the intro screen
    type.innerText = msg.slice(0, idx);
    idx++;
    
    if (idx > msg.length) {
        clearInterval(typing);
        setInterval(blink, 1000);
    }
}

function blink() {
    let cursor = document.getElementById('cursor');
    cursor.innerText = (cursor.innerText === '_' ? '  ' : "_");
}

function select(index) {
    let nav = document.getElementById('nav');
    let newNav = nav.cloneNode(true);
    nav.parentNode.replaceChild(newNav, nav);
    
    let icons = [...document.getElementsByClassName('option')];
    
    icons.forEach((icon, idx)=> {
        if (idx === index)
        {
            icon.style.color = "#08fdd8";
        }
        
        else
        {
            icon.style.color = "#545454";
            icon.onmouseover = function () {
                icon.style.color = '#08fdd8';
            };
            icon.onmouseleave = function () {
                icon.style.color = "#545454";
            };
            
        
        }
    });
}

function welcome() {
    //Replays the animation if the user refreshes the page
    let elm = document.getElementById('home');
    let newElm = elm.cloneNode(true);
    elm.parentNode.replaceChild(newElm, elm);
    
    //Applies the animation to each letter of the animation
    let letters = [...document.getElementsByClassName('fill')];
    letters.forEach(letter =>{
        letter.style.animation = "line-anim 3.5s ease forwards";
    });
    
    let objects = [...document.getElementsByClassName('fade')];
    objects.forEach(object=>{
        object.style.animation = "fade-in 3.5s ease forwards";
    })
    
}