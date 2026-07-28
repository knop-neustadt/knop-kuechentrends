export interface Partner {
  id: string;
  name: string;
  text: string;
  imgSrc: ImageMetadata;
  tags?: string[];
  branch:string;
  since:string;
  origin:string;
  segment:string;
}