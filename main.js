function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

let products = [
    new Product(1, "Laptop", 25000000, 5, "Điện Tử", true),
    new Product(2, "iPhone", 35000000, 3, "Điện Tử", true),
    new Product(3, "Tai Nghe", 2000000, 0, "Phụ Kiện", true),
    new Product(4, "Chuột", 500000, 10, "Phụ Kiện", true),
    new Product(5, "Bàn Phím", 1500000, 0, "Phụ Kiện", false),
    new Product(6, "Màn Hình", 7000000, 2, "Điện Tử", true)
];

function nameAndPrice(products) {
    console.log("Câu 3");
    let nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
    console.log(nameAndPrice);
}

function availableProducts(products) {
    console.log("Câu 4");
    let available = products.filter(p => p.quantity > 0);
    console.log(available);
}

function checkPrice(products){
    console.log("Câu 5");
    let price = products.filter(p => p.price >= 30000000);
    console.log(price);
}

function checkCategoryIsAvailable(products){
    console.log("Câu 6");
    let category = products.filter(p => p.category === "Phụ Kiện" && p.isAvailable);
    console.log(category);
}

function totalValue(products){
    console.log("Câu 7");
    let total = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    console.log("Tổng giá trị hàng tồn kho:", total);
}

function printProductsOf(products) {
    console.log("Câu 8");
    for(let p of products) {
        console.log('Tên sản phẩm:', p.name + ' |Danh mục:', p.category + ' |Trạng thái:', p.isAvailable ? 'Đang bán' : 'Ngừng bán');
    }
}

function printProductsIn(products) {
    console.log("Câu 9");
    for (let key in products) {
        console.log(products[key]);
    }
}


function printAvailableQuantity(products){
    console.log("Câu 10");
    for(let p of products) {
        if(p.quantity > 0 && p.isAvailable) {
            console.log('Tên sản phẩm:', p.name);
        }
    }
}

nameAndPrice(products);
availableProducts(products);
checkPrice(products);
checkCategoryIsAvailable(products);
totalValue(products);
printProductsOf(products);
printProductsIn(products);
printAvailableQuantity(products);