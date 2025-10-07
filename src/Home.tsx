//@ts-check
import { lang$, LanguageSwitch } from './language';
import { styled } from 'jsx-dom';

const ContactEmailTest = () => {
  const elems = (() => {
    let button, email, main;
    main = <>
      {button = <button></button>}
      {email = <span class="email-address"></span>}
    </>
    return { button, email, main }
  })();

  $(elems.button).on('click', () => {
    $(elems.email).text(["caph", "199", "3@gm", "ail.", "com"].join(''));
    $(elems.button).hide();
  });
  lang$.switch({
    en: 'I am not a robot...',
    es: 'No soy un robot...',
    de: 'Ich bin kein Roboter...',
    fr: 'Je ne suis pas un robot...',
  }).subscribe(text => $(elems.button).text(text));
  return elems.main;
}


const ContactEmail = () => {
  const button = $('<button>');
  const email = $('<span>', { "class": "email-address" });
  const component = <>{button}{email}</>

  button.on('click', function () {
    email.text(["caph", "199", "3@gm", "ail.", "com"].join(''));
    button.hide();
  });
  lang$.switch({
    en: 'I am not a robot...',
    es: 'No soy un robot...',
    de: 'Ich bin kein Roboter...',
    fr: 'Je ne suis pas un robot...',
  }).subscribe(text => button.text(text));
  return component;
}

const HomePhoto = styled.img`
  margin-bottom: calc(1*var(--vh));
  margin-left: calc(2.5*var(--vw));
  width: 30%;
  float: right;
`;

const HomeBody = () => <>
  <a href="static/profile/photo.jpg">
    <HomePhoto src="static/profile/photo.jpg" title="Karlsruhe, 2017" />
  </a>
  <h1>Carlos Pinzón</h1>
  <LanguageSwitch>
    <div data-language="en">
      <p>
        Welcome to my homepage.
        I am a mathematician and engineer passionate about statistics and algorithms.
      </p>
      <p>
        In 2023, I defended my doctoral thesis titled "Exploring privacy and fairness in machine learning" at <a href="https://www.polytechnique.edu">École Polytechnique (l'X)</a>, Palaiseau, France.
        I also hold a master's degree on Engineering (mostly in informatics) from <a
          href="https://www.javerianacali.edu.co/">Universidad Javeriana Cali</a>, Cali, Colombia,
        and I did a bachelor of 9 semesters in Mathematics and one of 10 semesters in Electronic Engineering, both at <a
          href="https://www.escuelaing.edu.co/es/">Escuela Colombiana de Ingeniería Julio Garavito</a>, Bogotá,
        Colombia.
      </p>
      {/* <p>
        My topics of interest are math, electronics and computer science in general, but specifically, algorithms,
        logic and machine learning. I enjoy coding, proving, and I like programming contests.
      </p> */}
      <p>
        Contact: <ContactEmail></ContactEmail>
      </p>
    </div>
    <div data-language="es">
      <p>
        Bienvenido a la página web de <b>Carlos Antonio Pinzón Henao</b>.
      </p>
      <p>
        En 2023 defendí mi tesis doctoral, titulada "Exploring privacy and fairness in machine learning", en el <a
          href="https://www.polytechnique.edu">École Polytechnique (l'X)</a>, Palaiseau, Francia.
        En 2020 completé una maestría en ingeniería (ciencias de la computación) en la <a href="https://www.javerianacali.edu.co/">Universidad Javeriana Cali</a>, Cali,
        Colombia.
        Soy matemático e ingeniero electrónico graduado de la <a href="https://www.escuelaing.edu.co/es/">Escuela
          Colombiana de Ingeniería Julio Garavito</a>, Bogotá, Colombia.
        <p>
          Mis temas de interés son matemáticas, electrónica e ingeniería de sistemas en general, pero más
          específicamente algoritmos, lógica e inteligencia artificial. Me gusta programar y disfruto las maratones de
          programación.
        </p>
        <p>
          Contacto: <ContactEmail></ContactEmail>
        </p>
      </p>
    </div>
    <div data-language="de">
      <p>
        Wilkommen auf der Webseite von <b>Carlos Pinzón</b>.
      </p>
      <p>
      </p>
      <p>
        Am Ende 2023 habe ich meine Doktorarbeit an der <a href="https://www.polytechnique.edu">École Polytechnique (l'X)</a> in Palaiseau, Frankreich, verteidigt.
        Das Thema war 'Privacy and fairness in machine learning', bereich Mathematic und Informatik.
        In Kolumbien habe ich einen Masterabschluss im Bereich Informatik an der <a href="https://www.javerianacali.edu.co/">Universidad Javeriana Cali</a> in Cali gemacht.
        Da habe ich auch einen Bachelor in Mathematik und einen in Elektrotechnik an der <a href="https://www.escuelaing.edu.co/es/">Escuela Colombiana
          de Ingeniería Julio Garavito</a> in Bogotá gemacht.
      </p>
      {/* <p>
        Mir interesieren allgemein die Bereiche Mathematik, Elektrotechnick und Computerwissenschaften, aber
        insbesondere Algorithmen, Logik und künstliche Intelligenz.
        Ich programiere gerne und ich genieße Programmierwettbewerbe.
      </p> */}
      <p>
        Kontakt: <ContactEmail></ContactEmail>
      </p>
    </div>
    <div data-language="fr">
      <p>
        Bienvenu sur le site web de <b>Carlos Pinzón</b>.
      </p>
      <p>
        Je suis docteur en mathématiques et informatique de l'<a href="https://www.polytechnique.edu">École
          Polytechnique</a> (l'X), Palaiseau, France.
        Ma formation de base consiste en trois diplômes. Je suis mathématicien et ingenieur en électronique, après 9
        et 10 semestres de formation respectivement à l'<a href="https://www.escuelaing.edu.co/es/">École Colombienne
          d'Ingénierie Julio Garavito</a>, Bogotá, Colombie.
        En plus, j'ai un diplôme de master en ingénierie (informatique) de l'<a
          href="https://www.javerianacali.edu.co/">Universidad Javeriana Cali</a>, Cali, Colombie.
      </p>
      <p>
        Mes sujets d'intérêt sont les mathématiques, l'électronique et l'informatique en général, mais plus
        particulièrement les algorithmes, la logique et l'apprentissage automatique. J'aime coder, prouver et j'aime
        programmer des concours.
      </p>
      <p>
        Adresse email: <ContactEmail></ContactEmail>
      </p>
    </div>
  </LanguageSwitch>
  <h2>Curriculum vitae</h2>
  <ul style="margin-top:1em;margin-bottom:1.8em;">
    <li>
      🇺🇸 2025/10:{' '}
      <a download href="https://drive.google.com/file/d/1tPIAwDVY_eTpDB641fayBxBVn2e44y-V/view?usp=sharing">CV in English</a>
    </li>
    <li>
      🇨🇴 2025/10:{' '}
      <a download href="https://drive.google.com/file/d/1DRIQH7hGbrS1JJDf1FT6p8koG__KJDm-/view?usp=sharing">Hoja de vida en Español</a>
    </li>
    <li>
      🇫🇷 2025/10:{' '}
      <a download href="https://drive.google.com/file/d/160SwwseNj1qgJNYIuNTn-8XAPrmkTKOp/view?usp=sharing">CV en Français</a>
    </li>
    <li>
      🇩🇪 2025/10:{' '}
      <a download href="https://drive.google.com/file/d/17wxVvzEmzz2qXpZYIiIq1w3YMOlmAOfj/view?usp=sharing">Lebenslauf auf Deutsch</a>
    </li>
  </ul>
  <hr />
</>;

export default HomeBody;
