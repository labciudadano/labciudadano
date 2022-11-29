let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");
let parrafoCero = document.getElementsByTagName("p")[0].innerHTML;
let images = ['url("fondo/Amics.png")', 'url("fondo/PCacts.png")', 'url("fondo/Upv.png")'];
let imgs = document.getElementsByTagName("img");

parrafos[1].style.visibility = "hidden";
parrafos[2].style.visibility = "hidden";
parrafos[3].style.visibility = "hidden";
//parrafos[4].style.visibility = "hidden";


enlaces[0].addEventListener("click", function(){
    getParrafo(0);
    
});
enlaces[1].addEventListener("click", function(){
    getParrafo(1);
    
});
enlaces[2].addEventListener("click", function(){
    getParrafo(2);
    
});
enlaces[3].addEventListener("click", function(){
    getParrafo(3);
    
});
enlaces[4].addEventListener("click", function(){
    getImg();
    getParrafo(4); 
})

function getParrafo(indice) {
    if( indice == 0 ){
        parrafos[0].innerHTML = parrafoCero;
    }
    parrafos[0].innerHTML = parrafos[indice].innerHTML
}

function getImg(){

    if( imgs.length == 0){
        for(let i = 0; i < images.length; i++) {
        
            let elem = document.createElement("img");
            elem.style.display = "inline-block";
            elem.style.border = "0.25em solid black"
            elem.style.margin = "15px"
            elem.style.marginTop = "65px";
            elem.style.backgroundImage = images[i];
            elem.style.height = '200px';
            elem.style.width = '200px';
            document.getElementsByTagName("p")[4].insertAdjacentElement("beforeend",elem)
        }
    }else{
    
        for (let i = 0; i < images.length; i++) {
            contenido =  document.getElementsByTagName("img")[0]
            contenido.remove(imgs[i]);
        }
        getImg();
        
    }
   
 
}
