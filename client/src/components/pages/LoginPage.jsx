import LoginForm from "../LoginForm";
import useTheme from "../hooks/useTheme";

function LoginPage() {
  const { theme } = useTheme();

  return (
    <main className={`login-page ${theme && "light-theme"}`}>
      <section className="login-area">
        <h1>Formulaire de connexion</h1>
        <LoginForm />
        <section className="register-area">
          <p>{"Vous n'avez pas de compte ?"}</p>
          <a>Inscrivez-vous</a>
        </section>
      </section>
    </main>
  );
}

export default LoginPage;
