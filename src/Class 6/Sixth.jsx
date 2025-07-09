import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Sixth = () => {

    let [notification,setNotification]=useState(20);
    let [data,setData]=useState(10);

    let [product,setProduct]=useState([]);

    // Without any dependency: it will re-render on every refresh
    // useEffect(()=>{
    //     document.title=`${notification} Messgaes`
    // })
    
    // With empty array : It will refresh on the first render
    // useEffect(()=>{
    //     document.title=`${notification} Messgaes`

    // },[]);

    // Depends on an object
    // useEffect(()=>{
    //     document.title=`${notification} messages`
    // },[notification])


    // Fetching Api
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products") // promise return , promise handle (then & catch)
        .then((res)=>{ // res return non-readable format
            return res.json(); // to convert this in readable format , .json(promise)
        })
        .then((data)=>{
            setProduct(data);
        })
    },[]);

    console.log(product);

    let display=product.map((el)=>{
        return(
            <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
            {el.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </>
        )
    })
  return (
    <div>
      {/* UseEffect : 3 use case
        Without any dependency
        With Dependency
        with empty array
       */}

       {/* 
        Syntax
        useEffect(callback,dependency)
       */}
{/* 
       <h1>Messages : {notification}</h1>
       <button onClick={()=>{setNotification(notification+1)}}>Increase</button>
       <button onClick={()=>{setNotification(notification-1)}}>Decrease</button>
       <h1>Data:{data}</h1>
       <button onClick={()=>{setData(data-5)}}>Decrease</button> */}
       <h1>DashBoard</h1>
       <div className="row" >
        <div className="col-md-3">
            {display}
        </div>
       </div>
    </div>
  )
}

export default Sixth
