
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-indian-saffron mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
