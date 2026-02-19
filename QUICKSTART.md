# YASCON Website - Quick Start Guide for Beginners

## 📋 What You'll Need

1. **A computer** (Windows, Mac, or Linux)
2. **Internet connection**
3. **About 2 hours** to get everything set up
4. **No prior coding experience required** - we'll walk you through everything!

## 🎯 Goal
By the end of this guide, you'll have the YASCON website running on your computer and ready to customize.

---

## Step 1: Install Required Software (30 minutes)

### 1.1 Install Node.js
Node.js is the engine that runs the website.

**Windows/Mac:**
1. Go to https://nodejs.org
2. Download the "LTS" version (recommended for most users)
3. Run the installer
4. Click "Next" through all the steps (default settings are fine)
5. Verify installation:
   - Open "Terminal" (Mac) or "Command Prompt" (Windows)
   - Type: `node --version`
   - You should see something like: `v20.11.0`

### 1.2 Install VS Code (Code Editor)
VS Code is where you'll edit the website files.

1. Go to https://code.visualstudio.com
2. Download for your operating system
3. Install with default settings
4. Open VS Code

### 1.3 Install Git (Version Control)
Git helps you manage and save changes to your code.

1. Go to https://git-scm.com
2. Download for your operating system
3. Install with default settings
4. Verify installation:
   - Open Terminal/Command Prompt
   - Type: `git --version`
   - You should see something like: `git version 2.43.0`

---

## Step 2: Set Up Your Project (15 minutes)

### 2.1 Create a Project Folder
1. Open Terminal/Command Prompt
2. Navigate to where you want your project:
   ```bash
   cd Desktop
   mkdir yascon-website
   cd yascon-website
   ```

### 2.2 Initialize Next.js Project
Copy and paste each command one at a time:

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

When prompted, answer:
- ✅ Would you like to use TypeScript? → **Yes**
- ✅ Would you like to use ESLint? → **Yes**
- ✅ Would you like to use Tailwind CSS? → **Yes**
- ✅ Would you like to use `src/` directory? → **No**
- ✅ Would you like to use App Router? → **Yes**
- ✅ Would you like to customize the default import alias? → **No**

### 2.3 Install Additional Dependencies
```bash
npm install lucide-react
```

---

## Step 3: Add the YASCON Website Code (10 minutes)

### 3.1 Replace the Home Page
1. In VS Code, open the `yascon-website` folder (File → Open Folder)
2. Find the file `app/page.tsx`
3. Delete everything in that file
4. Copy the entire content from `yascon-website.jsx` (the file I provided)
5. Paste it into `app/page.tsx`
6. Save the file (Ctrl+S or Cmd+S)

### 3.2 Update Fonts
1. Open `app/layout.tsx`
2. Replace the imports at the top with:

```typescript
import { Playfair_Display, Space_Grotesk } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space'
});
```

3. Update the `<html>` tag to:
```typescript
<html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
```

---

## Step 4: Run Your Website! (5 minutes)

### 4.1 Start the Development Server
In Terminal/Command Prompt (make sure you're in the `yascon-website` folder):

```bash
npm run dev
```

### 4.2 View Your Website
1. Open your web browser
2. Go to: `http://localhost:3000`
3. **🎉 Your website should now be live!**

---

## Step 5: Make Your First Edit (10 minutes)

Let's customize the hero section to make sure everything works.

1. In VS Code, open `app/page.tsx`
2. Find the line that says: `"Empowering Youth to Protect Nature"`
3. Change it to: `"Welcome to YASCON - Empowering Youth to Protect Nature"`
4. Save the file
5. Go back to your browser - **the page will automatically update!**

---

## Common Issues & Solutions

### Issue: "node is not recognized"
**Solution:** Restart your Terminal/Command Prompt after installing Node.js

### Issue: "npm install fails"
**Solution:** 
1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Issue: "Port 3000 is already in use"
**Solution:** 
1. Stop the running server (Ctrl+C)
2. Run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Issue: Website shows errors
**Solution:**
1. Make sure you copied the entire code from `yascon-website.jsx`
2. Check that you installed `lucide-react`: `npm install lucide-react`
3. Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

---

## Next Steps

Now that your website is running, you can:

1. **Customize Content:**
   - Edit text in `app/page.tsx`
   - Replace placeholder images with YASCON photos
   - Update contact emails and social media links

2. **Add Real Data:**
   - Update statistics with actual numbers
   - Add real news articles
   - Upload project photos to the gallery

3. **Set Up Forms:**
   - Follow the API examples to connect volunteer and contact forms
   - Set up email notifications

4. **Deploy Your Website:**
   - See DEPLOYMENT.md for instructions on making your site live

---

## Helpful Commands Reference

```bash
# Start development server
npm run dev

# Stop the server
Ctrl+C (or Cmd+C on Mac)

# Build for production
npm run build

# Start production server
npm start

# Install a new package
npm install package-name

# Check what's installed
npm list --depth=0
```

---

## Getting Help

**When something doesn't work:**
1. Read the error message carefully
2. Check the "Common Issues" section above
3. Google the error message
4. Ask in the Next.js Discord: https://discord.gg/nextjs

**For YASCON-specific questions:**
- Refer to the main README.md
- Check IMPLEMENTATION-CHECKLIST.md
- Review the code comments in the files

---

## Understanding the File Structure

```
yascon-website/
├── app/                   ← Your website pages
│   ├── layout.tsx         ← Overall layout and fonts
│   └── page.tsx           ← Home page (main website code)
├── public/                ← Images, icons, files
├── node_modules/          ← Installed packages (don't edit)
├── package.json           ← Project info and dependencies
└── README.md              ← Documentation
```

---

## Tips for Success

1. **Save Often:** Press Ctrl+S (Cmd+S) regularly
2. **Test Frequently:** Check your browser after each change
3. **Take Breaks:** It's okay to step away and come back
4. **Don't Panic:** If something breaks, you can always undo (Ctrl+Z)
5. **Ask Questions:** No question is too basic!

---

## Congratulations! 🎉

You now have the YASCON website running on your computer. You're officially a web developer!

**Next:** Check out the IMPLEMENTATION-CHECKLIST.md to see what to work on next.

---

**Remember:** Every expert was once a beginner. You've got this! 🌍

For more detailed information, see:
- README.md - Full documentation
- IMPLEMENTATION-CHECKLIST.md - What to do next
- API examples - How to connect forms
