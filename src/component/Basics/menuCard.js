import React from 'react'

const menuCard = ({ menuData }) => {

    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((currEle) => {
                        
                        const {id , image  , name , category ,description  } = currEle;
                        return (
                            <>
                                <div className='card-container' key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{id}</span>
                                            <span className='card-author subtle'>{name}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description subtle'>{description}</span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        <img src={image} alt="images" className='card-media' />
                                        <span className='card-tag subtle'><a href={'https://www.google.com'} target={"_blank"}>Order Now</a></span>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </section>
        </>
    );
};

export default menuCard;