import { useRecoilValue } from "recoil"
import { formAtom } from "../atoms/Formatom"
import { FormItems } from "./FormItems"

export function Form(){
    const data = useRecoilValue(formAtom)
    return <div style={{width:"80%"}}>
        {data.map((item , index)=> <FormItems key={index} item={item}></FormItems>  )}
    </div>
}