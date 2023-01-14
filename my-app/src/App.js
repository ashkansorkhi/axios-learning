import React, { useEffect } from "react";
import axios from "axios";
import CollapsedBreadcrumbs from "./navBar";
function App() {
  useEffect(
    axios(
      {
        method:"get",
        url:'https://fakestoreapi.com/products',
      }
    )
    .then(response=>{
      console.log(response.data)
    },[])

  )
  return (
    <div >
<CollapsedBreadcrumbs/>
      
    </div>
  );
}

export default App;
