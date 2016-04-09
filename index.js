function askName() {
	var askUserName = prompt("What is your name?") 
	if (askUserName === "Michael" || askUserName === "michael" || askUserName === "Michael Melin" || askUserName === "michael melin") {
		console.log("Welcome back Michael.")
	} else {
		console.log(askUserName + "," "you are not welcome in this system.")
	}
};

askName(); 
