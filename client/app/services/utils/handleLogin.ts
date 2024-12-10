import { userService } from "../api/userService";

const handleLogin = async (email: string, password: string, setIsLoggedIn: (isLoggedIn: boolean) => void, setUserId: (userId: string) => void) => {
    console.log('handleLogin', email, password);


    if (!email || !password) {
        console.log('email or password is empty');
        alert("Veuillez entrer un email et un mot de passe.");
        return;
      }
    
      // Validation basique de l'email (exemple)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log('email is not valid');
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
    
      try {
        const response = await userService.login(email, password);
        if (response.success) {
          console.log('login successful');
          alert("Login successful");
          setIsLoggedIn(true);
          setUserId(response.data.userId);
        } else {
          console.log('login failed');
          alert(`Login failed: ${response.message}`);
        }
      } catch (error) {
        console.error("An error occurred during login", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
  };

  export default handleLogin;