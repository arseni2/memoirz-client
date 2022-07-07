import React, {useState} from 'react';
import Dialog, {PropsDialogType} from "../../components/Dialog/Dialog";
import Input from "../../components/Input/Input";

type propsType = {
    onEnter: (title: string) => void
}
const CreateNoteDialog = React.memo((props: PropsDialogType & propsType) => {
    const [title, setTitle] = useState('Enter title')
    return (
        <Dialog open={props.open} setOpen={props.setOpen}>
            <h1 style={{textAlign: 'center'}}>
                Create note
            </h1>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    props.onEnter(title)
                }
            }} />
        </Dialog>
    );
});

export default CreateNoteDialog;