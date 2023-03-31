import { Button, Modal, Box } from '@mui/material'
import { useState } from 'react'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'
import MenuItem from './components/MenuItem'
import Cart from './components/Cart'
import Check from './components/Check'
import products from './data/product'

function App() {    
    const cartItems = useSelector((state: RootState) => state.cart.items)
    // TODO flatten cartItems
    const [openCartModal, setOpenCartModal] = useState(false)
    const [openCheckModal, setOpenCheckModal] = useState(false)
    const handleOpenCartModal = () => setOpenCartModal(true)
    const handleCloseCartModal = () => setOpenCartModal(false)
    const handleOpenCheckModal = () => setOpenCheckModal(true)
    const handleCloseCheckModal = () => setOpenCheckModal(false)

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
                            type={product.type}
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
                        {
                            (cartItems.length > 0) ? 
                                `CART (${cartItems.length})` 
                                : `CART`
                        }
                </Button>
                <Modal
                    open={openCartModal}
                    onClose={handleCloseCartModal}
                >
                    <Box sx={modalStyle}>
                        <Cart/>
                    </Box>
                </Modal>
                <Button style={buttonFooterNavStyle}
                        onClick={handleOpenCheckModal}>
                        CHECK
                </Button>
                <Modal
                    open={openCheckModal}
                    onClose={handleCloseCheckModal}
                >
                    <Box sx={modalStyle}>
                        <Check />
                    </Box>
                </Modal>
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

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#6F5C73',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default App;