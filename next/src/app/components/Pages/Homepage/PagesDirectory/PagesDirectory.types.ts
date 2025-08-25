export interface PageDirectoryData {
  title: string;
  cards: Array<{
    _id: string;
    title: string;
    description: string;
    image?: {
      asset?: {
        _id?: string;
        _ref?: string;
        url?: string;
      };
      url?: string;
    };
    mainImage?: {
      asset?: {
        _id?: string;
        _ref?: string;
        url?: string;
      };
      url?: string;
    };
    figure?: {
      image?: {
        asset?: {
          _id?: string;
          _ref?: string;
          url?: string;
        };
        url?: string;
      };
    };
    [key: string]: unknown;
  }>;
}
