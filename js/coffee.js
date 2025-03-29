fetch("./js/data.json")
    .then(resp => resp.json())
    .then(coffee => {
        // Lấy ra thẻ có id là "row_api"
        let container = document.querySelector('#row_api')
        
        // Dùng vòng lặp for từ i = 0 tới độ dài của mảng coffee
        for (let i = 0; i < coffee.length; i++) {
            let item = `
                <div class="col-md-4">
                    <div class="cream_box" data-id="${coffee[i].id}">
                        <div class="cream_img">
                            <img src="${coffee[i].image}" alt="${coffee[i].title}">
                        </div>
                        <div class="price_text">$${coffee[i].price.toFixed(2)}</div>
                        <h6 class="strawberry_text">${coffee[i].title}</h6>
                        <div class="cart_bt"><a href="#">Add To Cart</a></div>
                    </div>
                </div>
            `
            container.innerHTML += item
        }
        // Thêm sự kiện click cho từng sản phẩm
        document.querySelectorAll('.cream_box').forEach(item => {
            item.addEventListener('click', function () {
                let id = this.getAttribute('data-id');
                // Chuyển hướng sang trang chi tiết sản phẩm
                window.location.href = `product-detail.html?id=${id}`;
            })
        })
    })

    .catch(error => console.error(error));
