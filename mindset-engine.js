
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

