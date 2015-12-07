//window.MathJax = {
    //tex2jax: {
      //inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      //processEscapes: true
    //}
//};
//MathJax.Hub.Config({
    //"tex2jax": {  // tex2jax preprocessor
        //inlineMath: [ ['$','$'] ],  // delimiters for in-line math
        //displayMath: [ ['$$','$$'] ],  // delimiters for displayed equations
        //processEscapes: true,  // enable \$ to represent a single dollar sign
        //skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']  // MathJax will not process contents inside these tags 
    //},
    //"TeX": {  // TeX/LaTeX input processor
        //equationNumbers: { autoNumber: "AMS" },  // only number those equations in specific AMSmath environments (just like equation numbering in TeX/LaTeX)
        //extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]  // introduce AMSmath and AMSsymbols extensions; suppress generating error messages (instead, MathJax will directly display the original TeX/LaTeX code) 
    //},
    //"HTML-CSS": {  // HTML-CSS output processor (this is the default output of MathJax)
        //scale: 110,  // The scaling factor of math with respect to the surrounding text
        //linebreaks: { automatic: true } // automatically breaks the line if necessary
    //},
    //"SVG": {  // SVG output processor
        //scale: 110,  // The scaling factor of math with respect to the surrounding text
        //linebreaks: { automatic: true } // automatically breaks the line if necessary
    //},
    //"menuSettings": {  // settings for the mathematics contextual menu
        //zoom: "Hover"  // set equation zooming to be triggered by a single mouse click
    //}
//});

//MathJax.Hub.Queue(function() { // Fix <code> tags after MathJax finishes running, this is a hack to overcome a shortcoming of Markdown
    //var all = MathJax.Hub.getAllJax(), i;
    //for(i=0; i < all.length; i += 1) {
        //all[i].SourceElement().parentNode.className += ' has-jax';
    //}
//});

//window.MathJax = {
  //showProcessingMessages: false,
  //messageStyle: "none",
  //tex2jax: {
    //inlineMath: [['$', '$'], ["\\(", "\\)"]],
    //processEscapes: true
  //},
  //CommonHTML: { linebreaks: { automatic: true } },
  //"HTML-CSS": { linebreaks: { automatic: true } },
  //SVG: { linebreaks: { automatic: true } },
  //MathMenu: {
  //styles: {
    //".MathJax_Menu": {"z-index":2001}
  //}
  //},
  //AuthorInit: function () {
    //MathJax.Hub.Register.StartupHook("MathMenu Ready",function () {MathJax.Menu.BGSTYLE["z-index"] = 2000;});
  //}
//}
// copy from zybuluo.
window.MathJax = {
    tex2jax: {
        inlineMath: [['$','$'], ["\\(","\\)"]],
        processEscapes: true
    },
    TeX: {
        equationNumbers: {
            autoNumber: "AMS"
        } 
    }, 
    messageStyle: "none",
    SVG: { blacker: 1 }  // blacker means font weight.
}
//MathJax.Hub.Config({ tex2jax: { inlineMath: [['$','$'], ["\\(","\\)"]], processEscapes: true }, TeX: { equationNumbers: { autoNumber: "AMS" } }, messageStyle: "none", SVG: { blacker: 1 }});
