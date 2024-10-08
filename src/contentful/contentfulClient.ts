import { createClient } from "contentful"

const {
    CONTENTFUL_SPACE_ID, 
    CONTENTFUL_ACCESS_TOKEN, 
} = process.env

export const client = createClient({
    space: CONTENTFUL_SPACE_ID!,
    environment: 'master',
    accessToken: CONTENTFUL_ACCESS_TOKEN!
})
 

