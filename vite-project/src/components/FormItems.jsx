

 export function FormItems({item ,index}){
   
    let placeholder = "Enter " + item.fieldLabel
        return <div style={{lineHeight:"0px" ,width:"100%"}}>
        <h4>{item.fieldLabel}</h4>
<input style={{padding:"2px",paddingLeft:"5px", height:"25px", width:"80%"}} type={item.fieldType} placeholder={placeholder}/>
    </div>
 }