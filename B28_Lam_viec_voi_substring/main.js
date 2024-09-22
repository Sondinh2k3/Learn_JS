/*
    Làm việc với substring
    - Trong JS có 3 cái hàm, sử dụng 1 trong 3 hàm đều được. Nhưng mà để đỡ rối, nhớ một hàm để
    sử dụng là slice thôi.
    - substr thì theo MDN, nó được đánh dấu là deprecated
    - slice và substring sử dụng khá tương đồng
    - slice thì hỗ trợ số âm. Số âm thì đếm ngược từ cuối chuỗi
    - substring thì xem số âm là số 0.
    - substring cho phép start > end; trong khi slice thì không hỗ trợ

    slice(start, end): negative means count from end, start can't be greater than end
    substring(start, end): negative means 0, start can be greater than end
    substr: deprecated as in MDN docs.
*/

//slice
'Easy Frontend'.slice(0, 4); //Easy
'Easy Frontend'.slice(2); //sy Frontend

'Easy Frontend'.slice(-3); //end
'Easy Frontend'.slice(-3, -1); //en
//===> slice không lấy giá trị end, mà chỉ lấy từ start ---> end - 1

//substring
'Easy Frontend'.substring(0, 4); //Easy
'Easy Frontend'.substring(2); //sy Frontend

'Easy Frontend'.substring(-3); //Easy Frontend
'Easy Frontend'.substring(-3, -1); // ''
// ===> substring xem số âm như số 0

//slice và substring khi start > end
'Easy Frontend'.slice(4, 0); //''
'Easy Frontend'.substring(4, 0); //Easy
