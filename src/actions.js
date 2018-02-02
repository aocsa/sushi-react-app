import store from './store';

export const addDishes = (index) => {
    let newList = [...store.getState().shopDishes]
    let original = [...store.getState().dishes]
    for(let i in newList){
        if(newList[i].id==index){
            newList[i].count+=1;
            store.setState({
                shopDishes: newList
             });
             return;
        }
    }
    newList.push({
        id: index,
        image: original[index].image,
        name: original[index].name,
        price: original[index].price,
        count: original[index].count
    });
    store.setState({
        shopDishes: newList
     });
}

export const removeDish = (index) =>{
    const oldList = store.getState().shopDishes.filter((item, idx) => idx !== index);

    store.setState({
        shopDishes: oldList
    })
    console.log(oldList);
}
    
export const deleteAll = () => {
    console.log('borrame')
	 store.setState({
		shopDishes: []
	})
}

export const moveSlides = (index) =>{
    console.log(index)
    store.setState({
        selectedFood: index
    })
}