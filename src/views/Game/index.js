import React from 'react';
import CharactorBox from './components/CharactorBox';
import DetailStatusDraggableBox from './components/DetailStatusDraggableBox';
import UpdateStatusDraggableBox from './components/UpdateStatusDraggableBox';
import BaggetDraggableBox from './components/BaggetDraggableBox';
import DetailSkillDraggableBox from './components/DetailSkillDraggableBox';

// import ButtonCreateCharacter from './components/ButtonCreateCharacter';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from "react-router-dom";
import gameDB from '../../db/game';

function GameView() {
    const person = useSelector(state => state.character);

    const dispatch = useDispatch();

    React.useEffect(() => {
        const character = gameDB.character.where("name").startsWithIgnoreCase('').toArray();

   
        if (person.name === null) {
            character.then(data => {
                console.log(data);
                if (data.length === 0) {
                    dispatch({ type: "NAME", payload: null })
                } else {
                    dispatch({ type: "NAME", payload: data[0].name });
                    dispatch({ type: "NEW_NAME", payload: data[0].newName });
                    dispatch({ type: "POINT_UPDATE_STATUS", payload: data[0].pointUpdateStatus });
                    dispatch({ type: "HEALTH_POINT_PROGRESS", payload: data[0].healthPointProgress });
                    dispatch({ type: "MAGIC_POINT_PROGRESS", payload: data[0].magicPointProgress });
                    dispatch({ type: "ENERGY_POINT_PROGRESS", payload: data[0].energyPointProgress });

                    //   status
                    dispatch({ type: "HEALTH_POINT_STATUS_STATE", payload: data[0].status.healthPointStatusState });
                    dispatch({ type: "HEALTH_POINT_STATUS_NOW", payload: data[0].status.healthPointStatusNow });
                    dispatch({ type: "HEALTH_POINT_STATUS_DEFAULT", payload: data[0].status.healthPointStatusDefault });

                    dispatch({ type: "MAGIC_POINT_STATUS_STATE", payload: data[0].status.magicPointStatusState });
                    dispatch({ type: "MAGIC_POINT_STATUS_NOW", payload: data[0].status.magicPointStatusNow });
                    dispatch({ type: "MAGIC_POINT_STATUS_DEFAULT", payload: data[0].status.magicPointStatusDefault });

                    dispatch({ type: "ENERGY_POINT_STATUS_STATE", payload: data[0].status.energyPointStatusState });
                    dispatch({ type: "ENERGY_POINT_STATUS_NOW", payload: data[0].status.energyPointStatusNow });
                    dispatch({ type: "ENERGY_POINT_STATUS_DEFAULT", payload: data[0].status.energyPointStatusDefault });

                    dispatch({ type: "ATTACK_POINT_STATUS_STATE", payload: data[0].status.attackPointStatusState });
                    dispatch({ type: "ATTACK_POINT_STATUS_DEFAULT", payload: data[0].status.attackPointStatusDefault });

                    dispatch({ type: "DEFENSE_POINT_STATUS_STATE", payload: data[0].status.defensePointStatusState });
                    dispatch({ type: "DEFENSE_POINT_STATUS_DEFAULT", payload: data[0].status.defensePointStatusDefault });

                    dispatch({ type: "SPEED_POINT_STATUS_STATE", payload: data[0].status.speedPointStatusState });
                    dispatch({ type: "SPEED_POINT_STATUS_DEFAULT", payload: data[0].status.speedPointStatusDefault });

                    dispatch({ type: "INTELLIGENCE_POINT_STATUS_STATE", payload: data[0].status.intelligencePointStatusState });
                    dispatch({ type: "INTELLIGENCE_POINT_STATUS_DEFAULT", payload: data[0].status.intelligencePointStatusDefault });
                }

            })

        }


    }, [dispatch, person]);

    return (
        <div className="game" style={{
            backgroundColor: "#3333"
        }}>
            <CharactorBox></CharactorBox>
            <DetailStatusDraggableBox></DetailStatusDraggableBox>
            <UpdateStatusDraggableBox></UpdateStatusDraggableBox>
            <BaggetDraggableBox></BaggetDraggableBox>
            <DetailSkillDraggableBox></DetailSkillDraggableBox>
        </div>)
}

export default GameView;