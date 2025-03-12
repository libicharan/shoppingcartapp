import axios from "axios";

export const getCategories = async() => {
    try {
      const getCat = await axios.get('http://localhost:3000/getcategories');
      return getCat;
    } catch (error) {
        console.log('Error in getCategories: ', error);
        return error;
    }
}

export const getProduct = async() => {
  try {
    const getprod = await axios.get('http://localhost:3000/listproducts');
    return getprod;
  } catch (error) {
      console.log('Error in list product: ', error);
      return error;
  }
}

export const productid = async() => {
  try {
    const getprodid = await axios.get(`http://localhost:3000/view-product/{pdtid}`);
    return getprodid;
  } catch (error) {
      console.log('Error in list product: ', error);
      return error;
  }
}


