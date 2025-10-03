 export default function Contador (){
   let count = 0;

   function clique(){
    count++;
    console.log(count);
   }
    return(
        <>
        <label>Contador</label>
        <br />
        <button onClick={clique}>
            Contagem: {count}
        </button>
        </>
    )
}