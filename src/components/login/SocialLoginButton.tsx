
import { Button } from "@/components/ui/button";
import { Facebook, Mail } from "lucide-react";

interface SocialLoginButtonProps {
  provider: "google" | "facebook";
  children: React.ReactNode;
}

const SocialLoginButton = ({ provider, children }: SocialLoginButtonProps) => {
  const handleSocialLogin = () => {
    // Social login logic will be implemented with Supabase
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
