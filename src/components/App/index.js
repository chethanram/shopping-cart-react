import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => (
  <React.Fragment>
    <main>
      <header> <FontAwesomeIcon icon={faStar} /> </header>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
