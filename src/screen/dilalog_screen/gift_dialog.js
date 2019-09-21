import React  from 'react';
import { Dialog } from 'react-native-simple-dialogs';



const CustomDialog =({ isShow, isHide}) => (
    <Dialog
    visible={this.state.dialogVisible}
    title="Custom Dialog"
    onTouchOutside={() => this.setState({dialogVisible: false})} >
    <View>
        // your content here

        <Text >Hello </Text>
    </View>
</Dialog>

    )


export default CustomDialog;    

