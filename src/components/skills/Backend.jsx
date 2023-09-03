import React, { useContext } from 'react'
import { ThemeContext } from "../../context";

const Backend = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='skills__content'>
    <h3 className="skills__title">Backend developer</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Node Js</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">PostgreSQL</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Sequelize</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Graphql</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Basico</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Mocha</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Express</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Azure</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Mongoose</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Postman</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Jest</h3>
                    <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="skills__level">Intermedio</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend

