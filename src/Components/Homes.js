import React from 'react'
import classes from '../CSS/homes.module.scss';
import home1 from '../Images/home1.jpg'
import home2 from '../Images/home2.jpg'
import home3 from '../Images/home3.jpg'
import { FaMapMarkerAlt, FaDollarSign, FaRuler, FaUsers, FaHeart} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Homes = () => {
    const slug =  ["LeisureInn", "TranquilTavern", "SereneStays"]
    return (  <><h3 className={classes.head}>Featured Homes</h3>
    <div className={classes.container}>
       
        <div className={classes.homes}>
              <div className={classes.home}>
                <img src={home1} alt="House 1" className={classes.home__img}/>
                <FaHeart className={classes.home__list}/>
                <h5 className={classes.home__name}>Leisure Inn</h5>
                <div className={classes.home__location}>
                   <FaMapMarkerAlt className={classes.home__icon}/>
                    <p>USA</p>
                </div>
                <div className={classes.home__rooms}>
                    <FaUsers className={classes.home__icon}/>
                    <p>5 rooms</p>
                </div>
                <div className={classes.home__area}>
                    <FaRuler className={classes.home__icon}/>
                    <p>325 m<sup>2</sup></p>
                </div>
                <div className={classes.home__price}>
                   <FaDollarSign className={classes.home__icon}/>
                    <p>$1,200,000</p>
                </div>
                <button className={`${classes.btn} ${classes.home__btn}`}> <Link className={classes.link} to={`/rooms/${slug[0]}`}>View Details</Link> </button>
            </div>
            
            <div className={classes.home}>
            <img src={home2} alt="House 1" className={classes.home__img}/>
            <FaHeart className={classes.home__list}/>
                <h5 className={classes.home__name}>Tranquil Tavern</h5>
                <div className={classes.home__location}>
                     <FaMapMarkerAlt className={classes.home__icon}/>
                    <p>USA</p>
                </div>
                <div className={classes.home__rooms}>
                    <FaUsers className={classes.home__icon}/>
                    <p>5 rooms</p>
                </div>
                <div className={classes.home__area}>
                    <FaRuler className={classes.home__icon}/>
                    <p>325 m<sup>2</sup></p>
                </div>
                <div className={classes.home__price}>
                   <FaDollarSign className={classes.home__icon}/>
                    <p>$1,200,000</p>
                </div>
                <button className={`${classes.btn} ${classes.home__btn}`}> <Link className={classes.link} to={`/rooms/${slug[1]}`}>View Details</Link> </button>
            </div>


            <div className={classes.home}>
            <img src={home3} alt="House 1" className={classes.home__img}/>
            <FaHeart className={classes.home__list}/>
                <h5 className={classes.home__name}>Serene Stays</h5>
                <div className={classes.home__location}>
                <FaMapMarkerAlt className={classes.home__icon}/>
                    <p>USA</p>
                </div>
                <div className={classes.home__rooms}>
                    <FaUsers className={classes.home__icon}/>
                    <p>5 rooms</p>
                </div>
                <div className={classes.home__area}>
                    <FaRuler className={classes.home__icon}/>
                    <p>325 m<sup>2</sup></p>
                </div>
                <div className={classes.home__price}>
                   <FaDollarSign className={classes.home__icon}/>
                    <p>$1,200,000</p>
                </div>
                <button className={`${classes.btn} ${classes.home__btn}`}> <Link className={classes.link} to={`/rooms/${slug[2]}`}>View Details</Link> </button>
            </div>




        </div>
        </div></>
    )
}

export default Homes
