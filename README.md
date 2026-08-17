# 🐶 Tiếng Đức A1 cùng Cinnamoroll

App học tiếng Đức cho bé 9 tuổi, bám theo giáo trình **Schritte plus Neu A1.1** (7 Lektion).

## Chạy app

```bash
npm install      # chỉ cần chạy lần đầu
npm run dev      # mở http://localhost:5173
```

Build bản chạy thật:

```bash
npm run build    # kết quả nằm trong thư mục dist/
npm run preview
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `src/data/lektion1..7.ts` | Toàn bộ nội dung 7 bài (từ vựng, hội thoại, bài kiểm tra) |
| `src/pages/HomePage.tsx` | Màn hình chính: tiến độ, huy hiệu, danh sách bài |
| `src/pages/LessonPage.tsx` | Một bài học với 3 phần Học – Luyện – Kiểm tra |
| `src/components/lesson/` | Thẻ từ vựng, trình chơi hội thoại, 6 dạng bài tập |
| `src/components/mascot/` | Nhân vật Cinnamoroll vẽ bằng SVG (6 biểu cảm) |
| `src/lib/audio.ts` | Âm thanh vui (Web Audio) + đọc tiếng Đức (Speech Synthesis) |
| `src/lib/storage.ts` | Lưu tiến độ trong localStorage |

## Mỗi bài có 3 phần

1. **Học** – thẻ từ vựng bấm là nghe, bảng chữ cái, ghi chú ngữ pháp
2. **Luyện** – hội thoại với Cinnamoroll, bé chọn câu trả lời đúng
3. **Kiểm tra** – 6 dạng bài: trắc nghiệm, điền từ, sắp xếp câu, đánh vần, ghép hình, chọn nhiều đáp án

Hoàn thành cả 3 phần → bé nhận **huy hiệu** của bài đó và mở khoá bài tiếp theo.

## Vài điều cần biết

- **Giọng đọc tiếng Đức** dùng Web Speech API của trình duyệt. Máy cần có sẵn giọng tiếng Đức
  (Windows: *Settings → Time & Language → Speech → Add voices → Deutsch*). Chrome/Edge chạy tốt nhất.
- **Tiến độ** lưu ngay trên máy (localStorage), không gửi đi đâu. Xoá tiến độ trong mục
  *⚙️ Góc bố mẹ* ở cuối màn hình chính.
- **Góc bố mẹ** cũng có tuỳ chọn *Mở khoá tất cả 7 bài* nếu muốn học không theo thứ tự.
- Không cần file âm thanh nào: tiếng đúng/sai được tạo bằng Web Audio API.
