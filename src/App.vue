<template>
  <router-view/>
</template>

<style lang="scss">
@import 'assets/variables.scss';
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  color: unset;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/////////////////////////////////////////////////////////////////////////////////////Utility classes
.blue-hover:hover {
  color: $blue;
}
.green-hover:hover {
  color: $green;
}
.purple-hover:hover {
  color: $purple;
}
.orange-hover:hover {
  color: $orange;
}
.grey-hover:hover {
  color: $grey;
}
.pink-hover:hover {
  color: $pink;
}
///////////////////////////////////////////////////////////////////////////////////////////////LINKS
a {
  transition: 1s ease;
}
a:hover {
  text-decoration-line: underline;
}
/////////////////////////////////////////////////////////////////////////////////////////////BUTTONS
button {
  border-radius: 9999px;
  padding: .75rem 3rem;
  border: none;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 300;
  color: $light;
  transition: 0.3s;
}
button.blue {
  background-color: $blue;
  box-shadow: 0 3px 2px 1px $darker-blue;
}
button.green {
  background-color: $green;
  box-shadow: 0 3px 2px 1px $darker-green;
}
button:hover {
  cursor: pointer;
  transform: translateY(4px);
  box-shadow: 0 0 0 0 transparent;
}
////////////////////////////////////////////////////////////////////////////////////////////////TEXT
.section-title {
  font-family: $title-font;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
<script setup lang="ts">
</script>
