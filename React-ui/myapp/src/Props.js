import { useState } from "react";
import styled from "styled-components";
const StyledDiv =styled.div`
    width:100%;
    height:100%;
    background-color:whitesmoke;
`
const StyledBlock =styled.div`
    width:100%;
    background-color:orange;
`
const Home=()=>{
    const datas =[
        {name:"ps",author:"sss" ,id:1},
        {name:"ss",author:"vss",id:2},
        {name:"rs",author:"tss",id:3},
        {name:"ks",author:"mss",id:4}
    ]
    const [arr,setArr] =useState([...datas])
    const handleDelete =(index)=>{
        console.log(index.id)
        setArr(arr.filter((arr)=>arr.id !== index.id))
    }
    return(
        <StyledDiv>
            {
                arr.map((data) => (
                    <StyledBlock key={data.id}>
                        <h1>{data.name}</h1>
                        <button onClick={()=>{handleDelete(data)}}>Delete</button>
                    </StyledBlock>
                ))
            }
        </StyledDiv>
    );
}
export default Home;