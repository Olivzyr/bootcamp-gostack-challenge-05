import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container/styles';
import { Loading, Owner, IssueList, StateIssues, Page } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    state: 'open',
    page: 1,
    loading: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const { state, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    // Execute all promisses in the same time
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state,
          page,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: 0,
    });
  }

  handleInputChange = async e => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const state = e.target.value;

    const { page } = this.state;

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        page,
        per_page: 5,
      },
    });
    this.setState({
      state,
      issues: response.data,
    });
  };

  // Create pagination issues
  handlePage = async e => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const pageTransition = e.target.value;
    const { state } = this.state;

    let { page } = this.state;

    if (pageTransition === 'next') {
      page += 1;
    } else {
      page -= 1;
    }

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        page,
        per_page: 5,
      },
    });
    this.setState({
      state,
      page,
      issues: response.data,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <StateIssues>
          <strong>Issue State</strong>
          <select onChange={this.handleInputChange}>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="all">All</option>
          </select>
        </StateIssues>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Page>
          <button onClick={this.handlePage} value="last" disabled={page < 2}>
            Previous Page
          </button>
          <p>{page}</p>
          <button onClick={this.handlePage} value="next">
            Next Page
          </button>
        </Page>
      </Container>
    );
  }
}
