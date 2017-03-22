import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {ScreenCards} from './Card';
import LocalStorage from './LocalStorage';

let numberBoard = -1, numberCard = -1;

class Board extends React.Component {
  deleteBoard(e) {
    this.props.updateStateBoards(LocalStorage.RemoveBoard(this.props.idN));
    LocalStorage.RemoveElement('cardsBoard' + this.props.idN);
  }

  addCard(e) {
    numberCard++;
    LocalStorage.SetStorage('numberCard', numberCard);
    console.log(this.props);
    let cards = this.refs.ScreenCards.state.cards;
    if (cards === undefined || cards === null) {
      cards = [];
    }
    cards.push({
      boardId: this.props.idN,
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus.'
    });
    LocalStorage.SetStorage('cardsBoard' + this.props.idN, cards);
    this.refs.ScreenCards.setState({cards: cards});
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="board">
          <h4>{this.props.title + ' ' + this.props.idN}</h4>
          <ScreenCards cards={this.props.cards}
                       ref="ScreenCards"
                       boardId={this.props.idN}/>
          <div className="btn-group-vertical form-control board-btn-group">
            <input type="button"
                   value="Add card"
                   className="btn btn-default form-control"
                   ref="BtnAddBoard"
                   onClick={(e) => this.addCard(e)}/>
            <input type="button"
                   value="Delete board"
                   className="btn btn-danger form-control"
                   ref="BtnAddBoard"
                   onClick={(e) => this.deleteBoard(e)}/>
          </div>
        </div>
      </div>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    let boards = LocalStorage.GetStorage('boards');
    if (boards === undefined || boards === null) {
      boards = [];
    }
    this.state = {boards: boards};
    numberBoard = LocalStorage.GetStorage('numberBoard');

    numberCard = LocalStorage.GetStorage('numberCard');
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

class DevelopTools extends React.Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <input type="button"
               className="btn btn-default"
               value="ClearLocalStorage"
               onClick={() => LocalStorage.ClearStorage()}/>
        <input type="button"
               className="btn btn-default"
               value="LogLocalStorage"
               onClick={() => LocalStorage.LogStorage()}/>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(Table), document.getElementById('root'));