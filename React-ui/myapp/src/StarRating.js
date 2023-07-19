// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import styled from "styled-components";
// const StyledDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// let StyledStar1 = styled(FaStar)`
//   color: ${(props) => (props?.color ? props?.color : "grey")};
//   font-size: 85px;
//   cursor: pointer;
// `;
// let StyledStar2 = styled(FaStar)`
//   color: ${(props) => (props?.color ? props?.color : "grey")};
//   font-size: 85px;
//   cursor: pointer;
// `;
// let StyledStar3 = styled(FaStar)`
//   color: ${(props) => (props?.color ? props?.color : "grey")};
//   font-size: 85px;
//   cursor: pointer;
// `;
// let StyledStar4 = styled(FaStar)`
//   color: ${(props) => (props?.color ? props?.color : "grey")};
//   font-size: 85px;
//   cursor: pointer;
// `;
// let StyledStar5 = styled(FaStar)`
//   color: ${(props) => (props?.color ? props?.color : "grey")};
//   font-size: 85px;
//   cursor: pointer;
// `;
// export default function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [arr, setArray] = useState([
//     "#CF0812",
//     "#FAAD14",
//     "#85BA6A",
//     "#1F5404",
//   ]);

//   const handleRating = (rating) => {
//     setRating(rating);
//     console.log(rating);
//     if (rating === 1) {
//       StyledStar1 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#CF0812")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//     }
//     if (rating === 2) {
//       StyledStar2 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#CF0812")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar1 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#CF0812")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//     }
//     if (rating === 3) {
//       StyledStar2 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#FAAD14")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar1 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#FAAD14")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar3 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#FAAD14")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//     }
  
//   if (rating === 4) {
//     StyledStar2 = styled(FaStar)`
//       color: ${(props) => (props?.color ? props?.color : "#85BA6A")};
//       font-size: 85px;
//       cursor: pointer;
//     `;
//     StyledStar1 = styled(FaStar)`
//       color: ${(props) => (props?.color ? props?.color : "#85BA6A")};
//       font-size: 85px;
//       cursor: pointer;
//     `;
//     StyledStar3 = styled(FaStar)`
//       color: ${(props) => (props?.color ? props?.color : "#85BA6A")};
//       font-size: 85px;
//       cursor: pointer;
//     `;
//     StyledStar4 = styled(FaStar)`
//       color: ${(props) => (props?.color ? props?.color : "#85BA6A")};
//       font-size: 85px;
//       cursor: pointer;
//     `;
//   }
//     if (rating === 5) {
//       StyledStar2 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#1F5404")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar1 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#1F5404")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar3 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#1F5404")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar4 = styled(FaStar)`
//         color: ${(props) => (props?.color ? props?.color : "#1F5404")};
//         font-size: 85px;
//         cursor: pointer;
//       `;
//       StyledStar5 = styled(FaStar)`
//       color: ${(props) => (props?.color ? props?.color : "#1F5404")};
//       font-size: 85px;
//       cursor: pointer;
//     `;
//     }
    
//   }
//   return (
//     <div className="App">
//       <StyledDiv>
//         <StyledStar1
//           onClick={() => {
//             handleRating(1);
//           }}
//         />
//         <StyledStar2
//           onClick={() => {
//             handleRating(2);
//           }}
//         />
//         <StyledStar3
//           onClick={() => {
//             handleRating(3);
//           }}
//         />
//         <StyledStar4
//           onClick={() => {
//             handleRating(4);
//           }}
//         />
//         <StyledStar5
//           onClick={() => {
//             handleRating(5);
//           }}
//         />
//       </StyledDiv>
//     </div>
//   );
// }
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledStar = styled(FaStar)`
  color: ${(props) => (props.color ? props.color : "grey")};
  font-size: 85px;
  cursor: pointer;
`;
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);
  };
  return (
    <div className="App">
      <StyledDiv>
        {[1, 2, 3, 4, 5].map((index) => (
          <StyledStar
            key={index}
            color={index <= rating ? getColorByRating(rating) : "grey"}
            onClick={() => handleRating(index)}
          />
        ))}
      </StyledDiv>
    </div>
  );
}
function getColorByRating(rating) {
  const colors = ["#CF0812","#CF0812", "#faad14", "#85ba6a", "#1f5404"];
  return colors[rating - 1];
}







