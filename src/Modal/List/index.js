import "./style.css";

const List = ({ items }) => (
  <div className="list__wrapper">
    <ul className="list">
      {items?.map(item => (
        <li key={item.id} className="list__item" >
          {item.name}
          <ul className="sublist">
            {item.skills.map((skill, index) => (
              <li key={index}>
                {skill}
              </li> 
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default List;