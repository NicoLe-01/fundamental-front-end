import "../component/food-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const foodListElement = document.querySelector("food-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFood(searchElement.value);
      console.log(result);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    foodListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
