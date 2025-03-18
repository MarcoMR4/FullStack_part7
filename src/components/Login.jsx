import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../reducers/authReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.name}!</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            Usuario: <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            Contraseña: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
