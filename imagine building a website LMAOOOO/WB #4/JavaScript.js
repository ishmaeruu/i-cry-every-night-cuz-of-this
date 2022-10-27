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
    };
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
    };
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
    };
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
//Products
var item_c = '';
function holder(ctgry){
    item_c = ctgry;
    prxml();
}
function prxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            pwxml(this);
        }
    };
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function pwxml(xml){
    var xmlD = xml.responseXML;
    var ppic = [];
    var pnam = [];
    var ppri = [];
    for(let i = 0; i < xmlD.getElementsByTagName('items').length; i++){
        if(xmlD.getElementsByTagName('ctg')[i].childNodes[0].nodeValue == item_ctgry){
            ppic.push(xmlD.getElementsByTagName('img')[i].childNodes[0].nodeValue);
            pnam.push(xmlD.getElementsByTagName('dtl')[i].childNodes[0].nodeValue);
            ppri.push(xmlD.getElementsByTagName('prc')[i].childNodes[0].nodeValue);
        }
    }
    var tblbod = '';
    var rl = 0;
    for(let i = 1; i <= Math.ceil(pnam.length/5); i++){
        tblbod += "<tr>";
        loop : for(let i = rl; i < pnam.length; i++){
            tblbod += '<td class="select"><img src="'+ppic[i]+'" width="250px" height="250px"/><p>'+pnam[i]+'</p><p>'+ppri[i]+'</p></td>';
            if ((i + 1) % 5 == 0){
                rl = i + 1;
                break loop;
            }
        }
        tblbod += "</tr>";
    }
    document.getElementById('tblprod').innerHTML = tblbod;
    console.log(tblbod);
}
// Brands
function brandzone(brand){
    pbrand = brand;
}
function brxml(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            bwxml(this);
    }
    };
    xmlhttp.open("GET","ProductXML.xml",true);
    xmlhttp.send();
}
function bwxml(xml){
    var xmlD = xml.responseXML;
    var ppic = [];
    var pnam = [];
    var ppri = [];
    for(let i = 0; i < xmlD.getElementsByTagName('items').length; i++){
        if(xmlD.getElementsByTagName('dtl')[i].childNodes[0].nodeValue.startsWith(pbrand)){
            ppic.push(xmlD.getElementsByTagName('img')[i].childNodes[0].nodeValue);
            pnam.push(xmlD.getElementsByTagName('dtl')[i].childNodes[0].nodeValue);
            ppri.push(xmlD.getElementsByTagName('prc')[i].childNodes[0].nodeValue);
        }
    }
    var tblbod = '';
    var rl = 0;
    for(let i = 1; i <= Math.ceil(pnam.length/5); i++){
        tblbod += "<tr>";
        loop : for(let i = rl; i < pnam.length; i++){
            tblbod += '<td class="select"><img src="'+ppic[i]+'" width="250px" height="250px"/><p>'+pnam[i]+'</p><p>'+ppri[i]+'</p></td>';
            if ((i + 1) % 5 == 0){
                rl = i + 1;
                break loop;
            }
        }
        tblbod += "</tr>";
    }
    document.getElementById('tblbrand').innerHTML = tblbod;
    console.log(tblbod);
}
//Tooltip
var item_ctgry = '';
function holder(ctgry){
    item_ctgry = ctgry;
}
var myAjaxSetting = {
    context: { i: -1 }, 
    success: myCallBack, 
    responseType: "xml"
}
    function myCallBack(response, context){
    var arr_cat = response.documentElement.getElementsByTagName('ctg');
    var cat = [];
    for(let i = 0; i < arr_cat.length; i++){
        cat.push(arr_cat[i].childNodes[0].nodeValue);
    }
    var i_cat = cat.indexOf(item_ctgry);
    var pic = response.documentElement.getElementsByTagName('img')[i_cat].childNodes[0].nodeValue;
    var pri = response.documentElement.getElementsByTagName('prc')[i_cat].childNodes[0].nodeValue;
    var nam = response.documentElement.getElementsByTagName('dtl')[i_cat].childNodes[0].nodeValue;
    var txt = '<p><strong>Promo Sale!<br/><br/><i>'+item_ctgry.toUpperCase()+'</i></strong></p> <p>'+nam+'</p> <img src="'+pic+'" style="margin-left:12px;width:120px;height:120px;"/><p>'+pri+'</p>';
    console.log(txt);
    return '<div>'+txt+'</div>';
}