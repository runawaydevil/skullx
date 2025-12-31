# SkullX Theme v0.0.4 - Polish Pass Release

## 🎨 Major Design System Overhaul

This release represents a complete "Polish Pass" transformation of the SkullX theme, implementing a unified design system with consistent layout, typography, and visual elements across all page types.

## ✨ New Features

### Unified Layout System
- **Single Layout Shell**: Implemented unified container and grid system in `default.hbs`
- **Responsive Design**: Two-column grid (desktop >980px) / Single column (mobile ≤980px)
- **Clean Member Pages**: Preserved sidebar-free layout for signin, signup, and account pages

### Enhanced Home Page
- **Featured Post Hero**: Prominent hero section for the first featured post
- **Smart Feed Logic**: Hero post automatically excluded from main feed to prevent duplication
- **Full-Width Cards**: Removed artificial width constraints for better content utilization

### Consistent Card Design System
- **Unified Styling**: Consistent background, borders, radius, padding, and shadows
- **Typography Hierarchy**: Card titles at 22-26px with proper line heights
- **Line-Clamp Excerpts**: 2-3 line excerpt truncation with fallback support
- **Responsive Layout**: Horizontal layout (desktop) / Vertical layout (mobile)

### Optimized Editorial Content
- **Optimal Reading Width**: Content limited to 70 characters for better readability
- **Koenig Card Support**: Standardized margins and sizing for all Ghost content blocks
- **Wide/Full-Width Content**: Proper handling of `.kg-width-wide` and `.kg-width-full` elements
- **Vertical Rhythm**: Consistent spacing between all content elements

### Comprehensive CSS Token System
- **Layout Tokens**: Container widths, sidebar dimensions, gaps, and gutters
- **Typography Tokens**: Font sizes, families, line heights, and letter spacing
- **Spacing Tokens**: Consistent scale from xs (8px) to xl (48px)
- **Responsive Typography**: Fluid font sizing with clamp() functions

### Streamlined Sidebar
- **Component Stack**: Organized sidebar with consistent spacing
- **Conditional Components**: Author card and newsletter based on theme settings
- **Removed Clutter**: Eliminated all tag clouds and tag lists for cleaner design

## 🗑️ Removed Features

### Table of Contents (TOC)
- **Complete Removal**: Eliminated TOC functionality that was causing scrollbar issues
- **Cleaner Sidebar**: Simplified sidebar without TOC widget
- **Reduced Dependencies**: Removed `tocbot` library and related CSS/JS
- **Better Performance**: Lighter theme with less JavaScript and CSS

### Tag Display Cleanup
- **Hidden Tags**: Removed tag display from post and page headers
- **Preserved Functionality**: Tags still work for organization and tag archive pages
- **Cleaner Design**: Focus on content without tag clutter

## 🔧 Technical Improvements

### Build System
- **Rollup Configuration**: Maintained existing build pipeline with PostCSS
- **Production Optimization**: CSS/JS minification and source map generation
- **GScan Compatibility**: Passes Ghost 6.0+ validation requirements
- **ZIP Distribution**: Automated theme packaging for easy installation

### Theme Customization
- **16 Custom Options**: All existing theme customization options preserved
- **Font System**: Complete support for Monospace, Serif, and Sans-serif fonts
- **Layout Options**: Full-width, 1220px, and 960px container options
- **Card Customization**: Image ratios, heights, radius, and shadow options
- **Author Overrides**: Custom name, bio, avatar, and social links

### Code Quality
- **Consistent Structure**: Unified template structure across all page types
- **Clean CSS**: Organized stylesheets with proper component separation
- **Responsive First**: Mobile-first approach with desktop enhancements
- **Performance Optimized**: Minimal JavaScript and efficient CSS

## 📱 Responsive Design

### Desktop (>980px)
- Two-column grid layout with sticky sidebar
- Horizontal card layout with image thumbnails
- Optimal typography scaling
- Full sidebar functionality

### Mobile (≤980px)
- Single column layout with sidebar below content
- Vertical card layout for better mobile experience
- Touch-friendly interface elements
- Optimized font sizes and spacing

## 🎯 Design Philosophy

This release embodies a "less is more" philosophy, focusing on:
- **Content First**: Clean, distraction-free reading experience
- **Consistent Design**: Unified visual language across all pages
- **Performance**: Lightweight and fast-loading theme
- **Accessibility**: Proper contrast, typography, and responsive design
- **Customization**: Flexible options without overwhelming complexity

## 🔄 Migration Notes

### From v0.0.3
- **Automatic**: No manual migration required
- **Settings Preserved**: All existing theme customization options maintained
- **TOC Users**: Table of Contents functionality has been removed
- **Tag Display**: Tags no longer appear in post/page headers (still functional for archives)

### Theme Settings
- Removed: `show_toc` option (no longer needed)
- Removed: `show_tags` option (was unused)
- All other customization options remain fully functional

## 🐛 Bug Fixes

- Fixed card width constraints that prevented full content area utilization
- Resolved TOC scrollbar issues by complete removal
- Improved responsive behavior across all breakpoints
- Enhanced member page layout consistency
- Corrected typography hierarchy inconsistencies

## 📦 Package Information

- **Ghost Compatibility**: 6.0+
- **File Count**: 68 files (optimized from 70)
- **Dependencies**: Reduced (removed tocbot)
- **Build Size**: Optimized CSS and JS bundles
- **GScan Status**: ✅ Passes validation

---

**Full Changelog**: [v0.0.3...v0.0.4](https://github.com/runawaydevil/skullx/compare/v0.0.3...v0.0.4)

**Download**: [skullx-v0.0.4.zip](https://github.com/runawaydevil/skullx/releases/download/v0.0.4/skullx.zip)