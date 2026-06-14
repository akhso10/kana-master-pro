// === DATA HIRAGANA LENGKAP (Termasuk Dakuon, Handakuon, Youon) ===
const hiraganaData = [
    // Seion (Basic)
    { char: 'あ', romaji: 'a', example: 'あめ (ame)', meaning: 'Hujan', group: 'all' },
    { char: 'い', romaji: 'i', example: 'いぬ (inu)', meaning: 'Anjing', group: 'all' },
    { char: 'う', romaji: 'u', example: 'うみ (umi)', meaning: 'Laut', group: 'all' },
    { char: 'え', romaji: 'e', example: 'えき (eki)', meaning: 'Stasiun', group: 'all' },
    { char: 'お', romaji: 'o', example: 'おちゃ (ocha)', meaning: 'Teh', group: 'all' },
    { char: 'か', romaji: 'ka', example: 'かさ (kasa)', meaning: 'Payung', group: 'all' },
    { char: 'き', romaji: 'ki', example: 'きた (kita)', meaning: 'Utara', group: 'all' },
    { char: 'く', romaji: 'ku', example: 'くるま (kuruma)', meaning: 'Mobil', group: 'all' },
    { char: 'け', romaji: 'ke', example: 'けさ (kesa)', meaning: 'Tadi pagi', group: 'all' },
    { char: 'こ', romaji: 'ko', example: 'こえ (koe)', meaning: 'Suara', group: 'all' },
    { char: 'さ', romaji: 'sa', example: 'さかな (sakana)', meaning: 'Ikan', group: 'all' },
    { char: 'し', romaji: 'shi', example: 'しろ (shiro)', meaning: 'Putih', group: 'all' },
    { char: 'す', romaji: 'su', example: 'すし (sushi)', meaning: 'Sushi', group: 'all' },
    { char: 'せ', romaji: 'se', example: 'せかい (sekai)', meaning: 'Dunia', group: 'all' },
    { char: 'そ', romaji: 'so', example: 'そら (sora)', meaning: 'Langit', group: 'all' },
    { char: 'た', romaji: 'ta', example: 'たべもの (tabemono)', meaning: 'Makanan', group: 'all' },
    { char: 'ち', romaji: 'chi', example: 'ちず (chizu)', meaning: 'Peta', group: 'all' },
    { char: 'つ', romaji: 'tsu', example: 'つき (tsuki)', meaning: 'Bulan', group: 'all' },
    { char: 'て', romaji: 'te', example: 'てがみ (tegami)', meaning: 'Surat', group: 'all' },
    { char: 'と', romaji: 'to', example: 'とり (tori)', meaning: 'Burung', group: 'all' },
    { char: 'な', romaji: 'na', example: 'なつ (natsu)', meaning: 'Musim panas', group: 'all' },
    { char: 'に', romaji: 'ni', example: 'にく (niku)', meaning: 'Daging', group: 'all' },
    { char: 'ぬ', romaji: 'nu', example: 'ぬの (nuno)', meaning: 'Kain', group: 'all' },
    { char: 'ね', romaji: 'ne', example: 'ねこ (neko)', meaning: 'Kucing', group: 'all' },
    { char: 'の', romaji: 'no', example: 'のみもの (nomimono)', meaning: 'Minuman', group: 'all' },
    { char: 'は', romaji: 'ha', example: 'はな (hana)', meaning: 'Bunga', group: 'all' },
    { char: 'ひ', romaji: 'hi', example: 'ひと (hito)', meaning: 'Orang', group: 'all' },
    { char: 'ふ', romaji: 'fu', example: 'ふゆ (fuyu)', meaning: 'Musim dingin', group: 'all' },
    { char: 'へ', romaji: 'he', example: 'へや (heya)', meaning: 'Kamar', group: 'all' },
    { char: 'ほ', romaji: 'ho', example: 'ほん (hon)', meaning: 'Buku', group: 'all' },
    { char: 'ま', romaji: 'ma', example: 'まど (mado)', meaning: 'Jendela', group: 'all' },
    { char: 'み', romaji: 'mi', example: 'みず (mizu)', meaning: 'Air', group: 'all' },
    { char: 'む', romaji: 'mu', example: 'むし (mushi)', meaning: 'Serangga', group: 'all' },
    { char: 'め', romaji: 'me', example: 'め (me)', meaning: 'Mata', group: 'all' },
    { char: 'も', romaji: 'mo', example: 'もり (mori)', meaning: 'Hutan', group: 'all' },
    { char: 'や', romaji: 'ya', example: 'やま (yama)', meaning: 'Gunung', group: 'all' },
    { char: 'ゆ', romaji: 'yu', example: 'ゆき (yuki)', meaning: 'Salju', group: 'all' },
    { char: 'よ', romaji: 'yo', example: 'よる (yoru)', meaning: 'Malam', group: 'all' },
    { char: 'ら', romaji: 'ra', example: 'ラーメン (raamen)', meaning: 'Ramen', group: 'all' },
    { char: 'り', romaji: 'ri', example: 'りょうり (ryouri)', meaning: 'Masakan', group: 'all' },
    { char: 'る', romaji: 'ru', example: 'るす (rusu)', meaning: 'Tidak ada', group: 'all' },
    { char: 'れ', romaji: 're', example: 'れいぞうこ (reizouko)', meaning: 'Kulkas', group: 'all' },
    { char: 'ろ', romaji: 'ro', example: 'ろく (roku)', meaning: 'Enam', group: 'all' },
    { char: 'わ', romaji: 'wa', example: 'わたし (watashi)', meaning: 'Saya', group: 'all' },
    { char: 'を', romaji: 'wo', example: 'を (wo)', meaning: 'Partikel', group: 'all' },
    { char: 'ん', romaji: 'n', example: 'にほん (nihon)', meaning: 'Jepang', group: 'all' },
    
    // Dakuon (Voiced)
    { char: 'が', romaji: 'ga', example: 'がくせい (gakusei)', meaning: 'Murid', group: 'dakuon' },
    { char: 'ぎ', romaji: 'gi', example: 'ぎん (gin)', meaning: 'Perak', group: 'dakuon' },
    { char: 'ぐ', romaji: 'gu', example: 'ぐん (gun)', meaning: 'Kelompok', group: 'dakuon' },
    { char: 'げ', romaji: 'ge', example: 'げつ (getsu)', meaning: 'Bulan', group: 'dakuon' },
    { char: 'ご', romaji: 'go', example: 'ごはん (gohan)', meaning: 'Nasi', group: 'dakuon' },
    { char: 'ざ', romaji: 'za', example: 'ざっし (zasshi)', meaning: 'Majalah', group: 'dakuon' },
    { char: 'じ', romaji: 'ji', example: 'じかん (jikan)', meaning: 'Waktu', group: 'dakuon' },
    { char: 'ず', romaji: 'zu', example: 'ずし (zushi)', meaning: 'Sushi', group: 'dakuon' },
    { char: 'ぜ', romaji: 'ze', example: 'ぜん (zen)', meaning: 'Semua', group: 'dakuon' },
    { char: 'ぞ', romaji: 'zo', example: 'ぞう (zou)', meaning: 'Gajah', group: 'dakuon' },
    { char: 'だ', romaji: 'da', example: 'だい (dai)', meaning: 'Besar', group: 'dakuon' },
    { char: 'ぢ', romaji: 'ji', example: 'ぢば (jiba)', meaning: 'Tanah', group: 'dakuon' },
    { char: 'づ', romaji: 'zu', example: 'づる (zuru)', meaning: 'Tanaman', group: 'dakuon' },
    { char: 'で', romaji: 'de', example: 'でんわ (denwa)', meaning: 'Telepon', group: 'dakuon' },
    { char: 'ど', romaji: 'do', example: 'どよう (doyou)', meaning: 'Sabtu', group: 'dakuon' },
    { char: 'ば', romaji: 'ba', example: 'ばしょ (basho)', meaning: 'Tempat', group: 'dakuon' },
    { char: 'び', romaji: 'bi', example: 'びょう (byou)', meaning: 'Rumah sakit', group: 'dakuon' },
    { char: 'ぶ', romaji: 'bu', example: 'ぶん (bun)', meaning: 'Kalimat', group: 'dakuon' },
    { char: 'べ', romaji: 'be', example: 'べん (ben)', meaning: 'Kenyamanan', group: 'dakuon' },
    { char: 'ぼ', romaji: 'bo', example: 'ぼん (bon)', meaning: 'Nampan', group: 'dakuon' },
    
    // Handakuon (Half-voiced)
    { char: 'ぱ', romaji: 'pa', example: 'ぱん (pan)', meaning: 'Roti', group: 'handakuon' },
    { char: 'ぴ', romaji: 'pi', example: 'ぴん (pin)', meaning: 'Pin', group: 'handakuon' },
    { char: 'ぷ', romaji: 'pu', example: 'ぷう (puu)', meaning: 'Angin', group: 'handakuon' },
    { char: 'ぺ', romaji: 'pe', example: 'ぺん (pen)', meaning: 'Pena', group: 'handakuon' },
    { char: 'ぽ', romaji: 'po', example: 'ぽん (pon)', meaning: 'Tiba-tiba', group: 'handakuon' },
    
    // Youon (Contracted)
    { char: 'きゃ', romaji: 'kya', example: 'きゃく (kyaku)', meaning: 'Tamu', group: 'youon' },
    { char: 'きゅ', romaji: 'kyu', example: 'きゅう (kyuu)', meaning: 'Sembilan', group: 'youon' },
    { char: 'きょ', romaji: 'kyo', example: 'きょう (kyou)', meaning: 'Hari ini', group: 'youon' },
    { char: 'しゃ', romaji: 'sha', example: 'しゃいん (shain)', meaning: 'Karyawan', group: 'youon' },
    { char: 'しゅ', romaji: 'shu', example: 'しゅう (shuu)', meaning: 'Minggu', group: 'youon' },
    { char: 'しょ', romaji: 'sho', example: 'しょく (shoku)', meaning: 'Makan', group: 'youon' },
    { char: 'ちゃ', romaji: 'cha', example: 'ちゃ (cha)', meaning: 'Teh', group: 'youon' },
    { char: 'ちゅ', romaji: 'chu', example: 'ちゅう (chuu)', meaning: 'Tengah', group: 'youon' },
    { char: 'ちょ', romaji: 'cho', example: 'ちょっと (chotto)', meaning: 'Sedikit', group: 'youon' },
    { char: 'にゃ', romaji: 'nya', example: 'にゃん (nyan)', meaning: 'Meong', group: 'youon' },
    { char: 'にゅ', romaji: 'nyu', example: 'にゅう (nyuu)', meaning: 'Masuk', group: 'youon' },
    { char: 'にょ', romaji: 'nyo', example: 'にょん (nyon)', meaning: 'Nyon', group: 'youon' },
    { char: 'ひゃ', romaji: 'hya', example: 'ひゃく (hyaku)', meaning: 'Seratus', group: 'youon' },
    { char: 'ひゅ', romaji: 'hyu', example: 'ひゅう (hyuu)', meaning: 'Angin', group: 'youon' },
    { char: 'ひょ', romaji: 'hyo', example: 'ひょう (hyou)', meaning: 'Tanda', group: 'youon' },
    { char: 'みゃ', romaji: 'mya', example: 'みゃく (myaku)', meaning: 'Denyut', group: 'youon' },
    { char: 'みゅ', romaji: 'myu', example: 'みゅう (myuu)', meaning: 'Mew', group: 'youon' },
    { char: 'みょ', romaji: 'myo', example: 'みょう (myou)', meaning: 'Aneh', group: 'youon' },
    { char: 'りゃ', romaji: 'rya', example: 'りゃく (ryaku)', meaning: 'Singkat', group: 'youon' },
    { char: 'りゅ', romaji: 'ryu', example: 'りゅう (ryuu)', meaning: 'Naga', group: 'youon' },
    { char: 'りょ', romaji: 'ryo', example: 'りょこう (ryokou)', meaning: 'Perjalanan', group: 'youon' },
    { char: 'ぎゃ', romaji: 'gya', example: 'ぎゃく (gyaku)', meaning: 'Terbalik', group: 'youon' },
    { char: 'ぎゅ', romaji: 'gyu', example: 'ぎゅう (gyuu)', meaning: 'Sapi', group: 'youon' },
    { char: 'ぎょ', romaji: 'gyo', example: 'ぎょん (gyon)', meaning: 'Ikan', group: 'youon' },
    { char: 'じゃ', romaji: 'ja', example: 'じゃ (ja)', meaning: 'Kalau', group: 'youon' },
    { char: 'じゅ', romaji: 'ju', example: 'じゅう (juu)', meaning: 'Sepuluh', group: 'youon' },
    { char: 'じょ', romaji: 'jo', example: 'じょ (jo)', meaning: 'Perempuan', group: 'youon' },
    { char: 'びゃ', romaji: 'bya', example: 'びゃく (byaku)', meaning: 'Putih', group: 'youon' },
    { char: 'びゅ', romaji: 'byu', example: 'びゅう (byuu)', meaning: 'Angin', group: 'youon' },
    { char: 'びょ', romaji: 'byo', example: 'びょう (byou)', meaning: 'Rumah sakit', group: 'youon' },
    { char: 'ぴゃ', romaji: 'pya', example: 'ぴゃん (pyan)', meaning: 'Pyan', group: 'youon' },
    { char: 'ぴゅ', romaji: 'pyu', example: 'ぴゅう (pyuu)', meaning: 'Angin', group: 'youon' },
    { char: 'ぴょ', romaji: 'pyo', example: 'ぴょん (pyon)', meaning: 'Loncat', group: 'youon' }
];

// === DATA KATAKANA LENGKAP ===
const katakanaData = [
    // Seion
    { char: 'ア', romaji: 'a', example: 'アメリカ (amerika)', meaning: 'Amerika', group: 'all' },
    { char: 'イ', romaji: 'i', example: 'イタリア (itaria)', meaning: 'Italia', group: 'all' },
    { char: 'ウ', romaji: 'u', example: 'ウール (uuru)', meaning: 'Wool', group: 'all' },
    { char: 'エ', romaji: 'e', example: 'エレベーター (erebeetaa)', meaning: 'Lift', group: 'all' },
    { char: 'オ', romaji: 'o', example: 'オーストラリア (oosutoraria)', meaning: 'Australia', group: 'all' },
    { char: 'カ', romaji: 'ka', example: 'カレー (karee)', meaning: 'Kari', group: 'all' },
    { char: 'キ', romaji: 'ki', example: 'キロ (kiro)', meaning: 'Kilo', group: 'all' },
    { char: 'ク', romaji: 'ku', example: 'クラス (kurasu)', meaning: 'Kelas', group: 'all' },
    { char: 'ケ', romaji: 'ke', example: 'ケーキ (keeki)', meaning: 'Kue', group: 'all' },
    { char: 'コ', romaji: 'ko', example: 'コーヒー (koohii)', meaning: 'Kopi', group: 'all' },
    { char: 'サ', romaji: 'sa', example: 'サンドイッチ (sandoicchi)', meaning: 'Sandwich', group: 'all' },
    { char: 'シ', romaji: 'shi', example: 'シャツ (shatsu)', meaning: 'Kemeja', group: 'all' },
    { char: 'ス', romaji: 'su', example: 'スポーツ (supootsu)', meaning: 'Olahraga', group: 'all' },
    { char: 'セ', romaji: 'se', example: 'センター (sentaa)', meaning: 'Center', group: 'all' },
    { char: 'ソ', romaji: 'so', example: 'ソース (soosu)', meaning: 'Saus', group: 'all' },
    { char: 'タ', romaji: 'ta', example: 'タクシー (takushii)', meaning: 'Taksi', group: 'all' },
    { char: 'チ', romaji: 'chi', example: 'チョコレート (chokoreeto)', meaning: 'Coklat', group: 'all' },
    { char: 'ツ', romaji: 'tsu', example: 'ツアー (tsuaa)', meaning: 'Tour', group: 'all' },
    { char: 'テ', romaji: 'te', example: 'テレビ (terebi)', meaning: 'TV', group: 'all' },
    { char: 'ト', romaji: 'to', example: 'トマト (tomato)', meaning: 'Tomat', group: 'all' },
    { char: 'ナ', romaji: 'na', example: 'ナイフ (naifu)', meaning: 'Pisau', group: 'all' },
    { char: 'ニ', romaji: 'ni', example: 'ニュース (nyuusu)', meaning: 'Berita', group: 'all' },
    { char: 'ヌ', romaji: 'nu', example: 'ヌードル (nuudoru)', meaning: 'Mie', group: 'all' },
    { char: 'ネ', romaji: 'ne', example: 'ネクタイ (nekutai)', meaning: 'Dasi', group: 'all' },
    { char: 'ノ', romaji: 'no', example: 'ノート (nooto)', meaning: 'Notebook', group: 'all' },
    { char: 'ハ', romaji: 'ha', example: 'ハンバーガー (hanbaagaa)', meaning: 'Hamburger', group: 'all' },
    { char: 'ヒ', romaji: 'hi', example: 'ヒント (hinto)', meaning: 'Petunjuk', group: 'all' },
    { char: 'フ', romaji: 'fu', example: 'フォーク (fooku)', meaning: 'Garpu', group: 'all' },
    { char: 'ヘ', romaji: 'he', example: 'ヘルプ (herupu)', meaning: 'Help', group: 'all' },
    { char: 'ホ', romaji: 'ho', example: 'ホテル (hoteru)', meaning: 'Hotel', group: 'all' },
    { char: 'マ', romaji: 'ma', example: 'マーク (maaku)', meaning: 'Mark', group: 'all' },
    { char: 'ミ', romaji: 'mi', example: 'ミルク (miruku)', meaning: 'Susu', group: 'all' },
    { char: 'ム', romaji: 'mu', example: 'メニュー (menyuu)', meaning: 'Menu', group: 'all' },
    { char: 'メ', romaji: 'me', example: 'メール (meeru)', meaning: 'Email', group: 'all' },
    { char: 'モ', romaji: 'mo', example: 'モデル (moderu)', meaning: 'Model', group: 'all' },
    { char: 'ヤ', romaji: 'ya', example: 'ヤクルト (yakuruto)', meaning: 'Yakult', group: 'all' },
    { char: 'ユ', romaji: 'yu', example: 'ユニーク (yuniiku)', meaning: 'Unik', group: 'all' },
    { char: 'ヨ', romaji: 'yo', example: 'ヨーロッパ (yooroppa)', meaning: 'Eropa', group: 'all' },
    { char: 'ラ', romaji: 'ra', example: 'ラジオ (rajio)', meaning: 'Radio', group: 'all' },
    { char: 'リ', romaji: 'ri', example: 'レストラン (resutoran)', meaning: 'Restoran', group: 'all' },
    { char: 'ル', romaji: 'ru', example: 'ルール (ruuru)', meaning: 'Aturan', group: 'all' },
    { char: 'レ', romaji: 're', example: 'レッスン (ressun)', meaning: 'Pelajaran', group: 'all' },
    { char: 'ロ', romaji: 'ro', example: 'ロボット (robotto)', meaning: 'Robot', group: 'all' },
    { char: 'ワ', romaji: 'wa', example: 'ワイン (wain)', meaning: 'Wine', group: 'all' },
    { char: 'ヲ', romaji: 'wo', example: 'ヲ (wo)', meaning: 'Partikel', group: 'all' },
    { char: 'ン', romaji: 'n', example: 'レンズ (renzu)', meaning: 'Lensa', group: 'all' },
    
    // Dakuon
    { char: 'ガ', romaji: 'ga', example: 'ガス (gasu)', meaning: 'Gas', group: 'dakuon' },
    { char: 'ギ', romaji: 'gi', example: 'ギター (gitaa)', meaning: 'Gitar', group: 'dakuon' },
    { char: 'グ', romaji: 'gu', example: 'グーグル (guuguru)', meaning: 'Google', group: 'dakuon' },
    { char: 'ゲ', romaji: 'ge', example: 'ゲーム (geemu)', meaning: 'Game', group: 'dakuon' },
    { char: 'ゴ', romaji: 'go', example: 'ゴルフ (gorufu)', meaning: 'Golf', group: 'dakuon' },
    { char: 'ザ', romaji: 'za', example: 'ザック (zakku)', meaning: 'Tas', group: 'dakuon' },
    { char: 'ジ', romaji: 'ji', example: 'ジーンズ (jiinzu)', meaning: 'Jeans', group: 'dakuon' },
    { char: 'ズ', romaji: 'zu', example: 'ズボン (zubon)', meaning: 'Celana', group: 'dakuon' },
    { char: 'ゼ', romaji: 'ze', example: 'ゼロ (zero)', meaning: 'Nol', group: 'dakuon' },
    { char: 'ゾ', romaji: 'zo', example: 'ゾーン (zoon)', meaning: 'Zona', group: 'dakuon' },
    { char: 'ダ', romaji: 'da', example: 'ダム (damu)', meaning: 'Bendungan', group: 'dakuon' },
    { char: 'ヂ', romaji: 'ji', example: 'ヂ (ji)', meaning: 'Ji', group: 'dakuon' },
    { char: 'ヅ', romaji: 'zu', example: 'ヅ (zu)', meaning: 'Zu', group: 'dakuon' },
    { char: 'デ', romaji: 'de', example: 'デスク (desuku)', meaning: 'Meja', group: 'dakuon' },
    { char: 'ド', romaji: 'do', example: 'ドア (doa)', meaning: 'Pintu', group: 'dakuon' },
    { char: 'バ', romaji: 'ba', example: 'バス (basu)', meaning: 'Bus', group: 'dakuon' },
    { char: 'ビ', romaji: 'bi', example: 'ビール (biiru)', meaning: 'Bir', group: 'dakuon' },
    { char: 'ブ', romaji: 'bu', example: 'ブック (bukku)', meaning: 'Buku', group: 'dakuon' },
    { char: 'ベ', romaji: 'be', example: 'ベッド (beddo)', meaning: 'Tempat tidur', group: 'dakuon' },
    { char: 'ボ', romaji: 'bo', example: 'ボール (booru)', meaning: 'Bola', group: 'dakuon' },
    
    // Handakuon
    { char: 'パ', romaji: 'pa', example: 'パン (pan)', meaning: 'Roti', group: 'handakuon' },
    { char: 'ピ', romaji: 'pi', example: 'ピザ (piza)', meaning: 'Pizza', group: 'handakuon' },
    { char: 'プ', romaji: 'pu', example: 'プール (puuru)', meaning: 'Kolam renang', group: 'handakuon' },
    { char: 'ペ', romaji: 'pe', example: 'ペン (pen)', meaning: 'Pena', group: 'handakuon' },
    { char: 'ポ', romaji: 'po', example: 'ポスト (posuto)', meaning: 'Kotak surat', group: 'handakuon' },
    
    // Youon
    { char: 'キャ', romaji: 'kya', example: 'キャンプ (kyanpu)', meaning: 'Kemah', group: 'youon' },
    { char: 'キュ', romaji: 'kyu', example: 'キュウ (kyuu)', meaning: 'Kyu', group: 'youon' },
    { char: 'キョ', romaji: 'kyo', example: 'キョウ (kyou)', meaning: 'Kyo', group: 'youon' },
    { char: 'シャ', romaji: 'sha', example: 'シャワー (shawaa)', meaning: 'Shower', group: 'youon' },
    { char: 'シュ', romaji: 'shu', example: 'シューズ (shuuzu)', meaning: 'Sepatu', group: 'youon' },
    { char: 'ショ', romaji: 'sho', example: 'ショート (shooto)', meaning: 'Pendek', group: 'youon' },
    { char: 'チャ', romaji: 'cha', example: 'チャーム (chaamu)', meaning: 'Pesona', group: 'youon' },
    { char: 'チュ', romaji: 'chu', example: 'チューズ (chuuzu)', meaning: 'Pilih', group: 'youon' },
    { char: 'チョ', romaji: 'cho', example: 'チョコ (choko)', meaning: 'Coklat', group: 'youon' },
    { char: 'ニャ', romaji: 'nya', example: 'ニャ (nya)', meaning: 'Meong', group: 'youon' },
    { char: 'ニュ', romaji: 'nyu', example: 'ニュース (nyuusu)', meaning: 'Berita', group: 'youon' },
    { char: 'ニョ', romaji: 'nyo', example: 'ニョ (nyo)', meaning: 'Nyo', group: 'youon' },
    { char: 'ヒャ', romaji: 'hya', example: 'ヒャ (hya)', meaning: 'Hya', group: 'youon' },
    { char: 'ヒュ', romaji: 'hyu', example: 'ヒュ (hyu)', meaning: 'Hyu', group: 'youon' },
    { char: 'ヒョ', romaji: 'hyo', example: 'ヒョ (hyo)', meaning: 'Hyo', group: 'youon' },
    { char: 'ミャ', romaji: 'mya', example: 'ミャ (mya)', meaning: 'Mya', group: 'youon' },
    { char: 'ミュ', romaji: 'myu', example: 'ミュージック (myuujikku)', meaning: 'Musik', group: 'youon' },
    { char: 'ミョ', romaji: 'myo', example: 'ミョ (myo)', meaning: 'Myo', group: 'youon' },
    { char: 'リャ', romaji: 'rya', example: 'リャ (rya)', meaning: 'Rya', group: 'youon' },
    { char: 'リュ', romaji: 'ryu', example: 'リュック (ryukku)', meaning: 'Tas', group: 'youon' },
    { char: 'リョ', romaji: 'ryo', example: 'リョウ (ryou)', meaning: 'Ryo', group: 'youon' },
    { char: 'ギャ', romaji: 'gya', example: 'ギャップ (gyappu)', meaning: 'Celah', group: 'youon' },
    { char: 'ギュ', romaji: 'gyu', example: 'ギュ (gyu)', meaning: 'Gyu', group: 'youon' },
    { char: 'ギョ', romaji: 'gyo', example: 'ギョ (gyo)', meaning: 'Gyo', group: 'youon' },
    { char: 'ジャ', romaji: 'ja', example: 'ジャー (jaa)', meaning: 'Jar', group: 'youon' },
    { char: 'ジュ', romaji: 'ju', example: 'ジュース (juusu)', meaning: 'Jus', group: 'youon' },
    { char: 'ジョ', romaji: 'jo', example: 'ジョブ (jobu)', meaning: 'Pekerjaan', group: 'youon' },
    { char: 'ビャ', romaji: 'bya', example: 'ビャ (bya)', meaning: 'Bya', group: 'youon' },
    { char: 'ビュ', romaji: 'byu', example: 'ビュ (byu)', meaning: 'Byu', group: 'youon' },
    { char: 'ビョ', romaji: 'byo', example: 'ビョウ (byou)', meaning: 'Byo', group: 'youon' },
    { char: 'ピャ', romaji: 'pya', example: 'ピャ (pya)', meaning: 'Pya', group: 'youon' },
    { char: 'ピュ', romaji: 'pyu', example: 'ピュ (pyu)', meaning: 'Pyu', group: 'youon' },
    { char: 'ピョ', romaji: 'pyo', example: 'ピョ (pyo)', meaning: 'Pyo', group: 'youon' }
];

// === KANJI DATA (N5-N1 + BASIC) ===
const kanjiData = {
    N5: [
        { kanji: '一', onyomi: 'イチ', kunyomi: 'ひと(つ)', meaning: 'Satu', example: '一人 (hitori)' },
        { kanji: '二', onyomi: 'ニ', kunyomi: 'ふた(つ)', meaning: 'Dua', example: '二人 (futari)' },
        { kanji: '三', onyomi: 'サン', kunyomi: 'み(つ)', meaning: 'Tiga', example: '三つ (mittsu)' },
        { kanji: '四', onyomi: 'シ', kunyomi: 'よ(つ)', meaning: 'Empat', example: '四つ (yottsu)' },
        { kanji: '五', onyomi: 'ゴ', kunyomi: 'いつ(つ)', meaning: 'Lima', example: '五つ (itsutsu)' },
        { kanji: '六', onyomi: 'ロク', kunyomi: 'む(つ)', meaning: 'Enam', example: '六つ (muttsu)' },
        { kanji: '七', onyomi: 'シチ', kunyomi: 'なな(つ)', meaning: 'Tujuh', example: '七つ (nanatsu)' },
        { kanji: '八', onyomi: 'ハチ', kunyomi: 'や(つ)', meaning: 'Delapan', example: '八つ (yattsu)' },
        { kanji: '九', onyomi: 'キュウ', kunyomi: 'ここの(つ)', meaning: 'Sembilan', example: '九つ (kokonotsu)' },
        { kanji: '十', onyomi: 'ジュウ', kunyomi: 'とお', meaning: 'Sepuluh', example: '十 (too)' },
        { kanji: '日', onyomi: 'ニチ', kunyomi: 'ひ', meaning: 'Hari/Matahari', example: '今日 (kyou)' },
        { kanji: '月', onyomi: 'ゲツ', kunyomi: 'つき', meaning: 'Bulan', example: '月曜日 (getsuyoubi)' },
        { kanji: '火', onyomi: 'カ', kunyomi: 'ひ', meaning: 'Api', example: '火曜日 (kayoubi)' },
        { kanji: '水', onyomi: 'スイ', kunyomi: 'みず', meaning: 'Air', example: '水曜日 (suiyoubi)' },
        { kanji: '木', onyomi: 'モク', kunyomi: 'き', meaning: 'Pohon', example: '木曜日 (mokuyoubi)' },
        { kanji: '金', onyomi: 'キン', kunyomi: 'かね', meaning: 'Emas/Uang', example: '金曜日 (kinyoubi)' },
        { kanji: '土', onyomi: 'ド', kunyomi: 'つち', meaning: 'Tanah', example: '土曜日 (doyoubi)' },
        { kanji: '人', onyomi: 'ジン', kunyomi: 'ひと', meaning: 'Orang', example: '日本人 (nihonjin)' },
        { kanji: '大', onyomi: 'ダイ', kunyomi: 'おお(きい)', meaning: 'Besar', example: '大学 (daigaku)' },
        { kanji: '小', onyomi: 'ショウ', kunyomi: 'ちい(さい)', meaning: 'Kecil', example: '小学校 (shougakkou)' }
    ],
    N4: [
        { kanji: '方', onyomi: 'ホウ', kunyomi: 'かた', meaning: 'Arah/Cara', example: '方法 (houhou)' },
        { kanji: '今', onyomi: 'コン', kunyomi: 'いま', meaning: 'Sekarang', example: '今日 (kyou)' },
        { kanji: '年', onyomi: 'ネン', kunyomi: 'とし', meaning: 'Tahun', example: '今年 (kotoshi)' },
        { kanji: '時', onyomi: 'ジ', kunyomi: 'とき', meaning: 'Waktu', example: '時間 (jikan)' },
        { kanji: '分', onyomi: 'フン', kunyomi: 'わ(ける)', meaning: 'Menit/Bagian', example: '一分 (ippun)' },
        { kanji: '半', onyomi: 'ハン', kunyomi: 'なか(ば)', meaning: 'Setengah', example: '半分 (hanbun)' },
        { kanji: '行', onyomi: 'コウ', kunyomi: 'い(く)', meaning: 'Pergi', example: '行く (iku)' },
        { kanji: '出', onyomi: 'シュツ', kunyomi: 'で(る)', meaning: 'Keluar', example: '出口 (deguchi)' },
        { kanji: '入', onyomi: 'ニュウ', kunyomi: 'はい(る)', meaning: 'Masuk', example: '入口 (iriguchi)' },
        { kanji: '見', onyomi: 'ケン', kunyomi: 'み(る)', meaning: 'Lihat', example: '見る (miru)' },
        { kanji: '聞', onyomi: 'ブン', kunyomi: 'き(く)', meaning: 'Dengar', example: '聞く (kiku)' },
        { kanji: '食', onyomi: 'ショク', kunyomi: 'た(べる)', meaning: 'Makan', example: '食べる (taberu)' },
        { kanji: '飲', onyomi: 'イン', kunyomi: 'の(む)', meaning: 'Minum', example: '飲む (nomu)' },
        { kanji: '書', onyomi: 'ショ', kunyomi: 'か(く)', meaning: 'Tulis', example: '書く (kaku)' },
        { kanji: '読', onyomi: 'ドク', kunyomi: 'よ(む)', meaning: 'Baca', example: '読む (yomu)' }
    ],
    N3: [
        { kanji: '考', onyomi: 'コウ', kunyomi: 'かんが(える)', meaning: 'Pikir', example: '考える (kangaeru)' },
        { kanji: '思', onyomi: 'シ', kunyomi: 'おも(う)', meaning: 'Pikir/Rasa', example: '思う (omou)' },
        { kanji: '持', onyomi: 'ジ', kunyomi: 'も(つ)', meaning: 'Pegang', example: '持つ (motsu)' },
        { kanji: '待', onyomi: 'タイ', kunyomi: 'ま(つ)', meaning: 'Tunggu', example: '待つ (matsu)' },
        { kanji: '送', onyomi: 'ソウ', kunyomi: 'おく(る)', meaning: 'Kirim', example: '送る (okuru)' },
        { kanji: '届', onyomi: 'カイ', kunyomi: 'とど(ける)', meaning: 'Sampaikan', example: '届ける (todokeru)' },
        { kanji: '始', onyomi: 'シ', kunyomi: 'はじ(める)', meaning: 'Mulai', example: '始める (hajimeru)' },
        { kanji: '終', onyomi: 'シュウ', kunyomi: 'お(わる)', meaning: 'Selesai', example: '終わる (owaru)' },
        { kanji: '立', onyomi: 'リツ', kunyomi: 'た(つ)', meaning: 'Berdiri', example: '立つ (tatsu)' },
        { kanji: '座', onyomi: 'ザ', kunyomi: 'すわ(る)', meaning: 'Duduk', example: '座る (suwaru)' }
    ],
    N2: [
        { kanji: '届', onyomi: 'カイ', kunyomi: 'とど(く)', meaning: 'Tiba', example: '届く (todoku)' },
        { kanji: '減', onyomi: 'ゲン', kunyomi: 'へ(る)', meaning: 'Berkurang', example: '減る (heru)' },
        { kanji: '増', onyomi: 'ゾウ', kunyomi: 'ふ(える)', meaning: 'Bertambah', example: '増える (fueru)' },
        { kanji: '続', onyomi: 'ゾク', kunyomi: 'つづ(く)', meaning: 'Lanjut', example: '続く (tsuzuku)' },
        { kanji: '変', onyomi: 'ヘン', kunyomi: 'か(わる)', meaning: 'Berubah', example: '変わる (kawaru)' },
        { kanji: '化', onyomi: 'カ', kunyomi: 'ば(かす)', meaning: 'Ubah', example: '変化 (henka)' },
        { kanji: '影', onyomi: 'エイ', kunyomi: 'かげ', meaning: 'Bayangan', example: '影響 (eikyou)' },
        { kanji: '響', onyomi: 'キョウ', kunyomi: 'ひび(く)', meaning: 'Gema', example: '影響 (eikyou)' },
        { kanji: '認', onyomi: 'ニン', kunyomi: 'みと(める)', meaning: 'Akui', example: '認める (mitomeru)' },
        { kanji: '証', onyomi: 'ショウ', kunyomi: 'あかし', meaning: 'Bukti', example: '証拠 (shouko)' }
    ],
    N1: [
        { kanji: '概念', onyomi: 'ガイネン', kunyomi: '-', meaning: 'Konsep', example: '概念 (gainen)' },
        { kanji: '抽象', onyomi: 'チュウショウ', kunyomi: '-', meaning: 'Abstrak', example: '抽象的 (chuushouteki)' },
        { kanji: '矛盾', onyomi: 'ムジュン', kunyomi: '-', meaning: 'Kontradiksi', example: '矛盾 (mujun)' },
        { kanji: '哲学', onyomi: 'テツガク', kunyomi: '-', meaning: 'Filsafat', example: '哲学 (tetsugaku)' },
        { kanji: '倫理', onyomi: 'リンリ', kunyomi: '-', meaning: 'Etika', example: '倫理 (rinri)' },
        { kanji: '道徳', onyomi: 'ドウトク', kunyomi: '-', meaning: 'Moral', example: '道徳 (doutoku)' },
        { kanji: '宗教', onyomi: 'シュウキョウ', kunyomi: '-', meaning: 'Agama', example: '宗教 (shuukyou)' },
        { kanji: '信仰', onyomi: 'シンコウ', kunyomi: '-', meaning: 'Keyakinan', example: '信仰 (shinkou)' },
        { kanji: '本質', onyomi: 'ホンシツ', kunyomi: '-', meaning: 'Esensi', example: '本質 (honshitsu)' },
        { kanji: '真理', onyomi: 'シンリ', kunyomi: '-', meaning: 'Kebenaran', example: '真理 (shinri)' }
    ],
    basic: [
        { kanji: '私', onyomi: 'シ', kunyomi: 'わたし', meaning: 'Saya', example: '私 (watashi)' },
        { kanji: '彼', onyomi: 'ヒ', kunyomi: 'かれ', meaning: 'Dia (laki)', example: '彼 (kare)' },
        { kanji: '彼女', onyomi: 'カノジョ', kunyomi: '-', meaning: 'Dia (perempuan)', example: '彼女 (kanojo)' },
        { kanji: '家族', onyomi: 'カゾク', kunyomi: '-', meaning: 'Keluarga', example: '家族 (kazoku)' },
        { kanji: '学校', onyomi: 'ガッコウ', kunyomi: '-', meaning: 'Sekolah', example: '学校 (gakkou)' },
        { kanji: '先生', onyomi: 'センセイ', kunyomi: '-', meaning: 'Guru', example: '先生 (sensei)' },
        { kanji: '学生', onyomi: 'ガクセイ', kunyomi: '-', meaning: 'Murid', example: '学生 (gakusei)' },
        { kanji: '友達', onyomi: 'トモダチ', kunyomi: '-', meaning: 'Teman', example: '友達 (tomodachi)' },
        { kanji: '家', onyomi: 'カ', kunyomi: 'いえ', meaning: 'Rumah', example: '家 (ie)' },
        { kanji: '車', onyomi: 'シャ', kunyomi: 'くるま', meaning: 'Mobil', example: '車 (kuruma)' },
        { kanji: '電車', onyomi: 'デンシャ', kunyomi: '-', meaning: 'Kereta', example: '電車 (densha)' },
        { kanji: '地下鉄', onyomi: 'チカテツ', kunyomi: '-', meaning: 'Subway', example: '地下鉄 (chikatetsu)' },
        { kanji: '駅', onyomi: 'エキ', kunyomi: '-', meaning: 'Stasiun', example: '駅 (eki)' },
        { kanji: '空港', onyomi: 'クウコウ', kunyomi: '-', meaning: 'Bandara', example: '空港 (kuukou)' },
        { kanji: '病院', onyomi: 'ビョウイン', kunyomi: '-', meaning: 'Rumah sakit', example: '病院 (byouin)' },
        { kanji: '銀行', onyomi: 'ギンコウ', kunyomi: '-', meaning: 'Bank', example: '銀行 (ginkou)' },
        { kanji: '公園', onyomi: 'コウエン', kunyomi: '-', meaning: 'Taman', example: '公園 (kouen)' },
        { kanji: '図書館', onyomi: 'トショカン', kunyomi: '-', meaning: 'Perpustakaan', example: '図書館 (toshokan)' },
        { kanji: '食堂', onyomi: 'ショクドウ', kunyomi: '-', meaning: 'Kantin', example: '食堂 (shokudou)' },
        { kanji: 'コンビニ', onyomi: 'コンビニ', kunyomi: '-', meaning: 'Convenience store', example: 'コンビニ (konbini)' },
        { kanji: 'スーパー', onyomi: 'スーパー', kunyomi: '-', meaning: 'Supermarket', example: 'スーパー (suupaa)' },
        { kanji: 'レストラン', onyomi: 'レストラン', kunyomi: '-', meaning: 'Restoran', example: 'レストラン (resutoran)' },
        { kanji: 'ホテル', onyomi: 'ホテル', kunyomi: '-', meaning: 'Hotel', example: 'ホテル (hoteru)' },
        { kanji: '飛行機', onyomi: 'ヒコウキ', kunyomi: '-', meaning: 'Pesawat', example: '飛行機 (hikouki)' },
        { kanji: '自転車', onyomi: 'ジテンシャ', kunyomi: '-', meaning: 'Sepeda', example: '自転車 (jitensha)' },
        { kanji: '傘', onyomi: 'サン', kunyomi: 'かさ', meaning: 'Payung', example: '傘 (kasa)' },
        { kanji: '時計', onyomi: 'トケイ', kunyomi: '-', meaning: 'Jam', example: '時計 (tokei)' },
        { kanji: '財布', onyomi: 'サイフ', kunyomi: '-', meaning: 'Dompet', example: '財布 (saifu)' },
        { kanji: '鍵', onyomi: 'ケン', kunyomi: 'かぎ', meaning: 'Kunci', example: '鍵 (kagi)' },
        { kanji: '眼鏡', onyomi: 'メガネ', kunyomi: '-', meaning: 'Kacamata', example: '眼鏡 (megane)' },
        { kanji: '靴', onyomi: 'カ', kunyomi: 'くつ', meaning: 'Sepatu', example: '靴 (kutsu)' },
        { kanji: '靴下', onyomi: 'クツシタ', kunyomi: '-', meaning: 'Kaos kaki', example: '靴下 (kutsushita)' },
        { kanji: '帽子', onyomi: 'ボウシ', kunyomi: '-', meaning: 'Topi', example: '帽子 (boushi)' },
        { kanji: '手袋', onyomi: 'テブクロ', kunyomi: '-', meaning: 'Sarung tangan', example: '手袋 (tebukuro)' },
        { kanji: '傘', onyomi: 'サン', kunyomi: 'かさ', meaning: 'Payung', example: '傘 (kasa)' }
    ]
};

// === GAME WORDS ===
const gameWords = [
    { jp: 'さくら', romaji: 'sakura', meaning: 'Bunga Sakura' },
    { jp: 'すし', romaji: 'sushi', meaning: 'Sushi' },
    { jp: 'いぬ', romaji: 'inu', meaning: 'Anjing' },
    { jp: 'ねこ', romaji: 'neko', meaning: 'Kucing' },
    { jp: 'うみ', romaji: 'umi', meaning: 'Laut' },
    { jp: 'やま', romaji: 'yama', meaning: 'Gunung' },
    { jp: 'ひ', romaji: 'hi', meaning: 'Matahari' },
    { jp: 'つき', romaji: 'tsuki', meaning: 'Bulan' },
    { jp: 'あめ', romaji: 'ame', meaning: 'Hujan' },
    { jp: 'ゆき', romaji: 'yuki', meaning: 'Salju' },
    { jp: 'き', romaji: 'ki', meaning: 'Pohon' },
    { jp: 'はな', romaji: 'hana', meaning: 'Bunga' },
    { jp: 'ほん', romaji: 'hon', meaning: 'Buku' },
    { jp: 'くるま', romaji: 'kuruma', meaning: 'Mobil' },
    { jp: 'おちゃ', romaji: 'ocha', meaning: 'Teh' },
    { jp: 'さかな', romaji: 'sakana', meaning: 'Ikan' },
    { jp: 'ラーメン', romaji: 'raamen', meaning: 'Ramen' },
    { jp: 'コーヒー', romaji: 'koohii', meaning: 'Kopi' },
    { jp: 'パン', romaji: 'pan', meaning: 'Roti' },
    { jp: 'ミルク', romaji: 'miruku', meaning: 'Susu' }
];

// === PRACTICE SENTENCES ===
const practiceSentences = [
    {
        meaning: 'Saya adalah murid',
        romaji: 'Watashi wa gakusei desu',
        correct: ['わたし', 'は', 'がくせい', 'です'],
        words: ['です', 'がくせい', 'は', 'わたし']
    },
    {
        meaning: 'Ini buku saya',
        romaji: 'Kore wa watashi no hon desu',
        correct: ['これは', 'わたしの', 'ほん', 'です'],
        words: ['ほん', 'です', 'これは', 'わたしの']
    },
    {
        meaning: 'Saya makan sushi',
        romaji: 'Watashi wa sushi o tabemasu',
        correct: ['わたし', 'は', 'すし', 'を', 'たべます'],
        words: ['たべます', 'すし', 'は', 'を', 'わたし']
    },
    {
        meaning: 'Hari ini panas',
        romaji: 'Kyou wa atsui desu',
        correct: ['きょう', 'は', 'あつい', 'です'],
        words: ['です', 'あつい', 'きょう', 'は']
    },
    {
        meaning: 'Saya pergi ke sekolah',
        romaji: 'Watashi wa gakkou e ikimasu',
        correct: ['わたし', 'は', 'がっこう', 'へ', 'いきます'],
        words: ['いきます', 'がっこう', 'へ', 'は', 'わたし']
    },
    {
        meaning: 'Kucing itu lucu',
        romaji: 'Sono neko wa kawaii desu',
        correct: ['その', 'ねこ', 'は', 'かわいい', 'です'],
        words: ['かわいい', 'は', 'その', 'です', 'ねこ']
    },
    {
        meaning: 'Saya minum air',
        romaji: 'Watashi wa mizu o nomimasu',
        correct: ['わたし', 'は', 'みず', 'を', 'のみます'],
        words: ['のみます', 'みず', 'を', 'は', 'わたし']
    },
    {
        meaning: 'Teman saya datang',
        romaji: 'Tomodachi ga kimasu',
        correct: ['ともだち', 'が', 'きます'],
        words: ['きます', 'ともだち', 'が']
    },
    {
        meaning: 'Selamat siang',
        romaji: 'Konnichiwa',
        correct: ['こんにちは'],
        words: ['こんにちは']
    },
    {
        meaning: 'Selamat malam',
        romaji: 'Konbanwa',
        correct: ['こんばんは'],
        words: ['こんばんは']
    }
];

// === LEADERBOARD DATA ===
const leaderboardData = [
    { rank: 1, name: 'Hiroshi', avatar: '🦊', bg: 'var(--gradient-gold)', xp: 18920, level: 25 },
    { rank: 2, name: 'Sakura', avatar: '🐼', bg: 'var(--gradient-secondary)', xp: 12450, level: 18 },
    { rank: 3, name: 'Yuki', avatar: '🐰', bg: 'var(--gradient-accent)', xp: 9870, level: 15 },
    { rank: 4, name: 'Kenji', avatar: '🐯', bg: 'var(--gradient-fire)', xp: 8340, level: 13 },
    { rank: 5, name: 'Aiko', avatar: '🦋', bg: 'var(--gradient-ocean)', xp: 7210, level: 11 },
    { rank: 6, name: 'Ryu', avatar: '🐉', bg: 'var(--gradient-primary)', xp: 6580, level: 10 },
    { rank: 7, name: 'Hana', avatar: '🌸', bg: 'var(--gradient-sunset)', xp: 5420, level: 9 },
    { rank: 8, name: 'Taro', avatar: '🐻', bg: 'var(--gradient-night)', xp: 4890, level: 8 },
    { rank: 9, name: 'Mei', avatar: '🦄', bg: 'var(--gradient-kanji)', xp: 3750, level: 7 },
    { rank: 10, name: 'Kaito', avatar: '🐺', bg: 'var(--gradient-secondary)', xp: 2980, level: 6 }
];

// === STATE ===
let state = {
    xp: 0,
    level: 1,
    streak: 3,
    wordsLearned: 0,
    theme: 'light'
};

let currentModalData = {};
let quizState = { currentQ: 0, questions: [], timer: null, timeLeft: 10 };
let gameState = { difficulty: 'easy', currentQ: 0, score: 0, correct: 0, wrong: 0, questions: [], timer: null, timeLeft: 10 };
let practiceState = { currentQ: 0, answer: [], questions: [] };

// === INIT ===
function init() {
    loadState();
    applyTheme();
    renderHiragana('all');
    renderKatakana('all');
    renderKanji('N5');
    renderLeaderboard();
    updateStats();
}

function loadState() {
    const saved = localStorage.getItem('nihongoMasterV3');
    if (saved) state = { ...state, ...JSON.parse(saved) };
}

function saveState() {
    localStorage.setItem('nihongoMasterV3', JSON.stringify(state));
    updateStats();
}

function updateStats() {
    document.getElementById('streak-display').innerText = state.streak;
    document.getElementById('stat-streak').innerText = state.streak;
    document.getElementById('stat-xp').innerText = state.xp;
    document.getElementById('stat-words').innerText = state.wordsLearned;
    document.getElementById('stat-level').innerText = state.level;
    document.getElementById('acc-level').innerText = state.level;
    document.getElementById('acc-xp').innerText = state.xp;
    document.getElementById('acc-streak').innerText = state.streak;
    const progress = (state.xp % 50) * 2;
    document.getElementById('hero-progress-bar').style.width = progress + '%';
    document.getElementById('hero-progress-text').innerText = `${state.xp % 50}/50 XP`;
}

// === NAVIGATION ===
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screenId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navMap = { 'home': 0, 'leaderboard': 1, 'account': 2 };
    if (navMap[screenId] !== undefined) {
        document.querySelectorAll('.nav-item')[navMap[screenId]].classList.add('active');
    }

    if (screenId === 'quiz') initQuiz();
    if (screenId === 'game') resetGameScreen();
    if (screenId === 'practice') initPractice();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === HIRAGANA ===
function renderHiragana(group) {
    const grid = document.getElementById('hiragana-grid');
    grid.innerHTML = '';
    const filtered = group === 'all' ? hiraganaData : hiraganaData.filter(h => h.group === group);
    filtered.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'char-card anim-fade';
        card.style.animationDelay = (idx * 0.02) + 's';
        card.innerHTML = `<div class="jp">${item.char}</div><div class="romaji">${item.romaji}</div>`;
        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
}

function switchHiraganaTab(group, el) {
    document.querySelectorAll('#hiragana-tabs .tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderHiragana(group);
}

// === KATAKANA ===
function renderKatakana(group) {
    const grid = document.getElementById('katakana-grid');
    grid.innerHTML = '';
    const filtered = group === 'all' ? katakanaData : katakanaData.filter(h => h.group === group);
    filtered.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'char-card anim-fade';
        card.style.animationDelay = (idx * 0.02) + 's';
        card.innerHTML = `<div class="jp">${item.char}</div><div class="romaji">${item.romaji}</div>`;
        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
}

function switchKatakanaTab(group, el) {
    document.querySelectorAll('#katakana-tabs .tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderKatakana(group);
}

// === KANJI ===
function renderKanji(level) {
    const grid = document.getElementById('kanji-grid');
    grid.innerHTML = '';
    const data = kanjiData[level] || [];
    const titles = {
        N5: 'JLPT N5 - Pemula',
        N4: 'JLPT N4 - Dasar',
        N3: 'JLPT N3 - Menengah',
        N2: 'JLPT N2 - Lanjutan',
        N1: 'JLPT N1 - Master',
        basic: 'Kanji Basic - Kosakata Sehari-hari'
    };
    const descs = {
        N5: `${data.length} kanji dasar`,
        N4: `${data.length} kanji sehari-hari`,
        N3: `${data.length} kanji menengah`,
        N2: `${data.length} kanji lanjutan`,
        N1: `${data.length} kanji tingkat tinggi`,
        basic: `${data.length} kanji kosakata`
    };
    document.getElementById('kanji-level-title').innerText = titles[level];
    document.getElementById('kanji-level-desc').innerText = descs[level];
    
    data.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'char-card anim-fade';
        card.style.animationDelay = (idx * 0.03) + 's';
        card.innerHTML = `
            <div class="jp">${item.kanji}</div>
            <div class="romaji">${item.kunyomi !== '-' ? item.kunyomi : item.onyomi}</div>
            <div class="meaning">${item.meaning}</div>
        `;
        card.onclick = () => openKanjiModal(item);
        grid.appendChild(card);
    });
}

function switchKanjiTab(level, el) {
    document.querySelectorAll('#kanji-tabs .tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderKanji(level);
}

// === MODAL ===
function openModal(data) {
    currentModalData = data;
    document.getElementById('modal-jp').innerText = data.char;
    document.getElementById('modal-romaji').innerText = data.romaji;
    document.getElementById('modal-meaning').innerText = data.meaning;
    document.getElementById('modal-example').innerText = data.example;
    document.getElementById('modal-example-meaning').innerText = '';
    document.getElementById('char-modal').classList.add('active');
    playAudio(data.char);
}

function openKanjiModal(data) {
    currentModalData = data;
    document.getElementById('modal-jp').innerText = data.kanji;
    document.getElementById('modal-romaji').innerText = `${data.onyomi} / ${data.kunyomi}`;
    document.getElementById('modal-meaning').innerText = data.meaning;
    document.getElementById('modal-example').innerText = data.example;
    document.getElementById('modal-example-meaning').innerText = '';
    document.getElementById('char-modal').classList.add('active');
    playAudio(data.kanji);
}

function closeModal(e) {
    if (e.target.id === 'char-modal') {
        document.getElementById('char-modal').classList.remove('active');
    }
}

// === AUDIO ===
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// === QUIZ (10 soal) ===
function initQuiz() {
    quizState.currentQ = 0;
    quizState.questions = [];
    // Mix dari hiragana, katakana, dan kanji
    const allChars = [...hiraganaData, ...katakanaData];
    const shuffled = allChars.sort(() => Math.random() - 0.5);
    for(let i = 0; i < 10; i++) {
        const correct = shuffled[i];
        const options = [correct.romaji];
        while(options.length < 4) {
            const random = allChars[Math.floor(Math.random() * allChars.length)].romaji;
            if(!options.includes(random)) options.push(random);
        }
        options.sort(() => Math.random() - 0.5);
        quizState.questions.push({ ...correct, options });
    }
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (quizState.currentQ >= quizState.questions.length) {
        finishQuiz();
        return;
    }
    const q = quizState.questions[quizState.currentQ];
    document.getElementById('quiz-question').innerText = q.char;
    document.getElementById('quiz-romaji').innerText = '';
    document.getElementById('quiz-progress').style.width = ((quizState.currentQ / 10) * 100) + '%';
    document.getElementById('quiz-counter').innerText = `${quizState.currentQ + 1}/10`;
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => checkQuizAnswer(btn, opt, q.romaji);
        optionsDiv.appendChild(btn);
    });
    
    playAudio(q.char);
}

function checkQuizAnswer(btn, selected, correct) {
    const buttons = document.querySelectorAll('#quiz-options .quiz-option');
    buttons.forEach(b => b.disabled = true);
    buttons.forEach(b => b.classList.add('disabled'));

    if (selected === correct) {
        btn.classList.add('correct');
        addXP(10);
        showToast(`✅ Benar! +10 XP (${correct})`, 'success');
        document.getElementById('quiz-romaji').innerText = `✓ ${correct}`;
        setTimeout(() => {
            quizState.currentQ++;
            renderQuizQuestion();
        }, 1000);
    } else {
        btn.classList.add('wrong');
        buttons.forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
        showToast(`❌ Jawaban salah. Jawaban yang benar: ${correct}`, 'error');
        document.getElementById('quiz-romaji').innerText = `✗ ${correct}`;
        setTimeout(() => {
            quizState.currentQ++;
            renderQuizQuestion();
        }, 1500);
    }
}

function finishQuiz() {
    addXP(50);
    triggerConfetti();
    showToast('🎉 Quiz Selesai! +50 XP', 'success');
    document.getElementById('quiz-container').innerHTML = `
        <div style="text-align:center; padding:40px 20px;">
            <div style="font-size:5rem; margin-bottom:20px; animation: bounce 1s ease infinite;">🎉</div>
            <h2 style="font-size:1.8rem; font-weight:900; margin-bottom:10px;">Luar Biasa!</h2>
            <p style="color:var(--muted); margin:10px 0 20px; font-weight:600;">Kamu menyelesaikan quiz</p>
            <div style="display:flex; justify-content:center; gap:20px; margin:20px 0;">
                <div style="text-align:center;">
                    <div style="font-size:2rem; font-weight:900; color:var(--warning);">+50</div>
                    <div style="font-size:0.8rem; color:var(--muted); font-weight:700;">XP</div>
                </div>
            </div>
            <button class="btn btn-primary" onclick="navigate('home')" style="width:100%; margin-top:20px;">
                <i class="fas fa-home"></i> Kembali
            </button>
        </div>
    `;
    saveState();
}

// === GAME: TEBAK KATA ===
function resetGameScreen() {
    document.getElementById('game-setup').style.display = 'block';
    document.getElementById('game-play').style.display = 'none';
    document.getElementById('game-result').style.display = 'none';
}

function selectDifficulty(diff, el) {
    document.querySelectorAll('.diff-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    gameState.difficulty = diff;
}

function startGame() {
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';
    
    gameState.currentQ = 0;
    gameState.score = 0;
    gameState.correct = 0;
    gameState.wrong = 0;
    
    const diffConfig = {
        easy: { options: 4, time: 15 },
        normal: { options: 4, time: 10 },
        hard: { options: 6, time: 7 }
    };
    gameState.config = diffConfig[gameState.difficulty];
    
    // Generate 10 questions
    gameState.questions = [];
    const shuffled = [...gameWords].sort(() => Math.random() - 0.5).slice(0, 10);
    shuffled.forEach(word => {
        const options = [word.meaning];
        const others = gameWords.filter(w => w.meaning !== word.meaning);
        while(options.length < gameState.config.options) {
            const rand = others[Math.floor(Math.random() * others.length)];
            if (!options.includes(rand.meaning)) options.push(rand.meaning);
        }
        options.sort(() => Math.random() - 0.5);
        gameState.questions.push({ ...word, options });
    });
    
    renderGameQuestion();
}

function renderGameQuestion() {
    if (gameState.currentQ >= gameState.questions.length) {
        finishGame();
        return;
    }
    const q = gameState.questions[gameState.currentQ];
    document.getElementById('game-word-jp').innerText = q.jp;
    document.getElementById('game-word-romaji').innerText = `(${q.romaji})`;
    document.getElementById('game-score').innerText = gameState.score;
    document.getElementById('game-correct').innerText = gameState.correct;
    document.getElementById('game-wrong').innerText = gameState.wrong;
    document.getElementById('game-progress').style.width = ((gameState.currentQ / gameState.questions.length) * 100) + '%';
    
    const optionsDiv = document.getElementById('game-options');
    optionsDiv.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => checkGameAnswer(btn, opt, q.meaning);
        optionsDiv.appendChild(btn);
    });
    
    startGameTimer();
    playAudio(q.jp);
}

function startGameTimer() {
    gameState.timeLeft = gameState.config.time;
    document.getElementById('game-time').innerText = gameState.timeLeft;
    document.getElementById('game-timer').classList.remove('warning');
    
    if (gameState.timer) clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('game-time').innerText = gameState.timeLeft;
        const pct = (gameState.timeLeft / gameState.config.time) * 100;
        document.getElementById('game-progress').style.width = 
            ((gameState.currentQ / gameState.questions.length) * 100) + (pct / gameState.questions.length) + '%';
        
        if (gameState.timeLeft <= 3) {
            document.getElementById('game-timer').classList.add('warning');
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            gameState.wrong++;
            const buttons = document.querySelectorAll('#game-options .quiz-option');
            buttons.forEach(b => {
                b.disabled = true;
                b.classList.add('disabled');
                if (b.innerText === gameState.questions[gameState.currentQ].meaning) {
                    b.classList.add('correct');
                }
            });
            showToast('⏰ Waktu habis!', 'error');
            setTimeout(() => {
                gameState.currentQ++;
                renderGameQuestion();
            }, 1500);
        }
    }, 1000);
}

function checkGameAnswer(btn, selected, correct) {
    clearInterval(gameState.timer);
    const buttons = document.querySelectorAll('#game-options .quiz-option');
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('disabled');
    });

    if (selected === correct) {
        btn.classList.add('correct');
        gameState.correct++;
        gameState.score += 10 + (gameState.timeLeft * 2);
        addXP(5);
        showToast(`✅ Benar! +${10 + (gameState.timeLeft * 2)} poin`, 'success');
        setTimeout(() => {
            gameState.currentQ++;
            renderGameQuestion();
        }, 800);
    } else {
        btn.classList.add('wrong');
        gameState.wrong++;
        buttons.forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
        showToast(`❌ Salah. Jawaban: ${correct}`, 'error');
        setTimeout(() => {
            gameState.currentQ++;
            renderGameQuestion();
        }, 1200);
    }
}

function finishGame() {
    addXP(30);
    triggerConfetti();
    document.getElementById('game-play').style.display = 'none';
    document.getElementById('game-result').style.display = 'block';
    document.getElementById('game-result').innerHTML = `
        <div style="text-align:center; padding:30px 20px;">
            <div style="font-size:5rem; margin-bottom:20px; animation: bounce 1s ease infinite;">🏆</div>
            <h2 style="font-size:1.8rem; font-weight:900; margin-bottom:10px;">Game Selesai!</h2>
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:20px 0;">
                <div style="background:var(--card); padding:16px; border-radius:16px; border:1px solid var(--border);">
                    <div style="font-size:1.6rem; font-weight:900; color:var(--primary);">${gameState.score}</div>
                    <div style="font-size:0.7rem; color:var(--muted); font-weight:700;">Skor</div>
                </div>
                <div style="background:var(--card); padding:16px; border-radius:16px; border:1px solid var(--border);">
                    <div style="font-size:1.6rem; font-weight:900; color:var(--secondary);">${gameState.correct}</div>
                    <div style="font-size:0.7rem; color:var(--muted); font-weight:700;">Benar</div>
                </div>
                <div style="background:var(--card); padding:16px; border-radius:16px; border:1px solid var(--border);">
                    <div style="font-size:1.6rem; font-weight:900; color:var(--danger);">${gameState.wrong}</div>
                    <div style="font-size:0.7rem; color:var(--muted); font-weight:700;">Salah</div>
                </div>
            </div>
            <div style="background:var(--gradient-primary); color:white; padding:14px; border-radius:16px; margin:16px 0; font-weight:800;">
                +30 XP Bonus!
            </div>
            <button class="btn btn-primary" onclick="resetGameScreen()" style="width:100%; margin-top:10px;">
                <i class="fas fa-redo"></i> Main Lagi
            </button>
            <button class="btn btn-ghost" onclick="navigate('home')" style="width:100%; margin-top:10px;">
                <i class="fas fa-home"></i> Kembali
            </button>
        </div>
    `;
    saveState();
}

// === PRACTICE: MENYUSUN KATA ===
function initPractice() {
    practiceState.currentQ = 0;
    practiceState.questions = [...practiceSentences].sort(() => Math.random() - 0.5).slice(0, 5);
    document.getElementById('practice-area').style.display = 'block';
    document.getElementById('practice-result').style.display = 'none';
    renderPracticeQuestion();
}

function renderPracticeQuestion() {
    if (practiceState.currentQ >= practiceState.questions.length) {
        finishPractice();
        return;
    }
    const q = practiceState.questions[practiceState.currentQ];
    practiceState.answer = [];
    
    document.getElementById('practice-meaning').innerText = `"${q.meaning}"`;
    document.getElementById('practice-romaji').innerText = `(${q.romaji})`;
    document.getElementById('practice-counter').innerText = `${practiceState.currentQ + 1}/${practiceState.questions.length}`;
    document.getElementById('practice-progress').style.width = ((practiceState.currentQ / practiceState.questions.length) * 100) + '%';
    
    renderWordBank(q.words);
    renderAnswerArea();
}

function renderWordBank(words) {
    const bank = document.getElementById('word-bank');
    bank.innerHTML = '';
    words.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.className = 'word-chip anim-pop';
        chip.style.animationDelay = (idx * 0.05) + 's';
        chip.innerText = word;
        chip.dataset.word = word;
        chip.onclick = () => addWordToAnswer(word, chip);
        bank.appendChild(chip);
    });
}

function addWordToAnswer(word, chip) {
    if (chip.classList.contains('used')) return;
    practiceState.answer.push(word);
    chip.classList.add('used');
    renderAnswerArea();
}

function removeWordFromAnswer(idx) {
    const word = practiceState.answer[idx];
    practiceState.answer.splice(idx, 1);
    const chips = document.querySelectorAll('#word-bank .word-chip');
    for (let chip of chips) {
        if (chip.dataset.word === word && chip.classList.contains('used')) {
            chip.classList.remove('used');
            break;
        }
    }
    renderAnswerArea();
}

function renderAnswerArea() {
    const area = document.getElementById('practice-answer');
    area.innerHTML = '';
    if (practiceState.answer.length === 0) {
        area.innerHTML = '<div style="color:var(--muted); font-size:0.85rem; font-weight:600; padding:10px;">Tap kata di bawah untuk menyusun kalimat...</div>';
        area.classList.remove('active');
    } else {
        area.classList.add('active');
        practiceState.answer.forEach((word, idx) => {
            const chip = document.createElement('div');
            chip.className = 'word-chip in-answer anim-pop';
            chip.innerText = word;
            chip.onclick = () => removeWordFromAnswer(idx);
            area.appendChild(chip);
        });
    }
}

function resetPractice() {
    practiceState.answer = [];
    const q = practiceState.questions[practiceState.currentQ];
    renderWordBank(q.words);
    renderAnswerArea();
}

function checkPractice() {
    const q = practiceState.questions[practiceState.currentQ];
    const isCorrect = JSON.stringify(practiceState.answer) === JSON.stringify(q.correct);
    
    if (isCorrect) {
        addXP(20);
        triggerConfetti();
        showToast(`✅ Benar! +20 XP (${q.meaning})`, 'success');
        setTimeout(() => {
            practiceState.currentQ++;
            renderPracticeQuestion();
        }, 1000);
    } else {
        showToast(`❌ Coba lagi! Susunan yang benar: ${q.correct.join(' ')}`, 'error');
        document.getElementById('practice-answer').classList.add('anim-shake');
        setTimeout(() => {
            document.getElementById('practice-answer').classList.remove('anim-shake');
        }, 500);
    }
}

function finishPractice() {
    addXP(50);
    triggerConfetti();
    document.getElementById('practice-area').style.display = 'none';
    document.getElementById('practice-result').style.display = 'block';
    document.getElementById('practice-result').innerHTML = `
        <div style="text-align:center; padding:40px 20px;">
            <div style="font-size:5rem; margin-bottom:20px; animation: bounce 1s ease infinite;">🎊</div>
            <h2 style="font-size:1.8rem; font-weight:900; margin-bottom:10px;">Latihan Selesai!</h2>
            <p style="color:var(--muted); margin:10px 0 20px; font-weight:600;">Kamu sudah menguasai kalimat harian</p>
            <div style="background:var(--gradient-ocean); color:white; padding:14px; border-radius:16px; margin:16px 0; font-weight:800;">
                +50 XP Bonus!
            </div>
            <button class="btn btn-primary" onclick="initPractice()" style="width:100%; margin-top:10px;">
                <i class="fas fa-redo"></i> Latihan Lagi
            </button>
            <button class="btn btn-ghost" onclick="navigate('home')" style="width:100%; margin-top:10px;">
                <i class="fas fa-home"></i> Kembali
            </button>
        </div>
    `;
    saveState();
}

// === LEADERBOARD ===
function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    const userRank = { rank: 11, name: 'Kamu', avatar: '🦉', bg: 'var(--gradient-primary)', xp: state.xp, level: state.level, me: true };
    const allUsers = [...leaderboardData];
    let inserted = false;
    for (let i = 0; i < allUsers.length; i++) {
        if (state.xp >= allUsers[i].xp) {
            allUsers.splice(i, 0, {...userRank, rank: i + 1});
            inserted = true;
            break;
        }
    }
    if (!inserted) allUsers.push({...userRank, rank: allUsers.length + 1});
    allUsers.forEach((u, i) => u.rank = i + 1);
    
    allUsers.slice(0, 15).forEach((user, idx) => {
        const item = document.createElement('div');
        item.className = 'lb-item anim-slide-up';
        item.style.animationDelay = (idx * 0.05) + 's';
        if (user.me) item.classList.add('me');
        
        const rankIcon = user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank;
        
        item.innerHTML = `
            <div class="lb-rank">${rankIcon}</div>
            <div class="lb-avatar" style="background: ${user.bg};">${user.avatar}</div>
            <div class="lb-info">
                <div class="lb-name">${user.name} ${user.me ? '(Anda)' : ''}</div>
                <div class="lb-level">Level ${user.level}</div>
            </div>
            <div class="lb-xp">${user.xp.toLocaleString()} XP</div>
        `;
        list.appendChild(item);
    });
}

// === UTILS ===
function addXP(amount) {
    state.xp += amount;
    state.wordsLearned++;
    if (state.xp >= state.level * 100) {
        state.level++;
        triggerConfetti();
        showToast(`🎊 Level Up! Level ${state.level}`, 'success');
    }
    saveState();
    renderLeaderboard();
}

function triggerConfetti() {
    confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#58CC02', '#1CB0F6', '#FFC800', '#CE82FF', '#FF86D0']
    });
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    saveState();
}

function applyTheme() {
    document.body.setAttribute('data-theme', state.theme);
    const toggle = document.getElementById('dark-toggle');
    if (toggle) {
        if (state.theme === 'dark') toggle.classList.add('active');
        else toggle.classList.remove('active');
    }
}

function logout() {
    if (confirm('Yakin ingin keluar?')) {
        showToast('👋 Sampai jumpa!', 'info');
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// === INIT ON LOAD ===
window.onload = init;