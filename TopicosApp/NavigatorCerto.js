import { useContext } from "react";
import { ContadorContext } from "./src/contexts/contadorContext";
import { StackScreens } from "./src/screens/StackScreens";
import { StackScreensLogado } from "./src/screens/StackScreensLogado";

export default function NavigatorCerto() {

  
  const context = useContext(ContadorContext);


  return (
        context.user != null ? <StackScreensLogado /> : <StackScreens />
  );
}

