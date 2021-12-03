import ProductCard from '../components/Card'
import { Grid, GridItem } from '@chakra-ui/react'

function Products() {
    const products = []
    for (let i = 0; i < 10; i++) {
        products.push(
            {
                is_new: (Math.random() > 0.5 ? true : false),
                image_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
                name: 'Glasses',
                price: (Math.random()*10)+3,
                rating: (Math.random()*5)+1,
                num_reviews: Math.round((Math.random()*200)+1),
            }
        )
    }

    return (
        <div>
            <Grid
                templateColumns='repeat(3, 1fr)'
            >
            {
                products.map((p, i) => (
                    <GridItem>
                        <ProductCard
                            is_new={p.is_new}
                            image_url={p.image_url}
                            name={p.name}
                            price={p.price}
                            rating={p.rating}
                            num_reviews={p.num_reviews}
                            key={i}
                            />
                    </GridItem>
                ))
            }
            </Grid>
        </div>
    )
}
export default Products;
