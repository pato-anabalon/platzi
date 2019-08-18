import renderToDom from'./render-to-dom.js';
import makeMessage from'./make-message'

const message = {}

const waitTime = new Promise((todoOk, todoMal)=>{
	setTimeout(()=>{
		todoOk('Han pasado 2 segundos')
	}, 2000)
})

message.firstMessage = () => {
	return('Hola mundo desde un módulo');
}

message.delayedMessage = async () => {	
	const message = await waitTime;
	console.log(message)
	renderToDom(makeMessage.makeMessage(message));
}

export default message;
