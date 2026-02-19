export type Result = {
  id: string;
  position: string;        // SP / RP / CP / C / 1B / 2B / 3B / SS / LF / CF / RF / DH
  positionLabel: string;   // 先発投手 / リリーフ / etc.
  battingOrder: number | null;
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  emoji: string;
  comparePlayer: string;
  color: string;           // tailwind bg color for badge
};

export const results: Record<string, Result> = {
  // ============================================================
  // ⚾ PITCHERS — 先発 (SP)
  // ============================================================
  sp_power_ace: {
    id: "sp_power_ace",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "剛腕エース",
    subtitle: "圧倒的な球威で相手を支配する絶対的エース",
    description: "真っ向勝負が信条の剛腕タイプ。マウンドに立てば誰も逆らえない圧倒的な存在感を放ちます。チームの精神的支柱として、大事な試合は必ずあなたが任される。失投を恐れず攻め続ける姿勢が最大の武器。",
    traits: ["剛球派", "精神的支柱", "真っ向勝負", "絶対的エース"],
    emoji: "🔥", comparePlayer: "ダルビッシュ有・山本由伸タイプ", color: "bg-red-700",
  },
  sp_strikeout: {
    id: "sp_strikeout",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "奪三振マシン",
    subtitle: "速球と変化球を武器に打者をねじ伏せるパワーピッチャー",
    description: "スピードとパワーを兼ね備えたストライクアウトアーティスト。三振を奪う瞬間に最大の充実感を感じるタイプ。ピンチでも力で押し込む強さを持ち、相手打者に心理的プレッシャーを与え続けます。",
    traits: ["奪三振王", "速球派", "強心臓", "攻め一辺倒"],
    emoji: "⚡", comparePlayer: "大谷翔平・千賀滉大タイプ", color: "bg-red-700",
  },
  sp_finesse_ace: {
    id: "sp_finesse_ace",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "技巧派エース",
    subtitle: "頭脳と技術で打者を翻弄するサイエンティスト",
    description: "力ではなく技術と頭脳で勝負する知将タイプ。相手の弱点を事前に研究し、試合の流れを読みながら投球を組み立てます。スピードがなくても抑えられる理由を熟知している。",
    traits: ["技巧派", "頭脳戦", "読み勝ち", "フィールド上の戦略家"],
    emoji: "🧠", comparePlayer: "上原浩治・石川柊太タイプ", color: "bg-blue-700",
  },
  sp_control: {
    id: "sp_control",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "精密機械",
    subtitle: "制球力と冷静さで完投する職人気質の先発",
    description: "四球をほとんど出さない鉄壁の制球が最大の武器。どんな場面でも動じない冷静さと、コーナーを丁寧につく技術で打者を幻惑します。試合が進むにつれてさらに精度が増す頼れる存在。",
    traits: ["精密制球", "冷静沈着", "完投型", "省エネ投球"],
    emoji: "🎯", comparePlayer: "斎藤雅樹・工藤公康タイプ", color: "bg-blue-700",
  },
  sp_young_ace: {
    id: "sp_young_ace",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "若き剛腕",
    subtitle: "まだ荒削りだが誰もが認める圧倒的ポテンシャル",
    description: "球威は一流、でも経験はこれから積んでいく段階。失敗を恐れずに全力でぶつかる姿勢が多くの人を引きつけます。まだ磨かれていないダイヤモンドの原石。成長したら誰も止められない。",
    traits: ["将来のエース", "剛球", "情熱的", "成長株"],
    emoji: "💎", comparePlayer: "佐々木朗希・高橋宏斗タイプ", color: "bg-purple-700",
  },
  sp_veteran: {
    id: "sp_veteran",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "ベテラン先発",
    subtitle: "経験と知恵で長年チームを支え続ける信頼の柱",
    description: "球速は衰えても、その分だけ経験と知恵が詰まっています。若手から絶大な信頼を集め、チームの空気を一変させる存在感。ピンチをいくつも乗り越えてきた精神力は誰にも負けない。",
    traits: ["経験豊富", "精神的支柱", "チームリーダー", "知将"],
    emoji: "🏆", comparePlayer: "工藤公康・金本知憲タイプ", color: "bg-amber-700",
  },
  sp_groundball: {
    id: "sp_groundball",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "グラウンドボーラー",
    subtitle: "打たせて取るスタイルで守備陣と連携する先発",
    description: "三振より内野ゴロを優先する省エネ投球のプロ。守備陣への信頼が厚く、チームワークで試合を作るタイプ。球数を節約しながら長いイニングを投げられる計算高さが光ります。",
    traits: ["打たせて取る", "チームワーク", "省エネ", "計算高い"],
    emoji: "⚾", comparePlayer: "西口文也・岸孝之タイプ", color: "bg-green-700",
  },
  sp_lefty_finesse: {
    id: "sp_lefty_finesse",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "技巧派左腕",
    subtitle: "左投手特有の角度と変化球で打者を翻弄",
    description: "左腕特有の角度と球の出どころで打者を幻惑するアーティスト。多彩な変化球を操り、打者に的を絞らせない投球が持ち味。状況に応じてスタイルを変える柔軟性も持ち合わせています。",
    traits: ["左腕技巧派", "多彩な変化球", "柔軟性", "打者翻弄"],
    emoji: "🌀", comparePlayer: "菅野智之・今永昇太タイプ", color: "bg-teal-700",
  },
  sp_consistent: {
    id: "sp_consistent",
    position: "SP", positionLabel: "先発投手",
    battingOrder: null,
    title: "安定感の先発",
    subtitle: "崩れない安定感で毎試合チームに勝機をもたらす",
    description: "派手さはないが、試合を壊さない安定感が最大の武器。どんな状況でも平常心を保ち、チームに「今日は大丈夫」と思わせる頼もしさがあります。コンスタントにQSを達成するプロの先発。",
    traits: ["安定感", "高QS率", "冷静", "プロフェッショナル"],
    emoji: "⚓", comparePlayer: "メッセンジャー・小川泰弘タイプ", color: "bg-cyan-700",
  },

  // ============================================================
  // ⚾ PITCHERS — リリーフ (RP)
  // ============================================================
  rp_setup: {
    id: "rp_setup",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "8回の男",
    subtitle: "クローザーへ繋ぐ最重要ブリッジを任される信頼のセットアッパー",
    description: "リリーフの中でも最もプレッシャーのかかる8回を任されるセットアッパー。勝ちゲームで登板し、クローザーへ試合をつなぐ重大な役割を黙々とこなします。目立たないが、チームが勝つために欠かせない存在。",
    traits: ["セットアッパー", "高い信頼性", "プレッシャー耐性", "ブリッジ役"],
    emoji: "🌉", comparePlayer: "藤川球児(全盛期)・平野佳寿タイプ", color: "bg-orange-700",
  },
  rp_power: {
    id: "rp_power",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "剛腕リリーフ",
    subtitle: "短いイニングに全力を注ぐパワー型リリーフ",
    description: "1〜2イニングに全エネルギーを集中させる剛腕タイプ。先発より球威があがるケースも多く、登板すると試合の流れを一変させます。短時間での爆発力が誰よりも高いスペシャリスト。",
    traits: ["短距離全力型", "剛球", "試合の流れを変える", "スペシャリスト"],
    emoji: "💥", comparePlayer: "大津亮介・山崎颯一郎タイプ", color: "bg-red-600",
  },
  rp_long: {
    id: "rp_long",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "ロングリリーフ",
    subtitle: "先発を助け長いイニングをこなすチームの救世主",
    description: "先発が早い回にKOされた時に颯爽と登場するロングリリーフのスペシャリスト。目立たないが、チームを救う縁の下の力持ち。スタミナと安定感を兼ね備え、何イニングでも投げられる。",
    traits: ["縁の下の力持ち", "スタミナ", "安定感", "チームの救世主"],
    emoji: "🛡️", comparePlayer: "チーム事情に応じたユーティリティタイプ", color: "bg-green-800",
  },
  rp_loogy: {
    id: "rp_loogy",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "左のワンポイント",
    subtitle: "左打者を封じる超スペシャリストの職人",
    description: "自分の得意な場面だけに特化した究極の専門職人。「この場面だけ」を任されることで100%の力を発揮します。役割は小さくても、チームに欠かせない存在感がある。自分の仕事に誇りを持つプロフェッショナル。",
    traits: ["ワンポイント職人", "専門特化", "役割完遂", "誇り高い"],
    emoji: "🎭", comparePlayer: "フランシスコ・澤村拓一タイプ", color: "bg-indigo-700",
  },
  rp_specialist: {
    id: "rp_specialist",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "場面限定スペシャリスト",
    subtitle: "特定の局面に圧倒的な強さを発揮するリリーフ",
    description: "「この場面なら俺に任せろ」という絶対の自信を持つスペシャリスト。ランナーがいても、逆転の場面でも、決められた役割をこなす集中力が他とは別格。地味に見えて、チームの勝敗に直結する重要人物。",
    traits: ["場面対応力", "集中力", "逃げない", "頼られる存在"],
    emoji: "🎯", comparePlayer: "鎌田光夫・宮西尚生タイプ", color: "bg-violet-700",
  },
  rp_fire: {
    id: "rp_fire",
    position: "RP", positionLabel: "リリーフ投手",
    battingOrder: null,
    title: "ファイアーマン",
    subtitle: "危機的状況に颯爽と現れ試合を鎮静化する消火人",
    description: "ランナーを溜められた最大のピンチに登場し、全員を抑えてしまう超クラッチなリリーフ。「なんで抑えられるの？」と思わせる謎の勝負強さが最大の特徴。荒れた試合を一瞬で支配する圧倒的存在感。",
    traits: ["超クラッチ", "ファイアーマン", "逆境に強い", "鎮火の名人"],
    emoji: "🚒", comparePlayer: "野茂英雄・タイプ(リリーフ版)", color: "bg-orange-800",
  },

  // ============================================================
  // ⚾ PITCHERS — クローザー (CP)
  // ============================================================
  cp_power: {
    id: "cp_power",
    position: "CP", positionLabel: "クローザー",
    battingOrder: null,
    title: "剛腕クローザー",
    subtitle: "圧倒的な球威で9回を支配するゲームセッター",
    description: "9回のマウンドに立った瞬間、球場の空気が変わる。最速の直球と空振りを取れる決め球で打者を完全に封じるクローザーの鑑。プレッシャーをパワーに変えられる唯一無二の存在。",
    traits: ["最強クローザー", "剛球", "絶対的守護神", "勝利の請負人"],
    emoji: "🔒", comparePlayer: "岩瀬仁紀・マリアノ・リベラタイプ", color: "bg-red-800",
  },
  cp_finesse: {
    id: "cp_finesse",
    position: "CP", positionLabel: "クローザー",
    battingOrder: null,
    title: "技巧派クローザー",
    subtitle: "超精密制球と変化球の切れで9回を制圧",
    description: "力ではなく、全球が計算されたかのような技術でバッターを打ち取る知将系クローザー。球速計が速くなくても誰も打てない。頭脳と技術が極まった存在で、相手は何をしても解決策が見つからない。",
    traits: ["技巧クローザー", "計算された投球", "精密制球", "絶対的守護神"],
    emoji: "🏹", comparePlayer: "高津臣吾・上原浩治タイプ", color: "bg-blue-800",
  },
  cp_mental: {
    id: "cp_mental",
    position: "CP", positionLabel: "クローザー",
    battingOrder: null,
    title: "鋼のメンタルクローザー",
    subtitle: "どんな劣勢でも動じない鋼のメンタルを持つ守護神",
    description: "技術より精神力がすべての究極メンタルタイプ。1点差の9回、フルベースでも表情一つ変えない。この人が出てきたら「もう勝った」とチームメイトが確信できる圧倒的な安心感の持ち主。",
    traits: ["鋼のメンタル", "精神的支柱", "絶対的守護神", "チームの象徴"],
    emoji: "⛩️", comparePlayer: "佐々木主浩・スタンの伝説クローザータイプ", color: "bg-slate-700",
  },

  // ============================================================
  // ⚾ BATTERS — 捕手 (C)
  // ============================================================
  c_clutch: {
    id: "c_clutch",
    position: "C", positionLabel: "捕手",
    battingOrder: 6,
    title: "勝負強い捕手",
    subtitle: "チームの頭脳として守備とバットで勝利を引き寄せる",
    description: "投手をリードしながら、打席でも重要な場面で結果を出す万能型捕手。チームの全体を把握し、「ここは自分が決める」という自覚を常に持っています。縁の下の力持ちでありながら、陰の実力者。",
    traits: ["勝負強い", "チームの頭脳", "リーダー", "守攻二刀流"],
    emoji: "🧤", comparePlayer: "城島健司・古田敦也タイプ", color: "bg-teal-700",
  },
  c_defensive: {
    id: "c_defensive",
    position: "C", positionLabel: "捕手",
    battingOrder: 8,
    title: "守備型捕手",
    subtitle: "投手を最大限に活かす鉄壁の守備とリードの名人",
    description: "打撃より守備とリードに命をかける職人型捕手。投手の能力を120%引き出すリードと、盗塁を許さない強肩が武器。打撃成績より「あの投手が〇〇捕手と組むと別人みたい」と言われることが誇り。",
    traits: ["守備職人", "強肩", "投手リーダー", "存在感"],
    emoji: "🛡️", comparePlayer: "矢野燿大・伊藤光タイプ", color: "bg-slate-600",
  },
  c_leadoff: {
    id: "c_leadoff",
    position: "C", positionLabel: "捕手",
    battingOrder: 2,
    title: "異能の打てる捕手",
    subtitle: "走攻守三拍子揃った次世代型スーパー捕手",
    description: "守備・リードだけでなく、足と打撃でも上位打線を担える次世代型捕手。こんな捕手は滅多にいない稀有な存在。既成概念を壊し、「捕手はこうあるべき」を再定義するイノベーター。",
    traits: ["三拍子揃い", "次世代型", "イノベーター", "唯一無二"],
    emoji: "⭐", comparePlayer: "甲斐拓也・大城卓三タイプ", color: "bg-purple-700",
  },
  c_veteran: {
    id: "c_veteran",
    position: "C", positionLabel: "捕手",
    battingOrder: 7,
    title: "ベテランの知将捕手",
    subtitle: "長年の経験から培った頭脳でゲームをコントロール",
    description: "キャリアを重ねるごとに輝きを増す経験と頭脳の塊。ピッチャーの心理を読み、相手打者の弱点を把握し、試合の流れを常に掌握している。「あの捕手が出てきたら安心」と誰もが思う最高の信頼者。",
    traits: ["ベテランの知恵", "ゲームメイカー", "信頼の塊", "経験値MAX"],
    emoji: "🎓", comparePlayer: "谷繁元信・里崎智也タイプ", color: "bg-amber-800",
  },

  // ============================================================
  // ⚾ BATTERS — 一塁手 (1B)
  // ============================================================
  "1b_cleanup": {
    id: "1b_cleanup",
    position: "1B", positionLabel: "一塁手",
    battingOrder: 4,
    title: "4番一塁手",
    subtitle: "チームの軸として勝負強いアーチスト",
    description: "1塁を守りながら、打席では4番の重責を担うスラッガー。長打力で相手投手にプレッシャーをかけ、走者を一掃するホームランを打てる存在。ファーストならではの守備での存在感も抜群。",
    traits: ["4番打者", "スラッガー", "勝負強い", "チームの核"],
    emoji: "💪", comparePlayer: "ブランコ・村上宗隆(一塁版)タイプ", color: "bg-red-700",
  },
  "1b_slugger": {
    id: "1b_slugger",
    position: "1B", positionLabel: "一塁手",
    battingOrder: 3,
    title: "長距離砲",
    subtitle: "一発で試合をひっくり返す破壊力の持ち主",
    description: "打席に入るだけで相手バッテリーが戦略を変えてくる。ホームランを量産し、シーズンを通してリーグの話題を独占する本物の長距離砲。「打った瞬間に分かる」打球を生み出す鉄の腕。",
    traits: ["超長距離砲", "ホームランアーティスト", "破壊力", "威圧感"],
    emoji: "💣", comparePlayer: "クロマティ・王貞治タイプ", color: "bg-orange-700",
  },
  "1b_contact": {
    id: "1b_contact",
    position: "1B", positionLabel: "一塁手",
    battingOrder: 3,
    title: "コンタクトヒッター",
    subtitle: "高打率とシュアなバッティングで繋ぐ3番打者",
    description: "ホームランより安打にこだわるコンタクトのプロ。打率を安定させ、繋ぎの役割を果たしながら、ここぞの場面では長打も打てる万能型。「打てる1塁手」として相手から一目置かれる存在。",
    traits: ["高打率", "コンタクト重視", "繋ぎの達人", "安定感"],
    emoji: "🎯", comparePlayer: "鈴木誠也・坂本勇人タイプ", color: "bg-green-700",
  },

  // ============================================================
  // ⚾ BATTERS — 二塁手 (2B)
  // ============================================================
  "2b_leadoff": {
    id: "2b_leadoff",
    position: "2B", positionLabel: "二塁手",
    battingOrder: 1,
    title: "電光石火の1番打者",
    subtitle: "俊足と出塁率でチームに活力を与えるリードオフマン",
    description: "足とバットでチームを勢いづけるスピードスター。高い出塁率と盗塁でかき回し、相手チームに「この試合はきつい」と思わせる最高の先鋒。試合の流れを作るのが一番好き。",
    traits: ["リードオフマン", "俊足", "高出塁率", "チームの起点"],
    emoji: "⚡", comparePlayer: "西岡剛・福本豊タイプ", color: "bg-yellow-600",
  },
  "2b_connector": {
    id: "2b_connector",
    position: "2B", positionLabel: "二塁手",
    battingOrder: 2,
    title: "繋ぎの二塁手",
    subtitle: "バントも長打もこなせる万能な2番打者",
    description: "「繋ぐ」ことに命をかけるプロフェッショナル。バントで走者を進めることも、流し打ちで右方向に打つことも、状況に応じて使い分ける高い適応力が強み。チームの機動力野球の中心的存在。",
    traits: ["繋ぎ上手", "状況判断力", "バント職人", "機動力野球の核"],
    emoji: "🔗", comparePlayer: "辻発彦・鳥谷敬タイプ", color: "bg-teal-600",
  },
  "2b_clutch": {
    id: "2b_clutch",
    position: "2B", positionLabel: "二塁手",
    battingOrder: 2,
    title: "勝負強い二塁手",
    subtitle: "ここぞの場面で必ず仕事をする2番の職人",
    description: "小柄でも大一番での働きは誰にも負けない。勝負どころで必ず決める「持っている」タイプ。打撃だけでなく、守備でもビッグプレーを連発し、試合を決定づけるシーンに必ず登場する。",
    traits: ["クラッチヒッター", "勝負強い", "守備でも魅せる", "ゲームチェンジャー"],
    emoji: "🌟", comparePlayer: "井端弘和・田中賢介タイプ", color: "bg-purple-600",
  },
  "2b_defensive": {
    id: "2b_defensive",
    position: "2B", positionLabel: "二塁手",
    battingOrder: 8,
    title: "守備の名手",
    subtitle: "鉄壁の守備でチームを支える黄金グラブ",
    description: "打撃より守備こそが自分の使命と信じる守備職人。難しいゴロをアウトにしたり、ダブルプレーを完璧に仕上げた瞬間が最高の喜び。「打てなくても守れれば試合に出られる」を体現する鉄壁の守備。",
    traits: ["守備職人", "ゴールデングラブ級", "ダブルプレーの名人", "黒子"],
    emoji: "🥊", comparePlayer: "菊池涼介・井端弘和タイプ", color: "bg-slate-600",
  },

  // ============================================================
  // ⚾ BATTERS — 三塁手 (3B)
  // ============================================================
  "3b_cleanup": {
    id: "3b_cleanup",
    position: "3B", positionLabel: "三塁手",
    battingOrder: 4,
    title: "4番サードの主砲",
    subtitle: "長打力と守備力を兼ね備えた真の4番打者",
    description: "サードを守りながら4番の重責を担う万能スラッガー。長打力と守備力が高次元で融合した、野球選手としての理想形に近い存在。大一番の打席でこそ真価を発揮し、チームを優勝に導く。",
    traits: ["真の4番", "万能型", "大一番に強い", "チームの象徴"],
    emoji: "👑", comparePlayer: "松田宣浩・長嶋茂雄タイプ", color: "bg-gold-500",
  },
  "3b_5spot": {
    id: "3b_5spot",
    position: "3B", positionLabel: "三塁手",
    battingOrder: 5,
    title: "5番の力強いサード",
    subtitle: "4番を繋ぐ勝負強い5番打者",
    description: "4番打者をサポートしながら、自らも長打を放てる頼れる5番打者。勝負どころでの粘り強さと、長打力でチームに貢献し続ける。守備でもサードの難しいゴロを確実に処理する職人的な一面も。",
    traits: ["5番の力強さ", "勝負強い", "長打力", "守備職人"],
    emoji: "💪", comparePlayer: "中田翔・内川聖一タイプ", color: "bg-orange-600",
  },
  "3b_contact": {
    id: "3b_contact",
    position: "3B", positionLabel: "三塁手",
    battingOrder: 3,
    title: "3番サードのスマートヒッター",
    subtitle: "高打率と適度な長打力を兼ねた知的な打者",
    description: "単純な力打ちより、状況を読んだ知的なバッティングが持ち味。高い出塁率と適度な長打力を持ち、3番打者として最もバランスが取れたタイプ。守備でも読みのよさが光る。",
    traits: ["スマートヒッター", "高打率", "状況判断力", "バランス型"],
    emoji: "🧩", comparePlayer: "村田修一・宮崎敏郎タイプ", color: "bg-blue-600",
  },
  "3b_slugger": {
    id: "3b_slugger",
    position: "3B", positionLabel: "三塁手",
    battingOrder: 4,
    title: "超重量級サードスラッガー",
    subtitle: "スタジアムを揺るがすホームランを量産する鉄砲玉",
    description: "打席に入るだけで外野が一歩下がる超重量級スラッガー。ひとたびミートすると、どのスタジアムでもスタンドに放り込む破壊力は規格外。守備の課題があっても、バットで全てを解決できる。",
    traits: ["超重量級", "ホームラン量産", "規格外の破壊力", "恐怖の4番"],
    emoji: "💣", comparePlayer: "清原和博・村上宗隆タイプ", color: "bg-red-900",
  },

  // ============================================================
  // ⚾ BATTERS — 遊撃手 (SS)
  // ============================================================
  ss_leadoff: {
    id: "ss_leadoff",
    position: "SS", positionLabel: "遊撃手",
    battingOrder: 1,
    title: "俊足の1番ショート",
    subtitle: "守備と足でチームを牽引するリードオフマン",
    description: "ショートを守りながら1番を打てる究極のトップオブザオーダー。守備ではチームの要として難しいプレーを軽々とこなし、打席では高出塁率と俊足でかき回す。こんな選手がいるチームはとにかく強い。",
    traits: ["守備の要", "リードオフ", "俊足", "万能選手"],
    emoji: "⚡", comparePlayer: "坂本勇人・今宮健太タイプ", color: "bg-yellow-700",
  },
  ss_2spot: {
    id: "ss_2spot",
    position: "SS", positionLabel: "遊撃手",
    battingOrder: 2,
    title: "知的な2番ショート",
    subtitle: "高い野球IQで試合をコントロールする中心選手",
    description: "野球IQの高さがずば抜けた2番ショート。送りバント、エンドラン、ヒットエンドラン、進塁打と状況に応じて完璧な仕事をします。監督の意図を完全に理解し、チームの戦術の中核を担う。",
    traits: ["野球IQ高い", "2番の職人", "状況判断力", "戦術の体現者"],
    emoji: "🧠", comparePlayer: "荒木雅博・藤田一也タイプ", color: "bg-blue-700",
  },
  ss_anchor: {
    id: "ss_anchor",
    position: "SS", positionLabel: "遊撃手",
    battingOrder: 7,
    title: "守備の鬼ショート",
    subtitle: "超鉄壁守備でチームを支える縁の下の主役",
    description: "「守備だけでも試合に出る価値がある」と言わしめる守備の鬼。どんな難しいゴロも確実にアウトにし、「あの守備がなければ負けていた」という試合を無数に積み重ねてきた。地味だが、最も欠かせない選手。",
    traits: ["守備の鬼", "職人", "縁の下の力持ち", "チームに欠かせない"],
    emoji: "🛡️", comparePlayer: "川相昌弘・本多雄一タイプ", color: "bg-slate-700",
  },
  ss_allround: {
    id: "ss_allround",
    position: "SS", positionLabel: "遊撃手",
    battingOrder: 3,
    title: "万能型スーパーショート",
    subtitle: "打も守も走もすべてこなせる理想のショートスト",
    description: "攻守走すべてでチームトップクラスのスーパー遊撃手。どのポジションでも活躍できるが、ショートが最も輝ける場所だと分かっている。チームの象徴として長年活躍できる稀有な存在。",
    traits: ["三拍子揃い", "チームの象徴", "万能型", "長期活躍型"],
    emoji: "🌟", comparePlayer: "坂本勇人・松井稼頭央タイプ", color: "bg-purple-700",
  },

  // ============================================================
  // ⚾ BATTERS — 左翼手 (LF)
  // ============================================================
  lf_cleanup: {
    id: "lf_cleanup",
    position: "LF", positionLabel: "左翼手",
    battingOrder: 4,
    title: "レフトの主砲",
    subtitle: "破壊力抜群の長打でチームを引っ張るスラッガー",
    description: "レフトスタンドにホームランを叩き込む快感を誰より知っている4番スラッガー。打席でのオーラは他の打者とは段違い。相手投手が「できれば勝負したくない」と思わせる威圧感を放つ。",
    traits: ["4番の威圧感", "長距離砲", "スラッガー", "レフトの主砲"],
    emoji: "💪", comparePlayer: "金本知憲・中村紀洋タイプ", color: "bg-red-700",
  },
  lf_7spot: {
    id: "lf_7spot",
    position: "LF", positionLabel: "左翼手",
    battingOrder: 7,
    title: "7番の堅実なレフト",
    subtitle: "地道に仕事をこなすチームの縁の下の力持ち",
    description: "派手さはないが、確実にアウトにならず適時打を放ち、守備でもミスのない安定したプレーヤー。「地味だけど外せない」という7番の典型。コツコツと積み上げてきたものが試合で活きる。",
    traits: ["堅実プレー", "確実性", "安定感", "地味な強さ"],
    emoji: "⚾", comparePlayer: "赤星憲広・西岡剛タイプ", color: "bg-green-700",
  },
  lf_contact: {
    id: "lf_contact",
    position: "LF", positionLabel: "左翼手",
    battingOrder: 5,
    title: "コンタクトレフト",
    subtitle: "高打率とスピードで繋ぎながらも長打も狙える5番",
    description: "打率を稼ぎながら走塁でも魅せる万能レフト。状況を読んで長打を打ったり、流し打ちで繋いだりと引き出しの多さが持ち味。5番として強打者と繋ぎ役の両方をこなせるユーティリティ型スラッガー。",
    traits: ["高打率", "走れるレフト", "5番の万能性", "引き出し豊富"],
    emoji: "🎯", comparePlayer: "福留孝介・青木宣親タイプ", color: "bg-teal-600",
  },

  // ============================================================
  // ⚾ BATTERS — 中堅手 (CF)
  // ============================================================
  cf_leadoff: {
    id: "cf_leadoff",
    position: "CF", positionLabel: "中堅手",
    battingOrder: 1,
    title: "センターのリードオフマン",
    subtitle: "広大なセンターを守り足でチームを引っ張る先鋒",
    description: "広大なセンターを守りながら、足と出塁率で試合をかき回すチームの起爆剤。「この試合はこの選手が出塁しないと始まらない」という1番打者の理想形。盗塁でプレッシャーをかけ続ける。",
    traits: ["センターの要", "俊足盗塁王", "リードオフ", "チームの起爆剤"],
    emoji: "🏃", comparePlayer: "福本豊・赤星憲広タイプ", color: "bg-green-600",
  },
  cf_3spot: {
    id: "cf_3spot",
    position: "CF", positionLabel: "中堅手",
    battingOrder: 3,
    title: "万能型3番センター",
    subtitle: "スピードとパワーを兼ねた打線の中心",
    description: "スピードと長打力を高いレベルで兼ね備えた理想の3番打者。センターを守る守備力と広い守備範囲も持ち合わせており、攻守にわたりチームを引っ張る。スター性と実力が両立した選手。",
    traits: ["スピード&パワー両立", "3番の理想形", "守備も一流", "チームスター"],
    emoji: "⭐", comparePlayer: "イチロー・柳田悠岐タイプ", color: "bg-blue-700",
  },
  cf_defensive: {
    id: "cf_defensive",
    position: "CF", positionLabel: "中堅手",
    battingOrder: 8,
    title: "守備の名手センター",
    subtitle: "グラウンドを走り回り試合を救う守備の神様",
    description: "どんな飛球も捕ってしまう広い守備範囲と確実性が誇り。「今日、あのホームランを防いだのはあの選手だ」という試合を数え切れないほど経験してきた守備職人。打撃より守備で生きる道を選んだプロ。",
    traits: ["守備の神様", "広い守備範囲", "走力抜群", "縁の下のスーパーヒーロー"],
    emoji: "🦅", comparePlayer: "和田一浩・秋山幸二タイプ", color: "bg-slate-600",
  },
  cf_allround: {
    id: "cf_allround",
    position: "CF", positionLabel: "中堅手",
    battingOrder: 3,
    title: "完全無欠のセンター",
    subtitle: "打走守すべて一流のフランチャイズプレーヤー",
    description: "打率・本塁打・打点・盗塁・守備すべてにおいてリーグトップクラス。何十年に一度現れる規格外の天才型センター。チームの象徴として、ファンから永遠に愛され続ける究極の選手。",
    traits: ["完全無欠", "規格外", "フランチャイズプレーヤー", "伝説"],
    emoji: "👑", comparePlayer: "イチロー・松井秀喜タイプ", color: "bg-gold-500",
  },

  // ============================================================
  // ⚾ BATTERS — 右翼手 (RF)
  // ============================================================
  rf_3spot: {
    id: "rf_3spot",
    position: "RF", positionLabel: "右翼手",
    battingOrder: 3,
    title: "3番ライトの強打者",
    subtitle: "パワーとアベレージを高いレベルで両立する3番",
    description: "ライトの強肩を活かしながら、3番打者として長打力と打率のバランスが最高の打者。外野からの返球で走者をアウトにするプレーも得意とし、攻守両面でチームに貢献し続ける。",
    traits: ["強肩ライト", "3番の完成形", "攻守両立", "クラッチ力"],
    emoji: "🎯", comparePlayer: "鈴木誠也・イチロータイプ", color: "bg-blue-600",
  },
  rf_cleanup: {
    id: "rf_cleanup",
    position: "RF", positionLabel: "右翼手",
    battingOrder: 4,
    title: "ライトの主砲",
    subtitle: "右方向にもホームランを放つ規格外の4番打者",
    description: "右方向への逆方向のホームランも普通に打てる技術と力の持ち主。相手投手の心理を読み、どのコースにも対応できる完成されたスラッガー。試合の流れを一発でひっくり返す能力は誰にも負けない。",
    traits: ["万能スラッガー", "右方向にも長打", "4番の貫禄", "ゲームチェンジャー"],
    emoji: "💥", comparePlayer: "福留孝介・松井秀喜タイプ", color: "bg-red-700",
  },
  rf_power: {
    id: "rf_power",
    position: "RF", positionLabel: "右翼手",
    battingOrder: 5,
    title: "豪快なパワーライト",
    subtitle: "スタンドにぶち込む力強さが売りの5番打者",
    description: "打球がライトスタンドに消えた瞬間の快感を追い求める真のホームランハンター。多少三振が多くても、一発で試合を変えられる破壊力で相手を脅し続ける。「このバッターが怖い」と言われることが勲章。",
    traits: ["パワーヒッター", "ホームランハンター", "破壊力", "恐怖の5番"],
    emoji: "💣", comparePlayer: "ロペス・デストラーデタイプ", color: "bg-orange-700",
  },

  // ============================================================
  // ⚾ BATTERS — 指名打者 (DH)
  // ============================================================
  dh_cleanup: {
    id: "dh_cleanup",
    position: "DH", positionLabel: "指名打者",
    battingOrder: 4,
    title: "打撃に専念する4番DH",
    subtitle: "打撃一本に全エネルギーを注ぐ最強の指名打者",
    description: "守備を捨てて打撃に全てをかける究極のスペシャリスト。DHというポジションをエリートとして誇りに思い、打席に入るたびに全エネルギーを爆発させる。打撃に特化したからこそ到達できる境地がある。",
    traits: ["打撃のスペシャリスト", "4番の重責", "全力打撃", "DH職人"],
    emoji: "🔨", comparePlayer: "Frank Thomas・中村剛也タイプ", color: "bg-red-800",
  },
  dh_5spot: {
    id: "dh_5spot",
    position: "DH", positionLabel: "指名打者",
    battingOrder: 5,
    title: "重量級DH",
    subtitle: "一発で試合を変えられる5番指名打者",
    description: "4番を補完しながら自らも長打を狙える重量級打者。「4番より怖い5番がいる打線は最強」という格言を体現している。DHとして長年キャリアを積み上げてきた経験が打撃のすべてに活きている。",
    traits: ["重量級", "補完する5番", "長打力", "キャリアの集大成"],
    emoji: "🏋️", comparePlayer: "小笠原道大・中村剛也タイプ", color: "bg-orange-800",
  },
  dh_veteran: {
    id: "dh_veteran",
    position: "DH", positionLabel: "指名打者",
    battingOrder: 4,
    title: "ベテランDHの職人",
    subtitle: "長年の経験と技術が詰まった打撃職人",
    description: "全盛期の足や守備は失っても、打撃の技術と経験値はキャリア最高峰に達したベテランDH。長年かけて磨き上げた打撃技術は若手には絶対に真似できない域に達している。チームの精神的支柱でもある。",
    traits: ["打撃職人", "経験の結晶", "精神的支柱", "技術の極致"],
    emoji: "🎓", comparePlayer: "野村克也・門田博光タイプ", color: "bg-amber-700",
  },
};

export const resultIds = Object.keys(results);
