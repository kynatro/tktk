/**
 * Highlight outstanding images and copy
 *
 * Outlines images and highlights copy in magenta wherever "tktk" is found.
 * Simply start outstanding copy blocks with "tktk" to highlight text. Add
 * a "#tktk" to the end of image src values and un-defined href values to
 * outline images and highlight links respectively.
 */
export default function() {
  const css = `.tktk, a[href*="#tktk"] {
    color: magenta !important;
  }
  img[src*="#tktk"], img[srcset*="#tktk"] {
    box-shadow: 0 0 0 2px magenta;
  }`;
  const styleTag = document.createElement('style');
  styleTag.type = "text/css";
  styleTag.innerHTML = css;
  document.querySelector('head').appendChild(styleTag);

  document.querySelectorAll("p,li,dt,dd,blockquote,cite,div,h1,h2,h3,h4,h5,h6").forEach((element) => {
    element.childNodes.forEach((childNode) => {
      if(childNode.nodeType === 3 && /^\s*tktk/.test(childNode.nodeValue)) {
        childNode.nodeValue = childNode.nodeValue.replace(/^\s*tktk\s*/gi, "");
        element.classList.add('tktk');
      }
    });
  });
}
