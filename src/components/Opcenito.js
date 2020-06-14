import React from 'react';
import {Link} from 'react-router-dom';
import Pande from '../panda-2.jpg';

function Opcenito() {
    return (
      <div>
    <h1>O PANDAMA</h1>
      <p>Veliki panda je sisavac uobičajeno kvalificiran u porodicu medvjeda, Ursidae, iz središnje i južne Kine. On je istovremeno i jedina vrsta (Ailuropoda melanoleuca) roda Auliropoda. Njegovo glavno jelo je bambus, ali može jesti i drugu hranu, kao med. Veliki panda je jedan od najugroženijih životinja na Zemlji: otprilike 1.600 panda živi u divljini i nekih 160 je u ustanovama kao što je ZOO prema spisima od 2004.</p>
      <p>Veliki panda dosegne veličinu od 120 do 150 cm, a rep mu je, kao i kod drugih medvjeda malen, dug samo oko 12 cm. Masa odrasle životinje kreće se od 75 do 160 kg. Građa tijela mu je kao kod drugih medvjeda, no potpuno odudara izraženo kontrastno crno-bijelo obojenim krznom.</p>
      <p>Veliki pande žive na području od još samo oko 5.900 km2. To su gustom šumom obrasli suptropski obronci sjeveroistočnih brdovitih područja Kine. Ljeti žive na visinama između 2.700 i 4.000 m N/m, dok se zimi spuštaju na niža područja, oko 800 m N/m. Klima njihovog životnog prostora generalno je vlažna s puno padalina, ljeta su svježa a zime hladne.</p>
      <a href="https://hr.wikipedia.org/wiki/Veliki_panda"><img src = {Pande}></img></a><br></br>
      <Link to="/">Povratak</Link>
   </div>
   );
  }
  
  
  export default Opcenito;