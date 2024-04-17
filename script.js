let cursor=document.getElementById("mousecursor");
let page=document.querySelector("#page1");

page.addEventListener("mousemove",function (dets){


gsap.to("#mousecursor",{
    x:dets.x,
    y:dets.y,
})

// cursor.style.left=dets.x + "px";
// cursor.style.top=dets.y + "px";

})

page.addEventListener("mouseenter",()=>{
    gsap.to("#mousecursor",{
        scale:1.2,
        opacity:1
    })
})


page.addEventListener("mouseleave",()=>{
    gsap.to("#mousecursor",{
        scale:0,
        opacity:0
    })
})




var pag=document.getElementById("page5");
var cur=document.getElementById("page");


pag.addEventListener("mousemove",function (value){


    gsap.to("#page",{
        x:value.x,
        y:value.y,
    })
    

    
    })
  

pag.addEventListener("mouseenter",()=>{
    gsap.to("#page",{
        opacity:1,
        scale:1
    })
})


pag.addEventListener("mouseleave",()=>{
    gsap.to("#page",{
        opacity:0,
        scale:0
    })
})



// function play1(){
//     document.getElementById("img1").style.opacity="0";
// }


// document.getElementById("menus").addEventListener("click",()=>{
//     document.getElementById("menu").style.transform="translateY(70%)";
//     document.getElementById("menu").style.opacity="1";
// })


//email js


function send(){

    emailjs.send("service_ifawg9k","template_emijfb7",{
        from_name: document.getElementById("emailjs").value,
        to_name: "vandanrangani21@gmail.com",
        });

        document.getElementById("emailjs").value="";
}




