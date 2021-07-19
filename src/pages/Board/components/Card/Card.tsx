import React from 'react';
import { ICard } from '../interfaces/ICard';
import './Card.scss';

export default function Card({ title }: ICard): JSX.Element {
  return (
    <div className="mainCard">
      <li className="carItem">{title}</li>
    </div>
  );
}
