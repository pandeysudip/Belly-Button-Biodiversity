
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

        // for bar plot and bubles plot
        var samples = data.samples
        //variable for each sample 
        var singleSample = samples.filter(sample => sample.id == names)[0];

        // slicing 10 largest
        var otuIds = singleSample.otu_ids.slice(0, 11);
        var otuLabels = singleSample.otu_labels.slice(0, 11);
        var sampleValues = singleSample.sample_values.slice(0, 11);

        console.log(otuIds);

        // bar plots
        var bar = d3.select("#bar");
        data = [{
            x: sampleValues,
            y: otuIds,
            type: 'bar',
            orientation: 'h',
            text: otuLabels,
            marker: {
                color: 'rgba(55,128,191,0.6)',
            },
        }];
        var layout = {

            bargap: 0.3,
            yaxis: {
                type: 'category',
                tickvals: otuIds,
            }
        }

        Plotly.newPlot("bar", data, layout);

        // bubles plot
        //variable for each sample 
        var otuIdsAll = singleSample.otu_ids;
        var otuLabelsAll = singleSample.otu_labels;
        var sampleValuesAll = singleSample.sample_values;

        var bubble = d3.select("#bubble");
        data = [{
            y: sampleValuesAll,
            x: otuIdsAll,
            type: 'scatter',
            mode: 'markers',
            text: otuLabelsAll,
            marker: {
                size: sampleValuesAll,
                color: otuIdsAll
            }
        }];

        Plotly.newPlot("bubble", data);
    })
};

function optionChanged(newSample) {
    graphs(newSample);
};

init();