import React, { useState } from 'react'
import './rotating-navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faBars,
  faHome,
  faUserAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const ProgressStep = () => {
  const [selected, setSelected] = useState(true)

  const openChangeHandler = () => {
    setSelected(true)
  }

  const closeChangeHandler = () => {
    setSelected(false)
  }

  return (
    <div className="ClassApp">
      <div className="Apps">
        <div className={`containering ${selected ? '' : 'show-nav'}`}>
          {/* <div className="containering show-nav"> */}
          <div className="containering-circled">
            <div className="circled">
              <button onClick={openChangeHandler} id="close">
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button onClick={closeChangeHandler} id="open">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
          <div className="contenting">
            <h1>My Orginal Project</h1>
            <small>Rohit Chauhan</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero tempora alias dolorum sunt minus explicabo,
              eligendi eius suscipit maxime aperiam ipsam? Labore similique
              consequatur dolorum odit sint repellat asperiores nam perferendis
              quasi libero eveniet beatae dolore, enim repudiandae magnam illo
              ab dolorem inventore! Illo ea totam tempora optio exercitationem
              ab minima iusto atque obcaecati praesentium, ipsum architecto
              ratione eius doloribus delectus, repellendus labore tempore!
              Voluptatem, nobis. Facere reiciendis ratione vitae porro cumque
              temporibus, eum facilis nobis recusandae, esse voluptas ex dicta.
              Ullam accusantium nihil aliquam, ex, facilis corrupti repudiandae
              odit corporis quod laboriosam voluptas repellat assumenda
              repellendus, cumque sequi.
            </p>

            <h2>My Project Picture</h2>
            <img
              src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="prject"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              blanditiis deleniti. Quibusdam hic dolores suscipit. Magnam eius
              facilis similique dicta maiores dolor porro impedit. Distinctio
              cum illum exercitationem eveniet numquam laboriosam, modi, hic
              iure ratione magnam sapiente, obcaecati nulla mollitia repudiandae
              libero placeat veritatis repellendus asperiores eius expedita
              corporis maxime!
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} />
              Home
            </li>
            <li>
              <FontAwesomeIcon icon={faUserAlt} />
              About
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              Contect
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ProgressStep
