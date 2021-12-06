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
            <div key={paciente.id} className="p-3 bg-white justify-around">
              <div className="text-center space-y-2 sm:text-left space-x-2">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {paciente.nombre}
                  </p>
                  <p className="text-gray-500 font-medium">{paciente.edad}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
