// import MakeProduct from './componets/product';
import ProductMainPage from './productComps/productPage';
import MiniDrawer from './Drawer';

function ProductApp() {
  return (
      <div className="App">
        <MiniDrawer>
          <ProductMainPage />
        </MiniDrawer>
      </div>
        );
      }
      // <MakeProduct />

export default ProductApp;
