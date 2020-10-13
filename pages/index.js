import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>¡Hola mundo!</h1>
        <p>Bienvenidos</p>
        <img src="/platzi-logo.png" alt="Platzi logo" />
        <style jsx>
          {`
            h1 {
              color: red;
            }
            p {
              color: green;
            }
            img {
              max-width: 50%;
              display: block;
              margin: 0 auto;
            }
          `}
        </style>
        <style jsx global>
          {`
            body {
              background: white;
            }
          `}
        </style>
      </div>
    )
  }
}
