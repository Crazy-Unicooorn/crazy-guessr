import GithubIcon from "../assets/icons/brands/github";
import { StyledButton } from "../components/common/Button";

function ButtonTest() {
  return (
    <StyledButton type="button" backgroundColor="#ECCAAA" shadow="dark">
      <span className="front">
        <GithubIcon fill="black" size={24} />
        <div style={{ width: `100%`, textAlign: "left" }}>test</div>
      </span>
    </StyledButton>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
      <ButtonTest />
    </div>
  );
}

export default Home;
