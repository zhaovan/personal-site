import React from "react";
import shared from "../../styles/Shared.module.css";

import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

export default function ProjectTemplate({ data }) {
  return (
    <div className={shared.page}>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <ReactMarkdown children={data.content} rehypePlugins={[rehypeRaw]} />
      </div>
    </div>
  );
}

ProjectTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import("../../project-files/" + slug + ".md");
  const data = matter(content.default);

  return { data };
};
