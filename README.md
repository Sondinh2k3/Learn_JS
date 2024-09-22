# LEARN JAVASCRIPT

### LESSON 1: LÀM QUEN SYNTAX

Syntax (cú pháp) là một bộ quy tắc hình thành nên ngôn ngữ lập trình

**1, Câu lệnh in ra terminal:**

> - Để in ra terminal, ta dùng câu lệnh: console.log();

**_Example:_**

```JavaScript
console.log('Welcome to Javascript');
```

**2, Learn about "use strict" mode**

> - Từ ES5 có nhiều thay đổi và conflig với code trước đó, nên cần có cơ chế để quyết định sử dụng code mới hay cũ
> - "use strict" là cái flag để biết mình muốn dùng code mới (tức từ ES5 trở về sau)
> - Hiện thì nếu không có nhắc gì thêm thì mặc định ta sẽ dùng "use strict" nhé.
> - Lưu ý: "use strict" phải được đặt ở đầu file
> - Một khi đã bật "use strict" thì không có cách nào cancel được
> - Còn nếu chỉ muốn bật strict mode cho một hàm thì đặt nó ở đầu hàm, tuy nhiên hầu như chúng ta sẽ không dùng cách này
> - Khi bạn có sử dụng class hoặc module thì strict mode sẽ được bật tự động mà không cần phải thêm "use strict"

**3, Semicolon (Dấu chấm phẩy):**

> - Có thể bỏ qua dấu chấm phẩy, nó vẫn chạy được
> - Tùy team mà sẽ prefer có hoặc không có dấu chấm phẩy
> - Tuy nhiên, có một số trường hợp mà nó sẽ hiểu sai.
> - Recommend dùng dấu chấm phẩy

**4, Comment**

Mẹo viết comment hiệu quả:

> - What: Comments là phần giải thích thêm cho code hiện tại
> - When: Khi có logic phức tạp, code phức tạp
> - Where: Viết trước đoạn code cần giải thích
> - Why: Để hiểu được tại sao mình viết code như vậy khi quay lại sau này
> - Who: Người nào viết code, thì người đó comment

Viết comments như thế nào cho hiệu quả

> - Viết bằng TIẾNG ANH (QUAN TRỌNG)
> - Cung cấp high-level overview cho cái mình đang làm
> - Giải thích tại sao cho code hiện tại, chứ không phải giải thích code chạy như thế nào

**5, Reserved Keywords**

Là những từ khóa được sử dụng với những chức năng đặc biệt, Khi cần tới chức năng nào thì sử dụng từ khóa đó. Đây thuộc bộ Syntax của ngôn ngữ, cần follow theo

> - Lưu ý: Không được đặt tên biến, tên hàm , ... trùng với tên từ khóa.

**6, Variables in JavaScript**

Giống như các ngôn ngữ lập trình khác, JS cũng cần phải có một nơi để lưu trữ giá trị tạm lên bộ nhớ. Khi cần lưu trữ giá trị thì ta sẽ sử dụng các biến.

Cách khai báo biến trong JS:

> - Với ES5 thì dùng var (function scop)
> - Từ ES6 thì dùng const hoặc let (block scop)
> - Scope thì mình sẽ tìm hiểu sau
> - const thì dùng cho hằng số hoặc biến mà không có nhu cầu thay đổi
> - let thì dùng cho biến có mong muốn thay đổi giá trị

_TIPS: Hãy luôn dùng const cho đến khi cần let_

Cách đặt tên cho biến:

> - Dùng tiếng Anh
> - Đặt tên để biết biến đó chứa giá trị gì
> - Không đánh đố nhau, đặt tên một đằng lưu giá trị một nẻo
> - Với true/false, đặt tên với prefix has hoặc is hoặc show hoặc từ mang ý nghĩa chỉ có nhận giá trị true hoặc false
> - Còn lại thì dùng danh từ
> - Với dạng danh sách thì nên thêm Suffix List.

### LESSON 2: OPERATORS VÀ CÁC KIỂU DỮ LIỆU TRONG JS
