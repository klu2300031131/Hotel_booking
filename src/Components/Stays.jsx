import React from "react";
import "./Stays.css";

const Stays = () => {
    return (
        <div className="stays">
            <h2>Discover your new favourite stay</h2>
            <div className="stays-grid">
                <a href="/category/villa" >
                    <div className="stay-card">
                        <img src="https://c4.wallpaperflare.com/wallpaper/618/17/100/resort-property-estate-swimming-pool-wallpaper-preview.jpg" alt="houseboat" className="stay-image" />
                        <div className="stay-label">Villa</div>
                    </div>
                </a>
                <a href="/category/Houseboat">
                    <div className="stay-card">
                        <img src="https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2Vib2F0fGVufDB8fDB8fHww://images.unsplash.com/photo-1604014237744-3b1d3ef5a724" alt="houseboat" className="stay-image" />
                        <div className="stay-label">Houseboat</div>
                    </div> 
                </a>
                <a href="/category/Resort">
                    <div className="stay-card">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9b/44/ca/nirali-resorts.jpg?w=700&h=-1&s=1" alt="houseboat" className="stay-image" />
                        <div className="stay-label">Resorts</div>
                    </div> 
                </a>
                <div className="stay-card">
                    <a href="/category/Hostels">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Gg5JDAjo325QVNmqyin2K-0pbWDROXFMAQ&s" alt="houseboat" className="stay-image" />
                        <div className="stay-label">Hostels</div>
                    </a>
                </div>
                <a href="/category/Houseboat"> 
                    <div className="stay-card">
                        <img src="https://thumbs.dreamstime.com/b/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.jpg" alt="houseboat" className="stay-image" />
                        <div className="stay-label">All inclusive</div>
                    </div> 
                </a>
            </div>
        </div>
    );
};

export default Stays;