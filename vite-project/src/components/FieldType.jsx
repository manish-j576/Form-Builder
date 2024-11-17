
import { useSetRecoilState } from "recoil"
import { fieldType } from "../atoms/Formatom"
import { useRef } from "react"

export function FieldType({type}){
    const setVal = useSetRecoilState(fieldType)
    let selectRef = useRef();
    function collectVal(){
        setVal(selectRef.current.value)
    }

    return <div style={{width:"80%" ,lineHeight:"0px"}}>
        <h4>Select Field Type</h4>
        <select  onChange={collectVal} ref={selectRef} style={{width:"100%", padding:"5px" ,background:"#524F4F"}}>
            <option value="text">Text</option>
            <option value="password">Password</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>

            {/* will have to create checkboxes and when somone will select on the checkboxes another field will appear such that how to add option and if someone want to increase the number of options it will have the ption to do that */}
            {/* <option value="checkbox">Checkboxes</option>
            <option value="radio">Radio</option> */}
        </select>
        
    </div>
}