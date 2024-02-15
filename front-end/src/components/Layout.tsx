import { Button } from "primereact/button";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../router";

export const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNotMainPage = location.pathname !== "/";

  return (
    <div>
      {isNotMainPage && (
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex items-center justify-center">
            <div className="space-x-6">
              <Button
                onClick={() => navigate(routes.root.path)}
                className="hover:text-gray-300"
              >
                Home
              </Button>
              <Button
                onClick={() => navigate(routes.produts.path)}
                className="hover:text-gray-300"
              >
                Products
              </Button>
              <Button
                onClick={() => navigate(routes.reviews.path)}
                className="hover:text-gray-300"
              >
                Reviews
              </Button>
            </div>
          </nav>
        </header>
      )}
      {children}
    </div>
  );
};
