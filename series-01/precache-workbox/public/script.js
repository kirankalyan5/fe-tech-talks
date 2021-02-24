
function injectLinkPrefetchIn4g(url) {
  if (window.navigator.connection.effectiveType === '4g') {
    //generate link prefetch tag
    const linkTag = document.createElement('link');
    linkTag.rel = 'prefetch';
    linkTag.href = url;
    linkTag.as = 'document';

    //inject tag in the head of the document
    document.head.appendChild(linkTag);
  }
}
