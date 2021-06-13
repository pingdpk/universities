import React, {useEffect, useState} from "react";
import '../App.css';
import Header from './Header.jsx'
import SearchBox from './SearchBox.jsx'
import Pagination from "./Pagination";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import WaitingLoader from "./WaitingLoader";
import University from "../store/models/university";

function Home() {

    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const [isSidePanelActive, setSidePanelActive] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState(new University());

    const getData = () => {
        return dispatch => {
            axios.get('http://universities.hipolabs.com/search?country=india')
                .then(resp => dispatch({
                    type: 'FETCH_DATA',
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
        console.log(model);
        setSelectedUniversity(model);
    };

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div className="container">
            <SearchBox/>

            {content.data ? (
                <div className='containerBody animate-bottom'>
                    {content.data.map((university, i) => (

                        <div className="universityName" key={university.name} onClick={()=> showDetails(i, university)}>
                            {university.name}
                        </div>

                    ))}
                </div>
            ) : (<WaitingLoader/>)}

            <div className={isSidePanelActive? 'sidepanel active' : 'sidepanel'}   onClick={()=> closeNav()}>
                <a href="javascript:void(0)" className="closebtn" onClick={()=> closeNav()}>×</a>


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
                                <h5>Web site:</h5> <a href={selectedUniversity.web_pages[0]}>{selectedUniversity.domains[0]}</a>
                            </div>

                        </div>
                    </div>
                ) : <WaitingLoader/>

                }

            </div>

            {content.data ? (<Pagination/>) : ''}



        </div>
    );
}

export default Home;
