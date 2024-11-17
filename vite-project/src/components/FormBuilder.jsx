import { AddField } from "./AddField"
import { FieldLabel } from "./FieldLabel"
import { FieldType } from "./FieldType"
import {Heading} from "./Heading"
export function FormBuilder(){
    return <div style={{width:"45%",padding:"5px",background:"#1C1C1C",height:"100%",paddingBottom:"40px",paddingLeft:"30px",color:"white"}}>
        <Heading data="Form Builder"></Heading>
        <FieldType></FieldType>
        <FieldLabel></FieldLabel>
        <AddField></AddField>
    </div>
}

