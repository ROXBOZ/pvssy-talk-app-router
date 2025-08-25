export interface CardBaseProps {
  _id?: string;
  name?: string;
  label?: string;
  title?: string;
  mainImage?: {
    asset?: {
      _ref?: string;
      _id?: string;
      url?: string;
    };
    url?: string;
    [key: string]: unknown;
  };
  filters?: string[];
  href?: string;
  showButton: boolean;
  [key: string]: unknown;
}
