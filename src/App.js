import { testData } from '@common/data'
export { test } from '@common/data'

function App() {

  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;
