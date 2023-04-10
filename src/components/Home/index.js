
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
  const [isAnimate, setIsAnimate] = useState(true)
  const letterClasss = isAnimate ? 'text-animate' : 'text-animate-hover'

  const nameArray = ('Anna Bui').split('')
  const jobArray = 'Full Stack Developer.'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimate(v => !v);
    }, isAnimate ? (5 + nameArray.length + jobArray.length) * 100 : 10000);
    return () => { clearTimeout(timer); }
  }, [isAnimate]);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClasss}
              strArray={nameArray}
              delay={5}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClasss}
              strArray={jobArray}
              delay={15}
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