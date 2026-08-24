# Charles Natasha - Data Analyst Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Perfect for showcasing your data analysis projects and skills to potential employers and clients.

## 🎨 Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with preference saving
- **Smooth Animations**: Engaging animations and transitions throughout
- **Interactive Navigation**: Sticky navbar with active link highlighting
- **Project Filtering**: Filter projects by category (Power BI, Python, SQL, etc.)
- **Contact Form**: Functional contact form with email integration
- **Animated Counters**: Statistics that animate on scroll
- **Progress Bars**: Skill proficiency bars with smooth animations
- **Testimonials Section**: Ready for client feedback
- **Modern Typography**: Professional and clean font choices
- **Fast Performance**: Optimized CSS/JS with no external dependencies

## 📁 Project Structure

```
My Portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/
    └── portfolio.pdf   # Your CV (add this file)
```

## 🚀 Getting Started

### 1. Open the Website Locally

Simply open `index.html` in your web browser:

```bash
# Option 1: Double-click the file
# Option 2: Right-click → Open with → Browser
# Option 3: Use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 2. Basic Customization

#### Update Your Name and Basic Info

Open `index.html` and find these sections:

**Hero Section** (lines 32-50):
```html
<h1 class="hero-title">Charles Natasha</h1>
<p class="hero-subtitle">Data Analyst | Turning Data into Insights</p>
<p class="hero-description">
    I specialize in Excel, SQL, Python, and Power BI...
</p>
```

**Navigation** (lines 23-30):
Change your name in the nav logo

**Footer** (lines 390+):
Update copyright year and contact information

---

## 🎯 Detailed Customization Guide

### 1. **Update Personal Information**

**Contact Email** (index.html, line 289):
```html
<a href="mailto:charles@example.com">charles@example.com</a>
```
Change `charles@example.com` to your actual email

**Social Media Links** (index.html, lines ~310-340):
Replace placeholder URLs with your actual profiles:
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
<a href="https://twitter.com/YOUR_HANDLE" target="_blank">
```

**Location** (index.html, line 355):
```html
<p>New York, USA</p>
```

---

### 2. **Add Your Projects**

Edit the **Projects Section** (index.html, lines 217-330):

For each project, update:

```html
<div class="project-card" data-category="powerbi">  <!-- Change category -->
    <div class="project-image">
        <div class="project-placeholder">Sales Dashboard</div>  <!-- Project title -->
    </div>
    <div class="project-content">
        <h3>Sales Analytics Dashboard</h3>  <!-- Main title -->
        <p>
            Your project description here...  <!-- Description -->
        </p>
        <div class="project-tools">
            <span class="tool-badge">Power BI</span>  <!-- Tools used -->
            <span class="tool-badge">SQL</span>
            <span class="tool-badge">DAX</span>
        </div>
        <div class="project-buttons">
            <a href="https://github.com/YOUR_USERNAME/project-name" class="btn btn-small btn-primary">GitHub</a>
            <a href="https://your-demo-link.com" class="btn btn-small btn-secondary">Live Demo</a>
        </div>
    </div>
</div>
```

**Available Categories:**
- `powerbi` - Power BI/Tableau projects
- `python` - Python/Data Science projects
- `sql` - SQL/Database projects
- `all` - Appears in all filters

---

### 3. **Customize Skills Section**

The **Skills Section** (index.html, lines 145-195):

Each skill card contains:
- **Icon**: Change the emoji (📊, 🐍, etc.)
- **Title**: Skill name
- **Description**: What you can do with this skill
- **Progress Bar**: Update the `style="width: XX%"` to reflect your proficiency (0-100%)

Example:
```html
<div class="skill-card">
    <div class="skill-icon">📊</div>  <!-- Change emoji -->
    <h3>Excel</h3>  <!-- Skill name -->
    <p class="skill-description">Advanced formulas, PivotTables, Dashboards</p>
    <div class="progress-bar">
        <div class="progress" style="width: 95%"></div>  <!-- Update percentage -->
    </div>
    <span class="progress-text">95%</span>  <!-- Match above percentage -->
</div>
```

---

### 4. **Update About Section**

The **About Section** (index.html, lines 81-135):

Replace the paragraphs with your own story:
```html
<p>
    I'm a passionate data analyst with...
</p>
```

Update the **values list** with your core values:
```html
<li>📊 Data-Driven Decision Making</li>
<li>🎯 Your Value Here</li>
```

Update **statistics** (lines ~120-135):
```html
<div class="stat-card">
    <h3 class="stat-number" data-target="10">0</h3>  <!-- Change number -->
    <p class="stat-label">+ Projects Completed</p>  <!-- Change label -->
</div>
```

---

### 5. **Add Your CV/Resume**

1. Create an `assets` folder if it doesn't exist:
```
My Portfolio/
└── assets/
    └── portfolio.pdf  ← Add your CV here
```

2. The download button in the hero section will automatically work:
```html
<a href="assets/portfolio.pdf" class="btn btn-outline" download>Download CV</a>
```

---

### 6. **Customize Colors & Branding**

All colors are defined in `style.css` using **CSS Variables**:

**style.css (lines 1-40):**
```css
:root {
    /* Brand Colors */
    --color-accent: #0066ff;        /* Primary blue */
    --color-accent-dark: #0052cc;   /* Darker blue for hover */
    --color-success: #28a745;       /* Green */
    --color-warning: #ffc107;       /* Yellow */
    --color-danger: #dc3545;        /* Red */
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
    --gradient-accent: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Common color changes:**

1. **Change Primary Accent Color** (blue to another color):
   - Find: `--color-accent: #0066ff;`
   - Replace hex code with your color

2. **Change Primary Gradient**:
   - Find: `--gradient-primary: linear-gradient(...)`
   - Use a website like [uigradients.com](https://uigradients.com) to find gradients

3. **Example**: Change to purple theme:
```css
--color-accent: #8b5cf6;        /* Purple */
--color-accent-dark: #7c3aed;   /* Darker purple */
--gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
```

---

### 7. **Update Testimonials**

The **Testimonials Section** (index.html, lines 364-388):

Replace placeholders with real client feedback:
```html
<div class="testimonial-card">
    <p class="testimonial-text">
        "Your testimonial here..."
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">CN</div>  <!-- Initials -->
        <div>
            <p class="author-name">Client Name</p>
            <p class="author-title">Job Title, Company</p>
        </div>
    </div>
</div>
```

---

### 8. **Modify Typography**

All fonts are defined at the top of `style.css`:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-mono: 'Courier New', monospace;
```

To use Google Fonts:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select a font and copy the import code
3. Add to top of `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```
4. Update the CSS variable:
```css
--font-primary: 'Your Font Name', sans-serif;
```

---

### 9. **Spacing & Layout**

All spacing uses variables for consistency:

```css
--spacing-xs: 0.5rem;      /* 8px */
--spacing-sm: 1rem;        /* 16px */
--spacing-md: 1.5rem;      /* 24px */
--spacing-lg: 2rem;        /* 32px */
--spacing-xl: 3rem;        /* 48px */
--spacing-xxl: 4rem;       /* 64px */
```

---

### 10. **Deploy Your Website**

#### Option A: **GitHub Pages** (Free)

1. Create a GitHub repository named `portfolio`
2. Push your files to the repository
3. Go to **Settings → Pages**
4. Select `main` branch as source
5. Your site will be live at: `https://username.github.io/portfolio`

#### Option B: **Netlify** (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Site deployed instantly

#### Option C: **Web Hosting** (Paid)

Use any web hosting provider (GoDaddy, Bluehost, etc.) and upload files via FTP.

---

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

All breakpoints are defined in `style.css` (lines ~600+):
```css
@media (max-width: 768px) {
    /* Tablet & mobile styles */
}

@media (max-width: 480px) {
    /* Small mobile styles */
}
```

---

## 🔧 Advanced Customization

### Add Custom Fonts from Google Fonts

1. Go to [fonts.google.com](https://fonts.google.com)
2. Select fonts and copy the `<link>` tag
3. Add to `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

4. Update CSS:
```css
--font-primary: 'Poppins', sans-serif;
```

### Customize Background Colors

**Light Mode** (default):
```css
--bg-primary: #ffffff;      /* Main background */
--bg-secondary: #f8f9fa;    /* Section background */
--bg-tertiary: #e9ecef;     /* Tertiary background */
```

**Dark Mode** (activated in dark mode):
```css
body.dark-mode {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --bg-tertiary: #21262d;
}
```

### Add More Project Cards

Simply duplicate a project card HTML and update:
1. `data-category` attribute (powerbi, python, sql, or all)
2. Project title and description
3. Tool badges
4. GitHub and demo links

---

## 💡 Tips & Best Practices

✅ **Do:**
- Keep descriptions concise and impactful
- Use consistent emoji for visual appeal
- Update statistics regularly
- Add real project links
- Test on mobile before deploying
- Keep the design clean and professional

❌ **Don't:**
- Overcrowd sections with too much content
- Use too many colors (stick to 2-3 main colors)
- Leave placeholder text in production
- Use low-quality project images
- Forget to test dark mode

---

## 🐛 Troubleshooting

### Issue: Styles not loading
- **Solution**: Make sure `style.css` is in the same folder as `index.html`
- Check that the link in HTML is correct: `<link rel="stylesheet" href="style.css">`

### Issue: JavaScript not working
- **Solution**: Ensure `script.js` is in the same folder
- Check browser console for errors (F12 → Console)

### Issue: Contact form not working
- **Solution**: The form uses mailto links. Make sure recipient email is valid:
```html
<a href="mailto:your-email@example.com">
```

### Issue: Mobile menu not closing
- **Solution**: Clear browser cache (Ctrl+Shift+Delete)

### Issue: Dark mode not saving
- **Solution**: Check if localStorage is enabled in browser settings

---

## 📚 Resources

- **Colors**: [coolors.co](https://coolors.co) - Generate color palettes
- **Fonts**: [fonts.google.com](https://fonts.google.com) - Free fonts
- **Icons**: [emoji-cheat-sheet.com](https://emoji-cheat-sheet.com) - Emoji reference
- **Gradients**: [uigradients.com](https://uigradients.com) - Beautiful gradients
- **Hosting**: [netlify.com](https://netlify.com), [github.com](https://github.com)

---

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your personal or professional use.

---

## 🎓 Customization Checklist

- [ ] Update your name and contact information
- [ ] Add your real projects (3-4 minimum)
- [ ] Update skills with accurate proficiency levels
- [ ] Add your CV to `assets/portfolio.pdf`
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Change color scheme if desired
- [ ] Update About section with your story
- [ ] Add client testimonials
- [ ] Test on mobile devices
- [ ] Deploy to a hosting platform

---

## 🚀 Next Steps

1. **Customize everything** using this guide
2. **Add your projects** with GitHub links
3. **Deploy** to GitHub Pages, Netlify, or your hosting
4. **Share** your portfolio on LinkedIn, Twitter, and job applications
5. **Update** regularly with new projects and achievements

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review the code comments in files
3. Test in different browsers
4. Check the browser console (F12) for errors

---

## ✨ Final Notes

This template is designed to be:
- **Easy to customize** - Simple HTML structure
- **Fast to load** - No external dependencies
- **SEO friendly** - Semantic HTML
- **Accessible** - ARIA labels and keyboard navigation
- **Professional** - Modern design standards

Enjoy your new portfolio website! 🎉

---

**Last Updated**: February 10, 2026
**Version**: 1.0.0
