import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First, { Detail, Firstone,FirstTwo } from './Class 1/First';
import Second from './Class 2/SEcond'
import Product from './Class 2/Product'
import Third from './Class 3/Third';
import ThirdOne from './Class 3/ThirdOne';
import Fourth from './Class 4/Fourth';
import FormHandle from './Class 4/FormHandle';

function App() {
  let name="Ayush";
  let age=24;
  let city="Gur";
  let company="DUCAT";

  let specs=["Asus ROG","12GB","256GB","SnapDragon"];
  let specs1=["Google Pixel","12GB","128GB","Tensor"];
  let specs2=["Iphone 16","12GB","1TB","IOS 17"];
  let specs3=["Nokia 3310","None","None","Strong"];

  let productDetail1={
    name:"Mixer Grinder",
    price:12000
  }
  let productDetail2={
    name:"Hair Dryer",
    price:2000
  }
  let productDetail3={
    name:"Air Fryer",
    price:10000
  }
  return (
    <>
    {/* Class 1 */}
      {/* <h1>Hello</h1>
      <First/>
      <Firstone/>
      <FirstTwo/>
      <Detail/> */}

    {/* Class 2 */}
      {/* <Second value={name} value1={age} value2={city} value3={company}/> */}
      {/* <Second detail={specs}/>
      <Second detail={specs1}/>
      <Second detail={specs2}/>
      <Second detail={specs3}/> */}

      {/* <Product detail={productDetail1}/>
      <Product detail={productDetail2}/>
      <Product detail={productDetail3}/> */}

      {/* Class 3 */}
      {/* <Third/> */}
      {/* <ThirdOne/> */}

      {/* Class 4 */}
      {/* <Fourth/> */}
      <FormHandle/>
    </>
  )
}

export default App
