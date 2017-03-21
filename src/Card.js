import React from 'react';
import LocalStorage from './LocalStorage';

export class ScreenCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', visible: false, cards: this.props.cards};
    }

    componentWillUpdate() {
        LocalStorage.SetStorage('cardsBoard' + this.props.boardId, this.state.cards);
    }

    render() {
        let ReactElements = this.state.cards.map((el, i) => {
            return (
                <Card title={el.title} text={el.text} key={i} />
            );}
        );
        return <div>{ReactElements}</div>;
    }
}

export class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: this.props.text, visible: false};
    }

    render() {
        return (
            <div className="new text-right">
                <div className="btn-group ">
                    <span
                        className={"glyphicon btn btn-default " + (this.state.visible ? "glyphicon-arrow-up" : "glyphicon-arrow-down")}
                        onClick={()=> this.setState({visible: !this.state.visible})}>
                    </span>
                    <span className="glyphicon glyphicon-pencil btn btn-primary"></span>
                    <span className="glyphicon glyphicon-remove btn btn-danger"></span>
                </div>
                <h3 onClick={()=> this.setState({visible: !this.state.visible, text: this.props.text})}>{this.props.title}</h3>
                <p className={"text-left " + (this.state.visible ? "card-p-all" : "card-p")}>{this.state.visible ? this.state.text : this.state.text.substr(0, 100) + ' ...'}</p>
            </div>
        );
    }

}

