
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react"
import './index.scss'
import Snowfall from 'react-snowfall';

const Home = () => {
  const [letterClass, setLetterclass] = useState('text-animate');

  const nameArray = ('Anna Bui').split('')
  const jobArray = 'Full Stack Developer.'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover');
    }, 6000);
    return () => { clearTimeout(timer); }
  }, []);

  return (
    <>
      <Snowfall
        color="#ffcafb"
        snowflakeCount={50}
      />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
          </h1>

        </div>

      </div>

    </>
  )

}
export default Home