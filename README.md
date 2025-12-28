# SkullX - Ghost Theme

A minimal, editorial-style theme for Ghost CMS 6.0+. Built with a focus on readability and clean typography.

**Version:** 0.0.1  
**Developer:** [runawaydevil](https://github.com/runawaydevil)  
**Ghost Version:** 6.0+  
**Repository:** [runawaydevil/skullx](https://github.com/runawaydevil/skullx)

## Overview

SkullX is a Ghost theme designed for content-focused publications. It features a clean editorial layout with optimized reading width, responsive sidebar, and support for Ghost's native features including members, subscriptions, and multi-language content.

## Screenshot

![](https://shot.1208.pro/uploads/IhJCFNhGE6n9uvBcPvT85LX1o3gNLq8L86Pnf9mK.png)

## Features

- Editorial-style layout with optimized reading width (72ch)
- Fully responsive design for mobile, tablet, and desktop
- Sidebar with author information, latest posts, and tag cloud
- Automatic table of contents (TocBot) for posts
- Syntax highlighting with Highlight.js
- Search functionality
- Members and subscriptions support
- Multi-language support (i18n)
- Customizable theme settings via Ghost Admin

## Installation

### Via Ghost Admin

1. Download the latest release from [GitHub Releases](https://github.com/runawaydevil/skullx/releases)
2. Navigate to **Settings** → **Design** → **Change theme**
3. Click **Upload theme** and select the downloaded ZIP file
4. Activate the theme

### Via Git

```bash
cd content/themes
git clone https://github.com/runawaydevil/skullx.git
```

Restart Ghost and select the theme from **Settings** → **Design**.

## Development

### Prerequisites

- Node.js v22 or higher (required for Ghost 6.0+)
- Ghost CMS 6.0 or higher
- npm or pnpm package manager

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

The sidebar includes the following components:
- Table of contents (TocBot) - appears on posts
- Author information with social links
- Latest posts (5 most recent)
- Tags cloud (15 most used tags)

You can customize the sidebar by editing `partials/sidebar.hbs`.

### Additional Social Links

To add custom social links in the sidebar, navigate to **Settings** → **Code Injection** → **Site Header** and add:

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
- **Content Width**: 720px, 760px, or 820px
- **Grid Gap**: 20px, 24px, or 28px
- **Card Image Ratio**: 3/2, 4/3, or 16/9
- **Card Image Height**: 180px, 220px, or 260px
- **Card Radius**: 12px, 14px, or 16px
- **Card Shadow**: none, soft, or medium
- **Post Feature Ratio**: 16/9, 2/1, or none
- **Show Newsletter**: Enable/disable newsletter widget
- **Show Tags**: Enable/disable tags widget
- **Show TOC**: Enable/disable table of contents
- **Show Author Card**: Enable/disable author card

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

The theme supports all modern browsers as defined by the `browserslist` configuration in `package.json` (defaults to current browser versions).

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This theme is released under the [MIT License](LICENSE).

Copyright (c) 2024 [runawaydevil](https://github.com/runawaydevil)

Copyright (c) 2013-2024 Ghost Foundation - Released under the [MIT License](LICENSE).

## Credits

- Based on [PurpleDark](https://github.com/rame0/PurpleDark) theme by [rame0](https://github.com/rame0)
- Based on the Ghost Starter theme
- Icons by [Icons8](https://icons8.com)
- Syntax highlighting by [Highlight.js](https://highlightjs.org/)
- Table of contents by [TocBot](https://tscanlin.github.io/tocbot/)

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/runawaydevil/skullx/issues).
