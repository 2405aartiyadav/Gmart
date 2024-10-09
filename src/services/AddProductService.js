import axios from "axios";
const AddProductService = (data) => {
  const baseUri = import.meta.env.VITE_API_BASE_URL;

    let type = data.productType;
    let url = "";
    switch (type) {
        case 'vegetable':
            url = `${baseUri}/addVegetables`;
            break;
        case 'fruit':
            url = `${baseUri}/addFruit`;
            break;
        default:
            break;

    }
    if (url === "") throw Error("Invalid product type.");
    else{
        axios.post(url,{
            productName: data.productName,
            productQuantity: data.productQuantity,
            productQuantityType: data.productQuantityType,
            productActualPrice: data.productActualPrice,
            productDiscountedPrice: data.productDiscountedPrice,
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

}
export { AddProductService }