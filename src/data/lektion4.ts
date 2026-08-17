import type { LessonContent } from '../types'

const lektion4: LessonContent = {
  meta: {
    id: 4,
    titleDe: 'Meine Wohnung',
    titleVi: 'Ngôi nhà của mình',
    icon: '🏠',
    badgeName: 'Kiến trúc sư tí hon',
    badgeIcon: '🏡',
    color: '#FFB44D',
  },
  intro: 'Cinnamoroll mời bé tới thăm nhà mây của bạn ấy! Cùng học tên các phòng nhé.',

  learn: [
    {
      kind: 'vocab',
      title: 'Các phòng trong nhà',
      items: [
        { de: 'die Wohnung', vi: 'căn hộ', emoji: '🏢' },
        { de: 'das Haus', vi: 'ngôi nhà', emoji: '🏠' },
        { de: 'das Zimmer', vi: 'căn phòng', emoji: '🚪' },
        { de: 'das Wohnzimmer', vi: 'phòng khách', emoji: '🛋️' },
        { de: 'das Schlafzimmer', vi: 'phòng ngủ', emoji: '🛏️' },
        { de: 'das Kinderzimmer', vi: 'phòng của bé', emoji: '🧸' },
        { de: 'die Küche', vi: 'nhà bếp', emoji: '🍳' },
        { de: 'das Bad', vi: 'phòng tắm', emoji: '🛁' },
        { de: 'der Balkon', vi: 'ban công', emoji: '🌇' },
        { de: 'der Garten', vi: 'khu vườn', emoji: '🌳' },
        { de: 'der Flur', vi: 'hành lang', emoji: '🚶' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Đồ đạc trong nhà',
      items: [
        { de: 'der Tisch', vi: 'cái bàn', emoji: '🪑' },
        { de: 'der Stuhl', vi: 'cái ghế', emoji: '💺' },
        { de: 'das Bett', vi: 'cái giường', emoji: '🛏️' },
        { de: 'der Schrank', vi: 'cái tủ', emoji: '🗄️' },
        { de: 'das Sofa', vi: 'ghế sô-pha', emoji: '🛋️' },
        { de: 'die Lampe', vi: 'cái đèn', emoji: '💡' },
        { de: 'das Fenster', vi: 'cửa sổ', emoji: '🪟' },
        { de: 'die Tür', vi: 'cái cửa', emoji: '🚪' },
        { de: 'der Teppich', vi: 'tấm thảm', emoji: '🧶' },
        { de: 'der Spiegel', vi: 'cái gương', emoji: '🪞' },
        { de: 'die Uhr', vi: 'đồng hồ', emoji: '⏰' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Tính từ miêu tả',
      items: [
        { de: 'groß', vi: 'to, rộng', emoji: '🐘' },
        { de: 'klein', vi: 'nhỏ', emoji: '🐭' },
        { de: 'schön', vi: 'đẹp', emoji: '✨' },
        { de: 'hell', vi: 'sáng sủa', emoji: '☀️' },
        { de: 'dunkel', vi: 'tối', emoji: '🌑' },
        { de: 'neu', vi: 'mới', emoji: '🆕' },
        { de: 'alt', vi: 'cũ', emoji: '📻' },
        { de: 'gemütlich', vi: 'ấm cúng', emoji: '🕯️' },
        { de: 'modern', vi: 'hiện đại', emoji: '🏙️' },
      ],
    },
    {
      kind: 'grammar',
      title: 'Miêu tả nhà mình',
      note: 'Dùng "Das Zimmer ist …" để tả, "Es gibt …" để nói trong nhà có gì.',
      rows: [
        { de: 'Das Zimmer ist groß.', vi: 'Căn phòng thì rộng.' },
        { de: 'Die Küche ist klein, aber schön.', vi: 'Bếp nhỏ nhưng đẹp.' },
        { de: 'Es gibt ein Sofa im Wohnzimmer.', vi: 'Trong phòng khách có một ghế sô-pha.' },
        { de: 'Meine Wohnung hat drei Zimmer.', vi: 'Căn hộ của mình có 3 phòng.' },
        { de: 'Das Bett ist im Schlafzimmer.', vi: 'Cái giường ở trong phòng ngủ.' },
      ],
    },
  ],

  practice: [
    {
      id: 'l4-d1',
      title: 'Thăm nhà mây của Cinnamoroll',
      scene: 'Cinnamoroll dẫn bé đi từng phòng',
      emoji: '☁️',
      lines: [
        { speaker: 'mascot', de: 'Willkommen! Das ist meine Wohnung.', vi: 'Chào mừng bạn! Đây là căn hộ của mình.' },
        {
          speaker: 'user',
          de: 'Wow, deine Wohnung ist schön!',
          vi: 'Ồ, nhà bạn đẹp quá!',
          options: ['Wow, deine Wohnung ist schön!', 'Wow, deine Wohnung ist neun!', 'Wow, ich heiße Wohnung!'],
        },
        { speaker: 'mascot', de: 'Danke! Hier ist die Küche. Wie viele Zimmer hast du?', vi: 'Cảm ơn! Đây là bếp. Nhà bạn có mấy phòng?' },
        {
          speaker: 'user',
          de: 'Meine Wohnung hat drei Zimmer.',
          vi: 'Nhà mình có 3 phòng.',
          options: ['Meine Wohnung hat drei Zimmer.', 'Meine Wohnung ist drei Jahre.', 'Ich möchte drei Zimmer, bitte.'],
        },
        { speaker: 'mascot', de: 'Wie ist dein Kinderzimmer?', vi: 'Phòng của bạn thế nào?' },
        {
          speaker: 'user',
          de: 'Mein Zimmer ist klein, aber gemütlich.',
          vi: 'Phòng mình nhỏ nhưng ấm cúng.',
          options: [
            'Mein Zimmer ist klein, aber gemütlich.',
            'Mein Zimmer ist eine Banane.',
            'Mein Zimmer kostet zwei Euro.',
          ],
        },
      ],
    },
    {
      id: 'l4-d2',
      title: 'Trong phòng có gì?',
      scene: 'Cinnamoroll tò mò về phòng của bé',
      emoji: '🧸',
      lines: [
        { speaker: 'mascot', de: 'Was gibt es in deinem Zimmer?', vi: 'Trong phòng bạn có gì?' },
        {
          speaker: 'user',
          de: 'Es gibt ein Bett und einen Schrank.',
          vi: 'Có một cái giường và một cái tủ.',
          options: [
            'Es gibt ein Bett und einen Schrank.',
            'Es gibt eine Mutter und einen Käse.',
            'Es kostet ein Bett.',
          ],
        },
        { speaker: 'mascot', de: 'Hast du auch einen Tisch?', vi: 'Bạn có bàn học không?' },
        {
          speaker: 'user',
          de: 'Ja, ich habe einen Tisch und eine Lampe.',
          vi: 'Có, mình có một cái bàn và một cái đèn.',
          options: [
            'Ja, ich habe einen Tisch und eine Lampe.',
            'Ja, ich habe einen Tisch und eine Oma.',
            'Nein, mein Tisch ist neun Jahre alt.',
          ],
        },
        { speaker: 'mascot', de: 'Ist dein Zimmer hell?', vi: 'Phòng bạn có sáng không?' },
        {
          speaker: 'user',
          de: 'Ja, es gibt ein großes Fenster.',
          vi: 'Có, phòng mình có một cửa sổ to.',
          options: ['Ja, es gibt ein großes Fenster.', 'Ja, mein Fenster isst Brot.', 'Nein, das Fenster ist meine Schwester.'],
        },
      ],
    },
  ],

  test: [
    {
      kind: 'match',
      id: 'l4-m1',
      question: 'Ghép hình với tên phòng/đồ vật',
      pairs: [
        { emoji: '🛁', de: 'das Bad' },
        { emoji: '🍳', de: 'die Küche' },
        { emoji: '🛏️', de: 'das Bett' },
        { emoji: '💡', de: 'die Lampe' },
        { emoji: '🚪', de: 'die Tür' },
      ],
    },
    {
      kind: 'quiz',
      id: 'l4-q1',
      question: '"Das Zimmer ist hell." nghĩa là gì?',
      options: ['Căn phòng thì tối.', 'Căn phòng thì sáng.', 'Căn phòng thì cũ.'],
      correct: 1,
    },
    {
      kind: 'quiz',
      id: 'l4-q2',
      question: 'Mình nấu ăn ở phòng nào?',
      options: ['im Schlafzimmer', 'in der Küche', 'im Bad'],
      correct: 1,
    },
    {
      kind: 'quiz',
      id: 'l4-q3',
      question: 'Từ trái nghĩa của "groß" là:',
      options: ['klein', 'schön', 'neu'],
      correct: 0,
    },
    {
      kind: 'fill',
      id: 'l4-f1',
      question: 'Điền từ còn thiếu',
      sentence: 'Es ___ ein Sofa im Wohnzimmer.',
      vi: 'Trong phòng khách có một ghế sô-pha.',
      options: ['gibt', 'ist', 'hat'],
      correct: 0,
    },
    {
      kind: 'order',
      id: 'l4-o1',
      question: 'Sắp xếp thành câu đúng',
      answer: ['Meine', 'Wohnung', 'ist', 'sehr', 'gemütlich'],
      vi: 'Căn hộ của mình rất ấm cúng.',
    },
    {
      kind: 'pick',
      id: 'l4-p1',
      question: 'Chọn TẤT CẢ đồ vật có trong phòng ngủ 🛏️',
      options: [
        { label: 'das Bett 🛏️', correct: true },
        { label: 'der Schrank 🗄️', correct: true },
        { label: 'der Apfel 🍎', correct: false },
        { label: 'die Lampe 💡', correct: true },
        { label: 'die Banane 🍌', correct: false },
      ],
    },
  ],
}

export default lektion4
