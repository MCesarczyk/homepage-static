import "./style.css";

const List = ({ items }) => (
  <div className="list__wrapper">
    <ul className="list">
      {items?.map(item => (
        <li key={item.id} className="list__item" >
          {item.name}
          {item?.details && <ul className="sublist">
            {item.details.map((detail, index) => (
              <li key={index}>
                {detail}
              </li> 
            ))}
          </ul>}
        </li>
      ))}
    </ul>
  </div>
);

export default List;