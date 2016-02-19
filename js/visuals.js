var race_data = [
    {
        value: 44,
        color:"#801010",
        highlight: "rgba(128,16,16,0.8)",
        label: "Black"
    },
    {
        value: 11,
        color: "#0080FF",
        highlight: "rgba(0,128,255,0.7)",
        label: "Latino"
    },
    {
        value: 44,
        color: "#A96619",
        highlight: "rgba(169,102,25, 0.8)",
        label: "White"
    },
    {
        value: 1,
        color: "black",
        highlight: "rgb(0,0,51)",
        label: "Other(Pacific islander, Asian)"
    },

];

var gender_data = [
    {

        value: 67,
        color:"#DB9342",
        highlight: "rgba(219,147,66,0.8)",
        label: "Male"
    },
    {
        value: 33,
        color: "#729CBC",
        highlight: "#9ACBF0",
        label: "Female"
    },

];

var needs_data = [
	{
        value: 12,
        color: "#D18C3C",
        highlight: "rgba(209,140,60,0.8)",
        label: "Veteran"
    },
    {
        value: 35,
        color:"#4C97C9",
        highlight: "rgba(76,151,201,0.8)",
        label: "Mental Illness"
    },
    {
        value: 23,
        color: "#6899A1",
        highlight: "rgba(104,153,161,0.8)",
        label: "Disability"
    },
    {
        value: 30,
        color: "#A42424",
        highlight: "rgba(164,36,36,0.8)",
        label: "Addiction"
    }
    
];

$(document).ready(function(){
var ctx1 = $("#RaceChart").get(0).getContext('2d');
var myDoughnutChart = new Chart(ctx1).Doughnut(race_data, {

	segmentStrokeWidth : 6,
    onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx1.font="italic bold 2em Helvetica";
      ctx1.textBaseline="middle"; 
        
      var middletext = "Race";
      var textWidth = ctx1.measureText(middletext).width;
      
      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx1.fillText(middletext, txtPosx, canvasHeight/2);
        
        },
    });
var ctx2 = $("#GenderChart").get(0).getContext('2d');
var myDoughnutChart = new Chart(ctx2).Doughnut(gender_data, {

    segmentStrokeWidth : 6,
    onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx2.font="italic bold 2em Helvetica";
      ctx2.textBaseline="middle"; 
        
      var middletext = "Gender";
      var textWidth = ctx1.measureText(middletext).width;
      
      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx2.fillText(middletext, txtPosx, canvasHeight/2);
        
        },
    });
var ctx3 = $("#SpecialNeeds").get(0).getContext('2d');
var myDoughnutChart = new Chart(ctx3).Doughnut(needs_data, {

    segmentStrokeWidth : 6,
    onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx3.font="italic bold 2em Helvetica";
      ctx3.textBaseline="middle"; 
        
      var middletext = "Special";
      var middletext2 = "Needs";
      var textWidth = ctx3.measureText(middletext).width;
      var textWidth2 = ctx3.measureText(middletext2).width;

      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx3.fillText(middletext, txtPosx, canvasHeight/2.4);

      var txtPosx1 = Math.round((canvasWidth - textWidth2)/2);
      ctx3.fillText(middletext2, txtPosx1, canvasHeight/1.7);
        
        },
    });
});
    
        
    


/*$(document).ready(function(){
  var ctx = $('#chart-area').get(0).getContext("2d");
  var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
    
  });
});
*/
