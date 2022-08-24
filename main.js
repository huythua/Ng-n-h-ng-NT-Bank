function myFunction() {
    var show = document.getElementById("Showpassword");
    if(show.type== "password"){
        show.type="text";
    }else{
        show.type="password";
    }
}
function myFunction1() {
  var show = document.getElementById("Showpassword1");
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
        var save1= document.getElementsByClassName("form-input")[1].value;
        if(save !="" && save1!="" ){
            Swal.fire({
                title: 'Bạn muốn lưu mật khẩu không?',
                showDenyButton: true,
                // showCancelButton: true,
                confirmButtonText: 'Lưu',
                denyButtonText: `Không Lưu`,
              }).then((result) => {
  
                if (result.isConfirmed) {
                  Swal.fire('Đã lưu mật khẩu!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Mật khẩu chưa được lưu!', '', 'info')
                }
              })
            }else{
                Swal.fire({     
                    title: 'Oops...',
                    text: 'Bạn Chưa Nhập Mật Khẩu / Số Điện Thoại!',
                   
                  })
            }
        }
let k= document.querySelector(".form-submit");
k.addEventListener("click", function(){
  const t= document.getElementsByClassName("form-input");
  let flag=true;
  for(let i=0; i<t.length; i++){
    if(t[i].value== ""){
      flag=false;
      break;
    }
  }
  if (flag==true){
    Swal.fire(
      'Thành Công!',
      'Tạo Tài Khoản Thành Công',
      'success'
    )
  }
})
        // function an(){
        //   const t= document.getElementsByClassName("form-input");
        //   let flag=true;
        //   for(let i=0; i<t.length; i++){
        //     if(t[i].value== ""){
        //       flag=false;
        //       break;
        //     }
        //   }
        //   if (flag==true){
        //     Swal.fire(
        //       'Thành Công!',
        //       'Tạo Tài Khoản Thành Công',
        //       'success'
        //     )
        //   }
        // }