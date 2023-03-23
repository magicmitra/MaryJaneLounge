import Product from './Product';
import weeds from './data/product'

function App() {

  return (
    <div className="App">
        <header className="App-header">
        </header>
        <div>
            {
                weeds.map(weed => {
                    return (
                        <Product 
                            id={weed.id}
                            name={weed.name}
                            price={weed.price}
                            img={weed.img}
                        />
                    )   
                })
            }      
        </div>
    </div>
  );
}

export default App;