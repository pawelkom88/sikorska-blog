import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, INLINES} from "@contentful/rich-text-types";
import React from "react";

function paragraphClass(node: string) {
  const className = "my-4 text-justify text-base lg:text-lg";
  return className;
}

function headingClass(node: string) {
  const className = "text-3xl lg:text-5xl mt-4 mb-8 font-bold leading-8 tracking-tight";
  return className;
}
function heading3Class(node: string) {
  const className = "text-2xl lg:text-3xl mt-4 mb-8 font-bold leading-8 tracking-tight";
  return className;
}

function ulClass(node: string) {
  const className = "list-disc my-4 indent-1.5 text-justify text-base lg:text-lg";
  return className;
}

export const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className={headingClass(node)}>{children}</h1>
    ),

    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className={heading3Class(node)}>{children}</h2>
    ),

    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      return (
        <p style={{textAlign: "justify", lineHeight: "1.8"}} className={paragraphClass(node)}>
          {children}
        </p>
      );
    },

    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => {
      return <ul className={ulClass(node)}>{children}</ul>;
    },

    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a className="text-[#c29b38] underline" href={node.data.uri}>
        {children}
      </a>
    ),

    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });

      return <li style={{listStyleType: "disc", marginLeft: "2rem"}}>{UnTaggedChildren}</li>;
    },

    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-justify text-base lg:text-lg">
        {children}
      </blockquote>
    ),
  },
};
