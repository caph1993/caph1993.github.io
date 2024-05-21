import { RX } from './cpUtils';

export const theme$ = new RX<'light' | 'dark'>(localStorage.getItem('theme') == 'dark' ? 'dark' : 'light').ls('theme$');

theme$.subscribe(theme => {
  $('html').attr('data-theme', theme);
  $('.light-theme-only').prop('disabled', theme == 'dark');
  $('.dark-theme-only').prop('disabled', theme == 'light');
});

export const setTheme = (theme: 'light' | 'dark' | 'current' | 'toggle') => {
  const current = theme$.value;
  if (theme == 'current') theme = current;
  else if (theme == 'toggle') theme = current == 'dark' ? 'light' : 'dark';
  theme$.set(theme);
}

export const themeButton = <button class="box-shadow" onClick={() => setTheme('toggle')}>{theme$.map(v => v == 'light' ? "🌒" : "🌖").textNode()}</button>;

$(<style>{`
html:not([data-theme='dark']) {
  --color-background: #f8f8f8;
  --color-background-strong: #fff;
  --color-background-weak: #eee;
  --color-text: #24292e;
  --color-text-strong: #080808;
  --color-heading: #224466;
  --color-heading-strong: #0b3055;
  --color-link: #0c4090;
  --color-link-visited: #7e2a97;
  --color-link-hover: #2566c7;
  --color-selection: #14191e;
  --color-selection-background:rgba(173, 216, 230, 0.5); /* Light blue */
  --color-overlay-element-bg: 0, 0, 0;
  --color-overlay-element-fg: 240, 240, 240;
}

html[data-theme='dark'] {
  --color-background: #21211d;
  --color-background-strong: #111;
  --color-background-weak: #444;
  --color-text: #ccc;
  --color-text-strong: #eee;
  --color-heading: #6f889e;
  --color-heading-strong: #8ea4b8;
  --color-link: #51a9bb;
  --color-link-visited: #e797ff;
  --color-link-hover: #67d8ef;
  --color-selection-background: rgba(255, 215, 0, 0.5); /* Gold */
  --color-selection: #fff;

  --background: #282923;
  --background-2: #6d6e6a;
   
  --color-background-pre: #aaa;

  --box-shadow: rgba(100, 100, 100, 0.75);
}

html{
  background-color: var(--color-background);
  color: var(--color-text);
}
html ::selection {
  background-color: var(--color-selection-background);
  color: var(--color-selection);
  text-shadow: none;
}
a { color: var(--color-link);     text-decoration-thickness: 0.5px; }
a:visited { color: var(--color-link-visited); }
a:hover { color: var(--color-link-hover); }
`}</style>).appendTo('head');