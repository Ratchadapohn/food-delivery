import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [itemCart, setItemCart] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      const queries = [
        "pasta",
        "pizza",
        "cake",
        "noodle",
        "soup",
        "salad",
        "chocolate",
        "curry",
      ];
      try {
        const allMeals = [];
        for (const query of queries) {
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
          const response = await axios.get(url);
          const meals = response.data.meals;

          if (meals) {
            allMeals.push(
              ...meals.map((meal) => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb,
                category: query,
                description: meal.strInstructions,
                price: Math.floor(Math.random() * 100),
              }))
            );
          }
        }
        setFoodList(allMeals);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  const addCart = (itemID) => {
    if (!itemCart[itemID]) {
      setItemCart((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      setItemCart((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const removeCart = (itemID) => {
    setItemCart((prev) => {
      if (prev[itemID] > 1) {
        return { ...prev, [itemID]: prev[itemID] - 1 };
      } else {
        const newCart = { ...prev };
        delete newCart[itemID];
        return newCart;
      }
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in itemCart) {
      if (itemCart[item] > 0) {
        let info = uniqueFoodList.find((a) => a.id === item);
        totalAmount += info.price * itemCart[item];
      }
    }
    return totalAmount;
  };

  const uniqueFoodList = Array.from(
    new Set(foodList.map((item) => item.id))
  ).map((id) => {
    return foodList.find((item) => item.id === id);
  });

  const contextValue = {
    foodList: uniqueFoodList,
    itemCart,
    setItemCart,
    addCart,
    removeCart,
    getTotalCartAmount,
    loading,
    error,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
