import React from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions'
class Info extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        if(this.props.isFetching) {
            return <span>Loading</span>
        } if(this.props.error) {
            return <span>Error</span>
        }
        return <span>{this.props.data.origin}</span>
    }
}
export const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info)