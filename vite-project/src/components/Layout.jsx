import {FormBuilder} from './FormBuilder'
import { FormPreview } from './FormPreview'

export function Layout(){
    return <div style={{display:"flex" ,height:"91vh"}}>
       <FormBuilder></FormBuilder>
       <FormPreview></FormPreview>
    </div>
}


