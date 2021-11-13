
//loading JSON file using d3.json()
d3.json("samples.json").then(function (data) {
    console.log(data.samples);
});

//const dataPromise = d3.json("samples.json");
//console.log("Data Promise: ", dataPromise);
