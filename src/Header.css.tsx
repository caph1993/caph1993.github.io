//@ts-check
$(() => {
  function updateCSSVariables() {
    $('html').css('--window-inner-width', window.innerWidth + 'px');
    $('html').css('--window-inner-height', window.innerHeight + 'px');
    $('html').css('--vw', window.innerWidth * 0.01 + 'px');
    $('html').css('--vh', window.innerHeight * 0.01 + 'px');
  }
  $(window).on('resize', () => updateCSSVariables());
  $(window).trigger('resize');
});

$(<style>{`
html{
  --window-inner-width: 100vw;
  --window-inner-height: 100vh;
  --vw: 1vw;
  --vh: 1vh;
  --font-size: calc(min(1.5rem, max(1rem, 2.5*var(--vw))));
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
  padding: 0;
  font-size: var(--font-size);
  min-height: var(--window-inner-height);
}
`}</style>).appendTo('head');

$(<style>{`
.text-center { text-align: center;}
.text-right { text-align: right;}
.text-left { text-align: left;}
.text-justify { text-align: justify;}

.bold { font-weight: bold; }
.italic { font-style: italic; }
.strike-through { text-decoration: line-through; }
.underline { text-decoration: underline; }

.flex { display: flex; }
.full-width { width: 100%; }
.full-height { height: 100%; }

.hbox { display:flex; flex-direction: row; justify-content: space-around; align-items: stretch; }
.vbox { display:flex; flex-direction: column; justify-content: space-around; align-items: stretch; }
.flex-grow { flex: 1; }
.space-around { justify-content: space-around; }
.justify-center { justify-content: center; }
.justify-start { justify-content: start; }
.space-evenly { justify-content: space-evenly; }
.space-between { justify-content: space-between; }
.margin-auto { margin: auto; }
.align-items-center { align-items: center;}
.align-items-end { align-items: end;}
.align-items-stretch { align-items: stretch;}

.hbox-center { display:flex; flex-direction: row; justify-content: space-around; align-items: center; }
.vbox-center { display:flex; flex-direction: column; justify-content: space-around; align-items: center; }

.height-auto { height: auto; }

.box-shadow {
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.15);
}
`}</style>).appendTo('head');