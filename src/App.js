import { testData } from './common/data'
import xml2js from 'xml2js'

function App() {
  const xml=new xml2js.Parser()
  return (
    <div className="App">
      {testData.map((item)=><>{item.name}</>)}
    </div>
  );
}

export default App;
