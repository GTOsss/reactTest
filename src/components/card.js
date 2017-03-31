import React from 'react';
import LocalStorage from '../local-storage';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text, title: this.props.title, visible: false, edit: false};
    }

    deleteCard(e) {
      LocalStorage.RemoveCard('cardsBoard'+this.props.boardId, this.props.index);
      this.props.cardsChange(this.props.boardId);
    }

    editCard(e) {
        browserHistory.push('edit/'+this.props.boardId+'/'+this.props.index);
    }

    render() {

        return (
            <div>
                <div className={"new text-right "} >
                    <div className="btn-group ">
                        <span
                            className={"glyphicon btn btn-default " + (this.state.visible ? "glyphicon-arrow-up" : "glyphicon-arrow-down")}
                            onClick={()=> this.setState({visible: !this.state.visible})}>
                        </span>
                         <span
                            className="glyphicon glyphicon-pencil btn btn-primary"
                            onClick={(e)=> this.editCard()}>
                        </span>
                        <span
                            className="glyphicon glyphicon-remove btn btn-danger"
                            onClick={(e)=> this.deleteCard(e)}>
                        </span>
                    </div>
                    <h3 onClick={()=> this.setState({visible: !this.state.visible, text: this.state.text})}>{this.state.title}</h3>
                    <p className={"text-left " + (this.state.visible ? "card-p-all" : "card-p")}>{this.state.visible ? this.state.text : this.state.text.substr(0, 100) + ' ...'}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

function mapDispachToProps(dispach) {
    return {
        cardsChange: bindActionCreators(actions.cardsChange, dispach)
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Card);
