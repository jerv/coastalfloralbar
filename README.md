# Coastal Floral Bar

Static website for Coastal Floral Bar — floral bar service in Southern California. Built for [GitHub Pages](https://pages.github.com/).

## Local preview

Open `index.html` in a browser, or run a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. **Create the GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `coastalfloralbar` (or your preferred name)
   - Choose **Public**, do not add a README (this project already has one)
   - Click **Create repository**

2. **Push this project to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/coastalfloralbar.git
   git branch -M main
   git add .
   git commit -m "Initial commit: Coastal Floral Bar website"
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

3. **Enable GitHub Pages**
   - In the repo, go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Click **Save**

4. **View your site**
   - After a minute or two, the site will be live at:
   - `https://YOUR_USERNAME.github.io/coastalfloralbar/`

## Replacing placeholder images

Replace the SVG placeholders in the `images/` folder with your own photos:

- `hero-placeholder.svg` → hero / full setup (recommended: 1920×1080 or similar)
- `setup-placeholder.svg` → flower bucket stands
- `signage-placeholder.svg` → signage examples

Use the same filenames and keep `.svg`, or use `.jpg`/`.png` and update the paths in `index.html` and `css/styles.css`.

## Tech

- Plain HTML, CSS, and JavaScript
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and [Public Sans](https://fonts.google.com/specimen/Public+Sans) from Google Fonts
- No build step; ready for GitHub Pages
