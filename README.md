# SkullX - Ghost Theme

Dark purple theme for Ghost CMS. Mix of starter theme, dracula colors and custom ideas.

**Version:** 0.01  
**Developer:** [runawaydevil](https://pablo.space)  
**Ghost Version:** 6.0+  
**Repository:** [runawaydevil/skullx](https://github.com/runawaydevil/skullx)

## Features

- 🎨 Dark purple theme with dracula-inspired colors
- 📱 Fully responsive design
- 📑 Sidebar with author info, latest posts, and tags cloud
- 📖 Automatic table of contents (TocBot) for posts
- 💻 Syntax highlighting with Highlight.js
- 🔍 Search functionality
- 👥 Members/Subscriptions support
- 🌐 Multi-language support (i18n)

## Screenshots

![](https://shot.1208.pro/uploads/r3LLf8Eow9DsIgWniWjYvTBJU3BndOd1HwEcQRak.png)

## Installation

### Via Ghost Admin

1. Download the latest release from [GitHub Releases](https://github.com/runawaydevil/skullx/releases)
2. Go to **Settings** → **Design** → **Change theme**
3. Click **Upload theme** and select the downloaded ZIP file
4. Activate the theme

### Via Git

```bash
cd content/themes
git clone https://github.com/runawaydevil/skullx.git
```

Then restart Ghost and select the theme from **Settings** → **Design**.

## Development

### Prerequisites

- Node.js v22 or higher (required for Ghost 6.0+)
- Ghost CMS 6.0 or higher
- npm or pnpm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/runawaydevil/skullx.git
cd skullx
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Link the theme to your Ghost installation:
```bash
# On Linux/Mac
ln -s /path/to/skullx /path/to/ghost/content/themes/skullx

# On Windows (PowerShell as Administrator)
New-Item -ItemType SymbolicLink -Path "C:\path\to\ghost\content\themes\skullx" -Target "C:\path\to\skullx"
```

4. Restart Ghost and select the theme from **Settings** → **Design**

### Development Commands

Start development mode with live reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Create a ZIP archive for distribution:
```bash
npm run zip
```

Test theme compatibility with GScan:
```bash
npm run test
```

## Customization

### Sidebar

The sidebar includes:
- Table of contents (TocBot) - appears on posts
- Author information
- Latest posts (5 most recent)
- Tags cloud (15 most used tags)

You can customize the sidebar by editing `partials/sidebar.hbs`.

### Additional Social Links

To add custom social links in the sidebar, go to **Settings** → **Code Injection** → **Site Header** and add:

```html
<script>
    var SOCIAL_LINKS_COLLECTION = [
        {
            title: "Telegram",
            href: "https://t.me/your_username",
            svg: "<svg>...</svg>",
        },
        {
            title: "Github",
            href: "https://github.com/your_username",
            icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        }
    ];
</script>
```

**Social links options:**
- `href` - Link URL (required)
- `svg` - SVG icon code
- `icon` - Link to icon image
- `title` - Link title (optional)
- `class` - Additional CSS class (optional)

### TocBot Configuration

Customize the table of contents by adding this to **Settings** → **Code Injection** → **Site Header**:

```html
<script>
    var TOC_BOT_OPTIONS = {
        collapseDepth: 0,
        // See full options: https://tscanlin.github.io/tocbot/#api
    }
</script>
```

### Theme Settings

The theme includes customizable settings accessible via **Settings** → **Design** → **Theme settings**:

- **Font**: Choose between Monospace, Serif, or Sans-serif
- **Layout**: Full-width, 1220px, or 960px container width

## Theme Structure

```
skullx/
├── assets/          # CSS, JS, and images
│   ├── built/       # Compiled assets (generated)
│   ├── css/         # Source CSS files
│   ├── js/          # Source JavaScript files
│   └── images/      # Theme images
├── locales/         # Translation files
├── members/         # Member templates (signin, signup, account)
├── partials/        # Reusable template partials
│   ├── card.hbs     # Post card for index
│   ├── card-short.hbs # Post card for sidebar
│   ├── pagination.hbs
│   ├── sidebar.hbs
│   └── icons/       # SVG icons
├── default.hbs      # Main template
├── index.hbs        # Home page
├── post.hbs         # Post template
├── page.hbs        # Page template
├── tag.hbs         # Tag archive
├── author.hbs      # Author archive
├── error.hbs       # Error page
├── package.json
└── README.md
```

### Custom Templates

You can create custom templates for specific pages by adding the slug to the template name:

- `page-about.hbs` - Custom template for `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

## Browser Support

The theme supports all modern browsers as defined by the `browserslist` configuration in `package.json` (defaults).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This theme is released under the [MIT License](LICENSE).

Copyright (c) 2024 [runawaydevil](https://pablo.space)

Copyright (c) 2013-2024 Ghost Foundation - Released under the [MIT License](LICENSE).

## Credits

- Based on the Ghost Starter theme
- Icons by [Icons8](https://icons8.com)
- Syntax highlighting by [Highlight.js](https://highlightjs.org/)
- Table of contents by [TocBot](https://tscanlin.github.io/tocbot/)

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/runawaydevil/skullx/issues).

---

**Made with ❤️ by [runawaydevil](https://pablo.space)**
