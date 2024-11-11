# Git
Step 1: 
- git init
- git add .
- git commit -m"init"
Step 2:
- create a repo github

# LocalStorage
- Dữ liệu lưu tại localStorage không bao giờ bị mất khi reload trang web hay tắt bật trình duyệt.

- setItem:
```js
// value: phải là kiểu dữ liệu string, number, boolean, null, undefined ✅
// Không lưu được object hay array. ❌
localStorage.setItem("key", value);

```

- getItem
```js
localStorage.getItem("key");
```

- remoteItem
```js
localStorage.remoteItem("key")
```

# == vs ===
- ==: tự động ép kiểu, nếu kiểu dữ liệu khác nhau thì tự động chuyển về cùng 1 kiểu rồi mới so sánh
- ===: không tự động ép kiểu, nếu khác kiểu là sai ngay lập tức.

# Lan truyền event (propagation)
- bubbling ✅
- capturing
- event.stopPropagation(): chặn lan truyền event.

# onclick vs addEventListener ✅
- onclick: ghi đè method onclick của element, xóa logic cũ.
- addEventListener: không xóa logic cũ, chỉ thêm logic mới vào.

TH: Dự án mới
- onclick: ✅ gom code - logic về 1 nơi
- addEventListener: ❌ có thể phân mảnh logic ở nhiều nơi

TH: Dự án maintain
- onclick: ❌ ghi đè code cũ - xóa code cũ
- addEventListener: ✅ thêm logic mới nhưng vẫn giữ lại logic cũ



# DOM (Document Object Model)
- tree