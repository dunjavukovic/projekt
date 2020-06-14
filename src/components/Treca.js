import React from 'react';
import {Link} from 'react-router-dom';
import Pandica from '../pandica.jpg';
import Pandaa from '../hh.jpg';

function Treca() {
    return (
      <div>
    <h1>O PANDAMA</h1>
      <p>Velike pande žive prije svega na tlu, no dobro se penju i izvrsni su plivači. Za razliku od drugih medvjeda, ne mogu se uspraviti na stražnje noge. Jedu uglavnom sjedeći, tako da im prednje šape ostaju slobodne za dohvaćanje i držanje hrane. Aktivni su uglavnom u sumrak i noću, a danju spavaju u šupljim stablima, pukotinama u stijenama ili špiljama.</p>
      <p>Veliki pande su samotnjaci. Teritorij ženki velik je oko 30 do 40 hektara, i brane ga od drugih ženki. Mužjaci su fleksibilniji i nemaju svoje teritorije. Često se preklapaju kako s teritorijem ženki, tako i s područjima drugih mužjaka. No, uprkos tome, veliki pande se ipak izbjegavaju. Na svojim lutanjima, obilježavaju stabla grebanjem i urinom.</p>
      <p>Za razliku od drugih medvjeda, ne spavaju zimski san. Umjesto toga, zimi silaze u niža područja koja su u to vrijeme nešto toplija od njihovih ljetnih staništa.</p>
      <a href="https://www.youtube.com/watch?v=dqT-UlYlg1s"><img src = {Pandica}></img></a><br></br>
      <a href="https://www.youtube.com/watch?v=9fmn8I2Gs6w"><img src = {Pandaa}></img></a><br></br>
      <Link to="/">Povratak</Link>
   </div>
   );
  }
  
  
  export default Treca;