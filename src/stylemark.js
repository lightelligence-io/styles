window.stylemark = {};
window.stylemark.convertToExternalOnlyExample = function(compName) {
  var parent = document.querySelector(
    '.i-example a[href="' + compName + '.html"]',
  ).parentElement.parentElement;
  var body = parent.querySelector('.i-example__body');
  body.style.display = 'none';
  var button = document.createElement('a');
  button.classList.add('olt-Button');
  button.classList.add('olt-Button--primary');
  button.style.marginLeft = '20px';
  button.style.marginTop = '15px';
  button.style.marginBottom = '20px';
  button.setAttribute('href', compName + '.html');
  button.setAttribute('target', '_blank');
  button.appendChild(document.createTextNode('Show Example'));
  parent.insertBefore(button, body);
};

(function() {
  (window.tasks || []).forEach(function(t) {
    t();
  });
})();
