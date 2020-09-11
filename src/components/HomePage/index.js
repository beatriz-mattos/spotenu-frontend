import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import { SectionBackground, Title, Subtitle } from "./styles";

function HomePage () {
    return (
        <div>
            <Header />
            
            <SectionBackground>
                <div>
                    <Title>Escutar muda tudo</Title>
                    <Subtitle>Milhões de <strong>músicas</strong> e <strong>podcasts</strong> para explorar!</Subtitle>
                </div>
            </SectionBackground>
    
            <Footer />
        </div>
    );
};

export default HomePage;