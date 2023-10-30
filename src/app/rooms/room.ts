export interface Room {
    totalRooms?: number;
    availableRooms: number;
    bookedRooms?: number;
    }

    export interface RoomsList {
        roomsType: string;
        amenities: string;
        price: number;
        image: string;
        checkIn: Date;
        checkOut: Date;
        rating: number;
    }