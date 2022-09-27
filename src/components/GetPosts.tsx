import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "../graphql/Queries";

export const GetPosts: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);

  useEffect(() => {
    console.log({ error, loading, data });
  }, [data]);

  return <div>GetPosts</div>;
};
