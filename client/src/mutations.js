import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser {
    me {}
  }
`;

export const ADD_USER= gql`
  mutation addUser {
    me {}
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook {
    me {}
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook {
    me {}
  }
`;