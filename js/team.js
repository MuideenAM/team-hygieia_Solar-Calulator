//Declare members array of objects constant.
const members = [
	{
		number: 1,
		name: "Duru Ifeanyi",
		slackhandle: "@devifymatt",
		email: "ifeanyiduru98@yahoo.com"
	},
	{
		number: 2,
		name: "Chenemi Zekeri",
		slackhandle: "@chenemi",
		email: "chenemi2@gmail.com"
	},
	{
		number: 3,
		name: "Atanganam Paulinus",
		slackhandle: "@Atanganam Paulinus",
		email: "atpaulinus3@gmail.com"
	},
	{
		number: 4,
		name: "Hill Onyechukwa",
		slackhandle: "@codervulcan",
		email: "hillonyechekwa@gmail.com"
	},
	{ 
		number: 5,
		name: "Edima Inwang",
		slackhandle: "@Edima",
		email: "edimainwang@gmail.com"
	},
	{
		number: 6,
		name: "Adefemi Aishat",
		slackhandle: "@lade Techy",
		email: "adefemiaishat.aa@gmail.com"
	},
	{
		number: 7,
		name: "Adesiyan Divine",
		slackhandle: "@Nabith",
		email: "divinegiftadesiyan@gmail.com"
	},
	{
		number: 8,
		name: "Ajiboye Fatimo Happiness",
		slackhandle: "@Happiness",
		email: "fatimajiboy2000@gmail.com"
	},
	{
		number: 9,
		name: "Kelechi Chibundu",
		slackhandle: "@Callkaycee",
		email: "callkaycee4real@yahoo.com"
	}, 
	{	
		number: 10,
		name: "Muideen MURITALA",		
		slackhandle: "@gentilityisworthwhile",
		email: "gentilityisworthwhile@yahoo.com"
	},
	{
		number: 11,
		name: "Musa Bello Ibrahim",
		slackhandle: "@Musa Bello",
		email: "mbibrahim.4@gmail.com"
	}, 
	{
		number: 12,
		name: "Ogunrinola Oluwaferanmi Mobolaji",
		slackhandle: "@Oluwaferanmi",
		email: "feranrinola@gmail.com"
	},
	{
		number: 13,
		name: "Oladipo Umar",
		slackhandle: "@Nightingale",
		email: "oladipoumar@gmail.com"
	},
	{
		number: 14,
		name: "Olagoke Abel Olayinka",
		slackhandle: "@Abel Olayinka",
		email: "olagokeabel1991@gmail.com"
	},
	{
		number: 15,
		name: "Oluwaseyi Ogunjuyigbe",
		slackhandle: "@seyiogunjuyigbe",
		email: "seyiogunjuyigbe@gmail.com"
	},
	{
		number: 16,
		name: "Osinaya Oludare",
		slackhandle: "@Gandhi",
		email: "osinayaoludare@gmail.com"
	},
	{
		number: 17,
		name: "Prince Alfred",
		slackhandle: "@Lini",
		email: "Princelini4@gmail.com"
	},
	{
		number: 18,
		name: "Prince Chukwudire",
		slackhandle: "@Alphajeez",
		email: "chimeremezechukwudire@gmail.com"
	},
	{
		number: 19,
		name: "Saratu Muazu Bello",
		slackhandle: "@Sarah Embee",
		email: "Sarahembee71@gmail.com"
	},
	{	
		number: 20,
		name: "Sayil Sunday",
		slackhandle: "@Sayil sunday",
		email: "sundaysayil4u@gmail.com"
	},
	{
		number: 21,
		name: "Segun Francis",
		slackhandle: "@ShockWave",
		email: "francis4dblues@gmail.com"
	},
	{
		number: 22,
		name: "Stephen Akadiri",
		slackhandle: "@Stephen Akadiri",
		email: "akadiristephen@gmail.com"
	},
	{
		number: 23,
		name: "Stephen Oyebanji",
		slackhandle: "@SteveOS",
		email: "seyioyebanjistephen@gmail.com"
	},
	{
		number: 24,
		name: "Tega Kofi",
		slackhandle: "@Tegakay",
		email: "kofitega@gmail.com"
	},
	{
		number: 25,
		name: "Victor Awotidebe",
		slackhandle: "@Victor Awotidebe",
		email: "victorawotidebe@gmail.com"
	},
	{
		number: 26,
		name: "Oluwaseyi Adaramola",
		slackhandle: "@SY NOBLE 01",
		email: "oluwaseyiadara95@gmail.com"
	}
];

//Initialise the environment by loading the appliances into the select options.
const initialise = () => {
	document.querySelector('.team').classList.add("clicked");
	
	let table = document.querySelector("table");
	generateTable(table, members);
	table.d
};

//Populate table cells with data of members constant.
function generateTable(table, data) {
	for (let element of data) {
	  let row = table.insertRow();
	  for (key in element) {
		let cell = row.insertCell();
		let text = document.createTextNode(element[key]);
		cell.appendChild(text);
		cell.className = "formfield";
	  }
	}
  }  

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

	window.location = "./team.html";
}, false);



