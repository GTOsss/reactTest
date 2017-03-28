import React from 'react';
import LocalStorage from '../local-storage';
import ScreenCards from './screen-cards';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

export let numberCard = {
  value: -1
};

class Board extends React.Component {
  deleteBoard(e) {
    this.props.boardsChange(LocalStorage.RemoveBoard(this.props.idN));
  }

  addCard(e) {
    numberCard.value++;

    LocalStorage.SetStorage('numberCard', numberCard.value);
    let newCards = [];
    let boardId = this.props.idN;
    this.props.cardsObj.forEach((el) => {
      if(el.idBoard === boardId) {
        newCards = el.cards;
      }
    });

    newCards.push({
      boardId: this.props.idN,
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, distinctio dolor hic laboriosam obcaecati officia. Aut commodi corporis minus.'
    });
    LocalStorage.SetStorage('cardsBoard' + this.props.idN, newCards);
    this.props.cardsChange(this.props.idN);
  }

  render()  {
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

function mapStateToProps(state) {
  return {
    title: state.board.title,
    cardsObj: state.screenCards.screensCard
  };
}

function mapDispachToProps(dispach) {
  return {
    boardsChange: bindActionCreators(actions.boardsChange, dispach),
    cardsChange: bindActionCreators(actions.cardsChange, dispach)
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Board);


