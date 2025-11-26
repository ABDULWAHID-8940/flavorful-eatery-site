interface Chef {
  name: string;
  bio: string;
  image: string;
}

interface ChefCardProps {
  chef: Chef;
}

const ChefCard = ({ chef }: ChefCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg text-center">
      <img src={chef.image} alt={chef.name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover" />
      <h3 className="text-2xl font-bold">{chef.name}</h3>
      <p className="text-muted-foreground mt-4">{chef.bio}</p>
    </div>
  );
};

export default ChefCard;