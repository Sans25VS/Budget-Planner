export const calculateTotalSpent = (items) => {
    return items.reduce((sum, item) => sum + Number(item.cost), 0);
  };
  
  export const calculateRemaining = (budget, totalSpent) => {
    return budget - totalSpent;
  };