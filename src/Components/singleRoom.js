import React, { Component } from 'react'
import StyledHero from './Styled Components/StyledHero';
import Banner from './Styled Components/Banner'
import defaultBcg from '../Images/home4.jpg'
import classes from '../CSS/singleroom.module.css';
import {RoomContext} from './context'
import {Link} from 'react-router-dom';

export default class singleRoom extends Component {

    state={
        slug: this.props.match.params.slug,
        defaultBcg
    }

    static contextType = RoomContext;

  componentDidMount() {
    console.log(this.props);
  }
  
    render() {

        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
              <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className={classes.btnprimary}>
                  back to rooms
                </Link>
              </div>
            );
          }


          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
          } = room;
          const [main, ...defaultImages] = images;
          console.log(defaultImages);

        return (
            <div>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={name}>
                        <Link to="/rooms" className={classes.btnprimary}>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className={classes.singleroom}>
                    <div className={classes.singleroomimages}>
                        {defaultImages.map((item,index)=>(
                            <img key={index} src={item} alt={name}/>
                        ))}
                    </div>
                    <div className={classes.singleroominfo}>
            <article className={classes.desc}>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className={classes.info}>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className={classes.roomextras}>
          <h6>extras </h6>
          <ul className={classes.extras}>
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
            </div>
        )
    }
}
