//your JS code here. If required.

function removeSelectedColor(){
  var selectElement = document.getElementById("colorSelect");

    // Get the selected option
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    // Remove the selected option
    selectElement.removeChild(selectedOption);
	
}