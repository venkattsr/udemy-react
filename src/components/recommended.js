import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";

//recommended
function Recommended(){
    return(
      <div className="recommended">
              <h1 className="recommended__title">Recommended for you</h1>
              <p>Pick the best fit</p>
  
              <div className="recommended__container">
                  <div className="course-card">
                      <img src={c1} alt="Python Data Visualization Masterclass" />
                      <h3>2024 Python Data Visualization Masterclass</h3>
                      <p>Col Steele</p>
                      <p>4.9 ⭐⭐⭐⭐</p>
                      <p>499 <del>2499</del></p>
                  </div>
  
                  <div className="course-card">
                      <img src={c2} alt="Web Development Bootcamp" />
                      <h3>Web Development Bootcamp</h3>
                      <p>Robert Drowney</p>
                      <p>4.5 ⭐⭐⭐⭐</p>
                      <p>999 <del>4499</del></p>
                  </div>
  
                  <div className="course-card">
                      <img src={c3} alt="UI/UX Designing with Figma" />
                      <h3>Master UI/UX Designing with Figma</h3>
                      <p>Arjun Kumar</p>
                      <p>4.7 ⭐⭐⭐⭐</p>
                      <p>1499 <del>4999</del></p>
                  </div>
  
                  <div className="course-card">
                      <img src={c4} alt="Programming in Java" />
                      <h3>Basic to Advance Programming in Java</h3>
                      <p>Steve Jobs</p>
                      <p>3.9 ⭐⭐⭐</p>
                      <p>2049 <del>5499</del></p>
                  </div>
              </div>
          </div>
    )
  }
  export default Recommended;