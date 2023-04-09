import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  console.log('222 1', {letterClass, strArray, idx})
  return <span>
    {strArray.map((str, index) => (
      <span key={index} className={`${letterClass} _${index + idx}`}>
        {str}
      </span>
    ))}
  </span>
}

export default AnimatedLetters