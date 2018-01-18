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
                <Present title="轮播"
                         introduce={[
                             "1、可设置轮播速度",
                             "2、移入停止轮播，移除继续轮播",
                             "3、可点击圆点切换轮播"
                         ]}
                />
                <Carousel
                    carouselArr={carouselArr}
                    intervalTime={2000}
                />
            </div>
        )
    }
}

export default CarouselExample
