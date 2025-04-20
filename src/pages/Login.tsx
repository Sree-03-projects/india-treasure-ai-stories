
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, LogIn } from 'lucide-react';
import LoginBackground from '@/components/login/LoginBackground';
import SocialLoginButton from '@/components/login/SocialLoginButton';
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if user is already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      // If already logged in, redirect to home
      navigate("/");
    }
  }, [navigate]);
  
  const validateForm = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    
    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    
    return true;
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    // Simulate a successful login (in a real app, connect to auth service)
    // For demo purposes, we accept any valid format email/password
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify({
      name: "Guest User",
      email: email
    }));
    
    toast({
      title: "Logged in successfully",
      description: `Welcome to Indiverse!`,
    });
    
    // Redirect to the page they were trying to access, or home by default
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-heritage-cream">
      <LoginBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          {/* Logo */}
          <div className="text-center">
            <img 
              src="/logo.png" 
              alt="Indiverse" 
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-heritage-accent font-serif">
              Welcome to Indiverse
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please log in to explore India's treasures
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                />
                <LogIn className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button type="button" className="text-sm text-indian-maroon hover:text-indian-maroon/80">
                Forgot your password?
              </button>
            </div>

            <Button type="submit" className="w-full bg-indian-maroon hover:bg-indian-maroon/90">
              Log in
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialLoginButton provider="google">
                Sign in with Google
              </SocialLoginButton>
              <SocialLoginButton provider="facebook">
                Sign in with Facebook
              </SocialLoginButton>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <span className="font-medium text-indian-maroon hover:text-indian-maroon/80 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <span className="mx-2 hover:text-foreground cursor-pointer">About Us</span>
          <span>·</span>
          <span className="mx-2 hover:text-foreground cursor-pointer">Privacy Policy</span>
          <span>·</span>
          <span className="mx-2 hover:text-foreground cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
