"use client"
import { useEffect, useState } from "react"

export default function MaintenanceModal() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // Verifica si el modal ya fue cerrado recientemente
        const dismissed = localStorage.getItem("maintenanceModalDismissed")
        if (!dismissed) {
            setOpen(true)
        }
    }, [])

    const handleClose = () => {
        setOpen(false)
        // Marca como cerrado en localStorage
        localStorage.setItem("maintenanceModalDismissed", "true")
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                {/*Titulo*/}
                <h2 className="text-2xl font-bold text-primary mb-4">Sitio en Mantenimiento</h2>
                {/*Descripcion*/}
                <p className="text-gray-700 mb-6">
                    El contenido de esta página aún está en proceso de validación y mantenimiento.<br />
                    Por favor, ten en cuenta que la información puede no estar actualizada o disponible.
                </p>
                {/*Boton - continuar*/}
                <button
                    onClick={handleClose}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow focus:outline-none"
                >
                    Entiendo
                </button>
            </div>
        </div>
    )
}
