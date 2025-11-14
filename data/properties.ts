// Central source of truth for property data

export type Property = {
  id: string
  title: string
  location: string
  minutes: number
  image: string        // primary cover
  price: string
  images?: string[]    // more images for the slider
  description?: string
  amenities?: string[]
}

export const PROPERTIES: Property[] = [
  { id: "micro-apartment", title: "Micro Apartment", location: "Downtown", minutes: 12, image: "property1.jpeg",  images: [
      'property1.jpeg',
      'property1.jpeg',
      'property1.jpeg',
    ],price: "$1,500/mo" },
  { id: "central-park", title: "Central Park View", location: "Uptown", minutes: 8, image: "property1.jpeg", price: "$3,400/mo" },
  { id: "ninth-ave", title: "9th Avenue", location: "Midtown", minutes: 15, image: "property1.jpeg", price: "$2,750/mo" },
  { id: "food-court", title: "Food Court", location: "Arts District", minutes: 12, image: "property1.jpeg", price: "From $900" },
];

export const propertyById = new Map(PROPERTIES.map((p) => [p.id, p]));
