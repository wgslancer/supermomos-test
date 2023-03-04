import Box from "@/components/base/Box";
import Tag from "@/components/base/Tag";
import { memo } from "react";

interface TagsSelectProps {
  tagsSelected: Array<string>;
  tags: Array<string>;
  onRemoveTag: (tag: string) => void;
  onSelectTag: (tag: string) => void;
}

const TagsSelect = ({
  tagsSelected,
  onRemoveTag,
  onSelectTag,
  tags,
}: TagsSelectProps) => {
  return (
    <Box className="create-social-tags-select">
      <p className="title">Tag your social</p>
      <p className="subtitle">
        Pick tags for our curation engine to work its magin
      </p>
      <Box className="tags-container tags-selected-container">
        {tagsSelected.map((tag) => (
          <Tag selected key={tag} onClick={() => onRemoveTag(tag)}>
            {tag}
          </Tag>
        ))}
      </Box>
      <Box className="tags-container">
        {tags.map((tag) => (
          <Tag key={tag} onClick={() => onSelectTag(tag)}>
            {tag}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

export default memo(TagsSelect);
