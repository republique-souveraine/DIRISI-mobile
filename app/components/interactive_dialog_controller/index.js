// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showModal} from 'app/actions/navigation';

import InteractiveDialogController from './interactive_dialog_controller';

function mapStateToProps(state) {
    return {
        triggerId: state.entities.integrations.dialogTriggerId,
        dialog: state.entities.integrations.dialog || {},
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            showModal,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveDialogController);
