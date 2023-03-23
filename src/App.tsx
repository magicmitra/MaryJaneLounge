import { Button } from '@mui/material'
import Product from './Product';
import weeds from './data/product'

function App() {

  return (
    <div className="App">
        <header className="App-header">
        </header>
        <div className="Prducts">
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

        <footer className="App-footer"
                style={footerStyle}>
            <Button style={buttonFooterNavStyle}
                    onClick={() => alert('PROFILE COMING SOON')}>
                PROFILE
            </Button>
            <Button style={buttonFooterNavStyle}
                    onClick={() => alert('MENU COMING SOON')}>
                MENU
            </Button>
            <Button style={buttonFooterNavStyle}
                    onClick={() => alert('CART COMING SOON')}>
                CART
            </Button>
            <Button style={buttonFooterNavStyle}
                    onClick={() => alert('CHECK COMING SOON')}>
                CHECK
            </Button>
        </footer>
    </div>
  );
}

const buttonFooterNavStyle = {
    backgroundColor: "#683973",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '175px'
}

const footerStyle = {
    marginTop: '20px'
}

export default App;