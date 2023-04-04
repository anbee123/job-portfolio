
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react"
import { joinPaths } from '@remix-run/router';

const Home = () => {
  const [letterClass, setLetterclass] = useState('text-animate');

  const nameArray = ('Anna Bui').split('')
  const jobArray = 'Full Stack Developer.'.split('')

  console.log('111 ', {nameArray})


  return (
    <>
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