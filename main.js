/**
 * Portfolio Website - Main JavaScript
 * Author: Dzaki Al Faridzi
 * Version: 1.0.0
 */

'use strict';

// ========================================
// KONFIGURASI GLOBAL
// ========================================
const CONFIG = {
    CV_URL: 'CV. Dzaki Al Faridzi.pdf',
    EMAIL: 'jakieee277@gmail.com',
    INSTAGRAM_URL: 'https://www.instagram.com/dzakiialfa16_?igsh=Zzk2MHUyaDhsdmF3',
    WHATSAPP_URL: 'https://wa.me/6285934742376'
};

// ========================================
// DATA PROJEK (untuk halaman detail)
// ========================================
const projectsData = {
    'line-follower': {
        id: 'line-follower',
        title: 'Robot Line Follower',
        category: 'Robotics',
        year: '2025',
        duration: '3 bulan',
        difficulty: 'intermediate',
        mainImage: 'linefollower.png',
        images: ['linefollower.png', 'linefollower2.png', 'linefollower3.png'],
        description: {
            overview: 'Robot Line Follower adalah robot otonom yang dirancang untuk mengikuti garis hitam di atas permukaan putih. Proyek ini menggunakan sensor inframerah untuk mendeteksi garis dan mikrokontroler Arduino Nano sebagai otak robot.',
            background: 'Dikembangkan sebagai bagian dari pembelajaran tentang sistem kontrol PID dan pemrograman embedded.',
            challenges: 'Tantangan utama adalah mengatur parameter PID agar robot tidak overshoot pada tikungan tajam.'
        },
        features: [
            { icon: 'fa-gauge-high', title: 'Kecepatan Variabel', description: 'Sistem PID menyesuaikan kecepatan motor secara real-time' },
            { icon: 'fa-arrows-spin', title: 'Navigasi Presisi', description: 'Mampu mengikuti tikungan tajam dengan akurasi tinggi' },
            { icon: 'fa-microchip', title: 'Arduino Nano', description: 'Mikrokontroler yang efisien dan mudah diprogram' },
            { icon: 'fa-bolt', title: 'Low Power', description: 'Konsumsi daya optimal untuk operasi lebih lama' }
        ],
        components: [
            { name: 'Arduino Nano', icon: 'fa-microchip' },
            { name: 'Sensor Inframerah (5 pcs)', icon: 'fa-eye' },
            { name: 'Motor DC + Gearbox', icon: 'fa-motor' },
            { name: 'Driver Motor L298N', icon: 'fa-cogs' },
            { name: 'Baterai LiPo 7.4V', icon: 'fa-battery-full' }
        ],
        specifications: [
            { label: 'Dimensi', value: '15cm x 12cm x 8cm' },
            { label: 'Berat', value: '350 gram' },
            { label: 'Kecepatan Maks', value: '0.5 m/s' },
            { label: 'Waktu Operasi', value: '45 menit' }
        ],
        code: `// PID Line Follower - Kode Sederhana
#include <PID_v1.h>

#define NUM_SENSORS 5
int sensors[NUM_SENSORS] = {A0, A1, A2, A3, A4};

// PID Variables
double setpoint = 2000;
double input, output;
double Kp = 2, Ki = 0.5, Kd = 1;
PID myPID(&input, &output, &setpoint, Kp, Ki, Kd, DIRECT);

void setup() {
    Serial.begin(9600);
    myPID.SetMode(AUTOMATIC);
    myPID.SetOutputLimits(-255, 255);
}

void loop() {
    int position = readSensors();
    input = position;
    myPID.Compute();
    setMotors(output);
}`,
        githubUrl: '#',
        videoUrl: '#'
    },
    'smps': {
        id: 'smps',
        title: 'Power Supply SMPS 24V 6A',
        category: 'Hardware',
        year: '2025',
        duration: '2 bulan',
        difficulty: 'advanced',
        mainImage: 'psu-smps.png',
        images: ['psu-smps.png', 'psu-smps2.png'],
        description: {
            overview: 'Power Supply SMPS 24V 6A yang dirancang untuk aplikasi industri dan laboratorium menggunakan topologi flyback dengan kontrol PWM.',
            background: 'Dibuat untuk memenuhi kebutuhan catu daya yang stabil dan efisien untuk peralatan elektronika.',
            challenges: 'Mengatasi noise switching dan memastikan regulasi tegangan stabil pada berbagai kondisi beban.'
        },
        features: [
            { icon: 'fa-bolt', title: 'Output 24V 6A', description: 'Daya maksimum 144W' },
            { icon: 'fa-shield', title: 'Perlindungan Lengkap', description: 'Overcurrent, short circuit protection' },
            { icon: 'fa-chart-line', title: 'Regulasi Stabil', description: 'Ripple rendah <50mV' }
        ],
        components: [
            { name: 'IC PWM UC3843', icon: 'fa-microchip' },
            { name: 'Mosfet IRF840', icon: 'fa-bolt' },
            { name: 'Trafo Ferrite EE25', icon: 'fa-cube' },
            { name: 'Optocoupler PC817', icon: 'fa-link' }
        ],
        specifications: [
            { label: 'Input Voltage', value: '180-264V AC' },
            { label: 'Output Voltage', value: '24V DC ±1%' },
            { label: 'Output Current', value: '6A' },
            { label: 'Efisiensi', value: '>85%' }
        ],
        githubUrl: '#',
        videoUrl: '#'
    },
    'techome': {
        id: 'techome',
        title: 'TecHome Smarthome (IoT)',
        category: 'IoT',
        year: '2025',
        duration: '4 bulan',
        difficulty: 'advanced',
        mainImage: 'techome.png',
        images: ['techome.png', 'techome2.png'],
        description: {
            overview: 'Sistem rumah pintar berbasis IoT dengan 10 channel kontrol, monitoring suhu, kelembapan, dan kadar gas secara real-time.',
            background: 'Solusi rumah pintar terjangkau menggunakan protokol MQTT untuk komunikasi efisien.',
            challenges: 'Integrasi multi-sensor dan aktuator dalam satu sistem yang stabil.'
        },
        features: [
            { icon: 'fa-temperature-high', title: 'Monitoring Lingkungan', description: 'Suhu, kelembapan real-time' },
            { icon: 'fa-plug', title: '10 Channel Kontrol', description: 'Kontrol perangkat via relay' },
            { icon: 'fa-bell', title: 'Notifikasi', description: 'Alert kondisi abnormal' }
        ],
        components: [
            { name: 'ESP32', icon: 'fa-microchip' },
            { name: 'DHT22 Sensor', icon: 'fa-temperature-high' },
            { name: 'MQ-135 Gas Sensor', icon: 'fa-wind' },
            { name: 'Modul Relay', icon: 'fa-plug' }
        ],
        specifications: [
            { label: 'Mikrokontroler', value: 'ESP32' },
            { label: 'Konektivitas', value: 'WiFi + MQTT' },
            { label: 'Channel Kontrol', value: '10 channel' }
        ],
        githubUrl: '#',
        videoUrl: '#'
    },
    'smartoffice': {
        id: 'smartoffice',
        title: 'Smart Office (IoT)',
        category: 'IoT',
        year: '2025',
        duration: '3 bulan',
        difficulty: 'intermediate',
        mainImage: 'smartoffice.png',
        images: ['smartoffice.png'],
        description: {
            overview: 'Ekosistem Smart Office berbasis IoT untuk otomatisasi pencahayaan, suhu, dan keamanan ruang kerja.',
            background: 'Meningkatkan efisiensi energi dan kenyamanan di lingkungan kerja.',
            challenges: 'Integrasi sensor dengan latensi rendah dan konsumsi daya minimal.'
        },
        features: [
            { icon: 'fa-lightbulb', title: 'Otomatisasi Pencahayaan', description: 'Lampu menyala otomatis' },
            { icon: 'fa-temperature-low', title: 'Kontrol Suhu', description: 'AC menyala sesuai suhu' },
            { icon: 'fa-door-open', title: 'Keamanan', description: 'Sensor pintu dan notifikasi' }
        ],
        components: [
            { name: 'ESP8266', icon: 'fa-microchip' },
            { name: 'PIR Sensor', icon: 'fa-person-walking' },
            { name: 'LDR Sensor', icon: 'fa-sun' },
            { name: 'Relay Module', icon: 'fa-plug' }
        ],
        specifications: [
            { label: 'Mikrokontroler', value: 'ESP8266' },
            { label: 'Sensor PIR', value: 'Jarak 7m' },
            { label: 'Relay Output', value: '10A 250V AC' }
        ],
        githubUrl: '#',
        videoUrl: '#'
    },
    'expansion': {
        id: 'expansion',
        title: 'Expansion Board ESP32',
        category: 'Hardware',
        year: '2025',
        duration: '2 bulan',
        difficulty: 'intermediate',
        mainImage: 'expansion.png',
        images: ['expansion.png'],
        description: {
            overview: 'Expansion Board untuk ESP32 (30 & 38 Pin) untuk mempermudah akses I/O dan manajemen daya.',
            background: 'Memudahkan koneksi saat prototyping dengan ESP32.',
            challenges: 'Desain layout PCB kompak dengan akses mudah ke semua pin.'
        },
        features: [
            { icon: 'fa-puzzle-piece', title: 'Kompatibel', description: 'Support ESP32 30/38 pin' },
            { icon: 'fa-bolt', title: 'Regulator', description: 'Input 5-12V, output 3.3V/5V' },
            { icon: 'fa-plug', title: 'Terminal Screw', description: 'Koneksi aman untuk I/O' }
        ],
        components: [
            { name: 'Regulator LM2596', icon: 'fa-bolt' },
            { name: 'Terminal Screw', icon: 'fa-plug' },
            { name: 'Header Female', icon: 'fa-puzzle-piece' }
        ],
        specifications: [
            { label: 'Input Voltage', value: '5-12V DC' },
            { label: 'Output Voltage', value: '3.3V/5V' },
            { label: 'Max Current', value: '3A' }
        ],
        githubUrl: '#',
        videoUrl: '#'
    },
    'inverter': {
        id: 'inverter',
        title: 'Inverter Pure Sine Wave',
        category: 'Hardware',
        year: '2025',
        duration: '3 bulan',
        difficulty: 'advanced',
        mainImage: 'egs002.png',
        images: ['egs002.png'],
        description: {
            overview: 'Inverter Pure Sine Wave menggunakan modul EGS002 untuk menghasilkan tegangan AC stabil dari sumber DC.',
            background: 'Untuk kebutuhan catu daya cadangan dengan gelombang sinus murni.',
            challenges: 'Menghasilkan gelombang sinus dengan THD rendah dan manajemen panas.'
        },
        features: [
            { icon: 'fa-wave-square', title: 'Pure Sine Wave', description: 'THD <3%' },
            { icon: 'fa-bolt', title: 'Daya 1000W', description: 'Mampu beban hingga 1000W' },
            { icon: 'fa-shield', title: 'Perlindungan', description: 'Short circuit, overload' }
        ],
        components: [
            { name: 'Modul EGS002', icon: 'fa-microchip' },
            { name: 'Mosfet IRFP460', icon: 'fa-bolt' },
            { name: 'Trafo Toroid', icon: 'fa-cube' }
        ],
        specifications: [
            { label: 'Input Voltage', value: '12V/24V DC' },
            { label: 'Output Voltage', value: '220V AC' },
            { label: 'Output Power', value: '1000W' }
        ],
        githubUrl: '#',
        videoUrl: '#'
    }
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    smoothScroll: (element) => {
        if (!element) return;
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },

    openPdf: (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
    },

    sendEmail: (email) => {
        window.location.href = `mailto:${email}`;
    },
    
    getProjectIdFromUrl: () => {
        const path = window.location.pathname;
        const fileName = path.split('/').pop();
        return fileName.replace('.html', '');
    }
};

// ========================================
// NAVIGATION & HEADER (untuk semua halaman)
// ========================================
const navigation = {
    init: () => {
        navigation.toggleMobileMenu();
        navigation.handleActiveLink();
        navigation.handleHeaderScroll();
    },

    toggleMobileMenu: () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    },

    handleActiveLink: () => {
        const sections = document.querySelectorAll('section');
        const navLinkItems = document.querySelectorAll('.nav-link');
        
        if (!sections.length || !navLinkItems.length) return;

        const scrollHandler = utils.debounce(() => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinkItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}` || 
                            link.getAttribute('href') === `../index.html#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('load', scrollHandler);
    },

    handleHeaderScroll: () => {
        const header = document.querySelector('header');
        if (!header) return;

        const scrollHandler = utils.debounce(() => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 10);

        window.addEventListener('scroll', scrollHandler);
        scrollHandler();
    }
};

// ========================================
// BUTTON HANDLERS (untuk semua halaman)
// ========================================
const buttonHandlers = {
    init: () => {
        buttonHandlers.handleDownloadCV();
        buttonHandlers.handleContactButtons();
        buttonHandlers.handleSocialLinks();
        buttonHandlers.handleBackButton();
    },

    handleDownloadCV: () => {
        const downloadBtn = document.getElementById('download-cv-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                utils.openPdf(CONFIG.CV_URL);
            });
        }
    },

    handleContactButtons: () => {
        const contactBtn = document.getElementById('get-in-touch-btn');
        if (contactBtn) {
            contactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                utils.sendEmail(CONFIG.EMAIL);
            });
        }
    },

    handleSocialLinks: () => {
        // WhatsApp
        const waLink = document.querySelector('.social-link .fa-whatsapp')?.parentElement;
        if (waLink) {
            waLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(CONFIG.WHATSAPP_URL, '_blank');
            });
        }

        // Instagram
        const igLink = document.querySelector('.social-link .fa-instagram')?.parentElement;
        if (igLink) {
            igLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(CONFIG.INSTAGRAM_URL, '_blank');
            });
        }

        // Email
        const emailLink = document.querySelector('.social-link .fa-envelope')?.parentElement;
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                e.preventDefault();
                utils.sendEmail(CONFIG.EMAIL);
            });
        }
    },
    
    handleBackButton: () => {
        const backBtn = document.querySelector('.back-button');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.back();
            });
        }
    }
};

// ========================================
// PROJECT DETAIL RENDERER (untuk halaman projek)
// ========================================
const projectDetail = {
    init: () => {
        const container = document.getElementById('project-detail-container');
        if (!container) return;
        
        const projectId = utils.getProjectIdFromUrl();
        const project = projectsData[projectId];
        
        if (project) {
            container.innerHTML = projectDetail.renderProject(project);
            projectDetail.initGallery();
            projectDetail.initCopyCode();
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 4rem;">Projek tidak ditemukan</p>';
        }
    },
    
    renderProject: (project) => {
        const difficultyClass = {
            'beginner': 'beginner',
            'intermediate': 'intermediate',
            'advanced': 'advanced'
        }[project.difficulty] || 'intermediate';
        
        const difficultyText = {
            'beginner': 'Pemula',
            'intermediate': 'Menengah',
            'advanced': 'Lanjutan'
        }[project.difficulty] || 'Menengah';
        
        const featuresHTML = project.features ? project.features.map(f => `
            <div class="feature-item">
                <i class="fas ${f.icon}"></i>
                <div class="feature-text">
                    <h4>${f.title}</h4>
                    <p>${f.description}</p>
                </div>
            </div>
        `).join('') : '';
        
        const componentsHTML = project.components ? project.components.map(c => `
            <span class="component-item">
                <i class="fas ${c.icon}"></i> ${c.name}
            </span>
        `).join('') : '';
        
        const specsHTML = project.specifications ? project.specifications.map(s => `
            <li>
                <span class="spec-label">${s.label}</span>
                <span class="spec-value">${s.value}</span>
            </li>
        `).join('') : '';
        
        const thumbnailsHTML = project.images ? project.images.map((img, index) => `
            <img src="../assets/images/${img}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="projectDetail.changeMainImage(this.src, this)"
                 alt="Thumbnail ${index + 1}">
        `).join('') : '';
        
        return `
            <div class="project-detail-header">
                <h1 class="project-detail-title">${project.title}</h1>
                <div class="project-detail-meta">
                    <div class="meta-item">
                        <i class="fas fa-folder"></i>
                        <span class="meta-label">Kategori:</span>
                        <span class="meta-value">${project.category}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span class="meta-label">Tahun:</span>
                        <span class="meta-value">${project.year}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span class="meta-label">Durasi:</span>
                        <span class="meta-value">${project.duration}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-signal"></i>
                        <span class="meta-label">Tingkat:</span>
                        <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-detail-grid">
                <div class="project-gallery">
                    <div class="main-image-container">
                        <img src="../assets/images/${project.mainImage}" 
                             class="main-image" id="main-image" 
                             alt="${project.title}">
                    </div>
                    <div class="thumbnail-grid">
                        ${thumbnailsHTML}
                    </div>
                </div>
                
                <div class="project-quick-info">
                    <div class="info-section">
                        <h3><i class="fas fa-microchip"></i> Komponen Utama</h3>
                        <div class="components-list">
                            ${componentsHTML}
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3><i class="fas fa-chart-bar"></i> Spesifikasi</h3>
                        <ul class="spec-list">
                            ${specsHTML}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="project-description-full">
                <div class="description-section">
                    <h2><i class="fas fa-info-circle"></i> Deskripsi Proyek</h2>
                    <p>${project.description.overview}</p>
                </div>
                
                <div class="description-section">
                    <h2><i class="fas fa-lightbulb"></i> Latar Belakang</h2>
                    <p>${project.description.background}</p>
                </div>
                
                <div class="description-section">
                    <h2><i class="fas fa-exclamation-triangle"></i> Tantangan</h2>
                    <p>${project.description.challenges}</p>
                </div>
                
                ${project.features ? `
                <div class="description-section">
                    <h2><i class="fas fa-star"></i> Fitur Utama</h2>
                    <div class="features-grid">
                        ${featuresHTML}
                    </div>
                </div>` : ''}
                
                ${project.code ? `
                <div class="description-section">
                    <h2><i class="fas fa-code"></i> Source Code</h2>
                    <div class="code-block">
                        <pre><code class="language-cpp">${project.code}</code></pre>
                        <button class="copy-code-btn" onclick="projectDetail.copyCode(this)">Salin Kode</button>
                    </div>
                </div>` : ''}
                
                <div class="project-links">
                    <a href="${project.githubUrl}" class="project-link-btn primary" target="_blank">
                        <i class="fab fa-github"></i> Lihat di GitHub
                    </a>
                    <a href="${project.videoUrl}" class="project-link-btn secondary" target="_blank">
                        <i class="fas fa-play"></i> Video Demo
                    </a>
                </div>
            </div>
        `;
    },
    
    initGallery: () => {
        window.projectDetail = window.projectDetail || {};
        window.projectDetail.changeMainImage = (src, element) => {
            const mainImage = document.getElementById('main-image');
            if (mainImage) {
                mainImage.src = src;
            }
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            element.classList.add('active');
        };
    },
    
    initCopyCode: () => {
        window.projectDetail = window.projectDetail || {};
        window.projectDetail.copyCode = (button) => {
            const codeBlock = button.previousElementSibling.querySelector('code');
            if (codeBlock) {
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    const originalText = button.textContent;
                    button.textContent = 'Tersalin!';
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                });
            }
        };
    }
};

// ========================================
// ANIMATIONS
// ========================================
const animations = {
    init: () => {
        animations.observeElements();
    },

    observeElements: () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.project-card, .exp-item, .skill-tag, .stat-item, .feature-item'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
};

// ========================================
// INITIALIZATION
// ========================================
const init = () => {
    console.log('Portfolio website initialized');
    
    navigation.init();
    buttonHandlers.init();
    animations.init();
    
    // Inisialisasi halaman detail projek jika ada container
    if (document.getElementById('project-detail-container')) {
        projectDetail.init();
    }
    
    // Set current year di footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-content p:first-child');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${currentYear} Dzaki Al Faridzi. All rights reserved.`;
    }
};

document.addEventListener('DOMContentLoaded', init);

// COPY CODE BUTTON
function copyCode(button){

const codeBlock = button.nextElementSibling.querySelector("code");
const text = codeBlock.textContent;

navigator.clipboard.writeText(text).then(()=>{

const originalText = button.textContent;

button.textContent = "Tersalin!";

setTimeout(()=>{
button.textContent = originalText;
},2000);

});

}

document.addEventListener("DOMContentLoaded", function () {

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
hamburger.addEventListener("click", function () {

this.classList.toggle("active");
navLinks.classList.toggle("active");

});
}


document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", function () {

hamburger.classList.remove("active");
navLinks.classList.remove("active");

});

});


const copyButtons = document.querySelectorAll(".copy-code-btn");

copyButtons.forEach(button => {

button.addEventListener("click", function () {

const code = this.nextElementSibling.innerText;

navigator.clipboard.writeText(code);

this.innerText = "Tersalin!";

setTimeout(() => {
this.innerText = "Salin Kode";
}, 2000);

});

});

});
