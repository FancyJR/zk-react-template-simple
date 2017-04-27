import React, {Component} from 'react';
import {addClass, removeClass} from 'zk-react/utils';
import './style.less';
/**
 * 页面未找到分为两种情况：
 * 1. path配置错误，前端没有对应的route
 * 2. 菜单中有url，为打开iframe菜单，前端本身就没有配置route
 */
export class LayoutComponent extends Component {
    state = {
        url: null,
    }

    componentWillReceiveProps(nextProps) {
        const {currentSideBarMenuNode} = nextProps;
        this.handleIframe(currentSideBarMenuNode);
    }

    componentWillMount() {
        const {currentSideBarMenuNode} = this.props;
        this.handleIframe(currentSideBarMenuNode);
    }

    handleIframe(currentSideBarMenuNode) {
        const url = currentSideBarMenuNode && currentSideBarMenuNode.url;
        if (url) {
            this.setState({url});
            addClass('#frame-content', 'frame-content-iframe');
        } else {
            removeClass('#frame-content', 'frame-content-iframe');
            this.setState({url: null});
        }
    }

    componentWillUnmount() {
    }

    render() {
        const {url} = this.state;
        if (url) {
            return (
                <iframe src={url} frameBorder={0} style={{width: '100%', height: '100%'}}/>
            );
        }
        return (
            <div className="error-page">
                error 404
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state.frame,
    };
}
