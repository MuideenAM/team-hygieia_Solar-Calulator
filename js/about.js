//Initialise the environment by loading the appliances into the select options.
const initialise = () => {
    document.querySelector('.about').classList.add("clicked");
};

//listen for click event on the home menu option.
document.querySelector(".home").addEventListener("click", () => {
	document.querySelector(".home").classList.add("clicked");
	document.querySelector(".about").classList.remove("clicked");
    document.querySelector(".team").classList.remove("clicked");
    
    window.location = "./index.html";
},  false);

//listen for click event of the about menu option.
document.querySelector(".about").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("clicked");
	document.querySelector(".about").classList.add("clicked");
    document.querySelector(".team").classList.remove("clicked");
    
    window.location = "./about.html";
}, false);

//listen for click event of the team menu option.
document.querySelector(".team").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("clicked");
	document.querySelector(".about").classList.remove("clicked");
	document.querySelector(".team").classList.add("clicked");
}, false);



