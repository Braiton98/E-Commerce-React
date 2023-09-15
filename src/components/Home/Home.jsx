import './Home.css';
import Cabana1 from '../../assets/imgs/cabanasimgs/cabanas.jpg';
import Cabana2 from '../../assets/imgs/cabanasimgs/variasCabanas.jpeg';

function Home() {
  return (
    <>
      <h1 className='h1Home'>Cabañas</h1>
      <h2 className='h2Home'>Subtitulo</h2>

      <div className='imgsContainer'>
        <img src={Cabana1} alt="cabaña1" />
        <img src={Cabana2} alt="cabaña2" />
      </div>
    </>
  )
}

export default Home