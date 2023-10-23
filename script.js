document.getElementById("container");
document.getElementById("nul");
document.getElementById("en");
document.getElementById("to");
document.getElementById("tre");

let nuSlide = "nul";
nul.style.display = "inline";

const timer = window.setInterval(naesteSlide, 1000);

    function naesteSlide(){
        if(nuSlide == "nul"){
            en.style.display = "inline";
            nul.style.display = "none";
            nuSlide = "en";
        }else if(nuSlide == "en"){
            to.style.display = "inline";
            en.style.display = "none";
            nuSlide = "to";
        }else if(nuSlide == "to"){
            tre.style.display = "inline";
            to.style.display = "none";
        }
        clearInterval(timer);
    }


/*
const slidenul = '<img src="images/billedenul">';
const slideen = '<img src="images/billedeen">';
const slideto = '<img src="images/billedeto">';
const slidetre = '<img src="images/billedetre">';

let billedArray = [slidenul, slideen, slideto, slidetre]

let nuSlide = nul;

const timer = window.setInterval(naesteSlide, 1000);

    function naesteSlide(){
        if(nuSlide == 0){
            container.innerHTML = billedArray[0];
            
        }else if(nuSlide == 1){
            to.style.display = "inline";
            en.style.display = "none";
        }else if(nuSlide == 2){
            tre.style.display = "inline";
            to.style.display = "none";
        }
        clearInterval(timer);
    }
    */