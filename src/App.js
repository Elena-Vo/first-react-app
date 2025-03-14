
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Category", "Value"],
    ["Fear", 35],
    ["Agression", 30],
    ["Love", 20],
    ["others", 15],
  ];

  const options = {
    
    legend: {
      position: 'right',
      alignment: "center",
    },
    
    is3D: true, 
  };

  return (
    <div className='diagram'>
      <h1>"The percentage ratio of an average persons emotions"</h1>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        loader={<div>loading diagram...</div>} 
      />
    </div>
  );
}

export default App;