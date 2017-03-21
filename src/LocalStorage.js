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

    RemoveBoard: (id) => {
      let boards = LocalStorage.GetStorage('boards');
      for(let i = 0; i < boards.length; i++){
          if (boards != undefined && boards[i].id === id) {
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

