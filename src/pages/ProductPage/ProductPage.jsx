import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { games } from '../../container/data';
import sliderData from '../../components/Slider/sliderData';
import ProductItem from '../../components/ProductItem/ProductItem'; // Re-use ProductItem for similar products
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './ProductPage.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Check in games (numeric IDs)
    let foundProduct = games.find(g => g.id === parseInt(id));
    
    // If not found, check in sliderData (UUID strings)
    if (!foundProduct) {
      foundProduct = sliderData.find(g => g.id === id);
    }

    setProduct(foundProduct);

    // Filter similar products (just random others for now)
    const otherProducts = games.filter(g => g.id !== (foundProduct ? foundProduct.id : -1)).slice(0, 3);
    setSimilarProducts(otherProducts);

    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="product-page__loading">Loading...</div>;
  }

  return (
    <div className="product-page">
      <button className="product-page__back-btn" onClick={() => navigate(-1)}>
        <ArrowBackIcon /> Back
      </button>
      <div className="product-page__container">
          <div className="product-page__image-wrapper">
             {/* Slider images are in public folder relative, games are absolute URLs. Need to handle both. */}
             {product.img ? (
                <img src={product.img} alt={product.title} className="product-page__image" />
             ) : (
                /* Handle slider images which are constructed in Slider.js as process.env.PUBLIC_URL + /Imgs/img${index + 1}.jpg 
                   The sliderData doesn't actually contain the image path itself, it's derived from index in Slider.js map.
                   This is tricky because we don't know the index here easily without searching.
                   Let's assume we can find the index in sliderData.
                */
                <img src={process.env.PUBLIC_URL + `/Imgs/img${sliderData.findIndex(s => s.id === product.id) + 1}.jpg`} alt={product.title} className="product-page__image" />
             )}
          </div>
        <div className="product-page__info">
          <h1 className="product-page__title">{product.title}</h1>
          <p className="product-page__console">{product.console}</p>
          <div className="product-page__rating">
            {/* Dummy rating stars */}
            <span>⭐⭐⭐⭐⭐</span>
            <span className="product-page__reviews">(124 reviews)</span>
          </div>
          
          <p className="product-page__price">{product.price}</p>
          
          <p className="product-page__description">
            Experience the thrill of {product.title}. Immense yourself in stunning graphics and gameplay. 
            This ultimate edition includes exclusive content and features optimized for {product.console}.
            (Placeholder description as data is limited)
          </p>

          <div className="product-page__actions">
            <button className="product-page__btn product-page__btn--primary">
              <ShoppingCartOutlinedIcon /> Add to Cart
            </button>
            <button className="product-page__btn product-page__btn--secondary">
              <FavoriteBorderIcon /> Wishlist
            </button>
          </div>
          
          <div className="product-page__meta">
             <p><strong>Category:</strong> Games</p>
             <p><strong>Availability:</strong> In Stock</p>
          </div>
        </div>
        </div>

      
      <div className="product-page__similar">
        <h2 className="product-page__similar-title">Similar Products</h2>
        <div className="product-page__similar-list">
          {similarProducts.map(item => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
