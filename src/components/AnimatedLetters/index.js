import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return <>
    {strArray.map((str, index) => (
      <span key={index} className={`${letterClass} _${index + idx}`}>
        {str}
      </span>
    ))}
  </>
}

export default AnimatedLetters