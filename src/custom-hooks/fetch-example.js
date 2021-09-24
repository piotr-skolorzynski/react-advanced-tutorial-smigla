import { useFetch } from "./useFetch";

const url = 'https://course-api.netlify.app/api/react-prop-types-example';

const Example = () => {
    const { loading, products } = useFetch(url);
    console.log(products);

    return (
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    );
}
 
export default Example;