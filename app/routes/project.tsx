import { MetaFunction } from "@remix-run/node";
import { createRef, useEffect, useRef } from "react";
import Button from "~/components/ui/button";


export const meta : MetaFunction = ()=>{
    return [
        {
            title : "Project"
        }
    ]
}

export default function Project() {
    const ref = useRef();
    
  

  return (
    <>
      <div className="container">
        
        <Button ref={ref}>Button</Button>

      </div>
    </>
  );
}
