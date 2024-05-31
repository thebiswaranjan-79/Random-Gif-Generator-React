import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {
  return( 
          
          <div className="w-full h-screen flex flex-col ">
              <h1 className="bg-white rounded-sm w-full text-center mt-[40px] font-bold text-4xl uppercase">Random GIFS</h1>

              <div className="flex flex-col justify-center items-center mt-10">
                <Random/>
                <Tag/>
              </div>
          </div>
  );
}
