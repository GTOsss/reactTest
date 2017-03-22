import React from 'react';
import Board, { numberCard } from './Board';
import LocalStorage from './LocalStorage';
import DevelopTools from './DevelopTools';

let numberBoard = -1;

export class Table extends React.Component {
  constructor(props) {
    super(props);
    let boards = LocalStorage.GetStorage('boards');
    if (boards === undefined || boards === null) {
      boards = [];
    }
    this.state = {boards: boards};
    numberBoard = LocalStorage.GetStorage('numberBoard');

    numberCard.value = LocalStorage.GetStorage('numberCard');
  }

  componentWillUpdate() {
    LocalStorage.SetStorage('numberBoard', numberBoard);
  }

  addBoard() {
    numberBoard++;
    LocalStorage.AddBoard(numberBoard);
    this.setState((prevState) => {
      prevState.boards.push({id: numberBoard});
    });
  }

  updateStateBoards(boards) {
    this.setState({boards: boards});
  }

  render() {
    let boardReactElements = this.state.boards.map((el) => {
      let cards = LocalStorage.GetStorage('cardsBoard' + el.id);
      if (cards === null || cards === undefined) {
        cards = [];
      }
      return (
        <Board updateStateBoards={(boards) => this.updateStateBoards(boards)}
               key={el.id}
               idN={el.id}
               cards={cards}
               title="Title"/>
      );
    });

    return (
      <div className="row">
        {boardReactElements}
        <input type="button"
               value="Add Board"
               className="btn btn-default btn-add-board"
               onClick={() => this.addBoard()}
        />
        <DevelopTools />
      </div>
    );
  }
}

export default Table;