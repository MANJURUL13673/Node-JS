var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener('click', removeAllItem);

var ul = document.getElementById('list');
var li;

function addItem() {
    console.log('Add button clicked');
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