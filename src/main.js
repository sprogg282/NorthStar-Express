const SERVER_IP = "66.51.97.50";
const SERVER_PORT = "27005";
const FULL_ADDRESS = "66.51.97.50:27005";
const TEBEX_STORE_LINK = "https://1277415n68y7t0zzlghvpba.tebex.io/?action=preview&signature=4692e8b5550ec294a7fda1f409f41f95fb596103b3c635e2bdace07d60dd8951&expires=1785876075";

const VALID_PAGES = ['home', 'about', 'ranks', 'donators', 'store'];

// SPA Page Switcher
function showPage(pageId, updateHash = true) {
    let targetId = pageId;
    if (!VALID_PAGES.includes(targetId)) {
        targetId = 'home';
    }

    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));

    updateNavHighlight(targetId);

    setTimeout(() => {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (updateHash) {
            history.replaceState(null, '', `#${targetId}`);
        }

        closeMobileMenu();
    }, 50);
}

// Update Active Navbar Items
function updateNavHighlight(activePage) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.id === `nav-${activePage}`) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Scroll to Prominent Server Connection Box
function scrollToJoinServer() {
    if (!document.getElementById('home').classList.contains('active')) {
        showPage('home');
        setTimeout(() => {
            const el = document.getElementById('join-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    } else {
        const el = document.getElementById('join-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy Server IP to Clipboard
function copyServerIP() {
    navigator.clipboard.writeText(FULL_ADDRESS).then(() => {
        showToast(`Copied connection address: ${FULL_ADDRESS}`);
    }).catch(err => {
        console.error("Clipboard copy error:", err);
        // Fallback for older browsers
        const temp = document.createElement('input');
        temp.value = FULL_ADDRESS;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(`Copied connection address: ${FULL_ADDRESS}`);
    });
}

// Toast Notification Popup
function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if (!toast || !msg) return;

    msg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Mobile Menu Handlers
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.add('hidden');
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', () => {
        const pageId = window.location.hash.replace('#', '') || 'home';
        showPage(pageId, false);
    });

    const initialPage = window.location.hash.replace('#', '') || 'home';
    showPage(initialPage, false);
});

// Export Global Methods
window.showPage = showPage;
window.scrollToJoinServer = scrollToJoinServer;
window.copyServerIP = copyServerIP;
window.toggleMobileMenu = toggleMobileMenu;
