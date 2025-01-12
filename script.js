// Translation Data
const translations = {
    en: {
        title: "Together Team",
        tagline: "We work together to enhance academic levels and solve practical problems",
        about: "About Us",
        aboutText: "We are a group of students from the Computer Engineering and Automation Department working to develop the scientific level and solve problems within the Faculty of Mechanical and Electrical Engineering.",
        departments: "Administrative Departments",
        activities: "Activities",
        contact: "Contact Us",
        nav: {
            about: "About Us",
            departments: "Departments",
            activities: "Activities",
            contact: "Contact Us",
        },
        footer: "© 2025 Together Team - All rights reserved",
    },
    ar: {
        title: "فريق Together Team",
        tagline: "نعمل معًا لتعزيز المستوى الأكاديمي وحل المشاكل العملية",
        about: "من نحن",
        aboutText: "نحن مجموعة من طلاب قسم هندسة الحواسيب والأتمتة نعمل على تطوير المستوى العلمي وحل المشكلات داخل كلية الهندسة الميكانيكية والكهربائية.",
        departments: "الأقسام الإدارية",
        activities: "الأنشطة",
        contact: "تواصل معنا",
        nav: {
            about: "من نحن",
            departments: "الأقسام",
            activities: "الأنشطة",
            contact: "تواصل معنا",
        },
        footer: "© 2025 فريق Together Team - جميع الحقوق محفوظة",
    },
};

// Theme and Language Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const body = document.body;
    let currentTheme = "light";
    let currentLanguage = "ar";

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", currentTheme);
        themeToggle.innerHTML = currentTheme === "light" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Language Toggle
    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "ar" ? "en" : "ar";
        translatePage(currentLanguage);
        languageToggle.textContent = currentLanguage === "ar" ? "EN" : "AR";
    });

    // Translate Page
    function translatePage(lang) {
        document.querySelector("h1").textContent = translations[lang].title;
        document.querySelector("header p").textContent = translations[lang].tagline;
        document.querySelector("#about h2").textContent = translations[lang].about;
        document.querySelector("#about p").textContent = translations[lang].aboutText;
        document.querySelector("#departments h2").textContent = translations[lang].departments;
        document.querySelector("#activities h2").textContent = translations[lang].activities;
        document.querySelector("#contact h2").textContent = translations[lang].contact;
        document.querySelector('nav a[href="#about"]').textContent = translations[lang].nav.about;
        document.querySelector('nav a[href="#departments"]').textContent = translations[lang].nav.departments;
        document.querySelector('nav a[href="#activities"]').textContent = translations[lang].nav.activities;
        document.querySelector('nav a[href="#contact"]').textContent = translations[lang].nav.contact;
        document.querySelector("footer p").textContent = translations[lang].footer;
    }
});
