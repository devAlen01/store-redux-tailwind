const initState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  details: JSON.parse(localStorage.getItem("details")) || {},
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  search: [],
  sale: 0,
  priceSale: 0,
  rates: 1,
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      let newProduct = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(newProduct));
      return { ...state, product: newProduct };

    case "DELETE":
      let delProduct = [
        ...state.product.filter((item) => item.id !== action.payload),
      ];
      localStorage.setItem("product", JSON.stringify(delProduct));
      return { ...state, product: delProduct };

    case "DETAILS":
      let detailsProduct = action.payload;
      localStorage.setItem("details", JSON.stringify(detailsProduct));
      return { ...state, details: detailsProduct };

    case "ADD_TO_CART":
      action.payload.quantity = 1;
      let addToCart = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(addToCart));
      return { ...state, basket: addToCart };

    case "INCREMENT":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                quantity: el.quantity > 1 ? el.quantity - 1 : (el.quantity = 1),
              }
            : el
        ),
      };

    case "REMOVE_FROM_CART":
      let delProductBasket = [
        ...state.basket.filter((item) => item.id !== action.payload),
      ];
      localStorage.setItem("basket", JSON.stringify(delProductBasket));
      return { ...state, basket: delProductBasket };

    case "ADD_TO_FAVORITE":
      let findFav = state.favorite.find((el) => el.id === action.payload.id);

      if (findFav) {
        let delProductFav = [
          ...state.favorite.filter((item) => item.id !== action.payload.id),
        ];
        localStorage.setItem("favorite", JSON.stringify(delProductFav));

        return { ...state, favorite: delProductFav };
      } else {
        let addToFavorite = [...state.favorite, action.payload];
        localStorage.setItem("favorite", JSON.stringify(addToFavorite));
        return { ...state, favorite: addToFavorite };
      }

    case "CHANGE_PRICE":
      return { ...state, priceSale: +action.payload };
    case "CHANGE_SALE":
      return { ...state, sale: +action.payload };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        search: state.product.filter((el) =>
          el.name.toLowerCase().includes(action.payload.toLowerCase())
            ? el
            : null
        ),
      };

    case "CHANGE_RATES":
      if (action.payload === "rub") {
        return { ...state, rates: 90.44 };
      } else if (action.payload === "usd") {
        return { ...state, rates: 1 };
      } else if (action.payload === "som") {
        return { ...state, rates: 87.9 };
      }

    default:
      return state;
  }
};
