
export interface Market extends Document {
    id?: string;
    name: string;
    description: string;
    geolocation: object;
    category: string;
    imageUrl: string;
    date: Date;
}
