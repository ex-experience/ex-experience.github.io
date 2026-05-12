
/* ========================================= */
/* NEXUS FIREBASE INJECTION (COMMUNITY & RATING) */
/* ========================================= */
async function submitCommunity() {
    const name = document.getElementById('commName')?.value.trim();
    const email = document.getElementById('commEmail')?.value.trim();
    if (!name || !email) return alert('Please fill all fields.');
    await db.collection('Community_Family').add({ Name: name, Email: email, Timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    alert('Welcome to the Elite Family.');
    document.getElementById('communityModal').style.display = 'none';
}

async function submitRating() {
    const name = document.getElementById('rateName')?.value.trim();
    const email = document.getElementById('rateEmail')?.value.trim();
    const note = document.getElementById('rateNote')?.value.trim();
    const stars = document.getElementById('rateStars')?.value;
    if (!name || !email || !stars) return alert('Please fill required fields.');
    await db.collection('Experience_Ratings').add({ Name: name, Email: email, Rating: parseInt(stars), Note: note, Timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    alert('Thank you for your feedback.');
    document.getElementById('ratingModal').style.display = 'none';
}

/* FIREBASE MODALS */
async function submitToCommunity() { const n = document.getElementById('comm-name').value; const e = document.getElementById('comm-email').value; if(n && e) { await db.collection('Community_Family').add({ Name: n, Email: e, Timestamp: firebase.firestore.FieldValue.serverTimestamp() }); alert('Welcome to the Elite.'); document.getElementById('community-modal').style.display='none'; } else alert('Please fill all fields.'); }
async function submitToRating() { const n = document.getElementById('rate-name').value; const e = document.getElementById('rate-email').value; const s = document.getElementById('rate-stars').value; if(n && e) { await db.collection('Experience_Ratings').add({ Name: n, Email: e, Rating: parseInt(s), Timestamp: firebase.firestore.FieldValue.serverTimestamp() }); alert('Thank you for rating.'); document.getElementById('rating-modal').style.display='none'; } else alert('Please fill all fields.'); }

