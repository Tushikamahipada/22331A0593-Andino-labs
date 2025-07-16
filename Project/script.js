// Search toggle
function searchSection() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const secs = [
        { id: 'home', keywords: ['home', 'campus', 'innovation'] },
        { id: 'about', keywords: ['lab', 'faculty', 'research', 'industry'] },
        { id: 'departments', keywords: ['cse', 'ece', 'it', 'eee', 'civil', 'mech'] },
        { id: 'facilities', keywords: ['library', 'wifi', 'hostel', 'canteen', 'sports'] },
        { id: 'events', keywords: ['fest', 'synapse', 'ignite', 'hackathon', 'workshop'] },
        { id: 'placements', keywords: ['placement', 'package', 'recruiters'] },
        { id: 'admissions', keywords: ['admission', 'apply', 'gate', 'eapcet'] },
        { id: 'contact', keywords: ['contact', 'map', 'phone', 'email'] }
    ];
    const match = secs.find(s => s.keywords.some(k => q.includes(k)));
    if (match) location.hash = match.id;
    else alert('Section not found');
}

// Slider animation
let cur = 0;
const slides = document.querySelectorAll('.slide');

function next() {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
}
setInterval(next, 3000);

// Google Map
function initMap() {
    const mvgr = { lat: 18.109, lng: 83.425 };
    const map = new google.maps.Map(document.getElementById('map'), { center: mvgr, zoom: 14 });
    new google.maps.Marker({ position: mvgr, map });
}