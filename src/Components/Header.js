import React from 'react'
import classes from '../CSS/header.module.scss'
import {Link} from 'react-router-dom';
import reals from '../CSS/realtors.module.scss'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { FaApple, FaSalesforce, FaAws, FaAirbnb } from 'react-icons/fa';

const Header = () => {
    const style={fontSize : '40px', filter: 'brightness(10%)'}
     return ( 
     <div className={classes.container}>
        <header className={classes.header}>
        {/* <img src="img/logo.png" alt="Nexter logo" class="header__logo"/> */}
        <h1 className={classes.heading1}>The Ultimate Personal Freedom </h1>
        <Link to='/rooms'><button className={`${classes.header__btn} ${classes.btn}`}>View Our Properties</button> </Link>   
        <div className={classes.header__seentext}>Seen on</div>
            <div className={classes.header__seenlogo}>
                <FaApple style={style}/>
                <FaSalesforce style={style}/>
                <FaAws style={style}/>
                <FaAirbnb style={style}/>
            </div>  
        </header>

        <div className={reals.realtors} >
        <h3 className={reals.heading3}>Top 3 Realtors</h3>
    <div className={reals.realtors__list}>
    <img src={img1} alt="Realtor 1" className={reals.realtors__img}/>
    <div className={reals.realtors__details}>
        <h4 className={reals.heading4} >Erik Feinman</h4>
        <p className={reals.realtors__sold}>245 houses sold</p>
    </div>

    <img src={img2} alt="Realtor 1" className={reals.realtors__img}/>
    <div className={reals.realtors__details}>
        <h4 className={reals.heading4} >Kim Brown</h4>
        <p className={reals.realtors__sold}>212 houses sold</p>
    </div>

    <img src={img3} alt="Realtor 1" className={reals.realtors__img}/>
    <div className={reals.realtors__details}>
        <h4 className={reals.heading4} >Toby Ramsey</h4>
        <p className={reals.realtors__sold}>198 houses sold</p>
    </div>
</div>

        </div></div>
       
    )
}

export default Header