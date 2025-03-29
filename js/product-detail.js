// Lấy id từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Kiểm tra nếu có id thì mới thực hiện fetch
if (productId) {
    fetch('./js/data.json')
        .then(resp => resp.json())
        .then(coffee => {
            // Tìm sản phẩm có id khớp với productId
            const product = coffee.find(item => item.id == productId);

            
            if (product) {
                // Đổ dữ liệu sản phẩm vào trang chi tiết
                document.querySelector('#product-title').innerText = product.title;
                document.querySelector('#product-image').src = product.image;
                document.querySelector('#product-price').innerText = `$${product.price.toFixed(2)}`;
                document.querySelector('#product-description').innerText = product.description;
            } else {
                console.error('Không tìm thấy sản phẩm');
            }
        })
        .catch(error => console.error(error));
} else {
    console.error('Không tìm thấy id sản phẩm trong URL');
}
