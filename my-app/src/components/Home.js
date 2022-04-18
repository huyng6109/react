import { Component } from "react";
import '../css/Home.css';

export default class Home extends Component {
    render(){
        return (
            <div className="main">
                <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/273375222_349418603855337_137859101732476569_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=9EgpBfsAZaEAX95PVGr&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-uhs_4b_GWa5z69WPqj2vkKtZTTZMdcAfFVTcSdLdgog&oe=6262FB0A" alt="Banner" className="banner"/>
                <p className="text">SPONSOR</p>
                <img src="https://honkaixgenshincontest.com/wp-content/uploads/2021/06/logo-wide-Red-PNG-e1623773013260.png" alt="sponsor" className="sponsor"/>
            </div>
        )
    }
}