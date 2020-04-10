import { useEffect, useState } from "react";
import hermes from "../http-client";

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

const useGithub = (user: string): [GithubUser | null, boolean] => {
  const [state, setState] = useState<GithubUser | null>(
    null as GithubUser | null
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    hermes
      .get<GithubUser>(`https://api.github.com/users/${user}`)
      .then(response => setState(response.data))
      .catch(() => setState(null))
      .finally(() => setLoading(false));
  }, [user]);
  return [state, loading];
};

export default useGithub;
