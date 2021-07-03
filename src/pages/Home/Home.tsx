import React from 'react';
import './home.scss';
import { IBoard } from '../Board/components/interfaces/IBoard';

interface IBoardsState {
  boards: IBoard[];
}

export default class Home extends React.Component<IBoardsState, IBoardsState> {
  constructor(props: IBoardsState) {
    super(props);
    this.state = {
      boards: [
        { id: 1, title: 'покупки' },
        { id: 2, title: 'подготовка к свадьбе' },
        { id: 3, title: 'разработка интернет-магазина' },
        { id: 4, title: 'курс по продвижению в соцсетях' },
      ],
    };
  }

  render() {
    const { boards } = this.state;
    return (
      <div className="home">
        <h1 className="title">Мои доски</h1>
        <div className="boardsContainer">
          {boards.map((board) => (
            <div className="boardLink">{board.title} </div>
          ))}
          <button className="addNewBoardBtn">Add new board</button>
        </div>
      </div>
    );
  }
}
