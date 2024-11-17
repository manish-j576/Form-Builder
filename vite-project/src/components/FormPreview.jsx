import { Form } from "./Form";
import { Heading } from "./Heading";

export function FormPreview(){
    return <div style={{paddingLeft:"35px",width:"60%"}}>
        <Heading data={"Form Preview"}></Heading>
        <Form></Form>
        
    </div>
}