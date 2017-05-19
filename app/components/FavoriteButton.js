import React from 'react'

export const FavoriteButton = (props) => {
  let {handleFavAdd, handleFavRemove, userId, favMovie, favsProp} = props

  const handleClick = (e) => {
    e.target.classList.toggle('favorite')
    let fav = !e.target.className.indexOf('favorite') ? true : false;

    fav ? handleFavAdd(userId, favMovie) : handleFavRemove(userId, favMovie);
  }

  const addClass = () => {
    return favsProp ? 'active' : '';
  }

  return (
<<<<<<< HEAD
  <label onClick={(e) => {handleClick(e)}}>
    <input className="svg-hidden"/>
    <svg  width="44" height="42" viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg"><path d="M3.63 18.444l17.808 21.282c.307.367.81.362 1.112 0l17.808-21.282-.71.91c1.048-1.31 1.8-2.89 2.142-4.628.137-.695.21-1.415.21-2.152C42 6.74 37.48 2.008 31.906 2.008c-4.6 0-8.48 3.22-9.696 7.623l-.42-.007C20.572 5.22 16.692 2 12.093 2 6.52 2 2 6.73 2 12.566c0 .737.072 1.456.21 2.15.342 1.738 1.093 3.32 2.142 4.63" stroke="#D0011B" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </label>
=======
    <button className={ addClass() }
            onClick={(e) => {handleClick(e)}}>
      Favorite!
    </button>
>>>>>>> 0c147fcd8587dffecbc99e5277716c6d454069ba
  )

}



{/* <object type="image/svg+xml" alt="heart data" data="./images/heart-svg.svg">favorites button</object> */}
