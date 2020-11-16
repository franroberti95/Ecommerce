import React from "react"
import Head from 'next/head'
import styled from "styled-components"

const Nike = () =><div>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Container>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gF0rrpMH-Jo?autoplay=1&mute=1&loop=1&controls=0&enablejsapi=1" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
    </Container>
    <SvgContainer>
        <svg width="100%" height="100%">
            <defs>
                <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect width="100%" height="100%" fill="#fff"/>
                    <svg  version="1.1" width="100%" height="100%" fillOpacity="0.7"
                          viewBox="135.5 341.375 200 132"  >
                        <path   d="M159.23,431.966c-5.84-0.232-10.618-1.83-14.354-4.798c-0.713-0.567-2.412-2.267-2.982-2.984
                                c-1.515-1.905-2.545-3.759-3.232-5.816c-2.114-6.332-1.026-14.641,3.112-23.76c3.543-7.807,9.01-15.55,18.548-26.274
                                c1.405-1.578,5.589-6.193,5.616-6.193c0.01,0-0.218,0.395-0.505,0.876c-2.48,4.154-4.602,9.047-5.758,13.283
                                c-1.857,6.797-1.633,12.63,0.656,17.153c1.579,3.116,4.286,5.815,7.33,7.307c5.329,2.611,13.131,2.827,22.659,0.632
                                c0.656-0.152,33.162-8.781,72.236-19.176c39.074-10.396,71.049-18.895,71.054-18.888c0.011,0.009-90.78,38.859-137.911,59.014
                                c-7.464,3.191-9.46,3.997-12.969,5.229C173.76,430.721,165.725,432.224,159.23,431.966z"/>
                    </svg>
                </mask>
            </defs>
            <rect width="100%" height="100%" mask="url(#mask)" fillOpacity="1"/>
        </svg>
    </SvgContainer>

</div>;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const SvgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    
    path {
      stroke-dasharray: 40;
      animation: dash 10s linear infinite;
      stroke: white;
    }
    
    @keyframes dash {
      to {
        stroke-dashoffset: 1000;
      }
    }
`;

export default Nike