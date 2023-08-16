// reproduccion de video en Historia //
let video=document.querySelector('video');

setTimeout(()=>{    
    document.querySelector('.duracion').textContent= 'Tiempo '  + parseInt(video.duration.toFixed(0)/60) + ':' +(video.duration.toFixed(0)-240)
},1000)

 const reproducir=()=>{
     video.play();

    let duracionVideo=video.duration.toFixed(0);
    let minutos=parseInt(duracionVideo/60)
    let segundos=parseInt((duracionVideo - minutos*60))      
    document.querySelector(".duracion").textContent=minutos + ":" + segundos;    
     
    if(duracionVideo >= 60){
    
        repro=setInterval(()=>{ 
        let minutos1= parseInt((video.currentTime.toFixed(0))/60);  
        let segundos1 = parseInt((video.currentTime.toFixed(0) - minutos1*60))
        
        document.querySelector('.tiempo-actual').textContent='0'+minutos1 +":"+ segundos1},1000)}  
    
}    
const pausar=()=>{
                video.pause();        
                clearInterval(repro)
}
        


// rompecabezas //
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {    
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}

function reinicio() {
window.location.reload();
}