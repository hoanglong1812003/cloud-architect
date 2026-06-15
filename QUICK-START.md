# ⚡ HƯỚNG DẪN NHANH - THÊM BỘ ĐỀ MỚI

## 🚀 Cách Nhanh Nhất: Dùng Script Tự Động

### Tạo Bộ Đề Mẫu (Khuyến Nghị)

```powershell
# Tạo bộ đề 5 với 10 file mẫu
.\create-sample-set.ps1 -SetNumber 5
```

**Script sẽ tự động:**
- ✅ Tạo thư mục "Question Set 5"
- ✅ Tạo 10 file question với format đúng
- ✅ Sử dụng namespace pattern (không cần convert)

**Sau đó:** Chỉnh sửa nội dung câu hỏi → Refresh browser → XONG!

---

## 📝 Cách Thủ Công (Nếu Bạn Muốn)

### ✅ Bước 1: Tạo Thư Mục
```
Tạo thư mục: "Question Set 5"
```

### ✅ Bước 2: Thêm File Câu Hỏi

Tạo 10 file: `question1.js`, `question2.js`, ..., `question10.js`

**Template (QUAN TRỌNG - Dùng namespace ngay từ đầu):**

```javascript
// Question 1 - Set 5
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = {
    question: "Câu hỏi của bạn?",
    answers: [
        "Đáp án A",
        "Đáp án B", 
        "Đáp án C",
        "Đáp án D"
    ],
    correctAnswer: 2,  // 0=A, 1=B, 2=C, 3=D
    explanation: {
        correct: "Giải thích tại sao đáp án này đúng",
        incorrectReasons: [
            "Lý do A sai",
            "Lý do B sai",
            null,  // C đúng nên để null
            "Lý do D sai"
        ]
    }
};
```

### ✅ Bước 3: Refresh Browser

**XONG! Không cần chạy script convert!** 🎉

---

## 🔧 Nếu File Dùng Format Cũ (const questionX)

Nếu bạn có file dạng:
```javascript
const question1 = { ... };
```

Chạy script convert:
```powershell
.\convert-new-set.ps1 -SetNumber 5
```

---

## 🔍 Kiểm Tra

Mở browser → F12 → Console:

```
✅ Set 1: Loaded 10 questions
✅ Set 2: Loaded 10 questions
✅ Set 3: Loaded 10 questions
✅ Set 4: Loaded 10 questions
✅ Set 5: Loaded 10 questions  ← BỘ ĐỀ MỚI!
```

---

## 📊 So Sánh 2 Phương Pháp

| Phương Pháp | Bước | Script | Ưu Điểm |
|-------------|------|--------|---------|
| **Tự động** | 1 | `create-sample-set.ps1` | Nhanh, không lỗi |
| **Thủ công** | 2-3 | Không cần hoặc `convert-new-set.ps1` | Tùy chỉnh hoàn toàn |

---

## ⚠️ Checklist Quan Trọng

- [ ] Tên thư mục: `Question Set X` (dấu cách, chữ hoa Q và S)
- [ ] Tên file: `question1.js` ... `question10.js` (chữ thường)
- [ ] Format: Dùng `window.questionSetX[n] = {...}` (namespace)
- [ ] Refresh browser: `Ctrl + F5`

---

## 🚨 Troubleshooting

### Bộ đề không hiển thị?

```powershell
# Kiểm tra xem file đã đúng format chưa
Get-Content "Question Set 5\question1.js" | Select-Object -First 3
```

**Phải thấy:**
```javascript
// Question 1 - Set 5
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = {
```

**Nếu thấy `const question1 =`** → Chạy:
```powershell
.\convert-new-set.ps1 -SetNumber 5
```

### File bị lỗi cú pháp?

Dùng script tự động để tạo file mẫu:
```powershell
.\create-sample-set.ps1 -SetNumber 5
```

---

## 📞 All Scripts

```powershell
# 1. TẠO bộ đề mới với file mẫu (KHUYẾN NGHỊ)
.\create-sample-set.ps1 -SetNumber 5

# 2. CONVERT file cũ sang namespace
.\convert-new-set.ps1 -SetNumber 5

# 3. CONVERT TẤT CẢ bộ đề
.\convert-new-set.ps1
```

---

## 🎯 Workflow Hoàn Hảo

```
1. Chạy: .\create-sample-set.ps1 -SetNumber 5
   ↓
2. Edit các file trong "Question Set 5"
   ↓
3. Refresh browser (Ctrl + F5)
   ↓
4. ✅ Bộ đề 5 tự động xuất hiện!
```

---

**Đọc thêm:** `README-AUTO-SYSTEM.md` để hiểu chi tiết!
