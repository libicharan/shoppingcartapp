import { useEffect, useState } from "react";
import { useAuth } from "../../content/AuthContext";
import { getCategories } from "../../services/productService";

function Categories() {
  const [categories, setCategories] = useState([]);
  const { selectCategory } = useAuth();
  
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await getCategories();
      console.log('categoriesresponse', categoriesResponse);
      const { data = [], status } = categoriesResponse;
      if (status === 200) {
        setCategories([...data]);
      }
    }
    fetchCategories();

  }, []);

  return (

    <>
      <div className="w3l_banner_nav_left">
        <nav className="navbar nav_bottom">
          <div className="navbar-header nav_2">
            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav nav_1">
            {categories.map((category) => (
							<li key={category._id}><a onClick={() => {selectCategory(category.catName)}}>{category.catName}</a></li>
						))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Categories;