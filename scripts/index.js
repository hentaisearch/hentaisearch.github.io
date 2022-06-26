/* global $ */
/* global dev */
/* global Clip */
/* exported string */
/* exported onSelectDomain */
/* exported onCheckboxSixDigitCodes */
/* exported onCheckboxStayOnTheSameTab */
/* exported onCheckboxLinkAutosave */
/* exported onCheckboxDarkThemeToggle */

const string = '';

function DOMLoaded(fn) {
  document.addEventListener('DOMContentLoaded', fn);
}

let params = {
  domain: get('domain') ?? 'nhentai.net',
  sixDigitOnly: get('six-digit-only') ?? true,
  stayOnTheSameTab: get('stay-on-the-same-tab') ?? false,
  linkAutoSave: get('link-auto-save') ?? false,
  darkTheme: get('dark-theme') ?? false,
  latestLink: get('latest-link') ?? false
}

DOMLoaded(function () {
  // dark theme
  DarkTheme();
  // select
  $('option[selected]').prop('selected', false);
  $(`option[value="${params.domain}"]`).prop('selected', true);
  // checkbox
  $('#-checkbox-six-digit-codes').prop('checked', params.sixDigitOnly);
  $('#-checkbox-stay-on-the-same-tab').prop('checked', params.stayOnTheSameTab);
  $('#-checkbox-link-autosave').prop('checked', params.linkAutoSave);
  $('#-checkbox-darktheme-toggle').prop('checked', params.darkTheme);
  // latest link
  if (params.latestLink) {
    let msg = $('#-container-generating-link');
    msg.css('visibility', 'visible');
    msg.css('color', 'lime');
    msg.html(`&nbsp;Your latest link is ${params.latestLink}&nbsp;`);
    msg.on('click', function () {
      Clip(params.latestLink)
    });
  }
});

// Tools
function get(key) {
  const i = localStorage.getItem(key);
  return (['true', 'false'].includes(i)) ? (i === 'true') : (i);
}

// Event Listeners
function onSelectDomain(e) {
  params.domain = e.options[e.selectedIndex].value;
  localStorage.setItem('domain', params.domain);
  dev && console.log(params.domain);
}

function onCheckboxSixDigitCodes(e) {
  params.sixDigitOnly = e.checked;
  localStorage.setItem('six-digit-only', params.sixDigitOnly);
  dev && console.log(params.sixDigitOnly);
}

function onCheckboxStayOnTheSameTab(e) {
  params.stayOnTheSameTab = e.checked;
  localStorage.setItem('stay-on-the-same-tab', params.stayOnTheSameTab);
  dev && console.log(params.stayOnTheSameTab);
}

function onCheckboxLinkAutosave(e) {
  params.linkAutoSave = e.checked;
  localStorage.setItem('link-auto-save', params.linkAutoSave);
  dev && console.log(params.linkAutoSave);
}

function onCheckboxDarkThemeToggle(e) {
  params.darkTheme = e.checked;
  localStorage.setItem('dark-theme', params.darkTheme);
  dev && console.log(params.darkTheme);
  DarkTheme();
}

// Dark Theme
function DarkTheme() {
  // setup
  let isDark = params.darkTheme;
  const Apply = (...args) =>
    args.forEach(arg => $(arg[0]).toggleClass(arg[1], isDark));

  // apply
  Apply(
    ['#view, body', 'bg-to-dark'],
    ['#-container-bottom', 'container-to-dark'],
    ['#-container-top-left, #-container-darktheme-toggle, #-container-title', 'el-to-dark'],
    ['#-container-generating-link', 'some-to-dark'],
    ['#-button-generate', 'button-to-dark']
  );
}
