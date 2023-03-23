import { useState, useEffect } from 'react';

function Add_city(props) {

  // const [addCityName, setAddCityName] = useState("")

  // function handleChange(event) {
  //   setAddCityName(prevList => event.target.value)
  // }
  
  // console.log(addCityName)


  return (
    <div>
      <div className="p-5 text-center  ">
        <form>
          <input
            type="text"
            placeholder="Add a city"
            className="border-2 mr-4 w-1/2 rounded h-10 p-2"
            onChange={props.handleChange}
            value={props.addCityName}
          ></input>
          <button 
          type="submit" 
          className="border-2 h-10 w-10 rounded bg-slate-50 hover:bg-sky-200/50 duration-200" 
          onClick={props.add_new_city}
          >+</button>
        </form>

      </div>

    </div>
  )
}

export default Add_city

