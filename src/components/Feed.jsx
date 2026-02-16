import React from 'react';
import ListingCard from './ListingCard';

const Feed = () => {
  const dummyListings = [
    {
      id: 1,
      sellerName: "JunkShop King",
      timeAgo: "2 hours ago",
      location: "Quezon City",
      description: "Sold as set! Toyota Vios Gen 2 Headlights and Tail lights. Slightly negotiated. PM me!",
      // 4 Images -> 2x2 Grid
      images: [
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
      ],
      price: 4500000,
      avatarColor: "bg-red-500"
    },
    {
      id: 2,
      sellerName: "Mark's Auto Parts",
      timeAgo: "5 hours ago",
      location: "Manila",
      description: "Just arrived: Brand new mags size 17. Universal 4 holes. 1 set available.",
      // 1 Image -> Full Width
      images: [
        "https://images.unsplash.com/photo-1589133496357-3f3956691494?auto=format&fit=crop&w=800&q=80"
      ],
      price: 18000000,
      avatarColor: "bg-blue-600"
    },
    {
      id: 3,
      sellerName: "Cebu Car Wreckers",
      timeAgo: "1 day ago",
      location: "Cebu City",
      description: "Parting out Civic 2018. Engine, Transmission, Doors, Seats available. Get them while fresh.",
      // 5 Images -> 2 Top, 3 Bottom
      images: [
        "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?auto=format&fit=crop&w=600&q=80", // Car
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80", // Engine
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80", // Interior
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80", // Wheel
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80"  // Bumper
      ],
      price: 50000, // Maybe just a placeholder price for "PM for price" logic
      avatarColor: "bg-green-600"
    },
    {
      id: 4,
      sellerName: "Davao 4x4 Accessories",
      timeAgo: "3 hours ago",
      location: "Davao",
      description: "Offroad bumper and Snorkel kit. Package deal.",
      // 3 Images -> 1 Top, 2 Bottom
      images: [
        "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1580273916550-e323be2ed5fa?auto=format&fit=crop&w=600&q=80"
      ],
      price: 25000000,
      avatarColor: "bg-yellow-600"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto"> 
      <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">Marketplace Feed</h2>
      
      {dummyListings.map((listing) => (
        <ListingCard 
          key={listing.id}
          sellerName={listing.sellerName}
          timeAgo={listing.timeAgo}
          location={listing.location}
          description={listing.description}
          images={listing.images}  // Passing the array
          price={listing.price}    // Passing the price number
          avatarColor={listing.avatarColor}
        />
      ))}
    </div>
  );
};

export default Feed;