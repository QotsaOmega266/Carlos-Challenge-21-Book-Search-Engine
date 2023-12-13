import { gql } from "@apollo/client";

export const GET_BOOK_AND_USER_INFO = gql`
    query MyInfo {
        bookInfo {
            title
            author
            genre
            bookId
        }
        userInfo {
            name
            email
            age
        }
    }
`;
