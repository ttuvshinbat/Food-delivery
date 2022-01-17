import React, { useEffect } from 'react';
import { useState } from 'react';
import googlemaps from '../img/maps.jpeg'
import '../css/delivery.css';
import DeliveryZone from './Map';

//conflict tei holbootoi aldaa zasahiin tuld end xomment bichij bn
const Delivery = () => {
    const [house, setData] = useState([])

    useEffect(() => {
        const houseData = async () => {
            await fetch("../data/delivery.json")
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(house)
                })
        }
        houseData()
    }, [])
    let sliced16 = house.slice(0, 17)
    let sliced5 = house.slice(0, 5)


    return (

        <div className='d-flex flex-column'>
           
            <div className='container order-1 row mx-auto '>
                <p className='mobileOff borderLeft px-3 my-2 py-1 me-4 ms-2 fw-bold'>Хүргэлтийн бүс дэх хаягууд</p>
                <div id='delivery-1' className='bg-white d-block d-md-none radius py-2 my-3 px-4'>
                    <h3 className='my-3 borderLeft px-3 '>"А" бүс</h3>
                    {sliced5.map(data => {
                        return (
                            <div className='d-flex align-items-center colororange' id='flex-dir'>
                                <div className='text-center my-3 py-3 me-4' id="text-cent">
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                    </svg>
                                </div>
                                <div id="text-1">{data.house}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='col-lg-6 '>
                    <div id='delivery-1' className='  bg-white d-none d-md-block radius  py-3 my-3 px-1'>
                        <div className="row align-items-center">
                            <div className="col-4">
                                <p className='my-3 borderLeft ms-4 px-3 px-lg-2 px-xl-3'>"А" бүс</p>
                            </div>
                            <div className="col-8">
                                <div className="row ">
                                    <div className='col-6'>
                                        {sliced16.map(data => {
                                            return (
                                                <div className='d-flex align-items-center colororange' id='flex-dir'>
                                                    <div className='text-center my-1 py-3 me-4 svgNone' id="text-cent">
                                                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                                        </svg>
                                                    </div>
                                                    <div id="text-1" className='my-1 py-2 me-3'>{data.house}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='col-6'>
                                        {sliced16.map(data => {
                                            return (
                                                <div className='d-flex align-items-center colororange' id='flex-dir'>
                                                    <div className='text-center my-1 py-3 me-4 svgNone' id="text-cent">
                                                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                                        </svg>
                                                    </div>
                                                    <div id="text-1" className='my-1 py-2 me-3'>{data.house}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='delivery-1' className='bg-white d-block d-md-none radius py-2 my-3 px-4'>
                    <h3 className='my-3 borderLeft px-3'>"Б" бүс</h3>
                    {sliced5.map(data => {
                        return (
                            <div className='d-flex align-items-center colororange' id='flex-dir'>
                                <div className='text-center my-3 py-3 me-4' id="text-cent">
                                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                    </svg>
                                </div>
                                <div id="text-1">{data.house}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-lg-6">
                    <div id='delivery-1' className='bg-white d-none d-md-block radius py-3 my-3 px-1 '>

                        <div className="row align-items-center">
                            <div className="col-4">
                                <p className='my-3 borderLeft ms-4 px-3 px-lg-2 px-xl-3'>"Б" бүс</p>
                            </div>
                            <div className="col-8">
                                <div className="row ">
                                    <div className='col-6'>
                                        {sliced16.map(data => {
                                            return (
                                                <div className='d-flex align-items-center colororange' id='flex-dir'>
                                                    <div className='text-center my-1 py-3 me-4 svgNone' id="text-cent">
                                                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                                        </svg>
                                                    </div>
                                                    <div id="text-1" className='my-1 py-2 me-3'>{data.house}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='col-6'>
                                        {sliced16.map(data => {
                                            return (
                                                <div className='d-flex align-items-center colororange' id='flex-dir'>
                                                    <div className='text-center my-1 py-3 me-4 svgNone' id="text-cent">
                                                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 3.47168C5.63672 3.47168 4.125 5.01855 4.125 6.84668C4.125 8.70996 5.63672 10.2217 7.5 10.2217C9.32812 10.2217 10.875 8.70996 10.875 6.84668C10.875 5.01855 9.32812 3.47168 7.5 3.47168ZM7.5 9.09668C6.23438 9.09668 5.25 8.1123 5.25 6.84668C5.25 5.61621 6.23438 4.59668 7.5 4.59668C8.73047 4.59668 9.75 5.61621 9.75 6.84668C9.75 8.1123 8.73047 9.09668 7.5 9.09668ZM7.5 0.0966797C3.73828 0.0966797 0.75 3.12012 0.75 6.84668C0.75 9.58887 1.66406 10.3623 6.79688 17.7451C7.11328 18.2373 7.85156 18.2373 8.16797 17.7451C13.3008 10.3623 14.25 9.58887 14.25 6.84668C14.25 3.12012 11.2266 0.0966797 7.5 0.0966797ZM7.5 16.7607C2.57812 9.69434 1.875 9.13184 1.875 6.84668C1.875 5.37012 2.4375 3.96387 3.49219 2.87402C4.58203 1.81934 5.98828 1.22168 7.5 1.22168C8.97656 1.22168 10.3828 1.81934 11.4727 2.87402C12.5273 3.96387 13.125 5.37012 13.125 6.84668C13.125 9.13184 12.3867 9.69434 7.5 16.7607Z" fill="#F17228" />
                                                        </svg>
                                                    </div>
                                                    <div id="text-1" className='my-1 py-2 me-3'>{data.house}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="map" className='col-12 d-none container d-lg-block my-5 order-0'>
            <DeliveryZone />
            </div>
            <div id="map" className='col-12 d-block  d-md-none my-5 order-2'>
            <DeliveryZone />
            </div>
            <div id="map" className='col-12 d-none d-md-block d-lg-none my-5 order-0'>
            <DeliveryZone />
            </div>
          
        </div>

    )
}
export default Delivery;