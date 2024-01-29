import { createContext, useState } from "react";

export const DiceRollContext = createContext({
  animation: false,
  rotation: "rotateX(0deg) rotateY(0deg)",
  random: () => {},
});

export const Provider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  const [rotation, setRotation] = useState("rotateX(0deg) rotateY(0deg)");

  const random = () => {
    console.log("hey");
    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(random);
  };

  const rollDice = (random) => {
    setAnimation(true);
    setTimeout(() => {
      switch (random) {
        case 1:
          setRotation(" rotateX(0deg) rotateY(0deg)");
          break;

        case 6:
          setRotation(" rotateX(180deg) rotateY(0deg)");
          break;

        case 2:
          setRotation(" rotateX(-90deg) rotateY(0deg)");
          break;

        case 5:
          setRotation(" rotateX(90deg) rotateY(0deg)");
          break;

        case 3:
          setRotation(" rotateX(0deg) rotateY(90deg)");
          break;
        case 4:
          setRotation(" rotateX(0deg) rotateY(-90deg)");
          break;

        default:
          break;
      }
      setAnimation(false);
    }, 4030);
  };

  return (
    <DiceRollContext.Provider
      value={{
        animation: animation,
        rotation: rotation,
        random: random,
      }}
    >
      {children}
    </DiceRollContext.Provider>
  );
};
