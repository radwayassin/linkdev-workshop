export interface Slide {
    id: number,
    brief: string,
    order: number,
    title: string,
    imgurl: string,
    category: string,
    colorCode: string
}
export interface HighlightBanner {
    slides: Slide[];
}
export interface News {
    News: NewsItem[];
}
export interface NewsItem {
    id: string,
    title: string,
    content: string,
    categoryID: string,
    urlToImage: string,
    description: string,
    publishedDate: string,
    showOnHomepage: string,
    categoryName:string,
}
export interface Categories {
    newsCategory: Category[];
}
export interface Category {
    id: number,
    name: string
}