function Search() {

    return(

        <>
        <div className="w3l_search">
          <form action="#" method="post">
            <input
              type="text"
              name="Product"
              placeholder="Search a product..."
              required=""
            />
            <input type="submit" value=" " />
          </form>
        </div>
        </>
    )
}

export default Search;