import '@leanix/reporting'; // Import the LeanIX reporting module

lx.init() // Initialize the LeanIX platform
  .then(function (setupInfo) { // Handle the initialization promise
    var config = {}; // Initialize an empty configuration object

    // Define a GraphQL query to retrieve information about IT components
    const query = `
      query factsheets($first: Int) {
        allFactSheets(factSheetType: ITComponent, first: $first) {
          edges {
            node {
              id
              displayName
            }
          }
        }
      }
    `;

    // Define variables for the GraphQL query
    const variables = {
      first: 10 // Retrieve the first 10 IT components
    };

    // Execute the GraphQL query
    lx.executeGraphQL(query, variables)
      .then(function (result) { // Handle the promise returned by the GraphQL query execution
        console.log('query results', result); // Log the results of the GraphQL query
      })
      .catch(function (error) { // Handle errors that occur during GraphQL query execution
        console.error('error while fetching data', error); // Log the error message
      });

    lx.ready(config); // Make the LeanIX platform ready with the specified configuration
  });