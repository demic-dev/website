export type MetadataPost = {
  id: string;
  title: string;
  date: string;
  readingTime: number;
};

export type ParsedPost = MetadataPost & {
  contentHtml: string;
};
