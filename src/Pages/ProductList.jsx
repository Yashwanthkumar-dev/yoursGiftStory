import { Loader, Search } from "lucide-react";
import { Products } from "../data/data";
import { useEffect, useState } from "react";
function ProductList() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAllProduct() {
    try {
      setLoading(true);
      const respone = Products;
      console.log(respone);
      setTimeout(() => {
        setProduct(respone);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.log("error message :", error);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <div className=" mt-6 mx-3">
        <h1 className="font-playfair text-primary text-xl text-center font-medium leading-relaxed py-3 italic">
          Personalized Handcrafted Gift Gallery
        </h1>

        <p className="font-playfair text-justify text-gray-600 mt-7 mb-7 mx-2">
          Discover a curated collection of Personalized Handcrafted gifts...
        </p>

        <div className=" py-3 mx-3 flex items-center justify-end">
          <input
            type="text"
            placeholder="search for gifts (e.g.,Wooden Art,Frames...)"
            className="border w-64 py-2 px-3 rounded-l-lg border-r-0 border-gray-400 placeholder:truncategt"
          />
          <i className="border border-l-0 text-primary/65 py-2 pr-2 border-gray-400 rounded-r-lg">
            <Search />
          </i>
        </div>
        {/* all product listing */}
        <div>
          {loading ? (
            <div>
              <Loader className="animate-spin duration-800 transition-transform  text-center  mx-auto" />
            </div>
          ) : (
            <div className=" grid grid-cols-1 gap-4 mt-10 mb-10  sm:grid-cols-2 md:grid-cols-2 md:gap-x-3 lg:grid-cols-4 ">
              {product &&
                product.map((pro, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-lg space-y-2 grid border border-gray-200 rounded-t-lg  pb-4 hover:shadow-xl overflow-hidden group"
                    >
                      <img
                        src={pro.image}
                        alt={pro.name}
                        className="rounded-t-lg object-cover h-80 hover:scale-101 duration-500 transition group-hover:scale-105  w-full"
                      />
                      <h1 className="pl-3 pt-2 text-lg font-playfair capitalize text-primary font-semibold">
                        {pro.name}
                      </h1>
                      <h1 className="pl-3 text-secondary font-playfair">
                        {"Beautifully handcrafted with love."}
                      </h1>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ProductList;
