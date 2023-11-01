export interface Room {
    totalRooms?: number;
    availableRooms: number;
    bookedRooms?: number;
    }

    export interface RoomsList {
        roomNumber?: string;
        roomsType: string;
        amenities: string;
        price: number;
        photos: string;
        checkIn: Date;
        checkOut: Date;
        rating: number;
    }