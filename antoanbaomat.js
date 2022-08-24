$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown();
$('.accordion-header').click(function(){
    $(this).parent().toggleClass('active');  /* luân phiên hiển thị */
    $(this).parent().children('.accordion-body').slideToggle();
});
});
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll" , () =>{
    if(window.pageYOffset > 1100){
        toTop.classList.add("active");
        
    } else{
        toTop.classList.remove("active");
    }
})