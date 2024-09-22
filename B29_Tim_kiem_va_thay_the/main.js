/*
    Tìm kiếm và thay thế chuỗi:
    1. replace (searchFor, replaceWith): Tìm kiếm và thay thế một searchFor bởi replaceWith
    2. replaceAll(searchFor, replaceWith): Tìm kiếm và thay thế tất cả searchFor bởi replaceWith

    Lưu ý: Tạm thời bỏ qua việc sử dụng với regexp

*/

'easy frontend'.replace(' ', '-'); //easy-frontend
'easy frontend'.replace(' ', ''); //easyfrontend

'easy frontend'.replace('easy', 'Easy'); //Easy frontend
'easy frontend'.replace('easy', ''); //' frontend'

//replace the first match only
'easy easy frontend'.replace('easy', ''); //' easy frontend'

//replace all
'easy easy frontend'.replaceAll('easy', ''); //'  frontend'
