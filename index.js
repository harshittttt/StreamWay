const popup = document.querySelector('.signup-popup');
const body1 = document.querySelector('.all')
window.onload = function(){
    setTimeout(function(){
        popup.style.display="block";
        body1.style.opacity="0.8";
        popup.style.opacity="1";

    },6000)
}

document.querySelector("#close").addEventListener
("click", function(){
    document.querySelector(".signup-popup").style.display = "none";
    body1.style.opacity="1";
});

function closesignup(){
    document.querySelector(".signup-popup").style.display = "none";
    window.alert("Signed Up Seccessfully!");
    body1.style.opacity="1";
}
