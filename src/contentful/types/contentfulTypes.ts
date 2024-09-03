import { AssetLink, Asset } from "contentful"

export type ImageAsset = Asset<undefined, string> | {
    sys: AssetLink 
}