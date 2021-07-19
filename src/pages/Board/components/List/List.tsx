import React from 'react';
import { ICard } from '../interfaces/ICard';
import './List.scss';
import Card from '../Card/Card';

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
          <Card id={card.id} title={card.title} />
        ))}
      </p>
      <button className="addCardBtn">Add new card</button>
    </div>
  );
}
