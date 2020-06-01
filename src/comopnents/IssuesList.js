import React from 'react'
import { List, Avatar } from 'antd';


 

export class IssuesList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            issues: props.resource.issues.read()
        }
    }
        
    render(){
        console.log(this.state.issues);
        
        return (
            <div className="issue-list"  >
                <List itemLayout="horizontal"
                bordered={true}
                    dataSource={this.state.issues}
                    renderItem={item=><List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.user.avatar_url}/>}
                        title={item.title}
                        description={item.body}
                        />
                    </List.Item>}
                />
            </div>
        )
    }
}