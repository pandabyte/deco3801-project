
import * as React from 'react';
import { } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import HelpStore from './HelpStore';
import QuestionForm from './QuestionForm';
import Faq from './Faq';

@observer
export default class Help extends React.Component {

    render() {

        return (

            <div className='text-left p-5'>

                {/* Form for submitting a new question */}
                <QuestionForm />

                <br />

                {/* Map question and answers to a dropdown accordion component */}
                <Faq />

            </div>
        )
    }
}




