
//loading JSON file using d3.json()
d3.json("samples.json").then(function (data) {
    let samples = data.samples;
    for (let i = 0; i < samples.length; i++) {
        let otu_id = samples[i].otu_ids;
        let sample_values = samples[i].sample_values;
        let otu_labels = samples[i].otu_labels;
    }
    console.log(otu_id);
});

//const dataPromise = d3.json("samples.json");
//console.log("Data Promise: ", dataPromise);
