import { FC, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { IProduct } from "../interfaces/product";
import { Favourite } from "../components/Favourite";
import { priceTag } from "../helper/priceTag";

interface IProps {
  productInfo: IProduct;
}

export const Product: FC<IProps> = ({ productInfo }) => {
  const [compareChecked, setCompareChecked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoveredImage =
    "https://images.unsplash.com/photo-1573869908170-64b53a60d8da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const unhoveredImage =
    "https://housing.com/news/wp-content/uploads/2023/01/Wooden-flooring-for-bedroom-Make-your-home-look-richer-01.png";

  const handleCompareChange = () => {
    setCompareChecked(!compareChecked);
  };

  return (
    <div
      className={`p-6 relative border-2 transition duration-300 font-sans ${
        isHovered ? "border-black" : "border-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <Favourite />
        </div>
        <div
          className={`absolute top-0 left-0 p-2 text-white transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgb(65, 100, 110)",
          }}
        >
          Shop by Room
        </div>

        <img
          src={isHovered ? hoveredImage : unhoveredImage}
          alt={productInfo.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <a
          href={`#${productInfo.id}`}
          className={`absolute bottom-0 left-2 p-2 text-white underline text-3xl font-thin transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: 1,
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          Product Details
        </a>
      </div>

      <div>
        <div className="flex justify-between">
          <h2 className="text-xl">{productInfo.title}</h2>
          <h3 className="font-bold text-2xl">{priceTag(productInfo.price)}</h3>
        </div>
        <h3 className="text-gray-500">{productInfo.brand}</h3>
        <div className="flex justify-between">
          <h4>
            <i
              className="pi pi-circle-fill mr-2"
              style={{
                color: productInfo.availability.length > 0 ? "green" : "yellow",
              }}
            />
            {productInfo.availability.length > 0
              ? "Available at"
              : "Not available"}{" "}
            {productInfo.availability[0]}
          </h4>
          <div className="flex items-center">
            <label htmlFor="compare" className="ml-2">
              Compare
            </label>
            <Checkbox
              inputId="compare"
              name="compare"
              value={compareChecked}
              onChange={handleCompareChange}
              checked={compareChecked}
              className="ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
