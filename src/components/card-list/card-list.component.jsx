import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {
      monsters.map(monster => {
        const { id, name, email } = monster;
        return (
          <Card id={ id } name={ name } email={ email } key={ id } />
        )
      })
    }
  </div>
);

export default CardList;