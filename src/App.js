import { testData,test  } from '@common/data'



function App() {
console.log(test)
  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;
