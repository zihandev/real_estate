import React from 'react'
import { useContext } from "react";
import { RoomContext } from './context';
import MultipleSelect from './MultipleSelect';
import classes from '../CSS/filter.module.scss';
import range from '../CSS/range.module.css';


//rooms are only to get UNIQUE TYPE and UNIQUE CAPACITY
const RoomsFilter = ({rooms}) => {

   const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))];
   }

   const style={
       marginBottom : '10px'
   }

  let type;
  
    return (<div className='container' style={{border:'1.5px solid  brown', minHeight:'20rem'}}>
       <RoomContext.Consumer>
           {value=> {
return (
    <React.Fragment>
      <MultipleSelect/>
      <div className={classes.flextwo}>
    <div className={classes.ranger}>
      <label style={{marginTop:'13px', marginLeft:'30px', fontSize:'1.5rem', marginRight:'24px'}} htmlFor='price'>Room Price: ${value.price}</label>
      <input className={range} type = 'range' id='price' name='price' min={value.minPrice} max={value.maxPrice} onChange={value.handleChange} value={value.price}/>
    </div>


    <div style={{zIndex:'-100'}}>
          <label style={{fontSize:'1.5rem'}} htmlFor="minSize">Room Min Size  </label>
          <span    style={{marginRight:'25px'}} className={classes.input}>
                  <input
                    type="number"
                    name="minSize"
                    value={value.minSize}
                    onChange={value.handleChange}
                    className="size-input"
                  />
            </span>


               <label style={{fontSize:'1.5rem'}} htmlFor="price">Room Max Size  </label>
               <span  style={{marginRight:'25px'}} className={classes.input}>
                      <input
                        type="number"
                        name="maxSize"
                        value={value.maxSize}
                        onChange={value.handleChange}
                        className="size-input"/>
                </span> 
                </div></div>

  
    <p style={{visibility:'hidden', padding : '-50px', marginTop : '-35px'}}>{ type= getUnique(value.rooms, 'type') }</p>
    

    
    <div className={classes.flexy}>
    <div style={{marginTop: '30px'}}><label style={{marginTop:'13px', marginLeft:'30px', fontSize:'1.5rem', marginRight:'24px'}} htmlFor='price'>Room Type</label>
          <select
         style={{borderRadius:'30px',  border: '1.5px solid #54483A',  boxShadow:'0 1px 0 1px rgba(0,0,0,.04)',  backgroundColor: '#fff', padding:'0.5rem'}}
            name="type"
            id="type"
            onChange={value.handleChange}
            className="form-control"
            // value={value.type}
          >
            {type.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
          </select></div>


         


<div className={classes.form__group}>
          
         
            <div className={classes.form__radiogroup}>
                                        <input type="checkbox" className={classes.form__radioinput}  checked={value.breakfast}   onChange={value.handleChange} id="breakfast" name="breakfast"/>
                                        <label for="breakfast" className={classes.form__radiolabel}>
                                            <span style={{marginTop:'-.5rem'}} className={classes.form__radiobutton}></span>
                                            Breakfast
                                        </label>
                                    </div>


          
        
                                    <div className={classes.form__radiogroup}>
                                        <input type="checkbox" className={classes.form__radioinput}  checked={value.pets}   onChange={value.handleChange} id="pets" name="pets"/>
                                        <label for="pets" className={classes.form__radiolabel}>
                                            <span style={{marginTop:'-.5rem'}} className={classes.form__radiobutton}></span>
                                           Pets
                                        </label>
                                    </div>

       </div></div>

    </React.Fragment>
)}
           }
       </RoomContext.Consumer>
      
        </div>
    )
}

export default RoomsFilter
