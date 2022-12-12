import './App.css';
import Nav from './components/navBar.js';
import Div1 from './components/div1.js';
import Card from './components/card';
import data from './data';

function App() {
  const cardData = data.map(info => {
    return <Card
      key={info.id}
      {...info}
      star='images/star.png'



    />
  })
  return (
    <div className="App">
      <Nav />
      <Div1 />
      <section className='cards--list'>
        {cardData}
      </section>

    </div>
  );
}

export default App;
