$(document).ready(function() {

    // Go-To-Top
    $('#gototop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#gototop').fadeIn(300); //Xuất hiện nút
        } else {
            $('#gototop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#gototop').click(function() {
        $('html, body').animate({
             scrollTop: 0 }
            , 800); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });