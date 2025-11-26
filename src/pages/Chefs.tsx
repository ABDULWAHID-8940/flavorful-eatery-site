import ChefCard from "@/components/chefs/ChefCard";

const chefsData = [
  {
    name: 'Amina Nkosi',
    bio: 'Chef Amina from Kampala, Uganda, is a master of East African cuisine. Her passion for fresh, local ingredients shines through in every dish. She is dedicated to preserving traditional recipes while adding her own modern flair.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/chef-amina-re3cp2t-1763406748246.webp',
  },
  {
    name: 'Kwame Mensah',
    bio: 'Hailing from Accra, Ghana, Chef Kwame is an expert in West African flavors. His innovative approach to Jollof and other regional classics has earned him international acclaim. He believes food is a universal language.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/chef-kwame-sd3fh8j-1763406755914.webp',
  },
];

const Chefs = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Meet Our Culinary Artists</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The passion and expertise behind the flavors of Jikoni.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {chefsData.map(chef => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;