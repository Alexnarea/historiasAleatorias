- **Habilidades**:

- **Escribir tu primer componente de React**: Crear un componente `Historia` que muestre la historia generada.

import React from "react";

interface Props {

  character: string;
  
  location: string;
  
  event: string;
  
}

const Historia: React.FC<Props> = ({ character, location, event }) => {

  return (
  
    <div>
      <h3>Historia Generada</h3>
      <p>
        {`Había una vez un ${character} que estaba en ${location} y de repente ${event}.`}
      </p>
    </div>
    
  );
  
};

export default Historia;

**¿Qué hace este fragmento de código?**
Muestra una historia basada en los valores actuales de character, location y event.

**¿Cómo cumple con el requisito de la habilidad?**
Este es un componente simple de React que utiliza props para recibir información y renderizar una parte de la UI.

**¿Por qué es la mejor forma de implementarlo?**
Este diseño separa la lógica y la presentación. Además, utiliza TypeScript para garantizar que los datos proporcionados tengan el tipo correcto.


 - **Crear archivos con múltiples componentes**: Crear componentes para seleccionar los personajes, escenarios y eventos.


├── components/
│   ├── CharacterSelector.tsx
│   ├── LocationSelector.tsx
│   ├── EventSelector.tsx
│   ├── Historia.tsx
│   └── GenerateButton.tsx 

**¿Qué hace este fragmento de código?**
Divide cada funcionalidad en su propio archivo dentro de la carpeta components.

**¿Cómo cumple con el requisito de la habilidad?**
Cada archivo contiene un único componente, lo que promueve la reutilización, modularidad y mantenibilidad del código.

**¿Por qué es la mejor forma de implementarlo?**
Mantiene el proyecto limpio y organizado, facilitando futuras modificaciones o adiciones.


    - **Añadir marcado a JavaScript con JSX**: Usar JSX para estructurar los diferentes elementos de la historia.
    - **Añadir llaves con JSX**: Usar llaves para manejar los diferentes elementos aleatorios de la historia (por ejemplo, personaje, lugar, acción).
    - **Configurar componentes con props**: Pasar los elementos seleccionados o generados aleatoriamente como props entre los componentes.
    - **Renderizar condicionalmente**: Mostrar una historia diferente cada vez que el usuario haga clic en "Generar historia".
    - **Renderizar múltiples componentes a la vez**: Renderizar múltiples opciones para los personajes, lugares y eventos de la historia.
    - **Mantener componentes puros**: Asegurarse de que los componentes de historia no modifiquen el estado directamente.
    - **Entender la UI como árboles**: Organizar los elementos de la historia, los personajes y los escenarios de manera jerárquica.
    - **Controlar eventos del usuario**: Capturar eventos para generar una nueva historia aleatoria al hacer clic en un botón.
    - **Gestionar el estado**: Controlar el estado de los personajes, lugares y eventos generados aleatoriamente.
    - **Actualizar objetos en el estado**: Actualizar el estado de los elementos de la historia cada vez que el usuario haga clic en "Generar historia".
    - **Levantar el estado**: Compartir el estado entre los diferentes componentes para generar una historia cohesiva.
    - **Efectos opcionales**: Usar `useEffect` para animar la transición entre diferentes historias generadas.
