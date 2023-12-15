import React from 'react';
import './home-styles.css';
import Header from '../../navigation/header/header-component';
import Directory from '../../component/directory/directory.component';


const Homepage = () => {
    return (
        <>
        <Header />
        <div className='hompage'>
            <Directory />

        </div>
        </>
    )
}
export default Homepage;