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

// 5. Render Sertifikasi Secara Dinamis
function renderCertifications() {
    const gridContainer = document.getElementById('certification-grid');
    
    // Jika container tidak ditemukan (mungkin karena sedang di halaman lain), hentikan fungsi
    if (!gridContainer) return; 

    // Looping data dari data.js
    let htmlContent = '';
    
    certificationsData.forEach(cert => {
        // Jika badge berupa icon, tampilkan icon. Jika berupa teks (seperti EPT), tampilkan teks.
        const badgeHTML = cert.isTrophy ? cert.badge : cert.badge;
        
        htmlContent += `
            <div class="bg-white p-5 rounded-xl border border-mono-200 flex gap-4">
                <div class="w-12 h-12 bg-mono-900 text-white rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                    ${badgeHTML}
                </div>
                <div class="flex-grow flex flex-col justify-between">
                    <div>
                        <span class="text-xs font-mono text-mono-500 font-semibold block mb-1">${cert.date}</span>
                        <h3 class="text-base font-bold text-mono-900 mb-1">${cert.title}</h3>
                        <p class="text-xs text-mono-600 mb-3">${cert.desc}</p>
                    </div>
                    
                    <!-- Tombol Link -->
                    <a href="${cert.link}" target="_blank" class="inline-flex items-center gap-2 px-3 py-1.5 bg-mono-50 hover:bg-mono-900 hover:text-white text-mono-900 text-[10px] font-bold uppercase tracking-wider rounded border border-mono-200 hover:border-mono-900 transition-colors w-fit">
                        <i class="fa-brands fa-google-drive"></i> Lihat Sertifikat
                    </a>
                </div>
            </div>
        `;
    });

    // Masukkan hasil looping ke dalam HTML
    gridContainer.innerHTML = htmlContent;
}


// Render Kepanitiaan
function renderCommittees() {
    const gridContainer = document.getElementById('committee-grid');
    if (!gridContainer) return; 

    let htmlContent = '';
    
    committeeData.forEach(item => {
        htmlContent += `
            <div class="committee-card">
                <div>
                    <span class="committee-card-date">${item.date}</span>
                    <h3 class="committee-card-title">${item.title}</h3>
                    <p class="committee-card-desc">${item.desc}</p>
                </div>
                <a href="${item.link}" target="_blank" class="committee-card-btn">
                    <i class="fa-solid fa-file-lines"></i> Lihat Dokumentasi
                </a>
            </div>
        `;
    });

    gridContainer.innerHTML = htmlContent;
}

// Pastikan dipanggil saat load
document.addEventListener('DOMContentLoaded', () => {
    renderCertifications();
    renderCommittees(); 
});
