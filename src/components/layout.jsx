import React from 'react'

import { BrowserRouter , Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Routess from "../router/Routess";
import ProductViewModal from './ProductViewModal';
const layout = () => {
  return (
        <BrowserRouter>
                <div>
                    <Header />
                    <div className="container">
                        <div className="main">
                            <Routess/>
                        </div>
                    </div>
                    <Footer/>
                    <ProductViewModal />
                </div>

        </BrowserRouter>
  )
}

export default layout
