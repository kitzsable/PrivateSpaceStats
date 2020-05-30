window.onload = function () {
    getLauncheDate();
    getRacketLoad();
    getPHLoad();
    getPeopleByRockets();
    getSattellites();
    getLoad();
}

function chart1(data) {
    let dat = [];
    let titles =[];
    for (let i=0; i<data.length;i++){
        titles.push(data[i].name);
        dat.push(data[i].allLaunch);
    }

    let options = {
        series: [{name: "data", data: dat}],
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
    let years =[];

    for (let i=0; i<data.length;i++){
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
        }
    }

    years.sort();

    for (let j=0; j<data.length;j++){
        let val = [];
        for (let k=0; k<data[j].yearlyValues.length; k++){
            if (years.includes(data[j].yearlyValues[k].year)) val.push(data[j].yearlyValues[k].value);
            else val.push(0);

        }

        dat.push({name: data[j].name, data: val});
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
function chart3(data) {
    let years = [];
    let dat = [];

    for (let i=0; i<data.length;i++){
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
        }
    }

    years.sort();

    for (let j=0; j<data.length;j++){
        let val = [];
        for (let k=0; k<data[j].yearlyValues.length; k++){
            if (years.includes(data[j].yearlyValues[k].year)) val.push(data[j].yearlyValues[k].value);
            else val.push(0);

        }

        dat.push({name: data[j].name, data: val});
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
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
        }
    }

    years.sort();

    for (let j=0; j<data.length;j++){
        let val = [];
        for (let k=0; k<data[j].yearlyValues.length; k++){
            if (years.includes(data[j].yearlyValues[k].year)) val.push(data[j].yearlyValues[k].value);
            else val.push(0);

        }

        dat.push({name: data[j].name, data: val});
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
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
        }
    }

    years.sort();

    for (let j=0; j<data.length;j++){
        let val = [];
        for (let k=0; k<data[j].yearlyValues.length; k++){
            if (years.includes(data[j].yearlyValues[k].year)) val.push(data[j].yearlyValues[k].value);
            else val.push(0);

        }

        dat.push({name: data[j].name, data: val});
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

function linechart(data, element) {
    let dat = [];
    let years = [];
    for (let i=0; i<data.length;i++){
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
        }
    }

    years.sort();

    for (let j=0; j<data.length;j++){
        let val = [];
        for (let k=0; k<data[j].yearlyValues.length; k++){
            if (years.includes(data[j].yearlyValues[k].year)) val.push(data[j].yearlyValues[k].value);
            else val.push(0);

        }

        dat.push({name: data[j].name, data: val});
    }

    let options = {
        series: dat,
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: years,
        }
    };
    let chart = new ApexCharts(element, options);
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
                if (elem1[j].tooltip=="") {
                    elem1[j].tooltip=data[i].name;
                    break;
                }
            }
        }
        else if (data[i].company == "RocketLab"){
            for (let j=0; j<elem2.length;j++){
                if (elem2[j].tooltip=="") {
                    elem1[j].tooltip=data[i].name;
                    break;
                }
            }
        }
        else if (data[i].company == "One Space"){
            for (let j=0; j<elem3.length;j++){
                if (elem3[j].tooltip=="") {
                    elem1[j].tooltip=data[i].name;
                    break;
                }
            }
        }
        else if (data[i].company == "Interstellar"){
            for (let j=0; j<elem4.length;j++){
                if (elem4[j].tooltip=="") {
                    elem1[j].tooltip=data[i].name;
                    break;
                }
            }
        }
    }
}

function getSpaceports(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/spaceports/all/",
        dataType: 'application/json',
        success : function(data) {
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
        dataType: 'application/json',
        success : function(data) {
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

function getPHLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/payload/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart4(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCommonGoodLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/payload/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, document.getElementById('chart-satel'));
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/spaceports/all/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart1(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getPeopleByRockets(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/people/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart3(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getPeopleByCompany(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/payload",
        dataType: 'application/json',
        success : function(data) {
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
        url : "http://localhost:8080/privateSpaceStats/stats/companies/satellites/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, document.getElementById('chart-cosmodrome'));
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getSattellites(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/satellites/",
        dataType: 'application/json',
        success : function(data) {
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
        url : "http://localhost:8080/privateSpaceStats/stats/companies/launches/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, document.getElementById('chart-launches'));
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getRacketLoad(){
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/satellites/",
        dataType: 'application/json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart4(data);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}