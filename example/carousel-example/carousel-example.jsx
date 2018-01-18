import React from "react";
import Carousel from "../../components/carousel/carousel.jsx";
import Present from "../../app/present/present.jsx";

class CarouselExample extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const carouselArr=[
            {
                url:"./images/carousel1.jpg",
                text:"这是图片1的描述1111这是图片1的描述1111这是图片1的描述1111这是图片1的描述1111这是图片1的描述1111这是图片1的描述1111"
            },
            {
                url:"./images/carousel2.jpg",
                text:"这是图片2的描述2222"
            },
            {
                url:"./images/carousel3.jpg",
                text:"这是图片3的描述3333"
            }
        ];
        return(
            <div>
                <Present title="轮播"/>
                <Carousel
                    carouselArr={carouselArr}
                    intervalTime={1500}
                />
            </div>
        )
    }
}

export default CarouselExample
