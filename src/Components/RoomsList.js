import React from "react";
import Room from "./Room";
import classes from '../CSS/homes.module.scss';


const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search" style={{textAlign:'center', marginTop:'30px'}}>
        <h3>Unfortunately No Rooms Matched Your Search Parameters</h3>
      </div>
    );
  }
  return (<> 
    <div className={classes.container}>
    
        <div style={{marginBottom:'5rem'}} className={classes.homes}>
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </div></>
  );
};

export default RoomsList;