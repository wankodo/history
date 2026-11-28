// 戦争史コーナー 場面データ：ペルシア戦争・ペルシア帝国編（古代ビジュアル形式）
// 構造は設計書 §10「古代の戦争：ビジュアル形式」と SPEC.md「古代ビジュアル形式の運用」。
// 視点はペルシア帝国の宮廷・帝国の単一視点とする。ただしペルシア側には、この戦争を
// 記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが
// 伝えるペルシア宮廷の叙述に基づく再構成であり、その旨を各場面の注記で明示する。
// 見出しは古代ペルシア語の碑文に実在する語句のラテン文字転写（学術上の標準表記）で
// 記す。楔形文字は端末のフォントに収録されないことが多いため使わない（SPEC 参照）。
// 部品（parts）の約束はギリシャ編と共通（100x100 の箱、底辺が地面）。

globalThis.WAR_EDITIONS = globalThis.WAR_EDITIONS || {};
WAR_EDITIONS["pw-pe"] = {
  EDITION: {
    war: "pw", country: "pe", countryName: "ペルシア帝国", lang: "pe", subLang: "ja",
    paperName: "PĀRSA",
    paperNameSub: "XŠĀYAΘIYA",
    mastSide: ["PĀRSA", "XŠĀYAΘIYA VAZRAKA"],
    sectionLabels: { war: "Hamaranam（戦況）", economy: "Dahyāva（経済）", food: "Bāji（食料・生活）", tech: "Spāda（技術）" },
    extraLabel: "号外",
    layout: "horizontal",
    warPeriod: "紀元前499年〜紀元前449年",
    format: "visual",
    granularity: "scene",
    unit: "場面",
    turnNames: ["イオニアの反乱", "マラトン", "大遠征の準備", "テルモピュライ", "サラミス", "プラタイア", "講和へ"],
    parts: {
      mountain: '<path d="M2 100 L30 34 L46 62 L64 18 L98 100 Z" fill="var(--pHill)"/><path d="M64 18 L75 39 L64 47 L53 36 Z" fill="#ffffff" opacity=".5"/>',
      wave: '<path d="M0 74 Q13 58 26 74 T52 74 T78 74 T100 74 L100 100 L0 100 Z" fill="var(--pSea)"/><path d="M6 64 Q16 54 26 64 M40 60 Q50 50 60 60 M72 64 Q82 54 92 64" stroke="#ffffff" stroke-width="3" fill="none" opacity=".55"/>',
      sun: '<circle cx="50" cy="40" r="15" fill="var(--pSun)"/><g stroke="var(--pSun)" stroke-width="4" stroke-linecap="round"><path d="M50 12v7M50 61v7M22 40h7M71 40h7M30 20l5 5M65 55l5 5M70 20l-5 5M35 55l-5 5"/></g>',
      winged_disc: '<g fill="var(--pB)"><path d="M37 29 Q15 13 1 22 Q15 29 19 35 Q7 35 1 42 Q21 47 37 39 Z"/><path d="M63 29 Q85 13 99 22 Q85 29 81 35 Q93 35 99 42 Q79 47 63 39 Z"/><circle cx="50" cy="33" r="11"/><path d="M41 45 h18 l-3 15 h-12 Z"/></g><path d="M35 43 q-9 11 -5 22 M65 43 q9 11 5 22" stroke="var(--pB)" stroke-width="3" fill="none"/>',
      king: '<path d="M40 6 h20 v11 h-5 v-5 h-5 v5 h-5 v-5 h-5 Z" fill="var(--pB)"/><circle cx="50" cy="25" r="8" fill="var(--pInk)"/><path d="M43 29 q7 11 14 0 l-2 10 h-10 Z" fill="var(--pInk)"/><path d="M38 43 L20 62 M62 43 L75 33" stroke="var(--pA)" stroke-width="8" stroke-linecap="round"/><path d="M37 38 L63 38 L71 100 L29 100 Z" fill="var(--pA)"/><rect x="36" y="55" width="28" height="5" fill="var(--pB)"/><path d="M41 70 h18 M39 83 h22" stroke="var(--pB)" stroke-width="2.5"/><path d="M75 27 L75 94" stroke="var(--pB)" stroke-width="4"/><circle cx="75" cy="22" r="5" fill="var(--pB)"/>',
      throne: '<g fill="var(--pB)"><path d="M22 8 h9 v66 h-9 Z"/><rect x="22" y="64" width="52" height="9"/><path d="M66 38 h9 v62 h-9 Z"/><rect x="22" y="92" width="52" height="8"/></g><circle cx="26" cy="5" r="4" fill="var(--pB)"/><circle cx="70" cy="34" r="4" fill="var(--pB)"/>',
      guard: '<path d="M31 44 q-9 20 -1 40" stroke="var(--pB)" stroke-width="5" fill="none"/><circle cx="50" cy="26" r="8" fill="var(--pInk)"/><path d="M39 20 a11 10 0 0 1 22 0 Z" fill="var(--pB)"/><path d="M37 38 L63 38 L69 100 L31 100 Z" fill="var(--pInk)"/><path d="M39 42 L65 86" stroke="var(--pA)" stroke-width="5"/><path d="M81 6 L81 94" stroke="var(--pInk)" stroke-width="4"/><path d="M81 0 L85 11 L77 11 Z" fill="var(--pInk)"/><circle cx="81" cy="97" r="4" fill="var(--pB)"/>',
      archer_pe: '<path d="M42 78 L39 100 M58 78 L62 100" stroke="var(--pA)" stroke-width="6" stroke-linecap="round"/><path d="M41 40 L60 40 L65 78 L37 78 Z" fill="var(--pInk)"/><rect x="29" y="44" width="8" height="26" rx="3" fill="var(--pB)" transform="rotate(12 33 57)"/><circle cx="50" cy="30" r="7" fill="var(--pInk)"/><path d="M39 22 a11 9 0 0 1 22 0 l0 5 -22 0z" fill="var(--pA)"/><path d="M56 47 L77 43 M54 54 L71 62" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M79 13 Q97 50 79 87" stroke="var(--pB)" stroke-width="4" fill="none"/><path d="M79 13 L79 87" stroke="var(--pInk)" stroke-width="1.6"/><path d="M50 45 L81 43" stroke="var(--pInk)" stroke-width="2"/>',
      spearman_pe: '<rect x="13" y="29" width="41" height="64" rx="6" fill="var(--pB)"/><g stroke="var(--pA)" stroke-width="3"><path d="M15 44 H52 M15 58 H52 M15 72 H52"/></g><circle cx="67" cy="25" r="7" fill="var(--pInk)"/><path d="M59 20 a8 7 0 0 1 16 0 l0 4 -16 0z" fill="var(--pA)"/><path d="M59 35 L77 35 L81 78 L55 78 Z" fill="var(--pInk)"/><path d="M60 78 L58 100 M72 78 L76 100" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M86 4 L71 58" stroke="var(--pInk)" stroke-width="4"/><path d="M87 0 L91 11 L82 10 Z" fill="var(--pInk)"/>',
      horse: '<path fill="var(--pInk)" d="M14 60 l5-17 q1-4 6-5 l17-3 q4-9 13-12 l13-5 q3-1 4 2 l1 5 q0 3-3 4 l-9 4 q6 4 6 10 l-1 17 h-7 l-1-12 q-13 4-25 1 l-2 11 h-7 l1-13 q-7-2-9-7 z"/><path d="M14 60 q-6 8-3 18" stroke="var(--pInk)" stroke-width="4" fill="none"/>',
      chariot_pe: '<path d="M52 60 L97 52" stroke="var(--pInk)" stroke-width="4"/><circle cx="24" cy="33" r="6" fill="var(--pInk)"/><circle cx="43" cy="31" r="6" fill="var(--pInk)"/><path d="M17 39 h13 v15 h-13 Z" fill="var(--pInk)"/><path d="M37 37 h12 v17 h-12 Z" fill="var(--pInk)"/><path d="M52 34 Q64 44 58 56" stroke="var(--pB)" stroke-width="3.5" fill="none"/><path d="M7 50 h46 v23 q0 7-7 7 h-32 q-7 0-7-7 Z" fill="var(--pA)"/><circle cx="29" cy="87" r="13" fill="none" stroke="var(--pInk)" stroke-width="4"/><circle cx="29" cy="87" r="3" fill="var(--pInk)"/><path d="M29 74 v26 M16 87 h26" stroke="var(--pInk)" stroke-width="2.5"/>',
      bridge: '<rect x="0" y="56" width="100" height="6" fill="var(--pB)"/><g fill="var(--pInk)"><path d="M1 66 h27 l-5 11 h-17 Z"/><path d="M36 66 h27 l-5 11 h-17 Z"/><path d="M71 66 h27 l-5 11 h-17 Z"/></g><path d="M8 56 v-8 M50 56 v-8 M92 56 v-8" stroke="var(--pInk)" stroke-width="3"/>',
      pavilion: '<path d="M50 2 v10" stroke="var(--pB)" stroke-width="3"/><circle cx="50" cy="14" r="4" fill="var(--pB)"/><path d="M5 36 Q50 12 95 36 L88 47 Q50 27 12 47 Z" fill="var(--pA)"/><path d="M14 42 V100 M86 42 V100" stroke="var(--pInk)" stroke-width="4"/><path d="M50 30 V86" stroke="var(--pB)" stroke-width="3"/>',
      ship_pe: '<path d="M26 76 L17 95 M41 79 L34 97 M55 80 L50 98" stroke="var(--pB)" stroke-width="3"/><path d="M8 60 L92 60 L82 77 Q50 86 20 75 Z" fill="var(--pInk)"/><path d="M88 60 q13-17 3-30" stroke="var(--pInk)" stroke-width="5" fill="none"/><path d="M50 60 V14" stroke="var(--pInk)" stroke-width="4"/><rect x="29" y="18" width="42" height="27" fill="var(--pA)"/><path d="M29 27 H71 M29 37 H71" stroke="var(--pB)" stroke-width="3"/>',
      tribute: '<path d="M40 62 L26 78 L14 82 M42 64 L58 76 L74 80" stroke="var(--pInk)" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M36 38 L58 38 L64 66 L32 66 Z" fill="var(--pA)"/><circle cx="47" cy="27" r="7" fill="var(--pInk)"/><path d="M52 40 L64 22" stroke="var(--pInk)" stroke-width="5" stroke-linecap="round"/><path d="M66 2 q9 2 8 11 q0 6-5 9 q3 4 3 8 h-13 q0-4 3-8 q-5-3-5-9 q-1-9 9-11z" fill="var(--pB)"/>',
      runner: '<g stroke="var(--pInk)" stroke-width="6" stroke-linecap="round" fill="none"><path d="M54 36 L40 56 L22 62"/><path d="M40 56 L56 74 L75 77"/><path d="M52 38 L70 48"/><path d="M52 38 L38 47"/></g><path d="M50 32 L65 29 L63 53 L48 55 Z" fill="var(--pA)"/><circle cx="59" cy="21" r="7" fill="var(--pInk)"/><path d="M70 40 L83 80" stroke="var(--pB)" stroke-width="3"/>',
      phalanx: '<g stroke="var(--pInk)" stroke-width="3"><path d="M14 42 L7 10 M38 40 L35 8 M63 40 L65 8 M89 42 L95 10"/></g><g fill="var(--pInk)"><path d="M7 2 L12 13 L2 13Z"/><path d="M35 0 L40 11 L30 11Z"/><path d="M65 0 L70 11 L60 11Z"/><path d="M95 2 L100 13 L90 13Z"/></g><path d="M11 36 q13-11 26 0 M38 36 q13-11 26 0 M65 36 q13-11 26 0" stroke="var(--pA)" stroke-width="4" fill="none"/><g fill="var(--pA)"><circle cx="24" cy="60" r="21"/><circle cx="52" cy="60" r="21"/><circle cx="80" cy="60" r="21"/></g><g fill="none" stroke="var(--pB)" stroke-width="3"><circle cx="24" cy="60" r="13"/><circle cx="52" cy="60" r="13"/><circle cx="80" cy="60" r="13"/></g><path d="M16 84 l-2 14 M50 84 l0 14 M84 84 l2 14" stroke="var(--pInk)" stroke-width="4"/>',
      trireme: '<path d="M26 76 L17 95 M41 79 L34 97 M55 80 L50 98 M69 78 L66 96" stroke="var(--pB)" stroke-width="3"/><path d="M6 60 L94 60 L83 77 Q50 86 19 75 Z" fill="var(--pInk)"/><path d="M93 60 L100 65 L93 69 Z" fill="var(--pB)"/><path d="M10 56 H90" stroke="var(--pB)" stroke-width="3"/><circle cx="82" cy="66" r="3.5" fill="#ffffff"/><path d="M9 60 Q1 42 11 32" stroke="var(--pInk)" stroke-width="4" fill="none"/><path d="M50 60 L50 16" stroke="var(--pInk)" stroke-width="4"/><rect x="33" y="22" width="37" height="5" rx="2" fill="var(--pA)"/>',
      wreck: '<g transform="rotate(-9 50 64)"><path d="M13 68 L79 50 L72 67 Q44 79 22 76 Z" fill="var(--pInk)"/><path d="M44 60 L29 20" stroke="var(--pInk)" stroke-width="4"/><path d="M29 22 L53 32 L33 43 Z" fill="var(--pA)" opacity=".85"/></g>'
    }
  },
  ISSUES: [
{
  week: 0,
  cover: { headline: "DAHYĀVA HAMIÇIYĀ", headlineSub: "イオニアの反乱の報せ" },
  scene: {
    bg: "court",
    caption: "叛いた国々の名が、大王の宮廷にもたらされる",
    parts: [
      { p: "winged_disc", x: 500, y: 92, s: 1.15 },
      { p: "pavilion", x: 468, y: 272, s: 2.3 },
      { p: "king", x: 500, y: 272, s: 1.55 },
      { p: "guard", x: 372, y: 272, s: 1.3 },
      { p: "guard", x: 636, y: 272, s: 1.3, f: -1 },
      { p: "runner", x: 218, y: 272, s: 1.1 },
      { p: "tribute", x: 806, y: 272, s: 1.2, f: -1 }
    ]
  },
  body: {
    war: [
      "ダレイオス大王の碑文は、叛いた国々（ダフヤーヴァ）の名を列挙し、大王がアフラ・マズダーの加護によってこれらを鎮めたことを誇らかに刻む。小アジアの海の向こうのギリシャ人都市イオニアの反乱も、この秩序への叛きとして宮廷に報じられた。",
      "反乱は鎮圧されたが、サルディスを焼いたアテナイとエレトリアへの討伐が命じられた。ペルシア側の記録は碑文と宮廷の伝統に限られ、反乱の個々の経過は、皮肉にも敵側の歴史家ヘロドトスの叙述によって今日に伝えられている。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ダレイオス1世のベヒストゥン碑文", "ヘロドトス『歴史』第5巻"]
},
{
  week: 1,
  cover: { headline: "HAMARANA", headlineSub: "マラトンへの討伐" },
  scene: {
    bg: "coast",
    caption: "大王の命を受けた討伐の船団が、エーゲ海を渡る",
    parts: [
      { p: "winged_disc", x: 508, y: 88, s: 1.0 },
      { p: "wave", x: 90, y: 296, s: 2.4 },
      { p: "wave", x: 580, y: 298, s: 2.2 },
      { p: "ship_pe", x: 226, y: 246, s: 1.6 },
      { p: "ship_pe", x: 478, y: 256, s: 1.35 },
      { p: "chariot_pe", x: 96, y: 272, s: 1.25 },
      { p: "horse", x: 224, y: 272, s: 1.15 },
      { p: "spearman_pe", x: 772, y: 272, s: 1.3 },
      { p: "archer_pe", x: 862, y: 272, s: 1.2 }
    ]
  },
  body: {
    war: [
      "紀元前490年、大王ダレイオスはダティスとアルタフェルネスに軍を託し、海路アテナイとエレトリアへの討伐に向かわせた。エレトリアは落とされ、その住民は帝国の内地へ移されたとヘロドトスは伝える。",
      "船団はマラトンの浜に上陸したが、そこでアテナイ軍の攻撃を受け、船へと退いた。ペルシア側の記録にマラトンの名は残っていない。帝国の宮廷にとってこれは辺境の小競り合いにすぎず、碑文に刻まれることのない出来事だった。その沈黙そのものが、ペルシア側の記録の姿である。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ヘロドトス『歴史』第6巻", "ダレイオス1世の碑文群（この戦いへの言及なし）"]
},
{
  week: 2,
  cover: { headline: "XŠĀYAΘIYA VAZRAKA", headlineSub: "大遠征の準備" },
  scene: {
    bg: "coast",
    caption: "ヘレスポントスに舟橋が架かり、帝国の諸国から軍が集まる",
    parts: [
      { p: "winged_disc", x: 884, y: 88, s: 0.95 },
      { p: "wave", x: 110, y: 298, s: 2.6 },
      { p: "wave", x: 580, y: 300, s: 2.4 },
      { p: "bridge", x: 176, y: 246, s: 3.0 },
      { p: "bridge", x: 486, y: 246, s: 3.0 },
      { p: "chariot_pe", x: 66, y: 272, s: 1.2 },
      { p: "horse", x: 190, y: 272, s: 1.1 },
      { p: "spearman_pe", x: 330, y: 272, s: 1.2 },
      { p: "archer_pe", x: 420, y: 272, s: 1.2 },
      { p: "king", x: 836, y: 272, s: 1.45 },
      { p: "guard", x: 748, y: 272, s: 1.25 }
    ]
  },
  body: {
    war: [
      "クセルクセス大王は、父ダレイオスの果たせなかったギリシャ討伐を引き継いだ。ヘロドトスの叙述によれば、遠征の準備は数年にわたり、ヘレスポントス海峡には舟を連ねた二重の橋が架けられ、アトス山には艦隊のための運河が掘られた。",
      "大王の軍は、帝国のあらゆる国々（ダフヤーヴァ）から集められた。ペルシア人、メディア人、エジプト人、フェニキア人――碑文に刻まれた帝国の国々の名簿そのままの軍であった。大王自らが行軍の先頭に立ち、軍はサルディスを発った。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ヘロドトス『歴史』第7巻", "クセルクセスの碑文（国々の名簿）"]
},
{
  week: 3,
  cover: { headline: "SPĀDA", headlineSub: "テルモピュライ" },
  scene: {
    bg: "land",
    caption: "大王は戦いを見守り、軍は山道を抜けて隘路を開く",
    parts: [
      { p: "mountain", x: 66, y: 272, s: 2.4 },
      { p: "mountain", x: 812, y: 272, s: 2.4 },
      { p: "throne", x: 116, y: 272, s: 1.25 },
      { p: "king", x: 192, y: 272, s: 1.4 },
      { p: "guard", x: 292, y: 272, s: 1.25 },
      { p: "archer_pe", x: 428, y: 272, s: 1.25 },
      { p: "archer_pe", x: 516, y: 272, s: 1.25 },
      { p: "spearman_pe", x: 604, y: 272, s: 1.25 },
      { p: "phalanx", x: 876, y: 272, s: 1.1, f: -1 }
    ]
  },
  body: {
    war: [
      "テルモピュライの隘路では、スパルタ王に率いられた一隊が道を塞いだ。大王の軍は狭い正面に阻まれ、メディア兵も「不死隊（アタナトイ）」と呼ばれる近衛兵も、これを抜くことができなかったとヘロドトスは伝える。",
      "やがて山中の抜け道が知らされ、軍は夜のうちに山を越えて隘路の背後に回った。守備隊は潰え、道は開かれた。大王の進軍は再び始まり、軍は中部ギリシャへと南下した。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ヘロドトス『歴史』第7巻"]
},
{
  week: 4,
  cover: { headline: "HAMARANA ABIY DRAYA", headlineSub: "サラミスの海戦" },
  scene: {
    bg: "sea",
    caption: "大王はエガレオスの丘の玉座から、海峡の海戦を見守る",
    parts: [
      { p: "mountain", x: 52, y: 244, s: 2.1 },
      { p: "winged_disc", x: 168, y: 84, s: 0.95 },
      { p: "throne", x: 116, y: 270, s: 1.25 },
      { p: "king", x: 192, y: 272, s: 1.4 },
      { p: "guard", x: 288, y: 272, s: 1.25 },
      { p: "ship_pe", x: 436, y: 250, s: 1.5 },
      { p: "ship_pe", x: 622, y: 258, s: 1.4, f: -1 },
      { p: "wreck", x: 786, y: 264, s: 1.3 },
      { p: "trireme", x: 902, y: 254, s: 1.1, f: -1 }
    ]
  },
  body: {
    war: [
      "紀元前480年9月、大王クセルクセスはサラミス海峡を見下ろすエガレオス山の麓に玉座を据え、フェニキア人を中心とする大艦隊の戦いを見守った。アイスキュロスの悲劇とヘロドトスの叙述はともに、この玉座の光景を伝えている。",
      "しかし狭い海峡では大艦隊は身動きが取れず、ギリシャの船団に打ち破られた。大王は敗れた艦隊の残りを率いてヘレスポントスへ退き、橋を渡ってサルディスへ帰還した。ギリシャの地には、将軍マルドニオスと選ばれた軍が残された。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ヘロドトス『歴史』第8巻", "アイスキュロス『ペルシア人』"]
},
{
  week: 5,
  cover: { headline: "KĀRA", headlineSub: "プラタイアの報せ" },
  scene: {
    bg: "land",
    caption: "プラタイアの報せが、サルディスの宮廷に届く",
    parts: [
      { p: "mountain", x: 66, y: 272, s: 1.9 },
      { p: "winged_disc", x: 736, y: 88, s: 1.0 },
      { p: "horse", x: 128, y: 272, s: 1.2 },
      { p: "runner", x: 300, y: 272, s: 1.15 },
      { p: "spearman_pe", x: 436, y: 272, s: 1.2 },
      { p: "pavilion", x: 706, y: 272, s: 2.0 },
      { p: "king", x: 736, y: 272, s: 1.45 },
      { p: "guard", x: 622, y: 272, s: 1.25 },
      { p: "guard", x: 856, y: 272, s: 1.25, f: -1 }
    ]
  },
  body: {
    war: [
      "紀元前479年、ギリシャに残ったマルドニオスの軍は、プラタイアでギリシャ連合軍に敗れ、マルドニオスは戦死した。その報せは、サルディスにあった大王のもとにも届けられたと伝えられる。",
      "ただし帝国の本体は傷ついてはいなかった。小アジアの海岸ではなお攻防が続いたが、大王が再びギリシャ本土へ大軍を送ることはなかった。宮廷の関心は、やがて帝国の内側の出来事へと戻っていった。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["ヘロドトス『歴史』第9巻"]
},
{
  week: 6,
  cover: { headline: "PĀRSA", headlineSub: "講和と帝国のその後" },
  scene: {
    bg: "court",
    caption: "戦いののちも、帝国の宮廷と貢納の秩序は続いていく",
    parts: [
      { p: "winged_disc", x: 500, y: 90, s: 1.15 },
      { p: "pavilion", x: 468, y: 272, s: 2.3 },
      { p: "king", x: 500, y: 272, s: 1.55 },
      { p: "guard", x: 368, y: 272, s: 1.3 },
      { p: "guard", x: 640, y: 272, s: 1.3, f: -1 },
      { p: "tribute", x: 216, y: 272, s: 1.25 },
      { p: "tribute", x: 792, y: 272, s: 1.25, f: -1 }
    ]
  },
  body: {
    war: [
      "ペルシア戦争ののちも、帝国は地中海の東に広がる大国であり続けた。諸国からの貢納（バージ）は宮廷に集まり、大王の碑文は変わらぬ秩序を刻み続けた。エーゲ海の向こうの小国との戦争は、帝国の長い歴史の中の一つの挿話にすぎなかった。",
      "紀元前449年頃には、アテナイとの間に講和が結ばれたと伝えられる（カリアスの和約。その実在には学説上の議論がある）。ギリシャ側がこの戦争を「世界の転機」として語り継いだのに対し、ペルシア側の記録は静かである。その静けさもまた、帝国の目線である。"
    ]
  },
  note: "ペルシア側には、この戦争を記した同時代の年代記は残っていない。本編は、大王の碑文の様式と、ヘロドトスが伝えるペルシア宮廷の叙述に基づく再構成である。",
  sources: ["歴代の大王の碑文", "後世の伝承（カリアスの和約）"]
}
  ]
};
