import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, delay }) => {
  return <>
    {strArray.map((str, index) => (
      <span key={index} className={`${letterClass} _${index + delay}`}>
        {str}
      </span>
    ))}
  </>
}

export default AnimatedLetters