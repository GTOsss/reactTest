import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {ScreenNews} from './Card';

let news = [
    { title: 'Title 1', text: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos eaque esse explicabo in libero nisi officiis quo saepe voluptatem. Dicta dolorem dolorum in itaque maiores quibusdam sed. Alias atque beatae consequuntur, deleniti dignissimos esse excepturi fugiat inventore magni neque officiis optio possimus quae quidem reiciendis rem sequi ullam unde?'},
    { title: 'Title 2', text: '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facere iste laboriosam laborum nemo non praesentium provident voluptatem voluptates. Ex!'},
    { title: 'Title 3', text: '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, beatae deserunt eum ex excepturi fugiat hic molestiae mollitia, odio pariatur praesentium quae, sunt tempore ut vel. Culpa dolorum expedita molestias, nulla placeat reprehenderit! Assumenda debitis delectus eius facilis fuga non perspiciatis quo sit veritatis! Accusantium, at commodi eaque incidunt laboriosam nesciunt quae quos sunt velit vitae? Accusantium aut dicta exercitationem, laborum mollitia natus quis tenetur? Adipisci, aliquid architecto beatae eum harum ipsum modi necessitatibus nesciunt nihil. A cum cupiditate ex excepturi labore, magni nisi odio recusandae sequi suscipit! Asperiores autem dicta in inventore laboriosam magnam quo quod temporibus voluptate voluptatem.'}
];

class Card extends React.Component {
    render() {
        console.log();
        return (
            <div className="label-title-card">
                <span className="title-card"></span>
                <span className="title-content"></span>
            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="col-md-2">
            </div>
        );
    }
}

class Table extends React.Component {

    EventHandlerClick() {
        let objPushEl = {
            title: 'Title ' + (this.refs.newsRef.state.news.length + 1),
            text: (this.refs.newsRef.state.news.length + 1) + '. texttexttexttexttextte xttexttextt exttext tex ttexttextt exttexttexttextt exttexttexttexttexttex ttexttext texttexttex ttexttextexttext tex ttexttextt exttexttexttextt exttexttexttexttexttex ttexttext texttexttex ttexttext'
        }

        let arrayState = this.refs.newsRef.state.news.slice();
        arrayState.push(objPushEl);
        this.refs.newsRef.setState({news: arrayState});
        console.log(this.refs.newsRef.state.news);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <ScreenNews news={news} ref="newsRef"/>
                </div>
                <input type="button"
                       value="add object"
                       className="btn btn-primary"
                       ref="BtnAddBoard"
                       onClick={() => this.EventHandlerClick()}/>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(Table), document.getElementById('root'));