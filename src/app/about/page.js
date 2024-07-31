import '../styles/about.css'
import Image from 'next/image';
import foto from '../img/foto.jpg'

export default function About() {
  return (
    <div className='about'>
      <Image src={foto} width={500} height={650} alt='foto'/>
      <h1>Marco Ambricca</h1>
      <span>Desarrollador web</span>
    </div>
  );
}
  