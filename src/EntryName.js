import react,{usestate} from "react";
import "./entryName.css";
import { Outlet, Link } from "react-router-dom";



// const [name_player1,setname_player1]=usestate('');
// const [name_player2,setname_player2]=usestate('');

function EntryName({childToParent}) {
  const data = "This is data from Child Component to the Parent Component."

  
  function Submit() {
    let data=prompt("Number of games");
    return data;
    
    
}
  
  
  return (
    
    <div className="details">
      <div className="player1">
        <form>
          <label>
            Player 01{data}
            <br />
            <br />
            <input type="text" name="name" />
          </label>
        </form>
      </div>
      <div className="player2">
        <form>
          <label>
            Player 02
            <br />
            <br />
            <input type="text" name="name" />
          </label>
        </form>
      </div>
      <div className="line"></div>

      <ul>
          <li>
            
            <Link to="/Screen_2"><button className="button" type="submit" onClick={ () => {Submit(); childToParent(data);}}>Start Game</button></Link>
            
          </li>
        </ul>
      
    </div>
  );
}

export default EntryName;
