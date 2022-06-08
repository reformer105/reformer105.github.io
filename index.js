// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;

// Creates the event listner for the comands ==
// Yes this is a long one - could do with some
// improvements ===============================
input.keypress(function (e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help" || inputVal == "Help" ) {
			help();
			input.val('');
		} else if (inputVal == "ping" || inputVal == "Ping") {
			pong();
			input.val('');
		} else if (inputVal == "about" || inputVal == "About") {
			aboutMe();
			input.val('');
		} else if (inputVal == "contact" || inputVal == "Contact") {
			contactMe();
			input.val('');
		} else if (inputVal == "clear" || inputVal == "Clear") {
			clearConsole();
			input.val('');
		} else if (inputVal.startsWith("say") === true || inputVal.startsWith("Say") === true) {
			sayThis(inputVal);
			input.val('');
		} else if (inputVal.startsWith("sudo") === true || inputVal.startsWith("Sudo") === true) {
			sudo(inputVal);
			input.val('');
		} else if (inputVal == "time" || inputVal == "Time") {
			getTime();
			input.val('');
		} else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?' || inputVal == 'Whats that sound' || inputVal == 'What\'s that sound' || inputVal == 'Whats that sound?') {
			seperator();
			Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
			seperator();
			input.val('');
		} else if (inputVal.startsWith("exit") === true) {
			Output('<span class="blue">Goodbye! Comeback soon.</span>');
			setTimeout(function () {
				window.open('https://codepen.io/MarioDesigns');
			}, 1000);
		} else {
			Output('<span>command not found</span></br>');
			input.val('');
		}
	}
});

// functions related to the commands typed
// =======================================

//Links
const fxhash = `<a href="https://www.fxhash.xyz/u/Abdi" target="_blank" >https://www.fxhash.xyz/u/Abdi</a>`;
const twitter = `<a href="https://twitter.com/ReformerEth" target="_blank" >https://twitter.com/ReformerEth</a>`;
const objkt = `<a href="https://objkt.com/profile/reformer" target="_blank" >https://objkt.com/profile/reformer</a>`;

const aboutMeTwitter = `<a href="https://twitter.com/ReformerEth" target="_blank">@ReformerEth</a>`;

// prints out a seperator
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//clears the screen
function clearConsole() {
	output.html("");
	Output('<span>clear</span></br>');
}

// prints out a list of "all" comands available
function help() {
	var commandsArray = ['Help: List of available commands', '>help', '>about', '>contact', '>ping', '>time', '>clear', '>say'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

// prints the result for the pong command
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

// function to the say command
function sayThis(data) {
	data = data.substr(data.indexOf(' ') + 1);
	Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

// sudo?!? not really
function sudo(data) {
	data = data.substr(data.indexOf(' ') + 1);
	if (data.startsWith("say") === true) {
		data = "Not gona " + data + " to you, you don\'t own me!"
	} else if (data.startsWith("apt-get") === true) {
		data = "<span class='green'>Updating...</span> The cake is a lie! There is nothing to update..."
	} else {
		data = "The force is week within you, my master you not be!"
	}
	Output('<span>' + data + '</span></br>');
}

// function to get current time...not
function getTime() {
	Output('<span>It\'s the 21st century man! Get a SmartWatch</span></br>');
}

function aboutMe() {
	var aboutMeArray = ['>About:', 'Hi There!', 'I\'m Abdi, a dropout student and a self taught programmer, I make Apps and websites full-time, and Generative arts part-time.', `Fell free to follow me on twitter ${aboutMeTwitter} - Also see contact page for more socials.`];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function contactMe() {
	var contactArray = ['>Contact:', `[Fxhash](${fxhash})`, `[Objkt](${objkt})`, `[Twitter](${twitter})`];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}