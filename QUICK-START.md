# 🚀 Quick Start Guide

## Get Your Portfolio Running in 2 Minutes

### Step 1: Open the Website
Simply double-click **`index.html`** to open it in your default browser.

Or, for better local development (recommended), run a local server:

**On Windows:**
- Double-click `start-server.bat`
- Visit: http://localhost:8000

**On Mac/Linux:**
```bash
bash start-server.sh
```

---

## ⚡ 5-Minute Customization

### 1. Update Your Name
Open `index.html` and find:
```html
<h1 class="hero-title">Charles Natasha</h1>
```
Replace with your name.

### 2. Update Contact Email
Find this line in `index.html`:
```html
<a href="mailto:charles@example.com">
```
Replace `charles@example.com` with your email.

### 3. Update Social Links
Ctrl+F (Find) for `https://github.com` and replace with your GitHub profile URL.
Do the same for LinkedIn and Twitter.

### 4. Add Your Projects
Find the "Projects Section" in `index.html` (around line 217).
For each project card, update:
- Project title (`<h3>`)
- Description (`<p>`)
- Tool badges
- GitHub link
- Demo link

### 5. Update Skills
Find the "Skills Section" in `index.html` (around line 145).
Update progress bars by changing `width: 90%` to match your proficiency.

---

## 🎨 Quick Color Changes

Open `style.css` (around line 20) and change:
```css
--color-accent: #0066ff;  /* Change this blue hex code */
```

Use [coolors.co](https://coolors.co) to pick colors.

---

## 📋 Customization Checklist

- [ ] Update name
- [ ] Update email
- [ ] Update social links
- [ ] Add 3-4 projects
- [ ] Update skills with real proficiency
- [ ] Add your CV to `assets/portfolio.pdf`
- [ ] Change color scheme (optional)
- [ ] Update About section
- [ ] Test on phone
- [ ] Deploy!

---

## 📂 File Overview

| File | Purpose |
|------|---------|
| `index.html` | All content (sections, text, structure) |
| `style.css` | All styling and layout |
| `script.js` | Interactive features (dark mode, filtering) |
| `README.md` | Detailed customization guide (this file for quick start) |
| `assets/` | Folder for your CV (add `portfolio.pdf` here) |

---

## 🚀 Deploy (Choose One)

### GitHub Pages (Free)
1. Create a GitHub account and repository
2. Upload your files
3. Go to Settings → Pages
4. Enable GitHub Pages
5. Your site goes live at: `https://username.github.io/portfolio`

### Netlify (Free, Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Done! Get instant link

### Traditional Hosting
1. Buy hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Add domain name

---

## 🎯 Features Already Included

✅ Dark/Light mode toggle
✅ Mobile responsive
✅ Project filtering
✅ Animated statistics
✅ Smooth scrolling
✅ Contact form
✅ Hamburger menu for mobile
✅ Professional animations

---

## ❓ Common Questions

**Q: Where do I put my CV?**
A: Add `portfolio.pdf` to the `assets/` folder.

**Q: Can I change the color scheme?**
A: Yes! Edit `--color-accent: #0066ff;` in `style.css`.

**Q: How do I add more projects?**
A: Copy a project card in `index.html` and update the content.

**Q: Will my form emails work?**
A: Yes! Update the email address and visitors can email you directly.

**Q: Is it mobile-friendly?**
A: Completely! Test on your phone - it's fully responsive.

---

## 📖 For More Details

See `README.md` for:
- Detailed customization guide
- All available CSS variables
- How to use Google Fonts
- SEO optimization tips
- Deployment instructions

---

## 💡 Pro Tips

1. **Keep it professional** - This is your first impression
2. **Update regularly** - Add new projects every 3 months
3. **Test everything** - Check on phone, tablet, and desktop
4. **Use real links** - Connect to actual GitHub and LinkedIn
5. **Keep descriptions brief** - 2-3 sentences per project

---

## 🎉 You're All Set!

Your portfolio website is ready to customize. Start with Step 1 above and you'll be done in minutes!

Questions? Check `README.md` for detailed information.

Good luck! 🚀
