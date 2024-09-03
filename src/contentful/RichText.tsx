import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { 
    BLOCKS,  
    NodeData, 
    Document as RichTextDoc 
} from "@contentful/rich-text-types";

import React from "react";

import Image from "next/image";

import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface RichTextProps extends React.HTMLAttributes<HTMLElement> {
    document: RichTextDoc | null,
}

export default async function RichText({ 
    document, 
    className: classNames,
    ...rest
}: RichTextProps) {
    if (!document) {
        return null
    }

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
                const { file, title } = node.data.target.fields;
                const imageUrl: string = file.url;

                const { width, height } = file.details.image
    
                return (
                    <Image 
                        src={"https:" + imageUrl} 
                        alt={title} 
                        width={width}
                        height={height}
                    />
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: NodeData) => {
                if (node.data.target.sys.contentType.sys.id === "code") {
                    const { code } = node.data.target.fields;
                    return (
                        <div className="rounded-md overflow-hidden">
                            <ReactSyntaxHighlighter 
                                language="javascript" 
                                style={atomOneDark}
                                showLineNumbers
                                customStyle={{
                                    padding: "1rem",
                                    fontSize: "1rem",
                                }}
                            >
                                {code}
                            </ReactSyntaxHighlighter>
                        </div>
                    )
                }
            }
        }
    }

    return (
        <div className={`${classNames} rich-text-style`} {...rest}>
            {documentToReactComponents(document, options)}
        </div>
    )
}