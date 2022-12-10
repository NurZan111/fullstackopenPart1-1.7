import { useState } from 'react'

const Statistics =(props)=>{

  let all = props.good + props.neutral + props.bad
  let average = (props.good - props.bad)/all
  let positive = (props.good/all)*100 

  if(props.good === 0 && props.bad === 0 &&props.neutral === 0){
    return(<div>
      <p>No feedback given</p>
    </div>)
  }

return(<table>
      <StatisticsLine text='good' value={props.good}/>
      <StatisticsLine text='netral' value={props.neutral}/>
      <StatisticsLine text='bad' value={props.bad}/>
      <StatisticsLine text='all' value={all}/>
      <StatisticsLine text='average' value={average}/>
      <StatisticsLine text='positive' value={positive}/>
  </table>)
}
const StatisticsLine = (props)=>{
  return(<tr><th>{props.text}</th> <td>{props.value}</td></tr>)
}
const Button = (props)=>{
  return(<button onClick={props.onClick}>{props.value}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  return (
    <div>
      <h3>Give feedback</h3>
      <Button onClick={()=> setGood(good +1)} value='good'/>
      <Button onClick={()=> setNeutral(neutral +1)} value='neutral'/>
      <Button onClick={()=> setBad(bad +1)} value='bad'/>
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
