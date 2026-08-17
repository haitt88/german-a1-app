/** Lời khen & động viên của Cinnamoroll */

const CORRECT = [
  'Đúng rồi! Bé giỏi quá! 🌟',
  'Chính xác! Cinnamoroll vỗ tay nè 👏',
  'Tuyệt vời! Super! ✨',
  'Wow, bé nhớ nhanh ghê! 💙',
  'Richtig! Đúng luôn! 🎉',
  'Bé đúng là siêu sao tiếng Đức! ⭐',
]

const WRONG = [
  'Chưa đúng rồi, thử lại nha! 💪',
  'Gần đúng lắm! Mình cùng thử lần nữa nhé 🐾',
  'Không sao đâu, sai mới học được mà! 💙',
  'Cinnamoroll tin bé làm được! Thử lại nào ☁️',
  'Ôi tiếc quá! Lần sau chắc chắn đúng 🍀',
]

const FINISH = [
  'Bé học xong rồi! Giỏi quá đi mất! 🎊',
  'Hoan hô! Bé thật chăm chỉ! 🏅',
  'Cinnamoroll tự hào về bé lắm luôn! 💖',
]

function pick(list: string[]) {
  return list[Math.floor(Math.random() * list.length)]
}

export const praiseCorrect = () => pick(CORRECT)
export const praiseWrong = () => pick(WRONG)
export const praiseFinish = () => pick(FINISH)

export function scoreMessage(correct: number, total: number): string {
  const ratio = total === 0 ? 1 : correct / total
  if (ratio === 1) return 'Hoàn hảo! Không sai câu nào luôn! 🏆'
  if (ratio >= 0.8) return 'Xuất sắc! Bé nhớ bài rất tốt! 🌟'
  if (ratio >= 0.6) return 'Giỏi lắm! Ôn thêm chút nữa là siêu luôn 💪'
  return 'Cố lên nào! Mình học lại phần Học rồi thử lại nhé 🐾'
}
