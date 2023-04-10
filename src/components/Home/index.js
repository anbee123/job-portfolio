
import './index.scss'
import { useEffect, useState } from "react"
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters'

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

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

      </div>

    </>
  )

}
export default Home