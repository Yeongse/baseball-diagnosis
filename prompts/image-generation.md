# 診断結果画像生成プロンプト集

## 共通デザインプロンプト（全画像に適用）

以下のベースプロンプトを、各診断結果の個別プロンプトの**前**に付与してください。

```
A dynamic illustration of a Japanese professional baseball player in the middle of an action moment, designed for a "Scout Report" player assessment card. Aspect ratio 3:4, vertical composition. The art style is bold and expressive — thick confident brushwork, visible motion energy, and dramatic angles inspired by modern sports editorial art and manga-influenced action illustration. Crop freely: close-up on the upper body during a pitch release, a dramatic mid-swing from the waist up, a diving catch filling the frame — choose whatever crop best captures the defining moment and personality of the player type. Color palette anchored in navy blue (#1B3A5C) and gold (#C5973E) with warm paper cream (#FDFBF7) tones, plus accent colors specific to each result. The player is rendered with a semi-abstract/stylized face (no specific features) to keep it universal. The composition is filled with kinetic energy — speed lines, motion blur, impact sparks, wind effects, or particle trails where appropriate. Background is atmospheric and supports the mood (color gradients, abstract energy shapes, or symbolic motifs — never a detailed realistic scene). No text, no logos. The overall feel is premium, energetic, and collectible — like a modern Topps Project 2020 or premium manga illustration card.
```

---

## 個別プロンプト一覧

各画像は `{共通デザインプロンプト} + {個別プロンプト}` の組み合わせで生成してください。
ファイル名は `{id}.webp` で保存し、`/public/images/results/` に配置します。

---

### SP（先発投手）— 11種

#### sp_power_ace — 剛腕エース
```
Cropped from low angle, mid-pitch release — the throwing arm whips forward at maximum velocity, fingers snapping off the ball with visible shockwave rings. Veins visible on the forearm. Deep crimson and black background with radial burst lines emanating from the ball. The entire frame shakes with raw power. Intimidating presence that fills every inch of the canvas.
```

#### sp_strikeout — 奪三振マシン
```
Extreme close-up on the hand at the exact moment of ball release — fingertips digging into the seams, the ball spinning with visible rotation lines and electric blue speed trails spiraling off it. The pitcher's face partially visible behind the arm, eyes locked on the target. Three ghosted "K" shapes dissolve into the dark background. Cold, surgical intensity.
```

#### sp_finesse — 技巧派エース
```
Mid-delivery, balanced perfectly on one leg — the free hand extends forward with fingers spread like a conductor's baton. Multiple translucent pitch trajectories (curve, changeup, cutter) fan out from the hand like a peacock's tail. Cool blue and silver tones. Chess-piece silhouettes faintly embedded in the background. Calm amid the storm of complexity.
```

#### sp_control — 精密機械
```
The pitcher mid-release, cropped tight from the chest up — the throwing hand guides the ball with mechanical precision toward a glowing strike-zone grid hovering in the foreground. Thin targeting reticle lines converge on the corner. Steel-blue and chrome tones. The face is mask-like in concentration. Every muscle fiber aligned. Zero waste, zero error.
```

#### sp_young — 若き剛腕
```
Explosive delivery from a slightly wild angle — the arm trails sparks and raw golden energy like an uncut diamond cracking open. Cherry blossom petals caught in the violent wind of the pitch. Purple and bright gold tones. The body is slightly off-balance, imperfect but thrilling. Upward-surging composition — everything about this image screams untapped potential about to detonate.
```

#### sp_veteran — ベテラン先発
```
The pitcher at the peak of a deliberate, crafted delivery — arm coming forward with calm authority, golden autumn light streaming from behind. Warm amber and sepia tones. The weathered hands grip the ball with decades of muscle memory. Faded overlapping silhouettes of younger versions of the same pitcher recede into the background. Wisdom in motion.
```

#### sp_groundball — グラウンドボーラー
```
Follow-through moment — the pitcher's hand has just released a sinker, the ball shown diving sharply downward with heavy green-brown trajectory lines plunging into the earth. Dirt particles spray upward from the implied ground contact. Earthy olive and clay tones. The pitcher's body leans forward in efficient follow-through, already in fielding position. Gravitational pull made visible.
```

#### sp_lefty — 技巧派サウスポー
```
The left arm sweeps across the frame in a fluid, painterly arc — the ball releases from an extreme cross-body angle that warps the perspective. Teal and aquamarine watercolor-like washes trail behind the arm's motion path. Multiple curving pitch trajectories weave around each other like calligraphy strokes. The composition itself feels asymmetric and off-kilter. Art disguised as athletics.
```

#### sp_consistent — 安定感の権化
```
The pitcher captured in a perfectly symmetrical delivery — body centered in frame, arm angle identical to a ghosted overlay of the previous pitch behind. A pendulum or metronome shape subtly embedded in the background. Calm cyan and steel tones. The repetition itself is the drama. Like a Swiss watch mechanism in human form — mesmerizing in its precision.
```

#### sp_submarine — サブマリン
```
Dramatic upward-angle shot from near ground level — the pitcher's arm sweeps along the dirt, releasing the ball from below the knee. The ball rises unnaturally upward with swirling indigo and deep purple energy trails. The body is contorted in a way that defies normal anatomy — arm nearly scraping the mound. Otherworldly, mysterious. A creature from the deep emerging.
```

#### sp_twoway — 二刀流エース
```
Split-frame composition — left half: explosive pitch release with the arm at full extension, crimson energy radiating from the ball. Right half: devastating bat swing at the moment of contact, golden impact burst at the sweet spot. A bold diagonal gold line divides the halves. Both halves share the same body, creating a surreal double-exposure effect. Impossible duality made flesh.
```

---

### RP（リリーフ投手）— 8種

#### rp_setup — 8回の男
```
The reliever mid-stride sprinting in from the bullpen gate — legs driving hard, arm pumping, eyes burning with locked-in focus. The number "8" glows faintly in the sunset-orange sky behind. The transition from warm dusk tones (behind) to cold night-game blue (ahead) creates a gradient across the image. The bridge between day and darkness, the link in the chain.
```

#### rp_power — 剛腕リリーフ
```
Explosive close-up on the upper body at the instant of pitch release — every muscle fiber visible, the arm a blur of motion. Concentrated red-orange fire erupts around the hand like a small detonation. The frame seems to crack from the force. Compressed, intense — maximum destruction in a single moment. A hand grenade with a pitching arm.
```

#### rp_long — ロングリリーフ
```
The pitcher in mid-delivery, shown with 3-4 translucent afterimages of previous innings stacked behind — each slightly more faded, suggesting sustained effort across many frames. Green and earth tones with an endurance-marathon quality. A towel draped on one shoulder catches the wind. The body shows tireless readiness — always warmed up, always prepared. The unsung marathon runner.
```

#### rp_loogy — 左のワンポイント
```
Tight crop on the left hand gripping the ball in a specialty pitch grip — fingertips pressing into seams with surgical precision. A narrow spotlight beam illuminates only the pitcher, everything else falling into deep indigo shadow. A single batter's silhouette is visible in the darkness. The entire world narrowed to this one matchup. A sniper's scope view — one shot, one target.
```

#### rp_specialist — 場面限定スペシャリスト
```
The pitcher mid-delivery on the mound with chaos swirling around — ghosted runners on every base, abstract crowd noise rendered as violet energy waves — but the pitcher is wrapped in a bubble of absolute stillness. Key-and-lock shapes dissolve into the background. The eye of the hurricane. The one person designed for exactly this impossible moment.
```

#### rp_fire — ファイアーマン
```
The reliever charging in from the bullpen in a full sprint — behind, abstract orange-red flames engulf the background. Where the pitcher runs, the flames extinguish into cool blue calm. The body is in aggressive running pose, glove tucked, jaw set. A firefighter's silhouette overlaps with the pitcher's form. Chaos to order. The fire goes out when this man arrives.
```

#### rp_workhorse — 連投型タフネス
```
The pitcher's throwing arm dominates the frame — massive, armored with abstract iron-plate and chain textures woven into the skin. Multiple overlapping delivery poses create a time-lapse effect of endless repetition. Stone gray and forge-fire orange tones. The face shows fatigue but absolute refusal to stop. Industrial rivets and gear motifs in the background. An engine that never shuts down.
```

#### rp_multi — マルチイニングリリーフ
```
The pitcher morphing between three different pitch deliveries in one fluid motion — fastball, curve, changeup — each rendered as a different-colored ghost (emerald, teal, jade). A Swiss Army knife unfolds abstractly in the background. The body shifts and adapts like water. No fixed form — pure adaptability captured in motion.
```

---

### CP（クローザー）— 4種

#### cp_power — 剛腕クローザー
```
Low-angle shot: the closer mid-pitch under harsh stadium lights, the ball already leaving the hand trailing deep crimson fire. Arms crossed silhouette ghosted behind the active pose. Massive iron fortress gates close behind the pitcher. The lights create a halo-backlit effect. The ninth inning incarnate — nothing passes this point. Final boss energy, game over.
```

#### cp_finesse — 技巧派クローザー
```
Close-up on the pitcher's face and throwing hand — eyes razor-sharp, calculating, dissecting the batter with surgical analysis. Chess pieces scatter and shatter in the background. The ball leaves the hand with cold, precise silver energy trails — no fire, no explosion, just lethal accuracy. Deep navy and chrome. A scalpel, not a hammer. The kill is clean and quiet.
```

#### cp_mental — 鋼のメンタルクローザー
```
The closer stands on the mound, centered and still — but the world around is in violent motion: abstract crowd roar, swirling bases-loaded chaos, pressure waves crashing against an invisible barrier around the pitcher. Inside the barrier: zen-like calm, slate gray stillness. The pitcher's silhouette is literally made of stone or steel texture. An immovable monolith in a hurricane.
```

#### cp_situational — 変則クローザー
```
The pitcher's delivery is captured mid-motion from a disorienting angle — the arm comes from an unexpected direction, the body contorts in a way that breaks normal rhythm. Fuchsia and magenta spirals distort the space around the pitcher like a visual illusion. Playing cards float and scatter. The batter's confused silhouette is visible, completely off-balance. Reality itself is being bent.
```

---

### C（捕手）— 7種

#### c_2spot — 打てる2番捕手
```
Dynamic dual-exposure: the catcher's crouching receiving pose overlaps with an explosive batting swing in the same frame. The gear (mask, chest protector) shatters outward like breaking glass as the swing emerges. Purple and electric cyan tones. The old mold is literally cracking apart. A new breed of catcher — offense meets defense in one volatile frame.
```

#### c_cleanup — 4番捕手
```
The catcher at the instant of a massive swing — bat connecting with ball, golden impact burst — but the chest protector and shin guards are still visible on the body, showing the duality. Teal and deep green tones with a crown shape forming in the impact sparks above. Brain and brawn fused. The king doesn't remove his armor to destroy you.
```

#### c_leader — 司令塔キャッチャー
```
Cropped from behind and above: the catcher crouches, one hand giving complex signs, tactical overlay lines radiating outward to every fielder position like a nerve network. Teal and strategic blue energy flows through the connections. The catcher is the brain — the glowing hub of a vast web. A general's war-room map overlaid on a baseball diamond. Command and control.
```

#### c_clutch — 勝負強い捕手
```
The moment of bat-to-ball contact — tight crop on the hands and bat, ball launching off the sweet spot with understated golden sparks (not an explosion — a precise, deliberate impact). The scoreboard behind shows a one-run game in the 9th. Teal and warm amber tones. No panic, no drama — just the calm certainty of a player who was literally built for this moment.
```

#### c_veteran — ベテラン知将捕手
```
Close-up on the catcher's weathered eyes peering over the mitt, studying the batter with decades of accumulated knowledge. The mask pushed up on the forehead shows scratches and wear. Warm amber and aged-leather tones. Ancient scroll patterns and faded game-log data stream subtly behind the eyes. A thousand games compressed into this one knowing look. The eyes that have seen everything.
```

#### c_defensive — 守備型捕手
```
The catcher mid-block — body slamming down to stop a ball in the dirt, gear scraping the ground, dust exploding upward. The ball ricochets off the chest protector. Immediately the hand is already transferring to throw — a blur of motion. Slate and steel tones with sparks where gear meets dirt. A human fortress. Nothing gets through. Self-sacrifice as art form.
```

#### c_9spot — 投手リード全振り捕手
```
Shot from behind the catcher — the framing hand guides the pitch into the perfect corner of the zone, the mitt barely moving. The pitcher is visible in the background, a warm golden connection-line linking pitcher and catcher like a lifeline. Dark slate tones with that single warm glow. Invisible to everyone, indispensable to one. The unseen hand that guides everything.
```

---

### 1B（一塁手）— 7種

#### 1b_slugger — 3番の長距離砲
```
The instant after contact — the bat follows through violently, the ball is already a shrinking dot trailing orange-gold fire into the upper atmosphere. The batter's body torques with maximum rotational force, feet leaving the ground slightly. Impact shockwave rings ripple outward from where the bat met the ball. Pure destruction. A human catapult. The ball may never come down.
```

#### 1b_cleanup — 4番ファースト
```
The batter mid-swing in the most decisive moment — bat connecting with ball, crimson energy erupting at the contact point. The "4" is burned into the background like a brand. Heavy chains extend from the batter's shoulders into the darkness — the weight of the entire team's hopes. Deep red and iron-dark tones. The swing that carries everyone. Atlas with a bat.
```

#### 1b_5spot — パワー5番ファースト
```
The batter in the on-deck circle, taking a practice swing that cracks the air — visible distortion lines from the bat speed. The 4th batter is a shadow ahead, but this player looms equally large. Orange and bronze tones with a "hidden weapon being unsheathed" quality. Eyes narrow with dangerous calm. Walking him was a mistake. The insurance policy that pays out in home runs.
```

#### 1b_contact — 巧打の一塁手
```
The batter mid-swing with a compact, level stroke — the ball rockets off the bat as a clean white line drive trailing green energy. Multiple spray-chart trajectory lines fan out in all directions from the bat, showing mastery of every angle. Natural green and warm wood tones. A craftsman's chisel striking precisely. No wasted movement, every swing has purpose. Artisan at the plate.
```

#### 1b_veteran — ベテラン一塁手
```
The batter in a refined, economical swing — minimal effort, maximum result. The ball launches with quiet amber authority. Warm golden autumn light bathes the scene. Faded silhouettes of the same player at different younger ages cascade behind. Oak-ring patterns and aged-wine tones in the background. The swing has been distilled over decades into its purest, most potent form.
```

#### 1b_defensive — 守備堅実ファースト
```
Maximum stretch at first base — the first baseman's foot anchored on the bag, body fully extended horizontally, glove snapping a short-hop throw out of the dirt at the last possible instant. Dirt particles frozen in mid-air. Stone gray and earth tones. Close crop on the glove hand and the ball entering the pocket. The impossible scoop — routine for this player. The infield's safety net.
```

#### 1b_9spot — 9番の守備固めファースト
```
The player steps from dugout shadow into the bright field light — the transition creates a dramatic light-to-dark split across the frame. The glove is already open, ready. Muted stone and gray tones with a single shaft of warm light catching the player's face. No fanfare. No spotlight. But the moment demands this quiet, reliable presence. The silent guardian enters.
```

---

### 2B（二塁手）— 7種

#### 2b_leadoff — 電光石火の1番打者
```
Full sprint between bases — the body is a yellow-gold streak of motion blur, legs pumping so fast they dissolve into speed lines. Dust explodes behind each footstep. Lightning bolt energy crackles around the feet. Bright yellow and electric white tones. The player is barely solid — more energy than matter. The spark plug that ignites the entire lineup.
```

#### 2b_connector — 繋ぎの二塁手
```
The batter mid-bunt — bat angled perfectly, the ball kissing the bat and rolling gently forward. Behind, a runner launches from first in a blur. Teal chain-link energy connects the bunter to the advancing runner. Soft green and warm tones. The sacrifice play in motion — the batter diminishes so the team can advance. Selflessness captured in a single frame.
```

#### 2b_power — パワー型セカンド
```
A massive swing from a compact second baseman's frame — the force of the hit literally shatters a translucent silhouette of a "traditional second baseman" behind. Glass-shard effects explode outward. Purple and electric violet energy radiates from the point of contact. The old definition is destroyed. A revolutionary figure smashing expectations with every swing.
```

#### 2b_clutch — 勝負強い二塁手
```
The bat connects with the ball in a tight game situation — the ball shoots through the gap between shortstop and third. Violet and warm gold tones at the exact moment of contact. A faded scoreboard shows a one-run deficit. The batter's expression is ice-cold calm amid the pressure. Hidden ace revealed — the hero nobody expected, arriving exactly on time.
```

#### 2b_balanced — バランス型セカンド
```
Mid-double-play pivot — the second baseman catches the ball at second, spins in one fluid motion, and fires to first. The body is captured in the exact center of this rotation, perfectly balanced. A yin-yang or scale symbol dissolves into the sky-blue background. Every limb is positioned symmetrically. Harmony in motion — the beauty of perfect equilibrium.
```

#### 2b_defensive — 守備の名手セカンド
```
Full horizontal diving catch — the second baseman is parallel to the ground, fully extended, glove reaching for a ground ball at the absolute limit of range. Slate and metallic gold tones. Time is frozen. The ball is millimeters from the glove's web. Gold-medal sparkle on the glove. The most beautiful play in baseball, captured at its apex. Pure defensive art.
```

#### 2b_9spot — 9番のつなぎ役セカンド
```
Close-up on the batter's hands choking up on the bat, fouling off a tough pitch with gritty determination. Pitch count "3-2" glows subtly in the background. Muted zinc and warm gray tones. The body language says: "I will not go down easy." Every pitch is a battle won for the team. The ultimate team player — grinding in obscurity so others can shine.
```

---

### 3B（三塁手）— 8種

#### 3b_leadoff — 俊足サード
```
Headfirst dive into first base — the body is fully airborne, arms outstretched, fingers reaching for the bag. Dust erupts on impact. Yellow and golden lightning-bolt effects trail from the feet. The "hot corner" player with sprinter's speed — an impossible combination captured at its most explosive. Convention-shattering athleticism frozen in flight.
```

#### 3b_2spot — 現代型2番サード
```
Split-second decision moment: the batter is shown in a transitional pose between bunting stance and power swing — one fluid morphing motion. The left half of the body shows bunting form, the right half shows power swing follow-through. Sky blue fading to modern electric tones. Old-school meets new-school in a single frame. The evolution of baseball personified.
```

#### 3b_contact — スマートヒッター3番サード
```
The batter's eyes dominate the upper portion of the frame — intense, calculating, reading the pitch rotation mid-flight. Data visualization overlays and pitch-trajectory analysis lines extend from the pupils. The hands below grip the bat with calm intelligence. Cool blue and cerebral tones. The brain fires before the hands move. Every at-bat is a solved equation.
```

#### 3b_cleanup — 4番サードの主砲
```
Majestic home-run swing at the peak of follow-through — the bat has completed its arc, the ball vanishes into a deep crimson night sky. A crown of golden sparks forms above the batter's helmet. Royal red and dark tones with regal gold accents. Cape-like shadow flows behind the figure. This is THE player — the franchise, the legend. A king's swing.
```

#### 3b_5spot — 力強い5番サード
```
Compact, powerful swing driving the ball into the gap — the bat speed is visible as orange-bronze motion trails. The body is built like a pillar — solid, grounded, immovable. Warm bronze tones with architectural column motifs subtly in the background. Not the flashiest, but the one holding everything up. Remove this pillar and the structure falls.
```

#### 3b_defensive — 守備重視サード
```
Barehanded play on a slow roller — the third baseman scoops the ball with bare fingers while already in a throwing motion, body twisted, arm cocking back. Dirt sprays from the aggressive footwork. Emerald and earth tones with sparks where the ball meets the bare hand. The "hot corner" lives up to its name — reaction speed made visible. Instinct in its purest form.
```

#### 3b_so_type — 強肩守備のサード
```
The throwing arm at full extension — a rocket throw from deep behind third base, the ball becoming a laser beam of emerald-steel light that cuts diagonally across the entire frame toward first. The arm muscles are taut, veins visible. A cannon barrel or railgun charge-up effect on the arm. One extraordinary skill that justifies everything. The arm IS the identity.
```

#### 3b_9spot — 9番守備職人サード
```
The third baseman in perfect fielding position — glove low, weight balanced, eyes tracking a routine ground ball with absolute focus. No drama, no heroics — just textbook fundamentals executed flawlessly. Dark stone and muted earth tones. A brick-wall pattern subtly forms the background. One brick, invisible alone — but remove it and everything collapses. Silent, essential excellence.
```

---

### SS（遊撃手）— 8種

#### ss_leadoff — 俊足の1番ショート
```
Mid-steal slide into second — the body cuts through the air at an angle, one hand reaching for the bag, dust trailing like a comet's tail. Bright gold and star-quality yellow tones. A shooting-star trail arcs behind the runner. Everything is effortless, graceful, impossibly cool. The franchise player — the one the cameras follow. Star power in motion.
```

#### ss_2spot — 知的な2番ショート
```
The shortstop directs traffic — one hand gestures to reposition the outfield, the other holds the glove ready. Tactical grid lines and positioning arrows radiate outward from the player like a chess board coming to life. Navy blue and intellectual silver tones. A conductor mid-symphony, every player moving to this one mind's design. Intelligence as the ultimate weapon.
```

#### ss_allround — 万能型スーパーショート
```
Triple-exposure action: batting swing, diving catch, and sprint-steal layered over each other in perfect harmony. Each exposure uses a different hue — royal purple, metallic gold, platinum silver — creating a prismatic effect. A maxed-out pentagonal radar chart glows behind. The complete player — no weakness, no gap. The standard against which all others are measured.
```

#### ss_cleanup — 打てるショート
```
A towering home-run swing from the shortstop position — the ball launches upward through a shattering glass ceiling effect. Deep red and intense crimson energy at the contact point. A diamond-field position chart shows the SS position glowing bright behind. The impossible made real — a shortstop with cleanup power. A once-in-a-generation collision of skills.
```

#### ss_clutch — 勝負強いショート
```
The bat meets the ball in a precise inside-out swing — the ball threads through the infield gap like a guided missile. No explosion, no drama — just the ball finding the exact right path with cyan-warm precision lines. The batter's expression is professionally calm. An artisan's chisel striking the perfect point. Understated greatness — the professional's professional.
```

#### ss_so_type — 強肩遊撃手
```
Deep in the hole — the shortstop fully extended, body off-balance, back foot leaving the ground — but the throw is already released, a perfect laser beam of emerald-steel light arrowing across the diamond. The body position defies physics. The throw is impossibly accurate despite the impossible body angle. Art in motion — the beauty of the impossible throw, frozen forever.
```

#### ss_defensive — 守備の鬼ショート
```
Close-up on the glove hand executing a spectacular backhanded snag — the ball enters the pocket at the very tip of the web. Dark slate and silver tones. Every finger position is perfect, every leather crease visible. A master craftsman's tool in action. The world narrows to this glove, this ball, this impossible moment of contact. Nothing gets through. Nothing.
```

#### ss_9spot — 9番の守備エキスパートショート
```
The shortstop in ready position between pitches — weight forward, glove open, eyes scanning the entire field with quiet vigilance. A subtle glow of readiness emanates from the body. Zinc and gray tones with a warm core. The player is rooted into the field itself — part of the earth, immovable, permanent. A cornerstone that holds everything together. Remove it and the structure fails.
```

---

### LF（左翼手）— 7種

#### lf_leadoff — スピードスター左翼手
```
Rounding first at full speed — the body leans into the turn, legs a blur of lime-green and electric-yellow motion energy. Wind effects warp the air behind. A rocket exhaust or spark-plug ignition effect at the feet. The player IS kinetic energy — barely touching the ground, always accelerating. The ignition that starts the offensive engine.
```

#### lf_2spot — 出塁型レフト
```
The batter holds back on a borderline pitch — the ball passes just outside the zone, visible as a green trajectory line barely missing the edge. The eyes track it with sniper-scope precision. Green and calm disciplined tones. The hands don't move. The body doesn't flinch. Patience weaponized — the walk is as powerful as the hit. Restraint as strength.
```

#### lf_cleanup — レフトの主砲
```
A monstrous swing — bat connecting with ball, firework-red and gold explosion at the contact point, the ball rocketing into the stands. The crowd behind is rendered as abstract energy-wave eruptions. Bold crimson and fire tones. Theatrical, spectacular, unforgettable. This player doesn't just hit — this player puts on a show. Entertainment value maxed out.
```

#### lf_contact — コンタクトレフト
```
Mid-swing with line-drive contact — multiple colored trajectory lines fan out from the bat in all directions (left field, center, right field, opposite field). Each line represents a different at-bat, a different solution. Teal and warm versatile tones. A painter's palette or Swiss Army knife dissolves into the background. The answer changes every time, but it's always correct.
```

#### lf_balanced — バランス型レフト
```
A clean, effortless catch in left field — the ball settles into the glove with no drama, golden-hour sunset light bathing the scene. Soft green field and warm amber sky. Everything is in its right place — the fielder, the ball, the moment. Zen-garden calm. A balanced rock formation motif in the background. Quiet competence at its most beautiful. Harmony.
```

#### lf_defensive — 守備型レフト
```
Running catch near the foul line — the left fielder is already in position before the ball arrives, having read the play perfectly. The ball drops into the waiting glove. Emerald and earth tones. A radar dish or early-warning system shape subtly in the background. Not reactive — predictive. The catch happened in the mind before it happened on the field. Prevention over cure.
```

#### lf_9spot — 9番のつなぎ役レフト
```
Walking to first after a patient walk — the bat tossed aside casually, the trot unhurried but purposeful. Muted stone and warm gray tones. A small seed-sprouting motif in the background — something small planted that will grow. Not glamorous. Not highlight-reel. But valuable. The quiet investment that compounds over a season.
```

---

### CF（中堅手）— 7種

#### cf_leadoff — センターのリードオフマン
```
Headfirst steal — the center fielder launches from first toward second, body fully airborne, hands reaching for the bag. Explosive speed lines and green-gold energy trail. A cheetah's or falcon's silhouette ghosted into the motion blur. The heartbeat of the team — the pulse that drives everything forward. Pure athletic dynamism at its peak.
```

#### cf_2spot — セカンドリードオフ
```
Hit-and-run execution — the batter makes contact behind the running runner, bat angled to protect the steal. Teal and collaborative warm tones. The runner and batter are connected by gear-meshing energy lines — two parts of one machine moving in sync. The ultimate team player — making everyone around them better through perfect coordination.
```

#### cf_3spot — 万能型3番センター
```
Spectacular leaping catch at the warning track — the body is fully extended skyward, arm reaching above the wall, the ball barely caught in the very tip of the glove's webbing. Brilliant blue and blazing gold tones. A superhero's ascending pose. Below: the wall. Above: the catch. Between: athletic perfection. The poster moment. The highlight reel. Gravity denied.
```

#### cf_allround — オールラウンドセンター
```
Triple-exposure flowing image: a catch, a hit, and a sprint blended together in one continuous watercolor-like motion stream. Sky blue and natural green tones flowing like a river through the compositions. No single skill dominates — everything coexists in harmony. A river that never stops flowing, adapting to every terrain it encounters. The complete outfielder.
```

#### cf_so_type — 守備の鬼センター
```
Full-extension diving catch — body horizontal, parallel to the ground, arm stretched beyond anatomical reason. The ball is caught by the very fingertips of the glove. Emerald and dark dramatic tones. A falling star caught mid-descent. The moment frozen at the absolute apex of impossibility. What others call a highlight, this player calls Tuesday. The impossible, routinized.
```

#### cf_defensive — 守備特化センター
```
Over-the-shoulder catch in a full sprint — the center fielder tracks a deep fly ball, running full speed toward the wall. The vast outfield stretches behind, but this player covers every inch. Slate and steady tones. A lighthouse beam sweeps across the outfield background. The guardian — no fly ball falls in this territory. The compass that never loses north.
```

#### cf_9spot — 9番の俊足センター
```
The center fielder in a relaxed jog back to position after another routine catch — ball secure in glove, body language unhurried. Zinc and peaceful muted tones. A metronome ticks steadily in the background. Just another out. Just another day. Just another example of quiet, consistent excellence. No fanfare needed — the work speaks for itself.
```

---

### RF（右翼手）— 7種

#### rf_leadoff — 俊足強肩ライト
```
The outfielder fields a single and fires a throw to third — the ball becomes a beam of orange-gold light slicing diagonally across the frame. The throwing arm is at full extension, the body torquing. An archer releasing an arrow or a cannon firing — explosive and precise. Both offensive speed and defensive arm combined in one devastating frame.
```

#### rf_2spot — 出塁型ライト
```
A controlled inside-out swing — the ball is guided through the right side with precision placement. Sky blue and composed tones. The trajectory is calculated, not wild — a billiard ball banking off cushions to reach the exact intended pocket. The batter's eyes are calm, calculating. Every at-bat is a chess move. Placement over power, strategy over spectacle.
```

#### rf_3spot — 3番ライトの強打者
```
A powerful swing sending the ball to all fields — three ghosted hit trajectories (pull, center, opposite) fan out from the bat. Royal blue and balanced gold tones. A diamond gemstone's facets catch light in the background. No weaknesses. No gaps. The complete package — the finished product of years of refinement. Flawless quality.
```

#### rf_cleanup — ライトの主砲
```
The batter watches a monster home run leave the park — bat dropping to the side, chin slightly raised. The ball's arc traces a line from bat to the vanishing point of the deep crimson sky. Understated power — the ball is already gone. A throne or pedestal shadow forms beneath the batter's feet. Quiet satisfaction. Veteran confidence. Undeniable dominance.
```

#### rf_power — 豪快パワーライト
```
Maximum-effort uppercut swing — the bat explodes upward at an extreme launch angle, the ball rocketing skyward trailing orange fire and smoke. The batter's entire body is off the ground from the force. Everything is exaggerated — the swing, the angle, the power. TNT detonation at the contact point. Go big or go home. No half measures, ever.
```

#### rf_strong_arm — 強肩守備型ライト
```
Laser throw from deep right field — the ball is a straight emerald-steel beam cutting across the entire diamond. The throwing motion is at maximum extension, muscles straining. A sniper rifle's targeting laser or a railgun's discharge effect. The throw IS the identity — one incredible, game-changing skill that makes everything else irrelevant. The cannon.
```

#### rf_9spot — 9番の堅守ライト
```
Fielding a ball off the right field wall — clean, efficient, textbook. The throw to the cutoff man follows immediately, perfect trajectory. Muted stone and reliable gray tones. A blueprint or technical drawing overlays the fielding sequence. Nothing fancy. Everything correct. Reliability is the rarest quality — this player does the right thing, every single time, without fail.
```

---

### DH（指名打者）— 6種

#### dh_2spot — 出塁型DH
```
The batter holds perfectly still as a borderline pitch passes for ball four — the ball's trajectory barely misses the zone edge. The eyes track the pitch with calculated precision. Purple and composed tones. The hands never moved. A chess player's hand hovering above the piece, choosing NOT to move. Patience weaponized. The walk is the victory.
```

#### dh_3spot — 3番DH
```
Extreme close-up: the batter's eyes are locked on an approaching pitch, everything else dissolving into depth-of-field blur. Violet and deep concentration tones. The world melts away — only the ball exists, only the spinning seams are visible. A meditation state made visual. The flow-state — when focus becomes a superpower, the bat finds the ball by itself.
```

#### dh_cleanup — 4番DH
```
One swing, one purpose: the bat connects with devastating precision — deep crimson impact burst at the sweet spot. No glove in sight, no fielding position referenced. Just the pure art of the swing, perfected beyond mortal limits. A sword master's single decisive slash — one cut, perfectly executed. The culmination of a life dedicated to one thing.
```

#### dh_5spot — 重量級5番DH
```
A mighty swing that seems to bend reality — the bat creates visible shockwaves, the ball disappears with a deep orange-heavy impact trail. The batter is large, imposing, immovable — feet planted like foundations. A sumo wrestler's earth-shaking stomp or an anvil strike. The ground cracks beneath the power. Unstoppable force. Overwhelming mass in motion.
```

#### dh_veteran — ベテランDH
```
The swing is compact, refined, economical — decades of practice distilled into one perfect arc. The ball launches with warm amber authority. The hands show age and wisdom — every callus earned, every grip perfected. Aged-whiskey and fine-wine tones. A master calligrapher's final brush stroke. The swing that only a career of ten thousand at-bats can produce.
```

#### dh_9spot — ベテラン代打兼DH
```
The moment of emergence: the pinch-hitter steps from the dark dugout tunnel into blinding field light, bat in hand, eyes adjusting. Warm amber spotlight catches the face — experienced, sharp, ready for one final at-bat. An actor stepping onto the stage for the last scene. The transition from shadow to light is everything. This at-bat IS everything.
```

---

### UTIL（ユーティリティ）— 3種

#### util_super — スーパーユーティリティ
```
Kaleidoscope composition: the same player appears in 4-5 positions simultaneously — pitching, catching, fielding at short, swinging a bat — each rendered in a different hue (purple, blue, teal, gold, crimson). A prism splits white light into these colors at the center. The player is every position at once. A shapeshifter. A chameleon. The ultimate wild card that fits every hand.
```

#### util_pinch_hitter — 代打の切り札
```
The walk to the plate: emerging from dark dugout shadows, bat resting on the shoulder, eyes already locked on the pitcher. A single amber-gold spotlight carves the figure out of darkness. Everything else — crowd, field, teammates — dissolves into blackness. An ace card materializes ghostly in the background. The hidden weapon revealed. One at-bat. One moment. Everything.
```

#### util_flexible — 何でも屋
```
The player is surrounded by floating equipment — gloves for every position, multiple bats, catcher's gear, pitcher's rosin bag — all orbiting like satellites. The player reaches calmly for whatever is needed next. Neutral slate and adaptable warm tones. A tapestry or quilt pattern where every patch is a different position. The invisible thread that holds the entire team together. Always ready, always needed.
```
