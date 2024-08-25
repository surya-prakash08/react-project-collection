import { useRef } from "react"




export default function ScrollToSection() {

    const ref = useRef()

    const data = [
        {
            label: 'First card',
            style: {
                width: "100%",
                height: '600px',
                background: 'pink'
            }
        },
        {
            label: 'Second card',
            style: {
                width: "100%",
                height: '600px',
                background: 'gray'
            }
        },
        {
            label: 'Third card',
            style: {
                width: "100%",
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fourth card',
            style: {
                width: "100%",
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fifth card',
            style: {
                width: "100%",
                height: '600px',
                background: 'purple'
            }
        }]

        function handleScrollToSection() {
            let pos = ref.current.getBoundingClientRect().top;
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            })
        }

    return <div>
        <h1>Scroll to a particular section</h1>
        <button onClick={handleScrollToSection}>Click to Scroll to section</button>
        {
            data.map((dataItem,index) => (<div ref={index === 3 ? ref : null} style={dataItem.style}>
                <h3>{dataItem.label}</h3>
            </div>))
        }
    </div>
}