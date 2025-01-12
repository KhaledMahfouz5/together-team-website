// Translation Data
const translations = {
    en: {
        title: "Together Team",
        tagline: "We work together to enhance academic levels and solve practical problems",
        about: "About Us",
        aboutText: "We are a group of students from the Computer Engineering and Automation Department working to develop the scientific level and solve problems within the Faculty of Mechanical and Electrical Engineering.",
        departments: "Administrative Departments",
        departmentsContent: [
            { title: "Scientific Content", description: "Follow up on fundamental scientific matters." },
            { title: "Enrichment Content", description: "Enrich academic knowledge." },
            { title: "Graphic Design", description: "Create unique visual content." },
            { title: "Social Media Platforms", description: "Manage digital presence." },
            { title: "Human Resources", description: "Build the team." },
            { title: "Public Relations", description: "Enhance communications." },
        ],
        activities: "Activities",
        activitiesContent: [
            { title: "Academic Content Creation", description: "Organize lectures and clarify scientific concepts." },
            { title: "Workshops", description: "Organize academic workshops and study camps." },
            { title: "English Language", description: "Organize English conversation camps." },
            { title: "Research Culture", description: "Promote self-learning and scientific research culture." },
        ],
        contact: "Contact Us",
        contactLinks: [
            { title: "Our College Group Link", url: "https://t.me/Together_For_2027" },
            { title: "Bot Link", url: "https://t.me/TogetherTeamBot" },
            { title: "Our Account", url: "https://t.me/Together_Team_Account" },
            { title: "Honesty Link", url: "https://t.me/B9Bot?start=7892005753" },
        ],

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
        departmentsContent: [
            { title: "المحتوى العلمي", description: "متابعة الأمور العلمية الأساسية." },
            { title: "المحتوى الإثرائي", description: "إثراء المعرفة الأكاديمية." },
            { title: "التصاميم الغرافيكية", description: "إنشاء محتوى بصري مميز." },
            { title: "منصات التواصل الاجتماعي", description: "إدارة الحضور الرقمي." },
            { title: "الموارد البشرية", description: "بناء فريق العمل." },
            { title: "العلاقات العامة", description: "تعزيز الاتصالات." },
        ],
        activities: "الأنشطة",
        activitiesContent: [
            { title: "إنشاء محتوى أكاديمي", description: "تنسيق المحاضرات وتوضيح المفاهيم العلمية." },
            { title: "ورش العمل", description: "تنظيم ورش أكاديمية ومعسكرات دراسية." },
            { title: "اللغة الإنجليزية", description: "تنظيم معسكرات للمحادثة باللغة الإنجليزية." },
            { title: "ثقافة البحث العلمي", description: "نشر ثقافة التعلم الذاتي والبحث العلمي." },
        ],
        contact: "تواصل معنا",
        contactLinks: [
            { title: "رابط مجموعة دفعتنا", url: "https://t.me/Together_For_2027" },
            { title: "رابط البوت", url: "https://t.me/TogetherTeamBot" },
            { title: "معرف حسابنا", url: "https://t.me/Together_Team_Account" },
            { title: "رابط الصراحة", url: "https://t.me/B9Bot?start=7892005753" },
        ],
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
        // Update Header
        document.querySelector("h1").textContent = translations[lang].title;
        document.querySelector("header p").textContent = translations[lang].tagline;

        // Update About Section
        document.querySelector("#about h2").textContent = translations[lang].about;
        document.querySelector("#about p").textContent = translations[lang].aboutText;

        // Update Departments Section Title
        const departmentsContainer = document.querySelector("#departments .card-container");
        departmentsContainer.innerHTML = translations[lang].departmentsContent
            .map(
                (item) => `
                <div class="card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
            )
            .join("");

        // Update Contact Section Links
        const contactContainer = document.querySelector("#contact .card-container");
        contactContainer.innerHTML = translations[lang].contactLinks
            .map(
                (link) => `
                <div class="card contact-card">
                    <i class="fab fa-telegram fa-2x"></i>
                    <a href="${link.url}" target="_blank" class="contact-link">${link.title}</a>
                </div>
            `
            ).join("");


        // Update Activities Section Title
        const activitiesContainer = document.querySelector("#activities .card-container");
        activitiesContainer.innerHTML = translations[lang].activitiesContent
            .map(
                (item) => `
                <div class="card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
            )
            .join("");


        document.querySelector("#contact h2").textContent = translations[lang].contact;
        document.querySelector("#departments h2").textContent = translations[lang].departments;
        document.querySelector("#activities h2").textContent = translations[lang].activities;

        // Update Navbar
        document.querySelector('nav a[href="#about"]').textContent = translations[lang].nav.about;
        document.querySelector('nav a[href="#departments"]').textContent = translations[lang].nav.departments;
        document.querySelector('nav a[href="#activities"]').textContent = translations[lang].nav.activities;
        document.querySelector('nav a[href="#contact"]').textContent = translations[lang].nav.contact;

        // Update Footer
        document.querySelector("footer p").textContent = translations[lang].footer;
    }
});
