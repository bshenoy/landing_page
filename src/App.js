// import logo from './logo.svg';
import Buttons from "./components/Buttons";
import './App.css';
import Navbarr from "./components/Navbarr";
import Form from "./components/Form";
import Form1 from "./components/Form1";
import Cardcomp from "./components/Cardcomp";
// import Cardcomp from "./components/Cardcomp";

function App() {
  return (
    <>
    <div className="ml-10 mr-10 mt-1  bg-white h-200">
      <ul className='flex space-x-10 text-white text-inherit justify-center '>
        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-10 pt-0.5 px-3 rounded-2xl"/>
        <li><button><div>blogs</div></button></li>      
        <li><button>newletter</button></li>      
        <li><button>content</button></li>      
        <li><button>contanct</button></li>      
        <li><button>nmore</button></li>      
        <li><button>deatail</button></li>      
       
      </ul>

      <div className="text-white px-30 py-4 md:p-40 md:mx-10">
        {/* <Buttons/> */}
      </div>
      <Form/>
      <Form1/>
      {/* <Cardcomp/> */}
      
      {/* <div className="container flex space-x-4">
        <div className="text-black px-2 py-4 md:p-12 md:mx-6 ">
            <h4 className="text-xl font-semibold mb-6">FEATURE</h4>
            <p className="text-sm w-50 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            </p>
            <div className="flex space-x-2 ">
              <button className=" bg-cyan-500 rounded-full text-black px-2">Learn more</button>
              <button className=" bg-white text-cyan-500 align-middle  px-2 font-sans font-xl">try now</button>
            </div>
          
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=869&amp;q=80"/>
        </div>          
      </div> */}

      
  </div>

    
    

    
      


    {/* <Navbarr/> */}
    {/* <div classNameName='container'>
     </div> */}     
    </>
  );
}

export default App;