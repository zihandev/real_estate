import React from 'react'
import classes from '../CSS/footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.container}>
        <div className={classes.footer}>
            <ul className={classes.nav}>
                <li class="nav__item"><a href='#' className={classes.nav__link}>Find your dream home</a></li>
                <li class="nav__item"><a href='#' className={classes.nav__link}>Download home planner</a></li>
                <li class="nav__item"><a href='#' className={classes.nav__link}>Request proposal</a></li>
                <li class="nav__item"><a href='#' className={classes.nav__link}>Submit your property</a></li>
                <li class="nav__item"><a href='#' className={classes.nav__link}>Come work with us!</a></li>
            </ul>
        <p className={classes.copyright}>
        &copy; Copyright 2017 by Mohammed Zihan. Feel free to use this project for your own purposes. Credits to original author is highly appreciated.
            </p>
       
        </div></div>
    )
}

export default Footer
