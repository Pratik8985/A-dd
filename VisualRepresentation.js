// import react from 'react'
// import Bar from './Bar'
// // import './VisualRepresentation.css'
//  const VisualRepresentation =({first})=>
// {
//     const root=document.getElementById("root")
//   let container = document.createElement("div");
//   container.className = "container";
//   let id11 = 0;
//   let newIdForDelete=1;



//   const remainder = first % 10;
//   // console.log("remainder", remainder);
//   const rounded = (Math.floor(first / 10) * 10) / 10;
//   // console.log("rounded", rounded);
//   if (remainder) {
//     for (let i = 1; i <= remainder; i++) {
//       newIdForDelete=i
//       let div = document.createElement("div");
//       div.key={i}
//       div.className = "square deleteClass" +newIdForDelete ;
//       div.id = "squareId" + id11++;
//       // div.id=newIdForDelete;
//       container.appendChild(div);

//       root.appendChild(container);
//     }
//   }
//   let id12 = 0;
//   if (rounded >= 1) {
//     for (let i = 1; i <= rounded; i++) {
//       let rectangle = document.createElement("div");
//       rectangle.className = "rectangle";
//       rectangle.id = "rectangleId" + id12++;
//       container.appendChild(rectangle);
//       root.appendChild(container);
//     }
//   }

 

//     return(
       
//         <Bar className= 'container'>
           
            
//         </Bar>
//     )
// }
// export default VisualRepresentation;