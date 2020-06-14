import React from 'react';
import {Link} from 'react-router-dom';
import Prva from '../prva.jpg';
import Druga from '../druga.jpg';
import Treca from '../treca.jpg';
import Cetvrta from '../cetvrta.jpg';
import Peta from '../peta.jpg';

function Galerija() {
    return (
      <div>
Mala galerija fotografija.
<br></br>
<a href="https://www.youtube.com/watch?v=p37A40yC6AE"><img src = {Prva}></img></a><br></br>
<a href="https://www.youtube.com/watch?v=Tish3KkNnLc"><img src = {Druga}></img></a><br></br>
<a href="https://www.youtube.com/watch?v=oipC38mYiNM"><img src = {Treca}></img></a><br></br>
<a href="https://www.youtube.com/watch?v=wAEzpwvrveg"><img src = {Cetvrta}></img></a><br></br>
<a href="https://www.youtube.com/watch?v=lo_OYvPHN2w"><img src = {Peta}></img></a><br></br>
      <Link to="/">Povratak</Link>
      </div>
      );
     }
     
     
     export default Galerija;