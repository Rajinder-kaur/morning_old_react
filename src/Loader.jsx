import React from 'react';
import './Loader.css';

const Loader = (props) => {
     
         if(props.loader === true){
             return (
                 <div className="loader_container">
                     <div className="loader"></div>
                 </div>
             );
         }else{
             return null;
         }
}

export default Loader;