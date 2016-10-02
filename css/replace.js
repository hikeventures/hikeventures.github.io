var existingTitle = 'Sale Price';
var newTitle = 'Price';

var tableHeaderElements = document.getElementsByTagName('th');
for (var i = 0; i < tableHeaderElements.length; i++) {
    if (tableHeaderElements[i].innerHTML.indexOf(searchString) !== -1) {
        tableHeaderElements[i].innerHTML=tableHeaderElements[i].innerHTML.replace(existingTitle,newTitle);          break;
        
    }
}
