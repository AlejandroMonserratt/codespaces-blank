import '@leanix/reporting'; // Import the LeanIX reporting module

lx.init() // Initialize the LeanIX platform
.then(function (setupInfo) { // Handle the initialization promise
  var config = { // Define configuration options for the reporting module
    menuActions: { // Specify actions to be added to the reporting menu
      reportsDropdowns: [{ // Define a custom dropdown menu
        id: 'SORT_DROPDOWN_REPORTS', // Unique identifier for the dropdown
        name: 'SORT', // Display name for the dropdown
        entries: [ // Define entries for the dropdown
          {
            id: 'SORT_BY_NAME_REPORTS', // Unique identifier for sorting by name
            name: 'By Name', // Display name for sorting by name
            callback: () => { // Define a callback function for sorting by name
              console.log('Sort by name...'); // Log a message indicating sorting by name
            }
          },
          {
            id: 'SORT_BY_DATE_REPORTS', // Unique identifier for sorting by date
            name: 'By Date', // Display name for sorting by date
            callback: () => { // Define a callback function for sorting by date
              console.log('Sort by date...'); // Log a message indicating sorting by date
            }
          }
        ]
      }]
    }
  };
  lx.ready(config); // Make the LeanIX platform ready with the specified configuration
});