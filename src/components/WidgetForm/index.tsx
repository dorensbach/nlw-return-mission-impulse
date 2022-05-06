import { useState } from "react";
import { FeedbackTypeStep }from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep }from "./Steps/FeedbackContentStep";

import bugImageUrl from "../../assets/img/bug.svg";
import ideaImageUrl from "../../assets/img/idea.svg";
import thoughtImageUrl from "../../assets/img/thought.svg";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt:'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt:'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title:'Outro',
        image: {
            source: thoughtImageUrl,
            alt:'Imagem de um balão de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-2" href="https://github.com/dorensbach">@dorensbach</a>
            </footer>
        </div>
    )
}
