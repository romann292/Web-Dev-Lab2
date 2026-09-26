# 🌐 Web Development Lab 2 — Assignment Submission

**Course:** Full Stack Web Development (Lab 2)  
**Student:** Roman Fatima (Reg No: 241878)  
**Program:** BS Computer Science (BSCS), Section 5A  
**Institution:** Department of Computer Science, Air University, Islamabad  
**Due Date:** September 25, 2026 at 11:59 PM  

---

## 📋 Overview of Completed Tasks

This repository contains all 5 tasks designed and developed using semantic HTML5, modern CSS3 styling, and interactive JavaScript. Each task is available both as a standalone page in the root directory and structured under the organized `full stack lab/Lab 2/` hub folder.

| Task # | Task Name | Main Entry File | Subdirectory File | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Hub** | **Lab 2 Hub** | — | `full stack lab/Lab 2/index.html` | Central hub showcasing all 5 tasks with glassmorphism cards and direct navigation. |
| **Task 1** | **Class Timetable** | `timetable.html` | `full stack lab/Lab 2/task1-timetable/index.html` | Semantic HTML + CSS BSCS 5A timetable with university branding, color-coded subjects, print styles, and interactive "Highlight Today" button. |
| **Task 2** | **Facebook Home Page** | `index.html` | `full stack lab/Lab 2/task2-facebook/index.html` | Pixel-perfect replica of the authentic Facebook feed layout (Facebook Blue `#0866ff`, 3-column feed, Stories tray with besties Insha, Aniqa, Sana, Wania, interactive reactions, comments modal, and Messenger dock). |
| **Task 3** | **2-Column Portfolio** | `portfolio.html` | `full stack lab/Lab 2/task3-portfolio/index.html` | Two-column developer portfolio for Roman Fatima featuring sticky left sidebar, project showcases, skills progress, education timeline, and functional contact form. |
| **Task 4** | **Custom UI Showcase** | `custom-ui.html` | `full stack lab/Lab 2/task4-custom-ui/index.html` | "AetherOS" interactive creative studio featuring 3D perspective transforms, dynamic theme switching (Cyberpunk, Rose Dream, Frost Glass, Matrix), and a **7-Song Music Studio** (Barbie, Tom Odell, Hamza Malik, Akon, Lana Del Rey, Asfar Hussain, Kavish) with song selector dropdown, next/prev controls, seeking, and volume slider. |
| **Task 5** | **IEEE Paper Template** | `ieee-paper.html` | `full stack lab/Lab 2/task5-ieee-paper/index.html` | Authentic IEEE conference paper format (8.5" × 11" US Letter, 2-column body) replicating the seminal research paper **"Attention Is All You Need"** (Vaswani et al.) with equations, Table I benchmarks, and IEEE citations. |

---

## 🛠️ Technology Stack & CSS Concepts Applied

- **Core Structure:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<table>`)
- **Modern Layout Systems:** 
  - CSS Flexbox (1D layouts, sticky navbars, control docks)
  - CSS Grid (2D multi-column layouts, responsive auto-fit widgets, author headers)
- **Visual Design & Aesthetics:**
  - Glassmorphism (`backdrop-filter: blur(24px)`)
  - Conic and radial gradients with custom border lighting
  - Custom color palettes & Dynamic CSS Custom Property Theming (`var(--primary-accent)`)
  - Typography powered by Google Fonts (*Inter*, *Outfit*, *Space Grotesk*, *Plus Jakarta Sans*, *Times New Roman*)
- **Animation & Interactivity:**
  - CSS3 3D Perspective Transforms (`preserve-3d`, `rotateY`, `perspective`)
  - Keyframe micro-animations (spinning vinyl disc, bouncing equalizer spectrum bars)
  - Vanilla JavaScript for multi-track audio playback, volume adjustment, and theme switching

---

## 🚀 How to Run Locally

You can run these files using any web browser or local static server:

```bash
# Option 1: Open directly in your browser
double-click index.html or timetable.html

# Option 2: Using Python's built-in HTTP server
python -m http.server 8080
# Then visit: http://localhost:8080/
```

---

## 📤 Step-by-Step GitHub Submission Guide

Follow these exact commands in your terminal to publish this repository to GitHub:

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Stage and Commit Files
```bash
git add .
git commit -m "Completed Lab 2 Web Development Assignments - Roman Fatima (241878)"
```

### Step 3: Create a Repository on GitHub
1. Go to [github.com](https://github.com/) and sign in.
2. Click the green **"New"** button to create a new repository.
3. Repository name: `Web-Dev-Lab2`
4. Visibility: **Public**
5. Do **NOT** check "Add a README file" (we already have this complete README).
6. Click **Create repository**.

### Step 4: Link Remote & Push to GitHub
Replace `YOUR-USERNAME` with your actual GitHub username in the command below:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Web-Dev-Lab2.git
git push -u origin main
```

---

**Submitted by:** Roman Fatima (241878) · BSCS 5A · Air University
