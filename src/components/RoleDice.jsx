import styled from "styled-components"

export const RoleDice = () => {
    return (
    <DiceContainer>
        <div>
            <img src="/images/dice/dice_1.png" alt="Dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
    )
}

const DiceContainer = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`