const target = "https://example.com/";
const redirect = "https://www.google.com/";

if (window.location.href.startsWith(target)) {
  window.location.href = redirect;
}