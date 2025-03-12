import { useEffect, useState } from "react";
import { getProduct } from "../../services/productService";
import { Link } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getProduct();
        console.log("Product response:", productsResponse);

        const { data = [], status } = productsResponse;
        if (status === 200) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="w3l_banner_nav_right">
        <div className="w3ls_w3l_banner_nav_right_grid">
          <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>Food</h6>


            {products.length > 0 ? (
              products.map((productdetails) => (
                <div key={productdetails._id} className="col-md-3 w3ls_w3l_banner_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt="Offer" className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <Link to={`/view-product/${productdetails._id}`}>
                                <img
                                  src={`/images/${productdetails.pdtImgPath}`}
                                  alt={productdetails.pdtName}
                                  className="img-responsive"
                                />
                              </Link>

                              <p>{productdetails.pdtName}</p>
                              <h4>${productdetails.pdtPrice}</h4>
                            </div>
                            <div className="snipcart-details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" value="_cart" />
                                  <input type="hidden" name="add" value="1" />
                                  <input type="hidden" name="business" value=" " />
                                  <input type="hidden" name="item_name" value={productdetails.pdtName} />
                                  <input type="hidden" name="amount" value={productdetails.pdtPrice} />
                                  <input type="hidden" name="discount_amount" value="1.00" />
                                  <input type="hidden" name="currency_code" value="USD" />
                                  <input type="hidden" name="return" value=" " />
                                  <input type="hidden" name="cancel_return" value=" " />
                                  <input type="submit" name="submit" value="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProducts;
