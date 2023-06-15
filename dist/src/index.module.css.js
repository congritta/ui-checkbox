
const digest = '2e7ed4b67ef1a12012a74d3ebfe4a832e7e7d1c50aa4a864b90e972ed8a9300d';
const css = `._Checkbox_w1dm2_1 {
  display: flex;
  gap: var(--cui-inputs-horizontal-padding);
  cursor: pointer;
  align-items: flex-start;
}

._Checkbox_w1dm2_1 > * {
  flex-shrink: 0;
}

._checkboxIcon_w1dm2_23 > svg {
  width: 1.5em;
  height: 1.5em;
}

@media (prefers-color-scheme: dark) {
  ._checkboxIcon_w1dm2_23 > svg {
    fill: #fff;
  }
}

._Checkbox_w1dm2_1[class*='_isActive'] > ._checkboxIcon_w1dm2_23 > svg {
  fill: var(--cui-accent-color-700);
}

._checkboxContents_w1dm2_53 {
  display: flex;
  align-items: center;
  min-height: 1.5em;
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"Checkbox":"_Checkbox_w1dm2_1","checkbox":"_Checkbox_w1dm2_1","checkboxIcon":"_checkboxIcon_w1dm2_23","checkboxContents":"_checkboxContents_w1dm2_53"};
export { css, digest };
  