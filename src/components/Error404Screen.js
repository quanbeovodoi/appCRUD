const Error404Screen = {render:() => {
    return `<div class="error">
    <img src="./src/assets/images/404.PNG" alt="">
   <div class="error_content">
        <h1 class="text-7xl">Không tìm thấy trang</h1>
        <span class="text-xl">Oops! Hệ thống không tồn tại trang mà bạn tìm kiếm</span>
        <a href='/'><button class="btn secondary text-xl">Quay lại</button></a>
   </div>
</div>`
}}
export default Error404Screen;