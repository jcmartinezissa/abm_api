import axios, { Axios } from "axios";
import { useState, useEffect } from "react/cjs/react.development";

export function Listado(props){
    const [Users, setUsers] = useState([]);

    let endpoint = 'https://61770c039c328300175f57a8.mockapi.io/usuarios';

    if (props.id > 0) {
        endpoint = endpoint+'/'+props.id;
    };

    const getUsers = async () => axios.get(endpoint).then((respuesta) =>
        setUsers(respuesta.data));

    useEffect(() => getUsers(), []);
    return (Users)

};

export function Actualizar(props) {
   
    let endpoint ='https://61770c039c328300175f57a8.mockapi.io/usuarios/'+props.id;

    const UpdateUser = async  ()=> axios.put(endpoint, {
        'name': props.Objetos.Nombre, 
        'email':props.Objetos.Mail, 
        'direccion': props.Objetos.Direccion, 
        'tel':props.Objetos.Tel});

        console.log(props.Objetos.Nombre);
        

    return (UpdateUser);
};

export default function Conexion(props) {
    <>
    <Listado id={props.id} />
    <Actualizar id={props.id} objetos={props.objetos}/>
    </>    
};


