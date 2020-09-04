/**
 * @file [Deep]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-04 00:53:29
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React, {PureComponent} from 'react';
import {Helmet} from 'react-helmet-async';

type Props = {};
type State = {};
class Deep extends PureComponent<Props, State> {
    state: State = {};

    static defaultProps = {};

    render() {
        return (
            <div>
                <Helmet>
                    <title>Deep</title>
                    <meta name="description" content="Deep" />
                    <meta name="keywords" content="Deep" />
                </Helmet>
                Deep
            </div>
        );
    }
}
export default Deep;
