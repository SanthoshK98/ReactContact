import { forwardRef } from "react";

const Ref = (props,ref)=>{
    return(
        <input ref={ref} type='text' />
    )
}

export default forwardRef(Ref)