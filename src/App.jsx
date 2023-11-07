import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Stack from 'react-bootstrap/Stack';
// import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlipCard from './components/FlipCard';
import { FaMailBulk, FaPhone } from "react-icons/fa";



function App() {
  
  return (
    <Parallax pages={2.5} style={{ top: '0', left: '0' }} className='animation' innerStyle={{backgroundColor: 'lightblue'}}>
      {/* Start tło parallaxa */}

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax" id='layer0'></div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax" id='layer1'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.15}>
        <div className="animation_layer parallax" id='layer2'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <div className="animation_layer parallax" id='layer3'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div className="animation_layer parallax" id='layer4'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.09}>
        <div className="animation_layer parallax" id='layer5'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" id='layer6'></div>
      </ParallaxLayer>


    {/* Koniec tło parallaxa */}

    {/* Napis: wizytówka */}
    <ParallaxLayer 
    offset={0.5} 
    speed={-0.9}
    horizontal={true}
    >
      <p className='text-1'>W I Z Y T Ó W K A</p>
    </ParallaxLayer>

    {/* Imie/Nazwisko */}
    <ParallaxLayer 
    offset={0.5} 
    speed={0.6}
    horizontal={true}
    >
      <p className='text-2'>D A M I A N &nbsp; S P Ę T A N Y</p>
    </ParallaxLayer>

    <ParallaxLayer offset={1} className='tlo'>
     
    </ParallaxLayer>

    {/* tekst: Moje hobby*/}
    <ParallaxLayer offset={1.55}
    className='text-hobby'
    style={{
      zIndex: 1,
      textShadow: '5px 5px 8px yellow',
    }}
    >
    <p>Moje hobby</p>
    </ParallaxLayer>

    {/* Tekst: o mnie */}
    <ParallaxLayer
    offset={1}
    speed={1}
    className=''
    >
    <h2 className="text-3">O mnie:</h2>
    <p>Nazywam się Damian Spętany i mam 19 lat.</p>
    <p>Obecnie ucze się w Zespole Szkół Ponadpodstawowych w Poddębicach i jestem w piątej klasie na kierunku technik informatyk.</p>
    <p>W czerwcu zdałem ostatni egzamin zawodowy i zdobyłem dyplom oraz świadectwo potwierdzające kwalifikację w zawodzie</p>
    <p>W przyszłości planuję dalej rozwijać umiejętności programowania i tworzenia stron internetowych.</p>
    </ParallaxLayer>

    <ParallaxLayer className='Karty tlo' offset={1.6} speed={0.4} >
      
      <Stack direction='horizontal' gap={5}>
      <FlipCard
			body={<p>W wolnym czasie zajmuje się tworzeniem stron internetwowych z wykorzystaniem nowych narzędzi takich jak np. React</p>}
			title="Programowanie"
			backQuote={false}
			bgColor="orange"
			backTitle="Simone Weil" 
      /> 
      </Stack>
    </ParallaxLayer>

    <ParallaxLayer id='kontakt' className='tlo' offset={2.3}>
      <h3>Kontakt  </h3>
      <p> <FaPhone></FaPhone> 691 486 050</p>
      <p> <FaMailBulk></FaMailBulk> DamianS777D@gmail.com</p>
    </ParallaxLayer>
  </Parallax>
  
  )
}

export default App
