import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin, user }) => {
  const context = useContext(AuthContext);
  const [email, setEmail] = context["emailState"];
  const [password, setPassword] = context["passwordState"];

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  const navigate = useNavigate();
  return (
    <Container id="login">
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {user == "logged" ? navigate("/") : ""}
      </Form>
    </Container>
  );
};

export default Login;
