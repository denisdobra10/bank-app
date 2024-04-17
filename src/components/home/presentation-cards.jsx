import React from 'react'
import PresentationLandscapeCard from './presentation-landscape-card'
import InterestImage from '../../assets/get-interest.svg';
import TransferImage from '../../assets/transfer.svg';
import ExchangeImage from '../../assets/exchange.svg';


function PresentationCards() {
    return (
        <>
            <PresentationLandscapeCard
                image={InterestImage}
                title={'Obtine dobanda atragatoare pentru banii tai'}
                description={'Foloseste contul de economii si incepe sa castigi bani regulat, chiar acum!'}
                buttonText={'Sunt interesat'}
                toPath={'/'}
            />
            <PresentationLandscapeCard
                imageFirst={false}
                image={TransferImage}
                title={'Transferuri instante si securizate'}
                description={'Apasa un click si transfera bani unui prieten! Incasezi la fel de rapid :)'}
                buttonText={'Suna fascinant'}
                toPath={'/'}
            />
            <PresentationLandscapeCard
                image={ExchangeImage}
                title={'Schimburi valutare in aplicatie'}
                description={'Nu, nu iti luam comision indiferent de valoarea schimbului. De asemenea, vrem sa te asiguram ca vei avea acces la acest serviciu non-stop!'}
                buttonText={'M-ai convins'}
                toPath={'/'}
            />
        </>
    )
}

export default PresentationCards