import React from "react";

const NewPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="bg-slate-800 p-10">
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          id="title"
          type="text"
          placeholder="Título"
          className="border border-gray-400 p-2 mb-4 w-full"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          rows={3}
          placeholder="Describe tu tarea"
          className="border border-gray-400 p-2 mb-4 w-full"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewPage;
