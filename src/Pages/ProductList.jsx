import { Search } from "lucide-react";

function ProductList() {
  return (
    <>
      <div className=" mt-6 ">
        <h1 className="font-playfair text-primary text-xl text-center font-medium leading-relaxed py-3 italic">
          Personalized Handcrafted Gift Gallery
        </h1>

        <p className="font-playfair text-justify text-gray-600 mt-2 mx-2">
          Discover a curated collection of customized wooden engravings and
          photo frames
        </p>

        <div className=" py-3 mx-3 flex items-center justify-end">
          <input
            type="text"
            placeholder="search for gifts (e.g.,Wooden Art,Frames...)"
            className="border w-33 py-2 px-3 rounded-l-lg border-r-0 border-gray-400 placeholder:truncategt"
          />
          <i className="border border-l-0 text-primary py-2 pr-2 border-gray-400 rounded-r-lg">
            <Search />
          </i>
        </div>
      </div>
    </>
  );
}
export default ProductList;
