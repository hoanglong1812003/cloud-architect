# 🚀 Hệ Thống Tự Động Load Câu Hỏi

## 📖 Tổng Quan

Hệ thống này cho phép bạn **tự động thêm bộ đề mới** mà **KHÔNG CẦN sửa HTML thủ công**.

### ✨ Tính Năng

- ✅ **Tự động phát hiện** tất cả thư mục "Question Set X"
- ✅ **Tự động load** tất cả câu hỏi trong mỗi bộ đề
- ✅ **Tự động cập nhật** giao diện trang chủ
- ✅ **Không cần sửa HTML** khi thêm bộ đề mới
- ✅ **Hỗ trợ vô hạn bộ đề** (giới hạn 20, có thể tăng)

---

## 📂 Cấu Trúc Thư Mục

```
cloud-architect/
├── Question Set 1/
│   ├── question1.js
│   ├── question2.js
│   └── ... (question10.js)
├── Question Set 2/
│   └── ... (10 files)
├── Question Set 3/
│   └── ... (10 files)
├── Question Set 4/  ← BỘ ĐỀ MỚI
│   └── ... (10 files)
├── auto-load-questions.js  ← HỆ THỐNG AUTO
├── convert-new-set.ps1     ← SCRIPT CHUYỂN ĐỔI
├── index.html
├── quiz.html
└── quiz.js
```

---

## 🎯 Cách Thêm Bộ Đề Mới

### Bước 1: Tạo Thư Mục Mới

Tạo thư mục với tên: `Question Set X` (X là số thứ tự)

```
mkdir "Question Set 5"
```

### Bước 2: Thêm File Câu Hỏi

Tạo các file `question1.js`, `question2.js`, ..., `question10.js`

**Định dạng file:**

```javascript
// Question 1 - Set 5
const question1 = {
    question: "Câu hỏi của bạn ở đây?",
    answers: [
        "Đáp án A",
        "Đáp án B",
        "Đáp án C",
        "Đáp án D"
    ],
    correctAnswer: 2,  // Index của đáp án đúng (0-3)
    explanation: {
        correct: "Giải thích cho đáp án đúng",
        incorrectReasons: [
            "Lý do A sai",
            "Lý do B sai",
            null,  // C là đáp án đúng
            "Lý do D sai"
        ]
    }
};
```

### Bước 3: Chạy Script Chuyển Đổi

Mở PowerShell tại thư mục dự án và chạy:

```powershell
# Chuyển đổi TẤT CẢ bộ đề (tự động phát hiện)
.\convert-new-set.ps1

# HOẶC chuyển đổi bộ đề cụ thể
.\convert-new-set.ps1 -SetNumber 5
```

### Bước 4: Refresh Trình Duyệt

Mở hoặc refresh trang `index.html` - Bộ đề mới sẽ tự động xuất hiện!

---

## 🔧 Các File Quan Trọng

### 1. `auto-load-questions.js`

**Chức năng:** Tự động phát hiện và load tất cả bộ đề

**Hoạt động:**
- Quét từ `Question Set 1` đến `Question Set 20`
- Thử load từng file question trong mỗi set
- Tạo namespace `window.questionSetX` cho mỗi bộ đề
- Trigger event `questionsLoaded` khi hoàn tất

**Cấu hình:**

```javascript
const CONFIG = {
    maxSets: 20,           // Số lượng set tối đa
    questionsPerSet: 10,   // Số câu hỏi mỗi set
    setFolderPrefix: 'Question Set ',
    debug: true            // Bật log debug
};
```

### 2. `convert-new-set.ps1`

**Chức năng:** Chuyển đổi format câu hỏi sang namespace pattern

**Chuyển đổi từ:**
```javascript
const question1 = { ... };
```

**Sang:**
```javascript
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = { ... };
```

### 3. `index.html`

**Tự động render:** Không cần sửa khi thêm bộ đề mới!

**Cách hoạt động:**
```javascript
document.addEventListener('questionsLoaded', function(e) {
    // Tự động tạo card cho mỗi bộ đề
    sets.forEach(setInfo => {
        // Render card...
    });
});
```

### 4. `quiz.html`

**Tự động load:** Không cần khai báo từng file script!

```html
<script src="auto-load-questions.js"></script>
<script src="quiz.js"></script>
<script>
    document.addEventListener('questionsLoaded', initQuiz);
    autoLoadAllQuestions();
</script>
```

---

## 🛠️ Troubleshooting

### Lỗi: Bộ đề không hiển thị

**Kiểm tra:**
1. ✅ Tên thư mục đúng format: `Question Set X`
2. ✅ Các file có tên: `question1.js`, `question2.js`, ...
3. ✅ Đã chạy script `convert-new-set.ps1`
4. ✅ Refresh browser (Ctrl + F5)

### Lỗi: Console báo "Failed to load"

**Nguyên nhân:** File question chưa đúng format namespace

**Giải pháp:**
```powershell
.\convert-new-set.ps1 -SetNumber X
```

### Kiểm tra trong Browser Console

Mở Console (F12) và xem log:

```
🔍 Starting auto-discovery of question sets...
✅ Set 1: Loaded 10 questions
✅ Set 2: Loaded 10 questions
✅ Set 3: Loaded 10 questions
✅ Set 4: Loaded 10 questions
✅ Auto-discovery complete! Found 4 question sets
```

---

## 📊 Giới Hạn & Mở Rộng

### Giới hạn hiện tại:
- ✅ Tối đa 20 bộ đề (có thể tăng)
- ✅ Mỗi bộ đề: 10 câu hỏi (linh hoạt)

### Cách tăng giới hạn:

**Trong `auto-load-questions.js`:**
```javascript
const CONFIG = {
    maxSets: 50,  // Tăng lên 50 bộ đề
    questionsPerSet: 15,  // Tăng lên 15 câu/bộ
    ...
};
```

---

## 💡 Tips & Best Practices

### 1. Đặt tên file đúng chuẩn
```
✅ question1.js, question2.js, ..., question10.js
❌ Question1.js, ques1.js, q1.js
```

### 2. Luôn chạy script convert sau khi tạo bộ đề mới
```powershell
.\convert-new-set.ps1
```

### 3. Kiểm tra console log
- Mở F12 → Console
- Xem các message `✅ Loaded`

### 4. Backup trước khi convert
Script an toàn nhưng nên backup:
```powershell
Copy-Item "Question Set X" "Question Set X - Backup" -Recurse
```

---

## 🎓 Workflow Hoàn Chỉnh

```
1. Tạo thư mục "Question Set 5"
   ↓
2. Thêm 10 file question*.js
   ↓
3. Chạy: .\convert-new-set.ps1
   ↓
4. Refresh browser
   ↓
5. ✅ Bộ đề 5 tự động xuất hiện!
```

---

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. Browser Console (F12)
2. PowerShell output khi chạy script
3. File structure có đúng không

---

**Tác giả:** Auto-generated system  
**Version:** 1.0  
**Cập nhật:** 2026-06-15
