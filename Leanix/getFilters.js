import '@leanix/reporting'; // Import the LeanIX reporting module

lx.init() // Initialize the LeanIX platform
.then(function (setupInfo) { // Handle the initialization promise
  var config = { // Define configuration options for the reporting module
    facets: [{ // Specify facets for the report
      key: 'main', // Key for the facet
      attributes: ['Name', 'Type', 'Description'], // Attributes to display for Fact Sheets
      callback: function (data) { // Define a callback function for when data is updated
        console.log(data); // Log the updated data
        var html = ''; // Initialize HTML variable to store generated HTML
        for (var index = 0; index < data.length; index++) { // Loop through the data
          var fs = data[index]; // Get individual Fact Sheet data
          html += '<div>' + fs.Name + '</div>'; // Generate HTML for each Fact Sheet
        }
        document.body.innerHTML = html; // Display the generated HTML in the body element
      }
    }]
  };
  lx.ready(config); // Make the LeanIX platform ready with the specified configuration
});
