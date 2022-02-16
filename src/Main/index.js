import { sections } from "../assets/content";
import "./style.css";

const Main = () => (
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
        >
          {section}
        </button>
      )}
    </div>
  </main>
);

export default Main;