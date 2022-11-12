import React, { useContext } from 'react'
import { ThemeContext } from "../../context";

const Frontend = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className='skills__content'>
    <h3 className="skills__title">Frontend developer</h3>
    <div className="skills__box">
    <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Avanzado</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Avanzado</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Typescript</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Styled-components</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Figma</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Avanzado</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Redux</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Avanzado</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Next Js</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Sass</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Material-UI</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Frontend