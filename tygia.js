var d = new Date();

document.getElementById("date").innerHTML = "Hôm nay, " + "Ngày " + d.getDate() + " Tháng " + ((d.getMonth())+1) +" Năm "+ d.getFullYear();


document.getElementById("dates").innerHTML = "Hôm nay, " + "Ngày " + d.getDate() + " Tháng " + ((d.getMonth())+1) +" Năm "+ d.getFullYear();


function doiTien(){
    let st= parseFloat(document.getElementById("stId").value);
    let dv= document.getElementById("dvId").value;

    let kq= ""
    switch(dv){
        case "eur":
            kq= st/ 26000;
        break;
        case "eur":
            kq= st/ 22000;
        break;
        case "aud":
            kq= st/ 16000;
        break;

    }
    let k= document.getElementById("kq2");
    k.innerHTML = `${st} VND = ${kq} ${dv.toUpperCase()}`;
    
}
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll" , () =>{
    if(window.pageYOffset > 1100){
        toTop.classList.add("active");
        
    } else{
        toTop.classList.remove("active");
    }
})