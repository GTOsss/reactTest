import React from 'react';
import LocalStorage from './LocalStorage';
import ScreenCards from './ScreenCards';

export let numberCard = {
  value: -1
};

export class Board extends React.Component {
  deleteBoard(e) {
    this.props.updateStateBoards(LocalStorage.RemoveBoard(this.props.idN));
    LocalStorage.RemoveElement('cardsBoard' + this.props.idN);
  }
  addCard(e) {
    numberCard.value++;
    LocalStorage.SetStorage('numberCard', numberCard.value);
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

export default Board;