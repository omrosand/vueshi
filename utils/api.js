export const getMenuItems = async () => {
  try {
    const response = await fetch("../ourmenu.json");
    const data = await response.json();
    const menu = data.menu;
    console.log(menu);
    return menu;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getMenuCategoryItems = async (category) => {
  try {
    const response = await fetch("../ourmenu.json");
    const data = await response.json();

    const items = data.menu.filter((item) => item.category === category);
    console.log(items);
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
