export let LocalStorage = {
    SetStorage: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },

    GetStorage: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },

    ClearStorage: () => {
        localStorage.clear();
    },

    LogStorage: () => {
        console.log(localStorage);
    },

    RemoveElement: (key) => {
        localStorage.removeItem(key);
    },

    RemoveCard: (key, index) => {
        let cards = LocalStorage.GetStorage(key);
        cards.splice(index, 1);
        LocalStorage.SetStorage(key, cards);
        return cards;
    },

    UpdateCard: (key, index, title, text) => {
        let cards = LocalStorage.GetStorage(key);
        cards[index].title = title;
        cards[index].text = text;
        LocalStorage.SetStorage(key, cards);
    },

    RemoveBoard: (id) => {
      let boards = LocalStorage.GetStorage('boards');
      LocalStorage.RemoveElement('cardsBoard' + id);
      for(let i = 0; i < boards.length; i++){
          if (boards !== undefined && boards[i].id === id) {
              boards.splice(i, 1);
              LocalStorage.SetStorage('boards', boards);
              return boards;
          }
      }

    },

    AddBoard: (id) => {
        let boards = LocalStorage.GetStorage('boards');
        if (boards === undefined || boards === null) {
            boards = [];
        }
        boards.push({id: id, title: '...', text: '...'});
        LocalStorage.SetStorage('boards', boards);
    }
}

export default LocalStorage
