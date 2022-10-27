//Stock Validation
function StockVal() {
    const pId = document.getElementById("pId").value;
    const pC = document.getElementById("pC").value;
    const pN = document.getElementById("pN").value;
    const pP = document.getElementById("pP").value;
    const pQ = document.getElementById("pQ").value;

    if(pId == ""){
        alert("Please enter the ID.");
    }
    if(pC == ""){
        alert("Please enter the category.");
    }
    if(pN == ""){
        alert("Please enter the product name.");
    }
    if(pP == ""){
        alert("Please enter the price.");
    }
    if(pQ == ""){
        alert("Please enter the quantity.");
    }
}
//Login Validation
function LoginVal(){
    const uL = document.getElementById("uL").value;
    const pL = document.getElementById("pL").value;

    if(uL == ""){
        alert("Please enter your username.");
    }
    if(pL == ""){
        alert("Please enter your password.");
    }
}
//Signup Validation
function SignupVal(){
    const un = document.getElementById("un").value;
    const pw = document.getElementById("pw").value;
    const ea = document.getElementById("ea").value;
    const pnum = document.getElementById("pnum").value;

    if(un = ""){
        alert("Please enter username.");
    }
    if(pw = ""){
        alert("Please enter password.");
    }
    if(ea = ""){
        alert("Please enter e-mail address.");
    }
    if(pnum = ""){
        alert("Please enter your phone number.");
    }
}
//Restock Function
function srxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            swxml(this);
        }
    }
    xmlhttp.open("GET","RestockXML.xml",true);
    xmlhttp.send();
}
function swxml(xml){
    var a, b, xmlD, c;
    xmlD = xml.responseXML;
    c = '<tr> <th>Product ID</th><th>Product Category</th><th>Product Name</th><th>Product Price</th><th>Quantity</th> </tr>';
    //Tag Name Replacer
    a = xmlD.getElementsByTagName("RProd");
    for(b = 0; b < a.length; b++){
        c += '<tr class="info">';
        c += "<td>" + a[b].getElementsByTagName("ProdID")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdCat")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdName")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdPrice")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdQuant")[0].childNodes[0].nodeValue + "</td>";
        c += "</tr>";
    }
    document.getElementById("tblrestock").innerHTML = c;
}
//Order Function
function orxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            owxml(this);
        }
    }
    xmlhttp.open("GET","OrderXML.xml",true);
    xmlhttp.send();
}
function owxml(xml){
    var a, b, xmlD, c;
    xmlD = xml.responseXML;
    c = '<tr> <th>Customer ID</th><th>Product ID</th><th>Product Category</th><th>Product Name</th><th>Product Price</th><th>Quantity</th><th>Date Ordered</th> </tr>';
    //Tag Name Replacer
    a = xmlD.getElementsByTagName("OProd");
    for(b = 0; b < a.length; b++){
        c += '<tr class="info">';
        c += "<td>" + a[b].getElementsByTagName("CustID")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdID")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdCat")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdName")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdPrice")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("ProdQuant")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("OrdDate")[0].childNodes[0].nodeValue + "</td>";
        c += "</tr>";
    }
    document.getElementById("tblorder").innerHTML = c;
}
//Customer Function
function crxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cwxml(this);
        }
    }
    xmlhttp.open("GET","CustomerXML.xml",true);
    xmlhttp.send();
}
function cwxml(xml){
    var a, b, xmlD, c;
    xmlD = xml.responseXML;
    c = '<tr> <th>Customer ID</th><th>Email Address</th><th>Contact Number</th><th>Date Registered</th> </tr>';
    //Tag Name Replacer
    a = xmlD.getElementsByTagName("CInfo");
    for(b = 0; b < a.length; b++){
        c += '<tr class="info">';
        c += "<td>" + a[b].getElementsByTagName("CustID")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("CustEAdd")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("CustNum")[0].childNodes[0].nodeValue + "</td>";
        c += "<td>" + a[b].getElementsByTagName("RegDate")[0].childNodes[0].nodeValue + "</td>";
        c += "</tr>";
    }
    document.getElementById("tblcustomer").innerHTML = c;
}
//Product Function
//------//
//PROCESSOR
var item_c = '';
function cpuholder(ctgry){
    item_c = ctgry;
    cpurxml();
}
function cpurxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cpuwxml(this);
        }
    }
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function cpuwxml(xml){
    var a, b, xmlD, c;
    var rl = 0;
    xmlD = xml.responseXML;
    a = xmlD.getElementsByTagName(item_c);
    c = "";
    for(b = 0; b <= a.length; b++){
        c += '<tr>';
        loop: for(b = rl; b < a.length; b++){
            c += '<td class="select"><img src="imgs/' + a[b].getElementsByTagName("img")[0].childNodes[0].nodeValue + '" width="250px" height="250px"' + "<br/>" + a[b].getElementsByTagName("caption")[0].childNodes[0].nodeValue + "</td>";
            if((b + 1) % 4 == 0){
                rl = b + 1;
                break loop;
            }
        }
        c += "</tr>"
    }
    document.getElementById("tblitem").innerHTML = c;
}
//MOTHERBOARD
var item_c = '';
function mbholder(ctgry){
    item_c = ctgry;
    mbrxml();
}
function mbrxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            mbwxml(this);
        }
    }
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function mbwxml(xml){
    var a, b, xmlD, c;
    var rl = 0;
    xmlD = xml.responseXML;
    a = xmlD.getElementsByTagName(item_c);
    c = "";
    for(b = 0; b <= a.length; b++){
        c += '<tr>';
        loop: for(b = rl; b < a.length; b++){
            c += '<td class="select"><img src="imgs/' + a[b].getElementsByTagName("img")[0].childNodes[0].nodeValue + '" width="250px" height="250px"' + "<br/>" + a[b].getElementsByTagName("caption")[0].childNodes[0].nodeValue + "</td>";
            if((b + 1) % 4 == 0){
                rl = b + 1;
                break loop;
            }
        }
        c += "</tr>"
    }
    document.getElementById("tblitem").innerHTML = c;
}
//GRAPHICS CARD
var item_c = '';
function gpuholder(ctgry){
    item_c = ctgry;
    gpurxml();
}
function gpurxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            gpuwxml(this);
        }
    }
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function gpuwxml(xml){
    var a, b, xmlD, c;
    var rl = 0;
    xmlD = xml.responseXML;
    a = xmlD.getElementsByTagName(item_c);
    c = "";
    for(b = 0; b <= a.length; b++){
        c += '<tr>';
        loop: for(b = rl; b < a.length; b++){
            c += '<td class="select"><img src="imgs/' + a[b].getElementsByTagName("img")[0].childNodes[0].nodeValue + '" width="250px" height="250px"' + "<br/>" + a[b].getElementsByTagName("caption")[0].childNodes[0].nodeValue + "</td>";
            if((b + 1) % 4 == 0){
                rl = b + 1;
                break loop;
            }
        }
        c += "</tr>"
    }
    document.getElementById("tblitem").innerHTML = c;
}
//MONITOR
var item_c = '';
function dtholder(ctgry){
    item_c = ctgry;
    dtrxml();
}
function dtrxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            dtwxml(this);
        }
    }
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function dtwxml(xml){
    var a, b, xmlD, c;
    var rl = 0;
    xmlD = xml.responseXML;
    a = xmlD.getElementsByTagName(item_c);
    c = "";
    for(b = 0; b <= a.length; b++){
        c += '<tr>';
        loop: for(b = rl; b < a.length; b++){
            c += '<td class="select"><img src="imgs/' + a[b].getElementsByTagName("img")[0].childNodes[0].nodeValue + '" width="250px" height="250px"' + "<br/>" + a[b].getElementsByTagName("caption")[0].childNodes[0].nodeValue + "</td>";
            if((b + 1) % 4 == 0){
                rl = b + 1;
                break loop;
            }
        }
        c += "</tr>"
    }
    document.getElementById("tblitem").innerHTML = c;
}
//MEMORY STICK
var item_c = '';
function ramholder(ctgry){
    item_c = ctgry;
    ramrxml();
}
function ramrxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            ramwxml(this);
        }
    }
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function ramwxml(xml){
    var a, b, xmlD, c;
    var rl = 0;
    xmlD = xml.responseXML;
    a = xmlD.getElementsByTagName(item_c);
    c = "";
    for(b = 0; b <= a.length; b++){
        c += '<tr>';
        loop: for(b = rl; b < a.length; b++){
            c += '<td class="select"><img src="imgs/' + a[b].getElementsByTagName("img")[0].childNodes[0].nodeValue + '" width="250px" height="250px"' + "<br/>" + a[b].getElementsByTagName("caption")[0].childNodes[0].nodeValue + "</td>";
            if((b + 1) % 4 == 0){
                rl = b + 1;
                break loop;
            }
        }
        c += "</tr>"
    }
    document.getElementById("tblitem").innerHTML = c;
}