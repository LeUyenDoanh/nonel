function getValue(){
    event.preventDefault();
    const nameUser=document.getElementById("na").value;
    const email=document.getElementById("em").value;
    const mess=document.getElementById("me").value;
    console.log(nameUser, email, mess);
}
document.getElementById("se").addEventListener("click",getValue)