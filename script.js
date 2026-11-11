
// =====================================
// VALLYX - DOM ELEMENTS
// =====================================

const languageButton = document.getElementById("languageButton");
const generateButton = document.getElementById("generateIdentity");
const identityResult = document.getElementById("identityResult");
const countrySelect = document.getElementById("countrySelect");


// =====================================
// VALLYX - LANGUAGE SYSTEM
// =====================================

let currentLanguage = "en";

const translations = {

    en: {
        about: "About",
        features: "Features",
        privacy: "Privacy",

        label: "ANONYMOUS COMMUNICATION",
        title1: "Stay unknown.",
        title2: "Stay connected.",
        description: "Meet people, share thoughts, and communicate freely without revealing your real identity.",

        start: "Get Started",
        learn: "Learn More",

        featureTitle: "One platform. More freedom.",

        publicRooms: "Public Rooms",
        publicDescription: "Join conversations with people around the world.",

        privateMessages: "Private Messages",
        privateDescription: "Have private conversations without using your real name.",

        anonymousIdentity: "Anonymous Identity",
        identityDescription: "Use a random nickname and keep your identity private.",

        aboutTitle: "Communication without boundaries.",
        aboutDescription: "Vallyx is a global platform designed to make online communication simple and accessible.",

        footer: "© 2026 Vallyx. All rights reserved.",

        identityTitle: "Create your anonymous identity",
        identityDescription: "No real name. No phone number. Just choose your identity and start connecting.",

        countryLabel: "Choose your country",

        worldwide: "Worldwide",
        iraq: "Iraq",
        saudi: "Saudi Arabia",
        uae: "UAE",
        usa: "United States",
        uk: "United Kingdom",
        germany: "Germany",
        france: "France",
        turkey: "Turkey",

        generate: "Generate my identity",
        identityPlaceholder: "Your anonymous identity will appear here."
    },

    ar: {
        about: "من نحن",
        features: "المميزات",
        privacy: "الخصوصية",

        label: "تواصل دون كشف هويتك",
        title1: "ابقَ مجهولاً.",
        title2: "ابقَ متصلاً.",
        description: "تعرّف على أشخاص، وشارك أفكارك، وتواصل بحرية دون الكشف عن هويتك الحقيقية.",

        start: "ابدأ الآن",
        learn: "اكتشف المزيد",

        featureTitle: "منصة واحدة. حرية أكبر.",

        publicRooms: "الغرف العامة",
        publicDescription: "انضم إلى محادثات مع أشخاص من جميع أنحاء العالم.",

        privateMessages: "الرسائل الخاصة",
        privateDescription: "تحدث بشكل خاص دون استخدام اسمك الحقيقي.",

        anonymousIdentity: "هوية مجهولة",
        identityDescription: "استخدم اسماً مستعاراً عشوائياً وحافظ على خصوصيتك.",

        aboutTitle: "تواصل بلا حدود.",
        aboutDescription: "Vallyx منصة عالمية مصممة لجعل التواصل عبر الإنترنت بسيطاً ومتاحاً للجميع.",

        footer: "© 2026 Vallyx. جميع الحقوق محفوظة.",

        identityTitle: "أنشئ هويتك المجهولة",
        identityDescription: "لا اسم حقيقي ولا رقم هاتف. اختر هويتك وابدأ التواصل.",

        countryLabel: "اختر بلدك",

        worldwide: "جميع أنحاء العالم",
        iraq: "العراق",
        saudi: "السعودية",
        uae: "الإمارات",
        usa: "الولايات المتحدة",
        uk: "المملكة المتحدة",
        germany: "ألمانيا",
        france: "فرنسا",
        turkey: "تركيا",

        generate: "أنشئ هويتي",
        identityPlaceholder: "ستظهر هويتك المجهولة هنا."
    }

};


// =====================================
// VALLYX - NICKNAME SYSTEM
// =====================================

const firstNames = [
    "Silent",
    "Blue",
    "Mystic",
    "Shadow",
    "Golden",
    "Wild",
    "Cosmic",
    "Hidden"
];

const secondNames = [
    "Fox",
    "Wolf",
    "Falcon",
    "Tiger",
    "Eagle",
    "Panther",
    "Dragon",
    "Lion"
];


// =====================================
// APPLY LANGUAGE
// =====================================

function applyLanguage(language) {

    currentLanguage = language;

    const t = translations[language];

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";


    // Navigation

    document.querySelector("nav a:nth-child(1)").textContent = t.about;
    document.querySelector("nav a:nth-child(2)").textContent = t.features;
    document.querySelector("nav a:nth-child(3)").textContent = t.privacy;


    // Hero

    document.querySelector(".hero > p:first-child").textContent = t.label;

    document.querySelector(".hero h1").innerHTML =
        `${t.title1}<br>${t.title2}`;

    document.querySelector(".hero > p:nth-of-type(2)").textContent = t.description;

    document.querySelector(".actions a:first-child").textContent = t.start;
    document.querySelector(".actions a:last-child").textContent = t.learn;


    // Features

    document.querySelector("#features h2").textContent = t.featureTitle;

    const cards = document.querySelectorAll("#features div");

    cards[0].querySelector("h3").textContent = t.publicRooms;
    cards[0].querySelector("p").textContent = t.publicDescription;

    cards[1].querySelector("h3").textContent = t.privateMessages;
    cards[1].querySelector("p").textContent = t.privateDescription;

    cards[2].querySelector("h3").textContent = t.anonymousIdentity;
    cards[2].querySelector("p").textContent = t.identityDescription;


    // About

    document.querySelector("#about h2").textContent = t.aboutTitle;
    document.querySelector("#about p").textContent = t.aboutDescription;


    // Footer

    document.querySelector("footer p").textContent = t.footer;


    // Anonymous Identity Section

    document.querySelector("#start h2").textContent = t.identityTitle;

    document.querySelector("#start > p").textContent = t.identityDescription;

    document.querySelector("#start label").textContent = t.countryLabel;


    // Country Options

    const options = countrySelect.options;

    options[0].textContent = `🌍 ${t.worldwide}`;
    options[1].textContent = `🇮🇶 ${t.iraq}`;
    options[2].textContent = `🇸🇦 ${t.saudi}`;
    options[3].textContent = `🇦🇪 ${t.uae}`;
    options[4].textContent = `🇺🇸 ${t.usa}`;
    options[5].textContent = `🇬🇧 ${t.uk}`;
    options[6].textContent = `🇩🇪 ${t.germany}`;
    options[7].textContent = `🇫🇷 ${t.france}`;
    options[8].textContent = `🇹🇷 ${t.turkey}`;


    // Generate Button

    generateButton.textContent = t.generate;


    // Identity Placeholder

    const nickname = localStorage.getItem("vallyx-nickname");

    if (!nickname) {
        identityResult.textContent = t.identityPlaceholder;
    }


    // Language Button

    languageButton.textContent =
        language === "en" ? "AR" : "EN";


    // Save Language

    localStorage.setItem("vallyx-language", language);

}


// =====================================
// GENERATE RANDOM IDENTITY
// =====================================

function generateIdentity() {

    const first = firstNames[
        Math.floor(Math.random() * firstNames.length)
    ];

    const second = secondNames[
        Math.floor(Math.random() * secondNames.length)
    ];

    const number = Math.floor(Math.random() * 900) + 100;

    const nickname = `${first}${second}_${number}`;

    const country = countrySelect.value;

    localStorage.setItem("vallyx-nickname", nickname);

    localStorage.setItem("vallyx-country", country);

    identityResult.textContent = `${country} ${nickname}`;

}


// =====================================
// EVENT LISTENERS
// =====================================


// Switch Language

languageButton.addEventListener("click", function() {

    const newLanguage =
        currentLanguage === "en" ? "ar" : "en";

    applyLanguage(newLanguage);

});


// Generate Identity

generateButton.addEventListener("click", generateIdentity);


// Save Country When Changed

countrySelect.addEventListener("change", function() {

    const country = countrySelect.value;

    localStorage.setItem("vallyx-country", country);

    const nickname = localStorage.getItem("vallyx-nickname");

    if (nickname) {

        identityResult.textContent = `${country} ${nickname}`;

    }

});


// =====================================
// RESTORE SAVED DATA
// =====================================


// Restore Country

const savedCountry = localStorage.getItem("vallyx-country");

if (savedCountry) {

    countrySelect.value = savedCountry;

}


// Restore Language

const savedLanguage = localStorage.getItem("vallyx-language");

if (savedLanguage === "ar" || savedLanguage === "en") {

    applyLanguage(savedLanguage);

} else {

    applyLanguage("en");

}


// Restore Identity

const savedNickname = localStorage.getItem("vallyx-nickname");

if (savedNickname) {

    identityResult.textContent =
        `${countrySelect.value} ${savedNickname}`;

}
