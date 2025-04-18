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
    <div className="container mt-5">
      {user ? (
        <div className="text-center">
          <h2 className="mb-3">Welcome, {user.name}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">User</label>
                  <input
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tu usuario"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
