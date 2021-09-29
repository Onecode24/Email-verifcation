
mailRegex= new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
function verification(){
    let mail=document.getElementById('mail');
    let verif=document.getElementById('verif');
     
    if(mailRegex.test(mail.value)){
         verif.innerHTML=" ";
         mail.style.borderColor='hsl(223, 100%, 88%)'
 
     }else{
         verif.innerHTML="Please provide a valid email address ";
         verif.style.color='hsl(354, 100%, 66%)'
         mail.style.borderColor='hsl(354, 100%, 66%)'
     }
 }

 