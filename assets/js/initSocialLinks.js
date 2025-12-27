export default function initSocialLinks() {
    if (window.SOCIAL_LINKS_COLLECTION === undefined) return;

    const socialLinksContainer = document.querySelector('.author.widget .info .social');
    if (socialLinksContainer === undefined) return;

    window.SOCIAL_LINKS_COLLECTION.forEach((socialLink) => {
        if (socialLink.href === undefined) return;
        const socialLinkElement = document.createElement('a');

        if (socialLink.svg) {
            socialLinkElement.innerHTML = socialLink.svg;
        } else if (socialLink.icon) {
            socialLinkElement.innerHTML = `<img src="${socialLink.icon}" alt="${socialLink.title}">`;
        } else {
            return;
        }

        socialLinkElement.href = socialLink.href;
        socialLinkElement.target = '_blank';
        socialLinkElement.rel = 'noopener noreferrer';
        socialLinkElement.title = socialLink.title;
        if (socialLink.class) {
            socialLinkElement.classList.add(socialLink.class);
        }

        socialLinksContainer.appendChild(socialLinkElement);
    });
}
