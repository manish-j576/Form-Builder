import { useRef } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { fieldLabel } from "../atoms/Formatom"

export function FieldLabel(){
    const setVal = useSetRecoilState(fieldLabel)
    let value = useRecoilValue(fieldLabel)
    let inputRef = useRef()
    function handelOnChange(){
        setVal(inputRef.current.value)
        
    }
    return <div style={{width:"80%" ,lineHeight:"0px"}}>
        <h4>Field Label</h4>
        <input onChange={handelOnChange} ref={inputRef} style={{width:"96%", padding:"5px",background:"#524F4F",color:"black"}} type="text" placeholder="Enter Label Name"/>
    </div>
}