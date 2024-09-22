/*
    Giới thiệu array object
    Static methods:
    1. Array.isArray(arr): Kiểm tra arr có phải là mảng hay không
    2. Array.from(): Tạo mảng mới tử các dữ liệu khác như Set, Iterable ...

    Instance props:
    const numberList = [1, 2, 3];
    numberList.length; //3

    Instance methods:
    - Nhóm hàm kiểm tra phần tử có tồn tại không?
        1. every(callbackFn): Kiểm tra tất cả phần tử thỏa điều kiện
        2. some(callbackFn): Kiểm tra có một phần tử thỏa điều kiện
        3. indexOf(searchElement): tìm vị trí đầu tiên của phần tử searchElement
        4. lastIndexOf(searchElement): tìm vị trí cuối cùng của phần tử searchElement
        5. includes(searchElement): kiểm tra xem có phần tử searchElement không
        6. find(callbackFn): Tìm phần tử đầu tiên thỏa điều kiện
        7. findIndex(callbackFn): Tìm vị trí của phần tử đầu tiên thỏa điều kiện

    - Nhóm hàm thêm, xóa phần tử
        1. push(element0, ..., elementN): Thêm cuối mảng
        2. pop(): Xóa cuối mảng
        3. shift(): Xóa đầu mảng
        4. unshift(element0, ..., elementN): thêm đầu mảng
        5. splice(start, deleteCount, item1, ..., itemN): Xóa/thêm giữa mảng

    - Nhóm hàm hay sử dụng:
        1. forEach(callbackFn): Duyệt mảng
        2. map(callbackFn): Biến đổi mảng
        3. filter(callbackFn): Lọc mảng theo điều kiện
        4. slice(start, end): lấy mảng con
        5. reduce(): Duyệt mảng và tính toán cho ra kết quả cuối cùng

    - Và một số hàm khác
        1. fill(value, start = 0, end = arr.length): fill value từ start tới end
        2. join(): Biến đổi mảng thành chuỗi
        3. concat(): nối mảng
        4. reverse(): Đảo ngược mảng
        5. sort(): Sắp xếp mảng

*/