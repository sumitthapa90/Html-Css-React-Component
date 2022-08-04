import "./work.css";
import img2 from "../../images/2.jpg";
import img6 from "../../images/6.png";
import img5 from "../../images/5.jpg";

function Work() {
  return (
    <div className="work">
      <div className="grid-container">
        <div className="card">
          <div className="img-container">
            <img src={img2} alt="web-deve" />
          </div>

          <div className="card-info">
            <h3>Web Development</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book..
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="card">
          <div className="img-container">
            <img src={img6} alt="app.deve" />
          </div>

          <div className="card-info">
            <h3>App Development</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="card">
          <div className="img-container">
            <img src={img5} alt="ux-deve" />
          </div>

          <div className="card-info">
            <h3>UX,UI Desine</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
