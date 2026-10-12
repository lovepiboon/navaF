/* ============================================================
   Navatanee Golf Course & Club — Internationalization (i18n)
   Two languages: English (en) and Japanese (ja).

   HOW TO ADD JAPANESE TEXT:
   -------------------------------------------------------------
   Every key in the "ja" object below is currently an empty
   string ("").  Just type the Japanese translation between the
   quotes, for example:

       "hero.title": "タイのプレミアゴルフを体験",

   Any key you leave empty ("") automatically falls back to the
   English text, so the site never shows a blank spot while you
   are still translating.
   -------------------------------------------------------------
   Keys marked in HTML_KEYS below may contain HTML (e.g. <br>).
   ============================================================ */
(function () {
  "use strict";

  /* Keys whose text may contain HTML markup (rendered with innerHTML). */
  var HTML_KEYS = {
    "footer.address": true,
    "investor.link": true
  };

  var STORAGE_KEY = "navatanee_lang";
  var DEFAULT_LANG = "en";

  /* ---------- English (source of truth) ---------- */
  var en = {
    // Navigation
    "nav.about": "About Navatanee",
    "nav.membership": "Membership",
    "nav.highlights": "Course Highlight",
    "nav.investor": "Investor Relations",
    "nav.location": "Location",
    "nav.contact": "Contact Us",

    // Hero
    "hero.eyebrow": "Established Excellence · Bangkok, Thailand",
    "hero.title": "Experience Thailand's Premier Golf Destination",
    "hero.subtitle": "Exclusive Membership, World-Class Golf Course, Unforgettable Experience",
    "hero.ctaMember": "Become a Member",
    "hero.ctaExplore": "Explore Golf Course",

    // About
    "about.badgeNum": "50+",
    "about.badgeLabel": "Years of Legacy",
    "about.eyebrow": "About Navatanee",
    "about.title": "A Legacy of Prestige & Precision",
    "about.lead": "Navatanee Golf Course & Club stands as one of Thailand's most storied golfing institutions — a sanctuary where championship-caliber design meets refined hospitality.",
    "about.historyTitle": "Our History",
    "about.historyText": "Host to international championships, Navatanee has shaped the golfing heritage of the region for over five decades with its masterfully crafted layout.",
    "about.visionTitle": "Our Vision",
    "about.visionText": "To deliver an unrivalled golf lifestyle — blending world-class sport, elegant leisure, and a community of distinguished members.",
    "about.feature1": "Championship 18-hole layout",
    "about.feature2": "Award-winning clubhouse",
    "about.feature3": "Members-only privileges",
    "about.feature4": "Signature fine dining",

    // Membership
    "membership.eyebrow": "Membership",
    "membership.title": "1,093 membership rights",
    "membership.intro": "Quantity of Membership Rights / Limited of Number of Members.",
    "membership.card1Cat": "Membership",
    "membership.card1Title": "To Become a Golf Member",
    "membership.card1Desc": "Candidates for Golf membership shall only be owners of golf membership right or be nominated by owners of the membership right. All membership rights have already been distributed. Interested parties should therefore acquire such membership rights from among members or contact Member division for assistance.",
    "membership.card2Cat": "Membership",
    "membership.card2Title": "Category of Membership Right",
    "membership.card2Desc": "There is only one category of membership right. A membership right owner/holder may be nominated only by one new member at one time, regardless of whether such membership is purchased by a natural or juristic person..",
    "membership.card3Cat": "Events",
    "membership.card3Title": "Validity of Membership Right",
    "membership.card3Desc": "A membership right shall be valid as long as the Company is involved business with the Golf Course. Such a membership right may be transferred, sold, bequeathed or taken over by the next-of-kin in the process of law, as the case may be.",
    "membership.card4Cat": "Events",
    "membership.card4Title": "Member Privileges",
    "membership.card4Desc": "The member is entitled to use the club's facilities in accordance with Navatanee Golf Course's Rules and Regulation. Spouse and Children between 15-21 years may enjoy the privilege of joining the course as associate members, which will be subjected to a special green fee rate.",

    // Course Highlights
    "highlights.eyebrow": "Course Highlights",
    "highlights.hole1Num": "6th hole",
    "highlights.hole1Label": "(445 yards, par 4)",
    "highlights.hole1Title": "A monster and possibly one of Asia's best holes",
    "highlights.hole1Text": "Water guards the left side, crosses the fairway and solitary bunker of a two tierred green. A very accurate drive to the green and a good putt is required for par 4.",
    "highlights.hole2Num": "9th hole",
    "highlights.hole2Label": "(552 yards, par 5)",
    "highlights.hole2Title": "A classic water hole",
    "highlights.hole2Text": "The drive, from an elevated tee, is threatened on the left by water, but, play safe to the right and the distance of second shot which must be played across the lake is lengthened. Long hitters may attempt the carry to a small green, guarded by bunkers on the back and right.",
    "highlights.hole3Num": "13th hole",
    "highlights.hole3Label": "(580 yards, par 5)",
    "highlights.hole3Title": "Long hitters",
    "highlights.hole3Text": "Fairway bunkers guard the right side of the fairway where long hitters will be tempted to go for the green. Others will play the second shot to the left for it opens up the approach to a small, well trapped green set in a hollow.",

    // Investor Relations
    "investor.eyebrow": "more information",
    "investor.title": "For Investor",
    "investor.link": "Access to <u><a href=\"http://www.navatanee.com/frameset-50.html\"><i>click link</i></a></u>",

    // Location
    "location.eyebrow": "Location",
    "location.title": "Find Us",
    "location.addressLabel": "Address",
    "location.addressValue": "22 Navatanee Rd., Kwaeng Ramintra, Khet Kannayao, Bangkok 10230, Thailand",
    "location.hoursLabel": "Operating Hours",
    "location.hoursValue": "Mon – Sun · 5:30 AM – 8:00 PM",
    "location.deptMain": "Main Line",
    "location.deptTee": "Tee Time Reservation",
    "location.deptSport": "Sport Club",
    "location.deptRestaurant": "Restaurant",
    "location.tel": "Tel",
    "location.fax": "Fax",
    "location.email": "Email",
    "location.directions": "Get Directions",
    "location.mapText": "Navatanee Golf Course & Club",
    "location.mapSub": "Google Map embed placeholder",

    // Contact
    "contact.eyebrow": "Contact Us",
    "contact.title": "Begin Your Journey",
    "contact.intro": "Reach out to our membership team and we'll be delighted to assist you.",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.success": "Thank you! Your message has been sent. Our team will be in touch shortly.",

    // Footer
    "footer.tagline": "Thailand's premier golf destination, where legacy meets luxury.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.address": "22 Navatanee Rd., Kwaeng Ramintra,<br />Khet Kannayao, Bangkok 10230, Thailand",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved."
  };

  /* ---------- Japanese (日本語) ----------
     Fill in the Japanese text between the quotes.
     Leave "" to fall back to the English text above.        */
  var ja = {
    // Navigation
    "nav.about": "ナワタニゴルフクラブ",
    "nav.membership": "メンバーシップ",
    "nav.highlights": "コースハイライト",
    "nav.investor": "新着情報",
    "nav.location": "アクセスマップ",
    "nav.contact": "お問合わせ",

    // Hero
    "hero.eyebrow": "確かな実績と卓越性 · タイ・バンコク",
    "hero.title": "タイ屈指のゴルフリゾートをご体験ください",
    "hero.subtitle": "特別な会員権、世界屈指のゴルフコース、忘れられない体験",
    "hero.ctaMember": "会員になる",
    "hero.ctaExplore": "ゴルフコースを探索する",

    // About
    "about.badgeNum": "50+",
    "about.badgeLabel": "50年以上の伝統",
    "about.eyebrow": "ナワタニーについて",
    "about.title": "格式と卓越性を受け継ぐ伝統",
    "about.lead": "ナワタニー・ゴルフコース＆クラブは、タイを代表する名門ゴルフクラブのひとつです。チャンピオンシップ仕様のコース設計と洗練されたホスピタリティが調和する特別な空間を提供しています。",
    "about.historyTitle": "沿革",
    "about.historyText": "国際大会の開催実績を誇るナワタニーは、巧みに設計されたコースレイアウトとともに、半世紀以上にわたり地域のゴルフ文化を築いてきました。",
    "about.visionTitle": "ビジョン",
    "about.visionText": "世界水準のゴルフ、上質なレジャー、そして優れた会員コミュニティを融合させ、比類なきゴルフライフスタイルを提供することを目指します。",
    "about.feature1": "チャンピオンシップ仕様の18ホールコース",
    "about.feature2": "受賞歴を誇るクラブハウス",
    "about.feature3": "会員限定の特典",
    "about.feature4": "シグネチャー・ファインダイニング",

    // Membership
    "membership.eyebrow": "メンバーシップ",
    "membership.title": "1,093の会員権",
    "membership.intro": "会員権総数／会員数限定",
    "membership.card1Cat": "メンバーシップ",
    "membership.card1Title": "ゴルフ会員になるには",
    "membership.card1Desc": "ゴルフメンバーになるのは、すでに会員権を所有している人か、もしくは、会員権の所有者から指名された人に限られます。全ての会員権は既に発行済みですため、取得希望者は、会員権所有者から譲り受けますか、弊社に取得の協力を依頼する必要があります。",
    "membership.card2Cat": "メンバーシップ",
    "membership.card2Title": "会員権の種類",
    "membership.card2Desc": "会員権は一種類のみで、会員権の取得者が法人、個人を問わず、一会員権につき一人のメンバーを指名できます。",
    "membership.card3Cat": "会員権",
    "membership.card3Title": "会員権の有効性",
    "membership.card3Desc": "会員権は、弊社がゴルフ事業を継続する限り無期限に有効です。会員権は、譲渡、販売あるいは法の定めるところにより親族相続などができます。",
    "membership.card4Cat": "特典",
    "membership.card4Title": "会員特典",
    "membership.card4Desc": "会員はナワタニーゴルフコースの規則に従い、クラブ施設をご利用いただけます。また、配偶者および15歳から21歳までのお子様は準会員として登録でき、特別グリーンフィー料金が適用されます。",


    // Course Highlights
    "highlights.eyebrow": "コースのハイライト",
    "highlights.hole1Num": "6番ホール",
    "highlights.hole1Label": "（445ヤード、パー4）",
    "highlights.hole1Title": "モンスターホール",
    "highlights.hole1Text": "おそらくアジアでベストのホールでしょう。 左側は水でガードされ、フェアウエーと2段グリーンの間も水で分断されています。パー4打で上がるには、グリーンへの正確なショットとナイスパットが要求されます。",
    "highlights.hole2Num": "9番ホール",
    "highlights.hole2Label": "（552ヤード、パー5）",
    "highlights.hole2Title": "古典的なウオーターハザードのホールです",
    "highlights.hole2Text": "高い所から打つティーショットは、左サイドの水が気になりますが、右サイドに打てば安全です。セカンドショットは、池越えの長いショットとなります。ロングヒッターなら，右と奥に配されたバンカーで守られた小さなグリーンを、直接狙うことができます。",
    "highlights.hole3Num": "13番ホール",
    "highlights.hole3Label": "（580ヤード、パー5）",
    "highlights.hole3Title": "ゴルフホールの典型的なウォーターハザード",
    "highlights.hole3Text": "フェア－ウエーの右サイドは、フェアウエーバンカーがガードしていますが、ロングヒッターなら直接グリーンを狙いたくなるでしょう。そうでなければ、セカンドは、左サイドに打つことになります。そこなら、トリッキーで窪みになった小さなグリーンへのアプローチが開けています。",

    // Investor Relations
    "investor.eyebrow": "詳細情報",
    "investor.title": "投資家の皆様へ",
    "investor.link": "アクセス <u><a href=\"http://www.navatanee.com/frameset-50.html\"><i>リンクをクリックしてください</i></a></u>",

    // Location
    "location.eyebrow": "位置",
    "location.title": "アクセス",
    "location.addressLabel": "住所",
    "location.addressValue": "22 ナワタニー通り, ラムイントラ地区, ケート・カンナーヤーオ, バンコク, 10230, タイ",
    "location.hoursLabel": "営業時間",
    "location.hoursValue": "月～日 · 午前5時30分～午後8時",
    "location.deptMain": "代表電話番号",
    "location.deptTee": "ティータイムの予約",
    "location.deptSport": "スポーツクラブ",
    "location.deptRestaurant": "レストラン",
    "location.tel": "電話",
    "location.fax": "",
    "location.email": "メール",
    "location.directions": "ルートを表示",
    "location.mapText": "์",
    "location.mapSub": "",

    // Contact
    "contact.eyebrow": "お問い合わせ",
    "contact.title": "旅を始めよう",
    "contact.intro": "当社の会員担当チームまでご連絡ください。喜んでお手伝いさせていただきます。",
    "contact.name": "名前",
    "contact.email": "メール",
    "contact.phone": "電話番号",
    "contact.subject": "主題",
    "contact.message": "メッセージ",
    "contact.submit": "提出する",
    "contact.success": "成功",

    // Footer
    "footer.tagline": "伝統とラグジュアリーが融合する、タイ屈指のゴルフ・デスティネーション。",
    "footer.quickLinks": "クイックリンク",
    "footer.contact": "接触",
    "footer.address": "住所",
    "footer.followUs": "私たちに従ってください",
    "footer.rights": "無断転載を禁じます。"
  };

  var dictionaries = { en: en, ja: ja };

  /* Resolve a translation for a key in a given language, with
     graceful fallback to English when the value is missing/empty. */
  function translate(lang, key) {
    var dict = dictionaries[lang] || dictionaries[DEFAULT_LANG];
    var value = dict ? dict[key] : undefined;
    if (value === undefined || value === "") {
      value = en[key]; // fall back to English
    }
    return value;
  }

  /* Apply the chosen language to every [data-i18n] element. */
  function applyLanguage(lang) {
    if (!dictionaries[lang]) lang = DEFAULT_LANG;

    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var text = translate(lang, key);
      if (text === undefined) return; // unknown key: leave markup untouched

      if (HTML_KEYS[key]) {
        node.innerHTML = text;
      } else {
        node.textContent = text;
      }
    });

    // Update <html lang> for accessibility/SEO.
    document.documentElement.setAttribute("lang", lang);

    // Reflect state on the switch buttons.
    var buttons = document.querySelectorAll(".lang-switch__btn");
    buttons.forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    // Remember the choice.
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getInitialLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && dictionaries[stored]) return stored;
    return DEFAULT_LANG;
  }

  function initLanguageSwitch() {
    var buttons = document.querySelectorAll(".lang-switch__btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    applyLanguage(getInitialLang());
  }

  // Expose a tiny API in case it is useful elsewhere.
  window.NavataneeI18n = {
    setLanguage: applyLanguage,
    translate: translate
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitch);
  } else {
    initLanguageSwitch();
  }
})();
