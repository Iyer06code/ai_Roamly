"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Discover amazing destinations around the world.
              </span>{" "}
              Plan your perfect trip with AI-powered recommendations tailored to your preferences and budget.
            </p>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop"
              alt="Travel destination"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Mysore, India",
    title: "Royal Heritage – Mysore Palace, Chamundi Hills & Gardens",
    src: "/mysore-palace.jpg",
    content: <DummyContent />,
  },
  {
    category: "Agra, India",
    title: "Wonder of the World – Taj Mahal, Agra Fort & More",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Jaipur, India",
    title: "Pink City – Amber Fort, Hawa Mahal & City Palace",
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Kerala, India",
    title: "God's Own Country – Backwaters, Beaches & Tea Gardens",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Varanasi, India",
    title: "Spiritual Journey – Ghats, Temples & Ancient Culture",
    src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Goa, India",
    title: "Beach Paradise – Beaches, Nightlife & Portuguese Heritage",
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Paris, France",
    title: "Explore the City of Lights – Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Experience NYC – Times Square, Central Park, Broadway",
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation – Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
];