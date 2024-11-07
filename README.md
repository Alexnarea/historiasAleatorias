- **Habilidades**:

- **Escribir tu primer componente de React**: Crear un componente `Historia` que muestre la historia generada.

import React, { useEffect, useRef } from "react";

interface Props {
  story: string;
}

const Historia: React.FC<Props> = ({ story }) => {
  const storyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.style.transition = "opacity 0.5s ease-in-out";
      storyRef.current.style.opacity = "0"; 
      setTimeout(() => {
        if (storyRef.current) {
          storyRef.current.style.opacity = "1";
        }
      }, 500);
      console.log("Historia actualizada:", story);
    }
  }, [story]);

  return <p ref={storyRef}>{story || "Tu historia aparecerá aquí"}</p>;
};

export default Historia;


**¿Qué hace este fragmento de código?**
Establece que el componente Historia espera recibir una propiedad llamada story que debe ser una cadena de texto (string).
**¿Cómo cumple con el requisito de la habilidad?**
Este es un componente simple de React que utiliza props para recibir información y renderizar una parte de la UI.
**¿Por qué es la mejor forma de implementarlo?**
Este enfoque mantiene el componente flexible y reutilizable. Al pasar la historia como prop, puedes renderizar diferentes historias sin tener que duplicar el código o modificar el componente Historia. Solo necesitas cambiar el valor de story al usarlo.

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

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Generador de Historias</h1>
      <CharacterSelector selected={character} onSelect={setCharacter} />
      <LocationSelector selected={location} onSelect={setLocation} />
      <EventSelector selected={event} onSelect={setEvent} />
      <Historia story={story} />
      <GenerateButton onClick={generateStory} />
    </div>

**¿Qué hace este fragmento?**
Estructura la UI de la página principal usando JSX para combinar HTML y JavaScript.
**¿Cómo cumple la habilidad?**
Organiza la jerarquía de componentes y contenido visual.
**¿Por qué es la mejor forma?**
JSX mejora la legibilidad y facilita la combinación lógica y visual.

 - **Añadir llaves con JSX**: Usar llaves para manejar los diferentes elementos aleatorios de la historia (por ejemplo, personaje, lugar, acción).

{characters.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>

**¿Qué hace este fragmento?**
Usa la propiedad key para identificar cada opción en el selector.
**¿Cómo cumple la habilidad?**
Las llaves aseguran un renderizado eficiente en listas dinámicas.
**¿Por qué es la mejor forma?**
Mejora el rendimiento y evita advertencias en React.

 - **Configurar componentes con props**: Pasar los elementos seleccionados o generados aleatoriamente como props entre los componentes.

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

const LocationSelector: React.FC<Props> = ({ selected, onSelect }) => {
  const locations = ["Castillo encantado", "Bosque oscuro", "Espacio exterior"];

  return (
    <div>
      <h3>Selecciona un lugar</h3>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option disabled>Selecciona un lugar</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;

 - **Renderizar condicionalmente**: Mostrar una historia diferente cada vez que el usuario haga clic en "Generar historia".

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterSelector from "../Components/CharacterSelector";
import LocationSelector from "../Components/LocationSelector";
import EventSelector from "../Components/EventSelector";

const Home: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("Personaje desconocido");
  const [selectedLocation, setSelectedLocation] = useState<string>("Lugar desconocido");
  const [selectedEvent, setSelectedEvent] = useState<string>("Evento inesperado");

  const navigate = useNavigate();

  const handleGenerateClick = () => {
    // Crear una historia basada en las selecciones
    const story = `Un día, ${selectedCharacter} se encontró en ${selectedLocation} cuando ocurrió ${selectedEvent}.`;
    
    // Navegar a la página de historia con la historia generada
    navigate("/story", {
      state: { story },
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Generador de Historias</h1>
      
      <CharacterSelector selected={selectedCharacter} onSelect={setSelectedCharacter} />
      <LocationSelector selected={selectedLocation} onSelect={setSelectedLocation} />
      <EventSelector selected={selectedEvent} onSelect={setSelectedEvent} />
      
      <button onClick={handleGenerateClick}>Generar Historia</button>
    </div>
  );
};

export default Home;

**¿Qué hace este fragmento?**
Al hacer clic en el botón "Generar Historia", crea una historia basada en los valores seleccionados (personaje, ubicación y evento).
**¿Cómo cumple la habilidad?**
En el componente Home, la historia que se va a mostrar en la página StoryPage se genera dinámicamente cada vez que el usuario hace clic en "Generar Historia". Los valores seleccionados por el usuario (personaje, ubicación y evento) se combinan para formar una nueva historia que se renderiza de manera diferente en cada clic.
**¿Por qué es la mejor forma?**
 Usar el hook useState para mantener el estado dentro de los componentes garantiza que la aplicación sea reactiva y eficiente. Los componentes se vuelven más fáciles de manejar al permitir la actualización del estado de manera centralizada y predecible.
- **Renderizar múltiples componentes a la vez**: Renderizar múltiples opciones para los personajes, lugares y eventos de la historia.

<CharacterSelector selected={character} onSelect={setCharacter} />
      <LocationSelector selected={location} onSelect={setLocation} />
      <EventSelector selected={event} onSelect={setEvent} />

**¿Qué hace este fragmento?**
Renderiza selectores para cada elemento de la historia.
**¿Cómo cumple la habilidad?**
Muestra varios componentes independientes en un contenedor.
**¿Por qué es la mejor forma?**
Modulariza la lógica, haciendo que el código sea más mantenible.
 - **Mantener componentes puros**: Asegurarse de que los componentes de historia no modifiquen el estado directamente.
- **Entender la UI como árboles**: Organizar los elementos de la historia, los personajes y los escenarios de manera jerárquica.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterSelector from "../Components/CharacterSelector";
import LocationSelector from "../Components/LocationSelector";
import EventSelector from "../Components/EventSelector";

const Home: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("Personaje desconocido");
  const [selectedLocation, setSelectedLocation] = useState<string>("Lugar desconocido");
  const [selectedEvent, setSelectedEvent] = useState<string>("Evento inesperado");

  const navigate = useNavigate();

  const handleGenerateClick = () => {
    // Generar la historia combinando los valores seleccionados
    const story = `Un día, ${selectedCharacter} se encontró en ${selectedLocation} cuando ocurrió ${selectedEvent}.`;
    
    // Navegar a StoryPage pasando la historia generada
    navigate("/story", { state: { story } });
  };

  return (
    <div>
      <h1>Generador de Historias</h1>
      <CharacterSelector selected={selectedCharacter} onSelect={setSelectedCharacter} />
      <LocationSelector selected={selectedLocation} onSelect={setSelectedLocation} />
      <EventSelector selected={selectedEvent} onSelect={setSelectedEvent} />
      <button onClick={handleGenerateClick}>Generar Historia</button>
    </div>
  );
};

export default Home;

**¿Qué hace este fragmento?**
La interfaz de usuario (UI) se estructura jerárquicamente, similar a un árbol de componentes
**¿Cómo cumple la habilidad?**
Cada componente puede tener hijos, lo que permite organizar la aplicación de manera modular y escalable.
**¿Por qué es la mejor forma?**
 Al organizar los componentes como un árbol, se facilita la reutilización y la extensión de la aplicación, ya que cada componente se puede modificar de manera aislada sin afectar a los demás.
- **Gestionar el estado**: Controlar el estado de los personajes, lugares y eventos generados aleatoriamente.


- **Controlar eventos del usuario**: Capturar eventos para generar una nueva historia aleatoria al hacer clic en un botón.

interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Generar Historia</button>;
};

export default GenerateButton;


**¿Qué hace este fragmento?**
Escucha un clic para generar una historia.
**¿Cómo cumple la habilidad?**
Asocia una función al evento del usuario.
**¿Por qué es la mejor forma?**
Usa el enfoque natural de React para manejar eventos.
- **Gestionar el estado**: Controlar el estado de los personajes, lugares y eventos generados aleatoriamente.

 const [character, setCharacter] = useState<string>("Selecciona un personaje");
  const [location, setLocation] = useState<string>("Selecciona un lugar");
  const [event, setEvent] = useState<string>("Selecciona un evento");
  const [story, setStory] = useState<string>("");

**¿Qué hace este fragmento?**
Define estados iniciales para los elementos de la historia.
**¿Cómo cumple la habilidad?**
Controla el estado de los selectores y la historia generada.
**¿Por qué es la mejor forma?**
Usa hooks nativos de React, simplificando la gestión del estado

- **Actualizar objetos en el estado**: Actualizar el estado de los elementos de la historia cada vez que el usuario haga clic en "Generar historia".

const [selectedCharacter, setSelectedCharacter] = useState<string>("Personaje desconocido");
const [selectedLocation, setSelectedLocation] = useState<string>("Lugar desconocido");
const [selectedEvent, setSelectedEvent] = useState<string>("Evento inesperado");

**¿Qué hace este fragmento?**
Cuando el usuario hace clic en el botón "Generar Historia", el estado actual de los elementos seleccionados se pasa a la página /story usando el hook useNavigate, para que los datos puedan ser utilizados en la página de historia.
**¿Cómo cumple la habilidad?**
En el código, el estado de selectedCharacter, selectedLocation y selectedEvent se actualiza mediante los hooks useState y las funciones onSelect que se pasan como props a los componentes hijos (CharacterSelector, LocationSelector, y EventSelector).
**¿Por qué es la mejor forma?**
Usar el hook useState es una forma sencilla, declarativa y eficiente de manejar el estado dentro de un componente en React. Esto permite que los valores seleccionados estén disponibles para cualquier parte del componente donde se necesiten, asegurando que la UI esté siempre sincronizada con el estado.

- **Levantar el estado**: Compartir el estado entre los diferentes componentes para generar una historia cohesiva.

<CharacterSelector selected={selectedCharacter} onSelect={setSelectedCharacter} />
<LocationSelector selected={selectedLocation} onSelect={setSelectedLocation} />
<EventSelector selected={selectedEvent} onSelect={setSelectedEvent} />

**¿Qué hace este fragmento?**
En el código, los valores de selectedCharacter, selectedLocation y selectedEvent se pasan como props a cada uno de los selectores. Los selectores tienen una función onSelect para actualizar estos valores en el estado del componente Home.
**¿Cómo cumple la habilidad?**
En este caso, el componente Home mantiene el estado de los valores seleccionados y los pasa a los componentes hijos (CharacterSelector, LocationSelector, EventSelector) como props.
**¿Por qué es la mejor forma?**
"Levantar el estado" es una práctica recomendada en React cuando se necesita que varios componentes hijos compartan el mismo estado o cuando el estado debe ser gestionado por un componente superior.

  - **Efectos opcionales**: Usar `useEffect` para animar la transición entre diferentes historias generadas.

import React, { useEffect, useRef } from "react";

interface Props {
  story: string;
}

const Historia: React.FC<Props> = ({ story }) => {
  const storyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.style.transition = "opacity 0.5s ease-in-out";
      storyRef.current.style.opacity = "0"; 
      setTimeout(() => {
        if (storyRef.current) {
          storyRef.current.style.opacity = "1";
        }
      }, 500);
      console.log("Historia actualizada:", story);
    }
  }, [story]);

  return <p ref={storyRef}>{story || "Tu historia aparecerá aquí"}</p>;
};

export default Historia;

**¿Qué hace este fragmento?**
Utiliza un ref (storyRef) para acceder al elemento DOM del párrafo que contiene la historia.
Al detectar un cambio en la prop story (usando useEffect), se establece una animación de transición. Esto hace que el texto de la historia se desvanezca y luego se desvanezca hacia adentro, creando un efecto de aparición suave.
La propiedad opacity del párrafo se ajusta en dos pasos:
Primero, la opacidad se establece en 0 (haciendo que el texto desaparezca).
Luego, después de 500 ms (a través de setTimeout), se vuelve a poner en 1, lo que hace que el texto se muestre con una transición suave.
**¿Cómo cumple la habilidad?**
 El código hace uso de useEffect, que es un hook de React utilizado para realizar efectos secundarios en los componentes. En este caso, useEffect se ejecuta cada vez que cambia la prop story para aplicar una animación de transición.
**¿Por qué es la mejor forma?**
Permite acceder al DOM directamente y modificar estilos sin necesidad de re-renderizar el componente. Esto es ideal para realizar animaciones o transiciones sin afectar el ciclo de vida de React.
