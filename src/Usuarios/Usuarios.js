import VistaUsuario from "../VistaUsuario/VistaUsuario";
import { Listado } from "../Conexion/Conexion";

function Usuarios() {
    const users = Listado(0);
    
    return (<>

        { users.map((usr) => <VistaUsuario user={usr}/>)};

    </>);
};


export default Usuarios;