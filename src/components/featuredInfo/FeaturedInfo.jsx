import React from 'react'
import './featuredInfo.css'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">titleExample</span>
                <div className="featuredContainer">
                    <span className="featuredOne">featuredOneExample</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">titleExample</span>
                <div className="featuredContainer">
                    <span className="featuredTwo">featuredTwoExample</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">titleExample</span>
                <div className="featuredContainer">
                    <span className="featuredTwo">featuredTwoExample</span>
                </div>
            </div>
        </div>
    )
}
