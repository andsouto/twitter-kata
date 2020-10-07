export class HotelService {

	// Collaborators(?)

	addHotel(hotelId: unknown, hotelName: unknown): void {
		// should throw an exception when the hotel ID already exists or create the hotel otherwise.
	}

	setRoom(hotelId: unknown, number: unknown, roomType: unknown): void {
		// should throw an exception if the hotel does not exist.
		// should insert or update a room according to its room number.
	}

	findHotelBy(hotelId: unknown): unknown {
		// should return all the information about the number of rooms for the specified ID.
		return undefined;
	}

}
