import React from 'react';
import LocalStorage from '../local-storage';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class CardEdit extends React.Component {
  saveCard(idBoard, idCard) {
    this.props.cardSave(idBoard, idCard, this.refs.title.value, this.refs.text.value);
    this.props.cardsChange();
    browserHistory.push("/table");
  }

  render() {
    let idBoard = this.props.params.idBoard, idCard = this.props.params.idCard;
    let title, content, isNoneCard = false;

    let cards = LocalStorage.GetStorage('cardsBoard'+idBoard);
    if ((cards !== null && cards !== undefined) && (cards[idCard] !== undefined)) {
      title = cards[idCard].title;
      content= cards[idCard].text;
      } else {
      isNoneCard = true;
    }

    let reactRenderObj;

    if (isNoneCard) {
      reactRenderObj = (
        <h2>Такого таска не существует...</h2>
      );
    } else {
      reactRenderObj = (
        <div>
          <div className={"new text-right col-md-4 col-md-offset-4"} >
            <h3 className="text-center">Таск: {idBoard+'/'+idCard}</h3>
            <input
              type="text"
              defaultValue={title}
              className="input-text-title"
              ref="title"
            />
            <textarea
              className="text-left card-edit-textarea"
              defaultValue={content}
              ref="text"></textarea>
            <div className="btn-group col-md-8 col-md-offset-2">
            <span
              className="glyphicon glyphicon-saved btn btn-success col-md-12 "
              onClick={(e)=> this.saveCard(idBoard, idCard)}>
            </span>
            </div>
          </div>
        </div>
      );
    }

    return reactRenderObj;
  }
}

function mapStateToProps(state) {
  return {
    screensCard: state.screensCard
  };
}

function mapDispachToProps(dispatch) {
  return {
    cardSave: bindActionCreators(actions.cardSave, dispatch),
    cardsChange: bindActionCreators(actions.cardsChange, dispatch)
  }
}

export default connect(mapStateToProps, mapDispachToProps)(CardEdit);
