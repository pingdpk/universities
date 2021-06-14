import React, {useEffect, useState} from "react";
import '../App.css';
import SearchBox from './SearchBox.jsx'
import Pagination from "./Pagination";
import axios from 'axios';
import WaitingLoader from "./WaitingLoader";
import University from "../models/university";
import constants from '../util/constants'

function Home(props) {
    const [userClicked, setUserClicked] = useState(99999999);
    const [isSidePanelActive, setSidePanelActive] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState(new University());

    const getData = () => { //TODO: Can be moved to utils and pass url as arg
        return dispatch => {
            axios({
                method: constants.UNIVERSITIES.SEARCH.METHOD,
                url: constants.UNIVERSITIES.SEARCH.API
            })
                .then(resp => dispatch({
                    type: constants.STORE_KEY_WORDS.FETCH,
                    data: resp.data
                }));
        }
    };

    const closeNav = () => {
        setSidePanelActive(false);
    };

    function fillModel(id, university) {
        return new University(
            id,
            university.name,
            university.country,
            university['alpha_two_code'],
            university['state-province'],
            university.web_pages,
            university.domains
        )
    }

    const showDetails = (id, university) => {
        setSidePanelActive(true);
        const model = fillModel(id, university);
        setSelectedUniversity(model);
        setUserClicked(id);
    };

    useEffect(() => {
        props.dispatch(getData());
    }, []);

    return (
        <div className="container">
            {props.content.data ? (
                <>
                    <SearchBox/>

                    <div className='containerBody animate-bottom'>
                        {props.content.data.map((university, i) => (

                            <div className={userClicked === i ? 'selected universityName' : 'universityName '}
                                 key={university.name}
                                 onClick={() => showDetails(i, university)}>
                                {university.name}
                            </div>

                        ))}
                    </div>

                    <Pagination/>
                </>
            ) : (<WaitingLoader/>)}

            <div className={isSidePanelActive ? 'sidepanel active' : 'sidepanel'} onClick={() => closeNav()}>
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>

                {selectedUniversity ? (
                    <div className="">
                        <h3>{selectedUniversity.name}</h3>
                        <div className='uDetails'>
                            <div>
                                This university is in {` `}
                                {selectedUniversity.state ? (<span>{selectedUniversity.state},{` `}</span>) : ''}
                                {selectedUniversity.country} [{selectedUniversity.countryCode}].
                            </div>
                            <div>
                                <h5>Web site:</h5> <a
                                href={selectedUniversity.web_pages[0]}>{selectedUniversity.domains[0]}</a>
                            </div>

                        </div>
                    </div>
                ) : <WaitingLoader/>

                }

            </div>
        </div>
    );
}

export default Home;
