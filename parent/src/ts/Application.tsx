import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import { Toast } from 'library';

interface IAppState {
    toast: string;
}

export default function Application() {
    const [state, setState] = useState<IAppState>({ toast: "Hello" });

    function hideToast() {
        setState({ ...state, toast: "" });
    }
    return (
        <React.Fragment>
            <Container>
                {state.toast != "" &&
                    <Toast duration={3000} handleClose={hideToast} message={state.toast} open={true} severity={"success"} title={"Login"} />
                }
            </Container>
        </React.Fragment>
    )
}
