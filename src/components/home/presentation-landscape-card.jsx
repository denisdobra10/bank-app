import React from 'react';
import LinkButton from '../link-button';

function PresentationLandscapeCard({ imageFirst = true, image, title, description, buttonText, toPath }) {
    return (
        <div className="flex flex-row w-full px-4 sm:px-32 py-4 justify-center items-center gap-8">
            {imageFirst ? (
                <>
                    <div className="flex w-[30%]">
                        <img src={image} alt="Component Image" className='transition-all hover:scale-105 ease-in-out duration-700' />
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-8 w-[60%]">
                        <h2 className='text-paragraph text-2xl sm:text-6xl'>{title}</h2>
                        <h3 className='text-paragraph text-sm sm:text-lg'>{description}</h3>
                        <LinkButton text={buttonText} to={toPath} />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col gap-4 sm:gap-8 w-[60%]">
                        <h2 className='text-paragraph text-2xl sm:text-6xl'>{title}</h2>
                        <h3 className='text-paragraph text-sm sm:text-lg'>{description}</h3>
                        <LinkButton text={buttonText} to={toPath} />
                    </div>
                    <div className="flex w-[30%]">
                        <img src={image} alt="Component Image" className='transition-all hover:scale-105 ease-in-out duration-700' />
                    </div>
                </>
            )}
        </div>
    );
}

export default PresentationLandscapeCard;
