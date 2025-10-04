
export default function ContadorCompartilhado (props){

   function clique(){
    props.setCount(props.count + 1);
   }
    return(
        <>
        <button onClick={clique}>
            ContadorCompartilhado: {props.count}
        </button>
        </>
    )
}