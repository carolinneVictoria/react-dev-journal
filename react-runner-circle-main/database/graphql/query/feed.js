import { gql } from "@apollo/client";

export const GET_FEED = gql`
    query GetFeed {
        allFeeds {
            user
            time
            stats
            description
            }
    }
`;
