import React, { useEffect, useRef, useState } from "react"
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

// Following
// Interests
// Achievements
// Publishings
// Events
// Opinions
// News and Buzz
// Funny
// Got my attention
// Featured
// Spotlight

const wordList = [
    "TEXT"
]

const Experiment = () => {
    // const [idx, setIdx] = useState(0)
    // const [letter, setLetter] = useState(null)
    // //const [w, setW] = useState({ idx: 0, rest: word })
    // const lRef = useRef()
    const [word, setWord] = useState(wordList[0])

    useEffect(() => {
        const animationStart = (ev) => {
            console.log(ev.target.innerText)

            // No-Op wait.
            setTimeout(() => { console.log("Waiting ... ", ev.target.innerText) }, 1000)
        }
        const animationEnd = (el, ev, idx) => {
            el.removeEventListener("animationstart", animationStart)
            el.removeEventListener("animationend", animationEnd)

            if (idx === word.length - 1) {
                el.classList.add("text-red-500")
            } else {
                //el.classList.add("hidden")
            }
        }

        [...word].forEach((w, idx) => {
            const L = document.getElementById(`__L__${idx}`);
            setTimeout(() => {
                console.log("L .... ", L?.innerText)
                L?.classList.add("animate-bubble")
            }, idx * 1000)

            console.log("Adding event listener")
            L?.addEventListener('animationstart', animationStart);
            L?.addEventListener('animationend', (ev) => animationEnd(L, ev, idx));
        })
    }, [word])

    // The first time...
    // useEffect(() => {
    //     console.log("U S E -->", idx)
    //     if (idx < word.length) {
    //         console.log("IDx is --> ", idx)
    //         const l = word.substring(idx, idx + 1)
    //         console.log("IDx is --> ", idx, l)
    //         setLetter(l)
    //         //setIdx(i => i + 1)
    //     }
    // }, [idx])

    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <div class="flex h-full justify-center items-center">
                <div className="w-full h-full bg-transparent">
                    <TagCloud
                        style={{
                            display: "block",
                            fontFamily: 'opensans',
                            fontSize: 30,
                            fontWeight: 'bold',
                            //color: () => randomColor(),
                            padding: 5,
                            width: '100%',
                            height: '100%'
                        }}>
                        <div style={{ fontSize: 50 }}>react</div>
                        <div style={{ color: 'green' }}>tag</div>
                        <div rotate={90}>cloud</div>
                        <div style={{ fontSize: 50 }}>react</div>
                        <div style={{ color: 'green' }}>tag</div>
                        <div rotate={90}>cloud</div>
                        <div style={{ fontSize: 50 }}>react</div>
                        <div style={{ color: 'green' }}>tag</div>
                        <div rotate={90}>cloud</div>
                    </TagCloud>
                </div>
            </div>

            <div className="absolute top-0 left-0 bottom-0 right-0 flex z-10 justify-around bg-transparent">
                {[...word].map((l, idx) => {
                    //return window.setTimeout(() => {
                    return (<h2 key={idx} id={`__L__${idx}`} className="text-4xl z-10 text-gray-900 mx-3">{l}</h2>)
                    //}, 500)

                })}
            </div>

            {/* <h2 key={idx} id="__L__" className="absolute text-4xl text-gray-900 animate-bubble">{letter}</h2> */}
        </div >
    )
}

export default Experiment

const _Experiment = () => {
    const [idx, setIdx] = useState(0)
    const [letter, setLetter] = useState(null)
    //const [w, setW] = useState({ idx: 0, rest: word })
    const lRef = useRef()

    useEffect(() => {
        const animationStart = (ev) => {
            console.log(ev.target.innerText)

            // No-Op wait.
            setTimeout(() => { console.log("Waiting ... ", ev.target.innerText) }, 1000)
        }
        const animationEnd = (el, ev, idx) => {
            el.removeEventListener("animationstart", animationStart)
            el.removeEventListener("animationend", animationEnd)

            if (idx === word.length - 1) {
                el.classList.add("text-red-500")
            } else {
                //el.classList.add("hidden")
            }
        }

        [...word].forEach((w, idx) => {
            const L = document.getElementById(`__L__${idx}`);
            setTimeout(() => {
                console.log("L .... ", L.innerText)
                L?.classList.add("animate-bubble")
            }, idx * 1000)

            console.log("Adding event listener")
            L?.addEventListener('animationstart', animationStart);
            L?.addEventListener('animationend', (ev) => animationEnd(L, ev, idx));
        })
    }, [word])

    // The first time...
    // useEffect(() => {
    //     console.log("U S E -->", idx)
    //     if (idx < word.length) {
    //         console.log("IDx is --> ", idx)
    //         const l = word.substring(idx, idx + 1)
    //         console.log("IDx is --> ", idx, l)
    //         setLetter(l)
    //         //setIdx(i => i + 1)
    //     }
    // }, [idx])

    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            {/* <div class="flex h-full justify-start items-end">
                <div className="w-full h-full bg-red-200">
                    x
                </div>
                <div className="w-full h-full bg-yellow-500">
                    y
                </div>
            </div> */}
            <div className="absolute z-10 w-full bg-gray-800">
                <div class="relative">
                    <TagCloud
                        style={{
                            display: "block",
                            fontFamily: 'sans-serif',
                            fontSize: 30,
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            color: () => randomColor(),
                            padding: 5,
                            width: '100%',
                            height: '100%'
                        }}>
                        <div style={{ fontSize: 50 }}>react</div>
                        <div style={{ color: 'green' }}>tag</div>
                        <div rotate={90}>cloud</div>
                    </TagCloud>
                </div>
            </div>
            {/* <TagCloud
                    style={{
                        fontFamily: 'sans-serif',
                        fontSize: 30,
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        color: () => randomColor(),
                        padding: 5,
                        width: '100%',
                        height: '100%'
                    }}>
                    <div style={{ fontSize: 50 }}>react</div>
                    <div style={{ color: 'green' }}>tag</div>
                    <div rotate={90}>cloud</div>
                </TagCloud> */}

            {/* <BubbleLetter key={{ idx }} l={letter} /> */}

            <div className="flex flex-row z-1">
                {[...word].map((l, idx) => {
                    //return window.setTimeout(() => {
                    return (<h2 key={idx} id={`__L__${idx}`} className="text-4xl text-gray-900 mx-3">{l}</h2>)
                    //}, 500)

                })}
            </div>

            {/* <h2 key={idx} id="__L__" className="absolute text-4xl text-gray-900 animate-bubble">{letter}</h2> */}
        </div >
    )
}
