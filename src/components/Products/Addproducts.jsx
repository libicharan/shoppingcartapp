function AddProducts() {

    return (
        <>
            <div className="w3l_banner_nav_right">
                <div className="w3_login">
                    <h3>Add your New Products!!</h3>
                    <div className="w3_login_module">
                        <div className="module form-module">
                            <div className="form" style={{ display: "block" }}>
                                <h2>Add Products</h2>
                                
                                <form>
                                    <select
                                        name="pdtCatId"
                                    >
                                        <option value="">Select Category</option>
                                        
                                    </select>
                                   
                                    <input
                                        type="text"
                                        name="pdtName"
                                        placeholder="Product Name"
                                        
                                    />
                                   
                                    <input
                                        type="text"
                                        name="pdtPrice"
                                        placeholder="Price"
                                        
                                    />
                                
                                    <textarea
                                        name="pdtDesc"
                                       
                                    ></textarea>
                                   
                                    <input
                                        type="file"
                                        name="pdtImg"
                                       
                                    />

                                    <input type="submit" value="Add Product" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddProducts;