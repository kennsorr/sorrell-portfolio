import React, { Fragment} from 'react';
import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import "../../styles/layout/PageHeader.scss"

const PageHeader = (props) => {
    let { title, desc, display } = props;
    //console.log("props pageheader: ", title)
    return (
        <Fragment>
            <Helmet>
                {title && title !=="" ?
                    <title>{title} | Kenneth Sorrell Portfolio</title> :
                    <title>Kenneth Sorrell Portfolio</title> 
                }
                {desc && 
                    <meta name="description" content={desc} />
                }
                
            </Helmet>
            
            
            {display !== "none" &&
                <header>
                    <div class="wrapper">
                        <h1>{title}</h1>
                    </div>
                </header>
            }
            
            
        
        </Fragment>
        
    )
}
PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
}
PageHeader.defaultProps = {
    title:"",
    desc: "Kenneth Sorrell's Porfolio",
    display: "hide",
    
}

export default PageHeader;