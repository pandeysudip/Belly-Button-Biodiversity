
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

