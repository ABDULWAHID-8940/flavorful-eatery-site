import { Button } from "@/components/ui/button";

interface DietaryFiltersProps {
  selectedFilters: string[];
  onFilterChange: (filter: string) => void;
}

const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Spicy"];

const DietaryFilters = ({ selectedFilters, onFilterChange }: DietaryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {dietaryOptions.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilters.includes(filter) ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default DietaryFilters;