import { userService } from "../api/userService";

const handleRegister = async (email: string, password: string, name: string, last_name: string, gender: string, navigate: (screen: string) => void) => {


    if (!email || !password || !name || !last_name || !gender) {
        alert("All field are required.")
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    try {
        const response = await userService.register(email, password, name, last_name, gender);
        alert(response.message);
        navigate("TabNavigator");
    } catch (error) {
        console.error("An error occurred during registration", error);
    }
};

export default handleRegister;