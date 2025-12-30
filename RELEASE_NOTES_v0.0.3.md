# SkullX Theme v0.0.3 - Typography and Spacing Improvements

## Overview

This release focuses on improving typography and spacing in post headers, enhancing readability and visual hierarchy. The changes make the post meta information more prominent and create better separation between elements.

## 🎯 Key Improvements

### Typography Enhancements

#### Post Meta Improvements
- **Increased font size**: Meta information (date, reading time, author) font size increased from `12px` (--fs-0) to `14px` (--fs-1) for better readability
- **Better visual hierarchy**: Meta text is now more prominent and easier to read
- **Improved legibility**: Larger font size makes the information more accessible

#### Spacing Improvements

- **Increased spacing between meta and title**: 
  - Spacing increased from `1.5rem` (24px) to `2rem` (32px)
  - Creates clearer visual separation between post meta and title
  - Improves overall readability and visual flow

- **Better visual separation**: 
  - Enhanced spacing creates a more comfortable reading experience
  - Clearer distinction between different elements in the post header
  - Improved visual hierarchy throughout the post header section

## 📝 Technical Changes

### CSS Updates
- Updated `.gh-post-meta` font-size from `var(--fs-0)` to `var(--fs-1)`
- Updated `.gh-post-meta` margin-bottom from `1.5rem` to `2rem`

### Files Modified
- `assets/css/index.css` - Typography and spacing adjustments for post meta

## 🐛 Bug Fixes

- None in this release

## ✨ What's New

- Larger, more readable post meta information
- Better spacing between post meta and title
- Improved visual hierarchy in post headers
- Enhanced overall readability

## 📱 Mobile Experience

All improvements apply seamlessly across all device sizes, maintaining consistency in the mobile experience.

## 🔄 Migration from v0.0.2

No breaking changes. This is a drop-in replacement that improves typography and spacing. Simply upload the new version and activate it.

## Installation

### Via Ghost Admin
1. Download the latest release ZIP file from the Releases page
2. Navigate to Settings → Design → Change theme
3. Click Upload theme and select the downloaded ZIP file
4. Activate the theme

### Via Git
```bash
cd content/themes
git pull origin main
```

Restart Ghost and the new version will be active.

## Requirements

- Ghost CMS 6.0 or higher
- Node.js v22 or higher (for development)

## Support

For issues, questions, or contributions, please visit the GitHub repository.

## License

This theme is released under the MIT License.

Copyright (c) 2024 runawaydevil

