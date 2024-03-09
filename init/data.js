const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-118.7786, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-106.8227, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: 'Point', coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-122.6736, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: 'Point', coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-120.0324, 39.0968] },
  },{
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: 'Point', coordinates: [7.2285, 46.0963] },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: 'Point', coordinates: [34.8888, -2.1540] },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: 'Point', coordinates: [4.8952, 52.3676] },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: 'Point', coordinates: [178.0650, -17.7134] },
  },{
    title: "Luxury Penthouse in Paris",
    description:
      "Experience the epitome of luxury in this stunning penthouse with breathtaking views of the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519829464547-900f8651c9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcmlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Paris",
    country: "France",
    geometry: { type: 'Point', coordinates: [2.3522, 48.8566] },
  },
  {
    title: "Private Chalet in the Alps",
    description:
      "Escape to the Alps in this private chalet with stunning mountain views and easy access to ski slopes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1473172707853-58e88c0ca79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Swiss Alps",
    country: "Switzerland",
    geometry: { type: 'Point', coordinates: [8.2275, 46.8182] },
  },
  {
    title: "Ocean View Villa in Santorini",
    description:
      "Enjoy breathtaking sunsets from this ocean-view villa perched on the cliffs of Santorini, Greece.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591291243965-3e03872d5286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbnRvcmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Santorini",
    country: "Greece",
    geometry: { type: 'Point', coordinates: [25.4280, 36.3932] },
  },
  {
    title: "Mountain View Retreat in Queenstown",
    description:
      "Immerse yourself in the stunning landscapes of Queenstown with this mountain view retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614876775062-76f3e3f72c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHF1ZWVuc3Rvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Queenstown",
    country: "New Zealand",
    geometry: { type: 'Point', coordinates: [168.6566, -45.0312] },
  },
  {
    title: "Vineyard Cottage in Napa Valley",
    description:
      "Experience the charm of Napa Valley with this cozy vineyard cottage surrounded by lush vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591887415512-ef46406fc0c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmluZXZhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Napa Valley",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-122.2855, 38.2975] },
  },{
    title: "Japanese Ryokan in Kyoto",
    description:
      "Experience traditional Japanese hospitality in this charming ryokan located in the historic city of Kyoto.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566474791-0f18a7c0078a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGp1c3RpY2UlMjByeW9rYW58ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: 'Point', coordinates: [135.7681, 35.0116] },
  },
  {
    title: "Coastal Retreat in Sydney",
    description:
      "Enjoy the coastal breeze in this stylish retreat located in the beautiful city of Sydney, Australia.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1574680096143-3d3b4c92447f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxzd2VkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Sydney",
    country: "Australia",
    geometry: { type: 'Point', coordinates: [151.2093, -33.8688] },
  },
  {
    title: "Majestic Castle in Bavaria",
    description:
      "Live like royalty in this majestic castle surrounded by the picturesque landscapes of Bavaria, Germany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587555196515-c719f8c1283f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzdGxlJTIwY2FzdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Bavaria",
    country: "Germany",
    geometry: { type: 'Point', coordinates: [11.4979, 48.8566] },
  },
  {
    title: "Beachfront Condo in Miami",
    description:
      "Wake up to stunning ocean views in this modern beachfront condo located in the vibrant city of Miami.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1608283427668-36e69e8c3c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hmdXJ0JTIwY29uZG98ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Miami",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-80.1917902, 25.7616798] },
  },
  {
    title: "Vineyard Estate in Napa Valley",
    description:
      "Immerse yourself in the world of wine in this luxurious vineyard estate located in Napa Valley, California.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602415370027-8eef82b17d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmluZXlhcmR8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Napa Valley",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-122.3606, 38.5025] },
  },
  {
    title: "Contemporary Loft in Berlin",
    description:
      "Experience modern living in this stylish loft located in the vibrant city of Berlin, Germany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527250116465-06f8699d17ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlcmxpbiUyMmxvZnR8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Berlin",
    country: "Germany",
    geometry: { type: 'Point', coordinates: [13.4050, 52.5200] },
  },{
    title: "Lakeside Cabin Retreat",
    description:
      "Escape to a cozy cabin by the lake. Enjoy fishing, boating, and stunning sunsets in this serene retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571991707991-4f85e7d1e9d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZCUyMGtpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Lake Placid",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-73.9854, 44.2795] },
  },
  {
    title: "Elegant Villa in Provence",
    description:
      "Indulge in the charm of Provence in this elegant villa surrounded by lavender fields and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575670147769-5385e18be357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvdmluY2UlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Provence",
    country: "France",
    geometry: { type: 'Point', coordinates: [5.4541, 43.5297] },
  },
  {
    title: "Sunny Beach House in Sydney",
    description:
      "Enjoy the sun and surf in this beautiful beach house in Sydney. Unwind with stunning ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541696432-7dfc03bc39c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZGl5JTIwYmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Sydney",
    country: "Australia",
    geometry: { type: 'Point', coordinates: [151.2093, -33.8688] },
  },
  {
    title: "Majestic Castle in Bavaria",
    description:
      "Live the fairy tale in this majestic castle nestled in the Bavarian Alps. Experience grandeur and history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582197265987-98f9d9076c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzdGxlJTIwY2hhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Bavaria",
    country: "Germany",
    geometry: { type: 'Point', coordinates: [10.4551, 47.5480] },
  },
  {
    title: "Hillside Retreat in Kyoto",
    description:
      "Escape to the serene hills of Kyoto in this traditional retreat. Experience the beauty of Japanese nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556010621-cc9c39283303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpb3R5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: 'Point', coordinates: [135.7681, 35.0116] },
  },
  {
    title: "Coastal Villa in Santorini",
    description:
      "Discover the charm of Santorini in this coastal villa. Enjoy breathtaking sunsets and the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599212818002-782a2877c914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbnRvcmluaSUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Santorini",
    country: "Greece",
    geometry: { type: 'Point', coordinates: [25.3960, 36.3932] },
  },
  {
    title: "Desert Retreat in Arizona",
    description:
      "Experience the beauty of the Arizona desert in this secluded retreat. Enjoy starry nights and tranquility.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e6/ca/a4/courtyard-pool-with-hot.jpg?w=1200&h=-1&s=1",
    },
    price: 1500,
    location: "Arizona",
    country: "United States",
    geometry: { type: 'Point', coordinates: [-111.0937, 34.0489] },
  },
  ];

module.exports = { data: sampleListings };