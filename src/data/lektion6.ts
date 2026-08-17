import type { LessonContent } from '../types'

const lektion6: LessonContent = {
  meta: {
    id: 6,
    titleDe: 'Freizeit',
    titleVi: 'Sở thích & thời tiết',
    icon: '🎨',
    badgeName: 'Ngôi sao sở thích',
    badgeIcon: '🎈',
    color: '#4ECFD6',
  },
  intro: 'Bé thích làm gì nhất? Cinnamoroll thích bay trên mây và ăn bánh nè!',

  learn: [
    {
      kind: 'vocab',
      title: 'Sở thích',
      items: [
        { de: 'Fußball spielen', vi: 'chơi bóng đá', emoji: '⚽' },
        { de: 'schwimmen', vi: 'bơi', emoji: '🏊' },
        { de: 'lesen', vi: 'đọc sách', emoji: '📖' },
        { de: 'malen', vi: 'vẽ tranh', emoji: '🎨' },
        { de: 'singen', vi: 'hát', emoji: '🎤' },
        { de: 'tanzen', vi: 'nhảy múa', emoji: '💃' },
        { de: 'Fahrrad fahren', vi: 'đạp xe', emoji: '🚲' },
        { de: 'Musik hören', vi: 'nghe nhạc', emoji: '🎧' },
        { de: 'Klavier spielen', vi: 'chơi piano', emoji: '🎹' },
        { de: 'Freunde treffen', vi: 'gặp bạn bè', emoji: '👭' },
        { de: 'kochen', vi: 'nấu ăn', emoji: '👩‍🍳' },
        { de: 'reisen', vi: 'đi du lịch', emoji: '✈️' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Nói về sở thích',
      items: [
        { de: 'Ich mag Musik.', vi: 'Mình thích âm nhạc.', emoji: '🎵' },
        { de: 'Ich spiele gern Fußball.', vi: 'Mình thích chơi bóng đá.', emoji: '⚽' },
        { de: 'Ich lese sehr gern.', vi: 'Mình rất thích đọc sách.', emoji: '📚' },
        { de: 'Ich mag keinen Sport.', vi: 'Mình không thích thể thao.', emoji: '🙅' },
        { de: 'Was machst du gern?', vi: 'Bạn thích làm gì?', emoji: '❓' },
        { de: 'Mein Hobby ist Malen.', vi: 'Sở thích của mình là vẽ.', emoji: '🖌️' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Thời tiết',
      items: [
        { de: 'Wie ist das Wetter?', vi: 'Thời tiết thế nào?', emoji: '🌦️' },
        { de: 'Die Sonne scheint.', vi: 'Trời nắng.', emoji: '☀️' },
        { de: 'Es regnet.', vi: 'Trời mưa.', emoji: '🌧️' },
        { de: 'Es schneit.', vi: 'Trời có tuyết.', emoji: '❄️' },
        { de: 'Es ist warm.', vi: 'Trời ấm.', emoji: '🌤️' },
        { de: 'Es ist kalt.', vi: 'Trời lạnh.', emoji: '🥶' },
        { de: 'Es ist windig.', vi: 'Trời có gió.', emoji: '💨' },
        { de: 'Es ist bewölkt.', vi: 'Trời nhiều mây.', emoji: '☁️' },
      ],
    },
    {
      kind: 'grammar',
      title: '"gern" và "mögen"',
      note: 'Thêm "gern" sau động từ nghĩa là "thích làm việc đó".',
      rows: [
        { de: 'Ich spiele gern.', vi: 'Mình thích chơi.' },
        { de: 'Ich spiele nicht gern.', vi: 'Mình không thích chơi.' },
        { de: 'ich mag / du magst', vi: 'tôi thích / bạn thích' },
        { de: 'er, sie mag', vi: 'anh ấy, cô ấy thích' },
        { de: 'Ich mag Eis, aber ich mag keinen Kaffee.', vi: 'Mình thích kem, nhưng không thích cà phê.' },
      ],
    },
  ],

  practice: [
    {
      id: 'l6-d1',
      title: 'Bạn thích làm gì?',
      scene: 'Hai bạn ngồi trên đám mây tán gẫu',
      emoji: '☁️',
      lines: [
        { speaker: 'mascot', de: 'Was machst du gern in der Freizeit?', vi: 'Lúc rảnh bạn thích làm gì?' },
        {
          speaker: 'user',
          de: 'Ich male gern.',
          vi: 'Mình thích vẽ.',
          options: ['Ich male gern.', 'Ich bin gern eine Lampe.', 'Ich koste gern.'],
        },
        { speaker: 'mascot', de: 'Toll! Magst du auch Musik?', vi: 'Tuyệt! Bạn có thích âm nhạc không?' },
        {
          speaker: 'user',
          de: 'Ja, ich höre gern Musik.',
          vi: 'Có, mình thích nghe nhạc.',
          options: ['Ja, ich höre gern Musik.', 'Ja, ich esse gern Musik.', 'Nein, Musik ist mein Bruder.'],
        },
        { speaker: 'mascot', de: 'Spielst du ein Instrument?', vi: 'Bạn có chơi nhạc cụ không?' },
        {
          speaker: 'user',
          de: 'Ja, ich spiele Klavier.',
          vi: 'Có, mình chơi piano.',
          options: ['Ja, ich spiele Klavier.', 'Ja, ich wohne in Klavier.', 'Nein, ich bin neun Klavier.'],
        },
      ],
    },
    {
      id: 'l6-d2',
      title: 'Hôm nay trời thế nào?',
      scene: 'Cinnamoroll nhìn ra cửa sổ',
      emoji: '🌈',
      lines: [
        { speaker: 'mascot', de: 'Wie ist das Wetter heute?', vi: 'Hôm nay thời tiết thế nào?' },
        {
          speaker: 'user',
          de: 'Die Sonne scheint. Es ist warm.',
          vi: 'Trời nắng. Trời ấm.',
          options: ['Die Sonne scheint. Es ist warm.', 'Die Sonne isst Brot.', 'Es ist neun Uhr kalt.'],
        },
        { speaker: 'mascot', de: 'Super! Gehen wir schwimmen?', vi: 'Tuyệt! Mình đi bơi nhé?' },
        {
          speaker: 'user',
          de: 'Ja, gern! Ich schwimme sehr gern.',
          vi: 'Vâng, thích lắm! Mình rất thích bơi.',
          options: ['Ja, gern! Ich schwimme sehr gern.', 'Ja, ich schwimme eine Banane.', 'Nein, es regnet Klavier.'],
        },
        { speaker: 'mascot', de: 'Und wenn es regnet?', vi: 'Thế nếu trời mưa thì sao?' },
        {
          speaker: 'user',
          de: 'Dann lese ich zu Hause.',
          vi: 'Thì mình đọc sách ở nhà.',
          options: ['Dann lese ich zu Hause.', 'Dann regne ich zu Hause.', 'Dann bin ich ein Regen.'],
        },
      ],
    },
  ],

  test: [
    {
      kind: 'pick',
      id: 'l6-p1',
      question: 'Chọn TẤT CẢ các sở thích (Hobbys) 🎈',
      options: [
        { label: 'schwimmen 🏊', correct: true },
        { label: 'malen 🎨', correct: true },
        { label: 'die Küche 🍳', correct: false },
        { label: 'Fußball spielen ⚽', correct: true },
        { label: 'der Schrank 🗄️', correct: false },
        { label: 'Musik hören 🎧', correct: true },
      ],
    },
    {
      kind: 'quiz',
      id: 'l6-q1',
      question: '"Es regnet." nghĩa là gì?',
      options: ['Trời nắng.', 'Trời mưa.', 'Trời tuyết.'],
      correct: 1,
    },
    {
      kind: 'quiz',
      id: 'l6-q2',
      question: 'Chọn câu đúng: "Mình thích đọc sách."',
      options: ['Ich lese gern.', 'Ich gern lese.', 'Ich bin lese gern.'],
      correct: 0,
    },
    {
      kind: 'fill',
      id: 'l6-f1',
      question: 'Điền từ còn thiếu',
      sentence: 'Ich ___ Schokolade.',
      vi: 'Mình thích sô-cô-la.',
      options: ['mag', 'magst', 'mögen'],
      correct: 0,
    },
    {
      kind: 'match',
      id: 'l6-m1',
      question: 'Ghép thời tiết với hình',
      pairs: [
        { emoji: '☀️', de: 'Die Sonne scheint.' },
        { emoji: '❄️', de: 'Es schneit.' },
        { emoji: '💨', de: 'Es ist windig.' },
        { emoji: '🌧️', de: 'Es regnet.' },
      ],
    },
    {
      kind: 'order',
      id: 'l6-o1',
      question: 'Sắp xếp thành câu đúng',
      answer: ['Ich', 'spiele', 'gern', 'Fußball'],
      vi: 'Mình thích chơi bóng đá.',
    },
    {
      kind: 'quiz',
      id: 'l6-q3',
      question: 'Trời lạnh thì nói:',
      options: ['Es ist warm.', 'Es ist kalt.', 'Es ist schön.'],
      correct: 1,
    },
  ],
}

export default lektion6
