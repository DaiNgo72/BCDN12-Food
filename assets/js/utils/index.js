function findIndex(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        // i=0 -> item = 1
        // i=3 -> item = 4
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

function findItem(arr, key) {
    // Duyệt qua từng phần tử của mảng
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        // So sánh id của từng phần tử trong mảng với key cần tìm
        if (item.id === key) {
            return arr[i]
        }
    }

    return null;
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

function filterArr(arr, loai) {
    if (loai == 'all') {
        return arr;
    }

    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];


        if (item.loai == loai) {
            newArr.push(item);
        }
    }

    return newArr
}

// -----------------------
function forEach(list, cb) {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        cb(item);
    }
}

forEach(
    [1, 2, 3, 4],

    function (item) {
        console.log(item);
    }
)

forEach(
    [{ id: 1 }, { id: 2 }, { id: 3 }],

    function (item) {
        console.log(item);
    }
)











function findIndex2(list, condition) {

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        // Giá trị của hàm trả về đúng thì return index
        if (condition(item)) { // condition('b')
            return i;
        }
    }

    return -1;

}


const index = findIndex2(
    ["a", "b", "c", "d"],

    function (item) {
        console.log(item);

        if (item === 'c') {
            return true;
        }

        return false;
    }
);

["a", 'b', 'c'].forEach(function (item) {
    console.log(item);
})

const idx2 = ["a", 'b', 'c'].findIndex(function (item) {

    if (item === 'c') {
        return true
    }

    return false;

})

console.log('idx2', idx2);

