import Button from "../components/common/Button";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Button
        hasIconLeft
        hasInternalLink
        text="Back to Home"
        bgcolor="var(--pastel-pink)"
        boop={{ x: -8, springConfig: { tension: 300, friction: 10 } }}
      />
    </>
  );
}

export default NotFound;
