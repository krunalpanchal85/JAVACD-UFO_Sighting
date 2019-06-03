// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

function loadTable(dataArray) {
  // First, clear out any existing data
 tbody.html("");
 console.log(dataArray);
 dataArray.forEach((rowData) => {
  var row = tbody.append("tr");
  Object.entries(rowData).forEach(([key, value]) => {
  var cell = tbody.append("td")
      cell.text(value); 
  });
  });
  
}
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

   var filteredData = tableData.filter(UFOFind => UFOFind.datetime === inputValue);

    console.log(filteredData);
    loadTable(filteredData);
      // filteredData.forEach((filteredData) => {
      //   var row = tbody.append("tr");
      //   Object.entries(filteredData).forEach(([key, value]) => {
      //   var cell = tbody.append("td")
      //       cell.text(value); 
      //   });
      //   });


});

loadTable(tableData);
