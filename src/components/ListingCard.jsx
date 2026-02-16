import React from 'react';
import { MessageCircle, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const ListingCard = ({ 
  sellerName, 
  timeAgo, 
  location, 
  description, 
  images = [], // Now accepts an array of strings
  price,       // Now accepts a number
  avatarColor = "bg-blue-600"
}) => {
  
  // Format price to IDR (Rupiah)
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
      
      {/* 1. Header */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold`}>
              {sellerName.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="text-sm font-bold text-gray-900 hover:underline cursor-pointer">
                {sellerName}
              </p>
              <p className="text-xs text-gray-500">
                {timeAgo} • {location}
              </p>
            </div>
          </div>
          {/* Options Dot (optional) */}
          <button className="text-gray-400 hover:text-gray-600">
            •••
          </button>
        </div>

        {/* Description */}
        <div className="mt-3 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
           {description}
        </div>
      </div>

      {/* 2. Dynamic Image Grid */}
      {/* We pass the images array to our helper function below */}
      <ImageGrid images={images} />

      {/* 3. Price Tag Bar */}
      <div className="bg-gray-50 px-4 py-2 border-t border-b border-gray-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Asking Price</span>
        <span className="text-lg font-bold text-green-700">
          {price ? formatRupiah(price) : 'Free / Trade'}
        </span>
      </div>

      {/* 4. Action Buttons */}
      <div className="px-2 py-1 flex items-center justify-between">
         <div className="flex">
            <button className="flex items-center gap-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span className="hidden sm:inline">Like</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Comment</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
         </div>

         <button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 rounded-lg font-bold text-sm transition-colors mr-2">
           <MessageCircle className="w-4 h-4" />
           Message
         </button>
      </div>
    </div>
  );
};

// --- Sub-Component: Logic for the Image Layouts ---
const ImageGrid = ({ images }) => {
  if (!images || images.length === 0) return null;

  const count = images.length;
  // We use a fixed height container to keep cards uniform, 
  // but you can remove 'h-96' if you want it to adapt to image height.
  const containerClass = "w-full h-96 cursor-pointer overflow-hidden"; 

  // Helper to render an image with object-cover
  const Img = ({ src, className }) => (
    <img src={src} alt="Listing" className={`w-full h-full object-cover border-gray-100 ${className}`} />
  );

  // 1 Image (Full)
  if (count === 1) {
    return (
      <div className={containerClass}>
        <Img src={images[0]} />
      </div>
    );
  }

  // 2 Images (Side by Side)
  if (count === 2) {
    return (
      <div className={`${containerClass} grid grid-cols-2 gap-0.5`}>
        <Img src={images[0]} />
        <Img src={images[1]} />
      </div>
    );
  }

  // 3 Images (1 Big Top, 2 Small Bottom)
  if (count === 3) {
    return (
      <div className={`${containerClass} grid grid-rows-2 gap-0.5`}>
        {/* Top Half */}
        <div className="row-span-1">
           <Img src={images[0]} />
        </div>
        {/* Bottom Half (Split 2) */}
        <div className="row-span-1 grid grid-cols-2 gap-0.5">
           <Img src={images[1]} />
           <Img src={images[2]} />
        </div>
      </div>
    );
  }

  // 4 Images (2 Top, 2 Bottom)
  if (count === 4) {
    return (
      <div className={`${containerClass} grid grid-rows-2 grid-cols-2 gap-0.5`}>
        <Img src={images[0]} />
        <Img src={images[1]} />
        <Img src={images[2]} />
        <Img src={images[3]} />
      </div>
    );
  }

  // 5+ Images (2 Top, 3 Small Bottom)
  // We only grab the first 5 images if there are more
  return (
    <div className={`${containerClass} grid grid-rows-2 gap-0.5`}>
      {/* Top Half (2 images) */}
      <div className="row-span-1 grid grid-cols-2 gap-0.5">
         <Img src={images[0]} />
         <Img src={images[1]} />
      </div>
      {/* Bottom Half (3 images) */}
      <div className="row-span-1 grid grid-cols-3 gap-0.5 relative">
         <Img src={images[2]} />
         <Img src={images[3]} />
         
         {/* The 5th image container */}
         <div className="relative w-full h-full">
            <Img src={images[4]} />
            
            {/* If there are MORE than 5, show overlay on the last one */}
            {count > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+{count - 5}</span>
              </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default ListingCard;