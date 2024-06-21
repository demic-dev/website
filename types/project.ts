export type MetadataProject = {
  id: string;
  title: string;
  description: string;
  order: number;
  tags: string[];
  headAlt: string;
  headImage: string;
};

type ProjectContent = MetadataProject & {
  contentHtml: string;
};

export type ParsedProject = MetadataProject & ProjectContent;
