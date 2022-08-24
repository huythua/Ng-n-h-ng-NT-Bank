function myFunction() {
    var show = document.getElementById("Showpassword");
    if(show.type== "password"){
        show.type="text";
    }else{
        show.type="password";
    }
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll" , () =>{
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
        
    } else{
        toTop.classList.remove("active");
    }
})
function request(){
var hien= document.getElementsByClassName("form-input")[0].value;
if(hien !=""){
    Swal.fire(
        'Thành Công!',
        'Đã Gửi Link Cấp Lại Mật Khẩu Vào Số Điện Thoại',
        'success'
      )
    }else{

    }
}


