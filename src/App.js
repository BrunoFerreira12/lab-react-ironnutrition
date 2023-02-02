import {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foodsList ,setFoodsList] = useState(foods);
  const [filteredFoodsList, setfilteredFoodsList] = useState(foods);

  function handleNewFood(newFood) {
    setFoodsList((previousFood) => {
      const newFoodList = [newFood, ...previousFood];
      return newFoodList;
    });
  }

  function handleDeleteFood(foodName) {
    const updateFoodsList = filteredFoodsList.filter((food)=> {
      return food.name !== foodName;
    });
    setfilteredFoodsList(updateFoodsList);
  }

  return(
    <div className='App'>
    <AddFoodForm handleNewFood={handleNewFood}></AddFoodForm>
      
      <h2>Food List</h2>
      {filteredFoodsList.map((food) => {
        return <FoodBox food = {food} handleDeleteFood={handleDeleteFood} ></FoodBox>
      })}
    </div>
  );
}

export default App;