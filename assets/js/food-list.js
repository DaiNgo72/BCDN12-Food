// Mong muốn không được phép gán lại giá trị
let listFood = [];

document.querySelector('#btnThemMon').onclick = function () {
    console.log("Them mon");
    // ----------

    // 1. Lấy giá trị input
    let foodID = document.querySelector('#foodID').value;
    let tenMon = document.querySelector('#tenMon').value;
    let loai = document.querySelector('#loai').value;
    let giaMon = document.querySelector('#giaMon').value;
    let khuyenMai = document.querySelector('#khuyenMai').value;
    let tinhTrang = document.querySelector('#tinhTrang').value;
    let hinhMon = document.querySelector('#hinhMon').value;
    let moTa = document.querySelector('#moTa').value;

    // 2. Tạo object 
    let food = {
        id: foodID,
        ten: tenMon,
        loai: loai,
        gia: giaMon,
        khuyenMai: khuyenMai,
        tinhTrang: tinhTrang,
        hinh: hinhMon,
        moTa: moTa,
    };
    // 3. Thêm một phần tử vào mảng
    listFood.push(food);

    // Render
    renderListFood();

    // Reset form
    resetFormAddFood();

    saveListFood();
}

const sv = {
    age: 20
}

// chuyển đổi array, object về string
// làm sao để chuyển được string -> array, object

// JSON: định dạng JSON kiểu dữ liệu String
// Lưu biểu diễn array và object dưới dạng string
// Để dễ dàng chuyển đổi qua lại giữa string và array, object
const svJson = JSON.stringify(sv) //'{"age": "20"}';
console.log("svJson:::", svJson, typeof svJson);

console.log(sv.age);// lấy giá trị của biến age
sv.age = 0; // xét/cập nhật lại giá trị

function resetFormAddFood() {
    let foodID = document.querySelector('#foodID');
    let tenMon = document.querySelector('#tenMon');
    let loai = document.querySelector('#loai');
    let giaMon = document.querySelector('#giaMon');
    let khuyenMai = document.querySelector('#khuyenMai');
    let tinhTrang = document.querySelector('#tinhTrang');
    let hinhMon = document.querySelector('#hinhMon');
    let moTa = document.querySelector('#moTa');

    foodID.value = '';
    tenMon.value = '';
    loai.value = '';
    giaMon.value = ''
    khuyenMai.value = ''
    tinhTrang.value = '';
    hinhMon.value = '';
    moTa.value = '';
}

function renderListFood() {
    const tbodyFood = document.getElementById('tbodyFood');

    if (listFood.length == 0) {
        tbodyFood.innerHTML = "";

        return;
    }

    let content = "";

    for (let i = 0; i < listFood.length; i++) {
        const food = listFood[i];

        content += `
            <tr>
                <td>${food.id}</td>            
                <td>${food.ten}</td>            
                <td>${showLoai(food.loai)}</td>            
                <td>${food.gia}</td>            
                <td>${food.khuyenMai}</td>        
                <td>
                ${tinhGiaKhuyenMai(
            Number(food.gia),
            Number(food.khuyenMai)
        )}
                </td>            
                <td>${showTinhTrang(food.tinhTrang)}</td>            
                <td>
                    <button>Edit</button>
                    <button onclick="handleDeleteFood('${food.id}')">Delete</button>
                </td>            
            </tr>
        `
    }

    console.log(content);

    tbodyFood.innerHTML = content;
}

function tinhGiaKhuyenMai(gia, khuyenMai) {
    return gia * (100 - khuyenMai) / 100
}

function showLoai(loai) {
    if (loai == 'loai1') {
        return "Chay"
    }

    if (loai == 'loai2') {
        return "Mặn"
    }

    return "Không xác định"
}

function showTinhTrang(tinhTrang) {
    if (tinhTrang == '0') {
        return "Hết"
    }

    return "Còn"
}

function handleDeleteFood(id) {
    console.log("id", id);

    const index = findIndex(listFood, id);

    // Kiểm tra coi thử id có tồn tại trong mảng hay không
    // -1: không tồn tại
    if (index == -1) {
        // Thoát khỏi function, không tính toán nữa.
        return;
    }

    // Xóa
    listFood.splice(index, 1);

    // Render lại mảng listFood
    renderListFood();

    saveListFood();
}

function findIndex(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item.id == key) {
            // index = i;
            // break;

            // Tìm được index rồi và return
            // Khi function đã tìm thấy được giá trị của mình
            // thì sẽ dừng function => đồng nghĩa với việc thoát khỏi vòng lặp
            return i
        }
    }

    return -1;
}

const lap = {
    name: 'macbook',
    price: 20,
}

// Lưu vào localStorage với key là laptop
const lapJSON = JSON.stringify(lap);
localStorage.setItem("laptop", lapJSON);

// Lấy ra 
const lapItem = localStorage.getItem("laptop");
// lapItem => kiểu dữ liệu là string

// Khôi phục lại kiểu dữ liệu trước khi chúng ta lưu vào trong localStorage
const lapItemObj = JSON.parse(lapItem);
// lapItemObj => từ string -> khôi phục về kiểu dữ liệu ban đầu.

function saveListFood() {
    const listFoodJSON = JSON.stringify(listFood)
    localStorage.setItem('listFood', listFoodJSON);
}

function restoreListFood() {
    const foods = localStorage.getItem("listFood");

    // Nếu có tồn tại giá trị
    if (foods) {
        // Gán lại giá trị lưu trong localStorage lại cho biến listFood
        listFood = JSON.parse(foods);
    }
}

function init() {
    restoreListFood();
    renderListFood();
}

// Khi vừa vào trang web thì gọi hàm init ngay lặp tức
init();
