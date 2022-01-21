import React from "react";
import './typeContainer.css';

const TypeContainer = ({ type }) => {
    const getColor = (type) => {
        switch (type) {
            case 'fire':
                return (
                    <div className="box fire">
                        <strong>Fire</strong>
                    </div>
                )
                break
            case 'normal':
                return (
                    <div className="box normal">
                        <strong>Normal</strong>
                    </div>
                )
                break
            case 'water':
                return (
                    <div className="box water">
                        <strong>Water</strong>
                    </div>
                )
                break
            case 'electric':
                return (
                    <div className="box electric">
                        <strong>Electric</strong>
                    </div>
                )
                break
            case 'grass':
                return (
                    <div className="box grass">
                        <strong>Grass</strong>
                    </div>
                )
                break
            case 'ice':
                return (
                    <div className="box ice">
                        <strong>Ice</strong>
                    </div>
                )
                break
            case 'fighting':
                return (
                    <div className="box fighting">
                        <strong>Fighting</strong>
                    </div>
                )
                break
            case 'poison':
                return (
                    <div className="box poison">
                        <strong>Poison</strong>
                    </div>
                )
                break
            case 'ground':
                return (
                    <div className="box ground">
                        <strong>Ground</strong>
                    </div>
                )
                break
            case 'flying':
                return (
                    <div className="box flying">
                        <strong>Flying</strong>
                    </div>
                )
                break
            case 'psychic':
                return (
                    <div className="box psychic">
                        <strong>Psychic</strong>
                    </div>
                )
                break
            case 'bug':
                return (
                    <div className="box bug">
                        <strong>Bug</strong>
                    </div>
                )
                break
            case 'rock':
                return (
                    <div className="box rock">
                        <strong>Rock</strong>
                    </div>
                )
                break
            case 'ghost':
                return (
                    <div className="box ghost">
                        <strong>Ghost</strong>
                    </div>
                )
                break
            case 'dragon':
                return (
                    <div className="box dragon">
                        <strong>Dragon</strong>
                    </div>
                )
                break
            case 'dark':
                return (
                    <div className="box dark">
                        <strong>Dark</strong>
                    </div>
                )
                break
            case 'steel':
                return (
                    <div className="box steel">
                        <strong>Steel</strong>
                    </div>
                )
                break
            case 'fairy':
                return (
                    <div className="box fairy">
                        <strong>Fairy</strong>
                    </div>
                )
                break
        }
    }
    return getColor(type)
}
export default TypeContainer