import { userService } from "../api/userService";

const handleLogin = async (email: string, password: string, setIsLoggedIn: (isLoggedIn: boolean) => void, setUserId: (userId: string) => void) => {

    if (!email || !password) {
        alert("Please enter an email and a password.");
        return;
    }
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
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
        alert("An error occurred. Please try again.");
      }
  };

  export default handleLogin;