 
 var valuarry=[];
 var arrayvalue=[];
 let list=[];


function validateInput() {
let names = document.getElementById("names").value;
let number = document.getElementById("number").value;
let email = document.getElementById("email").value;
let Gender = document.querySelector('input[type="radio"]:checked');
let select = document.getElementById("selected").value;
let addressed = document.getElementById("adres").value;


var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;

// let box = document.getElementsByClassName('checks');
// var tblFruits = document.getElementById("tbl");
// var selected = new Array(); 
// for(let i=0;i<box.length ;i++){
//     if(box[0].checked == true ||box[1].checked == true ||box[2].checked ==true ||box[3] == true){
//         document.getElementById("checkbox").innerHTML = "";  
//     }
//     else if(box[i].checked == false){
//         document.getElementById("checkbox").innerHTML = "Please select vaild languages";
//     }
//     if(box[0].checked){
//         if (box[0].checked) {
//             selected.push(box[0].value);
//             console.log(box[0].value)
//         }

//     }
//     if(box[1].checked){
//         if (box[1].checked) {
//             selected.push(box[1].value);
//             console.log(box[1].value)
//         }

//     }
       var selected = new Array();
 
        //Reference the Table.
        var tblFruits = document.getElementById("tbl");
 
        //Reference all the CheckBoxes in Table.
        var chks = tblFruits.getElementsByTagName("INPUT");
 
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
               
        }
    }
        //Display the selected CheckBox values.
        if (selected.length > 0) {
            document.getElementById("checkbox").innerHTML = "";
        }else{
            
            document.getElementById("checkbox").innerHTML = "you must enter valid languages";
            
        }



if (names =="") {
    document.getElementById("namerror").innerHTML=" Please select vaild names";
}else {
document.getElementById("namerror").innerHTML=" ";
}

if (number ==""|| !phoneNum.test(number)) {
    document.getElementById("numbererror").innerHTML=" Please select vaild number";
}else {
document.getElementById("numbererror").innerHTML=" ";
}

if (email==""|| !regEmail.test(email)) {
    document.getElementById("mail").innerHTML=" Please select vaild email";
}else {
document.getElementById("mail").innerHTML=" ";
}

if(Gender){
    document.getElementById("gendererr").innerHTML ="";

}else{
    document.getElementById("gendererr").innerHTML = "Please select the gender";
}

if (select=="") {
    document.getElementById("option").innerHTML="Please select the status";
}else {
document.getElementById("option").innerHTML=" ";
}

if (addressed=="") {
    document.getElementById("address").innerHTML=" Please select vaild address";
}
else {
document.getElementById("address").innerHTML=" ";
}

let result = {"names":names,"number":number,"email":email,"gender":Gender.value,
"languages":selected,"select":select,"address":addressed}

if(names&&number&&email&&selected&&select&&addressed&&Gender.value){
    list.push(result)
    
    console.log(valuarry)

    localStorage.setItem("resultvalue",JSON.stringify(list))
    buildTable();
}
else{
    console.log("");
}

}

function buildTable(){
    list = JSON.parse(localStorage.getItem("resultvalue"));
    arrayvalue.push(list)
    console.log(arrayvalue)
    
    var text;
    text = "";
    for (let i = 0; i < list.length; i++) { //displays multiple announcements
       text += "<td>" + list[i].names;//displaysname
       text += "<td>" + list[i].number;//displaysclub
       text += "<td>" + list[i].email;//displayscategory
       text += "<td>" + list[i].gender;//displaysgrade
       text += "<td>" + list[i].languages;//displaysgender
       text += "<td>" + list[i].select;//displaystime
       text += "<td>" + list[i].address;
       text += '<td> <button onclick="Edit('+ i +')">Edit</button> <tr>';
    }
    document.getElementById("myTable").innerHTML = text;
    

}
    
document.querySelector("button").addEventListener("click" , (event)=>{
    event.preventDefault();
})






