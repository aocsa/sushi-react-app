import store from './store';


export const nextAction = () => {

    let selectedFood = store.getState().selectedFood + 1
    if (selectedFood == store.getState().dishes.length)
        selectedFood = 0

    store.setState({
        selectedFood: selectedFood
    })
}

export const previewAction = () => {
        
           let selectedFood = store.getState().selectedFood - 1
           if (selectedFood <= 0 )
              selectedFood = store.getState().dishes.length -1
        
           store.setState({
              selectedFood : selectedFood
           })
    }
