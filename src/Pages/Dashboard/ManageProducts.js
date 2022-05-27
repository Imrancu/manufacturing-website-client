import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(null)
    useEffect(() => {
        fetch('https://stormy-cove-38680.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [])
    return (
        <div>
            <div className='px-20'>
                <h1 className='my-10 text-3xl text-center font-semibold uppercase'>Our Products</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 content-center gap-5 my-10'>
                    {
                        manageProducts.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            setDeleteProduct={setDeleteProduct}
                        />)
                    }
                </div>
            </div>
            {deleteProduct && <DeleteModal/>}
        </div>
    );
};

export default ManageProducts;