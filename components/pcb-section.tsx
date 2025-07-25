"use client"
import type React from "react"
import { useState } from "react"

import { CircuitBoardIcon as Circuit, CheckCircle, Send } from "lucide-react"

// Array de beneficios PCB
const pcbBenefits = [
  {
    title: "Diseño Profesional",
    desc: "Esquemáticos y layouts optimizados"
  },
  {
    title: "Simulación",
    desc: "Validación antes de fabricar"
  },
  {
    title: "Fabricación",
    desc: "PCBs de alta calidad"
  },
  {
    title: "Ensamblaje",
    desc: "Soldadura de componentes"
  }
];

export default function PCBSection() {
  const whatsappNumber = "+3329671436" // Cambia por el número real
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    description: "",
    complexity: "basico",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envío de email
    alert("Formulario enviado correctamente. Te contactaremos pronto!")
    setFormData({
      name: "",
      email: "",
      project: "",
      description: "",
      complexity: "basico",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppSend = () => {
    const message = encodeURIComponent(
      `Hola! Solicito cotización PCB:\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Proyecto: ${formData.project}\n` +
      `Complejidad: ${formData.complexity}\n` +
      `Descripción: ${formData.description}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="pcb" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Diseño y Fabricación PCB</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde prototipos simples hasta circuitos complejos. Ofrecemos diseño, simulación y fabricación de tarjetas
            PCB profesionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://www.ablcircuits.co.uk/wp-content/uploads/2020/10/PCB-Design-CAD-.png"
              alt="Diseño PCB profesional"
              className="rounded-2xl shadow-lg mb-8"
            />

            <div className="grid grid-cols-2 gap-6">
              {pcbBenefits.map((benefit) => (
                <div className="flex items-start space-x-3" key={benefit.title}>
                  <CheckCircle className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Circuit className="h-8 w-8 text-tertiary mr-3" />
              <h3 className="text-2xl font-bold text-primary">Solicita tu Cotización</h3>
            </div>

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
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Proyecto *</label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Complejidad</label>
                <select
                  name="complexity"
                  value={formData.complexity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="basico">Básico (1-2 capas)</option>
                  <option value="intermedio">Intermedio (4 capas)</option>
                  <option value="avanzado">Avanzado (6+ capas)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Proyecto *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe tu proyecto, funcionalidades requeridas, cantidad, etc."
                />
              </div>

              <div className="flex flex-col gap-4">
                {/*En un futuro implementar el Email*/}
                {/*
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Enviar Solicitud
                </button>
                */}
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
      </div>
    </section>
  )
}
