

function Form() {
    return (
      <>
      <div class="container flex space-x-4">
      <div class="text-black px-2 py-4 md:p-12 md:mx-6 ">
          <h4 class="text-xl font-semibold mb-6">FEATURE</h4>
          <p class="text-sm w-50 text-black">
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
    </div>
    </>
      
    );
  }
  
  export default Form;