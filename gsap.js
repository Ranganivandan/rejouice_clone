var t1=gsap.timeline();

gsap.to("#mousecursor",{
x:50,
y:10,
})


gsap.to("#page",{
    x:5,
    y:5
})

t1.from("nav h3,nav h4",{
    x:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
t1.from("#page1-content h1 span",{
    y:-500,
    duration:1,
    delay:0.2,
    opacity:0,
    stagger:0.3,
    scrub:5
})



// t1.from( "#part1 h2,#part1 h4",{
//     y:-500,
//     duration:0.3,
//     delay:0.2,
//     opacity:0,
//     stagger:0.3,


//    scrollTrigger:{
// trigger:"#page2",
// trigger:"body",
// start:"top 70%",
// end:" end 30%",
// markers:true,
// scrub:true,
//    } 




// })

gsap.from(" #nav2,#part1 h2, #part1 h4,#part2 h2", {
    y: 50,
    duration: 0.3,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 70%",
        end: "end 60%",
        // markers: true,
        scrub: 3
    }
});

gsap.from("#content2 h1 span",{
    y:-150,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 80%",
        end:"end 50%",
        scrub:3,
        // markers:true,
    }
})


gsap.from("#content3 span",{
    y:50,
    opacity:0,
    duration:0.3,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3",
        // markers:true,
        start:"top 70%",
       end:"end 30%",
       scrub:3
        
    }
})



var loader=document.querySelector("loader");
var tl=gsap.timeline();
tl.from(".loader h1 span",{
    y:-100,
    delay:0.2,
    duration:0.6,
    stagger:0.4,
    opacity:0,

})





tl.to(".loader",{



    transform:"translateY(-100vh)",
    duration:2,
    delay:1
})

var menu=document.getElementById("menu")

function menus(){
menu.style.opacity=1;
// menu.style.transform="translateY(0%)"
menu.style.zIndex="100"


gsap.from("#menu",{
    y:-200,
    duration:1
})


}

var close=document.getElementById("close").addEventListener("click",close);


function close(){
    menu.style.zIndex="-10"
    

    gsap.to("#menu",{
        
        opacity:0
    })
}




function time(){
    a=0;

setInterval(()=>{
a=a+Math.floor(Math.random()*30);




if(a<100){
    document.querySelector("#percentage h2").innerHTML=a + "%";
    // console.log(a);
}
else{
    a=100;
    document.querySelector("#percentage h2").innerHTML="100%";
}

},150)
};




gsap.to("#percentage h2",{
    onstart:time(),
    duration:0.6,
    delay:0.2,
    
    scale:1.1
})



function increse(){
    let x=0;
    setInterval(()=>{

x=x+1;
if(x<10){
document.getElementById("number").innerHTML=x;
console.log(x);

}
else{
    x=10;
    document.getElementById("number").innerHTML=x;

}


    },2000);
}




gsap.from("#number",{
    duration:1,
    x:-100,
    delay:2,
    // opacity:0,
    onstart:increse(),
    scrollTrigger:{
trigger:"#page5",
// markers:true,
start:"top 100%",
end:"end 20%",

scrub:5,
    }
})





gsap.to("#pages h1",{
    transform:"translateX(-100%)",


scrollTrigger:{
    trigger:"#pages",
    scroller:"body",
    
// markers:true,
start:"top 0%",
end:"top -200%",
scrub:2,
pin:true,
}

})




gsap.from("#bottom h2 span,#lef h2,#nav7 h1,#righ button,#righ h1", {
    duration: 2,
    delay:2,
    stagger: 0.5,
    y: -100,
    opacity:0,
    scrollTrigger: {
        trigger: "#page7",
        // markers:true, 
        start: "top 90%",
        end: "end 10%",
        scrub: 2
    }
});



gsap.from("#nav6 h1", {
    duration: 1.5,
    delay:2,
    stagger: 0.5,
    y: -100,
    opacity:0,
    scrollTrigger: {
        trigger: "#page6",
        // markers:true, 
        start: "top 90%",
        end: "end 10%",
        scrub: 2
    }
});


gsap.from("#content6 h1 span", {
    duration: 1.5,
    delay:2,
    stagger: 0.5,
    y: -500,
    opacity:0,
    scrollTrigger: {
        trigger: "#page6",
        // markers:true, 
        start: "top 90%",
        end: "end 10%",
        scrub: 2
    }
});










