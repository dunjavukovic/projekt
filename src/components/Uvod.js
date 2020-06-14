import React from 'react';
import {Link} from 'react-router-dom';
import Panda from '../panda.jpg';

function Uvod() {
    return (
      <div>
<a href="https://www.youtube.com/watch?v=v_cpPMjE0vU"><img src = {Panda}></img></a><br></br>
      <table>

      <tr>
       
          <td><Link to='/Opcenito' >O PANDAMA</Link></td>
          
          <td><Link to='/Treca' >NAČIN ŽIVOTA</Link></td>
         
          <td><Link to='/Galerija' >GALERIJA</Link></td>
          
          </tr>
          </table>
          
      </div>
    );
  }
  
  
  export default Uvod;