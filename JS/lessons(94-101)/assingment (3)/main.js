const div = document.querySelector('div');
const p = div.nextElementSibling;;

p.remove();

const firstDiv = document.createElement('div');
firstDiv.className = 'start';
firstDiv.setAttribute('title', 'Start Element');
firstDiv.setAttribute('data-value', 'Start');
const fText = document.createTextNode('Start');
firstDiv.append(fText);

div.before(firstDiv);

//    ###

const lastDiv = document.createElement('div');
lastDiv.className = 'End';
lastDiv.setAttribute('title', 'End Element');
lastDiv.setAttribute('data-value', 'End');
const lText = document.createTextNode('End');


lastDiv.prepend(lText);
div.after(lastDiv);