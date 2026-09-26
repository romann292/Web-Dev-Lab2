/* ================================================================
   AetherOS · Interactive Script
   custom-ui.js — Created for Web Development Lab 2 (Task 4)
   Student: Roman Fatima (241878) · BSCS 5A · Air University
   ================================================================ */

// ── Theme Switcher ──
function setTheme(themeName) {
  const body = document.body;
  body.classList.remove('theme-cyberpunk', 'theme-rosegold', 'theme-crystal', 'theme-matrix');
  body.classList.add(`theme-${themeName}`);
  
  document.querySelectorAll('.theme-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  
  const pills = document.querySelectorAll('.theme-pill');
  const themeMap = { cyberpunk: 0, rosegold: 1, crystal: 2, matrix: 3 };
  if (themeMap[themeName] !== undefined && pills[themeMap[themeName]]) {
    pills[themeMap[themeName]].classList.add('active');
  }
}

// ── 3D Flip Card Toggle ──
function toggleCardFlip(container) {
  container.classList.toggle('flipped');
}

// ── Real Songs Playlist & Advanced Audio Engine ──
const PLAYLIST = [
  {
    title: "On Top of the World",
    artist: "Barbie (Princess Charm School)",
    genre: "POP",
    duration: 165,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 124,
    notes: [392, 440, 493.88, 523.25, 587.33, 659.25, 783.99]
  },
  {
    title: "When I Close My Eyes",
    artist: "Tom Odell",
    genre: "INDIE",
    duration: 215,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 78,
    notes: [261.63, 329.63, 392.00, 493.88, 329.63, 261.63]
  },
  {
    title: "Alfaaz",
    artist: "Hamza Malik & Zain Zohaib",
    genre: "SOUL",
    duration: 248,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 85,
    notes: [220, 261.63, 293.66, 329.63, 392, 440]
  },
  {
    title: "Right Now (Na Na Na)",
    artist: "Akon",
    genre: "R&B",
    duration: 241,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 130,
    notes: [440, 523.25, 587.33, 659.25, 587.33, 523.25]
  },
  {
    title: "Born to Die",
    artist: "Lana Del Rey",
    genre: "DREAM",
    duration: 286,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 75,
    notes: [220, 277.18, 329.63, 440, 329.63, 277.18]
  },
  {
    title: "Tau Kya Huwa",
    artist: "Asfar Hussain & Xulfi (Nescafe Basement)",
    genre: "ROCK",
    duration: 295,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 92,
    notes: [196, 246.94, 293.66, 392, 493.88, 392]
  },
  {
    title: "Intezar",
    artist: "Kavish",
    genre: "SERENE",
    duration: 260,
    audioUrl: "https://archive.org/download/AlsPlaylistMixedGenre/Akon%20-%20Right%20Now%20Na%20Na%20Na.mp3",
    bpm: 70,
    notes: [261.63, 311.13, 392.00, 466.16, 392.00]
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let currentPlaybackTime = 0;
let playbackTimer = null;
let currentVolume = 0.8;

// Web Audio Synth Engine
let audioCtx = null;
let synthInterval = null;
let masterGainNode = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      masterGainNode = audioCtx.createGain();
      masterGainNode.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
      masterGainNode.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSynthNote(freq, duration = 0.6) {
  if (!audioCtx || !isPlaying) return;
  try {
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();
    osc.type = (currentSongIndex === 3) ? 'sawtooth' : (currentSongIndex === 5 ? 'triangle' : 'sine');
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    noteGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.18 * currentVolume, audioCtx.currentTime + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(noteGain);
    noteGain.connect(masterGainNode);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function startMelodyLoop() {
  stopMelodyLoop();
  initAudioContext();
  const currentSong = PLAYLIST[currentSongIndex];
  let noteIndex = 0;
  const intervalMs = Math.round(60000 / (currentSong.bpm || 100));
  
  synthInterval = setInterval(() => {
    if (!isPlaying) return;
    const notes = currentSong.notes || [330, 392, 440, 523];
    const freq = notes[noteIndex % notes.length];
    playSynthNote(freq, intervalMs / 1000 * 0.9);
    noteIndex++;
  }, intervalMs);
}

function stopMelodyLoop() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function updatePlayerUI() {
  const song = PLAYLIST[currentSongIndex];
  const titleEl = document.getElementById('trackTitle');
  const artistEl = document.getElementById('trackArtist');
  const indexBadge = document.getElementById('trackIndexBadge');
  const genreLabel = document.getElementById('vinylGenre');
  const dropdown = document.getElementById('songSelect');
  const durationEl = document.getElementById('durationTimeDisplay');
  const currentEl = document.getElementById('currentTimeDisplay');
  const audioFill = document.getElementById('audioFill');
  const statusBadge = document.getElementById('audioStatusBadge');
  
  if (titleEl) titleEl.textContent = song.title;
  if (artistEl) artistEl.textContent = song.artist;
  if (indexBadge) indexBadge.textContent = `${currentSongIndex + 1} / ${PLAYLIST.length}`;
  if (genreLabel) genreLabel.textContent = song.genre;
  if (dropdown) dropdown.value = currentSongIndex;
  if (durationEl) durationEl.textContent = formatTime(song.duration);
  if (currentEl) currentEl.textContent = formatTime(currentPlaybackTime);
  
  const pct = (currentPlaybackTime / song.duration) * 100;
  if (audioFill) audioFill.style.width = `${pct}%`;
  
  if (statusBadge) {
    statusBadge.textContent = isPlaying ? `● PLAYING (#${currentSongIndex + 1})` : `● READY`;
    statusBadge.style.color = isPlaying ? 'var(--secondary-accent, #06b6d4)' : 'var(--text-muted, #94a3b8)';
  }
}

function loadAndPlaySong(index, shouldPlay = true) {
  currentSongIndex = (index + PLAYLIST.length) % PLAYLIST.length;
  currentPlaybackTime = 0;
  
  const song = PLAYLIST[currentSongIndex];
  const audioEl = document.getElementById('mainAudioElement');
  
  if (audioEl) {
    audioEl.src = song.audioUrl;
    audioEl.volume = currentVolume;
  }
  
  updatePlayerUI();
  
  if (shouldPlay) {
    startPlayback();
  } else {
    pausePlayback();
  }
}

function startPlayback() {
  isPlaying = true;
  initAudioContext();
  
  const vinyl = document.getElementById('vinylRecord');
  const playBtn = document.getElementById('playBtn');
  const bars = document.querySelectorAll('.spectrum-bars .bar');
  const audioEl = document.getElementById('mainAudioElement');
  
  if (vinyl) vinyl.classList.remove('paused');
  if (playBtn) playBtn.textContent = '⏸️';
  bars.forEach(bar => { bar.style.animationPlayState = 'running'; });
  
  if (audioEl && audioEl.src) {
    audioEl.volume = currentVolume;
    audioEl.play().catch(() => {});
  }
  
  startMelodyLoop();
  
  if (playbackTimer) clearInterval(playbackTimer);
  playbackTimer = setInterval(() => {
    const song = PLAYLIST[currentSongIndex];
    currentPlaybackTime += 1;
    if (currentPlaybackTime >= song.duration) {
      nextSong();
    } else {
      updatePlayerUI();
    }
  }, 1000);
  
  updatePlayerUI();
}

function pausePlayback() {
  isPlaying = false;
  
  const vinyl = document.getElementById('vinylRecord');
  const playBtn = document.getElementById('playBtn');
  const bars = document.querySelectorAll('.spectrum-bars .bar');
  const audioEl = document.getElementById('mainAudioElement');
  
  if (vinyl) vinyl.classList.add('paused');
  if (playBtn) playBtn.textContent = '▶️';
  bars.forEach(bar => { bar.style.animationPlayState = 'paused'; });
  
  if (audioEl) audioEl.pause();
  stopMelodyLoop();
  
  if (playbackTimer) {
    clearInterval(playbackTimer);
    playbackTimer = null;
  }
  
  updatePlayerUI();
}

function togglePlayState() {
  if (isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
}

function nextSong() {
  loadAndPlaySong(currentSongIndex + 1, true);
}

function prevSong() {
  loadAndPlaySong(currentSongIndex - 1, true);
}

function selectSongFromDropdown(val) {
  loadAndPlaySong(parseInt(val, 10), isPlaying);
}

function adjustVolume(val) {
  currentVolume = val / 100;
  const volPct = document.getElementById('volPercent');
  const volIcon = document.getElementById('volIcon');
  const audioEl = document.getElementById('mainAudioElement');
  
  if (volPct) volPct.textContent = `${val}%`;
  if (volIcon) {
    if (val == 0) volIcon.textContent = '🔇';
    else if (val < 50) volIcon.textContent = '🔉';
    else volIcon.textContent = '🔊';
  }
  
  if (audioEl) audioEl.volume = currentVolume;
  if (masterGainNode && audioCtx) {
    masterGainNode.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  }
}

function seekAudio(e) {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;
  
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));
  
  const song = PLAYLIST[currentSongIndex];
  currentPlaybackTime = Math.round(pct * song.duration);
  
  const audioEl = document.getElementById('mainAudioElement');
  if (audioEl && !isNaN(audioEl.duration)) {
    audioEl.currentTime = pct * audioEl.duration;
  }
  
  updatePlayerUI();
}

// ── Parallax Glow Orbs on Mouse Move ──
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  const orbs = document.querySelectorAll('.glow-orb');
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 15;
    const moveX = (x - 0.5) * speed;
    const moveY = (y - 0.5) * speed;
    orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ── Intersection Observer for Scroll Animations ──
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  updatePlayerUI();
  
  document.querySelectorAll('.grid-card, .syllabus-inspector').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    scrollObserver.observe(el);
  });
  
  document.querySelectorAll('.grid-card:not(.flip-card-container)').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(0)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
});
