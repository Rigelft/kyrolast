document.getElementById('current-year').textContent = new Date().getFullYear();

document.getElementById('language-selector').addEventListener('change', function () {
    const language = this.value;
    translatePage(language);
});

function translatePage(language) {
    const translations = {
        en: {
            heroTitle: "Kyro Last",
            heroSubtitle: "Musician • Composer • Performer",
            discoverMusic: "Discover My Music",
            followMe: "Follow Me",
            myMusic: "My Music",
            footerText: "All rights reserved"
        },
        fr: {
            heroTitle: "Kyro Last",
            heroSubtitle: "Musicien • Compositeur • Performer",
            discoverMusic: "Découvrir ma musique",
            followMe: "Suivez-moi",
            myMusic: "Ma Musique",
            footerText: "Tous droits réservés"
        },
        ja: {
            heroTitle: "キロ・ラスト",
            heroSubtitle: "音楽家 • 作曲家 • パフォーマー",
            discoverMusic: "私の音楽を見つける",
            followMe: "フォローしてください",
            myMusic: "私の音楽",
            footerText: "すべての権利保有"
        }
    };

    const selectedTranslations = translations[language];
    document.getElementById('hero-title').textContent = selectedTranslations.heroTitle;
    document.getElementById('hero-subtitle').textContent = selectedTranslations.heroSubtitle;
    document.getElementById('discover-music').textContent = selectedTranslations.discoverMusic;
    document.getElementById('follow-me').textContent = selectedTranslations.followMe;
    document.getElementById('my-music').textContent = selectedTranslations.myMusic;
    document.getElementById('footer-text').innerHTML = `&copy; <span id="current-year"></span> ${selectedTranslations.heroTitle}. ${selectedTranslations.footerText}`;
}