
//function for dropdown menu and initial graphs 
function init() {
    d3.json("samples.json").then((data) => {
        //select the dropdown.
        var menu = d3.select("#selDataset");
        var names = data.names;
        names.forEach((name) => {
            menu.append("option").text(name).property("value", name);
        });
        //creating function for initial plots 
        var initSample = data.names[0]
        graphs(initSample);
    })
};

function graphs(names) {
    d3.json("samples.json").then((data) => {
        //metadata variables
        var metadata = data.metadata;
        //select demographic table
        var initTable = d3.select("#sample-metadata");

        //clearing table data
        initTable.html("");

        //variable for each samples metadata
        var singleMetadata = metadata.filter(sample => sample.id == names)[0];

        //to add the data to the table
        Object.entries(singleMetadata).forEach(([key, value]) => {
            initTable.append("h5").text(`${key}: ${value}`);
        });


    })
};

function optionChanged(newSample) {
    graphs(newSample);
};

init();