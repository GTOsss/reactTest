import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

export class ScreenCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', visible: false};
  }

  render() {
    var ReactElements = [];
    var thisBoardId = this.props.boardId;
    for (let i = 0; i < this.props.cardsObj.length; i++) {
      if (this.props.cardsObj[i].idBoard === thisBoardId) {
        ReactElements = this.props.cardsObj[i].cards.map((el, i) => {
          return (
            <Card title={el.title}
                  text={el.text}
                  key={i}
                  index={i}
                  boardId={this.props.boardId}/>

          );}
        );
      }
    }
    return <div>{ReactElements}</div>;
  }
}

function mapStateToProps(state) {
  return {
    numberCard: state.screenCards.numberCard,
    cardsObj: state.screenCards.screensCard
  };
}

function mapDispachToProps(dispatch) {
  return {
    cardsChange: bindActionCreators(actions.cardsChange, dispatch)
  }
}

export default connect(mapStateToProps, mapDispachToProps)(ScreenCards);