window.onload = function () {
    getLauncheDate();
}

function chart1(data) {
    let dat = [];
    let titles =[];
    for (let i=0; i<titles.length;i++){
        if (!titles.includes(data[i].title))titles.push(data[i].title);
        dat.push([{name: data[i].title, data: data[i].value}]);
    }

    let options = {
        series: dat,
        chart: {
            type: 'bar',
            height: 350,
            background: "#4f4c4c",
            foreColor: '#e8e8e8'
        },
        title: {
            text: 'Запуски с космодромов',
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  'Segoe UI',
                color:  '#e8e8e8'
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: titles,
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " load"
                }
            }
        }
    };

    let chart = new ApexCharts(document.getElementById("chart-load"), options);
    chart.render();

}
function chart2() {
    let dat = [];
    let years = [];
    for (let i=0; i<data.length;i++){
        if (!years.includes(data[i].year))years.push(data[i].year);
        dat.push([{name: data[i].title, data: data[i].value}]);
    }
    years.sort();

  let options = {
    series: dat,
    chart: {
        type: 'bar',
        height: 350,
        background: "#4f4c4c",
        foreColor: '#e8e8e8'
    },
    title: {
        text: 'Количество спутников',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  'Segoe UI',
            color:  '#e8e8e8'
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: years,
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " спутников"
            }
        }
    }
 };

 let chart = new ApexCharts(document.getElementById("chart-cosmodrome"), options);
 chart.render();
}
function chart3() {
    let dat = [];
    let years = [];
    for (let i=0; i<data.length;i++){
        if (!years.includes(data[i].year))years.push(data[i].year);
        dat.push([{name: data[i].title, data: data[i].value}]);
    }
    years.sort();
 let options = {
    series: dat,
    chart: {
        type: 'bar',
        height: 350,
        background: "#4f4c4c",
        foreColor: '#e8e8e8'
    },
    title: {
        text: 'Сколько людей отправлено',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  'Segoe UI',
            color:  '#e8e8e8'
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: years,
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " amount of people"
            }
        }
    }
 };

 let chart = new ApexCharts(document.getElementById("chart-people"), options);
 chart.render();
}
function chart4() {
    let dat = [];
    let years = [];
    for (let i=0; i<data.length;i++){
        if (!years.includes(data[i].year))years.push(data[i].year);
        dat.push([{name: data[i].title, data: data[i].value}]);
    }
    years.sort();

 let options = {
    series: dat,
    chart: {
        type: 'bar',
        height: 350,
        background: "#4f4c4c",
        foreColor: '#e8e8e8'
    },
    title: {
        text: 'Запуски',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  'Segoe UI',
            color:  '#e8e8e8'
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: years,
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " satellites"
            }
        }
    }
 };

 let chart = new ApexCharts(document.getElementById("chart-satel"), options);
 chart.render();
}

function chart5(data) {
    let years = [];
    let dat = [];
    for (let i=0; i<data.length;i++){
        if (!years.includes(data[i].year))years.push(data[i].year);
        dat.push([{name: data[i].title, data: data[i].value}]);
    }
    years.sort();


 let options = {
    series: dat,
    chart: {
        type: 'bar',
        height: 350,
        background: "#4f4c4c",
        foreColor: '#e8e8e8'
    },
    title: {
        text: 'Сколько',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  'Segoe UI',
            color:  '#e8e8e8'
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: years,
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " launches"
            }
        }
    }
 };

 let chart = new ApexCharts(document.getElementById("chart-launches"), options);
 chart.render();
}

function map(data) {
    let elem1 = document.getElementsByClassName("m1");
    let elem2 = document.getElementsByClassName("m2");
    let elem3 = document.getElementsByClassName("m3");
    let elem4 = document.getElementsByClassName("m4");
    for (let i=0; i<data.length;i++){
        if (data[i].company == "SpaceX"){
            for (let j=0; j<elem1.length;j++){
                if (elem1[j].tooltip=="") elem1[j].tooltip=data[i].description;
            }
        }
        else if (data[i].company == "RocketLab"){
            for (let j=0; j<elem2.length;j++){
                if (elem2[j].tooltip=="") elem2[j].tooltip=data[i].description;
            }
        }
        else if (data[i].company == "One Space"){
            for (let j=0; j<elem3.length;j++){
                if (elem3[j].tooltip=="") elem3[j].tooltip=data[i].description;
            }
        }
        else if (data[i].company == "Interstellar"){
            for (let j=0; j<elem4.length;j++){
                if (elem4[j].tooltip=="") elem4[j].tooltip=data[i].description;
            }
        }
    }
}

function getSpaceports(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/spaceports/all/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            map(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}

function getLauncheDate(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/launches/nextDate",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            DateCalc(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function DateCalc(data) {

    let now = new Date();
    let newStamp = now.getTime();

    let timer;
    function updateClock() {
        newDate = new Date();
        newStamp = newDate.getTime();
        var diff = Math.round((newStamp-startStamp)/1000);

        var d = Math.floor(diff/(24*60*60));
        diff = diff-(d*24*60*60);
        var h = Math.floor(diff/(60*60));
        diff = diff-(h*60*60);
        var m = Math.floor(diff/(60));
        diff = diff-(m*60);
        var s = diff;

        document.getElementById('days').innerText=d;
        document.getElementById('hours').innerText=h;
        document.getElementById('minutes').innerText=m;
    }
    timer = setInterval(updateClock, 1000);
}

function getCommonGoodLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart4(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart1(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getPeople(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart3(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCommonSattelites(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart2(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getSattellites(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart2(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCompanyLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart5(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getRacketLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/",
        dataType: 'json',
        success : function(data) {
            alert("data has been received");
            console.log("SUCCESS: ");
            chart5(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}