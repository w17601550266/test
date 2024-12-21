import { testData,test } from '@common/data'

function App() {
console.log(test(), '11111')
  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;
