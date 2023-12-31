import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "dark" ? "dark" : "light";

  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      onClick={handleClick}
      className="w-10 h-5 border-2 border-[#53c28b70] rounded-[30px] flex items-center justify-between p-[2px] relative cursor-pointer"
    >
      <p className="text-[10px]">🌙</p>
      <p className="text-[10px]">🔆</p>
      <div
        className={`w-[15px] h-[15px] bg-teal-400 rounded-full absolute ${
          theme === "dark" ? "right-[2px]" : "light-[2px]"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
