
var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 1200;
ctx.canvas.height = 600;



//var list_Data = JSON.parse("{{ sendlist|escapejs }}");
//var person = JSON.parse("{{ personJson|escapejs }}");

var barData = getData();
function lineData() { return barData.map(d => { return { x: d.x, y: l1} }) };
function lineData2() { return barData.map(d => { return { x: d.x, y: l2} }) };

var l1 = 60000000;
var l2 = 56000000;
var lJson;
var chartJson;

var chart = new Chart(ctx, {
<<<<<<< Updated upstream
   type: 'candlestick',
   data: {
      datasets: [{
         label: 'capstone',
         data: barData
      }]
   },
=======
	type: 'candlestick',
	data: {
		datasets: [{
			label: 'capstone',
			data: barData
		}]
	},
>>>>>>> Stashed changes
});




function getData() {
<<<<<<< Updated upstream
   var date1 = luxon.DateTime.fromRFC2822('01 Oct 2021 00:00 Z');
   var date2 = luxon.DateTime.fromRFC2822('01 Oct 2021 01:00 Z');
   var date3 = luxon.DateTime.fromRFC2822('01 Oct 2021 02:00 Z');
   var date4 = luxon.DateTime.fromRFC2822('01 Oct 2021 03:00 Z');
   var date5 = luxon.DateTime.fromRFC2822('01 Oct 2021 04:00 Z');
   var date6 = luxon.DateTime.fromRFC2822('01 Oct 2021 05:00 Z');
   var date7 = luxon.DateTime.fromRFC2822('01 Oct 2021 06:00 Z');
   var date8 = luxon.DateTime.fromRFC2822('01 Oct 2021 07:00 Z');
   var date9 = luxon.DateTime.fromRFC2822('01 Oct 2021 08:00 Z');
   var date10 = luxon.DateTime.fromRFC2822('01 Oct 2021 09:00 Z');
   var date11 = luxon.DateTime.fromRFC2822('01 Oct 2021 10:00 Z');
   var date12 = luxon.DateTime.fromRFC2822('01 Oct 2021 11:00 Z');
   var date13 = luxon.DateTime.fromRFC2822('01 Oct 2021 12:00 Z');
   var date14 = luxon.DateTime.fromRFC2822('01 Oct 2021 13:00 Z');
   var date15 = luxon.DateTime.fromRFC2822('01 Oct 2021 14:00 Z');
   var date16 = luxon.DateTime.fromRFC2822('01 Oct 2021 15:00 Z');
   var date17 = luxon.DateTime.fromRFC2822('01 Oct 2021 16:00 Z');
   var date18 = luxon.DateTime.fromRFC2822('01 Oct 2021 17:00 Z');
   var date19 = luxon.DateTime.fromRFC2822('01 Oct 2021 18:00 Z');
   var date20 = luxon.DateTime.fromRFC2822('01 Oct 2021 19:00 Z');
   var date21 = luxon.DateTime.fromRFC2822('01 Oct 2021 20:00 Z');
   var date22 = luxon.DateTime.fromRFC2822('01 Oct 2021 21:00 Z');
   var date23 = luxon.DateTime.fromRFC2822('01 Oct 2021 22:00 Z');
   var date24 = luxon.DateTime.fromRFC2822('01 Oct 2021 23:00 Z');
   var date25 = luxon.DateTime.fromRFC2822('02 Oct 2021 00:00 Z');
   var date26 = luxon.DateTime.fromRFC2822('02 Oct 2021 01:00 Z');
   var date27 = luxon.DateTime.fromRFC2822('02 Oct 2021 02:00 Z');
   var date28 = luxon.DateTime.fromRFC2822('02 Oct 2021 03:00 Z');
   var date29 = luxon.DateTime.fromRFC2822('02 Oct 2021 04:00 Z');
   var date30 = luxon.DateTime.fromRFC2822('02 Oct 2021 05:00 Z');
   var date31 = luxon.DateTime.fromRFC2822('02 Oct 2021 06:00 Z');
   var date32 = luxon.DateTime.fromRFC2822('02 Oct 2021 07:00 Z');
   var date33 = luxon.DateTime.fromRFC2822('02 Oct 2021 08:00 Z');
   var date34 = luxon.DateTime.fromRFC2822('02 Oct 2021 09:00 Z');
   var date35 = luxon.DateTime.fromRFC2822('02 Oct 2021 10:00 Z');

   var data = [
      {
         x : date1.valueOf(),
         o : 53523000,
         h : 54000000,
         l : 53404000,
         c : 53585000
        },
        {
         x : date2.valueOf(),
         o : 53585000,
         h : 53650000,
         l : 53211000,
         c : 53472000
        },
        {
         x : date3.valueOf(),
         o : 53472000,
         h : 53566000,
         l : 53070000,
         c : 53157000
        },
        {
         x : date4.valueOf(),
         o : 53159000,
         h : 53500000,
         l : 53108000,
         c : 53467000
        },
        {
         x : date5.valueOf(),
         o : 53473000,
         h : 53500000,
         l : 53218000,
         c : 53402000
        },
        {
         x : date6.valueOf(),
         o : 53402000,
         h : 53700000,
         l : 53306000,
         c : 53605000
        },
        {
         x : date7.valueOf(),
         o : 53605000,
         h : 53863000,
         l : 53556000,
         c : 53858000
        },
        {
         x : date8.valueOf(),
         o : 53858000,
         h : 54859000,
         l : 53820000,
         c : 54823000
        },
        {
         x : date9.valueOf(),
         o : 54828000,
         h : 54982000,
         l : 54672000,
         c : 54915000
        },
        {
         x : date10.valueOf(),
         o : 54920000,
         h : 54988000,
         l : 54705000,
         c : 54832000
        },
        {
         x : date11.valueOf(),
         o : 54853000,
         h : 57913000,
         l : 54715000,
         c : 57150000
        },
        {
         x : date12.valueOf(),
         o : 57150000,
         h : 57915000,
         l : 57000000,
         c : 57609000
        },
        {
         x : date13.valueOf(),
         o : 57609000,
         h : 58108000,
         l : 57170000,
         c : 57196000
        },
        {
         x : date14.valueOf(),
         o : 57198000,
         h : 57425000,
         l : 56894000,
         c : 56900000
        },
        {
         x : date15.valueOf(),
         o : 56893000,
         h : 57360000,
         l : 56750000,
         c : 57058000
        },
        {
         x : date16.valueOf(),
         o : 57058000,
         h : 57588000,
         l : 57021000,
         c : 57341000
        },
        {
         x : date17.valueOf(),
         o : 57341000,
         h : 57695000,
         l : 57135000,
         c : 57384000
        },
        {
         x : date18.valueOf(),
         o : 57385000,
         h : 57624000,
         l : 57313000,
         c : 57487000
        },
        {
         x : date19.valueOf(),
         o : 57528000,
         h : 57857000,
         l : 57375000,
         c : 57652000
        },
        {
         x : date20.valueOf(),
         o : 57654000,
         h : 58005000,
         l : 57652000,
         c : 57881000
        },
        {
         x : date21.valueOf(),
         o : 57892000,
         h : 58200000,
         l : 57755000,
         c : 58199000
        },
        {
         x : date22.valueOf(),
         o : 58170000,
         h : 58582000,
         l : 58128000,
         c : 58478000
        },
        {
         x : date23.valueOf(),
         o : 58478000,
         h : 58534000,
         l : 57931000,
         c : 58255000
        },
        {
         x : date24.valueOf(),
         o : 58255000,
         h : 58441000,
         l : 58198000,
         c : 58348000
        },
        {
         x : date25.valueOf(),
         o : 58348000,
         h : 58496000,
         l : 57793000,
         c : 58245000
        },
        {
         x : date26.valueOf(),
         o : 58250000,
         h : 58777000,
         l : 58200000,
         c : 58278000
        },
        {
         x : date27.valueOf(),
         o : 58272000,
         h : 58419000,
         l : 58094000,
         c : 58169000
        },
        {
         x : date28.valueOf(),
         o : 58169000,
         h : 58250000,
         l : 57660000,
         c : 57719000
        },
        {
         x : date29.valueOf(),
         o : 57719000,
         h : 58085000,
         l : 57719000,
         c : 57908000
        },
        {
         x : date30.valueOf(),
         o : 57908000,
         h : 58269000,
         l : 57893000,
         c : 58191000
        },
        {
         x : date31.valueOf(),
         o : 58198000,
         h : 58456000,
         l : 58121000,
         c : 58357000
        },
        {
         x : date32.valueOf(),
         o : 58361000,
         h : 58361000,
         l : 58181000,
         c : 58200000
        },
        {
         x : date33.valueOf(),
         o : 58201000,
         h : 58270000,
         l : 58100000,
         c : 58270000
        },
        {
         x : date34.valueOf(),
         o : 58270000,
         h : 58420000,
         l : 58241000,
         c : 58273000
        },
        {
         x : date35.valueOf(),
         o : 58303000,
         h : 58310000,
         l : 58100000,
         c : 58176000
        }
   ];
   
   var dataslice = data.slice(5,30);
   
   return dataslice;
=======
	var date1 = luxon.DateTime.fromRFC2822('01 Oct 2021 00:00 Z');
	var date2 = luxon.DateTime.fromRFC2822('01 Oct 2021 01:00 Z');
	var date3 = luxon.DateTime.fromRFC2822('01 Oct 2021 02:00 Z');
	var date4 = luxon.DateTime.fromRFC2822('01 Oct 2021 03:00 Z');
	var date5 = luxon.DateTime.fromRFC2822('01 Oct 2021 04:00 Z');
	var date6 = luxon.DateTime.fromRFC2822('01 Oct 2021 05:00 Z');
	var date7 = luxon.DateTime.fromRFC2822('01 Oct 2021 06:00 Z');
	var date8 = luxon.DateTime.fromRFC2822('01 Oct 2021 07:00 Z');
	var date9 = luxon.DateTime.fromRFC2822('01 Oct 2021 08:00 Z');
	var date10 = luxon.DateTime.fromRFC2822('01 Oct 2021 09:00 Z');
	var date11 = luxon.DateTime.fromRFC2822('01 Oct 2021 10:00 Z');
	var date12 = luxon.DateTime.fromRFC2822('01 Oct 2021 11:00 Z');
	var date13 = luxon.DateTime.fromRFC2822('01 Oct 2021 12:00 Z');
	var date14 = luxon.DateTime.fromRFC2822('01 Oct 2021 13:00 Z');
	var date15 = luxon.DateTime.fromRFC2822('01 Oct 2021 14:00 Z');
	var date16 = luxon.DateTime.fromRFC2822('01 Oct 2021 15:00 Z');
	var date17 = luxon.DateTime.fromRFC2822('01 Oct 2021 16:00 Z');
	var date18 = luxon.DateTime.fromRFC2822('01 Oct 2021 17:00 Z');
	var date19 = luxon.DateTime.fromRFC2822('01 Oct 2021 18:00 Z');
	var date20 = luxon.DateTime.fromRFC2822('01 Oct 2021 19:00 Z');
	var date21 = luxon.DateTime.fromRFC2822('01 Oct 2021 20:00 Z');
	var date22 = luxon.DateTime.fromRFC2822('01 Oct 2021 21:00 Z');
	var date23 = luxon.DateTime.fromRFC2822('01 Oct 2021 22:00 Z');
	var date24 = luxon.DateTime.fromRFC2822('01 Oct 2021 23:00 Z');
	var date25 = luxon.DateTime.fromRFC2822('02 Oct 2021 00:00 Z');
	var date26 = luxon.DateTime.fromRFC2822('02 Oct 2021 01:00 Z');
	var date27 = luxon.DateTime.fromRFC2822('02 Oct 2021 02:00 Z');
	var date28 = luxon.DateTime.fromRFC2822('02 Oct 2021 03:00 Z');
	var date29 = luxon.DateTime.fromRFC2822('02 Oct 2021 04:00 Z');
	var date30 = luxon.DateTime.fromRFC2822('02 Oct 2021 05:00 Z');
	var date31 = luxon.DateTime.fromRFC2822('02 Oct 2021 06:00 Z');
	var date32 = luxon.DateTime.fromRFC2822('02 Oct 2021 07:00 Z');
	var date33 = luxon.DateTime.fromRFC2822('02 Oct 2021 08:00 Z');
	var date34 = luxon.DateTime.fromRFC2822('02 Oct 2021 09:00 Z');
	var date35 = luxon.DateTime.fromRFC2822('02 Oct 2021 10:00 Z');

	var data = [
		{
			x : date1.valueOf(),
			o : 53523000,
			h : 54000000,
			l : 53404000,
			c : 53585000
		  },
		  {
			x : date2.valueOf(),
			o : 53585000,
			h : 53650000,
			l : 53211000,
			c : 53472000
		  },
		  {
			x : date3.valueOf(),
			o : 53472000,
			h : 53566000,
			l : 53070000,
			c : 53157000
		  },
		  {
			x : date4.valueOf(),
			o : 53159000,
			h : 53500000,
			l : 53108000,
			c : 53467000
		  },
		  {
			x : date5.valueOf(),
			o : 53473000,
			h : 53500000,
			l : 53218000,
			c : 53402000
		  },
		  {
			x : date6.valueOf(),
			o : 53402000,
			h : 53700000,
			l : 53306000,
			c : 53605000
		  },
		  {
			x : date7.valueOf(),
			o : 53605000,
			h : 53863000,
			l : 53556000,
			c : 53858000
		  },
		  {
			x : date8.valueOf(),
			o : 53858000,
			h : 54859000,
			l : 53820000,
			c : 54823000
		  },
		  {
			x : date9.valueOf(),
			o : 54828000,
			h : 54982000,
			l : 54672000,
			c : 54915000
		  },
		  {
			x : date10.valueOf(),
			o : 54920000,
			h : 54988000,
			l : 54705000,
			c : 54832000
		  },
		  {
			x : date11.valueOf(),
			o : 54853000,
			h : 57913000,
			l : 54715000,
			c : 57150000
		  },
		  {
			x : date12.valueOf(),
			o : 57150000,
			h : 57915000,
			l : 57000000,
			c : 57609000
		  },
		  {
			x : date13.valueOf(),
			o : 57609000,
			h : 58108000,
			l : 57170000,
			c : 57196000
		  },
		  {
			x : date14.valueOf(),
			o : 57198000,
			h : 57425000,
			l : 56894000,
			c : 56900000
		  },
		  {
			x : date15.valueOf(),
			o : 56893000,
			h : 57360000,
			l : 56750000,
			c : 57058000
		  },
		  {
			x : date16.valueOf(),
			o : 57058000,
			h : 57588000,
			l : 57021000,
			c : 57341000
		  },
		  {
			x : date17.valueOf(),
			o : 57341000,
			h : 57695000,
			l : 57135000,
			c : 57384000
		  },
		  {
			x : date18.valueOf(),
			o : 57385000,
			h : 57624000,
			l : 57313000,
			c : 57487000
		  },
		  {
			x : date19.valueOf(),
			o : 57528000,
			h : 57857000,
			l : 57375000,
			c : 57652000
		  },
		  {
			x : date20.valueOf(),
			o : 57654000,
			h : 58005000,
			l : 57652000,
			c : 57881000
		  },
		  {
			x : date21.valueOf(),
			o : 57892000,
			h : 58200000,
			l : 57755000,
			c : 58199000
		  },
		  {
			x : date22.valueOf(),
			o : 58170000,
			h : 58582000,
			l : 58128000,
			c : 58478000
		  },
		  {
			x : date23.valueOf(),
			o : 58478000,
			h : 58534000,
			l : 57931000,
			c : 58255000
		  },
		  {
			x : date24.valueOf(),
			o : 58255000,
			h : 58441000,
			l : 58198000,
			c : 58348000
		  },
		  {
			x : date25.valueOf(),
			o : 58348000,
			h : 58496000,
			l : 57793000,
			c : 58245000
		  },
		  {
			x : date26.valueOf(),
			o : 58250000,
			h : 58777000,
			l : 58200000,
			c : 58278000
		  },
		  {
			x : date27.valueOf(),
			o : 58272000,
			h : 58419000,
			l : 58094000,
			c : 58169000
		  },
		  {
			x : date28.valueOf(),
			o : 58169000,
			h : 58250000,
			l : 57660000,
			c : 57719000
		  },
		  {
			x : date29.valueOf(),
			o : 57719000,
			h : 58085000,
			l : 57719000,
			c : 57908000
		  },
		  {
			x : date30.valueOf(),
			o : 57908000,
			h : 58269000,
			l : 57893000,
			c : 58191000
		  },
		  {
			x : date31.valueOf(),
			o : 58198000,
			h : 58456000,
			l : 58121000,
			c : 58357000
		  },
		  {
			x : date32.valueOf(),
			o : 58361000,
			h : 58361000,
			l : 58181000,
			c : 58200000
		  },
		  {
			x : date33.valueOf(),
			o : 58201000,
			h : 58270000,
			l : 58100000,
			c : 58270000
		  },
		  {
			x : date34.valueOf(),
			o : 58270000,
			h : 58420000,
			l : 58241000,
			c : 58273000
		  },
		  {
			x : date35.valueOf(),
			o : 58303000,
			h : 58310000,
			l : 58100000,
			c : 58176000
		  }
	];
	
	var dataslice = data.slice(5,30);
	
	return dataslice;
>>>>>>> Stashed changes
}


function getData3() { //2021-09-04T01:00:00Z
<<<<<<< Updated upstream
   var Cdata = [];

   var i = 0;
    while (i < chartJson.length) { 
      var date = luxon.DateTime.fromRFC2822(chartJson[i]["time"]);
      var barD = {
         x: date.valueOf(),
         o: chartJson[i]["open"],
         h: chartJson[i]["high"],
         l: chartJson[i]["low"],
         c: chartJson[i]["close"]
      };

      Cdata.push(barD);

       i++; 
    }
   return Cdata;
}

var SupportLine = function() {
   var dataset = chart.config.data.datasets[0];

   var type = "candlestick";
   dataset.type = type;

   /*var current = {
      label: 'capstone',
      data: barData
   };
   var lData = [current];

   var i = 0;
    while (i < lJson.length) { 
      var lineV = {
         label: 'SupportLine' + i,
         type: 'line',
         data: barData.map(d => { return { x: d.x, y: lJson[i]['line']} })
      }
      lData.push(lineV);
       i++; 
    }
   chart.config.data.datasets = lData*/

   chart.config.data.datasets = [
      {
         label: 'capstone',
         data: barData
      },
      {
         label: 'SupportLine2',
         type: 'line',
         data: lineData()
      },
      {
         label: 'SupportLine2',
         type: 'line',
         data: lineData2()
      }   
   ]

   chart.update();
};

var send_data = function(){
   var sDate = document.getElementById('start').value;
   var eDate = document.getElementById('end').value;
   var choice = document.getElementById('choice').value;

   send_d(sDate,eDate , choice);

   //date 정보 사용.
}

var get_chart = function(){
   var sDate = document.getElementById('start').value;
   var eDate = document.getElementById('end').value;
   var choice = document.getElementById('choice').value;

   get_Chart_Data(sDate,eDate , choice);

   //date 정보 사용.
}

function send_d(start , end , interval){
   var interval_info;
   if (interval == "15M"){
      interval_info = "date_15";
   }
   else if(interval == "1H"){
      interval_info = "date_60";
   }
   else if(interval == "4H"){
      interval_info = "date_240";
   }
   else {
      interval_info = "date_1D";
   }
   $.ajax({
      type: "GET",
      url: "/DB/" + interval_info ,
      data : {
         'start_date': start,
         'end_date' : end,
         'chart_interval' : interval,
      },
      dataType: 'json',
      success: function(data){
         console.log(data);
         chartJson = data;
         alert(chartJson.length)
      },
   });
}
function get_Chart_Data(start , end , interval){
   $.ajax({
      type: "GET",
      url: '/Date_1D/',
      data : {
         'start_date': start,
         'end_date' : end,
         'chart_interval' : interval,
      },
      dataType: 'json',
      success: function(data){
         console.log(data);
         chartJson = JSON.parse(data);

      },
   });
}

var change = function() {
   var dataset = chart.config.data.datasets[0];

   var type = "candlestick";
   dataset.type = type;

   barData = getData3();

   chart.config.data.datasets = [
      {
         label: chartJson[0]["time"] ,
         data: barData
      }
   ]

   chart.update();
=======
	var Cdata = [];

	var i = 0;
    while (i < chartJson.length) { 
		var date = luxon.DateTime.fromRFC2822(chartJson[i]["time"]);
		var barD = {
			x: date.valueOf(),
			o: chartJson[i]["open"],
			h: chartJson[i]["high"],
			l: chartJson[i]["low"],
			c: chartJson[i]["close"]
		};

		Cdata.push(barD);

    	i++; 
    }
	return Cdata;
}

var SupportLine = function() {
	var dataset = chart.config.data.datasets[0];

	var type = "candlestick";
	dataset.type = type;

	/*var current = {
		label: 'capstone',
		data: barData
	};
	var lData = [current];

	var i = 0;
    while (i < lJson.length) { 
		var lineV = {
			label: 'SupportLine' + i,
			type: 'line',
			data: barData.map(d => { return { x: d.x, y: lJson[i]['line']} })
		}
		lData.push(lineV);
    	i++; 
    }
	chart.config.data.datasets = lData*/

	chart.config.data.datasets = [
		{
			label: 'capstone',
			data: barData
		},
		{
			label: 'SupportLine2',
			type: 'line',
			data: lineData()
		},
		{
			label: 'SupportLine2',
			type: 'line',
			data: lineData2()
		}	
	]

	chart.update();
};

var send_data = function(){
	var sDate = document.getElementById('start').value;
	var eDate = document.getElementById('end').value;
	var choice = document.getElementById('choice').value;

	send_d(sDate,eDate , choice);

	//date 정보 사용.
}

var get_chart = function(){
	var sDate = document.getElementById('start').value;
	var eDate = document.getElementById('end').value;
	var choice = document.getElementById('choice').value;

	get_Chart_Data(sDate,eDate , choice);

	//date 정보 사용.
}

function send_d(start , end , interval){
	var interval_info;
	if (interval == "15M"){
		interval_info = "date_15";
	}
	else if(interval == "1H"){
		interval_info = "date_60";
	}
	else if(interval == "4H"){
		interval_info = "date_240";
	}
	else {
		interval_info = "date_1D";
	}
	$.ajax({
		type: "GET",
		url: "/DB/" + interval_info ,
		data : {
			'start_date': start,
			'end_date' : end,
			'chart_interval' : interval,
		},
		dataType: 'json',
		success: function(data){
			console.log(data);
			chartJson = data;
			alert(chartJson.length)
		},
	});
}
function get_Chart_Data(start , end , interval){
	$.ajax({
		type: "GET",
		url: '/Date_1D/',
		data : {
			'start_date': start,
			'end_date' : end,
			'chart_interval' : interval,
		},
		dataType: 'json',
		success: function(data){
			console.log(data);
			chartJson = JSON.parse(data);

		},
	});
}

var change = function() {
	var dataset = chart.config.data.datasets[0];

	var type = "candlestick";
	dataset.type = type;

	barData = getData3();

	chart.config.data.datasets = [
		{
			label: chartJson[0]["time"] ,
			data: barData
		}
	]

	chart.update();
>>>>>>> Stashed changes
};

document.getElementById('SupportLine').addEventListener('click', SupportLine);
document.getElementById('send_d').addEventListener('click', send_data);
document.getElementById('getCh').addEventListener('click', get_chart);
document.getElementById('changeChart').addEventListener('click', function() {
<<<<<<< Updated upstream
   change();
=======
	change();
>>>>>>> Stashed changes
});