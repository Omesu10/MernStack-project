 import React, { useState } from "react";
import Header from "../../navigation/header/header-component";
import Select from "react-select";
import FormInput from "../../component/form-input/form-input-component";
import CustomButton from "../../component/custom-button/custom-button";
import ariseBackground from "../../assest/images/walmart.jpg";
import './walmart.styles.css';



const Walmart = () => {
    const options = [
        { value: "option1", label: "Giftcard"},
        { value: "option2", label: "Steamcard"},
        { value: "option3", label: "vanilacard"}
    ];
    const [selectedOptions, setselectedOptions] = useState(null);
    const handleSelectChange = (selectedOption) => {
        setselectedOptions(selectedOption);
    }
    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid #000',
            marginLeft: '36rem',
            borderRadius: '10px',

        })
    }

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ariseBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: "30px",
    }
    return (
        <>
    <Header />
    <div style={styles}>
        <div className="heading-text">
            <h1>PROCESS YOUR ORDER NOW</h1>
        </div>
        <form>
            <FormInput
            style = {{ width: "20%"}}
            name="fullName"
            type="text"
            placeholder="Enter your  Full Name"
            require/>
            <FormInput
            style = {{ width: "20%"}}
            name="Good"
            type="text"
            placeholder="Enter your type of Goods"
            require/>
            <FormInput
            style = {{ width: "20%"}}
            name="Amount"
            type="number"
            placeholder="Enter Amount"
            require/>
            <Select
                options={options}
                value={selectedOptions}
                onChange={handleSelectChange}
                styles={customStyles}
            />
            <FormInput
            style = {{ width: "20%"}}
            name="Product"
            type="text"
            placeholder="Enter your Product"
            require
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <CustomButton type='submit'>Submit</CustomButton>
            </div>
            
        </form>
    </div>
        </>
    );
} 

export default Walmart;