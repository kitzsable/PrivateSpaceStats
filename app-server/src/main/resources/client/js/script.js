function start() {
    getLauncheDate();
    getSpaceports();

    getRacketLoad();
    getPHLoad();
    getPeopleByCompany();
    getSattellites();
    getLoad();
}


function chart(data, element, title){
    
    let dat = [];
    let years =[];
    let test = [];

    for (let i=0; i<data.length;i++){
        let comp = []
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
            comp.push({name: data[i].name, year: data[i].yearlyValues[j].year, data: data[i].yearlyValues[j].value});
        }
        comp.sort(function (a, b) {
            return a.year - b.year;
        })
        test.push(comp);
    }

    years.sort();

    for (let i=0; i<test.length; i++){
        let val = []; let name;
        for (let u=0; u<years.length; u++){
            let check=0; let temp = 0;

            for (let j=0; j<test[i].length; j++){
                name = test[i][j].name;
                temp=j;
                if (years[u]==test[i][j].year){
                    check = 1;
                    val.push(test[i][j].data);
                    break;
                }
            }
            if (check == 0) val.push(0);

        }
        dat.push({name: name, data: val});
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
                    return ""+ val
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
                    return "$ " + val
                }
            }
        }
    };

    let chart = new ApexCharts(element, options);
    chart.render();

}

function donut (data, element, title){
    let dat = [];
    let titles = [];

    for (let i=0; i<data.length;i++){
        let amount = 0;
        for (let j=0; j<data[i].yearlyValues.length; j++){
            amount += data[i].yearlyValues[j].value;
        }

        dat.push(amount);
    }

    for (let i=0; i<data.length;i++){
        if (!titles.includes(data[i].name))
            titles.push(data[i].name);

    }

    var options = {
        series: dat,
        labels: titles,
        chart: {
            type: 'donut',
            height: 350,
            background: "#4f4c4c",
            foreColor: '#e8e8e8'
        },
        title:{
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
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(element, options);
    chart.render();
}

function linechart(data, element, title) {

    let dat = [];
    let years =[];
    let test = [];

    for (let i=0; i<data.length;i++){
        let comp = []
        for (let j=0; j<data[i].yearlyValues.length; j++){
            if (!years.includes(data[i].yearlyValues[j].year)) years.push(data[i].yearlyValues[j].year);
            comp.push({name: data[i].name, year: data[i].yearlyValues[j].year, data: data[i].yearlyValues[j].value});
        }
        comp.sort(function (a, b) {
            return a.year - b.year;
        })
        test.push(comp);
    }

    years.sort();

    for (let i=0; i<test.length; i++){
        let val = []; let name;
        for (let u=0; u<years.length; u++){
            let check=0; let temp = 0;

            for (let j=0; j<test[i].length; j++){
                name = test[i][j].name;
                temp=j;
                if (years[u]==test[i][j].year){
                    check = 1;
                    val.push(test[i][j].data);
                    break;
                }
            }
            if (check == 0) val.push(0);

        }
        dat.push({name: name, data: val});
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
    let elem1 = document.getElementById("tooltip1");
    let elem2 = document.getElementById("tooltip2");
    let elem3 = document.getElementById("tooltip3");
    let elem4 = document.getElementById("tooltip4");
    let elem5 = document.getElementById("tooltip5");
    let elem6 = document.getElementById("tooltip6");
    let elem7 = document.getElementById("tooltip7");
    elem1.innerHTML = 'Название: '+ data[0].name + ' Координаты: '+ data[0].location+ ' Запуски за 2020 год: '+data[0].launchByLastYear;
    elem2.innerHTML = 'Название: '+ data[1].name + ' Координаты: '+ data[1].location+ ' Запуски за 2020 год: '+data[1].launchByLastYear;
    elem3.innerHTML = 'Название: '+ data[2].name + ' Координаты: '+ data[2].location+ ' Запуски за 2020 год: '+data[2].launchByLastYear;
    elem4.innerHTML = 'Название: '+ data[3].name + ' Координаты: '+ data[3].location+ ' Запуски за 2020 год: '+data[3].launchByLastYear;
    elem5.innerHTML = 'Название: '+ data[4].name + ' Координаты: '+ data[4].location+ ' Запуски за 2020 год: '+data[4].launchByLastYear;
    for (let i=0; i<data.length;i++){

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
            chart(data, Node, "Масса полезной нагрузки выведенной на орбиту");
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
            linechart(data, Node, "Масса полезной нагрузки выведенной на орбиту");
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
        url : "http://localhost:8080/privateSpaceStats/stats/companies/people/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            donut(data, Node, "Количество людей доставленных на орбиту");
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
        url : "http://localhost:8080/privateSpaceStats/stats/companies/people",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Количество людей доставленных на орбиту");
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
            linechart(data, Node, "Количество спутников выведенных на орбиту");
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
            chart(data, Node, "Количество спутников выведенных на орбиту");
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
            linechart(data, Node, "Общее количество удачных запусков");
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
        url : "http://localhost:8080/privateSpaceStats/stats/rockets/launches/",
        dataType: 'json',
        success : function(data) {
            console.log("SUCCESS: ");
            chart(data, Node, "Общее количество удачных запусков");
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
    });
}