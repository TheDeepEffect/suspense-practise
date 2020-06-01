import React, { Suspense } from 'react'
import { IssuesList } from '../comopnents/IssuesList'
import { ErrorBoundary } from '../comopnents/ErrorBoundry'
import { fetchIssues } from '../services'


export class IssuesListPage extends React.Component{
    state={
        resource:fetchIssues('repos/facebook/react/issues')
      }
    render(){
        return (
            <div>
                <Suspense fallback={<h2>Loading Issues...</h2>}  >
                <IssuesList resource={this.state.resource}  />
                </Suspense>
            </div>
        )
    }
}