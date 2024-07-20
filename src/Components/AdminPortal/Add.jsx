import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AddProductService } from '../../services/AddProductService.js';

function Add() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const AddProductService = (data) => {
    // axios.post("http://localhost:8080/addVegetables")
    // };

    return (
        <div id='add'>
            <form
                onSubmit={handleSubmit((data) => {
                    AddProductService(data);
                    toast.success("Product Added.");
                    reset({
                        productType: "",
                        productName: "",
                        productQuantity: "",
                        productQuantityType: "",
                        productActualPrice: "",
                        productDiscountedPrice: "",
                    });
                })}
            >

                <div className="row">
                    <label
                        htmlFor="productType"
                        className="col-form-label col-sm-2">
                        Type
                    </label>
                    <div className="col-sm-3">
                        <select
                            id="productType"
                            name="productType"
                            className="form-select form-select-sm"
                            {...register('productType', { required: true })}
                        >
                            <option value="">
                                Select Type
                            </option>
                            <option value="vegetable">
                                Vegetable
                            </option>
                            <option value="fruit">
                                Fruit
                            </option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <label
                        htmlFor="productName"
                        className="col-form-label col-sm-2">
                        Name
                    </label>

                    <div className="col-sm-3">
                        <input
                            type="text"
                            name="productName"
                            className="form-control form-control-sm"
                            id="productName"
                            placeholder="Enter product name"
                            {...register('productName')}
                        />
                    </div>
                </div>

                <div className="row">
                    <label
                        htmlFor="productQuantity"
                        className="col-form-label col-sm-2">
                        Quantity
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="number"
                            style={{ "text-align": "left" }}
                            name="productQuantity"
                            className="form-control form-control-sm"
                            id="productQuantity"
                            placeholder="Enter product quantity"
                            {...register('productQuantity')}
                        />
                    </div>
                </div>

                <div className="row">
                    <label
                        htmlFor="productQuantityType"
                        className="col-form-label col-sm-2"
                    >
                        Quantity Type
                    </label>
                    <div className="col-sm-3">
                        <select
                            id="productQuantityType"
                            name="productQuantityType"
                            className=" form-select form-select-sm"
                            {...register('productQuantityType', { required: true })}
                        >
                            <option value="">
                                Select Qty
                            </option>
                            <option value="kg">Kilo Gram</option>
                            <option value="pc">Per Item</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="productActualPrice" className="col-form-label col-sm-2">
                        Actual Price
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="number"
                            style={{ "text-align": "left" }}
                            name="productActualPrice"
                            className="form-control form-control-sm"
                            id="productActualPrice"
                            placeholder="Enter product quantity"
                            {...register('productActualPrice')}

                        />
                    </div>
                </div>

                <div className="row">
                    <label
                        htmlFor="productDiscountedPrice"
                        className="col-form-label col-sm-2"
                    >
                        Discounted Price
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="number"
                            style={{ "text-align": "left" }}
                            name="productDiscountedPrice"
                            className="form-control form-control-sm"
                            id="productDiscountedPrice"
                            placeholder="Discounted Price"
                            {...register('productDiscountedPrice')}

                        />
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="productImageName" className="col-form-label col-sm-2">
                        Image/Icon
                    </label>
                    <div className="col-sm-3">
                        <input
                            className="form-control form-control-sm"
                            id="productImageName"
                            type="file"
                            name="productImageName"
                            {...register('productImageName')}

                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-sm btn-success mt-3">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default Add