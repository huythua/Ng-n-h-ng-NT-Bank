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
        Swal.fire({     
            title: 'Oops...',
            text: 'Bạn Chưa Nhập Số Điện Thoại / Tên Đăng Nhập',
           
          })
    }
}

function enter(){
    var save= document.getElementsByClassName("form-input")[0].value;
    if(save !=""){
        Swal.fire({
            title: 'Do You Want To Save The Passwords?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Password is not saved!', '', 'info')
            }
          })
        }else{
            Swal.fire({     
                title: 'Oops...',
                text: 'Bạn Chưa Nhập Số Điện Thoại / Tên Đăng Nhập',
               
              })
        }
    }
    function enter(){
        var save= document.getElementsByClassName("form-input")[1].value;
        var save1= document.getElementsByClassName("form-input")[0].value;
        if(save !="" && save1!="" ){
            Swal.fire({
                title: 'Do You Want To Save The Passwords?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Password is not saved!', '', 'info')
                }
              })
            }else{
                Swal.fire({     
                    title: 'Oops...',
                    text: 'Bạn Chưa Nhập Mật Khẩu / Số Điện Thoại!',
                   
                  })
            }
        }