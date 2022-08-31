
import fundo from '../../assets/galaxia.jpg';
import './home.css'

export default function Home() {

  return (
    <div id='home' className='home'>
      <div className="imgHome"
        style={{
          backgroundImage: `url(${fundo})`,
          boxSizing: 'border-box',
          display: 'block',
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',  
        }}
      >
      <div className='title'>
        <h1>Opa,bom dia,boa tarde e boa noite.</h1>
        <h1>Eduardo</h1>
      </div>

      </div>
    </div>
  )
}