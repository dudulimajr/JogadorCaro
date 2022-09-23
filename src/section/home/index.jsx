
import fundo from '../../assets/fundo-branco-monocromatico.jpg';
import './home.css'
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import foto from "../../assets/fotojogador.jpg"

export default function Home() {

  return (
    <div id='home' className='home'>
      <div className="imgHome"
        style={{
          backgroundImage: `url(${fundo})`,
          boxSizing: 'border-box',

          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='title'>
          <h1>Opa , seja bem vindo.</h1>
          <h1>Eduardo</h1>
        </div>
        <img src={foto} className='foto' />
        <div className='logos'> 
          <div className='instagram'>
            <FaInstagram className='insta' color='grey' />
          <span className='arroba'>@duduliimajr</span>
          </div>
          <div className='Gmail'>
            <SiGmail className='icongmail' color='grey' />
          <span className='gmail'>eduardolimajunior28@gmail.com</span>
          </div>
        </div>

      </div>
    </div>
  )
}