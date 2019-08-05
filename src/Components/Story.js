import React from 'react';
import classes from '../CSS/story.module.scss';
import img2 from '../Images/story2.jpg';
import img3 from '../Images/story3.jpg';

const Story = () => {
    return (
        <div className={classes.container}>
        <div className={classes.story__pictures}>
        <img src={img2} alt="Couple with new house" className={classes.story__img1}/>
        <img src={img3} alt="New house" className={classes.story__img2}/>
    </div>

    <div className={classes.story__content}>
        <h3 className={classes.heading3}>Happy Customers</h3>
        <h2 className={classes.heading2} >&ldquo;The best decision of our lives&rdquo;</h2>
        <p className={classes.story__text}>
            We found the best house we could have imagined. We Recommend this site to everyone who want luxurious homes!
        </p>
        <button className={classes.btn}>Find your own home</button>
    </div></div>
    )
}

export default Story
