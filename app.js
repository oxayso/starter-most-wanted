
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
	}while(!(SearchType == "name" || SearchType == "attributes")); 
	switch(SearchType){
		case "name":
			var findPerson = getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
			if(findPerson.length > 0){
				mainMenu(findPerson[0], people);
			} else {
				alert("Did not find anyone matching those perameters.");
				do{
				var nameRestart = prompt("Would you like to restart? (If so, type 'yes'. If not, type 'no')");
				}while(!(nameRestart == "yes" || nameRestart == "no"));
				if(nameRestart.toLowerCase() == "yes")
					return initMostWanted(people);
				if(nameRestart.toLowerCase() == "no")
					break;
			}
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

function getPerson(firstName, lastName, people){
	var findPerson = people.filter(function(person){
		return (person.firstName.toLowerCase() === firstName) && (person.lastName.toLowerCase() === lastName);
	});
	return findPerson;
}

function mainMenu(person, people){
	if(!person){
		alert("Sorry, could not find individual.");
		return initMostWanted(people);
	}


	var displayOption = prompt("Found: " + person.firstName + " " + person.lastName +
	 "\n\nDo you want to know their 'info', 'family', 'next of kin', or 'descendants'? Please type what you'd like." +
	  "\n\nOtherwise, type 'restart' or 'quit'.");

	switch(displayOption){

		case "info":
			displayPersonInfo(person, people);

		break;
		case "family":
			displayFamily(person, people);

		break;
		case "kin":
			displayNextOfKin(person, people);

		break;
		case "descendants":
			displayDescendants(person, people);

		break;
		case "restart":
			initMostWanted(people); 

		break;
		case "quit":
		break;
		default:
			alert("There was an error processing your request.");
			return mainMenu(person, people);
		break;
	}
}


function displayPersonInfo(person, people){
	alert("Name: " +person.firstName + " " +person.lastName + "\nGender: " +person.gender+
	 "\nTheir occupation is: "+ person.occupation + "\nBirthday: " +person.dob +
	  "\nHeight: " +person.height + " inches" + "\nWeight: " +person.weight + " lbs." +
	  "\nEye Color: " +person.eyeColor);
	mainMenu(person, people);

}

function displayDescendants(person, people){

}

/*function getParents(person, people){
	

	for(var i = 0; i < people.length; i++){
		if( (person.parents[0] && people[i].id == person.parents[0].id) || people[i].id == person.parents[1].id){
			var parents = people[i].firstName +" "+ people[i].lastName;
		}else{
			var parents = "None";
		}
	}

	//var parents = people[i].firstName +" "+ people[i].lastName


	return parents;
}
*/

/*function filterParent(person, people){
	var filteredParents = people.filter(function(parent){
		return (parent.id === person.parent[0].id);
	});
	return filteredParents;
}
*/

function displayFamily(person, people){

	var parents = getParents(person.parents, people);

	var spouse = getSpouse(person.currentSpouse, people);

	//var kids = 
	
	//var siblings = 

	alert("-The " +person.lastName+ " Family- \nParents: " + parents + "\nSpouse: " + spouse + "\nSiblings: " + "\nKids: ");
	mainMenu(person, people);
}

function getParents(parentsId, people){
	if(parentsId.length == 0){
		return "None";
	}
	else{
		for(var i = 0; i < parentsId.length; i++){
			if(parentsId[0]){
				var parents = people.filter(function(person){
					return (person.id === parentsId[i]);
				});
			}
		}
		if(parents.length == 2){
			return parents[0].firstName +" "+ parents[0].lastName + " and " + parents[1].firstName +" "+ parents[1].lastName
		}else{
			return parents[0].firstName +" "+ parents[0].lastName
		}
		
	}

} 


function getSpouse(spouseId, people){
	var spouseById = people.filter(function(person){
			return (person.id === spouseId);
	});
	if(spouseById[0]){
		return spouseById[0].firstName +" "+ spouseById[0].lastName;
	}else{
		return "None";
	}
}


function displayNextOfKin(person, people){
	alert("Name: " +person.lastName+ " " +person.firstName);
	mainMenu(person, people);
}



