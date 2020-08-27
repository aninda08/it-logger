import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');

    const onChange = e => {
        searchLogs(text.current.value);
    }
    return (
        <nav style={{marginBottom:'30'}} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search Logs.." ref={text} onChange={onChange} />
                            <label class="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}
SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(SearchBar);