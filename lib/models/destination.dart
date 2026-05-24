class Destination {
  final String id;
  final String name;
  final String location;
  final String rating;
  final String duration;
  final String imagePath;
  final bool isFavorite;
  final String description;
  final String price;
  final String reviewsCount;
  final String category;

  Destination({
    required this.id,
    required this.name,
    required this.location,
    required this.rating,
    required this.duration,
    required this.imagePath,
    this.isFavorite = false,
    this.description = "",
    this.price = "",
    this.reviewsCount = "0",
    this.category = "Địa điểm",
  });

  Destination copyWith({
    String? id,
    String? name,
    String? location,
    String? rating,
    String? duration,
    String? imagePath,
    bool? isFavorite,
    String? description,
    String? price,
    String? reviewsCount,
    String? category,
  }) {
    return Destination(
      id: id ?? this.id,
      name: name ?? this.name,
      location: location ?? this.location,
      rating: rating ?? this.rating,
      duration: duration ?? this.duration,
      imagePath: imagePath ?? this.imagePath,
      isFavorite: isFavorite ?? this.isFavorite,
      description: description ?? this.description,
      price: price ?? this.price,
      reviewsCount: reviewsCount ?? this.reviewsCount,
      category: category ?? this.category,
    );
  }

  factory Destination.fromJson(Map<String, dynamic> json) {
    return Destination(
      id: json['id']?.toString() ?? '',
      name: json['name']?.toString() ?? '',
      location: json['location']?.toString() ?? '',
      rating: json['rating']?.toString() ?? '',
      duration: json['duration']?.toString() ?? '',
      imagePath: json['imagePath']?.toString() ?? '',
      isFavorite: json['isFavorite'] == true,
      description: json['description']?.toString() ?? '',
      price: json['price']?.toString() ?? '',
      reviewsCount: json['reviewsCount']?.toString() ?? '0',
      category: json['category']?.toString() ?? 'Địa điểm',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'location': location,
      'rating': rating,
      'duration': duration,
      'imagePath': imagePath,
      'isFavorite': isFavorite,
      'description': description,
      'price': price,
      'reviewsCount': reviewsCount,
      'category': category,
    };
  }
}
