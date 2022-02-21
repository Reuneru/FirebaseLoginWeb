
var firebaseConfig = {
    apiKey: "AIzaSyAtdhJNYSfQOdq44n4hoVq2KHhlG_oOH1o",
    authDomain: "reunerustorage.firebaseapp.com",
    databaseURL: "https://reunerustorage-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reunerustorage",
    storageBucket: "reunerustorage.appspot.com",
    messagingSenderId: "141537904703",
    appId: "1:141537904703:web:2cc888b6b8f0a58834508a",
    measurementId: "G-82BBRN9E5E"
};

function cambiar(value){
    var container = "none";
    var container2 = "none";
    if (value == true) { 
        
        container = 'container1';
        container2 = 'container2';
        document.title = "Logeo";

    } else if (value == false) {

        container = 'container2';
        container2 = 'container1';
        document.title = "Registro";

    }

    
    document.getElementById(container).style.opacity = 0;
    setTimeout(function(){
        document.getElementById(container).style.display = "none";
        document.getElementById(container2).style.display = "flex";
        setTimeout(function(){
            document.getElementById(container2).style.opacity = 1;
        }, 500);
    }, 500);
}




const app = firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth()


function Registro(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Registrado.");
}


  
function  Logeo(){
    var email = document.getElementById("emaillogin");
    var password  = document.getElementById("passwordlogin");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));    
}


function Deslogeo(){
    auth.signOut();
    alert("Deslogeo.");
}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var pathlogin = window.location.pathname;
        if (pathlogin == "/usuario"){
            window.location.href = "/"
        }

        var email = user.email;
        if (pathlogin == "/"){
            document.getElementById("H1").innerHTML = "Logeado como: " + email
        }
        alert("Usuario activo: "+email);
    }else{
        alert("No se ha encontrado un usuario activo.")
        console.log(window.location.pathname)
        var path = window.location.pathname;
        if (!(path == "/usuario")){
            window.location.href = "/usuario";
        }
    }
})



