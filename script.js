var myGame = new WizardOrpheus('', `
create a rpg game with a tiny bit of fantasy, the currency is credits and the user starts out with none. go along with any idea the user has and sometimes create some funny setbacks, they can apply for a loan at the bank to get money if they need. there are a few important characters: josh the blood god, mohg the destroyer, greg, and lplplplp
`)

myGame.createUserAction({
	name: 'message',
	parameters: ['Message from user to game'],
	howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
	if (e.code == 'Enter') { // if the user presses enter 
		let userInput = document.getElementById('input').value
		myGame.message(userInput)
		document.getElementById('conversation').innerHTML += '<p>170.141.250.184: ' + userInput + '</p>'
		document.getElementById('input').value = ''
	}
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
	// Add the bot's response to the conversation
	document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})
