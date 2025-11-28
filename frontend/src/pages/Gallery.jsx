import React from 'react';

export default function Gallery() {
  const images = [
    { id: 1, category: 'Residencial', title: 'Casa en Polanco', location: 'CDMX' },
    { id: 2, category: 'Industrial', title: 'Almacén Logístico', location: 'Estado de México' },
    { id: 3, category: 'Empresarial', title: 'Restaurante', location: 'CDMX' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Galería de Trabajos</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Conoce algunos de nuestros proyectos realizados
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="card">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen {img.id}</span>
              </div>
              <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-2">
                {img.category}
              </span>
              <h3 className="text-xl font-bold mb-1">{img.title}</h3>
              <p className="text-gray-600">{img.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
