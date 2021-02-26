var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener('click', removeAllItem);

var ul = document.getElementById('list');
var li;

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    var textnode;
    if (item === '') {
        textnode = document.createTextNode('input is empty!!!');
        const controlsDiv = document.querySelector('.controls');
        controlsDiv.insertBefore(textnode, controlsDiv.childNodes[4]);

        setTimeout(() => {
            controlsDiv.removeChild(controlsDiv.childNodes[4]);
        }, 500)
        
    } else {
        //create text node
        textnode = document.createTextNode(item);
        
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');

        //add these element on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2)

        input.value = '';
    }
}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

function removeAllItem() {
    li = ul.children;
    while(li[0]) {
        ul.removeChild(li[0]);
    }
}