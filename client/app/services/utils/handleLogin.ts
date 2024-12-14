import { userService } from "../api/userService";

const handleLogin = async (email: string, password: string, setIsLoggedIn: (isLoggedIn: boolean) => void, setUserId: (userId: string) => void) => {

    if (!email || !password) {
        alert("Veuillez entrer un email et un mot de passe.");
        return;
    }
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }
    
    try {
        const response = await userService.login(email, password);
        if (response.success) {
          alert("Login successful");
          setIsLoggedIn(true);
          setUserId(response.data.userId);
        } else {
          alert(`Login failed: ${response.message}`);
        }
      } catch (error) {
        console.error("An error occurred during login", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
  };

  export default handleLogin;