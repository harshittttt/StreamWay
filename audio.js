function yes(){
    document.getElementById("review").innerHTML='We are happy serving you.';
    document.getElementById("continueshopping").style.display='block';
    document.getElementById("findsimilar").style.display='none';
    document.getElementById("viewcart").style.display='block';

}

function no(){
    document.getElementById("review").innerHTML='We are really sorry for this. Give us feedback, so that we can add that product for you.';
    document.getElementById("findsimilar").style.display='block';
    document.getElementById("continueshopping").style.display='none';
    document.getElementById("viewcart").style.display='none';

}
function continueshopping(){
    window.open('index.html','_self');
}
function findsimilar(){
    window.open("audio.html",'_self');
}

function openpopup(){
    document.querySelector(".add-popup").style.display="block";
}
function closepopup(){
    document.querySelector(".add-popup").style.display="none";
}


function onHover()
{
    $("#img1").attr('src', 'Images/pick5.webp');
}

function offHover()
{
    $("#img1").attr('src', 'Images/pick1.webp');
}


// Sale Popup 
const popup = document.querySelector('.offer-popup');
const body1 = document.querySelector('.bg-color')
window.onload = function(){
    setTimeout(function(){
        popup.style.display="block";
        body1.style.opacity="0.8";
        popup.style.opacity="1";

    },6000)
}

document.querySelector(".close").addEventListener
("click", function(){
    document.querySelector(".offer-popup").style.display = "none";
    body1.style.opacity="1";
});