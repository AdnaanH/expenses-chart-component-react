import './App.css'
import data from './data.json'

function App() {
  const imagePath = '/logo.svg';
  const barGraphData = data.map(item => ({
    day: item.day,
    amount: item.amount,
    color: item.day === 'wed' ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
  }));
  

  return (
    <section className='wrapper'>
      <div className="header">      
        <div className="total">
          <h4>My balance</h4>
          <h2>$921.48</h2>
        </div>
        <img src={imagePath} alt="" className='logo'/>
      </div>
      <div className="main">
        <h3>Spending - Last 7 days</h3>
        <div className="barGraph">
          {barGraphData.map((item, index) => (
            <div className="graphItem" key={index}>
              <div style={{ height: `${item.amount * 3}px`, backgroundColor: item.color, borderRadius: '5px' }}></div>
              <small>{item.day}</small>
            </div>
          ))}
        </div>

        <hr />
        <div className="footer">
          <div className="thisMonth">
            <p>Total this month</p>
            <h1>$478.33</h1>
          </div>
          <div className="lastMonth">
            <p>from last month</p>
            <h5>+2.4%</h5>
          </div>

        </div>
      </div>
        
    </section>
  )
}

export default App
