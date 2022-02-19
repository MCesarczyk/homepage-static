import { sections } from "../assets/sections";
import "./style.css";

const Main = ({ openModal }) => (
  <main className="main__wrapper">
    <div className="main__buttonsWrapper">
      {sections.map((section, index) =>
        <button
          key={index}
          className={`
                main__button
                ${index === 0 && "main__button--first"}
                ${index === sections.length - 1 && "main__button--last"}
              `}
          onClick={() => openModal(section)}
        >
          {section.name}
        </button>
      )}
    </div>
  </main>
);

export default Main;