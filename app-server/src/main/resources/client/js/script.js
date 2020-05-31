function start() {
    getLauncheDate();
    getSpaceports();
    getRacketLoad();
    getPHLoad();
    getPeopleByRockets();
    getSattellites();
    getLoad();
}


function chart(data, element, title){

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
            text: title,
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
                    return ""+ val + " спутников"
                }
            }
        }
    };

    let chart = new ApexCharts(element, options);
    chart.render();
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

function linechart(data, element, title) {
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
            background: "#4f4c4c",
            foreColor: '#e8e8e8',
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
            text: title,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['transparent'],
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
        dataType: 'json',
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
    let date = new Date(data).getTime();

    let x = setInterval(function(){
        let now = new Date();
        let distance = date - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').innerText=""+days;
        document.getElementById('hours').innerText=""+hours;
        document.getElementById('minutes').innerText=""+minutes;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('days').innerText="0";
            document.getElementById('hours').innerText="0";
            document.getElementById('minutes').innerText="0";
        }
    }, 1000);

}

function getPHLoad(){
    let Node = document.getElementById("chart-satel");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/payload/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Нагрузка по РН");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCommonGoodLoad(){
    let Node = document.getElementById("chart-satel");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/payload/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, Node, "Общая полезная нагрузка");
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
        dataType: 'json',
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
    let Node = document.getElementById("chart-people");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/people/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Отправлено людей");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getPeopleByCompany(){
    let Node = document.getElementById("chart-people");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/payload",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Отправлено людей по компаниям");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCommonSattelites(){
    let Node = document.getElementById("chart-cosmodrome");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/satellites/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, Node, "Общее число запущенных спутников");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getSattellites(){
    let Node = document.getElementById("chart-cosmodrome");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/satellites/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Запущено спутников по РН");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getCompanyLoad(){
    let Node = document.getElementById("chart-launches");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/companies/launches/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            linechart(data, Node, "Запуски компаний");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}
function getRacketLoad(){
    let Node = document.getElementById("chart-launches");
    Node.innerHTML = '';
    $.ajax({
        type: 'GET',
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/satellites/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Запуски ракето-носителей");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}