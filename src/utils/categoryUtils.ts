
// Retained categories
export const retainedCategories = {
  jewelry: ["Silver Jhumka", "Lakh ki Choodiyan", "Tribal Jewelry"],
  homeDecor: ["Madhubani Paintings", "Mango Pickles"]
};

// Helper function to check if a category should be retained
export const shouldRetainCategory = (category: string, subcategory?: string) => {
  if (!subcategory) {
    // Check main categories
    return Object.keys(retainedCategories).includes(category.toLowerCase());
  }
  
  // Check subcategories
  const lowercaseCategory = category.toLowerCase();
  const lowercaseSubcategory = subcategory.toLowerCase();
  
  if (lowercaseCategory === "jewelry") {
    return retainedCategories.jewelry.some(item => 
      item.toLowerCase() === lowercaseSubcategory
    );
  }
  
  if (lowercaseCategory === "home" || lowercaseCategory === "home & decor") {
    return retainedCategories.homeDecor.some(item => 
      item.toLowerCase() === lowercaseSubcategory
    );
  }
  
  return false;
};
