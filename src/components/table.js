import React from 'react';
import Board, { numberCard } from './board';
import LocalStorage from '../local-storage';
import { DevelopTools } from './develop-tools';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

let numberBoard = -1;

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {boards: this.props.boards};
    numberBoard = this.props.numberBoard;
    numberCard.value = LocalStorage.GetStorage('numberCard');
  }

  componentWillUpdate() {
    LocalStorage.SetStorage('numberBoard', numberBoard);
  }

  addBoard() {
    numberBoard++;
    LocalStorage.AddBoard(numberBoard);
    let boards = [...this.props.boards];
    boards.push({id: numberBoard});
    this.props.boardsChange(boards, numberBoard);
  }

  render() {
    let boardReactElements = this.props.boards.map((el) => {
      // let cards = LocalStorage.GetStorage('cardsBoard' + el.id);
      // if (cards === null || cards === undefined) {
      //   cards = [];
      // }
      return (
        <Board key={el.id}
               idN={el.id}
               // cards={cards}
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

function mapStateToProps(state) {
  return {
    boards: state.table.boards,
    numberBoard: state.table.numberBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boardsChange: bindActionCreators(actions.boardsChange, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);