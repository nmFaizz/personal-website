import { Document as RichTextDoc } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export function readingTime(text: string): string { 
    const averageWPM = 250; 

    const wordCount = text.trim().split(/\s+/).length;

    const readingTimeMinutes = wordCount / averageWPM;

    const formattedReadingTime = readingTimeMinutes > 1 
        ? `${Math.round(readingTimeMinutes)} min` 
        : " Less than 1 min";

    return formattedReadingTime;
}

export function getRichTextString(text: RichTextDoc): string {
    const richTextDoc: RichTextDoc = text
    const htmlString = documentToHtmlString(richTextDoc)
    const strippedString = htmlString.replace(/<[^>]*>/g, "")
    return strippedString
}