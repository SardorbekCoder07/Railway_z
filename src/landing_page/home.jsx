import Contact from './contact';
import Hero from './hero';
import { Hero_bot } from './hero_bot';
  import Navbar from './navbar';
import Timelineb from './timeline';

const HomePage = () => {

return(
  <div className='flex flex-col'>
    {/* Navbar */}
      <Navbar/>
      <Hero/>
      <Hero_bot/>
      <Timelineb/>
      <Contact/>
  </div>
)
}
export default HomePage