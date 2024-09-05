import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API}${resId}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return { resInfo, isLoading };
};

export default useRestaurantMenu;
