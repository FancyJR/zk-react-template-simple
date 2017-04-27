import React, {Component} from 'react';

export const PAGE_ROUTE = '/example/page';
export class LayoutComponent extends Component {
    state = {}

    componentDidMount() {

    }

    render() {
        return (
            <div>
                example template page
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state,
    };
}
