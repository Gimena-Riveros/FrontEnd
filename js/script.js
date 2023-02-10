// function to edit skills text: editTextSkils AND myFunctionEditSkills
function editTextSkills() {
    let textSkills = document.getElementById("text-skills").innerText;
    
    document.getElementById("edit-skills").style.display="block";

    console.log(textSkills);

}
function logMessage(myMessage) {
    console.log(myMessage + "<br>");
}

function myFunctionEditSkills(value) {
    document.getElementById("text-skills").innerText=value;
    //if press enter so save
    let textTask = document.getElementById("edit-skills");
    textTask.addEventListener('keyup', (e) => {
        logMessage('Key "${e.key}" released [event: keyup]');
        if(e.key == "Enter") {
            document.getElementById("edit-skills").style.display="none"
        }
    });
}
//Basta eXperiencia en el armado de estructura de paginas web : ) 

// function style selection option and out before selection
function selection(link) {
    var options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "selection"
    
    // menu desapere after choice
    var x = document.getElementById("nav");
    x.className = "";
}
//  responsiveMenu()
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className === "") {
        x.className = "responsive";
    } else{
        x.className = "";
    }
}
//  TIMELINE    EXPERIENCE
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const sections = qs('.section-experience', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e){
    const{
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    console.log(dist);

    if (down && !full){
        set = Math.max(set, dist);
            line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full){
        full = true;
        line.style.bottom = `-50px`
    }

    sections.forEach(item => {
        //console.log(items);
        const rect = item.getBoundingClientRect();

        if(rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me')
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler)
