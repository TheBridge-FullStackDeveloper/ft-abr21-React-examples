import { useState, useEffect } from 'react';
import axios from 'axios'

// useFetch será una función que reciba como parámetro un string con una url
// Crearemos dos estados: loading(true) y result([]), que devolveremos en un objeto

// Añadiremos un useEffect que se ejecutará cuando la url cambie y hará un fetch a dicha url

// vamos a agregar un setTimeout a continuación del fetch para apreciar mejor el comportamiento del hook
// Dentro del setTimeout actualizaremos los dos estados de este hook (loading y result)

// Haremos un export default de la función para importarla como hook en el componente deseado

const useFetch = (url) => {

const [loading, setLoading] = useState(true);
const [result, setResult] = useState([]);


useEffect( async () => {
    const response = await axios.get(url)
    setTimeout(() => {
        setResult(response.data)
        setLoading(false)
    }, 3000);
}, [url]);


return { loading, result }

}

export default useFetch


