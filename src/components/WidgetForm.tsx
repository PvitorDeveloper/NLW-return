import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.svg'
import ideiaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from "react";

const feedbackTypes = {
    BUG: {
        title: 'Problema ',
        image: {
            src: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    }
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState <FeedbackType | null>(null);

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe aqui seu Feedback</span>
                <CloseButton></CloseButton>
            </header> 
               
            {!feedbackType ?  (<div className="flex py-8 gap-8 w-full">
                    { Object.entries(feedbackTypes).map(([key, value])=> {
                        return(
                            <button
                            key={key}   
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() => setFeedbackType(key as FeedbackType)}
                            >
                                <img src={value.image.src} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        );
                    }) }
                </div>) : 
                    <p>Ola</p>
                }

            <footer className="text-xs text-neutral-400">
                Feito com S2 <a className="underline underline-offset-2" href="https://github.com/PvitorDeveloper?tab=repositories" target='_blank'>Paulo Vieira</a>
            </footer>
        </div>
    )
}