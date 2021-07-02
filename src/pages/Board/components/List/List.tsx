import React from 'react';
import { ICard } from '../interfaces/ICard';
import './list.scss';

interface IListProps {
  title: string;
  cards: ICard[];
}

export default function List(props: IListProps): JSX.Element {
  const { title, cards } = props;
  return (
    <div className="mainList">
      <h2 className="listTitle">{title}</h2>
      <p>
        {cards.map((card) => (
          <li>{card.title}</li>
        ))}
      </p>
    </div>
  );
}
