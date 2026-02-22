import { Search } from "lucide-react";

function ProductList() {
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

        <div>
            
        </div>
      </div>
    </>
  );
}
export default ProductList;
