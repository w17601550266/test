import { testData,  } from '@common/data'
// import xml2js from 'xml2js'



function App() {

  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;
