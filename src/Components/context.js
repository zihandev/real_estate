import React, { Component } from 'react'
import items from './data'



const RoomContext = React.createContext();

 class RoomProvider extends Component {
    
    state = {
        rooms : [],
        selectedOption: null,
        sortedRooms : [], //stored with VALUE & LABEL from multiple option
        minPrice: 0,
        maxPrice : 500,
        price : 500,
        type : null,
        minSize : 1,
        maxSize : 500,
        breakfast : false,
        pets : false
    }
    
    componentDidMount(){
       this.setState({
           rooms : [...items], 
        sortedRooms :[...items]
    })
    }
    
    multipleHandleChange = selectedOption => {
        this.setState({ selectedOption }, this.filterRooms);
      }; 

    handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value 
        if(event.target.type=='checkbox'){
            value= event.target.checked
         }
        this.setState({
            [name] : value 
        }, this.filterRooms)
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
      };
    
    filterRooms = () =>{
         let arrayz = []
        for(let key in this.state.selectedOption){
            arrayz.push(this.state.selectedOption[key].value)          //create an array of just VALUES
        }
        console.log(arrayz)
        let tempRooms = [...this.state.rooms]
       

        //filter based on type
       if(this.state.type){ tempRooms = tempRooms.filter(room=>room.type == this.state.type) }

        //filter based on size 
        tempRooms = tempRooms.filter(room=>room.size>this.state.minSize)
       
       //filter based on price range
        tempRooms= tempRooms.filter(room=>room.price<=this.state.price)

        //filter on breakfast checkbox
        if(this.state.breakfast){
            tempRooms= tempRooms.filter(room=>room.breakfast==true)
        }

        if(this.state.pets){
            tempRooms = tempRooms.filter(room=>room.pets==true)
        }

     //filter on multiple options
        if(this.state.selectedOption){  
       for (let key in tempRooms){  
       const found = arrayz.every(el=>tempRooms[key].extras.includes(el))   //every element of ARRAYZ should be included in extras property
            tempRooms[key].multiple=found;  
        console.log(found)} 
    tempRooms= tempRooms.filter(room=>room.multiple==true)}


    this.setState({sortedRooms: tempRooms })
} 
    
        

    
    
    render() {
        console.log(this.state)
        return (
            <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
         multipleHandleChange : this.multipleHandleChange,
          handleChange: this.handleChange
        }}
      >
        {this.props.children} 
      

      </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomConsumer, RoomProvider };