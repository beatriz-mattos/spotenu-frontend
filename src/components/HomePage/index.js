import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { HomePageWrapper, Section } from "./styles";

function HomePage () {
    return (
        <HomePageWrapper>
            <Header />
            
            <Section><p>HomePage</p></Section>
    
            <Footer />
        </HomePageWrapper>
    );
};

export default HomePage;