import { Button, Modal, Box } from '@mui/material'
import { useState } from 'react'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'
import MenuItem from './components/MenuItem'
import Cart from './components/Cart'
import Check from './components/Check'
import products from './data/product'
import flattenCheck from './utils/flattenCheck'

function App() {    
    const cartItems = flattenCheck(useSelector((state: RootState) => state.cart.items))
    const checkItems = flattenCheck(useSelector((state: RootState) => state.check.items))
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
                style={{
                    position: 'fixed',
                    marginTop: '20px',
                    bottom: '0px'
                }}
                >
                {/* <Button style={buttonFooterNavStyle}
                        onClick={() => alert('PROFILE COMING SOON')}>
                        PROFILE
                </Button> */}
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
                        {
                            (checkItems.length > 0) ?
                                `CHECK (${checkItems.length})`
                                : `CHECK`
                        }
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
    background: "#4E764E",
    color: "#A5BE7D",
    textFont: 'IBM Plex Mono',
    marginRight: '3px'
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 170,
    bgcolor: '#74A059',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default App;