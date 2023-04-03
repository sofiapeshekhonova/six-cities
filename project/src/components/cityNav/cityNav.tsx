import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type cityProps = {
  city: string;
  handleChangeCity: (city: string) => void;
};

function CityNav({ city, handleChangeCity }: cityProps): JSX.Element {

  console.log('cityNav')
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    handleChangeCity(city);
  };

  return (
    <li className="locations__item" >
      <Link to={'/'} className="locations__item-link tabs__item" onClick={handleClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityNav;
