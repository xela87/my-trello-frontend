import React from 'react';
import List from './components/List/List';
import './board.scss';
import { IList } from './components/interfaces/IList';

interface IBoardState {
  title: string;
  lists: IList[];
}

export default class Board extends React.Component<IBoardState, IBoardState> {
  constructor(props: IBoardState) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  render() {
    const { title, lists } = this.state;
    return (
      <div className="board">
        <h2 className="title">{title}</h2>
        <div className="listsContainer">
          {lists.map((list) => (
            <List title={list.title} cards={list.cards} />
          ))}
          <button className="addListBtn">Add new list</button>
        </div>
      </div>
    );
  }
}
