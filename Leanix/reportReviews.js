lx.init() // Initialize the LeanIX platform
  .then(function(setupInfo) { // Handle the initialization promise
    var config = { // Define configuration options for the reporting module
      reportViewFactSheetType: 'Application', // Specify the Fact Sheet type for the report view
      reportViewCallback: function(data) { // Define a callback function to handle view data
        // Build a map from legendItem id to the item itself
        var legendItemMap = {};
        data.legendItems.forEach(function(item) {
          legendItemMap[item.id] = item;
        });

        // Print mappings
        data.mapping.forEach(function(fsMapping) { // Iterate over the mappings
          var legendItem = legendItemMap[fsMapping.legendId]; // Get the legend item for the mapping
          console.log(fsMapping.fsId + ": legendId=" + fsMapping.legendId + "; bgColor=" + legendItem.bgColor); // Log mapping details
        });
      }
    };
    lx.ready(config); // Make the LeanIX platform ready with the specified configuration
  });