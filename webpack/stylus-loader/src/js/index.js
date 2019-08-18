import '../css/estilos.css';
import message from './message.js';
import fotoLiviana from '../images/fotoLiviana.png';
import videoCore from '../videos/core.mp4';
import data from './teachers.json';
import renderToDom from './render-to-dom';

import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';

render(<Teachers data={data}/>, document.getElementById('container'));



console.log(data);

data.teachers.forEach(teacher => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderToDom(element);    
});

document.write(message.firstMessage());
message.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', fotoLiviana);
img.setAttribute('height', 80);
img.setAttribute('width', 80);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', videoCore);
video.setAttribute('width', 280);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);

console.log('Hola Mundo desde WebPack desde un archivo webpack.config');