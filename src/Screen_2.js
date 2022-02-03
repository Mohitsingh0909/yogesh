import "./screen_2.css";
import ConnectFour from "./ConnectFour";
import EntryName from "./EntryName";

function Screen_2() {
  return (
    <div className="screen_2">
      <div className="main_box">
        <div className="game_table">
          <ConnectFour/>
           

          {/* <div className="left"></div>
          <div className="center"></div>
          <div className="right"></div> */}
        </div>
        <div className="score_table">
          <div className="game_3">
            3 Games Tournament
          </div>
          <div className="playga">
             Playing Game 1
          </div>
          <div className="details1">
      <div className="player1">
        <form>
          <label>
            Player 01
            <br />
            <br />
            ABC
          </label>
        </form>
      </div>
      <div className="player2">
        <form>
          <label>
            Player 02
            <br />
            <br />
            XYZ
          </label>
        </form>
      </div>
      {/* <div className="line"></div> */}

      

      
    </div>
        
        </div>
      </div>
    </div>
  );
}

export default Screen_2;
