import { Button } from "primereact/button";
import { routes } from "../../router";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        label="Products"
        onClick={() => navigate(routes.produts.path)}
        className="main-page-btn"
      />
      <Button
        label="Reviews"
        onClick={() => navigate(routes.reviews.path)}
        className="main-page-btn"
      />
    </div>
  );
};
