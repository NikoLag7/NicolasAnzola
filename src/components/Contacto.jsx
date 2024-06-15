import React, { Component } from 'react'

export class Contacto extends Component {
  render() {
    return (
      <div className=" proyectosPrincipal p-5 flex items-center justify-center">
      <div className="rounded-lg shadow-md w-full max-w-md  ">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-300">Dejame un mensaje</h2>
        <form action="https://formsubmit.co/nicolasanzola200@gmail.com" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-300 font-bold mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full text-slate-300 bg-inherit px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-300 font-bold mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-slate-300 bg-inherit px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-slate-300 font-bold mb-2">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full text-slate-300 bg-inherit px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Ingrese el asunto"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-300 font-bold mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="w-full text-slate-300 bg-inherit px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Ingrese su mensaje"
              rows="5"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default Contacto