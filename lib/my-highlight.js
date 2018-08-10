const hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));

export default hljs;