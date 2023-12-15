import React, { useState, useEffect } from "react";
import "./product.styles.css";
import CustomButton from "../../component/custom-button/custom-button";
import FormInput from "../../component/form-input/form-input-component";
import { BASE_URL } from "../../config";
import axios from 'axios';
import Sidebar from "../../navigation/sidebar/sidebar-component";


const Product = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        //fetch data from the API end point using axios
        axios.get(`${BASE_URL}/walmart`)
        .then((response) =>{
            //assuming the data is in the data property of response
            setData(response.data); //updating the state with recieved data
        })
        .catch((error) => {
            console.error("Error fetching:", error);
        })
    }, [])
    return (
        <>
        <div className="web-page p-0">
            <div className="col-3 p-0">
                <Sidebar/>
            </div>
            <div className="right-view">
            <div>
                <h3 className="text-center text-dark mt-5 text-lg">Our Product</h3>
            </div>
            <div className="flex justify-evenly">
                    <div>
                        <FormInput
                            name="search"
                            type="search"
                            style={{
                                border: "1px solid red",
                                height: "30px",
                                textAlign: "left",
                                padding: "8px"
                            }}
                            placeholder="Search for card"
                            required
                        />
                    </div>
                    <div>
                        <CustomButton
                        style={{
                            height:"30px",
                            padding:"5px",
                            margin: "20px",
                            fontSize: "10px",
                            backgroundColor: "teal",
                        }}
                        >
                            Create a new Product
                        </CustomButton>
                    </div>
                </div>
                <div id="tableDiv">
                    <table className="table">
                        <thead>
                            <tr className="head">
                                {/*<th scope="col">S/N</th>*/}
                                <th scope="col">Full Name</th>
                                <th scope="col">Goods</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Cards</th>
                                <th scope="col">Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td>{item.fullName}</td>
                                    <td>{item.goods}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cards}</td>
                                    <td>{item.products}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
 
 
        </>
    );
}

export default Product;