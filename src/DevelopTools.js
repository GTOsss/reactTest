import React from 'react';
import LocalStorage from './LocalStorage'

export class DevelopTools extends React.Component {
  render() {
    return (
      <div className="btn-group-vertical">
        <input type="button"
               className="btn btn-default"
               value="ClearLocalStorage"
               onClick={() => LocalStorage.ClearStorage()}/>
        <input type="button"
               className="btn btn-default"
               value="LogLocalStorage"
               onClick={() => LocalStorage.LogStorage()}/>
      </div>
    );
  }
}

export default DevelopTools;