var race_data = [
    {
        value: 44,
        color:"#801010",
        highlight: "#AF1111",
        label: "Black"
    },
    {
        value: 11,
        color: "#0080FF",
        highlight: "#FFC870",
        label: "Latino"
    },
    {
        value: 44,
        color: "#A96619",
        highlight: "#5AD3D1",
        label: "White"
    },
    {
        value: 1,
        color: "#6899A1",
        highlight: "#FFC870",
        label: "Other(Pacific islander, Asian)"
    }
];

var gender_data = [
    {
        value: 67,
        color:"#DB9342",
        highlight: "#EF9D40",
        label: "Male"
    },
    {
        value: 33,
        color: "#729CBC",
        highlight: "#9ACBF0",
        label: "Female"
    }
];

var needs_data = [
	{
        value: 12,
        color: "#801010",
        highlight: "#FFC870",
        label: "Veteran"
    },
    {
        value: 35,
        color:"#0080FF",
        highlight: "#AF1111",
        label: "Mental Illness"
    },
    {
        value: 23,
        color: "#6899A1",
        highlight: "#FFC870",
        label: "Disability"
    },
    {
        value: 30,
        color: "#A96619",
        highlight: "#5AD3D1",
        label: "Addiction"
    }
    
];


var ctx1 = document.getElementById("RaceChart").getContext('2d');
var myDoughnutChart = new Chart(ctx1).Doughnut(race_data, {

	segmentStrokeWidth : 6,
	labelFontFamily : "Arial",
	labelFontStyle : "normal",
	labelFontSize : 24,
	labelFontColor : "#666"
});


var ctx2 = document.getElementById("GenderChart").getContext('2d');
var myDoughnutChart = new Chart(ctx2).Doughnut(gender_data, {

	segmentStrokeWidth : 6,
});

var ctx3 = document.getElementById("SpecialNeeds").getContext('2d');
var myDoughnutChart = new Chart(ctx3).Doughnut(needs_data, {

	 segmentStrokeWidth : 6,
});
