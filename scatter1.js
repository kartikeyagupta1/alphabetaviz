vegaEmbed = require("vega-embed");
d3 = require("d3");
n50list =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbBIGSwAJMsVtki4Ex90DGcOTQxhSWHkbTUTj4GazYWVueNMq_Cm4YYdYhPGiQQpdcu07jPlS3UgC1/pub?gid=2095680982&single=true&output=csv";
vegaEmbed({
    width:"500",
    height:"500",
    data: {values: n50list_data},
    mark: {type:"circle", tooltip:true},
    encoding: {
      "x": {field: "alpha", type: "quantitative", orient: "top"},
      "y": {field: "beta", type: "quantitative"},
      size: {field: "pe", type: "Q", legend: null},
      color: {field: "sector", type: "nominal"} //"field": "symbol", "type": "nominal"
    },
  })