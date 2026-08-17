import type { LessonContent } from '../types'

const lektion5: LessonContent = {
  meta: {
    id: 5,
    titleDe: 'Mein Tag',
    titleVi: 'Một ngày của mình',
    icon: '⏰',
    badgeName: 'Ông chủ thời gian',
    badgeIcon: '⌛',
    color: '#9B8CFF',
  },
  intro: 'Một ngày của bé có gì vui? Cùng Cinnamoroll kể lại bằng tiếng Đức nhé!',

  learn: [
    {
      kind: 'vocab',
      title: 'Hoạt động hàng ngày',
      items: [
        { de: 'aufstehen', vi: 'thức dậy', emoji: '🌅', example: 'Ich stehe um 7 Uhr auf.', exampleVi: 'Mình dậy lúc 7 giờ.' },
        { de: 'frühstücken', vi: 'ăn sáng', emoji: '🥐', example: 'Ich frühstücke um halb acht.', exampleVi: 'Mình ăn sáng lúc 7 rưỡi.' },
        { de: 'in die Schule gehen', vi: 'đi học', emoji: '🎒', example: 'Ich gehe um acht Uhr in die Schule.', exampleVi: 'Mình đi học lúc 8 giờ.' },
        { de: 'lernen', vi: 'học bài', emoji: '📚' },
        { de: 'Mittag essen', vi: 'ăn trưa', emoji: '🍲' },
        { de: 'Hausaufgaben machen', vi: 'làm bài tập về nhà', emoji: '✏️' },
        { de: 'spielen', vi: 'chơi', emoji: '🎲' },
        { de: 'fernsehen', vi: 'xem tivi', emoji: '📺' },
        { de: 'duschen', vi: 'tắm', emoji: '🚿' },
        { de: 'zu Abend essen', vi: 'ăn tối', emoji: '🍽️' },
        { de: 'schlafen gehen', vi: 'đi ngủ', emoji: '🛌' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Nói giờ',
      hint: 'Người Đức hay nói "halb acht" = 7 rưỡi (nửa đường tới 8) đó!',
      items: [
        { de: 'Wie spät ist es?', vi: 'Mấy giờ rồi?', emoji: '🕐' },
        { de: 'Es ist acht Uhr.', vi: 'Bây giờ là 8 giờ.', emoji: '🕗' },
        { de: 'Es ist halb neun.', vi: 'Bây giờ là 8 rưỡi.', emoji: '🕣' },
        { de: 'Es ist Viertel nach acht.', vi: 'Bây giờ là 8 giờ 15.', emoji: '🕗' },
        { de: 'Es ist Viertel vor neun.', vi: 'Bây giờ là 8 giờ 45.', emoji: '🕘' },
        { de: 'um sieben Uhr', vi: 'lúc 7 giờ', emoji: '⏰' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Buổi trong ngày',
      items: [
        { de: 'am Morgen', vi: 'buổi sáng', emoji: '🌅' },
        { de: 'am Vormittag', vi: 'buổi sáng muộn', emoji: '🌤️' },
        { de: 'am Mittag', vi: 'buổi trưa', emoji: '☀️' },
        { de: 'am Nachmittag', vi: 'buổi chiều', emoji: '🌇' },
        { de: 'am Abend', vi: 'buổi tối', emoji: '🌆' },
        { de: 'in der Nacht', vi: 'ban đêm', emoji: '🌙' },
      ],
    },
    {
      kind: 'grammar',
      title: 'Động từ tách được',
      note: 'Vài động từ bị "tách đôi": phần đầu bay ra cuối câu. Vui chưa!',
      rows: [
        { de: 'aufstehen → Ich stehe um 7 Uhr auf.', vi: 'thức dậy → Mình dậy lúc 7 giờ.' },
        { de: 'fernsehen → Ich sehe am Abend fern.', vi: 'xem tivi → Buổi tối mình xem tivi.' },
        { de: 'einkaufen → Wir kaufen am Samstag ein.', vi: 'đi chợ → Thứ Bảy chúng mình đi chợ.' },
        { de: 'Ich gehe um neun Uhr schlafen.', vi: 'Mình đi ngủ lúc 9 giờ.' },
      ],
    },
  ],

  practice: [
    {
      id: 'l5-d1',
      title: 'Buổi sáng của bé',
      scene: 'Cinnamoroll gọi bé dậy đi học',
      emoji: '🌅',
      lines: [
        { speaker: 'mascot', de: 'Guten Morgen! Wann stehst du auf?', vi: 'Chào buổi sáng! Bạn dậy lúc mấy giờ?' },
        {
          speaker: 'user',
          de: 'Ich stehe um sieben Uhr auf.',
          vi: 'Mình dậy lúc 7 giờ.',
          options: ['Ich stehe um sieben Uhr auf.', 'Ich bin sieben Uhr.', 'Ich heiße sieben.'],
        },
        { speaker: 'mascot', de: 'Und was machst du dann?', vi: 'Rồi bạn làm gì tiếp?' },
        {
          speaker: 'user',
          de: 'Dann frühstücke ich.',
          vi: 'Sau đó mình ăn sáng.',
          options: ['Dann frühstücke ich.', 'Dann schlafe ich in die Schule.', 'Dann kostet es drei Euro.'],
        },
        { speaker: 'mascot', de: 'Wann gehst du in die Schule?', vi: 'Bạn đi học lúc mấy giờ?' },
        {
          speaker: 'user',
          de: 'Um halb acht gehe ich in die Schule.',
          vi: 'Mình đi học lúc 7 rưỡi.',
          options: [
            'Um halb acht gehe ich in die Schule.',
            'Ich gehe in die Küche schlafen.',
            'Die Schule ist mein Vater.',
          ],
        },
      ],
    },
    {
      id: 'l5-d2',
      title: 'Buổi chiều và buổi tối',
      scene: 'Hai bạn kể chuyện sau giờ học',
      emoji: '🌇',
      lines: [
        { speaker: 'mascot', de: 'Was machst du am Nachmittag?', vi: 'Buổi chiều bạn làm gì?' },
        {
          speaker: 'user',
          de: 'Ich mache Hausaufgaben.',
          vi: 'Mình làm bài tập về nhà.',
          options: ['Ich mache Hausaufgaben.', 'Ich esse Hausaufgaben.', 'Ich bin Hausaufgaben.'],
        },
        { speaker: 'mascot', de: 'Und danach?', vi: 'Rồi sau đó thì sao?' },
        {
          speaker: 'user',
          de: 'Danach spiele ich mit Freunden.',
          vi: 'Sau đó mình chơi với các bạn.',
          options: ['Danach spiele ich mit Freunden.', 'Danach koste ich zwei Euro.', 'Danach bin ich eine Lampe.'],
        },
        { speaker: 'mascot', de: 'Wann gehst du schlafen?', vi: 'Bạn đi ngủ lúc mấy giờ?' },
        {
          speaker: 'user',
          de: 'Ich gehe um neun Uhr schlafen.',
          vi: 'Mình đi ngủ lúc 9 giờ.',
          options: ['Ich gehe um neun Uhr schlafen.', 'Ich stehe um neun Uhr schlafen.', 'Neun Uhr geht mich schlafen.'],
        },
      ],
    },
  ],

  test: [
    {
      kind: 'order',
      id: 'l5-o1',
      question: 'Sắp xếp hoạt động theo đúng thứ tự trong ngày ☀️→🌙',
      answer: ['aufstehen 🌅', 'frühstücken 🥐', 'in die Schule gehen 🎒', 'Hausaufgaben machen ✏️', 'schlafen gehen 🛌'],
      vi: 'Thức dậy → ăn sáng → đi học → làm bài tập → đi ngủ',
    },
    {
      kind: 'quiz',
      id: 'l5-q1',
      question: '"Es ist halb neun" là mấy giờ?',
      options: ['9 giờ 30', '8 giờ 30', '9 giờ 15'],
      correct: 1,
      explain: '"halb neun" = nửa đường đến 9 giờ = 8 giờ 30.',
    },
    {
      kind: 'quiz',
      id: 'l5-q2',
      question: '"Ich stehe um 7 Uhr auf." nghĩa là gì?',
      options: ['Mình ngủ lúc 7 giờ.', 'Mình dậy lúc 7 giờ.', 'Mình ăn lúc 7 giờ.'],
      correct: 1,
    },
    {
      kind: 'fill',
      id: 'l5-f1',
      question: 'Điền phần bị tách của động từ',
      sentence: 'Ich stehe um sechs Uhr ___.',
      vi: 'Mình dậy lúc 6 giờ.',
      options: ['auf', 'ein', 'an'],
      correct: 0,
    },
    {
      kind: 'fill',
      id: 'l5-f2',
      question: 'Điền từ còn thiếu',
      sentence: 'Am Abend ___ ich fern.',
      vi: 'Buổi tối mình xem tivi.',
      options: ['sehe', 'gehe', 'esse'],
      correct: 0,
    },
    {
      kind: 'order',
      id: 'l5-o2',
      question: 'Sắp xếp thành câu đúng',
      answer: ['Ich', 'gehe', 'um', 'acht', 'Uhr', 'in die Schule'],
      vi: 'Mình đi học lúc 8 giờ.',
    },
    {
      kind: 'match',
      id: 'l5-m1',
      question: 'Ghép hoạt động với hình',
      pairs: [
        { emoji: '🚿', de: 'duschen' },
        { emoji: '📺', de: 'fernsehen' },
        { emoji: '📚', de: 'lernen' },
        { emoji: '🛌', de: 'schlafen gehen' },
      ],
    },
  ],
}

export default lektion5
