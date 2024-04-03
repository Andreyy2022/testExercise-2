import Drawing from './components/Drawing';
import './App.css';

const nameSkills = [
  {
    name: "Финансовый аналитик",
    mainSkills: ["Excel", "SQL", "VBA", "1С"],
    otherSkills: ["Power BI", "Python"],
  },
  {
    name: "Предприниматель",
    mainSkills: ["1C", "Excel", "Power BI"],
    otherSkills: [
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
  },
  {
    name: "Продуктовый дизайнер",
    mainSkills: [
      "Figma",
      "Sketch",
      "Illustrator",
      "Photoshop",
      "Principle",
      "Tilda",
    ],
    otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
  },
  {
    name: "Менеджер проекта",
    mainSkills: [
      "Visio",
      "1C",
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
    otherSkills: ["Figma", "Sketch", "Shopify"],
  },
  {
    name: "Финансовый менеджер",
    mainSkills: ["1C", "Excel", "Power BI"],
    otherSkills: ["BPMN"],
  },
  {
    name: "Руководитель финансового департамента компании",
    mainSkills: ["Sketch", "Figma"],
    otherSkills: ["Shopify", "HQL"],
  },

  {
    name: "Продуктовый аналитик",
    mainSkills: [
      "Google Analytics",
      "Яндекс.Метрика",
      "SQL",
      "Power BI",
      "Python",
      "Excel",
    ],
    otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
  },

  {
    name: "Руководитель финансового продукта",
    mainSkills: ["Visio"],
    otherSkills: ["Python"],
  },
  {
    name: "Менеджер по маркетингу",
    mainSkills: [
      "Google Analytics",
      "Яндекс.Метрика",
      "Google Ads",
      "Ahrefs",
      "Главред",
      "My Target",
    ],
    otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
  },

  {
    name: "Менеджер по цифровой трансформации",
    mainSkills: [
      "Visio",
      "Google Analytics",
      "Яндекс.Метрика",
      "Python",
      "SQL",
      "Tilda",
    ],
    otherSkills: ["Figma", "Sketch", "Shopify"],
  },
]

function App() {
  return (
    <div>
      <Drawing nameSkills={nameSkills} />
    </div>
  );
}

export default App;
