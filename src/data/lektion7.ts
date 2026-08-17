import type { LessonContent } from '../types'

const lektion7: LessonContent = {
  meta: {
    id: 7,
    titleDe: 'Lernen – ein Leben lang',
    titleVi: 'Học cả đời – können & wollen',
    icon: '🎓',
    badgeName: 'Nhà vô địch A1',
    badgeIcon: '🏆',
    color: '#FF7BA9',
  },
  intro: 'Bài cuối rồi! Bé sẽ nói được mình LÀM ĐƯỢC gì và MUỐN gì bằng tiếng Đức.',

  learn: [
    {
      kind: 'vocab',
      title: 'Học hành',
      items: [
        { de: 'die Schule', vi: 'trường học', emoji: '🏫' },
        { de: 'der Kurs', vi: 'khoá học', emoji: '📘' },
        { de: 'der Lehrer / die Lehrerin', vi: 'thầy giáo / cô giáo', emoji: '👩‍🏫' },
        { de: 'die Aufgabe', vi: 'bài tập', emoji: '📝' },
        { de: 'lernen', vi: 'học', emoji: '📚' },
        { de: 'üben', vi: 'luyện tập', emoji: '🔁' },
        { de: 'verstehen', vi: 'hiểu', emoji: '💡' },
        { de: 'wiederholen', vi: 'ôn lại', emoji: '♻️' },
      ],
    },
    {
      kind: 'vocab',
      title: 'können – làm được',
      items: [
        { de: 'Ich kann schwimmen.', vi: 'Mình biết bơi.', emoji: '🏊' },
        { de: 'Ich kann Deutsch sprechen.', vi: 'Mình nói được tiếng Đức.', emoji: '🗣️' },
        { de: 'Ich kann Fahrrad fahren.', vi: 'Mình biết đi xe đạp.', emoji: '🚲' },
        { de: 'Kannst du singen?', vi: 'Bạn hát được không?', emoji: '🎤' },
        { de: 'Ich kann noch nicht kochen.', vi: 'Mình chưa biết nấu ăn.', emoji: '🍳' },
      ],
    },
    {
      kind: 'vocab',
      title: 'wollen – muốn',
      items: [
        { de: 'Ich will Deutsch lernen.', vi: 'Mình muốn học tiếng Đức.', emoji: '📗' },
        { de: 'Ich will nach Deutschland reisen.', vi: 'Mình muốn đi Đức chơi.', emoji: '✈️' },
        { de: 'Willst du mitkommen?', vi: 'Bạn muốn đi cùng không?', emoji: '🤝' },
        { de: 'Ich will Ärztin werden.', vi: 'Mình muốn làm bác sĩ.', emoji: '👩‍⚕️' },
      ],
    },
    {
      kind: 'grammar',
      title: 'Chia können và wollen',
      note: 'Động từ chính bay xuống CUỐI câu và giữ nguyên: Ich kann gut singen.',
      rows: [
        { de: 'ich kann / du kannst', vi: 'tôi có thể / bạn có thể' },
        { de: 'er, sie kann / wir können', vi: 'anh ấy, cô ấy có thể / chúng tôi có thể' },
        { de: 'ich will / du willst', vi: 'tôi muốn / bạn muốn' },
        { de: 'er, sie will / wir wollen', vi: 'anh ấy, cô ấy muốn / chúng tôi muốn' },
        { de: 'Ich kann sehr gut malen.', vi: 'Mình vẽ rất giỏi.' },
      ],
    },
    {
      kind: 'grammar',
      title: 'Làm quen thì quá khứ (Perfekt)',
      note: 'Kể chuyện hôm qua: haben/sein + động từ dạng ge-…-t ở cuối câu.',
      rows: [
        { de: 'Ich habe Deutsch gelernt.', vi: 'Mình đã học tiếng Đức.' },
        { de: 'Ich habe Fußball gespielt.', vi: 'Mình đã chơi bóng đá.' },
        { de: 'Ich habe Pizza gegessen.', vi: 'Mình đã ăn pizza.' },
        { de: 'Ich bin in die Schule gegangen.', vi: 'Mình đã đi học.' },
        { de: 'Gestern war ich zu Hause.', vi: 'Hôm qua mình ở nhà.' },
      ],
    },
  ],

  practice: [
    {
      id: 'l7-d1',
      title: 'Bé làm được gì?',
      scene: 'Cinnamoroll tổ chức "cuộc thi tài năng"',
      emoji: '🎪',
      lines: [
        { speaker: 'mascot', de: 'Was kannst du gut?', vi: 'Bạn làm giỏi việc gì?' },
        {
          speaker: 'user',
          de: 'Ich kann gut malen.',
          vi: 'Mình vẽ giỏi.',
          options: ['Ich kann gut malen.', 'Ich kann gut ein Apfel.', 'Ich male kann gut.'],
        },
        { speaker: 'mascot', de: 'Super! Kannst du auch schwimmen?', vi: 'Tuyệt! Bạn biết bơi không?' },
        {
          speaker: 'user',
          de: 'Ja, ich kann schwimmen.',
          vi: 'Có, mình biết bơi.',
          options: ['Ja, ich kann schwimmen.', 'Ja, ich kannst schwimmen.', 'Ja, ich schwimme kann.'],
        },
        { speaker: 'mascot', de: 'Was willst du noch lernen?', vi: 'Bạn còn muốn học gì nữa?' },
        {
          speaker: 'user',
          de: 'Ich will Klavier spielen lernen.',
          vi: 'Mình muốn học chơi piano.',
          options: [
            'Ich will Klavier spielen lernen.',
            'Ich will ein Klavier essen.',
            'Ich kann will Klavier.',
          ],
        },
      ],
    },
    {
      id: 'l7-d2',
      title: 'Hôm qua bé đã làm gì?',
      scene: 'Kể chuyện ngày hôm qua',
      emoji: '📅',
      lines: [
        { speaker: 'mascot', de: 'Was hast du gestern gemacht?', vi: 'Hôm qua bạn đã làm gì?' },
        {
          speaker: 'user',
          de: 'Ich habe Deutsch gelernt.',
          vi: 'Mình đã học tiếng Đức.',
          options: ['Ich habe Deutsch gelernt.', 'Ich bin Deutsch lernen.', 'Ich habe Deutsch lerne.'],
        },
        { speaker: 'mascot', de: 'Toll! Und am Nachmittag?', vi: 'Giỏi quá! Còn buổi chiều?' },
        {
          speaker: 'user',
          de: 'Ich habe Fußball gespielt.',
          vi: 'Mình đã chơi bóng đá.',
          options: ['Ich habe Fußball gespielt.', 'Ich habe Fußball spiele.', 'Ich bin Fußball gespielt.'],
        },
        { speaker: 'mascot', de: 'Du lernst super! Willst du weiter Deutsch lernen?', vi: 'Bạn học giỏi lắm! Bạn muốn học tiếp tiếng Đức không?' },
        {
          speaker: 'user',
          de: 'Ja, ich will weiter Deutsch lernen!',
          vi: 'Có, mình muốn học tiếp tiếng Đức!',
          options: [
            'Ja, ich will weiter Deutsch lernen!',
            'Ja, ich kann Deutsch gegessen.',
            'Nein, ich will Deutsch trinken.',
          ],
        },
      ],
    },
  ],

  test: [
    {
      kind: 'quiz',
      id: 'l7-q1',
      question: 'Chọn câu đúng: "Mình biết bơi."',
      options: ['Ich kann schwimmen.', 'Ich kann schwimme.', 'Ich schwimme kann.'],
      correct: 0,
      explain: 'Với können, động từ chính giữ nguyên và đứng cuối câu.',
    },
    {
      kind: 'quiz',
      id: 'l7-q2',
      question: '"Ich will Deutsch lernen." nghĩa là gì?',
      options: ['Mình biết tiếng Đức.', 'Mình muốn học tiếng Đức.', 'Mình đã học tiếng Đức.'],
      correct: 1,
    },
    {
      kind: 'fill',
      id: 'l7-f1',
      question: 'Chia động từ đúng',
      sentence: 'Du ___ sehr gut singen.',
      vi: 'Bạn hát rất hay.',
      options: ['kann', 'kannst', 'können'],
      correct: 1,
    },
    {
      kind: 'fill',
      id: 'l7-f2',
      question: 'Điền từ ở thì quá khứ',
      sentence: 'Ich habe Fußball ___.',
      vi: 'Mình đã chơi bóng đá.',
      options: ['spielen', 'gespielt', 'spiele'],
      correct: 1,
    },
    {
      kind: 'order',
      id: 'l7-o1',
      question: 'Sắp xếp thành câu đúng',
      answer: ['Ich', 'kann', 'gut', 'Deutsch', 'sprechen'],
      vi: 'Mình nói tiếng Đức giỏi.',
    },
    {
      kind: 'quiz',
      id: 'l7-q3',
      question: 'Ôn lại Lektion 1: "Woher kommst du?" nghĩa là gì?',
      options: ['Bạn tên gì?', 'Bạn đến từ đâu?', 'Bạn mấy tuổi?'],
      correct: 1,
    },
    {
      kind: 'quiz',
      id: 'l7-q4',
      question: 'Ôn lại Lektion 3: "Was kostet das?" nghĩa là gì?',
      options: ['Cái này giá bao nhiêu?', 'Cái này là gì?', 'Cái này ở đâu?'],
      correct: 0,
    },
    {
      kind: 'quiz',
      id: 'l7-q5',
      question: 'Ôn lại Lektion 5: "halb zehn" là mấy giờ?',
      options: ['10 giờ 30', '9 giờ 30', '10 giờ 15'],
      correct: 1,
    },
    {
      kind: 'match',
      id: 'l7-m1',
      question: 'Ôn tập tổng hợp – ghép hình với từ',
      pairs: [
        { emoji: '🏫', de: 'die Schule' },
        { emoji: '👩‍🏫', de: 'die Lehrerin' },
        { emoji: '📝', de: 'die Aufgabe' },
        { emoji: '📚', de: 'lernen' },
      ],
    },
    {
      kind: 'pick',
      id: 'l7-p1',
      question: 'Chọn TẤT CẢ câu ĐÚNG ngữ pháp ✅',
      options: [
        { label: 'Ich kann Fahrrad fahren.', correct: true },
        { label: 'Ich will nach Deutschland reisen.', correct: true },
        { label: 'Ich kannst singen.', correct: false },
        { label: 'Ich habe gestern gelernt.', correct: true },
        { label: 'Ich will Deutsch lerne.', correct: false },
      ],
    },
  ],
}

export default lektion7
