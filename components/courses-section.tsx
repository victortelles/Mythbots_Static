"use client"
import type React from "react"
import { useState } from "react"
import { Play, BookOpen, Clock, Users, Mail, Send } from "lucide-react"

export default function CoursesSection() {
  const whatsappNumber = "+3329671436"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de envío de email
    /*
    alert("¡Gracias por tu interés! Te contactaremos cuando los cursos estén disponibles.")
    setFormData({
      name: "",
      email: "",
      course: "",
      message: "",
    })
    */
  }

  const handleWhatsAppSend = () => {
    const courseLabel: Record<string, string> = {
      electronica: "Electrónica Básica",
      arduino: "Arduino Avanzado",
      pcb: "Diseño PCB Pro",
      todos: "Todos los cursos"
    };
    const message = encodeURIComponent(
      `Hola! Quiero información sobre cursos online:\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Curso de interés: ${courseLabel[formData.course] || "No especificado"}\n` +
      `Mensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/*Titulo principal*/}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-tertiary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Play className="h-4 w-4 mr-2" />
            Próximamente
          </div>
          {/*Titulo*/}
          <h2 className="text-4xl font-bold text-primary mb-6">Cursos Online</h2>
          {/*Descripcion*/}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos preparando una plataforma completa de cursos online para que puedas aprender desde casa a tu propio
            ritmo.
          </p>
        </div>

        {/*Cards de cursos*/}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Electrónica Básica</h3>
            <p className="text-gray-600 mb-4">Fundamentos de electrónica, componentes, circuitos y mediciones.</p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              20 horas de contenido
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              Nivel principiante
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
            <BookOpen className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Arduino Avanzado</h3>
            <p className="text-gray-600 mb-4">Programación avanzada, comunicaciones, IoT y proyectos complejos.</p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              35 horas de contenido
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              Nivel intermedio
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-tertiary">
            <BookOpen className="h-12 w-12 text-tertiary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Diseño PCB Pro</h3>
            <p className="text-gray-600 mb-4">Diseño profesional de PCBs, desde esquemáticos hasta fabricación.</p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              40 horas de contenido
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              Nivel avanzado
            </div>
          </div>
        </div>

        {/*Formulario de notificación*/}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 text-tertiary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">¡Sé el primero en saberlo!</h3>
            <p className="text-gray-600">Regístrate para recibir notificaciones cuando lancemos los cursos online.</p>
          </div>

          {/*Formulario*/}
          {/*Formulario*/}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Curso de Interés</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Selecciona un curso</option>
                <option value="electronica">Electrónica Básica</option>
                <option value="arduino">Arduino Avanzado</option>
                <option value="pcb">Diseño PCB Pro</option>
                <option value="todos">Todos los cursos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje (Opcional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="¿Hay algún tema específico que te gustaría que incluyamos?"
              />
            </div>

            <div className="flex flex-col gap-4">
              {/*Boton - email (simulado)*/}
              {/* <button ...> ... </button> */}
              {/*Boton - whatsapp*/}
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-sm hover:shadow-md focus:shadow-md active:scale-[0.98]"
              >
                <Send className="mr-3 h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
