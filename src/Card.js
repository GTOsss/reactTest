import React from 'react';

export class ScreenNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', visible: false, news: this.props.news};
    }

    render() {
        let ReactElements = this.state.news.map((el, i) => {
        this.state.text = el.text;
                return (
                    <div className="new" key={i}>
                        <h1 onClick={()=> this.setState({visible: !this.state.visible})}>{el.title}</h1>
                        <p>{this.state.visible ? this.state.text : this.state.text.substr(0, 100) + ' ...'}</p>
                        <a href="#"
                           className={"news-readmore " + (!this.state.visible ? '' : 'none')}
                           onClick={()=> this.setState({visible: !this.state.visible})}>More...</a>
                    </div>
                );}
        );

        return <div>{ReactElements}</div>;
    }
}

export class New extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    }
}

