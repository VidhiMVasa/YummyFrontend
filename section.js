function valid(){
    var nameBAT=document.getElementById("nameBAT").value;
    var mailBAT=document.getElementById("mailBAT").value;
    var phoneBAT=document.getElementById("phoneBAT").value;

    //name validation
    if(nameBAT==""){
        document.getElementById("name").innerHTML="Field should not be empty";
        document.getElementById("name").style.color="red";
    }
    else{
        document.getElementById("name").innerHTML=nameBAT;
        document.getElementById("name").style.color="green";

    }
    //mail validation
    var atposition=mailBAT.indexOf("@")
    var dotposition=mailBAT.lastIndexOf(".")
   
    //document.getElementById("mail").innerHTML=mailBAT;
 
    if(mailBAT=="" || atposition<1 || dotposition<atposition+2 || dotposition+2>=mailBAT.length){
        document.getElementById("mail").innerHTML="enter valid email address";
        document.getElementById("mail").style.color="red";
    }
    else{
        document.getElementById("mail").innerHTML=mailBAT;
        document.getElementById("mail").style.color="green";

    }

    //phone validation
    if(phoneBAT=="" || phoneBAT.lenght<7 || phoneBAT.length>10 ){
        document.getElementById("phone").innerHTML="enter valid phone number";
        document.getElementById("phone").style.color="red";        
    }
    else{
        document.getElementById("phone").innerHTML=phoneBAT;
        document.getElementById("phone").style.color="green";

    }
}
