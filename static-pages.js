(function () {
  let root = document.body;
  if (!root || !root.hasAttribute('data-static-page')) { return; }

  let buttons = Array.from(document.querySelectorAll('[data-static-lang-button]'));
  let blocks = Array.from(document.querySelectorAll('[data-static-lang-content]'));
  let storageKey = 'sts2-static-page-language';
  let metaDescription = document.querySelector('meta[name="description"]');

  function detectInitialLanguage() {
    try {
      let saved = window.localStorage.getItem(storageKey);
      if (saved === 'en' || saved === 'ko') { return saved; }
    } catch (error) {}
    let browserLanguage = (navigator.language || 'en').toLowerCase();
    return browserLanguage.startsWith('ko') ? 'ko' : 'en';
  }

  function applyLanguage(language) {
    let next = language === 'ko' ? 'ko' : 'en';
    document.documentElement.lang = next;
    if (next === 'ko' && root.dataset.pageTitleKo) {
      document.title = root.dataset.pageTitleKo;
    }
    if (next === 'en' && root.dataset.pageTitleEn) {
      document.title = root.dataset.pageTitleEn;
    }
    if (metaDescription && next === 'ko' && root.dataset.pageDescriptionKo) {
      metaDescription.setAttribute('content', root.dataset.pageDescriptionKo);
    }
    if (metaDescription && next === 'en' && root.dataset.pageDescriptionEn) {
      metaDescription.setAttribute('content', root.dataset.pageDescriptionEn);
    }
    blocks.forEach(function (node) {
      node.hidden = node.dataset.staticLangContent !== next;
    });
    buttons.forEach(function (button) {
      button.classList.toggle('is-active', button.dataset.staticLangButton === next);
    });
    try {
      window.localStorage.setItem(storageKey, next);
    } catch (error) {}
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyLanguage(button.dataset.staticLangButton);
    });
  });

  applyLanguage(detectInitialLanguage());
})();
