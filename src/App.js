import { testData,test } from '@common/data'
import base64 from 'base64-js'

function App() {
console.log(test(), base64, '11111')
  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;
