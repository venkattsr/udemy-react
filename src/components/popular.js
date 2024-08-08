import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import c6 from "../assets/images/c6.jpg";
import c7 from "../assets/images/c7.jpg";
import c8 from "../assets/images/c8.jpg";

//popular
function Popular(){
    return(
      <div class="popular">
          <h1 class="popular__title">Most Popular</h1>
          <p class="popular__subtitle">Pick the best fit</p>
  
          <div class="popular__container">
  
              <div class="course-card">
                  <img src={c5} alt="one"/>
                  <h3>Block Chain Masterclass</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>499 <del>2499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c6} alt="two"/>
                  <h3>Learn to Code From Beginner to Advanced</h3>
                  <p>Robert Drowney</p>
                  <p>4.5 ⭐⭐⭐⭐</p>
                  <p>999 <del>4499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c7} alt="three"/>
                  <h3>Career Development Course</h3>
                  <p>Arjun Kumar</p>
                  <p>4.7 ⭐⭐⭐⭐</p>
                  <p>1499 <del>4999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c8} alt="four"/>
                  <h3>Java Fullstack</h3>
                  <p>Steve Jobs</p>
                  <p>3.9 ⭐⭐⭐</p>
                  <p>2049 <del>5499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c1} alt="five"/>
                  <h3>2024 Python Data Visualization Masterclass </h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>499 <del>2499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c2} alt="six"/>
                  <h3>Web Development Bootcamp </h3>
                  <p>Robert Drowney</p>
                  <p>4.5 ⭐⭐⭐⭐</p>
                  <p>999 <del>4499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c3} alt="seven"/>
                  <h3>Master UI/UX Desinging with Figma</h3>
                  <p>Arjun Kumar</p>
                  <p>4.7 ⭐⭐⭐⭐</p>
                  <p>1499 <del>4999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c4} alt="eight"/>
                  <h3>Basic to Advance Programming in Java</h3>
                  <p>Steve Jobs</p>
                  <p>3.9 ⭐⭐⭐</p>
                  <p>2049 <del>5499</del></p>
              </div>
          </div>
      </div>
      )
  }
  export default Popular