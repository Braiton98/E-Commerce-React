import './Promos.css'
import { Countdown } from '../contrarreloj/Contrarreloj';

function Promos() {

  return (
    <>
    <h2>Promos</h2>
    <p>Las siguientes ofertas son por un corto período de tiempo:</p>
    <hr/>
    <Countdown/>
    </>
  )
}

export default Promos;