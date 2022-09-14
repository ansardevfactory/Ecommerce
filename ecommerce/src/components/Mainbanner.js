import light from "./Images/mainbanner_light.png";
import armchair from "./Images/mainbanner_armchair.png";
import "./Mainbanner.css";
export default function Mainbanner() {
  return (
    <>
      <div className="Mainbanner">
        <div className="Mainbanner_left">
          <img src={light}></img>
        </div>
        <div className="Mainbanner_center">
          <div className="Mainbanner_center_l1">
            <label>Best Furniture For Your Castle....</label>
          </div>
          <div className="Mainbanner_center_l2">
            <label>New Furniture Collection </label>
          </div>
          <div className="Mainbanner_center_l3">
            <label>Trends in 2020</label>
          </div>
          <div className="Mainbanner_center_l4">
            <label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing
            </label>
          </div>
          <div className="Mainbanner_center_l5">
            <label>in phasellus non in justo.</label>
          </div>
          <div className="Mainbanner_center_button">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="Mainbanner_right">
          <div className="Mainbanner_right_image1">
            <img src={armchair}></img>
          </div>
        </div>
      </div>
    </>
  );
}
