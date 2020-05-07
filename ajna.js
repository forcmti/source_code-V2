// var base_url = 'http://localhost/cmti';
// var spindal_temp = 31;
console.log(spindal_temp);

// extend  extend_mtb
var mtb_status = false;

function extend_mtb() {
    if (mtb_status) {
        // hide the panel
        mtb_status = false;
        $("#mtb").attr('class', 'col-lg-6');
        $("#tbe").attr("class", "tim-icons icon-double-right exbox-blue");
        $("#tbgaug").attr('class', "col-lg-12");
        $("#tbcontent").attr('class', "hide");
    } else {
        //optn the panel
        mtb_status = true;
        $("#mtb").attr('class', 'col-lg-12');
        $("#tbe").attr("class", "tim-icons icon-double-left exbox-blue");
        $("#tbgaug").attr('class', "hide");
        $("#tbcontent").attr('class', "col-lg-12");
    }

}

//Spindle Temp color gauge

function update_st(stval) {
    //update the texts
    $("#stval").html(stval + "⁰C");
    $("#smval").html(stval + "⁰C");

    //update color gauge
    /////////////////////////SPINDAL TEMPRATURE//////////////////
    var stopts = {
        angle: -0.2, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#FFFFFF' // Fill color
        },
        staticZones: [

            { strokeStyle: "#30B32D", min: 0, max: 20 }, // Green
            { strokeStyle: "#FFDD00", min: 20, max: 55 }, // Yellow
            { strokeStyle: "#F03E3E", min: 55, max: 75 } // Red
        ],
        staticLabels: {
            font: "10px sans-serif", // Specifies font
            labels: [0, 15, 30, 45, 60, 75], // Print labels at these values
            color: "#FFFFFF", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: true, // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support

    };
    var sttarget = document.getElementById('st'); // your canvas element
    var stgauge = new Gauge(sttarget).setOptions(stopts); // create sexy gauge!
    stgauge.maxValue = 75; // set max gauge value
    stgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    stgauge.animationSpeed = 32; // set animation speed (32 is default value)
    stgauge.set(stval); // set actual value


    //update monochrome gauge
    var smopts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var smtarget = document.getElementById('smt'); // your canvas element
    var smgauge = new Donut(smtarget).setOptions(smopts); // create sexy gauge!
    smgauge.maxValue = 50; // set max gauge value
    smgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    smgauge.animationSpeed = 36; // set animation speed (32 is default value)
    smgauge.set(stval); // set actual value
}
update_st(spindal_temp);

function update_at(atval) {

    $("#atval").html(atval + "⁰C");

    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var atarget = document.getElementById('atg'); // your canvas element
    var atgauge = new Donut(atarget).setOptions(opts); // create sexy gauge!
    atgauge.maxValue = 50; // set max gauge value
    atgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    atgauge.animationSpeed = 36; // set animation speed (32 is default value)
    atgauge.set(atval); // set actual value
}
update_at(at);


/////////////SCT UPDATE

function update_sct(sctval) {

    $("#sctval").html(sctval + "⁰C");

    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var sctarget = document.getElementById('sctg'); // your canvas element
    var scgauge = new Donut(sctarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(sctval); // set actual value
}
update_sct(sct);

//xmtg
function update_xt(xval) {

    $("#xtval").html(xval + "⁰C");

    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var xtarget = document.getElementById('xmtg'); // your canvas element
    var scgauge = new Donut(xtarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(xval); // set actual value
}
update_xt(xt);




///ym

function update_yt(yval) {

    $("#ytval").html(yval + "⁰C");

    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ytarget = document.getElementById('ymtg'); // your canvas element
    var scgauge = new Donut(ytarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(yval); // set actual value
}
update_yt(yt);


///////////////////////////ZMT



function update_zt(zval) {

    $("#ytval").html(zval + "⁰C");

    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('zmtg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(zval); // set actual value
}
update_zt(zt);

///////////////////////////////////////////////EXPAND SS
var sp_status = false;

function extend_sp() {
    if (sp_status) {
        sp_status = false;
        $("#spindle_tab").attr('class', 'col-lg-6');
        $("#she").attr("class", "tim-icons icon-double-right exbox-white");
        $("#spindle_health").attr('class', 'col-lg-12');
        $("#spindle_content").attr('class', "hide");
    } else {

        sp_status = true;
        $("#spindle_tab").attr('class', 'col-lg-12');
        $("#she").attr("class", "tim-icons icon-double-left exbox-white");
        $("#spindle_health").attr('class', 'hide');
        $("#spindle_content").attr('class', "col-lg-12");

    }

}


function update_ss(ss) {

    //update the texts
    $("#ssval").html(ss + " RPM");


    //update color gauge
    /////////////////////////SPINDAL TEMPRATURE//////////////////
    var opts = {
        angle: -0.2, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#FFFFFF' // Fill color
        },
        staticZones: [

            { strokeStyle: "#30B32D", min: 0, max: 3333 }, // Green
            { strokeStyle: "#FFDD00", min: 3333, max: 6666 }, // Yellow
            { strokeStyle: "#F03E3E", min: 6666, max: 10000 } // Red
        ],
        staticLabels: {
            font: "10px sans-serif", // Specifies font
            labels: [0, 1000, 3000, 7000, 9000], // Print labels at these values
            color: "#FFFFFF", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: true, // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support

    };
    var target = document.getElementById('ssg'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 10000; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(ss); // set actual value
}
update_ss(ss);


function update_emg(mechine_power) {
    var opts = {
        angle: -0.2, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#FFFFFF' // Fill color
        },
        staticZones: [

            { strokeStyle: "#30B32D", min: 0, max: 3333 }, // Green
            { strokeStyle: "#FFDD00", min: 3333, max: 6666 }, // Yellow
            { strokeStyle: "#F03E3E", min: 6666, max: 10000 } // Red
        ],
        staticLabels: {
            font: "10px sans-serif", // Specifies font
            labels: [0, 2, 4, 6, 8, 10], // Print labels at these values
            color: "#FFFFFF", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: true, // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support

    };
    var target = document.getElementById('emg'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 10; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(mechine_power); // set actual value

}

update_emg(mechine_power);


function update_emmg(emmg) {
    //update monochrome gauge
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#ffff00', // Colors
        colorStop: '#ffff00', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('mpg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 10; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(emmg); // set actual value

}

update_emmg(mechine_power)


//////////////////////?????ENERGY MONITOR
var em_status = false;

function extend_em() {
    if (em_status) {
        em_status = false;
        $("#eme").attr('class', 'tim-icons icon-double-right exbox-white');
        $("#emgg").attr("class", "col-lg-12");
        $("#emtab").attr("class", "col-lg-6");
        $("#emgc").attr('class', 'hide');
    } else {
        $("#emtab").attr("class", "col-lg-12");
        $("#eme").attr('class', 'tim-icons icon-double-left exbox-white');
        em_status = true;
        $("#emgg").attr("class", "hide");
        $("#emgc").attr('class', 'col-lg-12');

    }

}


function update_mc(mcval) {
    //update monochrome gauge
    $("#mcval").html(mcval + " Amp");
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('mcg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 20; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(mcval); // set actual value

}
update_mc(mc)

function update_me(meval) {
    //update monochrome gauge
    $("#meval").html(meval + "Kw/H");
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('meg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(meval); // set actual value

}
update_me(mp);


// spindle current

function update_sc(scval) {
    $("#scval").html(scval + " Amp")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#ff00ee', // Colors
        colorStop: '#ff00ee', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('scg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 20; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(scval); // s
}
update_sc(sc);

// spindle power
function update_sp(spval) {
    $("#spval").html(spval + " Kw")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('spg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 10; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(spval); // s
}
update_sp(sp);

//spindle tarque
function update_stq(stqval) {
    $("#stqval").html(stqval + " N.m.")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#ffaa00', // Colors
        colorStop: '#ffaa00', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('stqg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(stqval); // s
}
update_stq(stq);


// axis drive current

function update_adc(adcval) {
    $("#adcval").html(adcval + " Amp")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('adcg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(adcval); // s
}
update_adc(adc);
//axis drive power
function update_adp(adpval) {
    $("#adpval").html(adpval + " Kw")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('adpg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 10; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(adcval); // s
}
update_adp(adp);


//axis drive Tarque
function update_adt(adtval) {
    $("#adtval").html(adtval + " N.m")
    var opts = {
        angle: 0.23, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#5db0ef', // Colors
        colorStop: '#5db0ef', // just experiment with them
        strokeColor: '#FFFFFF', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true, // High resolution support

    };
    var ztarget = document.getElementById('adtg'); // your canvas element
    var scgauge = new Donut(ztarget).setOptions(opts); // create sexy gauge!
    scgauge.maxValue = 50; // set max gauge value
    scgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    scgauge.animationSpeed = 36; // set animation speed (32 is default value)
    scgauge.set(adtval); // s
}
update_adt(adt);

// pressure Gauge

function update_pr(prval) {
    console.log(prval);
    $("#pval").html(prval + " bar");
    var opts = {
        angle: -0.2, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000' // Fill color
        },
        staticZones: [

            { strokeStyle: "#30B32D", min: 0, max: 20 }, // Green
            { strokeStyle: "#FFDD00", min: 20, max: 55 }, // Yellow
            { strokeStyle: "#F03E3E", min: 55, max: 75 } // Red
        ],
        staticLabels: {
            font: "10px sans-serif", // Specifies font
            labels: [0, 15, 30, 45, 60, 70], // Print labels at these values
            color: "#000", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: true, // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support

    };
    var target = document.getElementById('prg'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 70; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(prval); // set actual value
}
update_pr(pr)


function update_scot(scotval) {
    $("#scotval").html(scotval + "⁰C");
    var opts = {
        angle: -0.2, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000' // Fill color
        },
        staticZones: [

            { strokeStyle: "#30B32D", min: 0, max: 20 }, // Green
            { strokeStyle: "#FFDD00", min: 20, max: 55 }, // Yellow
            { strokeStyle: "#F03E3E", min: 55, max: 75 } // Red
        ],
        staticLabels: {
            font: "10px sans-serif", // Specifies font
            labels: [0, 15, 30, 45, 60, 70], // Print labels at these values
            color: "#000", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: true, // If false, max value increases automatically if value > maxValue
        limitMin: true, // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support

    };
    var target = document.getElementById('scotg'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 70; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(scotval); // set actual value
}
update_scot(scot)
//setInterval(() => {
 //   window.location.reload();
//}, 10000);
