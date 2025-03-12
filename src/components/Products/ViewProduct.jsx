import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productid } from "../../services/productService";

function ViewProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pdtId  } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      const productResponse = await productid(pdtId);
      console.log("Product ID response:", productResponse);
      const { data, status } = productResponse;
      if (status === 200 && data) {
        setProduct(data);
    }
    
      setLoading(false);
    };

    fetchProductById();
  }, [pdtId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w3l_banner_nav_right">
      <div className="agileinfo_single">
        <h5>{product?.pdtName}</h5>
        <div className="col-md-4 agileinfo_single_left">
          <img
            id="example"
            src={`/images/${product?.pdtImgPath}`}
            alt={product?.pdtName}
            className="img-responsive"
          />
        </div>
        <div className="col-md-8 agileinfo_single_right">
          <div className="rating1">
            <span className="starRating">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating}>
                  <input
                    id={`rating${rating}`}
                    type="radio"
                    name="rating"
                    value={rating}
                    defaultChecked={rating === 3}
                  />
                  {rating}
                </label>
              ))}
            </span>
          </div>
          <div className="w3agile_description">
            <h4>Description :</h4>
            <p>{product?.pdtDesc}</p>
          </div>
          <div className="snipcart-item block">
            <div className="snipcart-thumb agileinfo_single_right_snipcart">
              <h4>${product?.pdtPrice}</h4>
            </div>
            <div className="snipcart-details agileinfo_single_right_details">
              <form action="#" method="post">
                <fieldset>
                  <input type="hidden" name="cmd" value="_cart" />
                  <input type="hidden" name="add" value="1" />
                  <input type="hidden" name="business" value=" " />
                  <input type="hidden" name="item_name" value={product.pdtName} />
                  <input type="hidden" name="amount" value={product.pdtPrice} />
                  <input type="hidden" name="discount_amount" value="1.00" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="hidden" name="return" value=" " />
                  <input type="hidden" name="cancel_return" value=" " />
                  <input
                    type="submit"
                    name="submit"
                    value="Add to cart"
                    className="button"
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
}

export default ViewProduct;
