function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Pseudo</label>
      <input
        name="username"
        id="username"
        type="text"
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        name="password"
        id="password"
        type="text"
      />
      <a>Mot de passe oublié ?</a>
      <button type="button">Valider</button>
    </form>
  );
}

export default LoginForm;
