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


