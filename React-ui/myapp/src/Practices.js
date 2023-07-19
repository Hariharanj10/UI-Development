import { useState } from "react"
import styled from './styled-components'
const StyledDiv=styled.div`
    display:flex;
    width:100;
`
const header =()=>{
    const [list,setList]=useState([
        {"name":"javascript",id:1,price:600},
        {"name":"java",id:1,price:600},
        {"name":"python",id:1,price:600},
        {"name":"reactjs",id:1,price:600}
    ])
    return(
        <StyledButton>
            
        </StyledButton>
    );
}