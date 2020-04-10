import React, { Fragment, useContext } from "react";
import { ReactiveContext } from "../App";
import Container from "../components/body";
import Loading from "../components/loading";
import Navbar from "../components/navbar";
import SubTitle from "../components/sub-title";
import Title from "../components/title";
import { Pluralize } from "../helpers/strings";
import useGithub from "../hooks/use-github";
import useGithubRepos from "../hooks/use-github-repos";

const sectionClassName = "w-100 mw9 ph2 ph3-ns items-start";

const myReposTitle = (repos: unknown[]) =>
  Pluralize("My #{%} #{repo}", repos.length, { repo: "repos" });

const Home = () => {
  const {
    values: { me, linkedin }
  } = useContext(ReactiveContext);
  const [user, loadingUser] = useGithub(me as string);
  const [repos, loadingRepos] = useGithubRepos(user);
  return (
    <Container className="w-100 mw9">
      <Navbar />
      <Container className={`${sectionClassName} items-center`}>
        <Loading loading={loadingUser}>
          <img
            src={user?.avatar_url}
            className="mw9 w2 br-100 mr2"
            alt="avatar"
          />
        </Loading>
        <Title>
          {me} home{" "}
          {!loadingUser && (
            <Fragment>
              -{" "}
              <a
                className="text underline-hover no-underline hover-secondary"
                href={user?.blog}
              >
                Blog
              </a>
            </Fragment>
          )}
        </Title>
      </Container>
      <Container className={`${sectionClassName} justify-around`}>
        <Loading loading={loadingRepos}>
          <Container className="w-50-ns w-100">
            <SubTitle className="w-100">About me</SubTitle>
            <p className="w-100">{user?.bio}</p>
            <dl className="lh-title ph4 pv2 mt0">
              <dt className="f6 b">From</dt>
              <dd className="ml0">{user?.location}</dd>
              <dt className="f6 b mt2">LinkedIn</dt>
              <dd className="ml0">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-hover no-underline text hover-secondary"
                  href={`https://linkedin.com/in/${linkedin}`}
                >
                  {linkedin}
                </a>
              </dd>
              <dt className="f6 b mt2">Favorite Artist</dt>
              <dd className="ml0">Kanye West</dd>
              <dt className="f6 b mt2">Favorite Food</dt>
              <dd className="ml0">Cheese Pizza</dd>
              <dt className="f6 b mt2">Least Favorite Flavor</dt>
              <dd className="ml0">Cherry</dd>
              <dt className="f6 b mt2">Favorite Hobby</dt>
              <dd className="ml0">Eating Cheese Pizza</dd>
            </dl>
          </Container>
        </Loading>
        <Loading loading={loadingRepos}>
          <Container className="w-50-ns w-100">
            <SubTitle className="w-100">{myReposTitle(repos)}</SubTitle>
            <ul className="list flex-start">
              {repos.map(x => (
                <li className="dib">
                  <a
                    href={x.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="f6 f5-ns b db pointer pa2 link underline-hover text hover-secondary"
                  >
                    {x.name}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </Loading>
      </Container>
    </Container>
  );
};

export default Home;
