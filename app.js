
/*  Remove this from your final submission
function printAllToConsole(dataObj){
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataObj[key]));
		}
	}
}
printAllToConsole(data);
*/


function initMostWanted(people){
	
	alert("Welcome to Most Wanted! Please follow the prompts to pursue the information for the person you seek.");
	
	do{	
		var SearchType = prompt("Would you like to search by name or attributes? Enter 'name' or 'attributes'.");
	}while(!(SearchType == "name"|| SearchType == "attributes")); 
	switch(SearchType){
		case "name":
		var person = getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
		mainMenu(person, people);
		break;
		case "attributes":

		do{
			var Gender = prompt("What is their gender? (M=Male, F=Female)");
		}while(!(Gender == "F" || Gender == "M"));

		do{
		var Age = prompt("Approximately how old are they? Please Type: '18 & Under', '18-25', '25-50' or '50+' ");
	}while(!(Age == "18 & Under" || Age == "18-25" || Age == "25-50" || Age == "50+"));

			var Height = prompt("Approximately how tall is this person? (In INCHES)");
			// (Inches, FT, In)

			var Weight = prompt("About how much does this person weigh? (In LBS)");

		do{
			var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");
		}while(!(EyeColor == "Brown" || EyeColor == "Blue" || EyeColor == "Hazel" || EyeColor == "Green" || EyeColor == "Black"));

			var Occupation = prompt("What is their line of work? (EX: Nurse)");
			// Dropdown

			mainMenu(person, people);
			break;
			default:
			alert("There was an error processing your request.");
			initMostWanted(people);
			break;
		}
	}

	function getPerson (firstName, lastName, people){
			var result = people.filter(function(person){(person.firstName === firstName) && (person.lastName === lastName)});
			return result;	
		}
	// if user enterd info that matches with data, alert further info for the individual

	function mainMenu (person, people){
		if(!person){
			alert("Sorry, could not find individual.");
			return initMostWanted(people);
		}


		var displayOption = prompt("Found" + person.firstName + " " + person.lastName + "." + "Do you want to know their 'info', 'family', 'next of kin', or 'descendants'? Please type what you'd like. Otherwise, click 'restart' or 'quit'.");

		switch(displayOption){

			case "info":
			displayInfo(person);

			break;
			case "family":
			getFamily(person, people);

			break;
			case "kin":
			getnextofkin(person, people);

			break;
			case "descendants":
			getdescendants(person, people);

			break;
			case "restart":
			initMostWanted(people)

			break;
			case "quit":

			break;
			default:
			return mainMenu(person, people);
			break;
		}
	}

	function getInfo(person, people){
		alert("person: " +person.firstname + " " +person.lastname + ".Their occupation is" +person.occupation + "___");
		mainMenu(person, people);

	}

	function getFamily(person, people){
		alert("person: " +person.lastName + " " +person.currentSpouse);
		mainMenu(person, people);
	}

	function getnextofkin(person, people){
		alert("person: " +person.lastName + " " +person.firstName);
		mainMenu(person, people);
	}