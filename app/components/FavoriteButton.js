import React from 'react'

export const FavoriteButton = (props) => {
  let {handleFavAdd, handleFavRemove, userId, favMovie, favsProp, favoriteArr} = props
  let favMovieUpdate;

  const handleClick = (e) => {
    //if user is not signed in, bring them to sign in from here
    console.log('before toggle: ', e.target.className.baseVal);
    e.target.classList.toggle('favorite')
    console.log('after toggle: ', e.target.className.baseVal);
    let fav = e.target.className.baseVal.indexOf('favorite') !== -1 ? true : false;
    console.log(fav);

    if (fav) {

      console.log('in add section');
      handleFavAddToServer();

    } else {

      console.log('in delete section');
      handleFavDeleteFromServer()

    }

  }

  const handleFavAddToServer = () => {
    favMovie.user_id = userId.id;
    apiFetch('api/users/favorites/new', favMovie)
    .then(favId => {
      delete favMovie.user_id
      handleFavAdd(userId, favMovie)
    })
    .catch(error => console.log('add fav movie error: ', error))
  }

  const handleFavDeleteFromServer = () => {
    fetch(`api/users/${userId.id}/favorites/${favMovie.movie_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type':'application/json' }
    })
    .then(response => response.json())
    .then(deleted => console.log("deleted response: ", deleted))
    .then(handleFavRemove(userId, favMovie))
    .catch(error => console.log('delete fav movie error: ', error))
  }

  const apiFetch = (fetchType, body) => {
    return fetch(fetchType, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
  }

  const addClass = () => {
    //if favMovie is in favoritesArr, return 'favorite'
    console.log('arr:', favoriteArr.indexOf(favMovie));
    return favoriteArr.indexOf(favMovie) !== -1 ? 'favorite' : '';
  }

  return (
  <label >
    <input className="svg-hidden"/>
    <svg  className={ addClass() }
          onClick={(e) => {handleClick(e)}}
          width="44" height="42" viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg"><path d="M3.63 18.444l17.808 21.282c.307.367.81.362 1.112 0l17.808-21.282-.71.91c1.048-1.31 1.8-2.89 2.142-4.628.137-.695.21-1.415.21-2.152C42 6.74 37.48 2.008 31.906 2.008c-4.6 0-8.48 3.22-9.696 7.623l-.42-.007C20.572 5.22 16.692 2 12.093 2 6.52 2 2 6.73 2 12.566c0 .737.072 1.456.21 2.15.342 1.738 1.093 3.32 2.142 4.63" stroke="#A40606" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </label>
  )

}


{/* <object type="image/svg+xml" alt="heart data" data="./images/heart-svg.svg">favorites button</object> */}
