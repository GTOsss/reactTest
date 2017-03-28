import React from 'react';
import LocalStorage from '../local-storage';

export class DevelopTools extends React.Component {
  TestRedux() {
    this.props.setValue('test');
  }

  render() {
    const { title } = this.props;

    return (
      <div className="btn-group-vertical">
        <h3>{title}</h3>
        <input type="button"
               className="btn btn-default"
               value="ClearLocalStorage"
               onClick={() => LocalStorage.ClearStorage()}/>
        <input type="button"
               className="btn btn-default"
               value="LogLocalStorage"
               onClick={() => LocalStorage.LogStorage()}/>
        <input type="button"
               className="btn btn-default"
               value="TestRedux"
               onClick={() => this.TestRedux()}/>
      </div>
    );
  }
}

