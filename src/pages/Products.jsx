import EnhancedTable from '../components/ProductsTable';
import SearchInput from '../components/SearchInput';
import BasicTextFields from '../components/AddProduct';
import Box from '@mui/material/Box';

const Products = ({
  products,
  searchValue,
  handleSearch,
  addProductHandler,
}) => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchInput
          products={products}
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
        <BasicTextFields addProductHandler={addProductHandler} />
      </Box>

      <EnhancedTable products={products} />
    </div>
  );
};

export default Products;
