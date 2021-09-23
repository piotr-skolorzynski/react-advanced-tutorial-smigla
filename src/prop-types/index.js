import Product from './Product';
import { useFetch } from '../custom-hooks/useFetch';
const url = 'https://course-api.netlify.app/api/react-prop-types-example'; //nie działa

const Index = () => {
    const { products } = useFetch(url);
    return (
        <div>
            <h2>products</h2>
            <section className='products'>
                {products.map(product => {
                    return <Product key={product.id} {...product} />
                })}
            </section>
        </div>
    );
};

export default Index;