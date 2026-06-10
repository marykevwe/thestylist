import braids from "../assets/images/braids.jpg";
import braids1 from "../assets/images/braids1.jpg";
import braids2 from "../assets/images/braids2.jpg";
import braids4 from "../assets/images/braids4.jpg";
import briads from "../assets/images/briads.jpg";

import lashs1 from "../assets/images/lashs1.jpg";
import lashs4 from "../assets/images/lashs4.jpg";

import locks from "../assets/images/locks.jpg";
import locks1 from "../assets/images/locks1.jpg";
import locks3 from "../assets/images/locks3.jpg";
import locks4 from "../assets/images/locks4.jpg";

import nails from "../assets/images/nails.jpg";
import nails1 from "../assets/images/nails1.jpg";

import wigInstall from "../assets/images/wig install.jpg";
import wihinstall from "../assets/images/wihinstall.jpg";

/* =========================
   CATEGORIES
========================= */
export const categories = [
  { name: "Braids", img: braids },
  { name: "Braids Style 1", img: braids1 },
  { name: "Braids Style 2", img: braids2 },
  { name: "Braids Style 4", img: braids4 },
  { name: "Braids (Alt)", img: briads },

  { name: "Locs", img: locks },
  { name: "Locs Style 1", img: locks1 },
  { name: "Locs Style 3", img: locks3 },
  { name: "Locs Style 4", img: locks4 },

  { name: "Nails", img: nails },
  { name: "Nails Style 1", img: nails1 },

  { name: "Lashes", img: lashs4 },
  { name: "Lashes Style 1", img: lashs1 },

  { name: "Wig Install", img: wigInstall },
  { name: "Wig Install Alt", img: wihinstall },
];

/* =========================
   PROS (PLACEHOLDERS)
   NOTE: You MUST add real images for these later
========================= */
export const pros = [
  {
    name: "Amaka Osei",
    location: "Lagos, NG",
    distance: "0.8 km",
    rating: 4.9,
    reviews: 312,
    bookings: "500+",
    badge: "Loved by Clients",
    img: braids1,
  },
  {
    name: "Chisom Eze",
    location: "Lagos, NG",
    distance: "1.2 km",
    rating: 5.0,
    reviews: 98,
    bookings: null,
    badge: "Loved by Clients",
    img: locks1,
  },
  {
    name: "Blessing Adaora",
    location: "Abuja, NG",
    distance: "2.1 km",
    rating: 4.8,
    reviews: 204,
    bookings: "200+",
    badge: null,
    img: nails1,
  },
  {
    name: "Kemi Fashola",
    location: "Lagos, NG",
    distance: "3.0 km",
    rating: 4.7,
    reviews: 145,
    bookings: "100+",
    badge: "Loved by Clients",
    img: braids4,
  },
];

/* =========================
   BUSINESS FEATURES
========================= */
export const businessFeatures = [
  {
    title: "Grow your business",
    desc: "Unlock business growth by using our marketing tools to attract new clients.",
  },
  {
    title: "Manage bookings",
    desc: "Take control of your schedule with our smart calendar and booking tools.",
  },
  {
    title: "Elevate client experience",
    desc: "Offer seamless, professional booking that keeps clients coming back.",
  },
];

/* =========================
   REVIEWS
========================= */
export const reviews = [
  {
    title: "Love it....",
    body: "I love this app. It's so easy to find and book appointments with the best hair pros!",
    handle: "@TemiAdeola",
    stars: 5,
  },
  {
    title: "My go-to!",
    body: "I've discovered so many talented stylists through HairHobby. Absolutely recommend it to everyone.",
    handle: "@NgoziB",
    stars: 5,
  },
  {
    title: "Best booking app",
    body: "Super clean experience. Found my perfect braiding stylist in minutes. 10/10.",
    handle: "@FunkeOlawale",
    stars: 5,
  },
];

/* =========================
   CITIES
========================= */
export const cities = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
];

export const cityServices = [
  "Braids",
  "Natural Hair",
  "Haircut",
  "Weaves",
  "Barber",
];