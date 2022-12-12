import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ] 
  const [points, setPoints] = useState({ point:new Array(7).fill(0), maxPoints: 0, setMaxSelected: ' '});
  const [selected, setSelected] = useState(0);

  const randomNum = () => {
    const num = Math.floor(Math.random()*anecdotes.length)
    setSelected(num)
  }

  const addVote = () => {
    const newPoints = points.point;
    newPoints[selected] += 1
    const indexMax = newPoints.indexOf(Math.max(...newPoints))
    const newArray = {
      point: [...newPoints],
      maxPoints: newPoints[indexMax],
      setMaxSelected: anecdotes[indexMax]
    }
    setPoints(newArray)
  }
console.log(points.maxPoints)
 console.log(points.setMaxSelected)
  return (
    <div>
      <p>{anecdotes[selected]}</p> 
      <p>has {points.point[selected]} votes</p>
      <button onClick={()=> addVote()}>vote</button>
      <button onClick={() => randomNum()}>next anecdotes</button>
      <p>Anecdotes with most votes</p>
      <p>{points.setMaxSelected}</p>
      <p>has {points.maxPoints} vote</p>
    </div>
  )
}

export default App