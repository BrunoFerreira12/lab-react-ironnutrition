import {useState} from 'react';
import {Input} from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    //name
    function handleNameInput(event) {
        setName(event.target.value);
    }
    //image
    function handleImageInput(event) {
        setImage(event.target.value);
    }
    //calories
    function handleCaloriesInput(event) {
        setCalories(event.target.value);
    }
    //servings
    function handleServingsInput(event) {
        setServings(event.target.value);
    }
    //Submit
    function handleFormSubmit(event) {
        event.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        };
        props.handleNewFood(newFood);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <Input value={name} type='text' onChange={handleNameInput}></Input>
            
            <label>Image</label>
            <Input value={image} type='text' onChange={handleImageInput}></Input>
            
            <label>Calories</label>
            <Input value={calories} type='number' onChange={handleCaloriesInput}></Input>

            <label>Servings</label>
            <Input value={servings} type='number' onChange={handleServingsInput}></Input>

            <button type='submit'>Create</button>
        </form>
    );
}

export default AddFoodForm;