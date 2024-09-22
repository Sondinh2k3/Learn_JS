/*
    Learn about "use strict" mode

    - Từ ES5 có nhiều thay đổi và conflig với code trước đó, nên cần có cơ chế để quyết định
    sử dụng code mới hay cũ
    - "use strict" là cái flag để biết mình muốn dùng code mới (tức từ ES5 trở về sau)
    - Hiện thì nếu không có nhắc gì thêm thì mặc định ta sẽ dùng "use strict" nhé.
    - Lưu ý: "use strict" phải được đặt ở đầu file
    - Một khi đã bật "use strict" thì không có cách nào cancel được
    - Còn nếu chỉ muốn bật strict mode cho một hàm thì đặt nó ở đầu hàm, tuy nhiên hầu như chúng ta 
    sẽ không dùng cách này
    - Khi bạn có sử dụng class hoặc module thì strict mode sẽ được bật tự động mà không cần phải
    thêm "use strict"
*/

"use strict";
x = 5;
