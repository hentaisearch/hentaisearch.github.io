//! Outdated code

/* window.onload = function () {
  $darktheme(true);
  $autosave();
  $S();
}

// Optimization
let percentinpx = document.documentElement.clientWidth / 100 * 1;

// $A() Elements
let title = document.getElementById("title");
let darktheme_checkbox = document.getElementById("darktheme_checkbox");
let darktheme_text = document.getElementById("darktheme_checkbox_text");
let textUnderButton = document.getElementById("text-under-button");
let support_text = document.getElementById("support");


var ScreenWidth;

if (window.innerWidth > 1024) {
  ScreenWidth = document.documentElement.clientWidth;
}
if (window.innerWidth <= 1024) {
  ScreenWidth = window.innerWidth;
}

$A();

function $A() {
  // console.log("$A()")
  // Title
  let title_variable = (ScreenWidth - title.offsetWidth) / 2;
  title.style.marginLeft = title_variable + "px";
  title.style.marginRight = title_variable + "px";

  // DarkTheme
  let darkthemetext_variable = (document.documentElement.clientWidth - darktheme_text.offsetWidth) - (percentinpx * 0.5);
  darktheme_text.style.marginLeft = darkthemetext_variable + "px";

  let darkthemecheckbox_variable = darkthemetext_variable - darktheme_checkbox.offsetWidth - 4
  darktheme_checkbox.style.marginLeft = darkthemecheckbox_variable + "px";
}

// White
if (window.innerHeight <= 444) {
  support_text.style.marginTop = "99.8vh";
  document.getElementById('counter').style.marginTop = "104.5vh";
}
if (window.innerHeight >= 740) {
  support_text.style.marginTop = "97.5vh";
  document.getElementById('counter').style.marginTop = "99.5vh";

}

window.addEventListener("orientationchange", function () { $A() }, false);

function $tub() {
  // console.log("$tub()");
  // Text-under-button
  let tUB_variable = (document.documentElement.clientWidth - textUnderButton.offsetWidth) / 2;
  textUnderButton.style.marginLeft = tUB_variable + "px";
  textUnderButton.style.marginRight = tUB_variable + "px";
}
// Checkbox
let checkbox = document.getElementById("checkbox");
if (checkbox.checked) v = 6;
function $checkbox() {
  if (checkbox.checked) v = 6;
  if (!checkbox.checked) v = 3;
}

// Dark Theme
let darktheme = document.getElementById("darktheme_checkbox");

function $darktheme(onload) {
  if (onload !== true) {
    window.location.hash = "";
  }
  switch (window.location.hash) {
    case "#dark":
      todark();
      console.log("dark");
      darktheme.checked = true;
      break;
    case "#light":
      tolight();
      console.log("light");
      darktheme.checked = false;
  }
  function todark() {
    document.body.style.backgroundImage = "url()"
    document.body.style.backgroundColor = "#1C1B22";
    darktheme_text.style.backgroundColor = "whitesmoke";
    darktheme_text.style.color = "#000000";
    title.style.backgroundColor = "whitesmoke";
    title.style.color = "#000000";
    title.style.border = "4px solid whitesmoke";
    document.getElementById("darktheme_checkbox_text").style.border = "2px solid whitesmoke";
    window.location.href = window.location.pathname + "#dark";
    // window.loaction.reload();
  }

  function tolight() {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(\"./assets/background.png\")";
    darktheme_text.style.backgroundColor = "#000000";
    darktheme_text.style.color = "whitesmoke";
    title.style.backgroundColor = "#000000";
    title.style.color = "whitesmoke";
    title.style.border = "4px solid #000000";
    darktheme_text.style.border = "2px solid #000000";
    window.location.href = window.location.pathname + "#light";
    // window.loaction.reload();
  }

  if (darktheme_checkbox.checked) {
    todark();
  }

  if (!darktheme_checkbox.checked) {
    tolight();
  }
}

// Select
function $S() {
  let nhs = document.getElementById("nhs").selectedIndex;
  let nhs_options = document.getElementById("nhs").options;
  if (nhs_options[nhs].text === "nhentai.xxx") {
    nhentai_domain = "nhentai.";
    nhentai_domain_ending = "xxx";
  } else if (nhs_options[nhs].text === "nhentai.net") {
    nhentai_domain = "nhentai.";
    nhentai_domain_ending = "net";
  } else if (nhs_options[nhs].text === "nhentai.com") {
    nhentai_domain = "nhentai.";
    nhentai_domain_ending = "com";
  } else if (nhs_options[nhs].text === "hentai.name") {
    nhentai_domain = "hentai.";
    nhentai_domain_ending = "name";
  }
  else {
    console.log("wth?");
  }
}

// AutoSave
function $autosave() {
  let autosave = document.getElementById("autosave");

  if (autosave.checked) {
    autosave_enabled = true;
  }
  if (!autosave.checked) {
    autosave_enabled = false;
  }

} */