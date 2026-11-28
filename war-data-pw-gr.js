// 戦争史コーナー 場面データ：ペルシア戦争・ギリシャ編（古代ビジュアル形式）
// 構造は設計書 §10「古代の戦争：ビジュアル形式」と SPEC.md「古代ビジュアル形式の運用」。
// 古代は文字の新聞ではなく、壁画・レリーフ風の場面の連なりで見せる。絵は実在作品の
// 複製ではなく、様式を借りた SVG 部品（EDITION.parts）の組み合わせで描く新規描画。
// 期間マスター（war-weeks.js の pw）は「転機」の配列で、week は転機インデックスを指す。
// 視点はギリシャ側の単一視点とし、一次資料はヘロドトス『歴史』を中心とする。
// 数値はヘロドトスへの帰属を明示できるものだけに限り、裏取りできない数値は載せない。
// 部品（parts）は 100x100 の箱に収め、底辺（y=100）が地面に接する約束で描く。
// 配置は { p:部品ID, x:地面の接点x, y:地面のy, s:拡縮, f:向き(1=右向き/-1=左向き) }。

globalThis.WAR_EDITIONS = globalThis.WAR_EDITIONS || {};
WAR_EDITIONS["pw-gr"] = {
  EDITION: {
    war: "pw", country: "gr", countryName: "ギリシャ", lang: "el", subLang: "ja",
    paperName: "Ο ΠΕΡΣΙΚΟΣ ΠΟΛΕΜΟΣ",
    paperNameSub: "ΑΘΗΝΑΙ",
    mastSide: ["ΠΕΡΣΙΚΟΣ ΠΟΛΕΜΟΣ", "ΕΛΛΑΣ"],
    sectionLabels: { war: "Μάχη（戦況）", economy: "Πόλεις（経済）", food: "Σῖτος（食料・生活）", tech: "Ὅπλα（技術）" },
    extraLabel: "号外",
    layout: "horizontal",
    warPeriod: "紀元前499年〜紀元前449年",
    format: "visual",
    granularity: "scene",
    unit: "場面",
    turnNames: ["イオニアの反乱", "マラトン", "大遠征の報せ", "テルモピュライ", "サラミス", "プラタイア", "講和へ"],
    parts: {
      mountain: '<path d="M2 100 L30 34 L46 62 L64 18 L98 100 Z" fill="var(--pHill)"/><path d="M64 18 L75 39 L64 47 L53 36 Z" fill="#ffffff" opacity=".5"/>',
      wave: '<path d="M0 74 Q13 58 26 74 T52 74 T78 74 T100 74 L100 100 L0 100 Z" fill="var(--pSea)"/><path d="M6 64 Q16 54 26 64 M40 60 Q50 50 60 60 M72 64 Q82 54 92 64" stroke="#ffffff" stroke-width="3" fill="none" opacity=".55"/>',
      sun: '<circle cx="50" cy="40" r="15" fill="var(--pSun)"/><g stroke="var(--pSun)" stroke-width="4" stroke-linecap="round"><path d="M50 12v7M50 61v7M22 40h7M71 40h7M30 20l5 5M65 55l5 5M70 20l-5 5M35 55l-5 5"/></g>',
      hoplite: '<path d="M71 4 L73 90" stroke="var(--pInk)" stroke-width="4"/><path d="M72 0 L77 13 L67 13 Z" fill="var(--pInk)"/><path d="M50 76 l-4 22 M63 76 l5 22" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M50 34 q11 2 12 13 l1 24 q0 7-7 7 l-7 0 q-6 0-5-7 l1-26 q1-9 5-11z" fill="var(--pInk)"/><circle cx="35" cy="57" r="26" fill="var(--pA)"/><circle cx="35" cy="57" r="17" fill="none" stroke="var(--pB)" stroke-width="3"/><circle cx="35" cy="57" r="4" fill="var(--pB)"/><path d="M43 27 a10 10 0 0 1 20 0 l0 5 -20 0z" fill="var(--pInk)"/><path d="M41 25 q13-15 26-3 q-13-5-26 3z" fill="var(--pA)"/>',
      phalanx: '<g stroke="var(--pInk)" stroke-width="3"><path d="M14 42 L7 10 M38 40 L35 8 M63 40 L65 8 M89 42 L95 10"/></g><g fill="var(--pInk)"><path d="M7 2 L12 13 L2 13Z"/><path d="M35 0 L40 11 L30 11Z"/><path d="M65 0 L70 11 L60 11Z"/><path d="M95 2 L100 13 L90 13Z"/></g><path d="M11 36 q13-11 26 0 M38 36 q13-11 26 0 M65 36 q13-11 26 0" stroke="var(--pA)" stroke-width="4" fill="none"/><g fill="var(--pA)"><circle cx="24" cy="60" r="21"/><circle cx="52" cy="60" r="21"/><circle cx="80" cy="60" r="21"/></g><g fill="none" stroke="var(--pB)" stroke-width="3"><circle cx="24" cy="60" r="13"/><circle cx="52" cy="60" r="13"/><circle cx="80" cy="60" r="13"/></g><path d="M16 84 l-2 14 M50 84 l0 14 M84 84 l2 14" stroke="var(--pInk)" stroke-width="4"/>',
      peltast: '<path d="M28 28 A25 25 0 1 0 28 80 A31 31 0 1 1 28 28 Z" fill="var(--pB)"/><circle cx="58" cy="24" r="8" fill="var(--pInk)"/><path d="M52 34 q10 0 11 10 l1 20 q0 6-6 6 l-6 0 q-5 0-5-6 l1-20 q0-8 4-10z" fill="var(--pInk)"/><path d="M56 72 l-3 24 M64 72 l4 24" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M62 40 L92 18 M64 48 L94 30" stroke="var(--pInk)" stroke-width="3"/>',
      trireme: '<path d="M26 76 L17 95 M41 79 L34 97 M55 80 L50 98 M69 78 L66 96" stroke="var(--pB)" stroke-width="3"/><path d="M6 60 L94 60 L83 77 Q50 86 19 75 Z" fill="var(--pInk)"/><path d="M93 60 L100 65 L93 69 Z" fill="var(--pB)"/><path d="M10 56 H90" stroke="var(--pB)" stroke-width="3"/><circle cx="82" cy="66" r="3.5" fill="#ffffff"/><path d="M9 60 Q1 42 11 32" stroke="var(--pInk)" stroke-width="4" fill="none"/><path d="M50 60 L50 16" stroke="var(--pInk)" stroke-width="4"/><rect x="33" y="22" width="37" height="5" rx="2" fill="var(--pA)"/>',
      temple: '<path d="M8 30 L50 11 L92 30 Z" fill="var(--pA)"/><rect x="12" y="34" width="76" height="6" fill="var(--pInk)"/><g fill="var(--pInk)"><rect x="17" y="44" width="7" height="38"/><rect x="37" y="44" width="7" height="38"/><rect x="57" y="44" width="7" height="38"/><rect x="75" y="44" width="7" height="38"/></g><rect x="8" y="84" width="84" height="5" fill="var(--pInk)"/><rect x="3" y="92" width="94" height="5" fill="var(--pInk)"/>',
      runner: '<g stroke="var(--pInk)" stroke-width="6" stroke-linecap="round" fill="none"><path d="M54 36 L40 56 L22 62"/><path d="M40 56 L56 74 L75 77"/><path d="M52 38 L70 48"/><path d="M52 38 L38 47"/></g><path d="M50 32 L65 29 L63 53 L48 55 Z" fill="var(--pA)"/><circle cx="59" cy="21" r="7" fill="var(--pInk)"/><path d="M70 40 L83 80" stroke="var(--pB)" stroke-width="3"/>',
      olive: '<path d="M47 100 q5-22 0-38 q-2-11 5-19" stroke="var(--pInk)" stroke-width="6" fill="none" stroke-linecap="round"/><g fill="var(--pB)"><ellipse cx="33" cy="30" rx="18" ry="12"/><ellipse cx="58" cy="21" rx="16" ry="11"/><ellipse cx="67" cy="38" rx="14" ry="10"/><ellipse cx="44" cy="41" rx="15" ry="10"/></g><g fill="var(--pInk)"><circle cx="28" cy="36" r="2.6"/><circle cx="52" cy="30" r="2.6"/><circle cx="66" cy="30" r="2.6"/><circle cx="42" cy="24" r="2.6"/></g>',
      wreck: '<g transform="rotate(-9 50 64)"><path d="M13 68 L79 50 L72 67 Q44 79 22 76 Z" fill="var(--pInk)"/><path d="M44 60 L29 20" stroke="var(--pInk)" stroke-width="4"/><path d="M29 22 L53 32 L33 43 Z" fill="var(--pA)" opacity=".85"/></g>',
      fire: '<path d="M29 100 L38 72 H62 L71 100 Z" fill="var(--pInk)"/><path d="M50 42 q11 13 4 25 q-2 5-6 5 q-5 0-6-6 q-1-11 8-24z" fill="var(--pSun)"/><path d="M50 55 q5 6 2 12 q-1 3-3 3 q-3 0-3-4 q0-5 4-11z" fill="var(--pA)"/>',
      wall: '<g fill="var(--pHill)"><path d="M4 100 V38 h10 v-8 h12 v8 h12 v-8 h12 v8 h12 v-8 h12 v8 h10 v62 Z"/><rect x="66" y="18" width="24" height="82"/><path d="M66 18 h6 v-6 h12 v6 h6 v8 h-24 Z"/></g><path d="M24 100 V72 a10 12 0 0 1 20 0 V100 Z" fill="var(--pInk)"/>',
      tent: '<path d="M6 100 L50 42 L94 100 Z" fill="var(--pB)"/><path d="M50 42 V100" stroke="var(--pInk)" stroke-width="3"/><path d="M37 100 L50 70 L63 100 Z" fill="var(--pInk)"/>',
      archer_pe: '<path d="M42 78 L39 100 M58 78 L62 100" stroke="var(--pA)" stroke-width="6" stroke-linecap="round"/><path d="M41 40 L60 40 L65 78 L37 78 Z" fill="var(--pInk)"/><rect x="29" y="44" width="8" height="26" rx="3" fill="var(--pB)" transform="rotate(12 33 57)"/><circle cx="50" cy="30" r="7" fill="var(--pInk)"/><path d="M39 22 a11 9 0 0 1 22 0 l0 5 -22 0z" fill="var(--pA)"/><path d="M56 47 L77 43 M54 54 L71 62" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M79 13 Q97 50 79 87" stroke="var(--pB)" stroke-width="4" fill="none"/><path d="M79 13 L79 87" stroke="var(--pInk)" stroke-width="1.6"/><path d="M50 45 L81 43" stroke="var(--pInk)" stroke-width="2"/>',
      spearman_pe: '<rect x="13" y="29" width="41" height="64" rx="6" fill="var(--pB)"/><g stroke="var(--pA)" stroke-width="3"><path d="M15 44 H52 M15 58 H52 M15 72 H52"/></g><circle cx="67" cy="25" r="7" fill="var(--pInk)"/><path d="M59 20 a8 7 0 0 1 16 0 l0 4 -16 0z" fill="var(--pA)"/><path d="M59 35 L77 35 L81 78 L55 78 Z" fill="var(--pInk)"/><path d="M60 78 L58 100 M72 78 L76 100" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M86 4 L71 58" stroke="var(--pInk)" stroke-width="4"/><path d="M87 0 L91 11 L82 10 Z" fill="var(--pInk)"/>'
    }
  },
  ISSUES: [
{
  week: 0,
  cover: { headline: "Ἡ Ἰωνικὴ ἀποστασία", headlineSub: "イオニアの反乱" },
  scene: {
    bg: "coast",
    caption: "イオニアの都市から叛きの火の手が上がり、アテナイの船がエーゲ海を渡る",
    parts: [
      { p: "sun", x: 892, y: 96, s: 0.95 },
      { p: "wave", x: 90, y: 292, s: 2.2 },
      { p: "wave", x: 330, y: 298, s: 2.0 },
      { p: "trireme", x: 190, y: 244, s: 1.5 },
      { p: "trireme", x: 440, y: 252, s: 1.2 },
      { p: "wall", x: 800, y: 272, s: 1.7 },
      { p: "fire", x: 668, y: 272, s: 0.85 },
      { p: "hoplite", x: 596, y: 272, s: 1.1 },
      { p: "hoplite", x: 640, y: 272, s: 1.1 }
    ]
  },
  body: {
    war: [
      "ヘロドトス『歴史』第5巻によれば、紀元前499年、小アジアのギリシャ人都市イオニアが、ペルシアの支配に対して反乱を起こした。中心となったのはミレトスのアリスタゴラスで、本土のアテナイとエレトリアに援軍を求めた。アテナイは20隻、エレトリアは5隻の軍船を送ったと伝えられる。",
      "連合軍はペルシアの小アジア統治の都サルディスを攻めて火を放ったが、やがて押し返され、反乱は紀元前494年のラデの海戦で鎮圧された。ミレトスは陥落した。しかしサルディスを焼いたことは大王ダレイオスの耳に達し、アテナイへの討伐の遠因になった、とヘロドトスは記している。"
    ]
  },
  sources: ["ヘロドトス『歴史』第5巻"]
},
{
  week: 1,
  cover: { headline: "Μάχη ἐν Μαραθῶνι", headlineSub: "マラトンの戦い" },
  scene: {
    bg: "land",
    caption: "平原に布陣したアテナイの重装歩兵が、ペルシアの上陸軍に突撃する",
    parts: [
      { p: "mountain", x: 90, y: 272, s: 2.3 },
      { p: "sun", x: 128, y: 92, s: 0.9 },
      { p: "runner", x: 96, y: 272, s: 1.1 },
      { p: "phalanx", x: 316, y: 272, s: 1.5 },
      { p: "phalanx", x: 452, y: 272, s: 1.5 },
      { p: "hoplite", x: 580, y: 272, s: 1.2 },
      { p: "archer_pe", x: 724, y: 272, s: 1.2, f: -1 },
      { p: "spearman_pe", x: 812, y: 272, s: 1.2, f: -1 },
      { p: "archer_pe", x: 896, y: 272, s: 1.1, f: -1 }
    ]
  },
  body: {
    war: [
      "紀元前490年、ダレイオスの命を受けたペルシアの遠征軍は、エレトリアを落としたのち、アテナイ北東のマラトンの浜に上陸した。アテナイ軍は将軍ミルティアデスらの指揮のもと平原に進み、中央を薄く両翼を厚く布陣して、駆け足で突撃したとヘロドトス『歴史』第6巻は伝える。両翼で勝ったアテナイ軍は中央へ向きを変え、上陸軍を船へと追い落とした。",
      "アテナイ側の戦死者は192人と伝えられる。スパルタへの伝令フィリッピデス（フェイディッピデス）の派遣はヘロドトスも記すが、戦いの報せを抱いてアテナイまで走り抜いたという話は、後世の伝承として語り継がれたものである。"
    ]
  },
  sources: ["ヘロドトス『歴史』第6巻"]
},
{
  week: 2,
  cover: { headline: "Ἡ τοῦ βασιλέως παρασκευή", headlineSub: "大王の遠征準備の報せ" },
  scene: {
    bg: "coast",
    caption: "ヘレスポントスに舟橋が架かり、大軍の噂がギリシャの都市に届く",
    parts: [
      { p: "sun", x: 884, y: 92, s: 0.9 },
      { p: "temple", x: 128, y: 272, s: 1.45 },
      { p: "fire", x: 226, y: 272, s: 0.85 },
      { p: "hoplite", x: 330, y: 272, s: 1.1 },
      { p: "peltast", x: 396, y: 272, s: 1.1 },
      { p: "wave", x: 520, y: 296, s: 2.4 },
      { p: "wave", x: 770, y: 300, s: 2.0 },
      { p: "trireme", x: 636, y: 246, s: 1.4 },
      { p: "trireme", x: 828, y: 254, s: 1.2 }
    ]
  },
  body: {
    war: [
      "ダレイオスの死後、子のクセルクセスが王位を継いだ。ヘロドトス『歴史』第7巻によれば、クセルクセスはエジプトの反乱を鎮めたのち、ギリシャへの大遠征を決断した。軍はヘレスポントス海峡に舟を並べた橋を架けて渡り、アトス山には運河が掘られたと伝えられる。",
      "遠征に先立ち、ペルシアの使者はギリシャの諸都市に「土と水」（服従の証）を求めた。多くの都市がこれに応じたが、アテナイとスパルタは拒んだ。紀元前481年、諸都市の代表はコリントスに集まって同盟を結び、来たるべき大軍に備えた。"
    ]
  },
  sources: ["ヘロドトス『歴史』第7巻"]
},
{
  week: 3,
  cover: { headline: "Μάχη ἐν Θερμοπύλαις", headlineSub: "テルモピュライの戦い" },
  scene: {
    bg: "land",
    caption: "山と海に挟まれた狭い隘路を、レオニダスと諸都市からの兵が守る",
    parts: [
      { p: "mountain", x: 66, y: 272, s: 2.5 },
      { p: "mountain", x: 836, y: 272, s: 2.5 },
      { p: "archer_pe", x: 128, y: 272, s: 1.15 },
      { p: "spearman_pe", x: 216, y: 272, s: 1.2 },
      { p: "archer_pe", x: 292, y: 272, s: 1.1 },
      { p: "phalanx", x: 452, y: 272, s: 1.5, f: -1 },
      { p: "hoplite", x: 576, y: 272, s: 1.2, f: -1 },
      { p: "wave", x: 896, y: 298, s: 1.7 }
    ]
  },
  body: {
    war: [
      "紀元前480年、クセルクセスの大軍が南下し、ギリシャ連合軍は山と海に挟まれたテルモピュライの隘路に布陣した。指揮を執ったのはスパルタ王レオニダスである。ペルシア軍は狭い正面では数の力を発揮できず、攻めあぐねたとヘロドトス『歴史』第7巻は伝える。",
      "しかし地元のエピアルテスが山中の抜け道を敵に教え、ペルシア軍は背後に回った。レオニダスは連合軍の主力を退かせ、自らはスパルタ兵300とテスピアイ兵らとともにその場に残り、戦死した。隘路は開かれ、大軍は中部ギリシャへ雪崩れ込んだ。"
    ]
  },
  sources: ["ヘロドトス『歴史』第7巻"]
},
{
  week: 4,
  cover: { headline: "Ναυμαχίη ἐν Σαλαμῖνι", headlineSub: "サラミスの海戦" },
  scene: {
    bg: "sea",
    caption: "狭い海峡に誘い込まれた大艦隊を、ギリシャの船団が打ち破る",
    parts: [
      { p: "mountain", x: 52, y: 238, s: 2.0 },
      { p: "mountain", x: 856, y: 238, s: 2.0 },
      { p: "sun", x: 500, y: 84, s: 0.85 },
      { p: "trireme", x: 92, y: 254, s: 1.2 },
      { p: "trireme", x: 218, y: 242, s: 1.5 },
      { p: "trireme", x: 420, y: 254, s: 1.4 },
      { p: "trireme", x: 612, y: 246, s: 1.5, f: -1 },
      { p: "wreck", x: 776, y: 262, s: 1.3 }
    ]
  },
  body: {
    war: [
      "テルモピュライと同時期のアルテミシオンの海戦を経て、アテナイの人々は家を捨て、船とサラミス島へ避難した。「木の壁（船）に身を託せ」という神託の解釈をめぐり議論が分かれたが、テミストクレスの主張が通り、艦隊はサラミスの狭い海峡で迎え撃つことになった。",
      "紀元前480年9月、ペルシアの大艦隊は海峡へ入り、身動きの取れない狭さの中でギリシャ艦隊に打ち破られた。クセルクセスは対岸の丘に置いた玉座からこの敗北を見ていたと伝えられる。この勝利を描いたアイスキュロスの悲劇『ペルシア人』は、敵国の宮廷を舞台にした、現存する最古級の戦いの記録である。"
    ]
  },
  sources: ["ヘロドトス『歴史』第8巻", "アイスキュロス『ペルシア人』"]
},
{
  week: 5,
  cover: { headline: "Μάχη ἐν Πλαταιαῖς", headlineSub: "プラタイアの戦い" },
  scene: {
    bg: "land",
    caption: "ボイオティアの平原で、連合軍がマルドニオスの軍を打ち破る",
    parts: [
      { p: "mountain", x: 756, y: 272, s: 2.2 },
      { p: "sun", x: 876, y: 90, s: 0.9 },
      { p: "phalanx", x: 232, y: 272, s: 1.5 },
      { p: "phalanx", x: 368, y: 272, s: 1.5 },
      { p: "hoplite", x: 496, y: 272, s: 1.2 },
      { p: "tent", x: 636, y: 272, s: 1.2 },
      { p: "spearman_pe", x: 716, y: 272, s: 1.2, f: -1 },
      { p: "archer_pe", x: 800, y: 272, s: 1.1, f: -1 }
    ]
  },
  body: {
    war: [
      "サラミスののちクセルクセスは本国へ帰り、将軍マルドニオスがテッサリアに残った。紀元前479年、スパルタの摂政パウサニアスに率いられたギリシャ連合軍は、ボイオティアのプラタイアでマルドニオスの軍と決戦し、これを打ち破った。マルドニオスは戦死した、とヘロドトス『歴史』第9巻は伝える。",
      "同じ年、小アジアのミュカレでもギリシャ艦隊が勝利し、イオニアの都市は再びペルシアから離れた。ヘロドトスの『歴史』はこの勝利をもって叙述を閉じている。ギリシャ本土へのペルシアの大遠征は、ここに終わった。"
    ]
  },
  sources: ["ヘロドトス『歴史』第9巻"]
},
{
  week: 6,
  cover: { headline: "Ἡ εἰρήνη", headlineSub: "講和へ" },
  scene: {
    bg: "coast",
    caption: "エーゲ海の攻防が続いたのち、海の向こうとの間に講和が伝えられる",
    parts: [
      { p: "sun", x: 884, y: 92, s: 0.9 },
      { p: "temple", x: 140, y: 272, s: 1.45 },
      { p: "olive", x: 292, y: 272, s: 1.25 },
      { p: "hoplite", x: 216, y: 272, s: 1.0 },
      { p: "wave", x: 500, y: 296, s: 2.4 },
      { p: "wave", x: 756, y: 300, s: 2.0 },
      { p: "trireme", x: 580, y: 248, s: 1.5 }
    ]
  },
  body: {
    war: [
      "プラタイアののち、アテナイを中心にデロス同盟が結ばれ、エーゲ海での攻防はなお数十年続いた。この間の経過は、トゥキュディデス『戦史』が略述している。ギリシャの船団は小アジアやキプロスの沖でペルシアと戦い、海の覇権を広げていった。",
      "紀元前449年頃、アテナイのカリアスがペルシアと講和を結んだと伝えられる（カリアスの和約）。ただしこの和約については、同時代の記録が残っておらず、その実在や内容には学説上の議論がある。確かなのは、ペルシアの大軍がギリシャ本土に現れることは、二度となかったということである。"
    ]
  },
  sources: ["トゥキュディデス『戦史』第1巻（ペンテーコンタエティア）", "後世の伝承（カリアスの和約）"]
}
  ]
};
