import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <div>
        <img src={hero} alt="" className='w-full min-h-[600px] object-cover'/>
    </div>
  )
}

export default Hero