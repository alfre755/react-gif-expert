import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat =>[...cat,'Valorant'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      {/* // setCategories={setCategories}  */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
