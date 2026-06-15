# 📚 AWS Certification Quiz - Auto-Discovery System

Hệ thống quiz trắc nghiệm AWS với khả năng **tự động phát hiện và load bộ đề mới** mà không cần sửa code HTML.

---

## ✨ Tính Năng Chính

- ✅ **Tự động phát hiện** bộ đề mới (1-20)
- ✅ **Không cần sửa HTML** khi thêm bộ đề
- ✅ **Tự động cập nhật UI** trên trang chủ
- ✅ **Namespace pattern** - không xung đột biến
- ✅ **Scripts tiện ích** để tạo/convert bộ đề
- ✅ **Responsive** - hoạt động trên mọi thiết bị

---

## 🚀 Bắt Đầu Nhanh

### 1. Chạy Server

```powershell
python -m http.server 8000
```

### 2. Mở Browser

```
http://localhost:8000
```

### 3. Thêm Bộ Đề Mới

```powershell
# Tạo bộ đề 6 với 10 file mẫu
.\create-sample-set.ps1 -SetNumber 6

# Edit nội dung → Refresh browser → XONG!
```

**➡️ Xem chi tiết: [QUICK-START.md](QUICK-START.md)**

---

## 📂 Cấu Trúc Project

```
cloud-architect/
├── 📁 Question Set 1/          # Bộ đề 1 (10 câu)
├── 📁 Question Set 2/          # Bộ đề 2 (10 câu)
├── 📁 Question Set 3/          # Bộ đề 3 (10 câu)
├── 📁 Question Set 4/          # Bộ đề 4 (10 câu)
├── 📁 Question Set 5/          # Bộ đề 5 (10 câu) - Mẫu
│
├── 🔧 Scripts
│   ├── create-sample-set.ps1   # Tạo bộ đề mới
│   ├── convert-new-set.ps1     # Convert format cũ
│   └── convert-questions.ps1   # Legacy script
│
├── 🎨 UI Files
│   ├── index.html              # Trang chủ (auto-render)
│   ├── quiz.html               # Trang làm bài (auto-load)
│   ├── styles.css              # CSS styling
│   └── script.js               # Homepage logic
│
├── ⚙️ Core System
│   ├── auto-load-questions.js  # Auto-discovery engine
│   ├── load-questions.js       # Legacy loader
│   └── quiz.js                 # Quiz logic
│
└── 📖 Documentation
    ├── README.md               # File này
    ├── QUICK-START.md          # Hướng dẫn nhanh
    ├── SCRIPTS-GUIDE.md        # Hướng dẫn scripts
    └── README-AUTO-SYSTEM.md   # Chi tiết hệ thống
```

---

## 🎯 Hướng Dẫn Theo Use Case

### 🆕 Tôi muốn thêm bộ đề mới

```powershell
# Tạo bộ đề với file mẫu
.\create-sample-set.ps1 -SetNumber 6

# Edit file trong "Question Set 6"
# Refresh browser
```

**➡️ Đọc: [QUICK-START.md](QUICK-START.md)**

---

### 🔄 Tôi có file câu hỏi với format cũ

```powershell
# Copy file vào thư mục
Copy-Item "source/*.js" "Question Set 7/"

# Convert sang namespace
.\convert-new-set.ps1 -SetNumber 7

# Refresh browser
```

**➡️ Đọc: [SCRIPTS-GUIDE.md](SCRIPTS-GUIDE.md)**

---

### 🔍 Tôi muốn hiểu hệ thống hoạt động như thế nào

**➡️ Đọc: [README-AUTO-SYSTEM.md](README-AUTO-SYSTEM.md)**

---

### 🛠️ Tôi muốn tùy chỉnh hệ thống

File cấu hình: `auto-load-questions.js`

```javascript
const CONFIG = {
    maxSets: 20,           // Tăng số bộ đề tối đa
    questionsPerSet: 10,   // Số câu mỗi bộ
    debug: true            // Bật/tắt log
};
```

**➡️ Đọc: [README-AUTO-SYSTEM.md](README-AUTO-SYSTEM.md)**

---

## 🎓 Format Câu Hỏi

### Template Chuẩn

```javascript
// Question X - Set Y
window.questionSetY = window.questionSetY || {};
window.questionSetY[X] = {
    question: "Câu hỏi của bạn?",
    answers: [
        "Đáp án A",
        "Đáp án B",
        "Đáp án C (ĐÚNG)",
        "Đáp án D"
    ],
    correctAnswer: 2,  // 0=A, 1=B, 2=C, 3=D
    explanation: {
        correct: "Giải thích tại sao C đúng...",
        incorrectReasons: [
            "Lý do A sai...",
            "Lý do B sai...",
            null,  // C đúng → null
            "Lý do D sai..."
        ]
    }
};
```

---

## 📜 Scripts Có Sẵn

| Script | Mô tả | Command |
|--------|-------|---------|
| `create-sample-set.ps1` | Tạo bộ đề mới | `.\create-sample-set.ps1 -SetNumber 6` |
| `convert-new-set.ps1` | Convert format | `.\convert-new-set.ps1 -SetNumber 6` |
| `convert-new-set.ps1` | Convert ALL | `.\convert-new-set.ps1` |

**➡️ Chi tiết: [SCRIPTS-GUIDE.md](SCRIPTS-GUIDE.md)**

---

## 🔍 Debug & Troubleshooting

### Kiểm tra trong Browser Console (F12)

```javascript
// Xem các bộ đề đã load
console.log(window.allQuestionSets);

// Xem metadata
console.log(window.questionSetsMetadata);
```

### Kiểm tra File Format

```powershell
# Xem 3 dòng đầu
Get-Content "Question Set 5\question1.js" | Select-Object -First 3
```

**Phải thấy:**
```javascript
// Question 1 - Set 5
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = {
```

---

## 🛑 Common Issues

### Bộ đề không hiển thị?

1. ✅ Kiểm tra tên thư mục: `Question Set X`
2. ✅ Kiểm tra file format: namespace pattern
3. ✅ Refresh browser: `Ctrl + F5`
4. ✅ Xem console log: `F12`

### File bị lỗi cú pháp?

```powershell
# Tạo lại với file mẫu
Remove-Item "Question Set X" -Recurse
.\create-sample-set.ps1 -SetNumber X
```

---

## 📊 Statistics

- **Bộ đề hiện tại:** 5 (Set 1-5)
- **Tổng câu hỏi:** 50 câu
- **Scripts:** 2 utilities
- **Documentation:** 4 files

---

## 🎯 Roadmap

- [x] Auto-discovery system
- [x] Namespace pattern
- [x] Create sample script
- [x] Convert script
- [x] Documentation
- [ ] Question database export/import
- [ ] Progress tracking
- [ ] Score history
- [ ] Timer per question

---

## 🤝 Contributing

### Thêm câu hỏi mới

1. Fork hoặc clone repo
2. Chạy `.\create-sample-set.ps1 -SetNumber X`
3. Edit các file câu hỏi
4. Test trong browser
5. Commit và push

### Report bugs

Mở Browser Console (F12) và chụp lại error message.

---

## 📝 License

MIT License - Free to use for education and practice.

---

## 📞 Quick Links

- 📖 [QUICK-START.md](QUICK-START.md) - Bắt đầu nhanh
- 🛠️ [SCRIPTS-GUIDE.md](SCRIPTS-GUIDE.md) - Hướng dẫn scripts
- 📚 [README-AUTO-SYSTEM.md](README-AUTO-SYSTEM.md) - Chi tiết hệ thống

---

**Version:** 2.0 (Auto-Discovery System)  
**Last Updated:** June 15, 2026  
**Author:** Auto-generated with AI assistance
