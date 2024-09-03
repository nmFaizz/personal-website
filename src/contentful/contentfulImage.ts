import { ImageAsset } from "./types/contentfulTypes"

export interface ContentImage {
    src: string | undefined,
    width: number,
    height: number,
    alt: string | undefined  
}

export function contentfulImageParse(asset: ImageAsset): ContentImage | null {
    if (!asset) return null
    
    if (!("fields" in asset)) return null

    return {
        src: asset.fields.file?.url,
        width: asset.fields.file?.details.image?.width || 0,
        height: asset.fields.file?.details.image?.height || 0,
        alt: asset.fields.title
    }
}