import React from 'react';
import Card from './Card';

export class ScreenCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', visible: false, cards: this.props.cards};
  }

  render() {
    let ReactElements = this.state.cards.map((el, i) => {
      return (
        <Card title={el.title}
              text={el.text}
              key={i}
              index={i}
              boardId={this.props.boardId}
              updateCards={(cards)=>this.setState({cards: cards})}/>
      );}
    );
    return <div>{ReactElements}</div>;
  }
}

export default ScreenCards;