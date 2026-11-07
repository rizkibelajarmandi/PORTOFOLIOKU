/* =====================================================
   INTERACTIVE SPA ROUTER & SCRIPT LOGIC
   Achmad Fatkur Rizki Portfolio
   ===================================================== */

// 1. SPA Navigation Switcher
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => page.classList.add('hidden'));

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    if (pageId === 'contact') {
        document.getElementById('page-home').classList.remove('hidden');
        document.getElementById('nav-contact').classList.add('active');

        const contactSec = document.getElementById('contact');
        if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
        }
        return;
    }

    const targetPage = document.getElementById(`page-${pageId}`);
    const targetNav = document.getElementById(`nav-${pageId}`);

    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (targetNav) {
        targetNav.classList.add('active');
    }
}

// 2. Mobile Drawer Nav Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');

mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

function toggleMobileNav() {
    mobileNav.classList.add('hidden');
}

// 3. Filter Projects
function filterProjects(category) {
    const items = document.querySelectorAll('.project-item');
    const btns = document.querySelectorAll('.filter-btn');

    btns.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('bg-mono-900', 'text-white');
            btn.classList.remove('bg-white', 'text-mono-700');
        } else {
            btn.classList.remove('bg-mono-900', 'text-white');
            btn.classList.add('bg-white', 'text-mono-700');
        }
    });

    items.forEach(item => {
        const cats = item.getAttribute('data-category').split(' ');
        if (category === 'all' || cats.includes(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// 4. Modal Project Detail Preview
const projectData = {
    'pasertu': {
        tag: 'Cross-Platform System',
        title: 'Pasertu App (Project Based Learning)',
        body: '<p><strong>Deskripsi:</strong> Pengembangan sistem aplikasi lintas platform (web dan mobile) untuk ekosistem Pasertu.</p><p><strong>Peran Teknis:</strong> Merancang arsitektur sistem backend, alur basis data MySQL, integrasi API, serta optimasi performa fitur lintas perangkat.</p><p><strong>Teknologi:</strong> PHP, Flutter (Dart), MySQL, UML Diagram.</p>',
        github: 'https://github.com/rizkibelajarmandi'
    },
    'dechabooth-mobile': {
        tag: 'Mobile Development',
        title: 'Dechabooth Mobile App & Testing',
        body: '<p><strong>Deskripsi:</strong> Pengembangan fitur-fitur aplikasi mobile Dechabooth berbasis Flutter.</p><p><strong>Peran Teknis:</strong> Membangun antarmuka mobile responsif, pengujian software testing (blackbox/integration testing), serta identifikasi bug sebelum rilis.</p><p><strong>Teknologi:</strong> Dart, Flutter Framework, Software Testing Suite.</p>',
        github: 'https://github.com/rizkibelajarmandi'
    },
    'dechabooth-web': {
        tag: 'Web & System Modeling',
        title: 'Dechabooth Web System',
        body: '<p><strong>Deskripsi:</strong> Solusi sistem informasi berbasis web dengan perancangan diagram alur sistem yang matang.</p><p><strong>Peran Teknis:</strong> Menyusun dokumen pemodelan UML (Use Case Diagram, Activity Diagram, Class Diagram), flowchart alur data, serta pengembangan web backend PHP MVC.</p><p><strong>Teknologi:</strong> PHP MVC, MySQL, HTML5/CSS3, UML Tooling.</p>',
        github: 'https://github.com/rizkibelajarmandi'
    }
};

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modal-tag').innerText = data.tag;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-body').innerHTML = data.body;
    document.getElementById('modal-github').href = data.github;

    document.getElementById('project-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// 5. Contact Form Handler
const contactForm = document.getElementById('contact-form');
const toastMessage = document.getElementById('toast-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toastMessage.classList.remove('hidden');
    contactForm.reset();
    setTimeout(() => {
        toastMessage.classList.add('hidden');
    }, 4000);
});