import { Destination, DocumentItem, Profile, Trip } from "./types.js";

const categories = ["Tất cả", "Địa điểm", "Khách sạn", "Bãi biển", "Máy bay", "Ẩm thực"];

const destinations: Destination[] = [
  {
    id: "dalat",
    name: "Đà Lạt",
    location: "Lâm Đồng, VN",
    rating: "4.1",
    duration: "4N/5D",
    imagePath: "assets/images/dalat_image.jpg",
    description:
      "Đà Lạt là thành phố ngàn hoa với khí hậu mát mẻ quanh năm. Đây là địa điểm lý tưởng cho các cặp đôi và gia đình muốn tìm kiếm sự yên bình.",
    price: "199",
    reviewsCount: "355",
    category: "Địa điểm",
    isFavorite: false
  },
  {
    id: "phuquoc",
    name: "Đảo Phú Quốc",
    location: "Kiên Giang, VN",
    rating: "4.5",
    duration: "2N/3D",
    imagePath: "assets/images/phuquoc_image.jpg",
    description:
      "Phú Quốc nổi tiếng với những bãi biển xanh ngắt và cát trắng mịn. Du khách có thể thưởng thức hải sản tươi ngon và tham gia các hoạt động lặn ngắm san hô.",
    price: "250",
    reviewsCount: "1.2k",
    category: "Bãi biển",
    isFavorite: false
  },
  {
    id: "hoian",
    name: "Hội An",
    location: "Quảng Nam, VN",
    rating: "4.8",
    duration: "2N/1Đ",
    imagePath: "assets/images/hoian_image.webp",
    description:
      "Phố cổ Hội An là di sản văn hóa thế giới với những con phố đèn lồng lung linh và nền ẩm thực phong phú, mang đậm dấu ấn lịch sử.",
    price: "150",
    reviewsCount: "800",
    category: "Địa điểm",
    isFavorite: false
  },
  {
    id: "vinpearl",
    name: "Vinpearl Resort",
    location: "Nha Trang, VN",
    rating: "4.7",
    duration: "3N/2Đ",
    imagePath: "assets/images/hoian_image.webp",
    description: "Khu nghỉ dưỡng sang trọng bậc nhất.",
    price: "500",
    reviewsCount: "2.5k",
    category: "Khách sạn",
    isFavorite: false
  }
];

const recommendedIds = ["hoian", "dalat"];

const trips: Trip[] = [
  {
    id: "trip-1",
    destination: "Đảo Phú Quốc",
    location: "Kiên Giang, VN",
    date: "20/05/2026 - 23/05/2026",
    status: "Sắp tới",
    imagePath: "assets/images/phuquoc_image.jpg",
    isUpcoming: true
  },
  {
    id: "trip-2",
    destination: "Hội An",
    location: "Quảng Nam, VN",
    date: "15/04/2026 - 17/04/2026",
    status: "Đã đi",
    imagePath: "assets/images/hoian_image.webp",
    isUpcoming: false
  },
  {
    id: "trip-3",
    destination: "Đà Lạt",
    location: "Lâm Đồng, VN",
    date: "10/03/2026 - 14/03/2026",
    status: "Đã đi",
    imagePath: "assets/images/dalat_image.jpg",
    isUpcoming: false
  }
];

const profile: Profile = {
  name: "Nguyễn Văn A",
  email: "vanya.traveler@email.com"
};

const documents: DocumentItem[] = [
  { id: "doc-1", title: "Hộ chiếu", description: "Hết hạn: 12/2030", icon: "description", color: "#176FF2" },
  { id: "doc-2", title: "Visa", description: "Vietnam - Multiple Entry", icon: "assignment", color: "#4CAF50" },
  { id: "doc-3", title: "Bảo hiểm du lịch", description: "Bảo việt - Toàn cầu", icon: "verified_user", color: "#FF9800" },
  { id: "doc-4", title: "Vé máy bay", description: "Phú Quốc - Sài Gòn", icon: "flight_takeoff", color: "#E91E63" }
];

function getDestinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id);
}

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function durationToDays(duration: string): number {
  const match = duration.match(/^(\d+)N/);
  if (!match) {
    return 2;
  }
  const days = Number.parseInt(match[1], 10);
  return Number.isNaN(days) ? 2 : Math.max(days, 1);
}

function generateTripFromDestination(destination: Destination): Trip {
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() + 7);
  const days = durationToDays(destination.duration);
  const end = new Date(start);
  end.setDate(end.getDate() + days);
  const id = `trip-${Date.now()}`;

  return {
    id,
    destination: destination.name,
    location: destination.location,
    date: `${formatDate(start)} - ${formatDate(end)}`,
    status: "Sắp tới",
    imagePath: destination.imagePath,
    isUpcoming: true
  };
}

function setFavorite(destinationId: string, isFavorite: boolean): Destination | null {
  const destination = getDestinationById(destinationId);
  if (!destination) {
    return null;
  }
  destination.isFavorite = isFavorite;
  return destination;
}

function toggleFavorite(destinationId: string): Destination | null {
  const destination = getDestinationById(destinationId);
  if (!destination) {
    return null;
  }
  destination.isFavorite = !destination.isFavorite;
  return destination;
}

function bookTrip(destinationId: string): Trip | null {
  const destination = getDestinationById(destinationId);
  if (!destination) {
    return null;
  }
  const trip = generateTripFromDestination(destination);
  trips.unshift(trip);
  return trip;
}

function addDocument(title: string, description: string, icon: string, color: string): DocumentItem {
  const doc: DocumentItem = {
    id: `doc-${Date.now()}`,
    title,
    description,
    icon,
    color
  };
  documents.unshift(doc);
  return doc;
}

export const store = {
  getBootstrap() {
    return {
      categories,
      destinations,
      recommended: destinations.filter((d) => recommendedIds.includes(d.id)),
      trips,
      profile,
      documents
    };
  },
  getFavorites() {
    return destinations.filter((d) => d.isFavorite);
  },
  updateFavorite(destinationId: string, isFavorite?: boolean) {
    if (typeof isFavorite === "boolean") {
      return setFavorite(destinationId, isFavorite);
    }
    return toggleFavorite(destinationId);
  },
  createTrip(destinationId: string) {
    return bookTrip(destinationId);
  },
  getTrips(type?: string) {
    if (type === "upcoming") {
      return trips.filter((t) => t.isUpcoming);
    }
    if (type === "history") {
      return trips.filter((t) => !t.isUpcoming);
    }
    return trips;
  },
  getProfile() {
    return profile;
  },
  updateProfile(name?: string, email?: string) {
    if (typeof name === "string" && name.trim().length > 0) {
      profile.name = name.trim();
    }
    if (typeof email === "string" && email.trim().length > 0) {
      profile.email = email.trim();
    }
    return profile;
  },
  getDocuments() {
    return documents;
  },
  createDocument(title: string, description: string, icon: string, color: string) {
    return addDocument(title, description, icon, color);
  }
};
