import React from "react";
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Development = () => {

    const style2 = {fontSize: '3rem'};
    const style3 = {textAlign:'center'};
    const style1 = {fontWight:'Bold'};

    return (
<>
<h1 style={{...style1,...style2 , ...style3}}>Curated Collections</h1>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist"><Icon icon="pepicons:heart" /></span>
                                    </div>
                                </div>

                                <img src="https://cdn-images.gehnaindia.com/curated_collections/banner_images/000/000/003/original/Hoop_Earring.png?1677770368" class="img-fluid rounded thumbnail-image" />

                            </div>

                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">Meenakari Earrings</h5>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">$6.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div class="color-select d-flex ">
                                        <input type="button" name="grey" class="btn red ml-2" />
 
                                        <input type="button" name="red" class="btn red ml-2" />
                                        <input type="button" name="blue" class="btn blue ml-2" />
{/* 
<button type="button" class="btn btn-primary   rating_button  ">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button> */}
                                    </div>

                                    <div class="d-flex ">

                                        <span class="item-size mr-2 btn" type="button">S</span>
                                        <span class="item-size mr-2 btn" type="button">M</span>
                                        <span class="item-size btn" type="button">L</span>

                                    </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                    <Icon icon="streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star" />
                                        <span class="rating-number">4.8</span>
                                    </div>

                                    <span class="buy">BUY +</span>

                                </div>

                            </div>

                        </div>


                        <div class="mt-3">
                            <div class="card voutchers">
                                <div class="voutcher-divider">
                                    <div class="voutcher-left text-center">
                                        <span class="voutcher-name">Monday Happy</span>
                                        <h5 class="voutcher-code">#MONHPY</h5>

                                    </div>
                                    <div class="voutcher-right text-center border-left">
                                        <h5 class="discount-percent">20%</h5>
                                        <span class="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">

                            <div class="image-container">

                                <div class="first">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist"><Icon icon="pepicons:heart" /></span>

                                    </div>
                                </div>

                                <img src="https://cdn-images.gehnaindia.com/curated_collections/banner_images/000/000/001/original/Filigree_Collection.png?1677770165" class="img-fluid rounded thumbnail-image" />

                            </div>

                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">Hoop Earrings</h5>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">$3.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div class="color-select d-flex ">
                                        <input type="button" name="grey" class="btn creme" />

                                        <input type="button" name="darkblue" class="btn darkblue ml-2" />

                                    </div>

                                    <div class="d-flex ">

                                        <span class="item-size mr-2 btn" type="button">S</span>
                                        <span class="item-size mr-2 btn" type="button">M</span>
                                        <span class="item-size btn" type="button">L</span>

                                    </div>

                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                    <Icon icon="streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star" />
                                        <span class="rating-number">4.8</span>
                                    </div>

                                    <span class="buy">BUY +</span>

                                </div>

                            </div>

                        </div>

                        <div class="mt-3">
                            <div class="card voutchers">

                                <div class="voutcher-divider">

                                    <div class="voutcher-left text-center">
                                        <span class="voutcher-name">Payday Surprise</span>
                                        <h5 class="voutcher-code">#SRPSPYDY</h5>

                                    </div>
                                    <div class="voutcher-right text-center border-left">
                                        <h5 class="discount-percent">20%</h5>
                                        <span class="off">Off</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist"><Icon icon="pepicons:heart" /></span>
                                    </div>
                                </div>
                                <img src="https://cdn-images.gehnaindia.com/curated_collections/banner_images/000/000/002/original/Meenkari_Collection.png?1677770306" class="img-fluid rounded thumbnail-image"/>

                            </div>

                            <div class="product-detail-container p-2">

                                <div class="d-flex justify-content-between ">

                                    <h5 class="dress-name">Filigree Jewellery</h5>

                                    <div class="d-flex flex-column mb-2">

                                        <span class="new-price">$3.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>

                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-1">

                                    <div class="color-select d-flex ">

                                        <input type="button" name="grey" class="btn creme ml-2"/>
                                            <input type="button" name="yellow" class="btn yellow ml-2"/>
                                                <input type="button" name="blue" class="btn blue ml-2"/>

                                                </div>

                                                <div class="d-flex ">

                                                    <span class="item-size mr-2 btn" type="button">S</span>
                                                    <span class="item-size mr-2 btn" type="button">M</span>
                                                    <span class="item-size btn" type="button">L</span>

                                                </div>

                                            </div>

                                            <div class="d-flex justify-content-between align-items-center pt-1">
                                                <div>
                                                <Icon icon="streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star" />
                                                    <span class="rating-number">4.2</span>
                                                </div>
                                                <span class="buy">BUY +</span>
                                            </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="card voutchers">

                                        <div class="voutcher-divider">

                                            <div class="voutcher-left text-center">
                                                <span class="voutcher-name">First order</span>
                                                <h5 class="voutcher-code">#HPYFRST</h5>

                                            </div>
                                            <div class="voutcher-right text-center border-left">
                                                <h5 class="discount-percent">20%</h5>
                                                <span class="off">Off</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card">
                                    <div class="image-container">
                                        <div class="first">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="discount">-25%</span>
                                                <span class="wishlist"><Icon icon="pepicons:heart" /></span>
                                            </div>
                                        </div>

                                        <img src="https://cdn-images.gehnaindia.com/curated_collections/banner_images/000/000/001/original/Filigree_Collection.png?1677770165" class="img-fluid rounded thumbnail-image"/>
                                    </div>

                                    <div class="product-detail-container p-2">

                                        <div class="d-flex justify-content-between ">

                                            <h5 class="dress-name">Athens skirt </h5>

                                            <div class="d-flex flex-column mb-2">

                                                <span class="new-price">$3.99</span>
                                                <small class="old-price text-right">$5.99</small>
                                            </div>

                                        </div>


                                        <div class="d-flex justify-content-between align-items-center pt-1">

                                            <div class="color-select d-flex ">

                                                <input type="button" name="grey" class="btn creme"/>
                                                    <input type="button" name="red" class="btn red ml-2"/>
                                                        <input type="button" name="blue" class="btn blue ml-2"/>

                                                        </div>

                                                        <div class="d-flex ">

                                                            <span class="item-size mr-2 btn" type="button">S</span>
                                                            <span class="item-size mr-2 btn" type="button">M</span>
                                                            <span class="item-size btn" type="button">L</span>

                                                        </div>
                                                    </div>

                                                    <div class="d-flex justify-content-between align-items-center pt-1">
                                                        <div>
                                                        <Icon icon="streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star" />
                                                            <span class="rating-number">3.8</span>
                                                        </div>

                                                        <span class="buy">BUY +</span>

                                                    </div>
                                            </div>

                                        </div>

                                        <div class="mt-3">
                                            <div class="card voutchers">

                                                <div class="voutcher-divider">

                                                    <div class="voutcher-left text-center">
                                                        <span class="voutcher-name">Vegetarian Food</span>
                                                        <h5 class="voutcher-code">#VEGANLOVE</h5>

                                                    </div>
                                                    <div class="voutcher-right text-center border-left">
                                                        <h5 class="discount-percent">20%</h5>
                                                        <span class="off">Off</span>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>


                        )





}

                        export default Development;