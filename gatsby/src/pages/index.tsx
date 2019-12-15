import { graphql } from 'gatsby'
import React from 'react';
import Layout from '../components/layout';

export default class Index extends React.Component<any, any>{
  constructor(public props: any, public context: any) {
    super(props, context);
  }

  public render() {
    const {
      rickAndMorty: { characters },
    } = this.props.data;

    return (
      <Layout>
        <h2>Rick and Morty characters</h2>
        <div className="card-container">
          {characters.results.map((value, index) => this.renderCard(value, index))}
        </div>
      </Layout>
    )
  }

  private renderCard(value: any, index: number) {
    return (
      <div className="card" key={index}>
        <div className="card-content">
          <img src={value.image} />
          <div className="card-info">
            <p className="text-center bold">{value.name}</p>
            <p className="text-center">{value.gender} {value.species}</p>
            <ul>
              <li>Origin: {value.origin.name}</li>
              <li>Location: {value.location.name}</li>
              <li>Episodes: {value.episode.length}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
    
export const GatsbyQuery = graphql`{
  rickAndMorty {
    characters(page: 0) {
      results {
        name
        image
        gender
        species
        episode {
          episode
        }
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
}`
