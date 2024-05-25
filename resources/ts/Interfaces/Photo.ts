
export interface Photo {
    id:number,
    alt_description:string,
    urls: {
        thumb: string,
        regular: string
    },
}
