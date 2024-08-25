import { Component, useContext } from "react"
import LightDarkMode from "../light-dark-mode"
import TicTacToe from "../tic-tac-toe"
import RandomColor from "../random-color"
import Accordian from "../accordian"
import TreeView from "../tree-view"
import { FeatureFlagContext } from "./context"
import FeatureFlagGlobalState from "./context"



export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView />
        },

    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags [getCurrentKey]
    }

    if (loading) return <h1>Loading Data! Please wait..</h1>

    return (
    <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map((componentItem) => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
        }
    </div>
    )
}