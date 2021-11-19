var ctx = document.getElementById("chart").getContext("2d");
ctx.canvas.width = 1200;
ctx.canvas.height = 600;

var barData = getData();
function lineData() {
  return barData.map((d) => {
    return { x: d.x, y: l1 };
  });
}
function lineData2() {
  return barData.map((d) => {
    return { x: d.x, y: l2 };
  });
}

var lJson;
var chartJson;
var chart = new Chart(ctx, {
  type: "candlestick",
  data: {
    datasets: [
      {
        label: "capstone",
        data: barData,
      },
    ],
  },
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  },
});

function getData() {
  var date1 = luxon.DateTime.fromRFC2822("01 ct 2021 00:00 Z");
  var date2 = luxon.DateTime.fromRFC2822("01 Oct 2021 01:00 Z");
  var date3 = luxon.DateTime.fromRFC2822("01 Oct 2021 02:00 Z");
  var data = [
    {
      x: date1.valueOf(),
      o: 53523000,
      h: 54000000,
      l: 53404000,
      c: 53585000,
    },
    {
      x: date2.valueOf(),
      o: 53585000,
      h: 53650000,
      l: 53211000,
      c: 53472000,
    },
    {
      x: date3.valueOf(),
      o: 53472000,
      h: 53566000,
      l: 53070000,
      c: 53157000,
    },
  ];
  return data;
}

function getData3() {
  //2021-09-04T01:00:00Z
  var Cdata = [];

  var i = 0;
  while (i < chartJson.length) {
    var date = luxon.DateTime.fromRFC2822(chartJson[i]["time"]);
    var barD = {
      x: date.valueOf(),
      o: chartJson[i]["open"],
      h: chartJson[i]["high"],
      l: chartJson[i]["low"],
      c: chartJson[i]["close"],
    };
    Cdata.push(barD);
    i++;
  }
  return Cdata;
}

var SupportLine = function () {
  var dataset = chart.config.data.datasets[0];

  var type = "candlestick";
  dataset.type = type;

  var current = {
    label: "capstone",
    data: barData,
  };
  var lData = [current];
  var tmp = [];
  var j = 0;
  while (j < lJson.length) {
    if (lJson[j]["time"] == 0) {
      break;
    }
    tmp.push(lJson[j]["time"]);

    if (lJson[j]["open"] == 0) {
      break;
    }
    tmp.push(lJson[j]["open"]);

    if (lJson[j]["high"] == 0) {
      break;
    }
    tmp.push(lJson[j]["high"]);

    if (lJson[j]["low"] == 0) {
      break;
    }
    tmp.push(lJson[j]["low"]);

    if (lJson[j]["close"] == 0) {
      break;
    }
    tmp.push(lJson[j]["close"]);
    j++;
  }

  var i = 0;
  while (i < tmp.length) {
    var lineV = {
      label: "SupportLine" + i,
      type: "line",
      data: barData.map((d) => {
        return { x: d.x, y: tmp[i] };
      }),
    };
    lData.push(lineV);
    i++;
  }
  chart.config.data.datasets = lData;
  chart.update();
};

var send_data = function () {
  var sDate = document.getElementById("start").value;
  var eDate = document.getElementById("end").value;
  var choice = document.getElementById("choice").value;

  send_d(sDate, eDate, choice);

  //date 정보 사용.
};

function send_d(start, end, interval) {
  //2016-02-05
  var sizeofstart = new Date(
    Number(start.slice(0, 4)),
    Number(start.slice(5, 7)) - 1,
    Number(start.slice(8, 10))
  );
  var sizeofend = new Date(
    Number(end.slice(0, 4)),
    Number(end.slice(5, 7)) - 1,
    Number(end.slice(8, 10))
  );
  var btMs = sizeofend.getTime() - sizeofstart.getTime();
  var btDay = btMs / (1000 * 60 * 60 * 24);

  var interval_info;
  if (interval == "15M") {
    interval_info = "date_15";
    btDay = btDay * 4 * 24;
  } else if (interval == "1H") {
    interval_info = "date_60";
    btDay = btDay * 24;
  } else if (interval == "4H") {
    interval_info = "date_240";
    btDay = btDay * 6;
  } else {
    interval_info = "date_1D";
  }
  $.ajax({
    type: "GET",
    url: "/DB/" + interval_info,
    data: {
      start_date: start,
      end_date: end,
      chart_interval: interval,
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      lJson = data.slice(btDay, data.length);
      chartJson = data.slice(0, btDay - 1);
      var dataset = chart.config.data.datasets[0];

      var type = "candlestick";
      dataset.type = type;

      barData = getData3();

      chart.config.data.datasets = [
        {
          label: "BTC/KRW",
          data: barData,
        },
      ];

      chart.update();
    },
  });
}

document.getElementById("SupportLine").addEventListener("click", SupportLine);
document.getElementById("send_d").addEventListener("click", send_data);
