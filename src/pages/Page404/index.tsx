import { Container } from "./style";
import page404 from "../../assets/page404.png";
import { useNavigate } from "react-router-dom";

export function Page404() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={page404} alt="page404" />
      <button onClick={() => navigate("/")}>voltar</button>
      <h1>Page 404</h1>
    </Container>
  );
}
