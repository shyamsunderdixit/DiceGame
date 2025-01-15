import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import { TotalScore } from "./TotalScore"
import { RoleDice } from "./RoleDice"


function GamePlay() {
    return (
        <Main>
            <div className="container">
                < TotalScore />
                < NumberSelector />
            </div>
            <RoleDice />
        </Main>
    )
}

export default GamePlay

const Main = styled.div`
    .container {
        margin: 64px auto;
        height: 151px;
        max-width: 1280px;
        display: flex;
        justify-content: space-between;
    }
`