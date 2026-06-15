# 🛠️ HƯỚNG DẪN SỬ DỤNG SCRIPTS

## 📋 Danh Sách Scripts

| Script | Chức năng | Khi nào dùng |
|--------|-----------|--------------|
| `create-sample-set.ps1` | Tạo bộ đề mẫu | Thêm bộ đề mới |
| `convert-new-set.ps1` | Convert format cũ | File dùng `const questionX` |

---

## 🎯 Script 1: create-sample-set.ps1

### Mục đích
Tạo bộ đề mới với 10 file mẫu sẵn format đúng

### Cách dùng
```powershell
.\create-sample-set.ps1 -SetNumber <số>
```

### Ví dụ
```powershell
# Tạo bộ đề 5
.\create-sample-set.ps1 -SetNumber 5

# Tạo bộ đề 10
.\create-sample-set.ps1 -SetNumber 10
```

### Output
```
Question Set X/
├── question1.js  (file mẫu với namespace pattern)
├── question2.js
├── ...
└── question10.js
```

### Lưu ý
- ✅ File đã có format đúng, không cần convert
- ✅ Chỉ cần edit nội dung câu hỏi
- ❌ Không thể tạo nếu bộ đề đã tồn tại

---

## 🔄 Script 2: convert-new-set.ps1

### Mục đích
Convert file từ format cũ sang namespace pattern

**Từ:**
```javascript
const question1 = { ... };
```

**Sang:**
```javascript
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = { ... };
```

### Cách dùng

#### Convert 1 bộ đề cụ thể
```powershell
.\convert-new-set.ps1 -SetNumber 5
```

#### Convert TẤT CẢ bộ đề
```powershell
.\convert-new-set.ps1
```

### Output
```
========================================
   QUESTION SET CONVERTER TOOL
========================================

Auto-detecting question sets...
Found 4 question sets: 1, 2, 3, 4

Converting Question Set 1...
  question1.js - Already converted
  question2.js - Converted
  ...

Set 1 - Converted 9 files
```

### Lưu ý
- ✅ An toàn - kiểm tra file đã convert chưa
- ✅ Có thể chạy nhiều lần
- ✅ Tự động phát hiện tất cả bộ đề

---

## 🎬 Workflows

### Workflow 1: Tạo Bộ Đề Mới (KHUYẾN NGHỊ)

```powershell
# Bước 1: Tạo bộ đề với file mẫu
.\create-sample-set.ps1 -SetNumber 6

# Bước 2: Edit các file trong "Question Set 6"
# (Dùng VSCode hoặc editor khác)

# Bước 3: Refresh browser
# Ctrl + F5
```

**Thời gian:** ~5 phút (chủ yếu là viết câu hỏi)

---

### Workflow 2: Import File Có Sẵn

Nếu bạn có file question từ nguồn khác với format cũ:

```powershell
# Bước 1: Copy file vào thư mục
Copy-Item "source/*.js" "Question Set 7/"

# Bước 2: Convert sang namespace
.\convert-new-set.ps1 -SetNumber 7

# Bước 3: Refresh browser
```

---

### Workflow 3: Fix Toàn Bộ Project

Nếu có nhiều file chưa convert:

```powershell
# Convert tất cả bộ đề
.\convert-new-set.ps1

# Output sẽ cho biết bộ nào cần convert
```

---

## 🚨 Xử Lý Lỗi

### Lỗi: "Question Set X already exists"

**Nguyên nhân:** Bộ đề đã tồn tại

**Giải pháp:**
```powershell
# Xóa thư mục cũ nếu cần
Remove-Item "Question Set X" -Recurse -Force

# Tạo lại
.\create-sample-set.ps1 -SetNumber X
```

---

### Lỗi: "No question files found"

**Nguyên nhân:** Thư mục rỗng hoặc không có file .js

**Giải pháp:**
```powershell
# Kiểm tra thư mục
Get-ChildItem "Question Set X\*.js"

# Nếu rỗng, tạo lại
.\create-sample-set.ps1 -SetNumber X
```

---

### Lỗi: "Execution Policy"

**Nguyên nhân:** PowerShell chặn script

**Giải pháp:**
```powershell
# Chạy với bypass
powershell -ExecutionPolicy Bypass -File .\script.ps1

# HOẶC set policy vĩnh viễn (admin)
Set-ExecutionPolicy RemoteSigned
```

---

## 💡 Tips & Tricks

### 1. Tạo Nhiều Bộ Đề Cùng Lúc

```powershell
# Tạo bộ 6, 7, 8
6..8 | ForEach-Object { .\create-sample-set.ps1 -SetNumber $_ }
```

### 2. Kiểm Tra Format File

```powershell
# Xem 3 dòng đầu của file
Get-Content "Question Set 5\question1.js" | Select-Object -First 3
```

**Phải thấy:**
```javascript
// Question 1 - Set 5
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = {
```

### 3. Backup Trước Khi Convert

```powershell
# Backup bộ đề
Copy-Item "Question Set 5" "Question Set 5 - Backup" -Recurse

# Convert
.\convert-new-set.ps1 -SetNumber 5
```

### 4. Xem Tất Cả Bộ Đề

```powershell
Get-ChildItem "Question Set *" -Directory | Select-Object Name
```

### 5. Đếm Số Câu Hỏi

```powershell
# Đếm câu hỏi trong Set 5
(Get-ChildItem "Question Set 5\question*.js").Count
```

---

## 📊 Checklist

Trước khi refresh browser:

- [ ] Đã tạo thư mục "Question Set X"
- [ ] Có đủ 10 file question1.js → question10.js
- [ ] File dùng namespace pattern (window.questionSetX)
- [ ] Đã điền nội dung câu hỏi (không còn "Sample...")
- [ ] Đã set đúng `correctAnswer` (0-3)
- [ ] `incorrectReasons` có `null` ở vị trí đáp án đúng

---

## 🔗 Liên Kết

- **Hướng dẫn nhanh:** `QUICK-START.md`
- **Hướng dẫn đầy đủ:** `README-AUTO-SYSTEM.md`
- **Auto-load system:** `auto-load-questions.js`

---

**Version:** 1.0  
**Last Updated:** 2026-06-15
