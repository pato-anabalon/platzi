import '../css/estilos.css';
import message from './message.js';
import fotoLiviana from '../images/fotoLiviana.png';


document.write(message.firstMessage());
message.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', fotoLiviana);
img.setAttribute('height', 80);
img.setAttribute('width', 80);
document.body.append(img);

console.log('Hola Mundo desde WebPack desde un archivo webpack.config');