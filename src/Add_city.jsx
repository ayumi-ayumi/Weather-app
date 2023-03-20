import { useState, useEffect } from 'react';

function Add_city() {

  const [addCityName, setAddCityName] = useState("")

  function handleChange(event) {
    setAddCityName(prevList => event.target.value)
  }
  
  console.log(addCityName)


  return (
    <div>
      <div className="m-5 ">
        <form>
          <input
            type="text"
            placeholder="Add a city"
            className="border-2 mr-4"
            onChange={handleChange}
            value={addCityName}
            autofocus
          ></input>
          <button type="submit" className="border-2 p-1">ADD</button>
        </form>
        {addCityName && <p>{addCityName}</p>}

      </div>

    </div>
  )
}

export default Add_city