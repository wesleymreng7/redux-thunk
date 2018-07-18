import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'
class UserAgent extends React.Component {
    componentDidMount() {
        this.props.loadUserAgent()
    }
    render() {
        if(this.props.isFetching) {
            return <span>Loading</span>
        } if(this.props.error) {
            return <span>Error</span>
        }
        return <span>{this.props.data['user-agent']}</span>
    }
}
export const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        loadUserAgent: () => dispatch(actions.loadUserAgent())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)