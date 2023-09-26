

var html = document.getElementById('html');
var css = document.getElementById('css');
var javascript = document.getElementById('javascript');
var react = document.getElementById('react');
var redux = document.getElementById('redux');
var tailwind = document.getElementById('tailwind');
var firebase = document.getElementById('firebase');
var context = document.getElementById('context');
var git = document.getElementById('git');
var web = document.getElementById('web');


var webHeight = web.clientHeight;

document.addEventListener('scroll', animate);

// Check if the element is in view
function inView() {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var scrollPosition = scrollY + windowHeight;
    var elementPosition = web.getBoundingClientRect().top + scrollY + webHeight;

    return scrollPosition > elementPosition;
}

// Animate the element when it is in view
function animate() {
    if (inView()) {
        html.classList.add('animate-html');
        css.classList.add('animate-css');
        javascript.classList.add('animate-javascript');
        react.classList.add('animate-react');
        redux.classList.add('animate-redux');
        firebase.classList.add('animate-firebase');
        context.classList.add('animate-context');
        tailwind.classList.add('animate-tailwind');
        git.classList.add('animate-git');

        // Remove the scroll event listener once the animation is triggered
        document.removeEventListener('scroll', animate);
    }
}

