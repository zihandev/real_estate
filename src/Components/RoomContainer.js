import React from 'react'

import {RoomContext} from './context'
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
import classes from '../CSS/homes.module.scss';

const RoomContainer = () => {
    return (
        <RoomContext.Consumer>
            {value=>{
                const {rooms, sortedRooms, images} = value;
                return (
                   <div>
                        <h3 className={classes.head}>SEARCH Homes</h3>
                    <RoomsFilter rooms={rooms} />
                    <RoomsList rooms={sortedRooms} />
                    </div>
                )
                }}
            
        </RoomContext.Consumer>
    )
}

export default RoomContainer
