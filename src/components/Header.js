import React from 'react'
import {beige, brown, green, lightBrown} from "../utils/colorTheme";

const Header = props => {
  const style = {
    padding: '10px 7px',
    backgroundColor: green,
    color: brown,
    borderBottom: `3px solid black`,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    img: {
      height: '100%',
      display: 'block',
      float: 'left',
    },
    h1: {
      display: 'block',
      margin: '0',
      position: 'relative',
      top: '5px',
      left: '15px',
      fontSize: '45px',
      fontFamily: 'Montserrat, sans-serif'
    }
  };

  return (
    <div style={style} className={props.className}>
      <img style={style.img}
           src="http://www.wprdc.org/wp-content/themes/wprdc-redesign/assets/images/plain_logo_rbg_cropped.svg"/>
      <h1 style={style.h1}>Green Stuff</h1>
    </div>
  )
};

export default Header