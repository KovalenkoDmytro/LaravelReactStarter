export interface RealEstate {
    id: number;
    street: string;
    city: string;
    postalCode: string;
    building: string;
    shortDescription: string;
    longDescription: string;
    name: string;
    parameters?: [{}];
    media?: [{
        original_url: string
        preview_url: string;
    }];
}
