import './Home.css';
import Cabana1 from '../../assets/imgs/cabanasimgs/cabanas.jpg';
import Cabana2 from '../../assets/imgs/cabanasimgs/variasCabanas.jpeg';
import Cabana3 from '../../assets/imgs/cabanasimgs/cabana3.jpg';
import Cabana4 from '../../assets/imgs/cabanasimgs/cabana4.jpg';
import Cabana5 from '../../assets/imgs/cabanasimgs/cabana5.jpg';
import Cabana6 from '../../assets/imgs/cabanasimgs/cabana6.jpg';
import Cabana7 from '../../assets/imgs/cabanasimgs/cabana7.jpg';
import Cabana8 from '../../assets/imgs/cabanasimgs/cabana8.png';
import Cabana9 from '../../assets/imgs/cabanasimgs/cabana9.png';
import Cabana10 from '../../assets/imgs/cabanasimgs/cabana10.png';
import Cabana11 from '../../assets/imgs/cabanasimgs/cabana11.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className='h1Home'>Bienvenid@</h1>
      <h2 className='h2Home'>Ahora puede elegir donde quiere pasar un tiempo de tranquilidad</h2>

      <div className='imgsContainer'>
        <img src={Cabana1} alt="cabaña1" />
        <img src={Cabana2} alt="cabaña2" />
        <img src={Cabana3} alt="cabaña3" />
        <img src={Cabana4} alt="cabaña4" />
        <img src={Cabana5} alt="cabaña5" />
        <img src={Cabana6} alt="cabaña6" />
        <img src={Cabana7} alt="cabaña7" />
        <img src={Cabana8} alt="cabaña8" />
        <img src={Cabana9} alt="cabaña9" />
        <img src={Cabana10} alt="cabaña10" />
        <img src={Cabana11} alt="cabaña11" />
      </div>

      <p>Si quiere conocer las promos haga click <Link className='links' to="/promos">aquí</Link></p>
    </>
  )
}

export default Home