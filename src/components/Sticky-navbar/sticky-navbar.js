import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sticky-navbar.css'

const StickyNavbar = () => {
  const [selected, setSelected] = useState(false)

  // useEffect(() => {
  window.addEventListener('scroll', fixNav)
  function fixNav() {
    if (window.scrollY > 150) {
      setSelected(!selected)
    } else {
      // nav.classList.remove('active')
      setSelected(selected)
    }
  }
  // }, [])

  return (
    <div className="App-sticky-navbar">
      <div
        // onScroll={scrollChangeHandler}
        className={`nav-sticky-web ${selected ? 'active' : ''}`}
      >
        <div className="container-sticky">
          <h1 className="logo-sticky">
            <Link href="/index.html">My Website</Link>
          </h1>
          <ul>
            <li>
              <Link href="#" className={selected ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Service</Link>
            </li>
            <li>
              <Link href="#">Contect</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-sticky">
        <div className="container-sticky">
          <h1>Welcome to My website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            delectus.
          </p>
        </div>
      </div>

      <section className="container-sticky content-sticky">
        <h2>Content One</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          adipisci assumenda fugit vel laudantium magni animi dolores blanditiis
          officiis ipsam! Voluptatibus, rerum laudantium veniam velit repellat
          fugit natus alias inventore quibusdam. Optio labore maxime inventore
          perspiciatis harum, non ea animi voluptatem magni dolorem quaerat ipsa
          atque doloremque unde ipsam adipisci numquam rerum aut ratione
          repudiandae! Deleniti blanditiis obcaecati iure illo hic porro earum
          consequatur beatae dolorem expedita! Modi voluptas earum harum
          aliquam, deserunt molestias temporibus dignissimos, doloremque vero
          voluptates voluptate sapiente dolorem porro excepturi tempora mollitia
          consequatur alias voluptatum? Excepturi labore nesciunt dolorem neque
          possimus esse, necessitatibus sapiente minima accusantium.
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          adipisci assumenda fugit vel laudantium magni animi dolores blanditiis
          officiis ipsam! Voluptatibus, rerum laudantium veniam velit repellat
          fugit natus alias inventore quibusdam. Optio labore maxime inventore
          perspiciatis harum, non ea animi voluptatem magni dolorem quaerat ipsa
          atque doloremque unde ipsam adipisci numquam rerum aut ratione
          repudiandae! Deleniti blanditiis obcaecati iure illo hic porro earum
          consequatur beatae dolorem expedita! Modi voluptas earum harum
          aliquam, deserunt molestias temporibus dignissimos, doloremque vero
          voluptates voluptate sapiente dolorem porro excepturi tempora mollitia
          consequatur alias voluptatum? Excepturi labore nesciunt dolorem neque
          possimus esse, necessitatibus sapiente minima accusantium.
        </p>
      </section>
    </div>
  )
}

export default StickyNavbar
