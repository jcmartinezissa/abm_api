import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Listado, Actualizar} from "../Conexion/Conexion";

export default function Usuario() {

    let { id } = useParams();

    const Users = Listado({ id });

    const  [Nombre, SetNombre] =  useState( Users.name);
    const [Mail, SetMail] = useState(Users.email);
    const [Direccion, SetDireccion] = useState(Users.direccion);
    const [Tel, SetTel] = useState(Users.tel);


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Users.avatar} className="img-fluid rounded-start" alt={Users.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                         <small>id: {Users.id} </small>
                        <input type="text" value={Nombre} onChange={(e) => SetNombre(e.target.value)} class="form-control" placeholder="Nombre" />
                        <input type="text" value={Mail} onChange={(e) => SetMail(e.target.value)} class="form-control" placeholder="e-mail" />
                        <input type="text" value={Direccion} onChange={(e) => SetDireccion(e.target.value)} class="form-control" placeholder="Direccion" />
                        <input type="number" value={Tel} onChange={(e) => SetTel(e.target.value)} class="form-control" placeholder="038155186222" />
                        <button  type="button" className='btn btn-primary' onClick={()=>
                        <Actualizar id={Users.id} Nombre={Nombre} Direccion={Direccion} Mail={Mail} Tel={Tel}/>}> Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

