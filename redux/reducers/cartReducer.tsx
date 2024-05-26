interface Item {
  title: string;
}

interface State {
  selectedItems: {
    items: Item[];
    restaurantName: string;
  };
}

interface Action {
  type: string;
  payload: {
    checkboxValue: boolean;
    title: string;
    restaurantName: string;
  };
}

let defaultState: State = {
  selectedItems: {items: [], restaurantName: ''},
};

let cartReducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState: State = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD TO CART');

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log('REMOVE FROM CART');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.title !== action.payload.title,
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log(newState, '👉');
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
