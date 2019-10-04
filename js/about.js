//Initialise the environment by loading the appliances into the select options.
const initialise = () => {
    document.querySelector('.about').classList.add("active");
};

//listen for click event on the home menu option.
document.querySelector(".home").addEventListener("click", () => {
	document.querySelector(".home").classList.add("active");
	document.querySelector(".about").classList.remove("active");
    document.querySelector(".team").classList.remove("active");
    
    window.location = "./index.html";
},  false);

//listen for click event of the about menu option.
document.querySelector(".about").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("active");
	document.querySelector(".about").classList.add("active");
    document.querySelector(".team").classList.remove("active");
    
    window.location = "./about.html";
}, false);

//listen for click event of the team menu option.
document.querySelector(".team").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("active");
	document.querySelector(".about").classList.remove("active");
	document.querySelector(".team").classList.add("active");

	window.location = "./team.html";
}, false);



