import { Button, Modal, Box } from '@mui/material'
import { useState } from 'react'
import MenuItem from './MenuItem';
import Cart from './Cart'
import products from './data/product'

function App() {    

    const [openCartModal, setOpenCartModal] = useState(false)
    const handleOpenCartModal = () => setOpenCartModal(true)
    const handleCloseCartModal = () => setOpenCartModal(false)

    return (
        <div className="App">
            <header className="App-header">
            </header>
        <div className="Prducts">
            {
                products.map(product => {
                    return (
                        <MenuItem 
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            img={product.img}
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
                        onClick={handleOpenCartModal}>
                        CART
                </Button>
                <Modal
                    open={openCartModal}
                    onClose={handleCloseCartModal}
                >
                    <Box sx={cartModalStyle}>
                        <Cart/>
                    </Box>
                </Modal>
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

const cartModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#6F5C73',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default App;