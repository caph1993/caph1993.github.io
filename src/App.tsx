//@ts-check
import { RX } from './cpUtils';
import HomeBody from './Home';
import { LanguageSelector, LanguageSwitch } from './language'
import { themeButton } from './theme';

const route$ = new RX(window.location.hash);
window.addEventListener('popstate', () => route$.set(window.location.hash));

const MainBody = () => {
  const component = <div></div>;
  const router = async (route) => {
    switch (route) {
      case '#!teaching': return (await import('./Teaching')).default;
      case '#!projects': return (await import('./Projects')).default;
      case '': return HomeBody;
      default: return () => <><span>URL ${route} not found.</span><br /><a href="#">Go to the homepage</a></>;
    }
  }
  route$.subscribe(async route => {
    const Replacement = await router(route);
    $(component).html('');
    $(component).append(<Replacement />);
  })
  setTimeout(() => {
    // Pre-cache possible next routes:
    import('./Teaching');
    import('./Projects');
  }, 500);
  return component;
}

$('<style>').text(`
ul {
  margin-top: 0;
  margin-bottom: 0;
}

.main-parent {
  font-family: Latin Modern Roman, Computer Modern Roman, serif;
  line-height: 1.5;
  padding-top: 1em;
}

.main-body {
  padding-left: calc(max(5*var(--vw), 1rem));
  padding-right: calc(max(5*var(--vw), 1rem));
}

.main-empty-bottom {
  padding-bottom: calc(20vh + 5rem);
}

.navbar-parent {
  margin: 1em 0 0.6em 0;
  padding: 0 5vw 0 5vw;
  max-width: 40em;
  display: flex;
  align-items: center;
}

.navbar-body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.navbar-icon-wiki {
  vertical-align: center;
  width: 1em;
  height: 1em;
}

.navbar-component-footer {
  margin: 0 4% 1em 4%;
}
`).appendTo("body");

let main = <div class="main-parent">
  <div class="navbar-parent">
    <div class="navbar-body">
      <div><LanguageSelector></LanguageSelector></div>
      <div>
        <a href="#">
          <LanguageSwitch>
            <span data-language="en">Home</span>
            <span data-language="es">Inicio</span>
            <span data-language="fr">Accueil</span>
            <span data-language="de">Start</span>
          </LanguageSwitch>
        </a>
      </div>
      <div>
        <a href="#!teaching">
          <LanguageSwitch>
            <span data-language="en">Teaching</span>
            <span data-language="es">Cursos</span>
            <span data-language="fr">Enseignement</span>
            <span data-language="de">Unterrichte</span>
          </LanguageSwitch>
        </a>
      </div>
      <div>
        <a href="#!projects">
          <LanguageSwitch>
            <span data-language="en">Projects</span>
            <span data-language="es">Proyectos</span>
            <span data-language="fr">Projets</span>
            <span data-language="de">Projekte</span>
          </LanguageSwitch>
        </a>
      </div>
      <div>
        <a href="./wiki">
          <img class="navbar-icon-wiki" src="static/icons/icon-wiki.png" alt="wiki" />
        </a>
      </div>
      <div>
        {themeButton}
      </div>
    </div>
  </div>
  <hr class="navbar-component-footer" />
  <div class="main-body">
    <MainBody></MainBody>
    <div class="main-empty-bottom" />
  </div>
</div>
export default main;
// $(main).appendTo("body");
//color: #0c4090;

$('<style>').text(`
body {
  font-family: Latin Modern Roman;
}
hidden{
  display: none;
}
body {
  background: no-repeat url(static/paper-texture/paper.png) 0 0;
  background-repeat: repeat;
  margin: 0;
  min-height: var(--window-inner-height);
}
button {
  cursor: pointer;
}
a.clarification {
  color: unset;
  text-decoration-style: dotted;
}
`).appendTo('head');
$('<link>', { rel: 'stylesheet', href: 'static/font-lmroman.css' }).appendTo('head');


