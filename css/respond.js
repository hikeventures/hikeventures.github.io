var existingTitle = 'Sale Price';
var newTitle = 'Price';
var existingTitle1 = 'Price Discount Percent';
var newTitle1 = 'Discount';
var tableHeaderElements = document.getElementsByTagName('th');
for (var i = 0; i < tableHeaderElements.length; i++) {
    if (tableHeaderElements[i].innerHTML.indexOf(searchString) !== -1) {
        tableHeaderElements[i].innerHTML=tableHeaderElements[i].innerHTML.replace(existingTitle,newTitle);         break;
    }
}
var tableHeaderElements1 = document.getElementsByTagName('th');
for (var j = 0; j < tableHeaderElements1.length; j++) {
    if (tableHeaderElements1[j].innerHTML.indexOf(searchString) !== -1) {
        tableHeaderElements1[j].innerHTML=tableHeaderElements1[j].innerHTML.replace(existingTitle1,newTitle1);          break;
    }
}
