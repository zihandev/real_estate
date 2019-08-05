import React,{Component} from 'react';
import Select from 'react-select';


import { useContext } from "react";
import { RoomContext } from "./context";
import { RoomConsumer } from "./context";
 
const options = [
  { value: "Plush pillows and breathable bed linens", label:  "Plush pillows and breathable bed linens"},
  { value: 'Soft, oversized bath towels', label:  "Soft, oversized bath towels" },
  { value: 'Full-sized, pH-balanced toiletries', label: "Full-sized, pH-balanced toiletries" },
  { value: 'Complimentary refreshments', label:  "Complimentary refreshments" },
  { value: 'Internet', label:  "Internet" },
  { value: 'Comfortable beds', label:  "Comfortable beds" },
  { value: 'Laptop Available', label:  "Laptop Available" },
  { value: 'Automated Cooling', label:  "Automated Cooling" }
];
 
 class MultipleSelect extends Component {

   render (){
    
    return ( 
        <div style={{padding:'10px 80px', zIndex : '100'}}>
       <RoomContext.Consumer>
     {value=> <Select isMulti={true} isSearchable placeholder='Select Features'
        value={value.selectedOption}
        onChange={value.multipleHandleChange}
        options={options}
    /> }
      </RoomContext.Consumer>
      </div>
     
    )};
  } 

  export default MultipleSelect;




//   <RoomConsumer>
//   {value => {
//     return console.log(value)  } }
// </RoomConsumer>