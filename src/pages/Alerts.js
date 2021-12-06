import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../services/firebase";

export default function Alerts() {
  const [pacientes, setPacientes] = useState([]);

  const getPacientes = async () => {
    const querySnapshot = await getDocs(collection(db, "Pacientes"));
    const docs = [];
    querySnapshot.docs.map((doc) => {
      return docs.push({ ...doc.data(), id: doc.id });
    });
    setPacientes(docs);
  };

  useEffect(() => {
    getPacientes();
  }, []);

  console.log(pacientes);
  return (
    <div className="flex"> 
        {pacientes.map((paciente) => {
          return (
            <div key={paciente.id} className="p-3 bg-white jrounded-lg border">
              <h1 className="font-bold text-lg">{paciente.nombre}</h1>
              <div>{paciente.apellido}</div>
              <div className="italic">{paciente.edad}</div>
              <div>Cuarto: {paciente.cuarto}</div>
              <div>{paciente.activo==='true' ? 'Activo': 'Inactivo'}</div>
            </div>
          );
        })}
    </div>
  );
}
