






document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    init();
  }
}

function init(){
    // var svg = document.getElementById("frame3").getSVGDocument();
    // svg_bystanders = svg.getElementById("bystanders");
    // svg_bystanders.style.display = "block";

    var adama = document.getElementById("adama");
    TweenMax.to(adama, 10, {left:200})  

    var circle = document.getElementById("test");
    // TweenMax.to(circle, 10, {left:1000})  
}




// Velocity(document.getElementById("adama"), { opacity: 0.1 }, { duration: 1000 });
// Velocity(document.getElementById("adama"), { opacity: 1 }, { duration: 1000 });


// var f1_cashier
// f1_svg = document.getElementById("frame1_svg");
// f1_svgdoc = f1_svg.getSVGDocument();
// f1_cashier = f1_svgdoc.getElementById("cashier");
// // f1_cashier.style.display = f1_cashier.style.display == "block" ? "none" : "block";

// f1_svg.contentWindow.postMessage(f1_cashier, '*'); 

// var a = document.getElementById("alphasvg");

//             // It's important to add an load event listener to the object,
//             // as it will load the svg doc asynchronously
//             a.addEventListener("load",function(){

//                 // get the inner DOM of alpha.svg
//                 var svgDoc = a.contentDocument;
//                 // get the inner element by id
//                 var delta = svgDoc.getElementById("delta");
//                 // add behaviour
//                 delta.addEventListener("mousedown",function(){
//                         alert('hello world!')
//                 }, false);
//             }, false);