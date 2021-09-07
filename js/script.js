//1

// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/

/*Hello*/
const helloSpeaker = {
	speakWord: 'Hello',	
};
 
(function () {
	helloSpeaker.speak = function (Name) {
		return (helloSpeaker.speakWord + " " + Name);
	}
}());


 
/*Goodbye*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (Name) {
		return (byeSpeaker.speakWord + " " + Name);
	}
}());

(function () {
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpeaker.speak(name));
			document.write(helloSpeaker.speak(name + '<br>'));
		}
	}
})();