
import { Button } from "@/components/ui/button";
import { Facebook, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface SocialLoginButtonProps {
  provider: "google" | "facebook";
  children: React.ReactNode;
}

const SocialLoginButton = ({ provider, children }: SocialLoginButtonProps) => {
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    // Simulate social login
    // In a real application, this would connect to an auth provider API
    setTimeout(() => {
      // Store authentication state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({
        name: "Guest User",
        email: provider === "google" ? "guest@gmail.com" : "guest@facebook.com"
      }));
      
      toast({
        title: "Logged in successfully",
        description: `Welcome to Indiverse!`,
      });
      
      // Redirect to home page
      navigate("/");
    }, 1500);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleSocialLogin}
      className="w-full"
    >
      {provider === "google" ? (
        <Mail className="mr-2 h-4 w-4" />
      ) : (
        <Facebook className="mr-2 h-4 w-4" />
      )}
      {children}
    </Button>
  );
};

export default SocialLoginButton;
