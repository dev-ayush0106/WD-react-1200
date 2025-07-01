function First(){
    return(
        <h1>This is First Class Of React</h1>
    )
}

function Firstone(){
    return(
        <h2>This is second component in first file</h2>
    )
}

function FirstTwo(){
    return(
        <h2>This is third component is first file</h2>
    )
}

function Detail(){
    let name="Ayush";
    let city="GZB"

    let data1={
        name:"Saurbh",
        age:21,
        city:"Gwalior"
    }

    let data=["Nikhil",20,"Hisar"]
    return(
        <>
        {/* <h1>Hii my name is {name} and I live in {city}</h1>
<h1>{`Hii my name is ${name} and I live in ${city}`}</h1> */}

        {/* <h1>Hii my name is {data1.name}</h1>
        <h1>Hii my age is {data1.age}</h1>
        <h1>Hii I stay in {data1.city}</h1> */}

        <h1>Hii my name is {data[0]}</h1>
        <h1>Hii my age is {data[1]}</h1>
        <h1>Hii I stay in {data[2]}</h1>
        
        </>
    )
}

export default First;
export {Firstone,FirstTwo,Detail}