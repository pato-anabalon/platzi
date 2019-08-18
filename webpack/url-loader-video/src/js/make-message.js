const make = {}

make.makeMessage = function (msg) {
	const element = document.createElement('p');
	element.textContent = msg;
	return element;
}

export default make;
