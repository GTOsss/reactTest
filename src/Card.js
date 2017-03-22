import React from 'react';
import LocalStorage from './LocalStorage';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text, title: this.props.title, visible: false, edit: false};
    }

    deleteCard(e) {
        this.props.updateCards(LocalStorage.RemoveCard('cardsBoard'+this.props.boardId, this.props.index));
    }

    editCard(e) {
        this.setState({edit: true});
    }

    saveCard(e) {
        LocalStorage.UpdateCard('cardsBoard'+this.props.boardId, this.props.index, this.refs.title.value, this.refs.text.value)
        this.setState({edit: false, title: this.refs.title.value, text: this.refs.text.value});
    }

    render() {

        return (
            <div>
                <div className={"new text-right " + (this.state.edit ? "none" : "")} >
                    <div className="btn-group ">
                        <span
                            className={"glyphicon btn btn-default " + (this.state.visible ? "glyphicon-arrow-up" : "glyphicon-arrow-down")}
                            onClick={()=> this.setState({visible: !this.state.visible})}>
                        </span>
                        <span
                            className="glyphicon glyphicon-pencil btn btn-primary"
                            onClick={(e)=> this.editCard(e)}>
                        </span>
                        <span
                            className="glyphicon glyphicon-remove btn btn-danger"
                            onClick={(e)=> this.deleteCard(e)}>
                        </span>
                    </div>
                    <h3 onClick={()=> this.setState({visible: !this.state.visible, text: this.state.text})}>{this.state.title}</h3>
                    <p className={"text-left " + (this.state.visible ? "card-p-all" : "card-p")}>{this.state.visible ? this.state.text : this.state.text.substr(0, 100) + ' ...'}</p>
                </div>
                <div className={"new text-right " + (this.state.edit ? "" : "none")} >
                    <div className="btn-group ">
                    <span
                        className="glyphicon glyphicon-saved btn btn-success"
                        onClick={(e)=> this.saveCard(e)}>
                    </span>
                    </div>
                    <input
                        type="text"
                        defaultValue={this.props.title}
                        className="input-text-title"
                        ref="title"
                        />
                    <textarea
                        className="text-left card-edit-textarea"
                        defaultValue={this.state.text}
                        ref="text"></textarea>
                </div>
            </div>
        );
    }
}

export default Card;
