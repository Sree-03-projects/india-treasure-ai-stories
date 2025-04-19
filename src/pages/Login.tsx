
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Facebook, LogIn } from 'lucide-react';
import LoginBackground from '@/components/login/LoginBackground';
import SocialLoginButton from '@/components/login/SocialLoginButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will be implemented with Supabase
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-heritage-cream">
      <LoginBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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
              Login to continue your heritage journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
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
              <Link to="/forgot-password" className="text-sm text-indian-maroon hover:text-indian-maroon/80">
                Forgot your password?
              </Link>
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
            <Link to="/signup" className="font-medium text-indian-maroon hover:text-indian-maroon/80">
              Sign up
            </Link>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <Link to="/about" className="mx-2 hover:text-foreground">About Us</Link>
          <span>·</span>
          <Link to="/privacy" className="mx-2 hover:text-foreground">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms" className="mx-2 hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
