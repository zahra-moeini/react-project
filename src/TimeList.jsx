import item from './Item'

const TimeList=(props)=>{
    console.log(props.children);
    return(
        <div className="main_Time_list">
           {props.children.map((c)=>(
               <item key={Math.random()}> {c} </item>
           ))}
        </div>
    )
}
export default TimeList;