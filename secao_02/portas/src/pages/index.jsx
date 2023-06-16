import Porta from "../components/Porta";
import Present from "../components/Presente";

export default function Home() {
  return (
   <div style={{display: 'flex'}}>
    {/* <Present/> */}
    <Porta selecionada />
    <Porta />
   </div>
  )
}
