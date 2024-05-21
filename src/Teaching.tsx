//@ts-check
import { styled } from 'jsx-dom';
import { Switch } from './cpComponents';
import { lang$, Translations } from './language';
import { SwitchMore } from './SwitchMore';


const Course = ({ code, names, children }) => {
  const CourseCode = styled.div`font-weight: bold;`;
  const CourseName = styled.div`font-style: italic;`;
  const CourseTag = styled.div`margin: 1.2em 0 1.2em 0;`;
  const name = <CourseName />;
  lang$.subscribe(lang => name.textContent = names[lang.key] || names['en']);
  return <CourseTag><CourseCode>{code}</CourseCode>{name}{children}</CourseTag>;
}

const syllabus = (href) => <Switch key$={lang$.key$}>
  <a href={href} data-case="en">Course syllabus</a>
  <a href={href} data-case="es">Programa del curso</a>
  <a href={href} data-case="de">Inhalt des Unterrichts</a>
  <a href={href} data-case="fr">Contenu du cours</a>
</Switch>

const officialWebsite = (href) => <Switch key$={lang$.key$}>
  <a href={href} data-case="es">Página web oficial</a>
  <a href={href} data-case="en">Official webpage</a>
  <a href={href} data-case="de">Offizielle Webseite</a>
  <a href={href} data-case="fr">Site officiel</a>
</Switch>



const TeachingBody = () => <>
  <Course code={'CSE101 2021-2022'} names={{
    en: "Computer programming, École Polytechnique.",
    es: "Programación de computadores, École Polytechnique.",
    de: "Programmierung, École Polytechnique.",
    fr: "Programmation, École Polytechnique.",
  }}>

    {officialWebsite('https://moodle.polytechnique.fr/course/view.php?id=12833')}
  </Course>

  <Course code={'CSE101 2020-2021'} names={{
    en: "Computer programming, École Polytechnique.",
    es: "Programación de computadores, École Polytechnique.",
    de: "Computerprogrammierung, École Polytechnique.",
    fr: "Programmation, École Polytechnique.",
  }}>

    {officialWebsite('https://moodle.polytechnique.fr/course/view.php?id=10191')}
  </Course>

  <Course code={'AGRA 2019-2'} names={{
    en: "Trees and graphs, Javeriana Cali.",
    fr: "Arbres et graphes, Javeriana Cali.",
    es: "Árboles y grafos, Javeriana Cali.",
    de: "Bäume und Graphen, Javeriana Cali.",
  }}>

    {syllabus('https://drive.google.com/file/d/1vvz4TLB-L3mfENfaXJgwAzzQ897hQUm4/view?usp=sharing')}
    <div>
      <a href="https://www.caph.info/wiki/#agra-2019-2">
        <Translations
          en="Course wiki"
          es="Wiki del curso"
          de="Wiki des Unterrichts"
          fr="Wiki du cours">
        </Translations>
      </a>,
    </div>
    {officialWebsite('http://www.camilorocha.info/teaching/agra/2019-2]')}
  </Course>

  <Course code={'AGRA 2019-1'} names={{
    en: "Trees and graphs, Javeriana Cali.",
    fr: "Arbres et graphes, Javeriana Cali.",
    es: "Árboles y grafos, Javeriana Cali.",
    de: "Bäume und Graphen, Javeriana Cali.",
  }}>
    {syllabus("https://drive.google.com/file/d/192P_Eg9qwKWi67FQFfdRjmUUSej6PheB/view?usp=sharing")}
    <br />
    {officialWebsite('http://www.camilorocha.info/teaching/agra/2019-1]')}
  </Course>
  <Course code={'AGRA 2018-2'} names={{
    en: "Trees and graphs, Javeriana Cali.",
    fr: "Arbres et graphes, Javeriana Cali.",
    es: "Árboles y grafos, Javeriana Cali.",
    de: "Bäume und Graphen, Javeriana Cali.",
  }}>

    {syllabus("https://drive.google.com/file/d/1FPw2bQ61SllP7PHPBZKgz7f7Jq-99XbD/view?usp=sharing")}
    <br />
    {officialWebsite('http://www.camilorocha.info/teaching/agra/2018-2]')}
  </Course>

  <Course code={'PIMO 2018-1'} names={{
    es: "Programación imperativa modular, Escuela Colombiana de Ingeniería.",
    en: "Modular imperative programming, Escuela Colombiana de Ingeniería.",
    de: "Modulare imperative Programmierung, Escuela Colombiana de Ingeniería",
    fr: "Programmation impérative modulaire, Escuela Colombiana de Ingeniería"
  }}>
    {syllabus("./files/home/teaching/2018-1-pimo/contents.pdf")}
    <div>
      <Translations es="Problemas originales para el curso:"
        en="Public problems created by me:"
        de="Probleme für den Unterricht:">
      </Translations>
      <SwitchMore>
        {(() => {
          const problemsPIMO =
            [
              {
                href: "./files/home/teaching/2018-1-pimo/problems/mini-tetris.pdf",
                name: "Mini tetris",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/fiesta.pdf",
                name: "La mega fiesta",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/viaje1.pdf",
                name: "Bonos de viaje 1",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/viaje2.pdf",
                name: "Bonos de viaje 2",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/sum-game.pdf",
                name: "Largest sum game solved",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/3-balanceados.pdf",
                name: "Arreglos 3 balanceados",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/3-medianos.pdf",
                name: "Arreglos 3 medianos",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/banco.pdf",
                name: "Fila en el banco",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/calidad.pdf",
                name: "Estudio de calidad",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/lcqs.pdf",
                name: "Longest Common Quasi Subsequence",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/museo1.pdf",
                name: "Una noche en el museo 1",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/museo2.pdf",
                name: "Una noche en el museo 2",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/museo3.pdf",
                name: "Una noche en el museo 3",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/pq1.pdf",
                name: "Cola de prioridad lenta 1",
              },
              {
                href: "./files/home/teaching/2018-1-pimo/problems/pq2.pdf",
                name: "Cola de prioridad lenta 2",
              },
            ];
          return <ul>{problemsPIMO.map(({ href, name }) => <li><a download href={href}>{name}</a></li>)}</ul>;
        })()}
      </SwitchMore>
    </div>
  </Course>

  <Course code={'ALLI 2018-1'} names={{
    es: "Álgebra lineal, Escuela Colombiana de Ingeniería.",
    en: "Linear algebra, Escuela Colombiana de Ingeniería.",
    de: "Lineare Algebra, Escuela Colombiana de Ingeniería.",
    fr: "Algèbre linéaire, Escuela Colombiana de Ingeniería.",
  }}>

    {syllabus('./files/home/teaching/2018-1-alli/contents.pdf')}
  </Course>

  <Course code={'ALGO 2018-1'} names={{
    es: "Algoritmos, Escuela Colombiana de Ingeniería.",
    en: "Algorithms, Escuela Colombiana de Ingeniería.",
    de: "Algorithmen, Escuela Colombiana de Ingeniería.",
    fr: "Algorithmes, Escuela Colombiana de Ingeniería.",
  }}>

    {syllabus('./files/home/teaching/2018-1-algo/contents.pdf')}
  </Course>
</>


export default TeachingBody;