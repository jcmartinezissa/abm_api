
import {Link} from "react-router-dom";

function VistaUsuario(props) {
    
  return (
            <>
            
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.user.avatar} className="img-fluid rounded-start" alt={props.user.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.user.name}</h5>
                            <p className="card-text">Mail: {props.user.email}</p>
                            <p className="card-text">Direccion: {props.user.direccion}</p>
                            <p className="card-text">Tel: {props.user.tel}</p>
                            <p className="card-text">ID:{props.user.id}</p>                            
                            <Link  type="button" className='btn btn-primary'to={'/usuario/'+props.user.id}  >Editar</Link>
                            
                            </div>    
                    </div>
                </div>
            </div>
            </>      
    );
}

export default VistaUsuario;