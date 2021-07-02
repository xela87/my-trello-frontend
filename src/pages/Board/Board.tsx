import React from 'react';

interface IBoardState {
  title: string;
  lists: { id: number; title: string; cards: { id: number; title: string }[] }[];
}

export interface ICard {
  id: number;
  title: string;
}

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
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
      <div>
        <h1>{title}</h1>
        <div>
          {lists.map((list) => (
            <div>
              <div>{list.id}</div>
              <div>{list.title}</div>
              <div>
                {list.cards.map((card) => (
                  <div>
                    <div>{card.id}</div>
                    <div>{card.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
