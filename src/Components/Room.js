import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from "../Images/img1.jpg";
import { FaHeart,  FaMapMarkerAlt, FaUsers, FaDollarSign, FaRuler } from 'react-icons/fa';
import classes from '../CSS/homes.module.scss';

const Room = ({room}) => {
   
   const {name, slug,images, price, capacity, type, location} = room;
    return (
       
        <div className={classes.home}>
                <img src={images[0]||defaultImg} alt="House 1" className={classes.home__img}/>
                <FaHeart className={classes.home__list}/>
                <h5 className={classes.home__namess}>{name}</h5>
                <div className={classes.home__location}>
                <FaMapMarkerAlt className={classes.home__icon}/>
                <p>{location}</p>
                </div>
                <div className={classes.home__rooms}>
                <FaUsers className={classes.home__icon}/>
                <p>{capacity} persons</p>
                </div>
                <div className={classes.home__area}>
                <FaRuler className={classes.home__icon}/>
                <p>{type}</p>
                </div>
                <div className={classes.home__price}>
                <FaDollarSign className={classes.home__icon}/>
                <p>{price}</p>
                </div>
               <button className={`${classes.btn} ${classes.home__btn}`}> <Link className={classes.link} to={`/rooms/${slug}`}>View Details</Link> </button>
        </div>
       
       
    )
}

export default Room;
