class Trip {
  final String id;
  final String destination;
  final String location;
  final String date;
  final String status;
  final String imagePath;
  final bool isUpcoming;

  Trip({
    required this.id,
    required this.destination,
    required this.location,
    required this.date,
    required this.status,
    required this.imagePath,
    required this.isUpcoming,
  });

  factory Trip.fromJson(Map<String, dynamic> json) {
    return Trip(
      id: json['id']?.toString() ?? '',
      destination: json['destination']?.toString() ?? '',
      location: json['location']?.toString() ?? 'Vietnam',
      date: json['date']?.toString() ?? '',
      status: json['status']?.toString() ?? '',
      imagePath: json['imagePath']?.toString() ?? '',
      isUpcoming: json['isUpcoming'] == true,
    );
  }
}
