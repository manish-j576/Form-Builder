import { useRecoilValue, useSetRecoilState } from "recoil"
import { fieldLabel, fieldType, formAtom } from "../atoms/Formatom"

export function AddField(){

    const setData = useSetRecoilState(formAtom)
    const value = useRecoilValue(formAtom)
    const Type = useRecoilValue(fieldType)
    const Label = useRecoilValue(fieldLabel)
    function handleOnClick(){
       
        const data = {
            "fieldType":Type,
            "fieldLabel":Label
        }
        setData([...value,data])
        

    }
    return <div style={{marginTop:"35px", width:"80%" , display:"flex" ,justifyContent:"center"}}>
        <button style={{width:"60%", borderRadius:"4px", backgroundColor:"#DADDD8",padding:"10px"}} onClick={handleOnClick}> Add Field</button>
    </div>
}